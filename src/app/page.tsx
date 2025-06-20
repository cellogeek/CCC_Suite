
"use client";

import React, { useState, useEffect } from 'react';
import { Music, Settings, ListChecks } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"; // Assuming this path is correct
import { useAuth } from '@/contexts/AuthContext'; // Assuming this path is correct
import { getApiKey, saveApiKey } from '@/lib/actions'; // Assuming this path is correct

import { AppSettings } from '@/components/features/AppSettings';
import { SlideCreator } from '@/components/features/SlideCreator';
import { ChordProImporter } from '@/components/features/ChordProImporter';

// --- Main App Component ---
export default function App() {
  const [activeView, setActiveView] = useState('chordpro');
  // API key state is managed here and passed down
  const [apiKey, setApiKey] = useState(process.env.NEXT_PUBLIC_ESV_API_KEY || "4650182c3416ca7222ac852d5f671e6884cedabf");


  const NavLink = ({ view, label, icon: Icon }: { view: string, label: string, icon: React.ElementType }) => (
    <button onClick={() => setActiveView(view)}
      className={`flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg transition-colors duration-200 ${
        activeView === view ? 'bg-orange-500 text-white font-bold shadow-lg' : 'text-blue-200 hover:bg-white/10 hover:text-white'}`}>
      <Icon size={22} />
      <span>{label}</span>
    </button>
  );

  const renderActiveView = () => {
    switch (activeView) {
      case 'slideCreator': return <SlideCreator apiKey={apiKey} />;
      case 'chordpro': return <ChordProImporter />;
      case 'settings': return <AppSettings appApiKey={apiKey} setAppApiKey={setApiKey} />;
      default: return <ChordProImporter />;
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white">
       <style>{`
         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
         @import url('https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap');
         body { font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
         .font-mono { font-family: 'Fira Mono', monospace; }
         .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
         @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: rgba(255,255,255,0.1); border-radius: 10px; }
        ::-webkit-scrollbar-thumb { background: rgba(255,165,0,0.6); border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,165,0,0.8); }
       `}</style>
       <div className="flex flex-col md:flex-row min-h-screen">
         <aside className="w-full md:w-72 bg-black/20 p-4 md:p-6 flex-shrink-0 shadow-2xl">
           <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-orange-500 rounded-lg shadow-md">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
              </div>
             <h1 className="text-3xl font-extrabold tracking-tight">CCC <span className="text-orange-400">Suite</span></h1>
           </div>
           <nav className="space-y-2">
             <NavLink view="chordpro" label="ChordPro Editor" icon={Music} />
             <NavLink view="slideCreator" label="Slide Creator" icon={ListChecks} />
             <div className="pt-3 mt-3 border-t border-white/10">
                 <NavLink view="settings" label="Settings" icon={Settings} />
             </div>
           </nav>
         </aside>
         <main className="flex-1 p-4 sm:p-6 md:p-10 overflow-y-auto"> 
           {renderActiveView()}
         </main>
       </div>
    </div>
  );
}
