// source: slide.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.rv.data.Slide');
goog.provide('proto.rv.data.Slide.Element');
goog.provide('proto.rv.data.Slide.Element.Build');
goog.provide('proto.rv.data.Slide.Element.Build.Start');
goog.provide('proto.rv.data.Slide.Element.ChildBuild');
goog.provide('proto.rv.data.Slide.Element.DataLink');
goog.provide('proto.rv.data.Slide.Element.DataLink.AlternateElementFill');
goog.provide('proto.rv.data.Slide.Element.DataLink.AlternateElementText');
goog.provide('proto.rv.data.Slide.Element.DataLink.AlternateElementText.TextTransformOption');
goog.provide('proto.rv.data.Slide.Element.DataLink.AudioCountdown');
goog.provide('proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining');
goog.provide('proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining.AutoAdvanceSource');
goog.provide('proto.rv.data.Slide.Element.DataLink.CCLIText');
goog.provide('proto.rv.data.Slide.Element.DataLink.CaptureStatusColor');
goog.provide('proto.rv.data.Slide.Element.DataLink.CaptureStatusText');
goog.provide('proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime');
goog.provide('proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText');
goog.provide('proto.rv.data.Slide.Element.DataLink.CaptureStatusText.TexttypeCase');
goog.provide('proto.rv.data.Slide.Element.DataLink.ChordChart');
goog.provide('proto.rv.data.Slide.Element.DataLink.ChordProChart');
goog.provide('proto.rv.data.Slide.Element.DataLink.ClockText');
goog.provide('proto.rv.data.Slide.Element.DataLink.ColorTrigger');
goog.provide('proto.rv.data.Slide.Element.DataLink.FileFeed');
goog.provide('proto.rv.data.Slide.Element.DataLink.GroupColor');
goog.provide('proto.rv.data.Slide.Element.DataLink.GroupName');
goog.provide('proto.rv.data.Slide.Element.DataLink.GroupSourceType');
goog.provide('proto.rv.data.Slide.Element.DataLink.OutputScreen');
goog.provide('proto.rv.data.Slide.Element.DataLink.PCOLive');
goog.provide('proto.rv.data.Slide.Element.DataLink.PCOLive.CountdownType');
goog.provide('proto.rv.data.Slide.Element.DataLink.PCOLive.Theme');
goog.provide('proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier');
goog.provide('proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.Destination');
goog.provide('proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.Type');
goog.provide('proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText');
goog.provide('proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name');
goog.provide('proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.TexttypeCase');
goog.provide('proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time');
goog.provide('proto.rv.data.Slide.Element.DataLink.PlaylistItem');
goog.provide('proto.rv.data.Slide.Element.DataLink.PlaylistItem.PlaylistItemSourceType');
goog.provide('proto.rv.data.Slide.Element.DataLink.Presentation');
goog.provide('proto.rv.data.Slide.Element.DataLink.Presentation.PresentationSource');
goog.provide('proto.rv.data.Slide.Element.DataLink.PresentationNotes');
goog.provide('proto.rv.data.Slide.Element.DataLink.PropertytypeCase');
goog.provide('proto.rv.data.Slide.Element.DataLink.RSSFeed');
goog.provide('proto.rv.data.Slide.Element.DataLink.RSSFeed.ContentType');
goog.provide('proto.rv.data.Slide.Element.DataLink.SlideCount');
goog.provide('proto.rv.data.Slide.Element.DataLink.SlideCount.SlideCountSourceType');
goog.provide('proto.rv.data.Slide.Element.DataLink.SlideImage');
goog.provide('proto.rv.data.Slide.Element.DataLink.SlideLabelColor');
goog.provide('proto.rv.data.Slide.Element.DataLink.SlideLabelSource');
goog.provide('proto.rv.data.Slide.Element.DataLink.SlideLabelText');
goog.provide('proto.rv.data.Slide.Element.DataLink.SlideSourceType');
goog.provide('proto.rv.data.Slide.Element.DataLink.SlideText');
goog.provide('proto.rv.data.Slide.Element.DataLink.SlideText.TextSourceOption');
goog.provide('proto.rv.data.Slide.Element.DataLink.StageMessage');
goog.provide('proto.rv.data.Slide.Element.DataLink.Ticker');
goog.provide('proto.rv.data.Slide.Element.DataLink.Ticker.FileType');
goog.provide('proto.rv.data.Slide.Element.DataLink.Ticker.RSSType');
goog.provide('proto.rv.data.Slide.Element.DataLink.Ticker.RSSType.ContentType');
goog.provide('proto.rv.data.Slide.Element.DataLink.Ticker.SourcetypeCase');
goog.provide('proto.rv.data.Slide.Element.DataLink.Ticker.TextType');
goog.provide('proto.rv.data.Slide.Element.DataLink.TimecodeStatus');
goog.provide('proto.rv.data.Slide.Element.DataLink.TimecodeText');
goog.provide('proto.rv.data.Slide.Element.DataLink.TimerText');
goog.provide('proto.rv.data.Slide.Element.DataLink.VideoCountdown');
goog.provide('proto.rv.data.Slide.Element.DataLink.VideoCountdown.VideoCountdownSource');
goog.provide('proto.rv.data.Slide.Element.DataLink.VisibilityLink');
goog.provide('proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition');
goog.provide('proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility');
goog.provide('proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility.AudioCountdownVisibilityCriterion');
goog.provide('proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility');
goog.provide('proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility.CaptureSessionVisibilityCriterion');
goog.provide('proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ConditiontypeCase');
goog.provide('proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility');
goog.provide('proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.ElementVisibilityCriterion');
goog.provide('proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility');
goog.provide('proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.TimerVisibilityCriterion');
goog.provide('proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility');
goog.provide('proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility.VideoCountdownVisibilityCriterion');
goog.provide('proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility');
goog.provide('proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility.VideoInputVisibilityCriterion');
goog.provide('proto.rv.data.Slide.Element.DataLink.VisibilityLink.VisibilityCriterion');
goog.provide('proto.rv.data.Slide.Element.Info');
goog.provide('proto.rv.data.Slide.Element.TextRevealType');
goog.provide('proto.rv.data.Slide.Element.TextScroller');
goog.provide('proto.rv.data.Slide.Element.TextScroller.Direction');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.rv.data.AlignmentGuide');
goog.require('proto.rv.data.Clock.Format');
goog.require('proto.rv.data.Color');
goog.require('proto.rv.data.Graphics.Element');
goog.require('proto.rv.data.Graphics.Size');
goog.require('proto.rv.data.Timer.Format');
goog.require('proto.rv.data.Transition');
goog.require('proto.rv.data.URL');
goog.require('proto.rv.data.UUID');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.Slide.repeatedFields_, null);
};
goog.inherits(proto.rv.data.Slide, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.displayName = 'proto.rv.data.Slide';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.Slide.Element.repeatedFields_, null);
};
goog.inherits(proto.rv.data.Slide.Element, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.displayName = 'proto.rv.data.Slide.Element';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.Build = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.Build, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.Build.displayName = 'proto.rv.data.Slide.Element.Build';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.ChildBuild = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.ChildBuild, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.ChildBuild.displayName = 'proto.rv.data.Slide.Element.ChildBuild';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.Slide.Element.DataLink.oneofGroups_);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.displayName = 'proto.rv.data.Slide.Element.DataLink';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.RSSFeed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.RSSFeed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.RSSFeed.displayName = 'proto.rv.data.Slide.Element.DataLink.RSSFeed';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.FileFeed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.FileFeed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.FileFeed.displayName = 'proto.rv.data.Slide.Element.DataLink.FileFeed';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.Ticker = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.Slide.Element.DataLink.Ticker.oneofGroups_);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.Ticker, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.Ticker.displayName = 'proto.rv.data.Slide.Element.DataLink.Ticker';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.Ticker.TextType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.Ticker.TextType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.Ticker.TextType.displayName = 'proto.rv.data.Slide.Element.DataLink.Ticker.TextType';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.Ticker.RSSType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.Ticker.RSSType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.Ticker.RSSType.displayName = 'proto.rv.data.Slide.Element.DataLink.Ticker.RSSType';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.Ticker.FileType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.Ticker.FileType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.Ticker.FileType.displayName = 'proto.rv.data.Slide.Element.DataLink.Ticker.FileType';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementText = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.AlternateElementText, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.AlternateElementText.displayName = 'proto.rv.data.Slide.Element.DataLink.AlternateElementText';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.CCLIText = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.CCLIText, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.CCLIText.displayName = 'proto.rv.data.Slide.Element.DataLink.CCLIText';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.ColorTrigger = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.ColorTrigger, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.ColorTrigger.displayName = 'proto.rv.data.Slide.Element.DataLink.ColorTrigger';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.TimerText = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.Slide.Element.DataLink.TimerText.repeatedFields_, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.TimerText, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.TimerText.displayName = 'proto.rv.data.Slide.Element.DataLink.TimerText';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.ClockText = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.ClockText, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.ClockText.displayName = 'proto.rv.data.Slide.Element.DataLink.ClockText';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.ChordChart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.ChordChart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.ChordChart.displayName = 'proto.rv.data.Slide.Element.DataLink.ChordChart';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.OutputScreen = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.OutputScreen, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.OutputScreen.displayName = 'proto.rv.data.Slide.Element.DataLink.OutputScreen';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.PCOLive = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.PCOLive, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.PCOLive.displayName = 'proto.rv.data.Slide.Element.DataLink.PCOLive';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementFill = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.AlternateElementFill, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.AlternateElementFill.displayName = 'proto.rv.data.Slide.Element.DataLink.AlternateElementFill';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.Slide.Element.DataLink.VisibilityLink.repeatedFields_, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.VisibilityLink, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.VisibilityLink.displayName = 'proto.rv.data.Slide.Element.DataLink.VisibilityLink';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.oneofGroups_);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.displayName = 'proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.displayName = 'proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.displayName = 'proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility.displayName = 'proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility.displayName = 'proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility.displayName = 'proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility.displayName = 'proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.SlideText = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.SlideText, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.SlideText.displayName = 'proto.rv.data.Slide.Element.DataLink.SlideText';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.SlideImage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.SlideImage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.SlideImage.displayName = 'proto.rv.data.Slide.Element.DataLink.SlideImage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.StageMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.StageMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.StageMessage.displayName = 'proto.rv.data.Slide.Element.DataLink.StageMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.VideoCountdown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.Slide.Element.DataLink.VideoCountdown.repeatedFields_, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.VideoCountdown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.VideoCountdown.displayName = 'proto.rv.data.Slide.Element.DataLink.VideoCountdown';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.AudioCountdown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.Slide.Element.DataLink.AudioCountdown.repeatedFields_, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.AudioCountdown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.AudioCountdown.displayName = 'proto.rv.data.Slide.Element.DataLink.AudioCountdown';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.GroupName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.GroupName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.GroupName.displayName = 'proto.rv.data.Slide.Element.DataLink.GroupName';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.GroupColor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.GroupColor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.GroupColor.displayName = 'proto.rv.data.Slide.Element.DataLink.GroupColor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.SlideLabelText = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.SlideLabelText, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.SlideLabelText.displayName = 'proto.rv.data.Slide.Element.DataLink.SlideLabelText';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.SlideLabelColor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.SlideLabelColor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.SlideLabelColor.displayName = 'proto.rv.data.Slide.Element.DataLink.SlideLabelColor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.PresentationNotes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.PresentationNotes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.PresentationNotes.displayName = 'proto.rv.data.Slide.Element.DataLink.PresentationNotes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.Presentation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.Presentation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.Presentation.displayName = 'proto.rv.data.Slide.Element.DataLink.Presentation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.PlaylistItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.PlaylistItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.PlaylistItem.displayName = 'proto.rv.data.Slide.Element.DataLink.PlaylistItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining.displayName = 'proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.Slide.Element.DataLink.CaptureStatusText.oneofGroups_);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.CaptureStatusText, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.CaptureStatusText.displayName = 'proto.rv.data.Slide.Element.DataLink.CaptureStatusText';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText.displayName = 'proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime.displayName = 'proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusColor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.CaptureStatusColor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.CaptureStatusColor.displayName = 'proto.rv.data.Slide.Element.DataLink.CaptureStatusColor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.SlideCount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.SlideCount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.SlideCount.displayName = 'proto.rv.data.Slide.Element.DataLink.SlideCount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.displayName = 'proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.oneofGroups_);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.displayName = 'proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name.displayName = 'proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time.displayName = 'proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.ChordProChart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.ChordProChart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.ChordProChart.displayName = 'proto.rv.data.Slide.Element.DataLink.ChordProChart';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.TimecodeText = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.TimecodeText, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.TimecodeText.displayName = 'proto.rv.data.Slide.Element.DataLink.TimecodeText';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.DataLink.TimecodeStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.DataLink.TimecodeStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.DataLink.TimecodeStatus.displayName = 'proto.rv.data.Slide.Element.DataLink.TimecodeStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rv.data.Slide.Element.TextScroller = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Slide.Element.TextScroller, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Slide.Element.TextScroller.displayName = 'proto.rv.data.Slide.Element.TextScroller';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.Slide.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.toObject = function(includeInstance, msg) {
  var f, obj = {
elementsList: jspb.Message.toObjectList(msg.getElementsList(),
    proto.rv.data.Slide.Element.toObject, includeInstance),
elementBuildOrderList: jspb.Message.toObjectList(msg.getElementBuildOrderList(),
    proto.rv.data.UUID.toObject, includeInstance),
guidelinesList: jspb.Message.toObjectList(msg.getGuidelinesList(),
    proto.rv.data.AlignmentGuide.toObject, includeInstance),
drawsBackgroundColor: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
backgroundColor: (f = msg.getBackgroundColor()) && proto.rv.data.Color.toObject(includeInstance, f),
size: (f = msg.getSize()) && proto.rv.data.Graphics.Size.toObject(includeInstance, f),
uuid: (f = msg.getUuid()) && proto.rv.data.UUID.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide}
 */
proto.rv.data.Slide.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide;
  return proto.rv.data.Slide.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide}
 */
proto.rv.data.Slide.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Slide.Element;
      reader.readMessage(value,proto.rv.data.Slide.Element.deserializeBinaryFromReader);
      msg.addElements(value);
      break;
    case 2:
      var value = new proto.rv.data.UUID;
      reader.readMessage(value,proto.rv.data.UUID.deserializeBinaryFromReader);
      msg.addElementBuildOrder(value);
      break;
    case 3:
      var value = new proto.rv.data.AlignmentGuide;
      reader.readMessage(value,proto.rv.data.AlignmentGuide.deserializeBinaryFromReader);
      msg.addGuidelines(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDrawsBackgroundColor(value);
      break;
    case 5:
      var value = new proto.rv.data.Color;
      reader.readMessage(value,proto.rv.data.Color.deserializeBinaryFromReader);
      msg.setBackgroundColor(value);
      break;
    case 6:
      var value = new proto.rv.data.Graphics.Size;
      reader.readMessage(value,proto.rv.data.Graphics.Size.deserializeBinaryFromReader);
      msg.setSize(value);
      break;
    case 7:
      var value = new proto.rv.data.UUID;
      reader.readMessage(value,proto.rv.data.UUID.deserializeBinaryFromReader);
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.rv.data.Slide.Element.serializeBinaryToWriter
    );
  }
  f = message.getElementBuildOrderList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.rv.data.UUID.serializeBinaryToWriter
    );
  }
  f = message.getGuidelinesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.rv.data.AlignmentGuide.serializeBinaryToWriter
    );
  }
  f = message.getDrawsBackgroundColor();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getBackgroundColor();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.data.Color.serializeBinaryToWriter
    );
  }
  f = message.getSize();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.rv.data.Graphics.Size.serializeBinaryToWriter
    );
  }
  f = message.getUuid();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.rv.data.UUID.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.Slide.Element.repeatedFields_ = [6,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.toObject = function(includeInstance, msg) {
  var f, obj = {
element: (f = msg.getElement()) && proto.rv.data.Graphics.Element.toObject(includeInstance, f),
buildIn: (f = msg.getBuildIn()) && proto.rv.data.Slide.Element.Build.toObject(includeInstance, f),
buildOut: (f = msg.getBuildOut()) && proto.rv.data.Slide.Element.Build.toObject(includeInstance, f),
info: jspb.Message.getFieldWithDefault(msg, 4, 0),
revealType: jspb.Message.getFieldWithDefault(msg, 5, 0),
dataLinksList: jspb.Message.toObjectList(msg.getDataLinksList(),
    proto.rv.data.Slide.Element.DataLink.toObject, includeInstance),
childbuildsList: jspb.Message.toObjectList(msg.getChildbuildsList(),
    proto.rv.data.Slide.Element.ChildBuild.toObject, includeInstance),
revealFromIndex: jspb.Message.getFieldWithDefault(msg, 8, 0),
textScroller: (f = msg.getTextScroller()) && proto.rv.data.Slide.Element.TextScroller.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element}
 */
proto.rv.data.Slide.Element.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element;
  return proto.rv.data.Slide.Element.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element}
 */
proto.rv.data.Slide.Element.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Graphics.Element;
      reader.readMessage(value,proto.rv.data.Graphics.Element.deserializeBinaryFromReader);
      msg.setElement(value);
      break;
    case 2:
      var value = new proto.rv.data.Slide.Element.Build;
      reader.readMessage(value,proto.rv.data.Slide.Element.Build.deserializeBinaryFromReader);
      msg.setBuildIn(value);
      break;
    case 3:
      var value = new proto.rv.data.Slide.Element.Build;
      reader.readMessage(value,proto.rv.data.Slide.Element.Build.deserializeBinaryFromReader);
      msg.setBuildOut(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setInfo(value);
      break;
    case 5:
      var value = /** @type {!proto.rv.data.Slide.Element.TextRevealType} */ (reader.readEnum());
      msg.setRevealType(value);
      break;
    case 6:
      var value = new proto.rv.data.Slide.Element.DataLink;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.deserializeBinaryFromReader);
      msg.addDataLinks(value);
      break;
    case 7:
      var value = new proto.rv.data.Slide.Element.ChildBuild;
      reader.readMessage(value,proto.rv.data.Slide.Element.ChildBuild.deserializeBinaryFromReader);
      msg.addChildbuilds(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRevealFromIndex(value);
      break;
    case 9:
      var value = new proto.rv.data.Slide.Element.TextScroller;
      reader.readMessage(value,proto.rv.data.Slide.Element.TextScroller.deserializeBinaryFromReader);
      msg.setTextScroller(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElement();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Graphics.Element.serializeBinaryToWriter
    );
  }
  f = message.getBuildIn();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.Slide.Element.Build.serializeBinaryToWriter
    );
  }
  f = message.getBuildOut();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.Slide.Element.Build.serializeBinaryToWriter
    );
  }
  f = message.getInfo();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getRevealType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getDataLinksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.rv.data.Slide.Element.DataLink.serializeBinaryToWriter
    );
  }
  f = message.getChildbuildsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.rv.data.Slide.Element.ChildBuild.serializeBinaryToWriter
    );
  }
  f = message.getRevealFromIndex();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getTextScroller();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.rv.data.Slide.Element.TextScroller.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.TextRevealType = {
  TEXT_REVEAL_TYPE_NONE: 0,
  TEXT_REVEAL_TYPE_BULLET: 1,
  TEXT_REVEAL_TYPE_UNDERLINE: 2
};

/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.Info = {
  INFO_NONE: 0,
  INFO_IS_TEMPLATE_ELEMENT: 1,
  INFO_IS_TEXT_ELEMENT: 2,
  INFO_IS_TEXT_TICKER: 4
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.Build.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.Build.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.Build} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.Build.toObject = function(includeInstance, msg) {
  var f, obj = {
uuid: (f = msg.getUuid()) && proto.rv.data.UUID.toObject(includeInstance, f),
elementuuid: (f = msg.getElementuuid()) && proto.rv.data.UUID.toObject(includeInstance, f),
start: jspb.Message.getFieldWithDefault(msg, 3, 0),
delaytime: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
transition: (f = msg.getTransition()) && proto.rv.data.Transition.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.Build}
 */
proto.rv.data.Slide.Element.Build.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.Build;
  return proto.rv.data.Slide.Element.Build.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.Build} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.Build}
 */
proto.rv.data.Slide.Element.Build.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.UUID;
      reader.readMessage(value,proto.rv.data.UUID.deserializeBinaryFromReader);
      msg.setUuid(value);
      break;
    case 2:
      var value = new proto.rv.data.UUID;
      reader.readMessage(value,proto.rv.data.UUID.deserializeBinaryFromReader);
      msg.setElementuuid(value);
      break;
    case 3:
      var value = /** @type {!proto.rv.data.Slide.Element.Build.Start} */ (reader.readEnum());
      msg.setStart(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDelaytime(value);
      break;
    case 5:
      var value = new proto.rv.data.Transition;
      reader.readMessage(value,proto.rv.data.Transition.deserializeBinaryFromReader);
      msg.setTransition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.Build.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.Build.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.Build} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.Build.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.UUID.serializeBinaryToWriter
    );
  }
  f = message.getElementuuid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.UUID.serializeBinaryToWriter
    );
  }
  f = message.getStart();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getDelaytime();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getTransition();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.data.Transition.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.Build.Start = {
  START_ON_CLICK: 0,
  START_WITH_PREVIOUS: 1,
  START_AFTER_PREVIOUS: 2,
  START_WITH_SLIDE: 3
};

/**
 * optional UUID uuid = 1;
 * @return {?proto.rv.data.UUID}
 */
proto.rv.data.Slide.Element.Build.prototype.getUuid = function() {
  return /** @type{?proto.rv.data.UUID} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.UUID, 1));
};


/**
 * @param {?proto.rv.data.UUID|undefined} value
 * @return {!proto.rv.data.Slide.Element.Build} returns this
*/
proto.rv.data.Slide.Element.Build.prototype.setUuid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.Build} returns this
 */
proto.rv.data.Slide.Element.Build.prototype.clearUuid = function() {
  return this.setUuid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.Build.prototype.hasUuid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UUID elementUUID = 2;
 * @return {?proto.rv.data.UUID}
 */
proto.rv.data.Slide.Element.Build.prototype.getElementuuid = function() {
  return /** @type{?proto.rv.data.UUID} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.UUID, 2));
};


/**
 * @param {?proto.rv.data.UUID|undefined} value
 * @return {!proto.rv.data.Slide.Element.Build} returns this
*/
proto.rv.data.Slide.Element.Build.prototype.setElementuuid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.Build} returns this
 */
proto.rv.data.Slide.Element.Build.prototype.clearElementuuid = function() {
  return this.setElementuuid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.Build.prototype.hasElementuuid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Start start = 3;
 * @return {!proto.rv.data.Slide.Element.Build.Start}
 */
proto.rv.data.Slide.Element.Build.prototype.getStart = function() {
  return /** @type {!proto.rv.data.Slide.Element.Build.Start} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.Build.Start} value
 * @return {!proto.rv.data.Slide.Element.Build} returns this
 */
proto.rv.data.Slide.Element.Build.prototype.setStart = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional double delayTime = 4;
 * @return {number}
 */
proto.rv.data.Slide.Element.Build.prototype.getDelaytime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Slide.Element.Build} returns this
 */
proto.rv.data.Slide.Element.Build.prototype.setDelaytime = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional Transition transition = 5;
 * @return {?proto.rv.data.Transition}
 */
proto.rv.data.Slide.Element.Build.prototype.getTransition = function() {
  return /** @type{?proto.rv.data.Transition} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Transition, 5));
};


/**
 * @param {?proto.rv.data.Transition|undefined} value
 * @return {!proto.rv.data.Slide.Element.Build} returns this
*/
proto.rv.data.Slide.Element.Build.prototype.setTransition = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.Build} returns this
 */
proto.rv.data.Slide.Element.Build.prototype.clearTransition = function() {
  return this.setTransition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.Build.prototype.hasTransition = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.ChildBuild.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.ChildBuild.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.ChildBuild} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.ChildBuild.toObject = function(includeInstance, msg) {
  var f, obj = {
uuid: (f = msg.getUuid()) && proto.rv.data.UUID.toObject(includeInstance, f),
start: jspb.Message.getFieldWithDefault(msg, 2, 0),
delaytime: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
index: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.ChildBuild}
 */
proto.rv.data.Slide.Element.ChildBuild.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.ChildBuild;
  return proto.rv.data.Slide.Element.ChildBuild.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.ChildBuild} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.ChildBuild}
 */
proto.rv.data.Slide.Element.ChildBuild.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.UUID;
      reader.readMessage(value,proto.rv.data.UUID.deserializeBinaryFromReader);
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {!proto.rv.data.Slide.Element.Build.Start} */ (reader.readEnum());
      msg.setStart(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDelaytime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.ChildBuild.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.ChildBuild.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.ChildBuild} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.ChildBuild.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.UUID.serializeBinaryToWriter
    );
  }
  f = message.getStart();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getDelaytime();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional UUID uuid = 1;
 * @return {?proto.rv.data.UUID}
 */
proto.rv.data.Slide.Element.ChildBuild.prototype.getUuid = function() {
  return /** @type{?proto.rv.data.UUID} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.UUID, 1));
};


/**
 * @param {?proto.rv.data.UUID|undefined} value
 * @return {!proto.rv.data.Slide.Element.ChildBuild} returns this
*/
proto.rv.data.Slide.Element.ChildBuild.prototype.setUuid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.ChildBuild} returns this
 */
proto.rv.data.Slide.Element.ChildBuild.prototype.clearUuid = function() {
  return this.setUuid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.ChildBuild.prototype.hasUuid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Build.Start start = 2;
 * @return {!proto.rv.data.Slide.Element.Build.Start}
 */
proto.rv.data.Slide.Element.ChildBuild.prototype.getStart = function() {
  return /** @type {!proto.rv.data.Slide.Element.Build.Start} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.Build.Start} value
 * @return {!proto.rv.data.Slide.Element.ChildBuild} returns this
 */
proto.rv.data.Slide.Element.ChildBuild.prototype.setStart = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional double delayTime = 3;
 * @return {number}
 */
proto.rv.data.Slide.Element.ChildBuild.prototype.getDelaytime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Slide.Element.ChildBuild} returns this
 */
proto.rv.data.Slide.Element.ChildBuild.prototype.setDelaytime = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional uint32 index = 4;
 * @return {number}
 */
proto.rv.data.Slide.Element.ChildBuild.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Slide.Element.ChildBuild} returns this
 */
proto.rv.data.Slide.Element.ChildBuild.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.Slide.Element.DataLink.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,33,34]];

/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.PropertytypeCase = {
  PROPERTYTYPE_NOT_SET: 0,
  TICKER: 1,
  ALTERNATE_TEXT: 2,
  TIMER_TEXT: 3,
  CLOCK_TEXT: 4,
  CHORD_CHART: 5,
  OUTPUT_SCREEN: 6,
  PCO_LIVE: 7,
  ALTERNATE_FILL: 8,
  VISIBILITY_LINK: 9,
  SLIDE_TEXT: 10,
  STAGE_MESSAGE: 11,
  VIDEO_COUNTDOWN: 12,
  SLIDE_IMAGE: 13,
  CCLI_TEXT: 14,
  GROUP_NAME: 15,
  GROUP_COLOR: 16,
  PRESENTATION_NOTES: 17,
  PLAYLIST_ITEM: 18,
  AUTO_ADVANCE_TIME_REMAINING: 19,
  CAPTURE_STATUS_TEXT: 20,
  CAPTURE_STATUS_COLOR: 21,
  SLIDE_COUNT: 22,
  AUDIO_COUNTDOWN: 23,
  PRESENTATION: 24,
  SLIDE_LABEL_TEXT: 25,
  SLIDE_LABEL_COLOR: 26,
  RSS_FEED: 27,
  FILE_FEED: 28,
  CHORD_PRO_CHART: 29,
  PLAYBACK_MARKER_TEXT: 30,
  PLAYBACK_MARKER_COLOR: 32,
  TIMECODE_TEXT: 33,
  TIMECODE_STATUS: 34
};

/**
 * @return {proto.rv.data.Slide.Element.DataLink.PropertytypeCase}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getPropertytypeCase = function() {
  return /** @type {proto.rv.data.Slide.Element.DataLink.PropertytypeCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.toObject = function(includeInstance, msg) {
  var f, obj = {
ticker: (f = msg.getTicker()) && proto.rv.data.Slide.Element.DataLink.Ticker.toObject(includeInstance, f),
alternateText: (f = msg.getAlternateText()) && proto.rv.data.Slide.Element.DataLink.AlternateElementText.toObject(includeInstance, f),
timerText: (f = msg.getTimerText()) && proto.rv.data.Slide.Element.DataLink.TimerText.toObject(includeInstance, f),
clockText: (f = msg.getClockText()) && proto.rv.data.Slide.Element.DataLink.ClockText.toObject(includeInstance, f),
chordChart: (f = msg.getChordChart()) && proto.rv.data.Slide.Element.DataLink.ChordChart.toObject(includeInstance, f),
outputScreen: (f = msg.getOutputScreen()) && proto.rv.data.Slide.Element.DataLink.OutputScreen.toObject(includeInstance, f),
pcoLive: (f = msg.getPcoLive()) && proto.rv.data.Slide.Element.DataLink.PCOLive.toObject(includeInstance, f),
alternateFill: (f = msg.getAlternateFill()) && proto.rv.data.Slide.Element.DataLink.AlternateElementFill.toObject(includeInstance, f),
visibilityLink: (f = msg.getVisibilityLink()) && proto.rv.data.Slide.Element.DataLink.VisibilityLink.toObject(includeInstance, f),
slideText: (f = msg.getSlideText()) && proto.rv.data.Slide.Element.DataLink.SlideText.toObject(includeInstance, f),
stageMessage: (f = msg.getStageMessage()) && proto.rv.data.Slide.Element.DataLink.StageMessage.toObject(includeInstance, f),
videoCountdown: (f = msg.getVideoCountdown()) && proto.rv.data.Slide.Element.DataLink.VideoCountdown.toObject(includeInstance, f),
slideImage: (f = msg.getSlideImage()) && proto.rv.data.Slide.Element.DataLink.SlideImage.toObject(includeInstance, f),
ccliText: (f = msg.getCcliText()) && proto.rv.data.Slide.Element.DataLink.CCLIText.toObject(includeInstance, f),
groupName: (f = msg.getGroupName()) && proto.rv.data.Slide.Element.DataLink.GroupName.toObject(includeInstance, f),
groupColor: (f = msg.getGroupColor()) && proto.rv.data.Slide.Element.DataLink.GroupColor.toObject(includeInstance, f),
presentationNotes: (f = msg.getPresentationNotes()) && proto.rv.data.Slide.Element.DataLink.PresentationNotes.toObject(includeInstance, f),
playlistItem: (f = msg.getPlaylistItem()) && proto.rv.data.Slide.Element.DataLink.PlaylistItem.toObject(includeInstance, f),
autoAdvanceTimeRemaining: (f = msg.getAutoAdvanceTimeRemaining()) && proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining.toObject(includeInstance, f),
captureStatusText: (f = msg.getCaptureStatusText()) && proto.rv.data.Slide.Element.DataLink.CaptureStatusText.toObject(includeInstance, f),
captureStatusColor: (f = msg.getCaptureStatusColor()) && proto.rv.data.Slide.Element.DataLink.CaptureStatusColor.toObject(includeInstance, f),
slideCount: (f = msg.getSlideCount()) && proto.rv.data.Slide.Element.DataLink.SlideCount.toObject(includeInstance, f),
audioCountdown: (f = msg.getAudioCountdown()) && proto.rv.data.Slide.Element.DataLink.AudioCountdown.toObject(includeInstance, f),
presentation: (f = msg.getPresentation()) && proto.rv.data.Slide.Element.DataLink.Presentation.toObject(includeInstance, f),
slideLabelText: (f = msg.getSlideLabelText()) && proto.rv.data.Slide.Element.DataLink.SlideLabelText.toObject(includeInstance, f),
slideLabelColor: (f = msg.getSlideLabelColor()) && proto.rv.data.Slide.Element.DataLink.SlideLabelColor.toObject(includeInstance, f),
rssFeed: (f = msg.getRssFeed()) && proto.rv.data.Slide.Element.DataLink.RSSFeed.toObject(includeInstance, f),
fileFeed: (f = msg.getFileFeed()) && proto.rv.data.Slide.Element.DataLink.FileFeed.toObject(includeInstance, f),
chordProChart: (f = msg.getChordProChart()) && proto.rv.data.Slide.Element.DataLink.ChordProChart.toObject(includeInstance, f),
playbackMarkerText: (f = msg.getPlaybackMarkerText()) && proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.toObject(includeInstance, f),
playbackMarkerColor: (f = msg.getPlaybackMarkerColor()) && proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.toObject(includeInstance, f),
timecodeText: (f = msg.getTimecodeText()) && proto.rv.data.Slide.Element.DataLink.TimecodeText.toObject(includeInstance, f),
timecodeStatus: (f = msg.getTimecodeStatus()) && proto.rv.data.Slide.Element.DataLink.TimecodeStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink}
 */
proto.rv.data.Slide.Element.DataLink.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink;
  return proto.rv.data.Slide.Element.DataLink.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink}
 */
proto.rv.data.Slide.Element.DataLink.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Slide.Element.DataLink.Ticker;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.Ticker.deserializeBinaryFromReader);
      msg.setTicker(value);
      break;
    case 2:
      var value = new proto.rv.data.Slide.Element.DataLink.AlternateElementText;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.AlternateElementText.deserializeBinaryFromReader);
      msg.setAlternateText(value);
      break;
    case 3:
      var value = new proto.rv.data.Slide.Element.DataLink.TimerText;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.TimerText.deserializeBinaryFromReader);
      msg.setTimerText(value);
      break;
    case 4:
      var value = new proto.rv.data.Slide.Element.DataLink.ClockText;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.ClockText.deserializeBinaryFromReader);
      msg.setClockText(value);
      break;
    case 5:
      var value = new proto.rv.data.Slide.Element.DataLink.ChordChart;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.ChordChart.deserializeBinaryFromReader);
      msg.setChordChart(value);
      break;
    case 6:
      var value = new proto.rv.data.Slide.Element.DataLink.OutputScreen;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.OutputScreen.deserializeBinaryFromReader);
      msg.setOutputScreen(value);
      break;
    case 7:
      var value = new proto.rv.data.Slide.Element.DataLink.PCOLive;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.PCOLive.deserializeBinaryFromReader);
      msg.setPcoLive(value);
      break;
    case 8:
      var value = new proto.rv.data.Slide.Element.DataLink.AlternateElementFill;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.AlternateElementFill.deserializeBinaryFromReader);
      msg.setAlternateFill(value);
      break;
    case 9:
      var value = new proto.rv.data.Slide.Element.DataLink.VisibilityLink;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.VisibilityLink.deserializeBinaryFromReader);
      msg.setVisibilityLink(value);
      break;
    case 10:
      var value = new proto.rv.data.Slide.Element.DataLink.SlideText;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.SlideText.deserializeBinaryFromReader);
      msg.setSlideText(value);
      break;
    case 11:
      var value = new proto.rv.data.Slide.Element.DataLink.StageMessage;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.StageMessage.deserializeBinaryFromReader);
      msg.setStageMessage(value);
      break;
    case 12:
      var value = new proto.rv.data.Slide.Element.DataLink.VideoCountdown;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.VideoCountdown.deserializeBinaryFromReader);
      msg.setVideoCountdown(value);
      break;
    case 13:
      var value = new proto.rv.data.Slide.Element.DataLink.SlideImage;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.SlideImage.deserializeBinaryFromReader);
      msg.setSlideImage(value);
      break;
    case 14:
      var value = new proto.rv.data.Slide.Element.DataLink.CCLIText;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.CCLIText.deserializeBinaryFromReader);
      msg.setCcliText(value);
      break;
    case 15:
      var value = new proto.rv.data.Slide.Element.DataLink.GroupName;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.GroupName.deserializeBinaryFromReader);
      msg.setGroupName(value);
      break;
    case 16:
      var value = new proto.rv.data.Slide.Element.DataLink.GroupColor;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.GroupColor.deserializeBinaryFromReader);
      msg.setGroupColor(value);
      break;
    case 17:
      var value = new proto.rv.data.Slide.Element.DataLink.PresentationNotes;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.PresentationNotes.deserializeBinaryFromReader);
      msg.setPresentationNotes(value);
      break;
    case 18:
      var value = new proto.rv.data.Slide.Element.DataLink.PlaylistItem;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.PlaylistItem.deserializeBinaryFromReader);
      msg.setPlaylistItem(value);
      break;
    case 19:
      var value = new proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining.deserializeBinaryFromReader);
      msg.setAutoAdvanceTimeRemaining(value);
      break;
    case 20:
      var value = new proto.rv.data.Slide.Element.DataLink.CaptureStatusText;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.CaptureStatusText.deserializeBinaryFromReader);
      msg.setCaptureStatusText(value);
      break;
    case 21:
      var value = new proto.rv.data.Slide.Element.DataLink.CaptureStatusColor;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.CaptureStatusColor.deserializeBinaryFromReader);
      msg.setCaptureStatusColor(value);
      break;
    case 22:
      var value = new proto.rv.data.Slide.Element.DataLink.SlideCount;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.SlideCount.deserializeBinaryFromReader);
      msg.setSlideCount(value);
      break;
    case 23:
      var value = new proto.rv.data.Slide.Element.DataLink.AudioCountdown;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.AudioCountdown.deserializeBinaryFromReader);
      msg.setAudioCountdown(value);
      break;
    case 24:
      var value = new proto.rv.data.Slide.Element.DataLink.Presentation;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.Presentation.deserializeBinaryFromReader);
      msg.setPresentation(value);
      break;
    case 25:
      var value = new proto.rv.data.Slide.Element.DataLink.SlideLabelText;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.SlideLabelText.deserializeBinaryFromReader);
      msg.setSlideLabelText(value);
      break;
    case 26:
      var value = new proto.rv.data.Slide.Element.DataLink.SlideLabelColor;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.SlideLabelColor.deserializeBinaryFromReader);
      msg.setSlideLabelColor(value);
      break;
    case 27:
      var value = new proto.rv.data.Slide.Element.DataLink.RSSFeed;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.RSSFeed.deserializeBinaryFromReader);
      msg.setRssFeed(value);
      break;
    case 28:
      var value = new proto.rv.data.Slide.Element.DataLink.FileFeed;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.FileFeed.deserializeBinaryFromReader);
      msg.setFileFeed(value);
      break;
    case 29:
      var value = new proto.rv.data.Slide.Element.DataLink.ChordProChart;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.ChordProChart.deserializeBinaryFromReader);
      msg.setChordProChart(value);
      break;
    case 30:
      var value = new proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.deserializeBinaryFromReader);
      msg.setPlaybackMarkerText(value);
      break;
    case 32:
      var value = new proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.deserializeBinaryFromReader);
      msg.setPlaybackMarkerColor(value);
      break;
    case 33:
      var value = new proto.rv.data.Slide.Element.DataLink.TimecodeText;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.TimecodeText.deserializeBinaryFromReader);
      msg.setTimecodeText(value);
      break;
    case 34:
      var value = new proto.rv.data.Slide.Element.DataLink.TimecodeStatus;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.TimecodeStatus.deserializeBinaryFromReader);
      msg.setTimecodeStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicker();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Slide.Element.DataLink.Ticker.serializeBinaryToWriter
    );
  }
  f = message.getAlternateText();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.Slide.Element.DataLink.AlternateElementText.serializeBinaryToWriter
    );
  }
  f = message.getTimerText();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.Slide.Element.DataLink.TimerText.serializeBinaryToWriter
    );
  }
  f = message.getClockText();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.data.Slide.Element.DataLink.ClockText.serializeBinaryToWriter
    );
  }
  f = message.getChordChart();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.data.Slide.Element.DataLink.ChordChart.serializeBinaryToWriter
    );
  }
  f = message.getOutputScreen();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.rv.data.Slide.Element.DataLink.OutputScreen.serializeBinaryToWriter
    );
  }
  f = message.getPcoLive();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.rv.data.Slide.Element.DataLink.PCOLive.serializeBinaryToWriter
    );
  }
  f = message.getAlternateFill();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.rv.data.Slide.Element.DataLink.AlternateElementFill.serializeBinaryToWriter
    );
  }
  f = message.getVisibilityLink();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.rv.data.Slide.Element.DataLink.VisibilityLink.serializeBinaryToWriter
    );
  }
  f = message.getSlideText();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.rv.data.Slide.Element.DataLink.SlideText.serializeBinaryToWriter
    );
  }
  f = message.getStageMessage();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.rv.data.Slide.Element.DataLink.StageMessage.serializeBinaryToWriter
    );
  }
  f = message.getVideoCountdown();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.rv.data.Slide.Element.DataLink.VideoCountdown.serializeBinaryToWriter
    );
  }
  f = message.getSlideImage();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.rv.data.Slide.Element.DataLink.SlideImage.serializeBinaryToWriter
    );
  }
  f = message.getCcliText();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.rv.data.Slide.Element.DataLink.CCLIText.serializeBinaryToWriter
    );
  }
  f = message.getGroupName();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.rv.data.Slide.Element.DataLink.GroupName.serializeBinaryToWriter
    );
  }
  f = message.getGroupColor();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.rv.data.Slide.Element.DataLink.GroupColor.serializeBinaryToWriter
    );
  }
  f = message.getPresentationNotes();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.rv.data.Slide.Element.DataLink.PresentationNotes.serializeBinaryToWriter
    );
  }
  f = message.getPlaylistItem();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.rv.data.Slide.Element.DataLink.PlaylistItem.serializeBinaryToWriter
    );
  }
  f = message.getAutoAdvanceTimeRemaining();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining.serializeBinaryToWriter
    );
  }
  f = message.getCaptureStatusText();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.rv.data.Slide.Element.DataLink.CaptureStatusText.serializeBinaryToWriter
    );
  }
  f = message.getCaptureStatusColor();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.rv.data.Slide.Element.DataLink.CaptureStatusColor.serializeBinaryToWriter
    );
  }
  f = message.getSlideCount();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.rv.data.Slide.Element.DataLink.SlideCount.serializeBinaryToWriter
    );
  }
  f = message.getAudioCountdown();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.rv.data.Slide.Element.DataLink.AudioCountdown.serializeBinaryToWriter
    );
  }
  f = message.getPresentation();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.rv.data.Slide.Element.DataLink.Presentation.serializeBinaryToWriter
    );
  }
  f = message.getSlideLabelText();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.rv.data.Slide.Element.DataLink.SlideLabelText.serializeBinaryToWriter
    );
  }
  f = message.getSlideLabelColor();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.rv.data.Slide.Element.DataLink.SlideLabelColor.serializeBinaryToWriter
    );
  }
  f = message.getRssFeed();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.rv.data.Slide.Element.DataLink.RSSFeed.serializeBinaryToWriter
    );
  }
  f = message.getFileFeed();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.rv.data.Slide.Element.DataLink.FileFeed.serializeBinaryToWriter
    );
  }
  f = message.getChordProChart();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.rv.data.Slide.Element.DataLink.ChordProChart.serializeBinaryToWriter
    );
  }
  f = message.getPlaybackMarkerText();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.serializeBinaryToWriter
    );
  }
  f = message.getPlaybackMarkerColor();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.serializeBinaryToWriter
    );
  }
  f = message.getTimecodeText();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto.rv.data.Slide.Element.DataLink.TimecodeText.serializeBinaryToWriter
    );
  }
  f = message.getTimecodeStatus();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto.rv.data.Slide.Element.DataLink.TimecodeStatus.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.SlideSourceType = {
  SLIDE_SOURCE_TYPE_CURRENT_SLIDE: 0,
  SLIDE_SOURCE_TYPE_NEXT_SLIDE: 1
};

/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.GroupSourceType = {
  GROUP_SOURCE_TYPE_CURRENT_SLIDE: 0,
  GROUP_SOURCE_TYPE_NEXT_SLIDE: 1,
  GROUP_SOURCE_TYPE_NEXT_GROUP: 2
};

/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.SlideLabelSource = {
  SLIDE_LABEL_SOURCE_CURRENT_SLIDE: 0,
  SLIDE_LABEL_SOURCE_NEXT_SLIDE: 1
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.RSSFeed.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.RSSFeed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.RSSFeed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.RSSFeed.toObject = function(includeInstance, msg) {
  var f, obj = {
url: (f = msg.getUrl()) && proto.rv.data.URL.toObject(includeInstance, f),
content: jspb.Message.getFieldWithDefault(msg, 2, 0),
textDelimiter: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.RSSFeed}
 */
proto.rv.data.Slide.Element.DataLink.RSSFeed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.RSSFeed;
  return proto.rv.data.Slide.Element.DataLink.RSSFeed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.RSSFeed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.RSSFeed}
 */
proto.rv.data.Slide.Element.DataLink.RSSFeed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.URL;
      reader.readMessage(value,proto.rv.data.URL.deserializeBinaryFromReader);
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.RSSFeed.ContentType} */ (reader.readEnum());
      msg.setContent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextDelimiter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.RSSFeed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.RSSFeed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.RSSFeed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.RSSFeed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.URL.serializeBinaryToWriter
    );
  }
  f = message.getContent();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTextDelimiter();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.RSSFeed.ContentType = {
  CONTENT_TYPE_TITLE_ONLY: 0,
  CONTENT_TYPE_TITLE_AND_DESCRIPTION: 1
};

/**
 * optional URL url = 1;
 * @return {?proto.rv.data.URL}
 */
proto.rv.data.Slide.Element.DataLink.RSSFeed.prototype.getUrl = function() {
  return /** @type{?proto.rv.data.URL} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.URL, 1));
};


/**
 * @param {?proto.rv.data.URL|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.RSSFeed} returns this
*/
proto.rv.data.Slide.Element.DataLink.RSSFeed.prototype.setUrl = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.RSSFeed} returns this
 */
proto.rv.data.Slide.Element.DataLink.RSSFeed.prototype.clearUrl = function() {
  return this.setUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.RSSFeed.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ContentType content = 2;
 * @return {!proto.rv.data.Slide.Element.DataLink.RSSFeed.ContentType}
 */
proto.rv.data.Slide.Element.DataLink.RSSFeed.prototype.getContent = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.RSSFeed.ContentType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.RSSFeed.ContentType} value
 * @return {!proto.rv.data.Slide.Element.DataLink.RSSFeed} returns this
 */
proto.rv.data.Slide.Element.DataLink.RSSFeed.prototype.setContent = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string text_delimiter = 3;
 * @return {string}
 */
proto.rv.data.Slide.Element.DataLink.RSSFeed.prototype.getTextDelimiter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Slide.Element.DataLink.RSSFeed} returns this
 */
proto.rv.data.Slide.Element.DataLink.RSSFeed.prototype.setTextDelimiter = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.FileFeed.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.FileFeed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.FileFeed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.FileFeed.toObject = function(includeInstance, msg) {
  var f, obj = {
url: (f = msg.getUrl()) && proto.rv.data.URL.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.FileFeed}
 */
proto.rv.data.Slide.Element.DataLink.FileFeed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.FileFeed;
  return proto.rv.data.Slide.Element.DataLink.FileFeed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.FileFeed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.FileFeed}
 */
proto.rv.data.Slide.Element.DataLink.FileFeed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.URL;
      reader.readMessage(value,proto.rv.data.URL.deserializeBinaryFromReader);
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.FileFeed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.FileFeed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.FileFeed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.FileFeed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.URL.serializeBinaryToWriter
    );
  }
};


/**
 * optional URL url = 1;
 * @return {?proto.rv.data.URL}
 */
proto.rv.data.Slide.Element.DataLink.FileFeed.prototype.getUrl = function() {
  return /** @type{?proto.rv.data.URL} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.URL, 1));
};


/**
 * @param {?proto.rv.data.URL|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.FileFeed} returns this
*/
proto.rv.data.Slide.Element.DataLink.FileFeed.prototype.setUrl = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.FileFeed} returns this
 */
proto.rv.data.Slide.Element.DataLink.FileFeed.prototype.clearUrl = function() {
  return this.setUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.FileFeed.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.Slide.Element.DataLink.Ticker.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.SourcetypeCase = {
  SOURCETYPE_NOT_SET: 0,
  TEXT_TYPE: 1,
  RSS_TYPE: 2,
  FILE_TYPE: 3
};

/**
 * @return {proto.rv.data.Slide.Element.DataLink.Ticker.SourcetypeCase}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.prototype.getSourcetypeCase = function() {
  return /** @type {proto.rv.data.Slide.Element.DataLink.Ticker.SourcetypeCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.Slide.Element.DataLink.Ticker.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.Ticker.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.Ticker} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.Ticker.toObject = function(includeInstance, msg) {
  var f, obj = {
playRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
shouldLoop: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
loopDelay: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
textDelimiter: jspb.Message.getFieldWithDefault(msg, 7, ""),
textType: (f = msg.getTextType()) && proto.rv.data.Slide.Element.DataLink.Ticker.TextType.toObject(includeInstance, f),
rssType: (f = msg.getRssType()) && proto.rv.data.Slide.Element.DataLink.Ticker.RSSType.toObject(includeInstance, f),
fileType: (f = msg.getFileType()) && proto.rv.data.Slide.Element.DataLink.Ticker.FileType.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.Ticker}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.Ticker;
  return proto.rv.data.Slide.Element.DataLink.Ticker.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.Ticker} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.Ticker}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPlayRate(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShouldLoop(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLoopDelay(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextDelimiter(value);
      break;
    case 1:
      var value = new proto.rv.data.Slide.Element.DataLink.Ticker.TextType;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.Ticker.TextType.deserializeBinaryFromReader);
      msg.setTextType(value);
      break;
    case 2:
      var value = new proto.rv.data.Slide.Element.DataLink.Ticker.RSSType;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.Ticker.RSSType.deserializeBinaryFromReader);
      msg.setRssType(value);
      break;
    case 3:
      var value = new proto.rv.data.Slide.Element.DataLink.Ticker.FileType;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.Ticker.FileType.deserializeBinaryFromReader);
      msg.setFileType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.Ticker.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.Ticker} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.Ticker.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayRate();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getShouldLoop();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getLoopDelay();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getTextDelimiter();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTextType();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Slide.Element.DataLink.Ticker.TextType.serializeBinaryToWriter
    );
  }
  f = message.getRssType();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.Slide.Element.DataLink.Ticker.RSSType.serializeBinaryToWriter
    );
  }
  f = message.getFileType();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.Slide.Element.DataLink.Ticker.FileType.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.TextType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.Ticker.TextType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.Ticker.TextType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.Ticker.TextType.toObject = function(includeInstance, msg) {
  var f, obj = {
text: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.Ticker.TextType}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.TextType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.Ticker.TextType;
  return proto.rv.data.Slide.Element.DataLink.Ticker.TextType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.Ticker.TextType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.Ticker.TextType}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.TextType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.TextType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.Ticker.TextType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.Ticker.TextType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.Ticker.TextType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.TextType.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Slide.Element.DataLink.Ticker.TextType} returns this
 */
proto.rv.data.Slide.Element.DataLink.Ticker.TextType.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.RSSType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.Ticker.RSSType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.Ticker.RSSType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.Ticker.RSSType.toObject = function(includeInstance, msg) {
  var f, obj = {
url: (f = msg.getUrl()) && proto.rv.data.URL.toObject(includeInstance, f),
content: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.Ticker.RSSType}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.RSSType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.Ticker.RSSType;
  return proto.rv.data.Slide.Element.DataLink.Ticker.RSSType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.Ticker.RSSType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.Ticker.RSSType}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.RSSType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.URL;
      reader.readMessage(value,proto.rv.data.URL.deserializeBinaryFromReader);
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.Ticker.RSSType.ContentType} */ (reader.readEnum());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.RSSType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.Ticker.RSSType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.Ticker.RSSType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.Ticker.RSSType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.URL.serializeBinaryToWriter
    );
  }
  f = message.getContent();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.RSSType.ContentType = {
  CONTENT_TYPE_TITLE_ONLY: 0,
  CONTENT_TYPE_TITLE_AND_DESCRIPTION: 1
};

/**
 * optional URL url = 1;
 * @return {?proto.rv.data.URL}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.RSSType.prototype.getUrl = function() {
  return /** @type{?proto.rv.data.URL} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.URL, 1));
};


/**
 * @param {?proto.rv.data.URL|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.Ticker.RSSType} returns this
*/
proto.rv.data.Slide.Element.DataLink.Ticker.RSSType.prototype.setUrl = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.Ticker.RSSType} returns this
 */
proto.rv.data.Slide.Element.DataLink.Ticker.RSSType.prototype.clearUrl = function() {
  return this.setUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.RSSType.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ContentType content = 2;
 * @return {!proto.rv.data.Slide.Element.DataLink.Ticker.RSSType.ContentType}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.RSSType.prototype.getContent = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.Ticker.RSSType.ContentType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.Ticker.RSSType.ContentType} value
 * @return {!proto.rv.data.Slide.Element.DataLink.Ticker.RSSType} returns this
 */
proto.rv.data.Slide.Element.DataLink.Ticker.RSSType.prototype.setContent = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.FileType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.Ticker.FileType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.Ticker.FileType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.Ticker.FileType.toObject = function(includeInstance, msg) {
  var f, obj = {
url: (f = msg.getUrl()) && proto.rv.data.URL.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.Ticker.FileType}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.FileType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.Ticker.FileType;
  return proto.rv.data.Slide.Element.DataLink.Ticker.FileType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.Ticker.FileType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.Ticker.FileType}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.FileType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.URL;
      reader.readMessage(value,proto.rv.data.URL.deserializeBinaryFromReader);
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.FileType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.Ticker.FileType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.Ticker.FileType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.Ticker.FileType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.URL.serializeBinaryToWriter
    );
  }
};


/**
 * optional URL url = 1;
 * @return {?proto.rv.data.URL}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.FileType.prototype.getUrl = function() {
  return /** @type{?proto.rv.data.URL} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.URL, 1));
};


/**
 * @param {?proto.rv.data.URL|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.Ticker.FileType} returns this
*/
proto.rv.data.Slide.Element.DataLink.Ticker.FileType.prototype.setUrl = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.Ticker.FileType} returns this
 */
proto.rv.data.Slide.Element.DataLink.Ticker.FileType.prototype.clearUrl = function() {
  return this.setUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.FileType.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double play_rate = 4;
 * @return {number}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.prototype.getPlayRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Slide.Element.DataLink.Ticker} returns this
 */
proto.rv.data.Slide.Element.DataLink.Ticker.prototype.setPlayRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional bool should_loop = 5;
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.prototype.getShouldLoop = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Slide.Element.DataLink.Ticker} returns this
 */
proto.rv.data.Slide.Element.DataLink.Ticker.prototype.setShouldLoop = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional double loop_delay = 6;
 * @return {number}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.prototype.getLoopDelay = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Slide.Element.DataLink.Ticker} returns this
 */
proto.rv.data.Slide.Element.DataLink.Ticker.prototype.setLoopDelay = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional string text_delimiter = 7;
 * @return {string}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.prototype.getTextDelimiter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Slide.Element.DataLink.Ticker} returns this
 */
proto.rv.data.Slide.Element.DataLink.Ticker.prototype.setTextDelimiter = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional TextType text_type = 1;
 * @return {?proto.rv.data.Slide.Element.DataLink.Ticker.TextType}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.prototype.getTextType = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.Ticker.TextType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.Ticker.TextType, 1));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.Ticker.TextType|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.Ticker} returns this
*/
proto.rv.data.Slide.Element.DataLink.Ticker.prototype.setTextType = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.data.Slide.Element.DataLink.Ticker.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.Ticker} returns this
 */
proto.rv.data.Slide.Element.DataLink.Ticker.prototype.clearTextType = function() {
  return this.setTextType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.prototype.hasTextType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RSSType rss_type = 2;
 * @return {?proto.rv.data.Slide.Element.DataLink.Ticker.RSSType}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.prototype.getRssType = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.Ticker.RSSType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.Ticker.RSSType, 2));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.Ticker.RSSType|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.Ticker} returns this
*/
proto.rv.data.Slide.Element.DataLink.Ticker.prototype.setRssType = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.data.Slide.Element.DataLink.Ticker.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.Ticker} returns this
 */
proto.rv.data.Slide.Element.DataLink.Ticker.prototype.clearRssType = function() {
  return this.setRssType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.prototype.hasRssType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FileType file_type = 3;
 * @return {?proto.rv.data.Slide.Element.DataLink.Ticker.FileType}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.prototype.getFileType = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.Ticker.FileType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.Ticker.FileType, 3));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.Ticker.FileType|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.Ticker} returns this
*/
proto.rv.data.Slide.Element.DataLink.Ticker.prototype.setFileType = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.data.Slide.Element.DataLink.Ticker.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.Ticker} returns this
 */
proto.rv.data.Slide.Element.DataLink.Ticker.prototype.clearFileType = function() {
  return this.setFileType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.Ticker.prototype.hasFileType = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementText.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.AlternateElementText.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.AlternateElementText} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementText.toObject = function(includeInstance, msg) {
  var f, obj = {
otherElementUuid: (f = msg.getOtherElementUuid()) && proto.rv.data.UUID.toObject(includeInstance, f),
otherElementName: jspb.Message.getFieldWithDefault(msg, 2, ""),
textTransformOptions: jspb.Message.getFieldWithDefault(msg, 3, 0),
textTransform: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.AlternateElementText}
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementText.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.AlternateElementText;
  return proto.rv.data.Slide.Element.DataLink.AlternateElementText.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.AlternateElementText} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.AlternateElementText}
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementText.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.UUID;
      reader.readMessage(value,proto.rv.data.UUID.deserializeBinaryFromReader);
      msg.setOtherElementUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOtherElementName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTextTransformOptions(value);
      break;
    case 4:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.AlternateElementText.TextTransformOption} */ (reader.readEnum());
      msg.setTextTransform(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementText.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.AlternateElementText.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.AlternateElementText} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementText.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOtherElementUuid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.UUID.serializeBinaryToWriter
    );
  }
  f = message.getOtherElementName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTextTransformOptions();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTextTransform();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementText.TextTransformOption = {
  TEXT_TRANSFORM_OPTION_NONE: 0,
  TEXT_TRANSFORM_OPTION_REMOVE_LINE_RETURNS: 1,
  TEXT_TRANSFORM_OPTION_ONE_WORD_PER_LINE: 2,
  TEXT_TRANSFORM_OPTION_ONE_CHARACTER_PER_LINE: 3
};

/**
 * optional UUID other_element_uuid = 1;
 * @return {?proto.rv.data.UUID}
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementText.prototype.getOtherElementUuid = function() {
  return /** @type{?proto.rv.data.UUID} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.UUID, 1));
};


/**
 * @param {?proto.rv.data.UUID|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.AlternateElementText} returns this
*/
proto.rv.data.Slide.Element.DataLink.AlternateElementText.prototype.setOtherElementUuid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.AlternateElementText} returns this
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementText.prototype.clearOtherElementUuid = function() {
  return this.setOtherElementUuid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementText.prototype.hasOtherElementUuid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string other_element_name = 2;
 * @return {string}
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementText.prototype.getOtherElementName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Slide.Element.DataLink.AlternateElementText} returns this
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementText.prototype.setOtherElementName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 text_transform_options = 3;
 * @return {number}
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementText.prototype.getTextTransformOptions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Slide.Element.DataLink.AlternateElementText} returns this
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementText.prototype.setTextTransformOptions = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional TextTransformOption text_transform = 4;
 * @return {!proto.rv.data.Slide.Element.DataLink.AlternateElementText.TextTransformOption}
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementText.prototype.getTextTransform = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.AlternateElementText.TextTransformOption} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.AlternateElementText.TextTransformOption} value
 * @return {!proto.rv.data.Slide.Element.DataLink.AlternateElementText} returns this
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementText.prototype.setTextTransform = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.CCLIText.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.CCLIText.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.CCLIText} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.CCLIText.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.CCLIText}
 */
proto.rv.data.Slide.Element.DataLink.CCLIText.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.CCLIText;
  return proto.rv.data.Slide.Element.DataLink.CCLIText.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.CCLIText} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.CCLIText}
 */
proto.rv.data.Slide.Element.DataLink.CCLIText.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.CCLIText.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.CCLIText.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.CCLIText} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.CCLIText.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.ColorTrigger.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.ColorTrigger.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.ColorTrigger} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.ColorTrigger.toObject = function(includeInstance, msg) {
  var f, obj = {
time: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
color: (f = msg.getColor()) && proto.rv.data.Color.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.ColorTrigger}
 */
proto.rv.data.Slide.Element.DataLink.ColorTrigger.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.ColorTrigger;
  return proto.rv.data.Slide.Element.DataLink.ColorTrigger.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.ColorTrigger} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.ColorTrigger}
 */
proto.rv.data.Slide.Element.DataLink.ColorTrigger.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTime(value);
      break;
    case 2:
      var value = new proto.rv.data.Color;
      reader.readMessage(value,proto.rv.data.Color.deserializeBinaryFromReader);
      msg.setColor(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.ColorTrigger.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.ColorTrigger.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.ColorTrigger} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.ColorTrigger.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTime();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getColor();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.Color.serializeBinaryToWriter
    );
  }
};


/**
 * optional double time = 1;
 * @return {number}
 */
proto.rv.data.Slide.Element.DataLink.ColorTrigger.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Slide.Element.DataLink.ColorTrigger} returns this
 */
proto.rv.data.Slide.Element.DataLink.ColorTrigger.prototype.setTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional Color color = 2;
 * @return {?proto.rv.data.Color}
 */
proto.rv.data.Slide.Element.DataLink.ColorTrigger.prototype.getColor = function() {
  return /** @type{?proto.rv.data.Color} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Color, 2));
};


/**
 * @param {?proto.rv.data.Color|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.ColorTrigger} returns this
*/
proto.rv.data.Slide.Element.DataLink.ColorTrigger.prototype.setColor = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.ColorTrigger} returns this
 */
proto.rv.data.Slide.Element.DataLink.ColorTrigger.prototype.clearColor = function() {
  return this.setColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.ColorTrigger.prototype.hasColor = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.Slide.Element.DataLink.TimerText.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.TimerText.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.TimerText.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.TimerText} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.TimerText.toObject = function(includeInstance, msg) {
  var f, obj = {
timerUuid: (f = msg.getTimerUuid()) && proto.rv.data.UUID.toObject(includeInstance, f),
timerName: jspb.Message.getFieldWithDefault(msg, 2, ""),
timerFormat: (f = msg.getTimerFormat()) && proto.rv.data.Timer.Format.toObject(includeInstance, f),
timerFormatString: jspb.Message.getFieldWithDefault(msg, 4, ""),
colorTriggersList: jspb.Message.toObjectList(msg.getColorTriggersList(),
    proto.rv.data.Slide.Element.DataLink.ColorTrigger.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.TimerText}
 */
proto.rv.data.Slide.Element.DataLink.TimerText.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.TimerText;
  return proto.rv.data.Slide.Element.DataLink.TimerText.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.TimerText} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.TimerText}
 */
proto.rv.data.Slide.Element.DataLink.TimerText.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.UUID;
      reader.readMessage(value,proto.rv.data.UUID.deserializeBinaryFromReader);
      msg.setTimerUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimerName(value);
      break;
    case 3:
      var value = new proto.rv.data.Timer.Format;
      reader.readMessage(value,proto.rv.data.Timer.Format.deserializeBinaryFromReader);
      msg.setTimerFormat(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimerFormatString(value);
      break;
    case 5:
      var value = new proto.rv.data.Slide.Element.DataLink.ColorTrigger;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.ColorTrigger.deserializeBinaryFromReader);
      msg.addColorTriggers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.TimerText.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.TimerText.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.TimerText} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.TimerText.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimerUuid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.UUID.serializeBinaryToWriter
    );
  }
  f = message.getTimerName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimerFormat();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.Timer.Format.serializeBinaryToWriter
    );
  }
  f = message.getTimerFormatString();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getColorTriggersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.rv.data.Slide.Element.DataLink.ColorTrigger.serializeBinaryToWriter
    );
  }
};


/**
 * optional UUID timer_uuid = 1;
 * @return {?proto.rv.data.UUID}
 */
proto.rv.data.Slide.Element.DataLink.TimerText.prototype.getTimerUuid = function() {
  return /** @type{?proto.rv.data.UUID} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.UUID, 1));
};


/**
 * @param {?proto.rv.data.UUID|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.TimerText} returns this
*/
proto.rv.data.Slide.Element.DataLink.TimerText.prototype.setTimerUuid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.TimerText} returns this
 */
proto.rv.data.Slide.Element.DataLink.TimerText.prototype.clearTimerUuid = function() {
  return this.setTimerUuid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.TimerText.prototype.hasTimerUuid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string timer_name = 2;
 * @return {string}
 */
proto.rv.data.Slide.Element.DataLink.TimerText.prototype.getTimerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Slide.Element.DataLink.TimerText} returns this
 */
proto.rv.data.Slide.Element.DataLink.TimerText.prototype.setTimerName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Timer.Format timer_format = 3;
 * @return {?proto.rv.data.Timer.Format}
 */
proto.rv.data.Slide.Element.DataLink.TimerText.prototype.getTimerFormat = function() {
  return /** @type{?proto.rv.data.Timer.Format} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Timer.Format, 3));
};


/**
 * @param {?proto.rv.data.Timer.Format|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.TimerText} returns this
*/
proto.rv.data.Slide.Element.DataLink.TimerText.prototype.setTimerFormat = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.TimerText} returns this
 */
proto.rv.data.Slide.Element.DataLink.TimerText.prototype.clearTimerFormat = function() {
  return this.setTimerFormat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.TimerText.prototype.hasTimerFormat = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string timer_format_string = 4;
 * @return {string}
 */
proto.rv.data.Slide.Element.DataLink.TimerText.prototype.getTimerFormatString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Slide.Element.DataLink.TimerText} returns this
 */
proto.rv.data.Slide.Element.DataLink.TimerText.prototype.setTimerFormatString = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated ColorTrigger color_triggers = 5;
 * @return {!Array<!proto.rv.data.Slide.Element.DataLink.ColorTrigger>}
 */
proto.rv.data.Slide.Element.DataLink.TimerText.prototype.getColorTriggersList = function() {
  return /** @type{!Array<!proto.rv.data.Slide.Element.DataLink.ColorTrigger>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.Slide.Element.DataLink.ColorTrigger, 5));
};


/**
 * @param {!Array<!proto.rv.data.Slide.Element.DataLink.ColorTrigger>} value
 * @return {!proto.rv.data.Slide.Element.DataLink.TimerText} returns this
*/
proto.rv.data.Slide.Element.DataLink.TimerText.prototype.setColorTriggersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.ColorTrigger=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.Slide.Element.DataLink.ColorTrigger}
 */
proto.rv.data.Slide.Element.DataLink.TimerText.prototype.addColorTriggers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.rv.data.Slide.Element.DataLink.ColorTrigger, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Slide.Element.DataLink.TimerText} returns this
 */
proto.rv.data.Slide.Element.DataLink.TimerText.prototype.clearColorTriggersList = function() {
  return this.setColorTriggersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.ClockText.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.ClockText.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.ClockText} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.ClockText.toObject = function(includeInstance, msg) {
  var f, obj = {
clockFormatString: jspb.Message.getFieldWithDefault(msg, 1, ""),
format: (f = msg.getFormat()) && proto.rv.data.Clock.Format.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.ClockText}
 */
proto.rv.data.Slide.Element.DataLink.ClockText.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.ClockText;
  return proto.rv.data.Slide.Element.DataLink.ClockText.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.ClockText} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.ClockText}
 */
proto.rv.data.Slide.Element.DataLink.ClockText.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClockFormatString(value);
      break;
    case 5:
      var value = new proto.rv.data.Clock.Format;
      reader.readMessage(value,proto.rv.data.Clock.Format.deserializeBinaryFromReader);
      msg.setFormat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.ClockText.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.ClockText.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.ClockText} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.ClockText.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClockFormatString();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFormat();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.data.Clock.Format.serializeBinaryToWriter
    );
  }
};


/**
 * optional string clock_format_string = 1;
 * @return {string}
 */
proto.rv.data.Slide.Element.DataLink.ClockText.prototype.getClockFormatString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Slide.Element.DataLink.ClockText} returns this
 */
proto.rv.data.Slide.Element.DataLink.ClockText.prototype.setClockFormatString = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Clock.Format format = 5;
 * @return {?proto.rv.data.Clock.Format}
 */
proto.rv.data.Slide.Element.DataLink.ClockText.prototype.getFormat = function() {
  return /** @type{?proto.rv.data.Clock.Format} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Clock.Format, 5));
};


/**
 * @param {?proto.rv.data.Clock.Format|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.ClockText} returns this
*/
proto.rv.data.Slide.Element.DataLink.ClockText.prototype.setFormat = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.ClockText} returns this
 */
proto.rv.data.Slide.Element.DataLink.ClockText.prototype.clearFormat = function() {
  return this.setFormat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.ClockText.prototype.hasFormat = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.ChordChart.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.ChordChart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.ChordChart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.ChordChart.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.ChordChart}
 */
proto.rv.data.Slide.Element.DataLink.ChordChart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.ChordChart;
  return proto.rv.data.Slide.Element.DataLink.ChordChart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.ChordChart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.ChordChart}
 */
proto.rv.data.Slide.Element.DataLink.ChordChart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.ChordChart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.ChordChart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.ChordChart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.ChordChart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.OutputScreen.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.OutputScreen.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.OutputScreen} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.OutputScreen.toObject = function(includeInstance, msg) {
  var f, obj = {
screenId: (f = msg.getScreenId()) && proto.rv.data.UUID.toObject(includeInstance, f),
screenName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.OutputScreen}
 */
proto.rv.data.Slide.Element.DataLink.OutputScreen.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.OutputScreen;
  return proto.rv.data.Slide.Element.DataLink.OutputScreen.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.OutputScreen} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.OutputScreen}
 */
proto.rv.data.Slide.Element.DataLink.OutputScreen.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.UUID;
      reader.readMessage(value,proto.rv.data.UUID.deserializeBinaryFromReader);
      msg.setScreenId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setScreenName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.OutputScreen.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.OutputScreen.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.OutputScreen} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.OutputScreen.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScreenId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.UUID.serializeBinaryToWriter
    );
  }
  f = message.getScreenName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional UUID screen_id = 1;
 * @return {?proto.rv.data.UUID}
 */
proto.rv.data.Slide.Element.DataLink.OutputScreen.prototype.getScreenId = function() {
  return /** @type{?proto.rv.data.UUID} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.UUID, 1));
};


/**
 * @param {?proto.rv.data.UUID|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.OutputScreen} returns this
*/
proto.rv.data.Slide.Element.DataLink.OutputScreen.prototype.setScreenId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.OutputScreen} returns this
 */
proto.rv.data.Slide.Element.DataLink.OutputScreen.prototype.clearScreenId = function() {
  return this.setScreenId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.OutputScreen.prototype.hasScreenId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string screen_name = 2;
 * @return {string}
 */
proto.rv.data.Slide.Element.DataLink.OutputScreen.prototype.getScreenName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Slide.Element.DataLink.OutputScreen} returns this
 */
proto.rv.data.Slide.Element.DataLink.OutputScreen.prototype.setScreenName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.PCOLive.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.PCOLive.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.PCOLive} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.PCOLive.toObject = function(includeInstance, msg) {
  var f, obj = {
theme: jspb.Message.getFieldWithDefault(msg, 2, 0),
countdownType: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.PCOLive}
 */
proto.rv.data.Slide.Element.DataLink.PCOLive.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.PCOLive;
  return proto.rv.data.Slide.Element.DataLink.PCOLive.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.PCOLive} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.PCOLive}
 */
proto.rv.data.Slide.Element.DataLink.PCOLive.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.PCOLive.Theme} */ (reader.readEnum());
      msg.setTheme(value);
      break;
    case 3:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.PCOLive.CountdownType} */ (reader.readEnum());
      msg.setCountdownType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.PCOLive.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.PCOLive.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.PCOLive} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.PCOLive.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTheme();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getCountdownType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.PCOLive.Theme = {
  PCOLIVE_THEME_LIGHT: 0,
  PCOLIVE_THEME_DARK: 1
};

/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.PCOLive.CountdownType = {
  COUNTDOWN_TYPE_FULL_ITEM_LENGTH: 0,
  COUNTDOWN_TYPE_END_ITEM_ON_TIME: 1,
  COUNTDOWN_TYPE_END_SERVICE_ON_TIME: 2
};

/**
 * optional Theme theme = 2;
 * @return {!proto.rv.data.Slide.Element.DataLink.PCOLive.Theme}
 */
proto.rv.data.Slide.Element.DataLink.PCOLive.prototype.getTheme = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.PCOLive.Theme} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.PCOLive.Theme} value
 * @return {!proto.rv.data.Slide.Element.DataLink.PCOLive} returns this
 */
proto.rv.data.Slide.Element.DataLink.PCOLive.prototype.setTheme = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional CountdownType countdown_type = 3;
 * @return {!proto.rv.data.Slide.Element.DataLink.PCOLive.CountdownType}
 */
proto.rv.data.Slide.Element.DataLink.PCOLive.prototype.getCountdownType = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.PCOLive.CountdownType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.PCOLive.CountdownType} value
 * @return {!proto.rv.data.Slide.Element.DataLink.PCOLive} returns this
 */
proto.rv.data.Slide.Element.DataLink.PCOLive.prototype.setCountdownType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementFill.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.AlternateElementFill.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.AlternateElementFill} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementFill.toObject = function(includeInstance, msg) {
  var f, obj = {
otherElementUuid: (f = msg.getOtherElementUuid()) && proto.rv.data.UUID.toObject(includeInstance, f),
otherElementName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.AlternateElementFill}
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementFill.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.AlternateElementFill;
  return proto.rv.data.Slide.Element.DataLink.AlternateElementFill.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.AlternateElementFill} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.AlternateElementFill}
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementFill.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.UUID;
      reader.readMessage(value,proto.rv.data.UUID.deserializeBinaryFromReader);
      msg.setOtherElementUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOtherElementName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementFill.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.AlternateElementFill.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.AlternateElementFill} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementFill.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOtherElementUuid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.UUID.serializeBinaryToWriter
    );
  }
  f = message.getOtherElementName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional UUID other_element_uuid = 1;
 * @return {?proto.rv.data.UUID}
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementFill.prototype.getOtherElementUuid = function() {
  return /** @type{?proto.rv.data.UUID} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.UUID, 1));
};


/**
 * @param {?proto.rv.data.UUID|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.AlternateElementFill} returns this
*/
proto.rv.data.Slide.Element.DataLink.AlternateElementFill.prototype.setOtherElementUuid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.AlternateElementFill} returns this
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementFill.prototype.clearOtherElementUuid = function() {
  return this.setOtherElementUuid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementFill.prototype.hasOtherElementUuid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string other_element_name = 2;
 * @return {string}
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementFill.prototype.getOtherElementName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Slide.Element.DataLink.AlternateElementFill} returns this
 */
proto.rv.data.Slide.Element.DataLink.AlternateElementFill.prototype.setOtherElementName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.VisibilityLink.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.toObject = function(includeInstance, msg) {
  var f, obj = {
visibilityCriterion: jspb.Message.getFieldWithDefault(msg, 1, 0),
conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.VisibilityLink;
  return proto.rv.data.Slide.Element.DataLink.VisibilityLink.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.VisibilityCriterion} */ (reader.readEnum());
      msg.setVisibilityCriterion(value);
      break;
    case 2:
      var value = new proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.deserializeBinaryFromReader);
      msg.addConditions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.VisibilityLink.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVisibilityCriterion();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.VisibilityCriterion = {
  VISIBILITY_CRITERION_ALL: 0,
  VISIBILITY_CRITERION_ANY: 1,
  VISIBILITY_CRITERION_NONE: 2
};


/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.oneofGroups_ = [[1,2,3,4,5,6]];

/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ConditiontypeCase = {
  CONDITIONTYPE_NOT_SET: 0,
  ELEMENT_VISIBILITY: 1,
  TIMER_VISIBILITY: 2,
  VIDEO_COUNTDOWN_VISIBILITY: 3,
  CAPTURE_SESSION_VISIBILITY: 4,
  VIDEO_INPUT_VISIBILITY: 5,
  AUDIO_COUNTDOWN_VISIBILITY: 6
};

/**
 * @return {proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ConditiontypeCase}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.getConditiontypeCase = function() {
  return /** @type {proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ConditiontypeCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.toObject = function(includeInstance, msg) {
  var f, obj = {
elementVisibility: (f = msg.getElementVisibility()) && proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.toObject(includeInstance, f),
timerVisibility: (f = msg.getTimerVisibility()) && proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.toObject(includeInstance, f),
videoCountdownVisibility: (f = msg.getVideoCountdownVisibility()) && proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility.toObject(includeInstance, f),
captureSessionVisibility: (f = msg.getCaptureSessionVisibility()) && proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility.toObject(includeInstance, f),
videoInputVisibility: (f = msg.getVideoInputVisibility()) && proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility.toObject(includeInstance, f),
audioCountdownVisibility: (f = msg.getAudioCountdownVisibility()) && proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition;
  return proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.deserializeBinaryFromReader);
      msg.setElementVisibility(value);
      break;
    case 2:
      var value = new proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.deserializeBinaryFromReader);
      msg.setTimerVisibility(value);
      break;
    case 3:
      var value = new proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility.deserializeBinaryFromReader);
      msg.setVideoCountdownVisibility(value);
      break;
    case 4:
      var value = new proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility.deserializeBinaryFromReader);
      msg.setCaptureSessionVisibility(value);
      break;
    case 5:
      var value = new proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility.deserializeBinaryFromReader);
      msg.setVideoInputVisibility(value);
      break;
    case 6:
      var value = new proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility.deserializeBinaryFromReader);
      msg.setAudioCountdownVisibility(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementVisibility();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.serializeBinaryToWriter
    );
  }
  f = message.getTimerVisibility();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.serializeBinaryToWriter
    );
  }
  f = message.getVideoCountdownVisibility();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility.serializeBinaryToWriter
    );
  }
  f = message.getCaptureSessionVisibility();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility.serializeBinaryToWriter
    );
  }
  f = message.getVideoInputVisibility();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility.serializeBinaryToWriter
    );
  }
  f = message.getAudioCountdownVisibility();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.toObject = function(includeInstance, msg) {
  var f, obj = {
otherElementUuid: (f = msg.getOtherElementUuid()) && proto.rv.data.UUID.toObject(includeInstance, f),
otherElementName: jspb.Message.getFieldWithDefault(msg, 2, ""),
visibilityCriterion: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility;
  return proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.UUID;
      reader.readMessage(value,proto.rv.data.UUID.deserializeBinaryFromReader);
      msg.setOtherElementUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOtherElementName(value);
      break;
    case 3:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.ElementVisibilityCriterion} */ (reader.readEnum());
      msg.setVisibilityCriterion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOtherElementUuid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.UUID.serializeBinaryToWriter
    );
  }
  f = message.getOtherElementName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVisibilityCriterion();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.ElementVisibilityCriterion = {
  ELEMENT_VISIBILITY_CRITERION_HAS_TEXT: 0,
  ELEMENT_VISIBILITY_CRITERION_HAS_NO_TEXT: 1
};

/**
 * optional UUID other_element_uuid = 1;
 * @return {?proto.rv.data.UUID}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.prototype.getOtherElementUuid = function() {
  return /** @type{?proto.rv.data.UUID} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.UUID, 1));
};


/**
 * @param {?proto.rv.data.UUID|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility} returns this
*/
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.prototype.setOtherElementUuid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility} returns this
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.prototype.clearOtherElementUuid = function() {
  return this.setOtherElementUuid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.prototype.hasOtherElementUuid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string other_element_name = 2;
 * @return {string}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.prototype.getOtherElementName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility} returns this
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.prototype.setOtherElementName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ElementVisibilityCriterion visibility_criterion = 3;
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.ElementVisibilityCriterion}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.prototype.getVisibilityCriterion = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.ElementVisibilityCriterion} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.ElementVisibilityCriterion} value
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility} returns this
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility.prototype.setVisibilityCriterion = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.toObject = function(includeInstance, msg) {
  var f, obj = {
timerUuid: (f = msg.getTimerUuid()) && proto.rv.data.UUID.toObject(includeInstance, f),
timerName: jspb.Message.getFieldWithDefault(msg, 2, ""),
visibilityCriterion: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility;
  return proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.UUID;
      reader.readMessage(value,proto.rv.data.UUID.deserializeBinaryFromReader);
      msg.setTimerUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimerName(value);
      break;
    case 3:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.TimerVisibilityCriterion} */ (reader.readEnum());
      msg.setVisibilityCriterion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimerUuid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.UUID.serializeBinaryToWriter
    );
  }
  f = message.getTimerName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVisibilityCriterion();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.TimerVisibilityCriterion = {
  TIMER_VISIBILITY_CRITERION_HAS_TIME_REMAINING: 0,
  TIMER_VISIBILITY_CRITERION_HAS_EXPIRED: 1,
  TIMER_VISIBILITY_CRITERION_IS_RUNNING: 2,
  TIMER_VISIBILITY_CRITERION_NOT_RUNNING: 3
};

/**
 * optional UUID timer_uuid = 1;
 * @return {?proto.rv.data.UUID}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.prototype.getTimerUuid = function() {
  return /** @type{?proto.rv.data.UUID} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.UUID, 1));
};


/**
 * @param {?proto.rv.data.UUID|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility} returns this
*/
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.prototype.setTimerUuid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility} returns this
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.prototype.clearTimerUuid = function() {
  return this.setTimerUuid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.prototype.hasTimerUuid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string timer_name = 2;
 * @return {string}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.prototype.getTimerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility} returns this
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.prototype.setTimerName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional TimerVisibilityCriterion visibility_criterion = 3;
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.TimerVisibilityCriterion}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.prototype.getVisibilityCriterion = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.TimerVisibilityCriterion} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.TimerVisibilityCriterion} value
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility} returns this
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility.prototype.setVisibilityCriterion = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility.toObject = function(includeInstance, msg) {
  var f, obj = {
visibilityCriterion: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility;
  return proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility.VideoCountdownVisibilityCriterion} */ (reader.readEnum());
      msg.setVisibilityCriterion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVisibilityCriterion();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility.VideoCountdownVisibilityCriterion = {
  VIDEO_COUNTDOWN_VISIBILITY_CRITERION_HAS_TIME_REMAINING: 0,
  VIDEO_COUNTDOWN_VISIBILITY_CRITERION_HAS_EXPIRED: 1,
  VIDEO_COUNTDOWN_VISIBILITY_CRITERION_IS_RUNNING: 2,
  VIDEO_COUNTDOWN_VISIBILITY_CRITERION_NOT_RUNNING: 3,
  VIDEO_COUNTDOWN_VISIBILITY_CRITERION_LOOPING: 4,
  VIDEO_COUNTDOWN_VISIBILITY_CRITERION_NOT_LOOPING: 5
};

/**
 * optional VideoCountdownVisibilityCriterion visibility_criterion = 1;
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility.VideoCountdownVisibilityCriterion}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility.prototype.getVisibilityCriterion = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility.VideoCountdownVisibilityCriterion} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility.VideoCountdownVisibilityCriterion} value
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility} returns this
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility.prototype.setVisibilityCriterion = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility.toObject = function(includeInstance, msg) {
  var f, obj = {
visibilityCriterion: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility;
  return proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility.AudioCountdownVisibilityCriterion} */ (reader.readEnum());
      msg.setVisibilityCriterion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVisibilityCriterion();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility.AudioCountdownVisibilityCriterion = {
  AUDIO_COUNTDOWN_VISIBILITY_CRITERION_HAS_TIME_REMAINING: 0,
  AUDIO_COUNTDOWN_VISIBILITY_CRITERION_HAS_EXPIRED: 1,
  AUDIO_COUNTDOWN_VISIBILITY_CRITERION_IS_RUNNING: 2,
  AUDIO_COUNTDOWN_VISIBILITY_CRITERION_NOT_RUNNING: 3,
  AUDIO_COUNTDOWN_VISIBILITY_CRITERION_LOOPING: 4,
  AUDIO_COUNTDOWN_VISIBILITY_CRITERION_NOT_LOOPING: 5
};

/**
 * optional AudioCountdownVisibilityCriterion visibility_criterion = 1;
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility.AudioCountdownVisibilityCriterion}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility.prototype.getVisibilityCriterion = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility.AudioCountdownVisibilityCriterion} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility.AudioCountdownVisibilityCriterion} value
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility} returns this
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility.prototype.setVisibilityCriterion = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility.toObject = function(includeInstance, msg) {
  var f, obj = {
visibilityCriterion: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility;
  return proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility.CaptureSessionVisibilityCriterion} */ (reader.readEnum());
      msg.setVisibilityCriterion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVisibilityCriterion();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility.CaptureSessionVisibilityCriterion = {
  CAPTURE_SESSION_VISIBILITY_CRITERION_ACTIVE: 0,
  CAPTURE_SESSION_VISIBILITY_CRITERION_INACTIVE: 1
};

/**
 * optional CaptureSessionVisibilityCriterion visibility_criterion = 1;
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility.CaptureSessionVisibilityCriterion}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility.prototype.getVisibilityCriterion = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility.CaptureSessionVisibilityCriterion} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility.CaptureSessionVisibilityCriterion} value
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility} returns this
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility.prototype.setVisibilityCriterion = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility.toObject = function(includeInstance, msg) {
  var f, obj = {
videoInputIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
visibilityCriterion: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility;
  return proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVideoInputIndex(value);
      break;
    case 2:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility.VideoInputVisibilityCriterion} */ (reader.readEnum());
      msg.setVisibilityCriterion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideoInputIndex();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getVisibilityCriterion();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility.VideoInputVisibilityCriterion = {
  VIDEO_INPUT_VISIBILITY_CRITERION_ACTIVE: 0,
  VIDEO_INPUT_VISIBILITY_CRITERION_INACTIVE: 1
};

/**
 * optional int32 video_input_index = 1;
 * @return {number}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility.prototype.getVideoInputIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility} returns this
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility.prototype.setVideoInputIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional VideoInputVisibilityCriterion visibility_criterion = 2;
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility.VideoInputVisibilityCriterion}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility.prototype.getVisibilityCriterion = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility.VideoInputVisibilityCriterion} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility.VideoInputVisibilityCriterion} value
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility} returns this
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility.prototype.setVisibilityCriterion = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional ElementVisibility element_visibility = 1;
 * @return {?proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.getElementVisibility = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility, 1));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.ElementVisibility|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition} returns this
*/
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.setElementVisibility = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition} returns this
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.clearElementVisibility = function() {
  return this.setElementVisibility(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.hasElementVisibility = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TimerVisibility timer_visibility = 2;
 * @return {?proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.getTimerVisibility = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility, 2));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.TimerVisibility|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition} returns this
*/
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.setTimerVisibility = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition} returns this
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.clearTimerVisibility = function() {
  return this.setTimerVisibility(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.hasTimerVisibility = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional VideoCountdownVisibility video_countdown_visibility = 3;
 * @return {?proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.getVideoCountdownVisibility = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility, 3));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoCountdownVisibility|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition} returns this
*/
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.setVideoCountdownVisibility = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition} returns this
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.clearVideoCountdownVisibility = function() {
  return this.setVideoCountdownVisibility(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.hasVideoCountdownVisibility = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CaptureSessionVisibility capture_session_visibility = 4;
 * @return {?proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.getCaptureSessionVisibility = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility, 4));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.CaptureSessionVisibility|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition} returns this
*/
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.setCaptureSessionVisibility = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition} returns this
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.clearCaptureSessionVisibility = function() {
  return this.setCaptureSessionVisibility(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.hasCaptureSessionVisibility = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional VideoInputVisibility video_input_visibility = 5;
 * @return {?proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.getVideoInputVisibility = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility, 5));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.VideoInputVisibility|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition} returns this
*/
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.setVideoInputVisibility = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition} returns this
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.clearVideoInputVisibility = function() {
  return this.setVideoInputVisibility(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.hasVideoInputVisibility = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional AudioCountdownVisibility audio_countdown_visibility = 6;
 * @return {?proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.getAudioCountdownVisibility = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility, 6));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.AudioCountdownVisibility|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition} returns this
*/
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.setAudioCountdownVisibility = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition} returns this
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.clearAudioCountdownVisibility = function() {
  return this.setAudioCountdownVisibility(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition.prototype.hasAudioCountdownVisibility = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional VisibilityCriterion visibility_criterion = 1;
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.VisibilityCriterion}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.prototype.getVisibilityCriterion = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.VisibilityCriterion} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.VisibilityCriterion} value
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.prototype.setVisibilityCriterion = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated Condition conditions = 2;
 * @return {!Array<!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition>}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition, 2));
};


/**
 * @param {!Array<!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition>} value
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.VisibilityLink.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition}
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.rv.data.Slide.Element.DataLink.VisibilityLink.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Slide.Element.DataLink.VisibilityLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.VisibilityLink.prototype.clearConditionsList = function() {
  return this.setConditionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.SlideText.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.SlideText.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.SlideText} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.SlideText.toObject = function(includeInstance, msg) {
  var f, obj = {
sourceSlide: jspb.Message.getFieldWithDefault(msg, 1, 0),
sourceOption: jspb.Message.getFieldWithDefault(msg, 2, 0),
preserveNotesFormat: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
nameToMatch: jspb.Message.getFieldWithDefault(msg, 4, ""),
elementTextTransform: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.SlideText}
 */
proto.rv.data.Slide.Element.DataLink.SlideText.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.SlideText;
  return proto.rv.data.Slide.Element.DataLink.SlideText.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.SlideText} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.SlideText}
 */
proto.rv.data.Slide.Element.DataLink.SlideText.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.SlideSourceType} */ (reader.readEnum());
      msg.setSourceSlide(value);
      break;
    case 2:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.SlideText.TextSourceOption} */ (reader.readEnum());
      msg.setSourceOption(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPreserveNotesFormat(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNameToMatch(value);
      break;
    case 5:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.AlternateElementText.TextTransformOption} */ (reader.readEnum());
      msg.setElementTextTransform(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.SlideText.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.SlideText.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.SlideText} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.SlideText.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourceSlide();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSourceOption();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPreserveNotesFormat();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getNameToMatch();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getElementTextTransform();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.SlideText.TextSourceOption = {
  TEXT_SOURCE_OPTION_TEXT: 0,
  TEXT_SOURCE_OPTION_NOTES: 1,
  TEXT_SOURCE_OPTION_ELEMENT_MATCHING_NAME: 2
};

/**
 * optional SlideSourceType source_slide = 1;
 * @return {!proto.rv.data.Slide.Element.DataLink.SlideSourceType}
 */
proto.rv.data.Slide.Element.DataLink.SlideText.prototype.getSourceSlide = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.SlideSourceType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.SlideSourceType} value
 * @return {!proto.rv.data.Slide.Element.DataLink.SlideText} returns this
 */
proto.rv.data.Slide.Element.DataLink.SlideText.prototype.setSourceSlide = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional TextSourceOption source_option = 2;
 * @return {!proto.rv.data.Slide.Element.DataLink.SlideText.TextSourceOption}
 */
proto.rv.data.Slide.Element.DataLink.SlideText.prototype.getSourceOption = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.SlideText.TextSourceOption} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.SlideText.TextSourceOption} value
 * @return {!proto.rv.data.Slide.Element.DataLink.SlideText} returns this
 */
proto.rv.data.Slide.Element.DataLink.SlideText.prototype.setSourceOption = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bool preserve_notes_format = 3;
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.SlideText.prototype.getPreserveNotesFormat = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Slide.Element.DataLink.SlideText} returns this
 */
proto.rv.data.Slide.Element.DataLink.SlideText.prototype.setPreserveNotesFormat = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string name_to_match = 4;
 * @return {string}
 */
proto.rv.data.Slide.Element.DataLink.SlideText.prototype.getNameToMatch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Slide.Element.DataLink.SlideText} returns this
 */
proto.rv.data.Slide.Element.DataLink.SlideText.prototype.setNameToMatch = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional AlternateElementText.TextTransformOption element_text_transform = 5;
 * @return {!proto.rv.data.Slide.Element.DataLink.AlternateElementText.TextTransformOption}
 */
proto.rv.data.Slide.Element.DataLink.SlideText.prototype.getElementTextTransform = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.AlternateElementText.TextTransformOption} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.AlternateElementText.TextTransformOption} value
 * @return {!proto.rv.data.Slide.Element.DataLink.SlideText} returns this
 */
proto.rv.data.Slide.Element.DataLink.SlideText.prototype.setElementTextTransform = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.SlideImage.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.SlideImage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.SlideImage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.SlideImage.toObject = function(includeInstance, msg) {
  var f, obj = {
sourceSlide: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.SlideImage}
 */
proto.rv.data.Slide.Element.DataLink.SlideImage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.SlideImage;
  return proto.rv.data.Slide.Element.DataLink.SlideImage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.SlideImage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.SlideImage}
 */
proto.rv.data.Slide.Element.DataLink.SlideImage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.SlideSourceType} */ (reader.readEnum());
      msg.setSourceSlide(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.SlideImage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.SlideImage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.SlideImage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.SlideImage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourceSlide();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional SlideSourceType source_slide = 1;
 * @return {!proto.rv.data.Slide.Element.DataLink.SlideSourceType}
 */
proto.rv.data.Slide.Element.DataLink.SlideImage.prototype.getSourceSlide = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.SlideSourceType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.SlideSourceType} value
 * @return {!proto.rv.data.Slide.Element.DataLink.SlideImage} returns this
 */
proto.rv.data.Slide.Element.DataLink.SlideImage.prototype.setSourceSlide = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.StageMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.StageMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.StageMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.StageMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
shouldFlash: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
flashColor: (f = msg.getFlashColor()) && proto.rv.data.Color.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.StageMessage}
 */
proto.rv.data.Slide.Element.DataLink.StageMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.StageMessage;
  return proto.rv.data.Slide.Element.DataLink.StageMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.StageMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.StageMessage}
 */
proto.rv.data.Slide.Element.DataLink.StageMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShouldFlash(value);
      break;
    case 2:
      var value = new proto.rv.data.Color;
      reader.readMessage(value,proto.rv.data.Color.deserializeBinaryFromReader);
      msg.setFlashColor(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.StageMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.StageMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.StageMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.StageMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShouldFlash();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getFlashColor();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.Color.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool should_flash = 1;
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.StageMessage.prototype.getShouldFlash = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Slide.Element.DataLink.StageMessage} returns this
 */
proto.rv.data.Slide.Element.DataLink.StageMessage.prototype.setShouldFlash = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional Color flash_color = 2;
 * @return {?proto.rv.data.Color}
 */
proto.rv.data.Slide.Element.DataLink.StageMessage.prototype.getFlashColor = function() {
  return /** @type{?proto.rv.data.Color} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Color, 2));
};


/**
 * @param {?proto.rv.data.Color|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.StageMessage} returns this
*/
proto.rv.data.Slide.Element.DataLink.StageMessage.prototype.setFlashColor = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.StageMessage} returns this
 */
proto.rv.data.Slide.Element.DataLink.StageMessage.prototype.clearFlashColor = function() {
  return this.setFlashColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.StageMessage.prototype.hasFlashColor = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.Slide.Element.DataLink.VideoCountdown.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.VideoCountdown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.VideoCountdown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.VideoCountdown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.VideoCountdown.toObject = function(includeInstance, msg) {
  var f, obj = {
timerFormat: (f = msg.getTimerFormat()) && proto.rv.data.Timer.Format.toObject(includeInstance, f),
timerFormatString: jspb.Message.getFieldWithDefault(msg, 2, ""),
colorTriggersList: jspb.Message.toObjectList(msg.getColorTriggersList(),
    proto.rv.data.Slide.Element.DataLink.ColorTrigger.toObject, includeInstance),
ignoreLoopingVideos: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
videoCountdownSource: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.VideoCountdown}
 */
proto.rv.data.Slide.Element.DataLink.VideoCountdown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.VideoCountdown;
  return proto.rv.data.Slide.Element.DataLink.VideoCountdown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.VideoCountdown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.VideoCountdown}
 */
proto.rv.data.Slide.Element.DataLink.VideoCountdown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Timer.Format;
      reader.readMessage(value,proto.rv.data.Timer.Format.deserializeBinaryFromReader);
      msg.setTimerFormat(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimerFormatString(value);
      break;
    case 3:
      var value = new proto.rv.data.Slide.Element.DataLink.ColorTrigger;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.ColorTrigger.deserializeBinaryFromReader);
      msg.addColorTriggers(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreLoopingVideos(value);
      break;
    case 5:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.VideoCountdown.VideoCountdownSource} */ (reader.readEnum());
      msg.setVideoCountdownSource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.VideoCountdown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.VideoCountdown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.VideoCountdown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.VideoCountdown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimerFormat();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Timer.Format.serializeBinaryToWriter
    );
  }
  f = message.getTimerFormatString();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getColorTriggersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.rv.data.Slide.Element.DataLink.ColorTrigger.serializeBinaryToWriter
    );
  }
  f = message.getIgnoreLoopingVideos();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getVideoCountdownSource();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.VideoCountdown.VideoCountdownSource = {
  VIDEO_COUNTDOWN_SOURCE_PRESENTATION: 0,
  VIDEO_COUNTDOWN_SOURCE_ANNOUNCEMENT: 1
};

/**
 * optional Timer.Format timer_format = 1;
 * @return {?proto.rv.data.Timer.Format}
 */
proto.rv.data.Slide.Element.DataLink.VideoCountdown.prototype.getTimerFormat = function() {
  return /** @type{?proto.rv.data.Timer.Format} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Timer.Format, 1));
};


/**
 * @param {?proto.rv.data.Timer.Format|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.VideoCountdown} returns this
*/
proto.rv.data.Slide.Element.DataLink.VideoCountdown.prototype.setTimerFormat = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.VideoCountdown} returns this
 */
proto.rv.data.Slide.Element.DataLink.VideoCountdown.prototype.clearTimerFormat = function() {
  return this.setTimerFormat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.VideoCountdown.prototype.hasTimerFormat = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string timer_format_string = 2;
 * @return {string}
 */
proto.rv.data.Slide.Element.DataLink.VideoCountdown.prototype.getTimerFormatString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Slide.Element.DataLink.VideoCountdown} returns this
 */
proto.rv.data.Slide.Element.DataLink.VideoCountdown.prototype.setTimerFormatString = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated ColorTrigger color_triggers = 3;
 * @return {!Array<!proto.rv.data.Slide.Element.DataLink.ColorTrigger>}
 */
proto.rv.data.Slide.Element.DataLink.VideoCountdown.prototype.getColorTriggersList = function() {
  return /** @type{!Array<!proto.rv.data.Slide.Element.DataLink.ColorTrigger>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.Slide.Element.DataLink.ColorTrigger, 3));
};


/**
 * @param {!Array<!proto.rv.data.Slide.Element.DataLink.ColorTrigger>} value
 * @return {!proto.rv.data.Slide.Element.DataLink.VideoCountdown} returns this
*/
proto.rv.data.Slide.Element.DataLink.VideoCountdown.prototype.setColorTriggersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.ColorTrigger=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.Slide.Element.DataLink.ColorTrigger}
 */
proto.rv.data.Slide.Element.DataLink.VideoCountdown.prototype.addColorTriggers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.rv.data.Slide.Element.DataLink.ColorTrigger, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Slide.Element.DataLink.VideoCountdown} returns this
 */
proto.rv.data.Slide.Element.DataLink.VideoCountdown.prototype.clearColorTriggersList = function() {
  return this.setColorTriggersList([]);
};


/**
 * optional bool ignore_looping_videos = 4;
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.VideoCountdown.prototype.getIgnoreLoopingVideos = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Slide.Element.DataLink.VideoCountdown} returns this
 */
proto.rv.data.Slide.Element.DataLink.VideoCountdown.prototype.setIgnoreLoopingVideos = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional VideoCountdownSource video_countdown_source = 5;
 * @return {!proto.rv.data.Slide.Element.DataLink.VideoCountdown.VideoCountdownSource}
 */
proto.rv.data.Slide.Element.DataLink.VideoCountdown.prototype.getVideoCountdownSource = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.VideoCountdown.VideoCountdownSource} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.VideoCountdown.VideoCountdownSource} value
 * @return {!proto.rv.data.Slide.Element.DataLink.VideoCountdown} returns this
 */
proto.rv.data.Slide.Element.DataLink.VideoCountdown.prototype.setVideoCountdownSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.Slide.Element.DataLink.AudioCountdown.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.AudioCountdown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.AudioCountdown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.AudioCountdown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.AudioCountdown.toObject = function(includeInstance, msg) {
  var f, obj = {
timerFormat: (f = msg.getTimerFormat()) && proto.rv.data.Timer.Format.toObject(includeInstance, f),
timerFormatString: jspb.Message.getFieldWithDefault(msg, 2, ""),
colorTriggersList: jspb.Message.toObjectList(msg.getColorTriggersList(),
    proto.rv.data.Slide.Element.DataLink.ColorTrigger.toObject, includeInstance),
ignoreLoopingAudio: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.AudioCountdown}
 */
proto.rv.data.Slide.Element.DataLink.AudioCountdown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.AudioCountdown;
  return proto.rv.data.Slide.Element.DataLink.AudioCountdown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.AudioCountdown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.AudioCountdown}
 */
proto.rv.data.Slide.Element.DataLink.AudioCountdown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Timer.Format;
      reader.readMessage(value,proto.rv.data.Timer.Format.deserializeBinaryFromReader);
      msg.setTimerFormat(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimerFormatString(value);
      break;
    case 3:
      var value = new proto.rv.data.Slide.Element.DataLink.ColorTrigger;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.ColorTrigger.deserializeBinaryFromReader);
      msg.addColorTriggers(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreLoopingAudio(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.AudioCountdown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.AudioCountdown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.AudioCountdown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.AudioCountdown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimerFormat();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Timer.Format.serializeBinaryToWriter
    );
  }
  f = message.getTimerFormatString();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getColorTriggersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.rv.data.Slide.Element.DataLink.ColorTrigger.serializeBinaryToWriter
    );
  }
  f = message.getIgnoreLoopingAudio();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional Timer.Format timer_format = 1;
 * @return {?proto.rv.data.Timer.Format}
 */
proto.rv.data.Slide.Element.DataLink.AudioCountdown.prototype.getTimerFormat = function() {
  return /** @type{?proto.rv.data.Timer.Format} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Timer.Format, 1));
};


/**
 * @param {?proto.rv.data.Timer.Format|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.AudioCountdown} returns this
*/
proto.rv.data.Slide.Element.DataLink.AudioCountdown.prototype.setTimerFormat = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.AudioCountdown} returns this
 */
proto.rv.data.Slide.Element.DataLink.AudioCountdown.prototype.clearTimerFormat = function() {
  return this.setTimerFormat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.AudioCountdown.prototype.hasTimerFormat = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string timer_format_string = 2;
 * @return {string}
 */
proto.rv.data.Slide.Element.DataLink.AudioCountdown.prototype.getTimerFormatString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Slide.Element.DataLink.AudioCountdown} returns this
 */
proto.rv.data.Slide.Element.DataLink.AudioCountdown.prototype.setTimerFormatString = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated ColorTrigger color_triggers = 3;
 * @return {!Array<!proto.rv.data.Slide.Element.DataLink.ColorTrigger>}
 */
proto.rv.data.Slide.Element.DataLink.AudioCountdown.prototype.getColorTriggersList = function() {
  return /** @type{!Array<!proto.rv.data.Slide.Element.DataLink.ColorTrigger>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.Slide.Element.DataLink.ColorTrigger, 3));
};


/**
 * @param {!Array<!proto.rv.data.Slide.Element.DataLink.ColorTrigger>} value
 * @return {!proto.rv.data.Slide.Element.DataLink.AudioCountdown} returns this
*/
proto.rv.data.Slide.Element.DataLink.AudioCountdown.prototype.setColorTriggersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.ColorTrigger=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.Slide.Element.DataLink.ColorTrigger}
 */
proto.rv.data.Slide.Element.DataLink.AudioCountdown.prototype.addColorTriggers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.rv.data.Slide.Element.DataLink.ColorTrigger, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Slide.Element.DataLink.AudioCountdown} returns this
 */
proto.rv.data.Slide.Element.DataLink.AudioCountdown.prototype.clearColorTriggersList = function() {
  return this.setColorTriggersList([]);
};


/**
 * optional bool ignore_looping_audio = 4;
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.AudioCountdown.prototype.getIgnoreLoopingAudio = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Slide.Element.DataLink.AudioCountdown} returns this
 */
proto.rv.data.Slide.Element.DataLink.AudioCountdown.prototype.setIgnoreLoopingAudio = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.GroupName.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.GroupName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.GroupName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.GroupName.toObject = function(includeInstance, msg) {
  var f, obj = {
groupsource: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.GroupName}
 */
proto.rv.data.Slide.Element.DataLink.GroupName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.GroupName;
  return proto.rv.data.Slide.Element.DataLink.GroupName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.GroupName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.GroupName}
 */
proto.rv.data.Slide.Element.DataLink.GroupName.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.GroupSourceType} */ (reader.readEnum());
      msg.setGroupsource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.GroupName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.GroupName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.GroupName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.GroupName.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupsource();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional GroupSourceType groupSource = 1;
 * @return {!proto.rv.data.Slide.Element.DataLink.GroupSourceType}
 */
proto.rv.data.Slide.Element.DataLink.GroupName.prototype.getGroupsource = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.GroupSourceType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.GroupSourceType} value
 * @return {!proto.rv.data.Slide.Element.DataLink.GroupName} returns this
 */
proto.rv.data.Slide.Element.DataLink.GroupName.prototype.setGroupsource = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.GroupColor.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.GroupColor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.GroupColor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.GroupColor.toObject = function(includeInstance, msg) {
  var f, obj = {
groupsource: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.GroupColor}
 */
proto.rv.data.Slide.Element.DataLink.GroupColor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.GroupColor;
  return proto.rv.data.Slide.Element.DataLink.GroupColor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.GroupColor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.GroupColor}
 */
proto.rv.data.Slide.Element.DataLink.GroupColor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.GroupSourceType} */ (reader.readEnum());
      msg.setGroupsource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.GroupColor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.GroupColor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.GroupColor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.GroupColor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupsource();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional GroupSourceType groupSource = 1;
 * @return {!proto.rv.data.Slide.Element.DataLink.GroupSourceType}
 */
proto.rv.data.Slide.Element.DataLink.GroupColor.prototype.getGroupsource = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.GroupSourceType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.GroupSourceType} value
 * @return {!proto.rv.data.Slide.Element.DataLink.GroupColor} returns this
 */
proto.rv.data.Slide.Element.DataLink.GroupColor.prototype.setGroupsource = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.SlideLabelText.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.SlideLabelText.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.SlideLabelText} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.SlideLabelText.toObject = function(includeInstance, msg) {
  var f, obj = {
slideLabelSource: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.SlideLabelText}
 */
proto.rv.data.Slide.Element.DataLink.SlideLabelText.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.SlideLabelText;
  return proto.rv.data.Slide.Element.DataLink.SlideLabelText.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.SlideLabelText} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.SlideLabelText}
 */
proto.rv.data.Slide.Element.DataLink.SlideLabelText.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.SlideLabelSource} */ (reader.readEnum());
      msg.setSlideLabelSource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.SlideLabelText.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.SlideLabelText.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.SlideLabelText} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.SlideLabelText.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlideLabelSource();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional SlideLabelSource slide_label_source = 1;
 * @return {!proto.rv.data.Slide.Element.DataLink.SlideLabelSource}
 */
proto.rv.data.Slide.Element.DataLink.SlideLabelText.prototype.getSlideLabelSource = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.SlideLabelSource} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.SlideLabelSource} value
 * @return {!proto.rv.data.Slide.Element.DataLink.SlideLabelText} returns this
 */
proto.rv.data.Slide.Element.DataLink.SlideLabelText.prototype.setSlideLabelSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.SlideLabelColor.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.SlideLabelColor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.SlideLabelColor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.SlideLabelColor.toObject = function(includeInstance, msg) {
  var f, obj = {
slideLabelSource: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.SlideLabelColor}
 */
proto.rv.data.Slide.Element.DataLink.SlideLabelColor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.SlideLabelColor;
  return proto.rv.data.Slide.Element.DataLink.SlideLabelColor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.SlideLabelColor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.SlideLabelColor}
 */
proto.rv.data.Slide.Element.DataLink.SlideLabelColor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.SlideLabelSource} */ (reader.readEnum());
      msg.setSlideLabelSource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.SlideLabelColor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.SlideLabelColor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.SlideLabelColor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.SlideLabelColor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlideLabelSource();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional SlideLabelSource slide_label_source = 1;
 * @return {!proto.rv.data.Slide.Element.DataLink.SlideLabelSource}
 */
proto.rv.data.Slide.Element.DataLink.SlideLabelColor.prototype.getSlideLabelSource = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.SlideLabelSource} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.SlideLabelSource} value
 * @return {!proto.rv.data.Slide.Element.DataLink.SlideLabelColor} returns this
 */
proto.rv.data.Slide.Element.DataLink.SlideLabelColor.prototype.setSlideLabelSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.PresentationNotes.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.PresentationNotes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.PresentationNotes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.PresentationNotes.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.PresentationNotes}
 */
proto.rv.data.Slide.Element.DataLink.PresentationNotes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.PresentationNotes;
  return proto.rv.data.Slide.Element.DataLink.PresentationNotes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.PresentationNotes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.PresentationNotes}
 */
proto.rv.data.Slide.Element.DataLink.PresentationNotes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.PresentationNotes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.PresentationNotes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.PresentationNotes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.PresentationNotes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.Presentation.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.Presentation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.Presentation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.Presentation.toObject = function(includeInstance, msg) {
  var f, obj = {
presentationSource: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.Presentation}
 */
proto.rv.data.Slide.Element.DataLink.Presentation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.Presentation;
  return proto.rv.data.Slide.Element.DataLink.Presentation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.Presentation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.Presentation}
 */
proto.rv.data.Slide.Element.DataLink.Presentation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.Presentation.PresentationSource} */ (reader.readEnum());
      msg.setPresentationSource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.Presentation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.Presentation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.Presentation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.Presentation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPresentationSource();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.Presentation.PresentationSource = {
  PRESENTATION_SOURCE_PRESENTATION: 0,
  PRESENTATION_SOURCE_ANNOUNCEMENT: 1
};

/**
 * optional PresentationSource presentation_source = 1;
 * @return {!proto.rv.data.Slide.Element.DataLink.Presentation.PresentationSource}
 */
proto.rv.data.Slide.Element.DataLink.Presentation.prototype.getPresentationSource = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.Presentation.PresentationSource} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.Presentation.PresentationSource} value
 * @return {!proto.rv.data.Slide.Element.DataLink.Presentation} returns this
 */
proto.rv.data.Slide.Element.DataLink.Presentation.prototype.setPresentationSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.PlaylistItem.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.PlaylistItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.PlaylistItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.PlaylistItem.toObject = function(includeInstance, msg) {
  var f, obj = {
playlistitemsource: jspb.Message.getFieldWithDefault(msg, 1, 0),
showarrangement: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaylistItem}
 */
proto.rv.data.Slide.Element.DataLink.PlaylistItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.PlaylistItem;
  return proto.rv.data.Slide.Element.DataLink.PlaylistItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.PlaylistItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaylistItem}
 */
proto.rv.data.Slide.Element.DataLink.PlaylistItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.PlaylistItem.PlaylistItemSourceType} */ (reader.readEnum());
      msg.setPlaylistitemsource(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShowarrangement(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.PlaylistItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.PlaylistItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.PlaylistItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.PlaylistItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlaylistitemsource();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getShowarrangement();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.PlaylistItem.PlaylistItemSourceType = {
  PLAYLIST_ITEM_SOURCE_TYPE_CURRENT: 0,
  PLAYLIST_ITEM_SOURCE_TYPE_NEXT: 1,
  PLAYLIST_ITEM_SOURCE_TYPE_CURRENT_HEADER: 2,
  PLAYLIST_ITEM_SOURCE_TYPE_NEXT_HEADER: 3,
  PLAYLIST_ITEM_SOURCE_TYPE_PARENT_PLAYLIST: 4
};

/**
 * optional PlaylistItemSourceType playlistItemSource = 1;
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaylistItem.PlaylistItemSourceType}
 */
proto.rv.data.Slide.Element.DataLink.PlaylistItem.prototype.getPlaylistitemsource = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.PlaylistItem.PlaylistItemSourceType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.PlaylistItem.PlaylistItemSourceType} value
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaylistItem} returns this
 */
proto.rv.data.Slide.Element.DataLink.PlaylistItem.prototype.setPlaylistitemsource = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool showArrangement = 2;
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.PlaylistItem.prototype.getShowarrangement = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaylistItem} returns this
 */
proto.rv.data.Slide.Element.DataLink.PlaylistItem.prototype.setShowarrangement = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining.toObject = function(includeInstance, msg) {
  var f, obj = {
autoAdvanceSource: jspb.Message.getFieldWithDefault(msg, 1, 0),
timerFormat: (f = msg.getTimerFormat()) && proto.rv.data.Timer.Format.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining}
 */
proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining;
  return proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining}
 */
proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining.AutoAdvanceSource} */ (reader.readEnum());
      msg.setAutoAdvanceSource(value);
      break;
    case 2:
      var value = new proto.rv.data.Timer.Format;
      reader.readMessage(value,proto.rv.data.Timer.Format.deserializeBinaryFromReader);
      msg.setTimerFormat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAutoAdvanceSource();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTimerFormat();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.Timer.Format.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining.AutoAdvanceSource = {
  AUTO_ADVANCE_SOURCE_PRESENTATION: 0,
  AUTO_ADVANCE_SOURCE_ANNOUNCEMENT: 1
};

/**
 * optional AutoAdvanceSource auto_advance_source = 1;
 * @return {!proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining.AutoAdvanceSource}
 */
proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining.prototype.getAutoAdvanceSource = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining.AutoAdvanceSource} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining.AutoAdvanceSource} value
 * @return {!proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining} returns this
 */
proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining.prototype.setAutoAdvanceSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Timer.Format timer_format = 2;
 * @return {?proto.rv.data.Timer.Format}
 */
proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining.prototype.getTimerFormat = function() {
  return /** @type{?proto.rv.data.Timer.Format} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Timer.Format, 2));
};


/**
 * @param {?proto.rv.data.Timer.Format|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining} returns this
*/
proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining.prototype.setTimerFormat = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining} returns this
 */
proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining.prototype.clearTimerFormat = function() {
  return this.setTimerFormat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining.prototype.hasTimerFormat = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.TexttypeCase = {
  TEXTTYPE_NOT_SET: 0,
  STATUS_TEXT: 1,
  ELAPSED_TIME: 2
};

/**
 * @return {proto.rv.data.Slide.Element.DataLink.CaptureStatusText.TexttypeCase}
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.prototype.getTexttypeCase = function() {
  return /** @type {proto.rv.data.Slide.Element.DataLink.CaptureStatusText.TexttypeCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.Slide.Element.DataLink.CaptureStatusText.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.CaptureStatusText.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.CaptureStatusText} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.toObject = function(includeInstance, msg) {
  var f, obj = {
statusText: (f = msg.getStatusText()) && proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText.toObject(includeInstance, f),
elapsedTime: (f = msg.getElapsedTime()) && proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.CaptureStatusText}
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.CaptureStatusText;
  return proto.rv.data.Slide.Element.DataLink.CaptureStatusText.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.CaptureStatusText} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.CaptureStatusText}
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText.deserializeBinaryFromReader);
      msg.setStatusText(value);
      break;
    case 2:
      var value = new proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime.deserializeBinaryFromReader);
      msg.setElapsedTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.CaptureStatusText.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.CaptureStatusText} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatusText();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText.serializeBinaryToWriter
    );
  }
  f = message.getElapsedTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText}
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText;
  return proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText}
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime.toObject = function(includeInstance, msg) {
  var f, obj = {
timerFormat: (f = msg.getTimerFormat()) && proto.rv.data.Timer.Format.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime}
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime;
  return proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime}
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Timer.Format;
      reader.readMessage(value,proto.rv.data.Timer.Format.deserializeBinaryFromReader);
      msg.setTimerFormat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimerFormat();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Timer.Format.serializeBinaryToWriter
    );
  }
};


/**
 * optional Timer.Format timer_format = 1;
 * @return {?proto.rv.data.Timer.Format}
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime.prototype.getTimerFormat = function() {
  return /** @type{?proto.rv.data.Timer.Format} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Timer.Format, 1));
};


/**
 * @param {?proto.rv.data.Timer.Format|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime} returns this
*/
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime.prototype.setTimerFormat = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime} returns this
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime.prototype.clearTimerFormat = function() {
  return this.setTimerFormat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime.prototype.hasTimerFormat = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional StatusText status_text = 1;
 * @return {?proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText}
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.prototype.getStatusText = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText, 1));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.CaptureStatusText.StatusText|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.CaptureStatusText} returns this
*/
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.prototype.setStatusText = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.data.Slide.Element.DataLink.CaptureStatusText.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.CaptureStatusText} returns this
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.prototype.clearStatusText = function() {
  return this.setStatusText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.prototype.hasStatusText = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ElapsedTime elapsed_time = 2;
 * @return {?proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime}
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.prototype.getElapsedTime = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime, 2));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.CaptureStatusText.ElapsedTime|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.CaptureStatusText} returns this
*/
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.prototype.setElapsedTime = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.data.Slide.Element.DataLink.CaptureStatusText.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.CaptureStatusText} returns this
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.prototype.clearElapsedTime = function() {
  return this.setElapsedTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusText.prototype.hasElapsedTime = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusColor.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.CaptureStatusColor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.CaptureStatusColor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusColor.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.CaptureStatusColor}
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusColor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.CaptureStatusColor;
  return proto.rv.data.Slide.Element.DataLink.CaptureStatusColor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.CaptureStatusColor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.CaptureStatusColor}
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusColor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusColor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.CaptureStatusColor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.CaptureStatusColor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.CaptureStatusColor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.SlideCount.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.SlideCount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.SlideCount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.SlideCount.toObject = function(includeInstance, msg) {
  var f, obj = {
slidecountsourcetype: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.SlideCount}
 */
proto.rv.data.Slide.Element.DataLink.SlideCount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.SlideCount;
  return proto.rv.data.Slide.Element.DataLink.SlideCount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.SlideCount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.SlideCount}
 */
proto.rv.data.Slide.Element.DataLink.SlideCount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.SlideCount.SlideCountSourceType} */ (reader.readEnum());
      msg.setSlidecountsourcetype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.SlideCount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.SlideCount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.SlideCount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.SlideCount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlidecountsourcetype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.SlideCount.SlideCountSourceType = {
  SLIDE_COUNT_SOURCE_TYPE_CURRENT: 0,
  SLIDE_COUNT_SOURCE_TYPE_REMAINING: 1,
  SLIDE_COUNT_SOURCE_TYPE_TOTAL: 2
};

/**
 * optional SlideCountSourceType slideCountSourceType = 1;
 * @return {!proto.rv.data.Slide.Element.DataLink.SlideCount.SlideCountSourceType}
 */
proto.rv.data.Slide.Element.DataLink.SlideCount.prototype.getSlidecountsourcetype = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.SlideCount.SlideCountSourceType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.SlideCount.SlideCountSourceType} value
 * @return {!proto.rv.data.Slide.Element.DataLink.SlideCount} returns this
 */
proto.rv.data.Slide.Element.DataLink.SlideCount.prototype.setSlidecountsourcetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.toObject = function(includeInstance, msg) {
  var f, obj = {
destination: jspb.Message.getFieldWithDefault(msg, 1, 0),
type: jspb.Message.getFieldWithDefault(msg, 2, 0),
name: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier;
  return proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.Destination} */ (reader.readEnum());
      msg.setDestination(value);
      break;
    case 2:
      var value = /** @type {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDestination();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.Type = {
  PLAYBACK_MARKER_IDENTIFIER_FIRST: 0,
  PLAYBACK_MARKER_IDENTIFIER_PREVIOUS: 1,
  PLAYBACK_MARKER_IDENTIFIER_NEXT: 2,
  PLAYBACK_MARKER_IDENTIFIER_LAST: 3,
  PLAYBACK_MARKER_IDENTIFIER_NAME: 4
};

/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.Destination = {
  PLAYBACK_MARKER_DESTINATION_PRESENTATION: 0,
  PLAYBACK_MARKER_DESTINATION_ANNOUNCEMENT: 1,
  PLAYBACK_MARKER_DESTINATION_AUDIO: 2
};

/**
 * optional Destination destination = 1;
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.Destination}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.prototype.getDestination = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.Destination} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.Destination} value
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier} returns this
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.prototype.setDestination = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Type type = 2;
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.Type}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.prototype.getType = function() {
  return /** @type {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.Type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.Type} value
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier} returns this
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier} returns this
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.TexttypeCase = {
  TEXTTYPE_NOT_SET: 0,
  NAME: 2,
  TIME: 3
};

/**
 * @return {proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.TexttypeCase}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.prototype.getTexttypeCase = function() {
  return /** @type {proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.TexttypeCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.toObject = function(includeInstance, msg) {
  var f, obj = {
identifier: (f = msg.getIdentifier()) && proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.toObject(includeInstance, f),
shouldUseMarkerColor: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
name: (f = msg.getName()) && proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name.toObject(includeInstance, f),
time: (f = msg.getTime()) && proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText;
  return proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.deserializeBinaryFromReader);
      msg.setIdentifier(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShouldUseMarkerColor(value);
      break;
    case 2:
      var value = new proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 3:
      var value = new proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time;
      reader.readMessage(value,proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentifier();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier.serializeBinaryToWriter
    );
  }
  f = message.getShouldUseMarkerColor();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name.serializeBinaryToWriter
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name;
  return proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time.toObject = function(includeInstance, msg) {
  var f, obj = {
format: (f = msg.getFormat()) && proto.rv.data.Timer.Format.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time;
  return proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Timer.Format;
      reader.readMessage(value,proto.rv.data.Timer.Format.deserializeBinaryFromReader);
      msg.setFormat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFormat();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Timer.Format.serializeBinaryToWriter
    );
  }
};


/**
 * optional Timer.Format format = 1;
 * @return {?proto.rv.data.Timer.Format}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time.prototype.getFormat = function() {
  return /** @type{?proto.rv.data.Timer.Format} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Timer.Format, 1));
};


/**
 * @param {?proto.rv.data.Timer.Format|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time} returns this
*/
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time.prototype.setFormat = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time} returns this
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time.prototype.clearFormat = function() {
  return this.setFormat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time.prototype.hasFormat = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PlaybackMarkerIdentifier identifier = 1;
 * @return {?proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.prototype.getIdentifier = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier, 1));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText} returns this
*/
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.prototype.setIdentifier = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText} returns this
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.prototype.clearIdentifier = function() {
  return this.setIdentifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.prototype.hasIdentifier = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool should_use_marker_color = 4;
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.prototype.getShouldUseMarkerColor = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText} returns this
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.prototype.setShouldUseMarkerColor = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional Name name = 2;
 * @return {?proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.prototype.getName = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name, 2));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Name|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText} returns this
*/
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.prototype.setName = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText} returns this
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.prototype.clearName = function() {
  return this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Time time = 3;
 * @return {?proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.prototype.getTime = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time, 3));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.Time|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText} returns this
*/
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.prototype.setTime = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText} returns this
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText.prototype.hasTime = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.ChordProChart.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.ChordProChart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.ChordProChart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.ChordProChart.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.ChordProChart}
 */
proto.rv.data.Slide.Element.DataLink.ChordProChart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.ChordProChart;
  return proto.rv.data.Slide.Element.DataLink.ChordProChart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.ChordProChart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.ChordProChart}
 */
proto.rv.data.Slide.Element.DataLink.ChordProChart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.ChordProChart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.ChordProChart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.ChordProChart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.ChordProChart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.TimecodeText.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.TimecodeText.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.TimecodeText} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.TimecodeText.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.TimecodeText}
 */
proto.rv.data.Slide.Element.DataLink.TimecodeText.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.TimecodeText;
  return proto.rv.data.Slide.Element.DataLink.TimecodeText.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.TimecodeText} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.TimecodeText}
 */
proto.rv.data.Slide.Element.DataLink.TimecodeText.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.TimecodeText.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.TimecodeText.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.TimecodeText} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.TimecodeText.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.DataLink.TimecodeStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.DataLink.TimecodeStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.DataLink.TimecodeStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.TimecodeStatus.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.DataLink.TimecodeStatus}
 */
proto.rv.data.Slide.Element.DataLink.TimecodeStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.DataLink.TimecodeStatus;
  return proto.rv.data.Slide.Element.DataLink.TimecodeStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.DataLink.TimecodeStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.DataLink.TimecodeStatus}
 */
proto.rv.data.Slide.Element.DataLink.TimecodeStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.DataLink.TimecodeStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.DataLink.TimecodeStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.DataLink.TimecodeStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.DataLink.TimecodeStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional Ticker ticker = 1;
 * @return {?proto.rv.data.Slide.Element.DataLink.Ticker}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getTicker = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.Ticker} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.Ticker, 1));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.Ticker|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setTicker = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearTicker = function() {
  return this.setTicker(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasTicker = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AlternateElementText alternate_text = 2;
 * @return {?proto.rv.data.Slide.Element.DataLink.AlternateElementText}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getAlternateText = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.AlternateElementText} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.AlternateElementText, 2));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.AlternateElementText|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setAlternateText = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearAlternateText = function() {
  return this.setAlternateText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasAlternateText = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TimerText timer_text = 3;
 * @return {?proto.rv.data.Slide.Element.DataLink.TimerText}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getTimerText = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.TimerText} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.TimerText, 3));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.TimerText|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setTimerText = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearTimerText = function() {
  return this.setTimerText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasTimerText = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ClockText clock_text = 4;
 * @return {?proto.rv.data.Slide.Element.DataLink.ClockText}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getClockText = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.ClockText} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.ClockText, 4));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.ClockText|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setClockText = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearClockText = function() {
  return this.setClockText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasClockText = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ChordChart chord_chart = 5;
 * @return {?proto.rv.data.Slide.Element.DataLink.ChordChart}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getChordChart = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.ChordChart} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.ChordChart, 5));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.ChordChart|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setChordChart = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearChordChart = function() {
  return this.setChordChart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasChordChart = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional OutputScreen output_screen = 6;
 * @return {?proto.rv.data.Slide.Element.DataLink.OutputScreen}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getOutputScreen = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.OutputScreen} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.OutputScreen, 6));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.OutputScreen|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setOutputScreen = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearOutputScreen = function() {
  return this.setOutputScreen(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasOutputScreen = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional PCOLive pco_live = 7;
 * @return {?proto.rv.data.Slide.Element.DataLink.PCOLive}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getPcoLive = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.PCOLive} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.PCOLive, 7));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.PCOLive|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setPcoLive = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearPcoLive = function() {
  return this.setPcoLive(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasPcoLive = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional AlternateElementFill alternate_fill = 8;
 * @return {?proto.rv.data.Slide.Element.DataLink.AlternateElementFill}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getAlternateFill = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.AlternateElementFill} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.AlternateElementFill, 8));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.AlternateElementFill|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setAlternateFill = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearAlternateFill = function() {
  return this.setAlternateFill(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasAlternateFill = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional VisibilityLink visibility_link = 9;
 * @return {?proto.rv.data.Slide.Element.DataLink.VisibilityLink}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getVisibilityLink = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.VisibilityLink} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.VisibilityLink, 9));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.VisibilityLink|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setVisibilityLink = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearVisibilityLink = function() {
  return this.setVisibilityLink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasVisibilityLink = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional SlideText slide_text = 10;
 * @return {?proto.rv.data.Slide.Element.DataLink.SlideText}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getSlideText = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.SlideText} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.SlideText, 10));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.SlideText|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setSlideText = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearSlideText = function() {
  return this.setSlideText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasSlideText = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional StageMessage stage_message = 11;
 * @return {?proto.rv.data.Slide.Element.DataLink.StageMessage}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getStageMessage = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.StageMessage} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.StageMessage, 11));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.StageMessage|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setStageMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearStageMessage = function() {
  return this.setStageMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasStageMessage = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional VideoCountdown video_countdown = 12;
 * @return {?proto.rv.data.Slide.Element.DataLink.VideoCountdown}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getVideoCountdown = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.VideoCountdown} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.VideoCountdown, 12));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.VideoCountdown|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setVideoCountdown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearVideoCountdown = function() {
  return this.setVideoCountdown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasVideoCountdown = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional SlideImage slide_image = 13;
 * @return {?proto.rv.data.Slide.Element.DataLink.SlideImage}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getSlideImage = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.SlideImage} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.SlideImage, 13));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.SlideImage|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setSlideImage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearSlideImage = function() {
  return this.setSlideImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasSlideImage = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional CCLIText ccli_text = 14;
 * @return {?proto.rv.data.Slide.Element.DataLink.CCLIText}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getCcliText = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.CCLIText} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.CCLIText, 14));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.CCLIText|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setCcliText = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearCcliText = function() {
  return this.setCcliText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasCcliText = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional GroupName group_name = 15;
 * @return {?proto.rv.data.Slide.Element.DataLink.GroupName}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getGroupName = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.GroupName} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.GroupName, 15));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.GroupName|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setGroupName = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearGroupName = function() {
  return this.setGroupName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasGroupName = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional GroupColor group_color = 16;
 * @return {?proto.rv.data.Slide.Element.DataLink.GroupColor}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getGroupColor = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.GroupColor} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.GroupColor, 16));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.GroupColor|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setGroupColor = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearGroupColor = function() {
  return this.setGroupColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasGroupColor = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional PresentationNotes presentation_notes = 17;
 * @return {?proto.rv.data.Slide.Element.DataLink.PresentationNotes}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getPresentationNotes = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.PresentationNotes} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.PresentationNotes, 17));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.PresentationNotes|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setPresentationNotes = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearPresentationNotes = function() {
  return this.setPresentationNotes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasPresentationNotes = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional PlaylistItem playlist_item = 18;
 * @return {?proto.rv.data.Slide.Element.DataLink.PlaylistItem}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getPlaylistItem = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.PlaylistItem} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.PlaylistItem, 18));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.PlaylistItem|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setPlaylistItem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearPlaylistItem = function() {
  return this.setPlaylistItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasPlaylistItem = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional AutoAdvanceTimeRemaining auto_advance_time_remaining = 19;
 * @return {?proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getAutoAdvanceTimeRemaining = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining, 19));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.AutoAdvanceTimeRemaining|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setAutoAdvanceTimeRemaining = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearAutoAdvanceTimeRemaining = function() {
  return this.setAutoAdvanceTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasAutoAdvanceTimeRemaining = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional CaptureStatusText capture_status_text = 20;
 * @return {?proto.rv.data.Slide.Element.DataLink.CaptureStatusText}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getCaptureStatusText = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.CaptureStatusText} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.CaptureStatusText, 20));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.CaptureStatusText|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setCaptureStatusText = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearCaptureStatusText = function() {
  return this.setCaptureStatusText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasCaptureStatusText = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional CaptureStatusColor capture_status_color = 21;
 * @return {?proto.rv.data.Slide.Element.DataLink.CaptureStatusColor}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getCaptureStatusColor = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.CaptureStatusColor} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.CaptureStatusColor, 21));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.CaptureStatusColor|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setCaptureStatusColor = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearCaptureStatusColor = function() {
  return this.setCaptureStatusColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasCaptureStatusColor = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional SlideCount slide_count = 22;
 * @return {?proto.rv.data.Slide.Element.DataLink.SlideCount}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getSlideCount = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.SlideCount} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.SlideCount, 22));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.SlideCount|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setSlideCount = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearSlideCount = function() {
  return this.setSlideCount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasSlideCount = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional AudioCountdown audio_countdown = 23;
 * @return {?proto.rv.data.Slide.Element.DataLink.AudioCountdown}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getAudioCountdown = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.AudioCountdown} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.AudioCountdown, 23));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.AudioCountdown|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setAudioCountdown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 23, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearAudioCountdown = function() {
  return this.setAudioCountdown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasAudioCountdown = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional Presentation presentation = 24;
 * @return {?proto.rv.data.Slide.Element.DataLink.Presentation}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getPresentation = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.Presentation} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.Presentation, 24));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.Presentation|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setPresentation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 24, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearPresentation = function() {
  return this.setPresentation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasPresentation = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional SlideLabelText slide_Label_Text = 25;
 * @return {?proto.rv.data.Slide.Element.DataLink.SlideLabelText}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getSlideLabelText = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.SlideLabelText} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.SlideLabelText, 25));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.SlideLabelText|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setSlideLabelText = function(value) {
  return jspb.Message.setOneofWrapperField(this, 25, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearSlideLabelText = function() {
  return this.setSlideLabelText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasSlideLabelText = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional SlideLabelColor slide_Label_Color = 26;
 * @return {?proto.rv.data.Slide.Element.DataLink.SlideLabelColor}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getSlideLabelColor = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.SlideLabelColor} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.SlideLabelColor, 26));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.SlideLabelColor|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setSlideLabelColor = function(value) {
  return jspb.Message.setOneofWrapperField(this, 26, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearSlideLabelColor = function() {
  return this.setSlideLabelColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasSlideLabelColor = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional RSSFeed rss_feed = 27;
 * @return {?proto.rv.data.Slide.Element.DataLink.RSSFeed}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getRssFeed = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.RSSFeed} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.RSSFeed, 27));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.RSSFeed|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setRssFeed = function(value) {
  return jspb.Message.setOneofWrapperField(this, 27, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearRssFeed = function() {
  return this.setRssFeed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasRssFeed = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional FileFeed file_feed = 28;
 * @return {?proto.rv.data.Slide.Element.DataLink.FileFeed}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getFileFeed = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.FileFeed} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.FileFeed, 28));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.FileFeed|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setFileFeed = function(value) {
  return jspb.Message.setOneofWrapperField(this, 28, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearFileFeed = function() {
  return this.setFileFeed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasFileFeed = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional ChordProChart chord_pro_chart = 29;
 * @return {?proto.rv.data.Slide.Element.DataLink.ChordProChart}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getChordProChart = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.ChordProChart} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.ChordProChart, 29));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.ChordProChart|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setChordProChart = function(value) {
  return jspb.Message.setOneofWrapperField(this, 29, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearChordProChart = function() {
  return this.setChordProChart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasChordProChart = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional PlaybackMarkerText playback_marker_text = 30;
 * @return {?proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getPlaybackMarkerText = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText, 30));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.PlaybackMarkerText|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setPlaybackMarkerText = function(value) {
  return jspb.Message.setOneofWrapperField(this, 30, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearPlaybackMarkerText = function() {
  return this.setPlaybackMarkerText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasPlaybackMarkerText = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional PlaybackMarkerIdentifier playback_marker_color = 32;
 * @return {?proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getPlaybackMarkerColor = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier, 32));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.PlaybackMarkerIdentifier|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setPlaybackMarkerColor = function(value) {
  return jspb.Message.setOneofWrapperField(this, 32, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearPlaybackMarkerColor = function() {
  return this.setPlaybackMarkerColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasPlaybackMarkerColor = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional TimecodeText timecode_text = 33;
 * @return {?proto.rv.data.Slide.Element.DataLink.TimecodeText}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getTimecodeText = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.TimecodeText} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.TimecodeText, 33));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.TimecodeText|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setTimecodeText = function(value) {
  return jspb.Message.setOneofWrapperField(this, 33, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearTimecodeText = function() {
  return this.setTimecodeText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasTimecodeText = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional TimecodeStatus timecode_status = 34;
 * @return {?proto.rv.data.Slide.Element.DataLink.TimecodeStatus}
 */
proto.rv.data.Slide.Element.DataLink.prototype.getTimecodeStatus = function() {
  return /** @type{?proto.rv.data.Slide.Element.DataLink.TimecodeStatus} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.DataLink.TimecodeStatus, 34));
};


/**
 * @param {?proto.rv.data.Slide.Element.DataLink.TimecodeStatus|undefined} value
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
*/
proto.rv.data.Slide.Element.DataLink.prototype.setTimecodeStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 34, proto.rv.data.Slide.Element.DataLink.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element.DataLink} returns this
 */
proto.rv.data.Slide.Element.DataLink.prototype.clearTimecodeStatus = function() {
  return this.setTimecodeStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.DataLink.prototype.hasTimecodeStatus = function() {
  return jspb.Message.getField(this, 34) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rv.data.Slide.Element.TextScroller.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Slide.Element.TextScroller.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Slide.Element.TextScroller} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.TextScroller.toObject = function(includeInstance, msg) {
  var f, obj = {
shouldScroll: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
scrollRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
shouldRepeat: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
repeatDistance: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
scrollingDirection: jspb.Message.getFieldWithDefault(msg, 5, 0),
startsOffScreen: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
fadeLeft: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
fadeRight: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rv.data.Slide.Element.TextScroller}
 */
proto.rv.data.Slide.Element.TextScroller.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Slide.Element.TextScroller;
  return proto.rv.data.Slide.Element.TextScroller.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Slide.Element.TextScroller} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Slide.Element.TextScroller}
 */
proto.rv.data.Slide.Element.TextScroller.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShouldScroll(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setScrollRate(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShouldRepeat(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRepeatDistance(value);
      break;
    case 5:
      var value = /** @type {!proto.rv.data.Slide.Element.TextScroller.Direction} */ (reader.readEnum());
      msg.setScrollingDirection(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStartsOffScreen(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFadeLeft(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFadeRight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rv.data.Slide.Element.TextScroller.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Slide.Element.TextScroller.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Slide.Element.TextScroller} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Slide.Element.TextScroller.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShouldScroll();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getScrollRate();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getShouldRepeat();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getRepeatDistance();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getScrollingDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getStartsOffScreen();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getFadeLeft();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getFadeRight();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Slide.Element.TextScroller.Direction = {
  DIRECTION_LEFT: 0,
  DIRECTION_RIGHT: 1,
  DIRECTION_UP: 2,
  DIRECTION_DOWN: 3
};

/**
 * optional bool should_scroll = 1;
 * @return {boolean}
 */
proto.rv.data.Slide.Element.TextScroller.prototype.getShouldScroll = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Slide.Element.TextScroller} returns this
 */
proto.rv.data.Slide.Element.TextScroller.prototype.setShouldScroll = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional double scroll_rate = 2;
 * @return {number}
 */
proto.rv.data.Slide.Element.TextScroller.prototype.getScrollRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Slide.Element.TextScroller} returns this
 */
proto.rv.data.Slide.Element.TextScroller.prototype.setScrollRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional bool should_repeat = 3;
 * @return {boolean}
 */
proto.rv.data.Slide.Element.TextScroller.prototype.getShouldRepeat = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Slide.Element.TextScroller} returns this
 */
proto.rv.data.Slide.Element.TextScroller.prototype.setShouldRepeat = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional double repeat_distance = 4;
 * @return {number}
 */
proto.rv.data.Slide.Element.TextScroller.prototype.getRepeatDistance = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Slide.Element.TextScroller} returns this
 */
proto.rv.data.Slide.Element.TextScroller.prototype.setRepeatDistance = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional Direction scrolling_direction = 5;
 * @return {!proto.rv.data.Slide.Element.TextScroller.Direction}
 */
proto.rv.data.Slide.Element.TextScroller.prototype.getScrollingDirection = function() {
  return /** @type {!proto.rv.data.Slide.Element.TextScroller.Direction} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.TextScroller.Direction} value
 * @return {!proto.rv.data.Slide.Element.TextScroller} returns this
 */
proto.rv.data.Slide.Element.TextScroller.prototype.setScrollingDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional bool starts_off_screen = 6;
 * @return {boolean}
 */
proto.rv.data.Slide.Element.TextScroller.prototype.getStartsOffScreen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Slide.Element.TextScroller} returns this
 */
proto.rv.data.Slide.Element.TextScroller.prototype.setStartsOffScreen = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional double fade_left = 7;
 * @return {number}
 */
proto.rv.data.Slide.Element.TextScroller.prototype.getFadeLeft = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Slide.Element.TextScroller} returns this
 */
proto.rv.data.Slide.Element.TextScroller.prototype.setFadeLeft = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double fade_right = 8;
 * @return {number}
 */
proto.rv.data.Slide.Element.TextScroller.prototype.getFadeRight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Slide.Element.TextScroller} returns this
 */
proto.rv.data.Slide.Element.TextScroller.prototype.setFadeRight = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional Graphics.Element element = 1;
 * @return {?proto.rv.data.Graphics.Element}
 */
proto.rv.data.Slide.Element.prototype.getElement = function() {
  return /** @type{?proto.rv.data.Graphics.Element} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Element, 1));
};


/**
 * @param {?proto.rv.data.Graphics.Element|undefined} value
 * @return {!proto.rv.data.Slide.Element} returns this
*/
proto.rv.data.Slide.Element.prototype.setElement = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element} returns this
 */
proto.rv.data.Slide.Element.prototype.clearElement = function() {
  return this.setElement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.prototype.hasElement = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Build build_in = 2;
 * @return {?proto.rv.data.Slide.Element.Build}
 */
proto.rv.data.Slide.Element.prototype.getBuildIn = function() {
  return /** @type{?proto.rv.data.Slide.Element.Build} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.Build, 2));
};


/**
 * @param {?proto.rv.data.Slide.Element.Build|undefined} value
 * @return {!proto.rv.data.Slide.Element} returns this
*/
proto.rv.data.Slide.Element.prototype.setBuildIn = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element} returns this
 */
proto.rv.data.Slide.Element.prototype.clearBuildIn = function() {
  return this.setBuildIn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.prototype.hasBuildIn = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Build build_out = 3;
 * @return {?proto.rv.data.Slide.Element.Build}
 */
proto.rv.data.Slide.Element.prototype.getBuildOut = function() {
  return /** @type{?proto.rv.data.Slide.Element.Build} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.Build, 3));
};


/**
 * @param {?proto.rv.data.Slide.Element.Build|undefined} value
 * @return {!proto.rv.data.Slide.Element} returns this
*/
proto.rv.data.Slide.Element.prototype.setBuildOut = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element} returns this
 */
proto.rv.data.Slide.Element.prototype.clearBuildOut = function() {
  return this.setBuildOut(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.prototype.hasBuildOut = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 info = 4;
 * @return {number}
 */
proto.rv.data.Slide.Element.prototype.getInfo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Slide.Element} returns this
 */
proto.rv.data.Slide.Element.prototype.setInfo = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional TextRevealType reveal_type = 5;
 * @return {!proto.rv.data.Slide.Element.TextRevealType}
 */
proto.rv.data.Slide.Element.prototype.getRevealType = function() {
  return /** @type {!proto.rv.data.Slide.Element.TextRevealType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.rv.data.Slide.Element.TextRevealType} value
 * @return {!proto.rv.data.Slide.Element} returns this
 */
proto.rv.data.Slide.Element.prototype.setRevealType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * repeated DataLink data_links = 6;
 * @return {!Array<!proto.rv.data.Slide.Element.DataLink>}
 */
proto.rv.data.Slide.Element.prototype.getDataLinksList = function() {
  return /** @type{!Array<!proto.rv.data.Slide.Element.DataLink>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.Slide.Element.DataLink, 6));
};


/**
 * @param {!Array<!proto.rv.data.Slide.Element.DataLink>} value
 * @return {!proto.rv.data.Slide.Element} returns this
*/
proto.rv.data.Slide.Element.prototype.setDataLinksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.rv.data.Slide.Element.DataLink=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.Slide.Element.DataLink}
 */
proto.rv.data.Slide.Element.prototype.addDataLinks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.rv.data.Slide.Element.DataLink, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Slide.Element} returns this
 */
proto.rv.data.Slide.Element.prototype.clearDataLinksList = function() {
  return this.setDataLinksList([]);
};


/**
 * repeated ChildBuild childBuilds = 7;
 * @return {!Array<!proto.rv.data.Slide.Element.ChildBuild>}
 */
proto.rv.data.Slide.Element.prototype.getChildbuildsList = function() {
  return /** @type{!Array<!proto.rv.data.Slide.Element.ChildBuild>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.Slide.Element.ChildBuild, 7));
};


/**
 * @param {!Array<!proto.rv.data.Slide.Element.ChildBuild>} value
 * @return {!proto.rv.data.Slide.Element} returns this
*/
proto.rv.data.Slide.Element.prototype.setChildbuildsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.rv.data.Slide.Element.ChildBuild=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.Slide.Element.ChildBuild}
 */
proto.rv.data.Slide.Element.prototype.addChildbuilds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.rv.data.Slide.Element.ChildBuild, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Slide.Element} returns this
 */
proto.rv.data.Slide.Element.prototype.clearChildbuildsList = function() {
  return this.setChildbuildsList([]);
};


/**
 * optional uint32 reveal_from_index = 8;
 * @return {number}
 */
proto.rv.data.Slide.Element.prototype.getRevealFromIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Slide.Element} returns this
 */
proto.rv.data.Slide.Element.prototype.setRevealFromIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional TextScroller text_scroller = 9;
 * @return {?proto.rv.data.Slide.Element.TextScroller}
 */
proto.rv.data.Slide.Element.prototype.getTextScroller = function() {
  return /** @type{?proto.rv.data.Slide.Element.TextScroller} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Slide.Element.TextScroller, 9));
};


/**
 * @param {?proto.rv.data.Slide.Element.TextScroller|undefined} value
 * @return {!proto.rv.data.Slide.Element} returns this
*/
proto.rv.data.Slide.Element.prototype.setTextScroller = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide.Element} returns this
 */
proto.rv.data.Slide.Element.prototype.clearTextScroller = function() {
  return this.setTextScroller(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.Element.prototype.hasTextScroller = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated Element elements = 1;
 * @return {!Array<!proto.rv.data.Slide.Element>}
 */
proto.rv.data.Slide.prototype.getElementsList = function() {
  return /** @type{!Array<!proto.rv.data.Slide.Element>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.Slide.Element, 1));
};


/**
 * @param {!Array<!proto.rv.data.Slide.Element>} value
 * @return {!proto.rv.data.Slide} returns this
*/
proto.rv.data.Slide.prototype.setElementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.rv.data.Slide.Element=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.Slide.Element}
 */
proto.rv.data.Slide.prototype.addElements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.rv.data.Slide.Element, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Slide} returns this
 */
proto.rv.data.Slide.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};


/**
 * repeated UUID element_build_order = 2;
 * @return {!Array<!proto.rv.data.UUID>}
 */
proto.rv.data.Slide.prototype.getElementBuildOrderList = function() {
  return /** @type{!Array<!proto.rv.data.UUID>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.UUID, 2));
};


/**
 * @param {!Array<!proto.rv.data.UUID>} value
 * @return {!proto.rv.data.Slide} returns this
*/
proto.rv.data.Slide.prototype.setElementBuildOrderList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.rv.data.UUID=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.UUID}
 */
proto.rv.data.Slide.prototype.addElementBuildOrder = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.rv.data.UUID, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Slide} returns this
 */
proto.rv.data.Slide.prototype.clearElementBuildOrderList = function() {
  return this.setElementBuildOrderList([]);
};


/**
 * repeated AlignmentGuide guidelines = 3;
 * @return {!Array<!proto.rv.data.AlignmentGuide>}
 */
proto.rv.data.Slide.prototype.getGuidelinesList = function() {
  return /** @type{!Array<!proto.rv.data.AlignmentGuide>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.AlignmentGuide, 3));
};


/**
 * @param {!Array<!proto.rv.data.AlignmentGuide>} value
 * @return {!proto.rv.data.Slide} returns this
*/
proto.rv.data.Slide.prototype.setGuidelinesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.rv.data.AlignmentGuide=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.AlignmentGuide}
 */
proto.rv.data.Slide.prototype.addGuidelines = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.rv.data.AlignmentGuide, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Slide} returns this
 */
proto.rv.data.Slide.prototype.clearGuidelinesList = function() {
  return this.setGuidelinesList([]);
};


/**
 * optional bool draws_background_color = 4;
 * @return {boolean}
 */
proto.rv.data.Slide.prototype.getDrawsBackgroundColor = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Slide} returns this
 */
proto.rv.data.Slide.prototype.setDrawsBackgroundColor = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional Color background_color = 5;
 * @return {?proto.rv.data.Color}
 */
proto.rv.data.Slide.prototype.getBackgroundColor = function() {
  return /** @type{?proto.rv.data.Color} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Color, 5));
};


/**
 * @param {?proto.rv.data.Color|undefined} value
 * @return {!proto.rv.data.Slide} returns this
*/
proto.rv.data.Slide.prototype.setBackgroundColor = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide} returns this
 */
proto.rv.data.Slide.prototype.clearBackgroundColor = function() {
  return this.setBackgroundColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.prototype.hasBackgroundColor = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Graphics.Size size = 6;
 * @return {?proto.rv.data.Graphics.Size}
 */
proto.rv.data.Slide.prototype.getSize = function() {
  return /** @type{?proto.rv.data.Graphics.Size} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Size, 6));
};


/**
 * @param {?proto.rv.data.Graphics.Size|undefined} value
 * @return {!proto.rv.data.Slide} returns this
*/
proto.rv.data.Slide.prototype.setSize = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide} returns this
 */
proto.rv.data.Slide.prototype.clearSize = function() {
  return this.setSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.prototype.hasSize = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional UUID uuid = 7;
 * @return {?proto.rv.data.UUID}
 */
proto.rv.data.Slide.prototype.getUuid = function() {
  return /** @type{?proto.rv.data.UUID} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.UUID, 7));
};


/**
 * @param {?proto.rv.data.UUID|undefined} value
 * @return {!proto.rv.data.Slide} returns this
*/
proto.rv.data.Slide.prototype.setUuid = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Slide} returns this
 */
proto.rv.data.Slide.prototype.clearUuid = function() {
  return this.setUuid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Slide.prototype.hasUuid = function() {
  return jspb.Message.getField(this, 7) != null;
};


