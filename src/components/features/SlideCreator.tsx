
"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { BookOpen, Download, Loader2, AlertCircle, ChevronsRight } from 'lucide-react';
import JSZip from 'jszip'; // Dependency: jszip for creating .zip archives (ProPresenter .proBundle files)
import { saveAs } from 'file-saver'; // Dependency: file-saver for triggering file downloads in the browser
import { useToast } from "@/hooks/use-toast";
import { fetchVerse as fetchVerseAction } from '@/lib/actions';
import { GlassCard } from '@/components/ui/GlassCard'; // Using existing GlassCard
import { Button } from '@/components/ui/button'; // Using ShadCN Button for consistency

// --- IMPORTANT: Protobuf Imports ---
// These imports are crucial for constructing the .pro file data.
// YOU MUST generate these JavaScript classes using 'protoc' from the .proto files
// (e.g., from greyshirtguy/ProPresenter7-Proto) and place them in 'src/generated/'.
// Example 'protoc' command (run from project root, adjust paths if needed):
// protoc --proto_path=./src/protos --js_out=library=myprotos_lib,binary:./src/generated ./src/protos/*.proto
// ---- START OF REQUIRED PROTOC-GENERATED FILE IMPORTS ----
import { Presentation } from '@/generated/rv_data_Presentation_pb';
import { Cue } from '@/generated/rv_data_Cue_pb';
import { Action, Action_ActionType } from '@/generated/rv_data_Action_pb';
import { Slide } from '@/generated/rv_data_Slide_pb';
import { Element, Element_ElementType, Element_ImageData, Element_TextData } from '@/generated/rv_data_Graphics_pb';
import { Color } from '@/generated/rv_data_Color_pb';
import { URL as ProtobufURL } from '@/generated/rv_data_URL_pb'; // Renamed to avoid conflict with browser URL
import { Point } from '@/generated/rv_data_Point_pb';
import { UUID } from '@/generated/rv_data_UUID_pb';
import { Arrangement } from '@/generated/rv_data_Arrangement_pb';
import { CueGroup } from '@/generated/rv_data_CueGroup_pb';
// ---- END OF REQUIRED PROTOC-GENERATED FILE IMPORTS ----


// --- Utility Functions ---
const generateUuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

const getChurchLogoImageData = async (): Promise<Uint8Array> => {
    // This is a minimal, transparent 1x1 GIF for demonstration.
    // REPLACE THIS with your actual church logo (e.g., 1.jpg) loaded as a Uint8Array or Blob.
    // For a Next.js app, you might fetch this from the /public directory.
    // Example:
    // const response = await fetch('/Media/Assets/1.jpg'); // Ensure 1.jpg is in /public/Media/Assets/
    // const imageBlob = await response.arrayBuffer();
    // return new Uint8Array(imageBlob);
    const CHURCH_LOGO_IMAGE_BASE64 = 'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    const binaryString = atob(CHURCH_LOGO_IMAGE_BASE64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
};


// --- Main SlideCreator Component (formerly SermonBuilder) ---
interface SlideDataItem {
    type: 'logo' | 'title' | 'scripture';
    content: string;
    rtf?: string; // Will be generated
    width: number;
    height: number;
    position_x: number;
    position_y: number;
}

const InputField = ({ label, value, onChange, placeholder, type = 'text', rows = 1, disabled = false }: {label: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, placeholder: string, type?: string, rows?: number, disabled?: boolean}) => (
    <div>
        <label className="block text-sm font-medium text-blue-200 mb-2">{label}</label>
        {rows > 1 ? (
            <textarea
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={rows}
                disabled={disabled}
                className="w-full p-3 bg-white/10 rounded-lg text-white placeholder-blue-300/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-shadow disabled:opacity-70"
            />
        ) : (
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className="w-full p-3 bg-white/10 rounded-lg text-white placeholder-blue-300/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-shadow disabled:opacity-70"
            />
        )}
    </div>
);

export const SlideCreator = ({ apiKey }: { apiKey: string }) => {
    const { toast } = useToast();
    const [title, setTitle] = useState("YOUR SINS ARE FORGIVEN");
    const [verseRef, setVerseRef] = useState("MARK 2:1-12");
    const [passageQuery, setPassageQuery] = useState("Mark 2:1-12");
    const [rawVerseText, setRawVerseText] = useState("");
    const [slidesData, setSlidesData] = useState<SlideDataItem[]>([]);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleFetchScripture = async () => {
        if (!passageQuery) return;
        if (!apiKey) {
            setError("Please enter your ESV API Key in Settings.");
            toast({ title: "API Key Missing", description: "Please set your ESV API Key in Settings.", variant: "destructive" });
            return;
        }
        setIsLoading(true);
        setError('');
        setRawVerseText("");
        setSlidesData([]);

        try {
            const actionResponse = await fetchVerseAction(passageQuery, apiKey);
            if (actionResponse.success && actionResponse.data) {
                let passageText = actionResponse.data;
                const query = actionResponse.query || passageQuery;
                if (passageText.toLowerCase().startsWith(query.toLowerCase())) {
                   passageText = passageText.substring(query.length).trim();
                }
                passageText = passageText.replace(/\(ESV\)$/i, "").trim();
                setRawVerseText(passageText);
                toast({ title: "Success!", description: "Scripture fetched. Processing slides..."});
            } else {
                const errorMessage = actionResponse.error || `Failed to fetch ${passageQuery}.`;
                setError(errorMessage);
                toast({ title: "Fetch Error", description: errorMessage, variant: "destructive"});
            }
        } catch (err: any) {
            setError(`Failed to fetch scripture: ${err.message}`);
            toast({ title: "Fetch Error", description: err.message || "An unexpected error occurred.", variant: "destructive"});
        } finally {
            setIsLoading(false);
        }
    };

    const processAndGenerateSlides = useCallback(() => {
        if (!rawVerseText) return;

        const verses = rawVerseText.replace(/\[/g, "").replace(/\]/g, " ").split('\n').map(v => v.trim()).filter(Boolean);
        let verseGroups: string[][] = [];
        let currentGroup: string[] = [];
        const targetGroupSize = 3;

        for (let i = 0; i < verses.length; i++) {
            currentGroup.push(verses[i]);
            const remainingVerses = verses.length - (i + 1);

            if (currentGroup.length >= targetGroupSize) {
                if (remainingVerses === 1 && i + 1 < verses.length) {
                    currentGroup.push(verses[++i]);
                    verseGroups.push(currentGroup);
                    currentGroup = [];
                } else if (currentGroup.length === 2 && remainingVerses === 2 && verses.length === 4 && i + 1 < verses.length) {
                     currentGroup.push(verses[++i]);
                     verseGroups.push(currentGroup);
                     currentGroup = [];
                }
                 else {
                    verseGroups.push(currentGroup);
                    currentGroup = [];
                }
            }
        }
        if (currentGroup.length > 0) {
            if (currentGroup.length === 1 && verseGroups.length > 0) {
                const lastExistingGroup = verseGroups.pop();
                if(lastExistingGroup) verseGroups.push([...lastExistingGroup, ...currentGroup]);
                else verseGroups.push(currentGroup); // Should not happen if length > 0
            } else {
                verseGroups.push(currentGroup);
            }
        }

        const allSlides: SlideDataItem[] = [];
        allSlides.push({ type: 'logo', content: 'Church Logo', width: 1280, height: 720, position_x: 0, position_y: 0 });
        allSlides.push({ type: 'title', content: `${title}\n${verseRef}`, width: 1180, height: 720, position_x: 50, position_y: 0 });
        verseGroups.forEach(group => {
            allSlides.push({ type: 'scripture', content: group.join('\n\n'), width: 1180, height: 720, position_x: 50, position_y: 0 });
        });
        allSlides.push({ type: 'logo', content: 'Church Logo', width: 1280, height: 720, position_x: 0, position_y: 0 });

        setSlidesData(allSlides);
        setActiveSlideIndex(0);
        if (allSlides.length > 0) {
            toast({ title: "Slides Processed", description: `${allSlides.length} slides ready for preview and download.` });
        }
    }, [rawVerseText, title, verseRef, toast]);

    useEffect(() => {
        if (rawVerseText) {
            processAndGenerateSlides();
        }
    }, [rawVerseText, processAndGenerateSlides]);

    const fitTextToFrame = useCallback((ctx: CanvasRenderingContext2D, text: string, maxWidth: number, maxHeight: number): { lines: string[], fontSize: number } => {
        const fontMinPt = 39;
        const fontMaxPt = 49;
        const safeWidthRatio = 0.98;

        for (let pt = fontMaxPt; pt >= fontMinPt; pt -= 1) {
            ctx.font = `bold ${pt}pt Verdana`;
            const lineHeight = pt * 1.5;
            const words = text.split(/\s+/).filter(Boolean);
            if (words.length === 0) return { lines: [], fontSize: pt };

            let lines: string[] = [];
            let currentLine = words[0];

            for (let i = 1; i < words.length; i++) {
                const word = words[i];
                const testLine = currentLine + " " + word;
                const width = ctx.measureText(testLine).width;
                if (width < maxWidth * safeWidthRatio) {
                    currentLine = testLine;
                } else {
                    lines.push(currentLine);
                    currentLine = word;
                }
            }
            lines.push(currentLine);

            let validLines = true;
            if (lines.length > 1) {
                for (let i = 0; i < lines.length; i++) {
                    const lineWords = lines[i].split(/\s+/).filter(Boolean);
                    if (lineWords.length < 2) {
                        validLines = false;
                        break;
                    }
                }
            }
            if (!validLines) continue;

            if (lines.length * lineHeight <= maxHeight) {
                return { lines, fontSize: pt };
            }
        }

        ctx.font = `bold ${fontMinPt}pt Verdana`;
        let finalLines: string[] = [];
        let finalCurrentLine = text.split(/\s+/).filter(Boolean)[0] || "";
        const finalWords = text.split(/\s+/).filter(Boolean);

        for (let i = 1; i < finalWords.length; i++) {
            const word = finalWords[i];
            const testLine = finalCurrentLine + " " + word;
            const width = ctx.measureText(testLine).width;
            if (width < maxWidth * safeWidthRatio) {
                finalCurrentLine = testLine;
            } else {
                finalLines.push(finalCurrentLine);
                finalCurrentLine = word;
            }
        }
        finalLines.push(finalCurrentLine);
        return { lines: finalLines, fontSize: fontMinPt };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || slidesData.length === 0) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);

        const slideWidth = 1280;
        const slideHeight = 720;
        const scaleFactor = canvas.clientWidth / slideWidth;

        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width / dpr , canvas.height / dpr); // Use scaled width/height for fillRect

        ctx.save();
        ctx.scale(scaleFactor, scaleFactor);

        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';

        const slide = slidesData[activeSlideIndex];

        if (slide.type === 'logo') {
            ctx.font = 'bold 50pt Verdana';
            ctx.fillText('[ Church Logo Image ]', slideWidth / 2, slideHeight / 2 - 20);
            ctx.font = '20pt Verdana';
            ctx.fillText('Media/Assets/1.jpg', slideWidth / 2, slideHeight / 2 + 30);
        } else if (slide.type === 'title') {
            const [titleText, refText] = slide.content.split('\n');
            ctx.font = 'bold 66pt Verdana';
            ctx.fillText(titleText || "", slideWidth / 2, slideHeight / 2 - 90);
            ctx.font = 'bold 40pt Verdana';
            ctx.fillText(refText || "", slideWidth / 2, slideHeight / 2 + 20);
        } else if (slide.type === 'scripture') {
            const textFrameWidth = slide.width;
            const textFrameHeight = slide.height;
            const textFrameX = slide.position_x;
            const textFrameY = slide.position_y;
            const plainTextForMeasurement = slide.content.replace(/(\d+)\s/g, '');
            const { lines, fontSize } = fitTextToFrame(ctx, plainTextForMeasurement, textFrameWidth, textFrameHeight);

            ctx.font = `bold ${fontSize}pt Verdana`;
            const lineHeight = fontSize * 1.5;
            const totalTextHeight = lines.length * lineHeight;
            let currentLineY = textFrameY + (textFrameHeight - totalTextHeight) / 2;

            lines.forEach(line => {
                const trimmedLine = line.trim();
                const verseNumberMatch = trimmedLine.match(/^(\d+)/);
                const verseNumber = verseNumberMatch ? verseNumberMatch[1] : '';
                const textOnly = trimmedLine.replace(/^(\d+)\s*/, '');
                const textX = textFrameX + textFrameWidth / 2;

                if (verseNumber) {
                    const originalFont = ctx.font;
                    ctx.font = `bold ${fontSize * 0.6}pt Verdana`;
                    const numWidth = ctx.measureText(verseNumber).width;
                    const textContentWidth = ctx.measureText(textOnly).width;
                    const combinedStartX = textX - (numWidth + textContentWidth) / 2;
                    ctx.fillText(verseNumber, combinedStartX + numWidth / 2, currentLineY - (fontSize * 0.3));
                    ctx.font = originalFont;
                    ctx.fillText(textOnly, combinedStartX + numWidth + ctx.measureText(" ").width/2 , currentLineY);

                } else {
                    ctx.fillText(trimmedLine, textX, currentLineY);
                }
                currentLineY += lineHeight;
            });
        }
        ctx.restore();
    }, [slidesData, activeSlideIndex, fitTextToFrame]);

    const generateRtfForSlide = useCallback((slide: SlideDataItem): string => {
        const rtfHeader = `{\\rtf1\\ansi\\ansicpg1252\\deff0{\\fonttbl{\\f0 Verdana-Bold;}}`;
        const colorTbl = `{\\colortbl;\\red255\\green255\\blue255;}`;
        const rtfFooter = `}`;
        let contentRtf = '';

        if (slide.type === 'logo') return "";

        if (slide.type === 'title') {
            const [titleText, refText] = slide.content.split('\n');
            const titleFs = 132; // 66pt
            const refFs = 80;    // 40pt
            contentRtf = `\\pard\\qc\\f0\\b\\fs${titleFs}\\cf1 ${titleText || ""}\\par\\par\\fs${refFs}\\cf1 ${refText || ""}\\par`;
        } else if (slide.type === 'scripture') {
            const dummyCanvas = document.createElement('canvas');
            const dummyCtx = dummyCanvas.getContext('2d');
            if (!dummyCtx) return `${rtfHeader}${colorTbl}${rtfFooter}`; // Should not happen
            const plainTextForMeasurement = slide.content.replace(/(\d+\s)/g, '');
            const { fontSize } = fitTextToFrame(dummyCtx, plainTextForMeasurement, slide.width, slide.height);
            const rtfFontSize = fontSize * 2;

            const verses = slide.content.split('\n\n');
            const verseRtf = verses.map(verse => {
                const verseNumberMatch = verse.match(/^(\d+)/);
                const verseNumber = verseNumberMatch ? verseNumberMatch[1] : '';
                const textOnly = verse.replace(/^(\d+)\s/, '').trim();
                if (verseNumber) {
                    return `\\pard\\qc\\f0\\b\\fs${rtfFontSize}\\cf1 {\\super ${verseNumber}}\\nosupersub  ${textOnly}\\par`;
                }
                return `\\pard\\qc\\f0\\b\\fs${rtfFontSize}\\cf1 ${textOnly}\\par`;
            }).join('\\par');
            contentRtf = verseRtf;
        }
        return `${rtfHeader}${colorTbl}${contentRtf}${rtfFooter}`;
    }, [fitTextToFrame]);

    const generateProBundle = useCallback(async () => {
        if (slidesData.length === 0) {
             toast({ title: "No Slides", description: "Please fetch scripture and generate slides first.", variant: "destructive" });
            return;
        }
        setIsLoading(true);
        setError('');
        try {
            // --- IMPORTANT ---
            // The following Protobuf object creation assumes you have run 'protoc'
            // and the generated JS files (Presentation_pb.js, Cue_pb.js, etc.)
            // are correctly imported from '@/generated/'.
            // If these files are missing, this section WILL FAIL.
            // --- --- ---
            
            if (typeof Presentation === 'undefined' || typeof Cue === 'undefined' /* ... add checks for all imported protobuf classes */) {
                const protoMissingError = "Protobuf JS files are missing. Please generate them using 'protoc' and place them in 'src/generated/'. Bundle creation aborted.";
                setError(protoMissingError);
                toast({ title: "ProPresenter Export Error", description: protoMissingError, variant: "destructive" });
                setIsLoading(false);
                return;
            }

            const presentationUuidStr = generateUuid();
            const presentation = new Presentation();
            try {
                 presentation.setUuid(UUID.deserializeBinary(Uint8Array.from(presentationUuidStr.replace(/-/g, '').match(/.{2}/g)?.map(byte => parseInt(byte, 16)) || [])));
            } catch (e) { console.error("Error setting presentation UUID", e); throw e;}
            presentation.setName((verseRef || "Sermon").replace(/[:\s]/g, '_') + "_Presentation");
            presentation.setSlidewidth(1280.0);
            presentation.setSlideheight(720.0);

            const generatedCueUuids: string[] = [];
            const blackColor = new Color();
            blackColor.setRed(0); blackColor.setGreen(0); blackColor.setBlue(0); blackColor.setAlpha(1);

            for (const slideDataItem of slidesData) {
                const cueUuidStr = generateUuid();
                const actionUuidStr = generateUuid();
                const slideContentUuidStr = generateUuid();
                const elementUuidStr = generateUuid();

                const cueUuid = UUID.deserializeBinary(Uint8Array.from(cueUuidStr.replace(/-/g, '').match(/.{2}/g)?.map(byte => parseInt(byte, 16)) || []));
                const actionUuid = UUID.deserializeBinary(Uint8Array.from(actionUuidStr.replace(/-/g, '').match(/.{2}/g)?.map(byte => parseInt(byte, 16)) || []));
                const slideContentUuid = UUID.deserializeBinary(Uint8Array.from(slideContentUuidStr.replace(/-/g, '').match(/.{2}/g)?.map(byte => parseInt(byte, 16)) || []));
                const elementUuid = UUID.deserializeBinary(Uint8Array.from(elementUuidStr.replace(/-/g, '').match(/.{2}/g)?.map(byte => parseInt(byte, 16)) || []));

                const cue = new Cue();
                cue.setUuid(cueUuid);
                cue.setName(slideDataItem.type === 'logo' ? 'Logo Slide' : slideDataItem.type === 'title' ? 'Title Slide' : `Scripture: ${slideDataItem.content.split('\n')[0].substring(0, 30)}...`);
                generatedCueUuids.push(cueUuidStr);

                const action = new Action();
                action.setUuid(actionUuid);
                action.setActiontype(Action_ActionType.ACTION_TYPE_PRESENTATION_SLIDE);

                const proSlide = new Slide(); // Renamed to avoid conflict
                proSlide.setUuid(slideContentUuid);
                proSlide.setBackgroundcolor(blackColor);

                const element = new Element();
                element.setUuid(elementUuid);
                const position = new Point();
                position.setX(slideDataItem.position_x);
                position.setY(slideDataItem.position_y);
                element.setPosition(position);
                element.setWidth(slideDataItem.width);
                element.setHeight(slideDataItem.height);

                if (slideDataItem.type === 'logo') {
                    element.setElementtype(Element_ElementType.ELEMENT_TYPE_IMAGE);
                    const imageData = new Element_ImageData();
                    const imageUrl = new ProtobufURL();
                    imageUrl.setPath("Media/Assets/1.jpg");
                    imageData.setSource(imageUrl);
                    element.setImage(imageData);
                } else {
                    element.setElementtype(Element_ElementType.ELEMENT_TYPE_TEXT);
                    const textData = new Element_TextData();
                    const rtfContent = generateRtfForSlide(slideDataItem);
                    textData.setRtfdata(new TextEncoder().encode(rtfContent));
                    element.setText(textData);
                }
                proSlide.addElements(element);
                action.setSlide(proSlide);
                cue.addActions(action);
                presentation.addCues(cue);
            }

            const cueGroupUuidStr = generateUuid();
            const cueGroupUuid = UUID.deserializeBinary(Uint8Array.from(cueGroupUuidStr.replace(/-/g, '').match(/.{2}/g)?.map(byte => parseInt(byte, 16)) || []));
            const cueGroup = new CueGroup();
            cueGroup.setUuid(cueGroupUuid);
            cueGroup.setName("Default Group");
            cueGroup.setColor(blackColor);
            cueGroup.setCueIdentifiersList(generatedCueUuids.map(uuidStr => UUID.deserializeBinary(Uint8Array.from(uuidStr.replace(/-/g, '').match(/.{2}/g)?.map(byte => parseInt(byte, 16)) || []))));
            presentation.addCueGroups(cueGroup);

            const arrangementUuidStr = generateUuid();
            const arrangementUuid = UUID.deserializeBinary(Uint8Array.from(arrangementUuidStr.replace(/-/g, '').match(/.{2}/g)?.map(byte => parseInt(byte, 16)) || []));
            const arrangement = new Arrangement();
            arrangement.setUuid(arrangementUuid);
            arrangement.setName("Default");
            arrangement.addGroupIdentifiers(cueGroupUuid); // Add by UUID object
            presentation.addArrangements(arrangement);
            presentation.setSelectedarrangement(arrangementUuid);

            const proFileBinaryData = presentation.serializeBinary();
            const zip = new JSZip();
            const bundleFileName = `${(verseRef || "Sermon").replace(/[:\s]/g, '_')}_Presentation.pro`;
            zip.file(bundleFileName, proFileBinaryData);
            const assetsFolder = zip.folder("Media")?.folder("Assets"); // Optional chaining
            const logoImageData = await getChurchLogoImageData();
            assetsFolder?.file("1.jpg", logoImageData);

            const bundleBlob = await zip.generateAsync({ type: "blob", compression: "DEFLATE", compressionOptions: { level: 9 } });
            saveAs(bundleBlob, `${(verseRef || "Sermon").replace(/[:\s]/g, '_')}.proBundle`);
            toast({ title: "Download Complete", description: "ProPresenter bundle generated." });

        } catch (err: any) {
            console.error("Error generating ProBundle:", err);
            setError(`Failed to generate bundle: ${err.message}. Check console for details. Ensure Protobuf files are generated and correctly placed in src/generated/.`);
            toast({ title: "ProPresenter Export Error", description: `Failed to generate bundle: ${err.message}. Ensure Protobuf files are set up.`, variant: "destructive", duration: 10000 });
        } finally {
            setIsLoading(false);
        }
    }, [slidesData, verseRef, title, generateRtfForSlide, fitTextToFrame, toast]);


    return (
        <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <BookOpen size={32} className="text-orange-400" /> Slide Creator
                <span className="text-sm font-normal text-blue-300 ml-2">(ProPresenter 7.14+ Compatible)</span>
            </h2>
            <p className="text-sm text-amber-400 bg-amber-900/30 p-3 rounded-md">
              <AlertCircle size={18} className="inline mr-2" />
              <strong>Important:</strong> For ProPresenter Bundle export to work, you must first generate JavaScript Protobuf files using 'protoc' and place them in the 'src/generated/' directory. See code comments for details.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                    <GlassCard>
                        <h3 className="text-xl font-semibold text-white mb-4">1. Presentation Details</h3>
                        <div className="space-y-4">
                            <InputField label="Sermon Title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., Your Sins Are Forgiven" disabled={isLoading} />
                            <InputField label="Title Slide Verse Reference" value={verseRef} onChange={(e) => setVerseRef(e.target.value)} placeholder="e.g., Mark 2:1-12" disabled={isLoading} />
                        </div>
                    </GlassCard>
                    <GlassCard>
                        <h3 className="text-xl font-semibold text-white mb-4">2. Fetch Scripture</h3>
                        <div className="space-y-4">
                            <InputField label="ESV Passage Query" value={passageQuery} onChange={(e) => setPassageQuery(e.target.value)} placeholder="e.g., John 3:16-21; Romans 8:1" disabled={isLoading} />
                            <Button onClick={handleFetchScripture} disabled={!passageQuery || !apiKey || isLoading} className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-primary-foreground">
                                {isLoading && rawVerseText === "" ? <Loader2 size={18} className="animate-spin mr-2" /> : <ChevronsRight size={18} className="mr-2" />}
                                {isLoading && rawVerseText === "" ? 'Fetching...' : 'Fetch & Process Slides'}
                            </Button>
                            {error && <div className="text-red-400 bg-red-900/50 p-3 rounded-lg flex items-center gap-2"><AlertCircle size={18} />{error}</div>}
                        </div>
                    </GlassCard>
                    <GlassCard>
                        <h3 className="text-xl font-semibold text-white mb-4">3. Download</h3>
                        <p className="text-blue-200 mb-4 text-sm">This will download a `.proBundle` file containing your presentation. Ensure you have generated the Protobuf files.</p>
                        <Button onClick={generateProBundle} disabled={slidesData.length === 0 || isLoading} className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-primary-foreground">
                            {isLoading && slidesData.length > 0 ? <Loader2 size={18} className="animate-spin mr-2" /> : <Download size={18} className="mr-2" />}
                            {isLoading && slidesData.length > 0 ? 'Generating Bundle...' : 'Download ProPresenter Bundle'}
                        </Button>
                    </GlassCard>
                </div>

                <GlassCard className="lg:h-full flex flex-col">
                    <h3 className="text-xl font-semibold text-white mb-4">4. Live Preview</h3>
                    <div className="aspect-[16/9] bg-black rounded-lg overflow-hidden shadow-inner border border-white/20">
                        <canvas ref={canvasRef} className="w-full h-full"></canvas>
                    </div>
                    {slidesData.length > 0 && (
                        <div className="flex items-center justify-between mt-4">
                            <Button onClick={() => setActiveSlideIndex(i => Math.max(0, i - 1))} disabled={activeSlideIndex === 0 || isLoading} variant="outline">Prev</Button>
                            <div className="text-center text-blue-200">
                                <p className="font-semibold">Slide {activeSlideIndex + 1} of {slidesData.length}</p>
                                <p className="text-sm capitalize">{slidesData[activeSlideIndex]?.type}</p>
                            </div>
                            <Button onClick={() => setActiveSlideIndex(i => Math.min(slidesData.length - 1, i + 1))} disabled={activeSlideIndex === slidesData.length - 1 || isLoading} variant="outline">Next</Button>
                        </div>
                    )}
                     {slidesData.length === 0 && !isLoading && (
                        <div className="text-center text-blue-300 mt-10">
                            <BookOpen size={48} className="mx-auto mb-4 opacity-50" />
                            <p>Preview will appear here once slides are generated.</p>
                        </div>
                    )}
                </GlassCard>
            </div>
        </div>
    );
};

