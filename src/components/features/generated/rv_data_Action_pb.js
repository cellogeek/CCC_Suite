// source: action.proto
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

goog.provide('proto.rv.data.Action');
goog.provide('proto.rv.data.Action.ActionType');
goog.provide('proto.rv.data.Action.ActiontypedataCase');
goog.provide('proto.rv.data.Action.AudienceLookType');
goog.provide('proto.rv.data.Action.AudioInputType');
goog.provide('proto.rv.data.Action.BackgroundType');
goog.provide('proto.rv.data.Action.BlendModeType');
goog.provide('proto.rv.data.Action.CaptureType');
goog.provide('proto.rv.data.Action.CaptureType.CaptureStart');
goog.provide('proto.rv.data.Action.CaptureType.CaptureStop');
goog.provide('proto.rv.data.Action.CaptureType.CaptureactionCase');
goog.provide('proto.rv.data.Action.ClearGroupType');
goog.provide('proto.rv.data.Action.ClearType');
goog.provide('proto.rv.data.Action.ClearType.ClearTargetLayer');
goog.provide('proto.rv.data.Action.CommunicationType');
goog.provide('proto.rv.data.Action.CommunicationType.Command');
goog.provide('proto.rv.data.Action.CommunicationType.CommandtypedataCase');
goog.provide('proto.rv.data.Action.CommunicationType.GVG100Command');
goog.provide('proto.rv.data.Action.CommunicationType.GVG100Command.CommandAction');
goog.provide('proto.rv.data.Action.CommunicationType.GlobalCacheCommand');
goog.provide('proto.rv.data.Action.CommunicationType.GlobalCacheCommand.CommandAction');
goog.provide('proto.rv.data.Action.CommunicationType.MIDICommand');
goog.provide('proto.rv.data.Action.CommunicationType.MIDICommand.State');
goog.provide('proto.rv.data.Action.CommunicationType.SonyBVSCommand');
goog.provide('proto.rv.data.Action.CommunicationType.SonyBVSCommand.CommandAction');
goog.provide('proto.rv.data.Action.ContentDestination');
goog.provide('proto.rv.data.Action.DocumentType');
goog.provide('proto.rv.data.Action.DoubleType');
goog.provide('proto.rv.data.Action.EffectsType');
goog.provide('proto.rv.data.Action.ExternalPresentationType');
goog.provide('proto.rv.data.Action.Label');
goog.provide('proto.rv.data.Action.LayerIdentification');
goog.provide('proto.rv.data.Action.LayerType');
goog.provide('proto.rv.data.Action.MacroType');
goog.provide('proto.rv.data.Action.MaskType');
goog.provide('proto.rv.data.Action.MediaType');
goog.provide('proto.rv.data.Action.MediaType.Audio');
goog.provide('proto.rv.data.Action.MediaType.Audio.MediaActionAudioType');
goog.provide('proto.rv.data.Action.MediaType.EndBehavior');
goog.provide('proto.rv.data.Action.MediaType.Image');
goog.provide('proto.rv.data.Action.MediaType.LiveVideo');
goog.provide('proto.rv.data.Action.MediaType.MediatypeCase');
goog.provide('proto.rv.data.Action.MediaType.PlaybackBehavior');
goog.provide('proto.rv.data.Action.MediaType.PlaybackMarker');
goog.provide('proto.rv.data.Action.MediaType.Video');
goog.provide('proto.rv.data.Action.MessageType');
goog.provide('proto.rv.data.Action.MultiScreenType');
goog.provide('proto.rv.data.Action.OldType');
goog.provide('proto.rv.data.Action.OldType.Category');
goog.provide('proto.rv.data.Action.PlaylistItemType');
goog.provide('proto.rv.data.Action.PropType');
goog.provide('proto.rv.data.Action.SlideDestinationType');
goog.provide('proto.rv.data.Action.SlideType');
goog.provide('proto.rv.data.Action.SlideType.SlideCase');
goog.provide('proto.rv.data.Action.StageLayoutType');
goog.provide('proto.rv.data.Action.StageLayoutType.SlideTarget');
goog.provide('proto.rv.data.Action.TimerType');
goog.provide('proto.rv.data.Action.TimerType.TimerAction');
goog.provide('proto.rv.data.Action.TransitionType');
goog.provide('proto.rv.data.Action.TransportControlType');
goog.provide('proto.rv.data.Action.TransportControlType.CommandCase');
goog.provide('proto.rv.data.Action.TransportControlType.JumpToTime');
goog.provide('proto.rv.data.Action.TransportControlType.Pause');
goog.provide('proto.rv.data.Action.TransportControlType.Play');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.rv.data.AudioInput.BehaviorMode');
goog.require('proto.rv.data.Background');
goog.require('proto.rv.data.CollectionElementType');
goog.require('proto.rv.data.Color');
goog.require('proto.rv.data.Effect');
goog.require('proto.rv.data.IntRange');
goog.require('proto.rv.data.Layer.Blending');
goog.require('proto.rv.data.Media');
goog.require('proto.rv.data.Message.TokenValue');
goog.require('proto.rv.data.PresentationSlide');
goog.require('proto.rv.data.PropSlide');
goog.require('proto.rv.data.Stage.ScreenAssignment');
goog.require('proto.rv.data.Timer.Configuration');
goog.require('proto.rv.data.Transition');
goog.require('proto.rv.data.URL');
goog.require('proto.rv.data.UUID');

goog.forwardDeclare('proto.rv.data.Layer.BlendMode');
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
proto.rv.data.Action = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.Action.oneofGroups_);
};
goog.inherits(proto.rv.data.Action, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.displayName = 'proto.rv.data.Action';
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
proto.rv.data.Action.OldType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.OldType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.OldType.displayName = 'proto.rv.data.Action.OldType';
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
proto.rv.data.Action.Label = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.Label, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.Label.displayName = 'proto.rv.data.Action.Label';
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
proto.rv.data.Action.LayerIdentification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.LayerIdentification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.LayerIdentification.displayName = 'proto.rv.data.Action.LayerIdentification';
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
proto.rv.data.Action.PlaylistItemType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.PlaylistItemType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.PlaylistItemType.displayName = 'proto.rv.data.Action.PlaylistItemType';
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
proto.rv.data.Action.BlendModeType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.BlendModeType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.BlendModeType.displayName = 'proto.rv.data.Action.BlendModeType';
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
proto.rv.data.Action.TransitionType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.TransitionType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.TransitionType.displayName = 'proto.rv.data.Action.TransitionType';
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
proto.rv.data.Action.DoubleType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.DoubleType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.DoubleType.displayName = 'proto.rv.data.Action.DoubleType';
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
proto.rv.data.Action.EffectsType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.Action.EffectsType.repeatedFields_, null);
};
goog.inherits(proto.rv.data.Action.EffectsType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.EffectsType.displayName = 'proto.rv.data.Action.EffectsType';
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
proto.rv.data.Action.MediaType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.Action.MediaType.repeatedFields_, proto.rv.data.Action.MediaType.oneofGroups_);
};
goog.inherits(proto.rv.data.Action.MediaType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.MediaType.displayName = 'proto.rv.data.Action.MediaType';
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
proto.rv.data.Action.MediaType.Image = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.MediaType.Image, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.MediaType.Image.displayName = 'proto.rv.data.Action.MediaType.Image';
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
proto.rv.data.Action.MediaType.Video = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.MediaType.Video, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.MediaType.Video.displayName = 'proto.rv.data.Action.MediaType.Video';
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
proto.rv.data.Action.MediaType.Audio = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.MediaType.Audio, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.MediaType.Audio.displayName = 'proto.rv.data.Action.MediaType.Audio';
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
proto.rv.data.Action.MediaType.LiveVideo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.MediaType.LiveVideo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.MediaType.LiveVideo.displayName = 'proto.rv.data.Action.MediaType.LiveVideo';
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
proto.rv.data.Action.MediaType.PlaybackMarker = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.Action.MediaType.PlaybackMarker.repeatedFields_, null);
};
goog.inherits(proto.rv.data.Action.MediaType.PlaybackMarker, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.MediaType.PlaybackMarker.displayName = 'proto.rv.data.Action.MediaType.PlaybackMarker';
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
proto.rv.data.Action.SlideType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.Action.SlideType.oneofGroups_);
};
goog.inherits(proto.rv.data.Action.SlideType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.SlideType.displayName = 'proto.rv.data.Action.SlideType';
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
proto.rv.data.Action.BackgroundType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.BackgroundType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.BackgroundType.displayName = 'proto.rv.data.Action.BackgroundType';
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
proto.rv.data.Action.TimerType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.TimerType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.TimerType.displayName = 'proto.rv.data.Action.TimerType';
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
proto.rv.data.Action.ClearType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.ClearType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.ClearType.displayName = 'proto.rv.data.Action.ClearType';
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
proto.rv.data.Action.ClearGroupType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.ClearGroupType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.ClearGroupType.displayName = 'proto.rv.data.Action.ClearGroupType';
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
proto.rv.data.Action.TransportControlType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.Action.TransportControlType.oneofGroups_);
};
goog.inherits(proto.rv.data.Action.TransportControlType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.TransportControlType.displayName = 'proto.rv.data.Action.TransportControlType';
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
proto.rv.data.Action.TransportControlType.Play = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.TransportControlType.Play, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.TransportControlType.Play.displayName = 'proto.rv.data.Action.TransportControlType.Play';
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
proto.rv.data.Action.TransportControlType.Pause = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.TransportControlType.Pause, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.TransportControlType.Pause.displayName = 'proto.rv.data.Action.TransportControlType.Pause';
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
proto.rv.data.Action.TransportControlType.JumpToTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.TransportControlType.JumpToTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.TransportControlType.JumpToTime.displayName = 'proto.rv.data.Action.TransportControlType.JumpToTime';
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
proto.rv.data.Action.StageLayoutType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.Action.StageLayoutType.repeatedFields_, null);
};
goog.inherits(proto.rv.data.Action.StageLayoutType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.StageLayoutType.displayName = 'proto.rv.data.Action.StageLayoutType';
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
proto.rv.data.Action.SlideDestinationType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.SlideDestinationType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.SlideDestinationType.displayName = 'proto.rv.data.Action.SlideDestinationType';
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
proto.rv.data.Action.PropType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.PropType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.PropType.displayName = 'proto.rv.data.Action.PropType';
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
proto.rv.data.Action.MaskType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.MaskType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.MaskType.displayName = 'proto.rv.data.Action.MaskType';
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
proto.rv.data.Action.MessageType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.Action.MessageType.repeatedFields_, null);
};
goog.inherits(proto.rv.data.Action.MessageType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.MessageType.displayName = 'proto.rv.data.Action.MessageType';
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
proto.rv.data.Action.CommunicationType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.Action.CommunicationType.repeatedFields_, proto.rv.data.Action.CommunicationType.oneofGroups_);
};
goog.inherits(proto.rv.data.Action.CommunicationType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.CommunicationType.displayName = 'proto.rv.data.Action.CommunicationType';
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
proto.rv.data.Action.CommunicationType.Command = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.Action.CommunicationType.Command.repeatedFields_, null);
};
goog.inherits(proto.rv.data.Action.CommunicationType.Command, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.CommunicationType.Command.displayName = 'proto.rv.data.Action.CommunicationType.Command';
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
proto.rv.data.Action.CommunicationType.MIDICommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.CommunicationType.MIDICommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.CommunicationType.MIDICommand.displayName = 'proto.rv.data.Action.CommunicationType.MIDICommand';
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
proto.rv.data.Action.CommunicationType.GlobalCacheCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.CommunicationType.GlobalCacheCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.CommunicationType.GlobalCacheCommand.displayName = 'proto.rv.data.Action.CommunicationType.GlobalCacheCommand';
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
proto.rv.data.Action.CommunicationType.GVG100Command = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.CommunicationType.GVG100Command, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.CommunicationType.GVG100Command.displayName = 'proto.rv.data.Action.CommunicationType.GVG100Command';
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
proto.rv.data.Action.CommunicationType.SonyBVSCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.CommunicationType.SonyBVSCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.CommunicationType.SonyBVSCommand.displayName = 'proto.rv.data.Action.CommunicationType.SonyBVSCommand';
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
proto.rv.data.Action.MultiScreenType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.MultiScreenType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.MultiScreenType.displayName = 'proto.rv.data.Action.MultiScreenType';
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
proto.rv.data.Action.DocumentType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.DocumentType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.DocumentType.displayName = 'proto.rv.data.Action.DocumentType';
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
proto.rv.data.Action.ExternalPresentationType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.ExternalPresentationType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.ExternalPresentationType.displayName = 'proto.rv.data.Action.ExternalPresentationType';
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
proto.rv.data.Action.AudienceLookType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.AudienceLookType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.AudienceLookType.displayName = 'proto.rv.data.Action.AudienceLookType';
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
proto.rv.data.Action.AudioInputType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.AudioInputType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.AudioInputType.displayName = 'proto.rv.data.Action.AudioInputType';
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
proto.rv.data.Action.MacroType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.MacroType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.MacroType.displayName = 'proto.rv.data.Action.MacroType';
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
proto.rv.data.Action.CaptureType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.Action.CaptureType.oneofGroups_);
};
goog.inherits(proto.rv.data.Action.CaptureType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.CaptureType.displayName = 'proto.rv.data.Action.CaptureType';
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
proto.rv.data.Action.CaptureType.CaptureStart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.CaptureType.CaptureStart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.CaptureType.CaptureStart.displayName = 'proto.rv.data.Action.CaptureType.CaptureStart';
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
proto.rv.data.Action.CaptureType.CaptureStop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Action.CaptureType.CaptureStop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Action.CaptureType.CaptureStop.displayName = 'proto.rv.data.Action.CaptureType.CaptureStop';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.Action.oneofGroups_ = [[16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,33,34,36,37,38,39,40,41,42,43]];

/**
 * @enum {number}
 */
proto.rv.data.Action.ActiontypedataCase = {
  ACTIONTYPEDATA_NOT_SET: 0,
  COLLECTION_ELEMENT: 16,
  PLAYLIST_ITEM: 17,
  BLEND_MODE: 18,
  TRANSITION: 19,
  MEDIA: 20,
  DOUBLE_ITEM: 21,
  EFFECTS: 22,
  SLIDE: 23,
  BACKGROUND: 24,
  TIMER: 25,
  CLEAR: 26,
  STAGE: 27,
  PROP: 28,
  MASK: 29,
  MESSAGE: 30,
  COMMUNICATION: 32,
  MULTI_SCREEN: 33,
  PRESENTATION_DOCUMENT: 34,
  EXTERNAL_PRESENTATION: 36,
  AUDIENCE_LOOK: 37,
  AUDIO_INPUT: 38,
  SLIDE_DESTINATION: 39,
  MACRO: 40,
  CLEAR_GROUP: 41,
  TRANSPORT_CONTROL: 42,
  CAPTURE: 43
};

/**
 * @return {proto.rv.data.Action.ActiontypedataCase}
 */
proto.rv.data.Action.prototype.getActiontypedataCase = function() {
  return /** @type {proto.rv.data.Action.ActiontypedataCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.Action.oneofGroups_[0]));
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
proto.rv.data.Action.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.toObject = function(includeInstance, msg) {
  var f, obj = {
uuid: (f = msg.getUuid()) && proto.rv.data.UUID.toObject(includeInstance, f),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
label: (f = msg.getLabel()) && proto.rv.data.Action.Label.toObject(includeInstance, f),
delayTime: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
oldType: (f = msg.getOldType()) && proto.rv.data.Action.OldType.toObject(includeInstance, f),
isenabled: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
layerIdentification: (f = msg.getLayerIdentification()) && proto.rv.data.Action.LayerIdentification.toObject(includeInstance, f),
duration: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
type: jspb.Message.getFieldWithDefault(msg, 9, 0),
collectionElement: (f = msg.getCollectionElement()) && proto.rv.data.CollectionElementType.toObject(includeInstance, f),
playlistItem: (f = msg.getPlaylistItem()) && proto.rv.data.Action.PlaylistItemType.toObject(includeInstance, f),
blendMode: (f = msg.getBlendMode()) && proto.rv.data.Action.BlendModeType.toObject(includeInstance, f),
transition: (f = msg.getTransition()) && proto.rv.data.Action.TransitionType.toObject(includeInstance, f),
media: (f = msg.getMedia()) && proto.rv.data.Action.MediaType.toObject(includeInstance, f),
doubleItem: (f = msg.getDoubleItem()) && proto.rv.data.Action.DoubleType.toObject(includeInstance, f),
effects: (f = msg.getEffects()) && proto.rv.data.Action.EffectsType.toObject(includeInstance, f),
slide: (f = msg.getSlide()) && proto.rv.data.Action.SlideType.toObject(includeInstance, f),
background: (f = msg.getBackground()) && proto.rv.data.Action.BackgroundType.toObject(includeInstance, f),
timer: (f = msg.getTimer()) && proto.rv.data.Action.TimerType.toObject(includeInstance, f),
clear: (f = msg.getClear()) && proto.rv.data.Action.ClearType.toObject(includeInstance, f),
stage: (f = msg.getStage()) && proto.rv.data.Action.StageLayoutType.toObject(includeInstance, f),
prop: (f = msg.getProp()) && proto.rv.data.Action.PropType.toObject(includeInstance, f),
mask: (f = msg.getMask()) && proto.rv.data.Action.MaskType.toObject(includeInstance, f),
message: (f = msg.getMessage()) && proto.rv.data.Action.MessageType.toObject(includeInstance, f),
communication: (f = msg.getCommunication()) && proto.rv.data.Action.CommunicationType.toObject(includeInstance, f),
multiScreen: (f = msg.getMultiScreen()) && proto.rv.data.Action.MultiScreenType.toObject(includeInstance, f),
presentationDocument: (f = msg.getPresentationDocument()) && proto.rv.data.Action.DocumentType.toObject(includeInstance, f),
externalPresentation: (f = msg.getExternalPresentation()) && proto.rv.data.Action.ExternalPresentationType.toObject(includeInstance, f),
audienceLook: (f = msg.getAudienceLook()) && proto.rv.data.Action.AudienceLookType.toObject(includeInstance, f),
audioInput: (f = msg.getAudioInput()) && proto.rv.data.Action.AudioInputType.toObject(includeInstance, f),
slideDestination: (f = msg.getSlideDestination()) && proto.rv.data.Action.SlideDestinationType.toObject(includeInstance, f),
macro: (f = msg.getMacro()) && proto.rv.data.Action.MacroType.toObject(includeInstance, f),
clearGroup: (f = msg.getClearGroup()) && proto.rv.data.Action.ClearGroupType.toObject(includeInstance, f),
transportControl: (f = msg.getTransportControl()) && proto.rv.data.Action.TransportControlType.toObject(includeInstance, f),
capture: (f = msg.getCapture()) && proto.rv.data.Action.CaptureType.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Action}
 */
proto.rv.data.Action.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action;
  return proto.rv.data.Action.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action}
 */
proto.rv.data.Action.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.rv.data.Action.Label;
      reader.readMessage(value,proto.rv.data.Action.Label.deserializeBinaryFromReader);
      msg.setLabel(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDelayTime(value);
      break;
    case 5:
      var value = new proto.rv.data.Action.OldType;
      reader.readMessage(value,proto.rv.data.Action.OldType.deserializeBinaryFromReader);
      msg.setOldType(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsenabled(value);
      break;
    case 7:
      var value = new proto.rv.data.Action.LayerIdentification;
      reader.readMessage(value,proto.rv.data.Action.LayerIdentification.deserializeBinaryFromReader);
      msg.setLayerIdentification(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDuration(value);
      break;
    case 9:
      var value = /** @type {!proto.rv.data.Action.ActionType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 16:
      var value = new proto.rv.data.CollectionElementType;
      reader.readMessage(value,proto.rv.data.CollectionElementType.deserializeBinaryFromReader);
      msg.setCollectionElement(value);
      break;
    case 17:
      var value = new proto.rv.data.Action.PlaylistItemType;
      reader.readMessage(value,proto.rv.data.Action.PlaylistItemType.deserializeBinaryFromReader);
      msg.setPlaylistItem(value);
      break;
    case 18:
      var value = new proto.rv.data.Action.BlendModeType;
      reader.readMessage(value,proto.rv.data.Action.BlendModeType.deserializeBinaryFromReader);
      msg.setBlendMode(value);
      break;
    case 19:
      var value = new proto.rv.data.Action.TransitionType;
      reader.readMessage(value,proto.rv.data.Action.TransitionType.deserializeBinaryFromReader);
      msg.setTransition(value);
      break;
    case 20:
      var value = new proto.rv.data.Action.MediaType;
      reader.readMessage(value,proto.rv.data.Action.MediaType.deserializeBinaryFromReader);
      msg.setMedia(value);
      break;
    case 21:
      var value = new proto.rv.data.Action.DoubleType;
      reader.readMessage(value,proto.rv.data.Action.DoubleType.deserializeBinaryFromReader);
      msg.setDoubleItem(value);
      break;
    case 22:
      var value = new proto.rv.data.Action.EffectsType;
      reader.readMessage(value,proto.rv.data.Action.EffectsType.deserializeBinaryFromReader);
      msg.setEffects(value);
      break;
    case 23:
      var value = new proto.rv.data.Action.SlideType;
      reader.readMessage(value,proto.rv.data.Action.SlideType.deserializeBinaryFromReader);
      msg.setSlide(value);
      break;
    case 24:
      var value = new proto.rv.data.Action.BackgroundType;
      reader.readMessage(value,proto.rv.data.Action.BackgroundType.deserializeBinaryFromReader);
      msg.setBackground(value);
      break;
    case 25:
      var value = new proto.rv.data.Action.TimerType;
      reader.readMessage(value,proto.rv.data.Action.TimerType.deserializeBinaryFromReader);
      msg.setTimer(value);
      break;
    case 26:
      var value = new proto.rv.data.Action.ClearType;
      reader.readMessage(value,proto.rv.data.Action.ClearType.deserializeBinaryFromReader);
      msg.setClear(value);
      break;
    case 27:
      var value = new proto.rv.data.Action.StageLayoutType;
      reader.readMessage(value,proto.rv.data.Action.StageLayoutType.deserializeBinaryFromReader);
      msg.setStage(value);
      break;
    case 28:
      var value = new proto.rv.data.Action.PropType;
      reader.readMessage(value,proto.rv.data.Action.PropType.deserializeBinaryFromReader);
      msg.setProp(value);
      break;
    case 29:
      var value = new proto.rv.data.Action.MaskType;
      reader.readMessage(value,proto.rv.data.Action.MaskType.deserializeBinaryFromReader);
      msg.setMask(value);
      break;
    case 30:
      var value = new proto.rv.data.Action.MessageType;
      reader.readMessage(value,proto.rv.data.Action.MessageType.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 32:
      var value = new proto.rv.data.Action.CommunicationType;
      reader.readMessage(value,proto.rv.data.Action.CommunicationType.deserializeBinaryFromReader);
      msg.setCommunication(value);
      break;
    case 33:
      var value = new proto.rv.data.Action.MultiScreenType;
      reader.readMessage(value,proto.rv.data.Action.MultiScreenType.deserializeBinaryFromReader);
      msg.setMultiScreen(value);
      break;
    case 34:
      var value = new proto.rv.data.Action.DocumentType;
      reader.readMessage(value,proto.rv.data.Action.DocumentType.deserializeBinaryFromReader);
      msg.setPresentationDocument(value);
      break;
    case 36:
      var value = new proto.rv.data.Action.ExternalPresentationType;
      reader.readMessage(value,proto.rv.data.Action.ExternalPresentationType.deserializeBinaryFromReader);
      msg.setExternalPresentation(value);
      break;
    case 37:
      var value = new proto.rv.data.Action.AudienceLookType;
      reader.readMessage(value,proto.rv.data.Action.AudienceLookType.deserializeBinaryFromReader);
      msg.setAudienceLook(value);
      break;
    case 38:
      var value = new proto.rv.data.Action.AudioInputType;
      reader.readMessage(value,proto.rv.data.Action.AudioInputType.deserializeBinaryFromReader);
      msg.setAudioInput(value);
      break;
    case 39:
      var value = new proto.rv.data.Action.SlideDestinationType;
      reader.readMessage(value,proto.rv.data.Action.SlideDestinationType.deserializeBinaryFromReader);
      msg.setSlideDestination(value);
      break;
    case 40:
      var value = new proto.rv.data.Action.MacroType;
      reader.readMessage(value,proto.rv.data.Action.MacroType.deserializeBinaryFromReader);
      msg.setMacro(value);
      break;
    case 41:
      var value = new proto.rv.data.Action.ClearGroupType;
      reader.readMessage(value,proto.rv.data.Action.ClearGroupType.deserializeBinaryFromReader);
      msg.setClearGroup(value);
      break;
    case 42:
      var value = new proto.rv.data.Action.TransportControlType;
      reader.readMessage(value,proto.rv.data.Action.TransportControlType.deserializeBinaryFromReader);
      msg.setTransportControl(value);
      break;
    case 43:
      var value = new proto.rv.data.Action.CaptureType;
      reader.readMessage(value,proto.rv.data.Action.CaptureType.deserializeBinaryFromReader);
      msg.setCapture(value);
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
proto.rv.data.Action.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.UUID.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLabel();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.Action.Label.serializeBinaryToWriter
    );
  }
  f = message.getDelayTime();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getOldType();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.data.Action.OldType.serializeBinaryToWriter
    );
  }
  f = message.getIsenabled();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getLayerIdentification();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.rv.data.Action.LayerIdentification.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getCollectionElement();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.rv.data.CollectionElementType.serializeBinaryToWriter
    );
  }
  f = message.getPlaylistItem();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.rv.data.Action.PlaylistItemType.serializeBinaryToWriter
    );
  }
  f = message.getBlendMode();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.rv.data.Action.BlendModeType.serializeBinaryToWriter
    );
  }
  f = message.getTransition();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.rv.data.Action.TransitionType.serializeBinaryToWriter
    );
  }
  f = message.getMedia();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.rv.data.Action.MediaType.serializeBinaryToWriter
    );
  }
  f = message.getDoubleItem();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.rv.data.Action.DoubleType.serializeBinaryToWriter
    );
  }
  f = message.getEffects();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.rv.data.Action.EffectsType.serializeBinaryToWriter
    );
  }
  f = message.getSlide();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.rv.data.Action.SlideType.serializeBinaryToWriter
    );
  }
  f = message.getBackground();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.rv.data.Action.BackgroundType.serializeBinaryToWriter
    );
  }
  f = message.getTimer();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.rv.data.Action.TimerType.serializeBinaryToWriter
    );
  }
  f = message.getClear();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.rv.data.Action.ClearType.serializeBinaryToWriter
    );
  }
  f = message.getStage();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.rv.data.Action.StageLayoutType.serializeBinaryToWriter
    );
  }
  f = message.getProp();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.rv.data.Action.PropType.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.rv.data.Action.MaskType.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.rv.data.Action.MessageType.serializeBinaryToWriter
    );
  }
  f = message.getCommunication();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto.rv.data.Action.CommunicationType.serializeBinaryToWriter
    );
  }
  f = message.getMultiScreen();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto.rv.data.Action.MultiScreenType.serializeBinaryToWriter
    );
  }
  f = message.getPresentationDocument();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto.rv.data.Action.DocumentType.serializeBinaryToWriter
    );
  }
  f = message.getExternalPresentation();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto.rv.data.Action.ExternalPresentationType.serializeBinaryToWriter
    );
  }
  f = message.getAudienceLook();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto.rv.data.Action.AudienceLookType.serializeBinaryToWriter
    );
  }
  f = message.getAudioInput();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      proto.rv.data.Action.AudioInputType.serializeBinaryToWriter
    );
  }
  f = message.getSlideDestination();
  if (f != null) {
    writer.writeMessage(
      39,
      f,
      proto.rv.data.Action.SlideDestinationType.serializeBinaryToWriter
    );
  }
  f = message.getMacro();
  if (f != null) {
    writer.writeMessage(
      40,
      f,
      proto.rv.data.Action.MacroType.serializeBinaryToWriter
    );
  }
  f = message.getClearGroup();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      proto.rv.data.Action.ClearGroupType.serializeBinaryToWriter
    );
  }
  f = message.getTransportControl();
  if (f != null) {
    writer.writeMessage(
      42,
      f,
      proto.rv.data.Action.TransportControlType.serializeBinaryToWriter
    );
  }
  f = message.getCapture();
  if (f != null) {
    writer.writeMessage(
      43,
      f,
      proto.rv.data.Action.CaptureType.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Action.ContentDestination = {
  CONTENT_DESTINATION_GLOBAL: 0,
  CONTENT_DESTINATION_ANNOUNCEMENTS: 1
};

/**
 * @enum {number}
 */
proto.rv.data.Action.LayerType = {
  LAYER_TYPE_BACKGROUND: 0,
  LAYER_TYPE_FOREGROUND: 1,
  LAYER_TYPE_FILL: 2,
  LAYER_TYPE_INPUT: 3
};

/**
 * @enum {number}
 */
proto.rv.data.Action.ActionType = {
  ACTION_TYPE_UNKNOWN: 0,
  ACTION_TYPE_STAGE_LAYOUT: 1,
  ACTION_TYPE_MEDIA: 2,
  ACTION_TYPE_TIMER: 3,
  ACTION_TYPE_COMMUNICATION: 4,
  ACTION_TYPE_CLEAR: 5,
  ACTION_TYPE_PROP: 6,
  ACTION_TYPE_MASK: 7,
  ACTION_TYPE_MESSAGE: 8,
  ACTION_TYPE_SOCIAL_MEDIA: 9,
  ACTION_TYPE_MULTISCREEN: 10,
  ACTION_TYPE_PRESENTATION_SLIDE: 11,
  ACTION_TYPE_FOREGROUND_MEDIA: 12,
  ACTION_TYPE_BACKGROUND_MEDIA: 13,
  ACTION_TYPE_PRESENTATION_DOCUMENT: 14,
  ACTION_TYPE_PROP_SLIDE: 15,
  ACTION_TYPE_EXTERNAL_PRESENTATION: 17,
  ACTION_TYPE_AUDIENCE_LOOK: 18,
  ACTION_TYPE_AUDIO_INPUT: 19,
  ACTION_TYPE_AUDIO_BIN_PLAYLIST: 20,
  ACTION_TYPE_MEDIA_BIN_PLAYLIST: 21,
  ACTION_TYPE_SLIDE_DESTINATION: 22,
  ACTION_TYPE_MACRO: 23,
  ACTION_TYPE_CLEAR_GROUP: 24,
  ACTION_TYPE_CAPTURE: 25,
  ACTION_TYPE_LIBRARY_PLAYLIST: 26
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
proto.rv.data.Action.OldType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.OldType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.OldType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.OldType.toObject = function(includeInstance, msg) {
  var f, obj = {
category: jspb.Message.getFieldWithDefault(msg, 1, 0),
applicationType: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.rv.data.Action.OldType}
 */
proto.rv.data.Action.OldType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.OldType;
  return proto.rv.data.Action.OldType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.OldType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.OldType}
 */
proto.rv.data.Action.OldType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Action.OldType.Category} */ (reader.readEnum());
      msg.setCategory(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setApplicationType(value);
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
proto.rv.data.Action.OldType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.OldType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.OldType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.OldType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getApplicationType();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Action.OldType.Category = {
  CATEGORY_UNKNOWN: 0,
  CATEGORY_MEDIA: 1,
  CATEGORY_APPLICATION: 2
};

/**
 * optional Category category = 1;
 * @return {!proto.rv.data.Action.OldType.Category}
 */
proto.rv.data.Action.OldType.prototype.getCategory = function() {
  return /** @type {!proto.rv.data.Action.OldType.Category} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Action.OldType.Category} value
 * @return {!proto.rv.data.Action.OldType} returns this
 */
proto.rv.data.Action.OldType.prototype.setCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 application_type = 2;
 * @return {number}
 */
proto.rv.data.Action.OldType.prototype.getApplicationType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Action.OldType} returns this
 */
proto.rv.data.Action.OldType.prototype.setApplicationType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.rv.data.Action.Label.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.Label.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.Label} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.Label.toObject = function(includeInstance, msg) {
  var f, obj = {
text: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.rv.data.Action.Label}
 */
proto.rv.data.Action.Label.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.Label;
  return proto.rv.data.Action.Label.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.Label} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.Label}
 */
proto.rv.data.Action.Label.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 3:
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
proto.rv.data.Action.Label.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.Label.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.Label} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.Label.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getColor();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.Color.serializeBinaryToWriter
    );
  }
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.rv.data.Action.Label.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Action.Label} returns this
 */
proto.rv.data.Action.Label.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Color color = 3;
 * @return {?proto.rv.data.Color}
 */
proto.rv.data.Action.Label.prototype.getColor = function() {
  return /** @type{?proto.rv.data.Color} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Color, 3));
};


/**
 * @param {?proto.rv.data.Color|undefined} value
 * @return {!proto.rv.data.Action.Label} returns this
*/
proto.rv.data.Action.Label.prototype.setColor = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.Label} returns this
 */
proto.rv.data.Action.Label.prototype.clearColor = function() {
  return this.setColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.Label.prototype.hasColor = function() {
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
proto.rv.data.Action.LayerIdentification.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.LayerIdentification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.LayerIdentification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.LayerIdentification.toObject = function(includeInstance, msg) {
  var f, obj = {
uuid: (f = msg.getUuid()) && proto.rv.data.UUID.toObject(includeInstance, f),
name: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.rv.data.Action.LayerIdentification}
 */
proto.rv.data.Action.LayerIdentification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.LayerIdentification;
  return proto.rv.data.Action.LayerIdentification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.LayerIdentification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.LayerIdentification}
 */
proto.rv.data.Action.LayerIdentification.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.data.Action.LayerIdentification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.LayerIdentification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.LayerIdentification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.LayerIdentification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.UUID.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional UUID uuid = 1;
 * @return {?proto.rv.data.UUID}
 */
proto.rv.data.Action.LayerIdentification.prototype.getUuid = function() {
  return /** @type{?proto.rv.data.UUID} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.UUID, 1));
};


/**
 * @param {?proto.rv.data.UUID|undefined} value
 * @return {!proto.rv.data.Action.LayerIdentification} returns this
*/
proto.rv.data.Action.LayerIdentification.prototype.setUuid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.LayerIdentification} returns this
 */
proto.rv.data.Action.LayerIdentification.prototype.clearUuid = function() {
  return this.setUuid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.LayerIdentification.prototype.hasUuid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.rv.data.Action.LayerIdentification.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Action.LayerIdentification} returns this
 */
proto.rv.data.Action.LayerIdentification.prototype.setName = function(value) {
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
proto.rv.data.Action.PlaylistItemType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.PlaylistItemType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.PlaylistItemType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.PlaylistItemType.toObject = function(includeInstance, msg) {
  var f, obj = {
playlistUuid: (f = msg.getPlaylistUuid()) && proto.rv.data.UUID.toObject(includeInstance, f),
playlistName: jspb.Message.getFieldWithDefault(msg, 2, ""),
itemUuid: (f = msg.getItemUuid()) && proto.rv.data.UUID.toObject(includeInstance, f),
itemName: jspb.Message.getFieldWithDefault(msg, 4, ""),
selectPlaylist: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
alwaysRetrigger: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.rv.data.Action.PlaylistItemType}
 */
proto.rv.data.Action.PlaylistItemType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.PlaylistItemType;
  return proto.rv.data.Action.PlaylistItemType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.PlaylistItemType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.PlaylistItemType}
 */
proto.rv.data.Action.PlaylistItemType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.UUID;
      reader.readMessage(value,proto.rv.data.UUID.deserializeBinaryFromReader);
      msg.setPlaylistUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlaylistName(value);
      break;
    case 3:
      var value = new proto.rv.data.UUID;
      reader.readMessage(value,proto.rv.data.UUID.deserializeBinaryFromReader);
      msg.setItemUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setItemName(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSelectPlaylist(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAlwaysRetrigger(value);
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
proto.rv.data.Action.PlaylistItemType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.PlaylistItemType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.PlaylistItemType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.PlaylistItemType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlaylistUuid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.UUID.serializeBinaryToWriter
    );
  }
  f = message.getPlaylistName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getItemUuid();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.UUID.serializeBinaryToWriter
    );
  }
  f = message.getItemName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSelectPlaylist();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getAlwaysRetrigger();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional UUID playlist_uuid = 1;
 * @return {?proto.rv.data.UUID}
 */
proto.rv.data.Action.PlaylistItemType.prototype.getPlaylistUuid = function() {
  return /** @type{?proto.rv.data.UUID} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.UUID, 1));
};


/**
 * @param {?proto.rv.data.UUID|undefined} value
 * @return {!proto.rv.data.Action.PlaylistItemType} returns this
*/
proto.rv.data.Action.PlaylistItemType.prototype.setPlaylistUuid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.PlaylistItemType} returns this
 */
proto.rv.data.Action.PlaylistItemType.prototype.clearPlaylistUuid = function() {
  return this.setPlaylistUuid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.PlaylistItemType.prototype.hasPlaylistUuid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string playlist_name = 2;
 * @return {string}
 */
proto.rv.data.Action.PlaylistItemType.prototype.getPlaylistName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Action.PlaylistItemType} returns this
 */
proto.rv.data.Action.PlaylistItemType.prototype.setPlaylistName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional UUID item_uuid = 3;
 * @return {?proto.rv.data.UUID}
 */
proto.rv.data.Action.PlaylistItemType.prototype.getItemUuid = function() {
  return /** @type{?proto.rv.data.UUID} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.UUID, 3));
};


/**
 * @param {?proto.rv.data.UUID|undefined} value
 * @return {!proto.rv.data.Action.PlaylistItemType} returns this
*/
proto.rv.data.Action.PlaylistItemType.prototype.setItemUuid = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.PlaylistItemType} returns this
 */
proto.rv.data.Action.PlaylistItemType.prototype.clearItemUuid = function() {
  return this.setItemUuid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.PlaylistItemType.prototype.hasItemUuid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string item_name = 4;
 * @return {string}
 */
proto.rv.data.Action.PlaylistItemType.prototype.getItemName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Action.PlaylistItemType} returns this
 */
proto.rv.data.Action.PlaylistItemType.prototype.setItemName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool select_playlist = 5;
 * @return {boolean}
 */
proto.rv.data.Action.PlaylistItemType.prototype.getSelectPlaylist = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Action.PlaylistItemType} returns this
 */
proto.rv.data.Action.PlaylistItemType.prototype.setSelectPlaylist = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool always_retrigger = 6;
 * @return {boolean}
 */
proto.rv.data.Action.PlaylistItemType.prototype.getAlwaysRetrigger = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Action.PlaylistItemType} returns this
 */
proto.rv.data.Action.PlaylistItemType.prototype.setAlwaysRetrigger = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
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
proto.rv.data.Action.BlendModeType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.BlendModeType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.BlendModeType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.BlendModeType.toObject = function(includeInstance, msg) {
  var f, obj = {
blendMode: jspb.Message.getFieldWithDefault(msg, 1, 0),
blend: (f = msg.getBlend()) && proto.rv.data.Layer.Blending.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Action.BlendModeType}
 */
proto.rv.data.Action.BlendModeType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.BlendModeType;
  return proto.rv.data.Action.BlendModeType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.BlendModeType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.BlendModeType}
 */
proto.rv.data.Action.BlendModeType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Layer.BlendMode} */ (reader.readEnum());
      msg.setBlendMode(value);
      break;
    case 2:
      var value = new proto.rv.data.Layer.Blending;
      reader.readMessage(value,proto.rv.data.Layer.Blending.deserializeBinaryFromReader);
      msg.setBlend(value);
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
proto.rv.data.Action.BlendModeType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.BlendModeType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.BlendModeType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.BlendModeType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlendMode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getBlend();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.Layer.Blending.serializeBinaryToWriter
    );
  }
};


/**
 * optional Layer.BlendMode blend_mode = 1;
 * @return {!proto.rv.data.Layer.BlendMode}
 */
proto.rv.data.Action.BlendModeType.prototype.getBlendMode = function() {
  return /** @type {!proto.rv.data.Layer.BlendMode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Layer.BlendMode} value
 * @return {!proto.rv.data.Action.BlendModeType} returns this
 */
proto.rv.data.Action.BlendModeType.prototype.setBlendMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Layer.Blending blend = 2;
 * @return {?proto.rv.data.Layer.Blending}
 */
proto.rv.data.Action.BlendModeType.prototype.getBlend = function() {
  return /** @type{?proto.rv.data.Layer.Blending} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Layer.Blending, 2));
};


/**
 * @param {?proto.rv.data.Layer.Blending|undefined} value
 * @return {!proto.rv.data.Action.BlendModeType} returns this
*/
proto.rv.data.Action.BlendModeType.prototype.setBlend = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.BlendModeType} returns this
 */
proto.rv.data.Action.BlendModeType.prototype.clearBlend = function() {
  return this.setBlend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.BlendModeType.prototype.hasBlend = function() {
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
proto.rv.data.Action.TransitionType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.TransitionType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.TransitionType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.TransitionType.toObject = function(includeInstance, msg) {
  var f, obj = {
transitionName: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.rv.data.Action.TransitionType}
 */
proto.rv.data.Action.TransitionType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.TransitionType;
  return proto.rv.data.Action.TransitionType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.TransitionType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.TransitionType}
 */
proto.rv.data.Action.TransitionType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransitionName(value);
      break;
    case 2:
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
proto.rv.data.Action.TransitionType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.TransitionType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.TransitionType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.TransitionType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransitionName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTransition();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.Transition.serializeBinaryToWriter
    );
  }
};


/**
 * optional string transition_name = 1;
 * @return {string}
 */
proto.rv.data.Action.TransitionType.prototype.getTransitionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Action.TransitionType} returns this
 */
proto.rv.data.Action.TransitionType.prototype.setTransitionName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Transition transition = 2;
 * @return {?proto.rv.data.Transition}
 */
proto.rv.data.Action.TransitionType.prototype.getTransition = function() {
  return /** @type{?proto.rv.data.Transition} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Transition, 2));
};


/**
 * @param {?proto.rv.data.Transition|undefined} value
 * @return {!proto.rv.data.Action.TransitionType} returns this
*/
proto.rv.data.Action.TransitionType.prototype.setTransition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.TransitionType} returns this
 */
proto.rv.data.Action.TransitionType.prototype.clearTransition = function() {
  return this.setTransition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.TransitionType.prototype.hasTransition = function() {
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
proto.rv.data.Action.DoubleType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.DoubleType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.DoubleType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.DoubleType.toObject = function(includeInstance, msg) {
  var f, obj = {
value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.rv.data.Action.DoubleType}
 */
proto.rv.data.Action.DoubleType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.DoubleType;
  return proto.rv.data.Action.DoubleType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.DoubleType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.DoubleType}
 */
proto.rv.data.Action.DoubleType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
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
proto.rv.data.Action.DoubleType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.DoubleType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.DoubleType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.DoubleType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double value = 1;
 * @return {number}
 */
proto.rv.data.Action.DoubleType.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Action.DoubleType} returns this
 */
proto.rv.data.Action.DoubleType.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.Action.EffectsType.repeatedFields_ = [1];



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
proto.rv.data.Action.EffectsType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.EffectsType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.EffectsType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.EffectsType.toObject = function(includeInstance, msg) {
  var f, obj = {
effectsList: jspb.Message.toObjectList(msg.getEffectsList(),
    proto.rv.data.Effect.toObject, includeInstance)
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
 * @return {!proto.rv.data.Action.EffectsType}
 */
proto.rv.data.Action.EffectsType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.EffectsType;
  return proto.rv.data.Action.EffectsType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.EffectsType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.EffectsType}
 */
proto.rv.data.Action.EffectsType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Effect;
      reader.readMessage(value,proto.rv.data.Effect.deserializeBinaryFromReader);
      msg.addEffects(value);
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
proto.rv.data.Action.EffectsType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.EffectsType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.EffectsType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.EffectsType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEffectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.rv.data.Effect.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Effect effects = 1;
 * @return {!Array<!proto.rv.data.Effect>}
 */
proto.rv.data.Action.EffectsType.prototype.getEffectsList = function() {
  return /** @type{!Array<!proto.rv.data.Effect>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.Effect, 1));
};


/**
 * @param {!Array<!proto.rv.data.Effect>} value
 * @return {!proto.rv.data.Action.EffectsType} returns this
*/
proto.rv.data.Action.EffectsType.prototype.setEffectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.rv.data.Effect=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.Effect}
 */
proto.rv.data.Action.EffectsType.prototype.addEffects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.rv.data.Effect, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Action.EffectsType} returns this
 */
proto.rv.data.Action.EffectsType.prototype.clearEffectsList = function() {
  return this.setEffectsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.Action.MediaType.repeatedFields_ = [4,12];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.Action.MediaType.oneofGroups_ = [[6,7,8,9]];

/**
 * @enum {number}
 */
proto.rv.data.Action.MediaType.MediatypeCase = {
  MEDIATYPE_NOT_SET: 0,
  IMAGE: 6,
  VIDEO: 7,
  AUDIO: 8,
  LIVE_VIDEO: 9
};

/**
 * @return {proto.rv.data.Action.MediaType.MediatypeCase}
 */
proto.rv.data.Action.MediaType.prototype.getMediatypeCase = function() {
  return /** @type {proto.rv.data.Action.MediaType.MediatypeCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.Action.MediaType.oneofGroups_[0]));
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
proto.rv.data.Action.MediaType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.MediaType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.MediaType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.MediaType.toObject = function(includeInstance, msg) {
  var f, obj = {
transitionDuration: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
selectedEffectPresetUuid: (f = msg.getSelectedEffectPresetUuid()) && proto.rv.data.UUID.toObject(includeInstance, f),
transition: (f = msg.getTransition()) && proto.rv.data.Transition.toObject(includeInstance, f),
effectsList: jspb.Message.toObjectList(msg.getEffectsList(),
    proto.rv.data.Effect.toObject, includeInstance),
element: (f = msg.getElement()) && proto.rv.data.Media.toObject(includeInstance, f),
layerType: jspb.Message.getFieldWithDefault(msg, 10, 0),
alwaysRetrigger: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
markersList: jspb.Message.toObjectList(msg.getMarkersList(),
    proto.rv.data.Action.MediaType.PlaybackMarker.toObject, includeInstance),
image: (f = msg.getImage()) && proto.rv.data.Action.MediaType.Image.toObject(includeInstance, f),
video: (f = msg.getVideo()) && proto.rv.data.Action.MediaType.Video.toObject(includeInstance, f),
audio: (f = msg.getAudio()) && proto.rv.data.Action.MediaType.Audio.toObject(includeInstance, f),
liveVideo: (f = msg.getLiveVideo()) && proto.rv.data.Action.MediaType.LiveVideo.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Action.MediaType}
 */
proto.rv.data.Action.MediaType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.MediaType;
  return proto.rv.data.Action.MediaType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.MediaType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.MediaType}
 */
proto.rv.data.Action.MediaType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTransitionDuration(value);
      break;
    case 2:
      var value = new proto.rv.data.UUID;
      reader.readMessage(value,proto.rv.data.UUID.deserializeBinaryFromReader);
      msg.setSelectedEffectPresetUuid(value);
      break;
    case 3:
      var value = new proto.rv.data.Transition;
      reader.readMessage(value,proto.rv.data.Transition.deserializeBinaryFromReader);
      msg.setTransition(value);
      break;
    case 4:
      var value = new proto.rv.data.Effect;
      reader.readMessage(value,proto.rv.data.Effect.deserializeBinaryFromReader);
      msg.addEffects(value);
      break;
    case 5:
      var value = new proto.rv.data.Media;
      reader.readMessage(value,proto.rv.data.Media.deserializeBinaryFromReader);
      msg.setElement(value);
      break;
    case 10:
      var value = /** @type {!proto.rv.data.Action.LayerType} */ (reader.readEnum());
      msg.setLayerType(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAlwaysRetrigger(value);
      break;
    case 12:
      var value = new proto.rv.data.Action.MediaType.PlaybackMarker;
      reader.readMessage(value,proto.rv.data.Action.MediaType.PlaybackMarker.deserializeBinaryFromReader);
      msg.addMarkers(value);
      break;
    case 6:
      var value = new proto.rv.data.Action.MediaType.Image;
      reader.readMessage(value,proto.rv.data.Action.MediaType.Image.deserializeBinaryFromReader);
      msg.setImage(value);
      break;
    case 7:
      var value = new proto.rv.data.Action.MediaType.Video;
      reader.readMessage(value,proto.rv.data.Action.MediaType.Video.deserializeBinaryFromReader);
      msg.setVideo(value);
      break;
    case 8:
      var value = new proto.rv.data.Action.MediaType.Audio;
      reader.readMessage(value,proto.rv.data.Action.MediaType.Audio.deserializeBinaryFromReader);
      msg.setAudio(value);
      break;
    case 9:
      var value = new proto.rv.data.Action.MediaType.LiveVideo;
      reader.readMessage(value,proto.rv.data.Action.MediaType.LiveVideo.deserializeBinaryFromReader);
      msg.setLiveVideo(value);
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
proto.rv.data.Action.MediaType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.MediaType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.MediaType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.MediaType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransitionDuration();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getSelectedEffectPresetUuid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.UUID.serializeBinaryToWriter
    );
  }
  f = message.getTransition();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.Transition.serializeBinaryToWriter
    );
  }
  f = message.getEffectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.rv.data.Effect.serializeBinaryToWriter
    );
  }
  f = message.getElement();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.data.Media.serializeBinaryToWriter
    );
  }
  f = message.getLayerType();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getAlwaysRetrigger();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getMarkersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.rv.data.Action.MediaType.PlaybackMarker.serializeBinaryToWriter
    );
  }
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.rv.data.Action.MediaType.Image.serializeBinaryToWriter
    );
  }
  f = message.getVideo();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.rv.data.Action.MediaType.Video.serializeBinaryToWriter
    );
  }
  f = message.getAudio();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.rv.data.Action.MediaType.Audio.serializeBinaryToWriter
    );
  }
  f = message.getLiveVideo();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.rv.data.Action.MediaType.LiveVideo.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Action.MediaType.PlaybackBehavior = {
  PLAYBACK_BEHAVIOR_STOP: 0,
  PLAYBACK_BEHAVIOR_LOOP: 1,
  PLAYBACK_BEHAVIOR_LOOP_FOR_COUNT: 2,
  PLAYBACK_BEHAVIOR_LOOP_FOR_TIME: 3
};

/**
 * @enum {number}
 */
proto.rv.data.Action.MediaType.EndBehavior = {
  END_BEHAVIOR_STOP: 0,
  END_BEHAVIOR_STOP_ON_BLACK: 1,
  END_BEHAVIOR_STOP_ON_CLEAR: 2,
  END_BEHAVIOR_FADE_TO_BLACK: 3,
  END_BEHAVIOR_FADE_TO_CLEAR: 4
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
proto.rv.data.Action.MediaType.Image.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.MediaType.Image.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.MediaType.Image} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.MediaType.Image.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.data.Action.MediaType.Image}
 */
proto.rv.data.Action.MediaType.Image.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.MediaType.Image;
  return proto.rv.data.Action.MediaType.Image.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.MediaType.Image} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.MediaType.Image}
 */
proto.rv.data.Action.MediaType.Image.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.data.Action.MediaType.Image.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.MediaType.Image.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.MediaType.Image} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.MediaType.Image.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.data.Action.MediaType.Video.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.MediaType.Video.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.MediaType.Video} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.MediaType.Video.toObject = function(includeInstance, msg) {
  var f, obj = {
playbackBehavior: jspb.Message.getFieldWithDefault(msg, 1, 0),
endBehavior: jspb.Message.getFieldWithDefault(msg, 2, 0),
loopTime: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
timesToLoop: jspb.Message.getFieldWithDefault(msg, 4, 0),
softLoop: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
softLoopDuration: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0)
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
 * @return {!proto.rv.data.Action.MediaType.Video}
 */
proto.rv.data.Action.MediaType.Video.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.MediaType.Video;
  return proto.rv.data.Action.MediaType.Video.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.MediaType.Video} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.MediaType.Video}
 */
proto.rv.data.Action.MediaType.Video.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Action.MediaType.PlaybackBehavior} */ (reader.readEnum());
      msg.setPlaybackBehavior(value);
      break;
    case 2:
      var value = /** @type {!proto.rv.data.Action.MediaType.EndBehavior} */ (reader.readEnum());
      msg.setEndBehavior(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLoopTime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimesToLoop(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSoftLoop(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSoftLoopDuration(value);
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
proto.rv.data.Action.MediaType.Video.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.MediaType.Video.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.MediaType.Video} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.MediaType.Video.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlaybackBehavior();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getEndBehavior();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getLoopTime();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getTimesToLoop();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getSoftLoop();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getSoftLoopDuration();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
};


/**
 * optional PlaybackBehavior playback_behavior = 1;
 * @return {!proto.rv.data.Action.MediaType.PlaybackBehavior}
 */
proto.rv.data.Action.MediaType.Video.prototype.getPlaybackBehavior = function() {
  return /** @type {!proto.rv.data.Action.MediaType.PlaybackBehavior} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Action.MediaType.PlaybackBehavior} value
 * @return {!proto.rv.data.Action.MediaType.Video} returns this
 */
proto.rv.data.Action.MediaType.Video.prototype.setPlaybackBehavior = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional EndBehavior end_behavior = 2;
 * @return {!proto.rv.data.Action.MediaType.EndBehavior}
 */
proto.rv.data.Action.MediaType.Video.prototype.getEndBehavior = function() {
  return /** @type {!proto.rv.data.Action.MediaType.EndBehavior} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.data.Action.MediaType.EndBehavior} value
 * @return {!proto.rv.data.Action.MediaType.Video} returns this
 */
proto.rv.data.Action.MediaType.Video.prototype.setEndBehavior = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional double loop_time = 3;
 * @return {number}
 */
proto.rv.data.Action.MediaType.Video.prototype.getLoopTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Action.MediaType.Video} returns this
 */
proto.rv.data.Action.MediaType.Video.prototype.setLoopTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional uint32 times_to_loop = 4;
 * @return {number}
 */
proto.rv.data.Action.MediaType.Video.prototype.getTimesToLoop = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Action.MediaType.Video} returns this
 */
proto.rv.data.Action.MediaType.Video.prototype.setTimesToLoop = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool soft_loop = 5;
 * @return {boolean}
 */
proto.rv.data.Action.MediaType.Video.prototype.getSoftLoop = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Action.MediaType.Video} returns this
 */
proto.rv.data.Action.MediaType.Video.prototype.setSoftLoop = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional double soft_loop_duration = 6;
 * @return {number}
 */
proto.rv.data.Action.MediaType.Video.prototype.getSoftLoopDuration = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Action.MediaType.Video} returns this
 */
proto.rv.data.Action.MediaType.Video.prototype.setSoftLoopDuration = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
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
proto.rv.data.Action.MediaType.Audio.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.MediaType.Audio.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.MediaType.Audio} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.MediaType.Audio.toObject = function(includeInstance, msg) {
  var f, obj = {
playbackBehavior: jspb.Message.getFieldWithDefault(msg, 1, 0),
loopTime: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
timesToLoop: jspb.Message.getFieldWithDefault(msg, 3, 0),
audioType: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.rv.data.Action.MediaType.Audio}
 */
proto.rv.data.Action.MediaType.Audio.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.MediaType.Audio;
  return proto.rv.data.Action.MediaType.Audio.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.MediaType.Audio} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.MediaType.Audio}
 */
proto.rv.data.Action.MediaType.Audio.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Action.MediaType.PlaybackBehavior} */ (reader.readEnum());
      msg.setPlaybackBehavior(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLoopTime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimesToLoop(value);
      break;
    case 4:
      var value = /** @type {!proto.rv.data.Action.MediaType.Audio.MediaActionAudioType} */ (reader.readEnum());
      msg.setAudioType(value);
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
proto.rv.data.Action.MediaType.Audio.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.MediaType.Audio.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.MediaType.Audio} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.MediaType.Audio.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlaybackBehavior();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getLoopTime();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getTimesToLoop();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getAudioType();
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
proto.rv.data.Action.MediaType.Audio.MediaActionAudioType = {
  MEDIA_ACTION_AUDIO_TYPE_TUNE: 0,
  MEDIA_ACTION_AUDIO_TYPE_SOUND: 1
};

/**
 * optional PlaybackBehavior playback_behavior = 1;
 * @return {!proto.rv.data.Action.MediaType.PlaybackBehavior}
 */
proto.rv.data.Action.MediaType.Audio.prototype.getPlaybackBehavior = function() {
  return /** @type {!proto.rv.data.Action.MediaType.PlaybackBehavior} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Action.MediaType.PlaybackBehavior} value
 * @return {!proto.rv.data.Action.MediaType.Audio} returns this
 */
proto.rv.data.Action.MediaType.Audio.prototype.setPlaybackBehavior = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional double loop_time = 2;
 * @return {number}
 */
proto.rv.data.Action.MediaType.Audio.prototype.getLoopTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Action.MediaType.Audio} returns this
 */
proto.rv.data.Action.MediaType.Audio.prototype.setLoopTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional uint32 times_to_loop = 3;
 * @return {number}
 */
proto.rv.data.Action.MediaType.Audio.prototype.getTimesToLoop = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Action.MediaType.Audio} returns this
 */
proto.rv.data.Action.MediaType.Audio.prototype.setTimesToLoop = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional MediaActionAudioType audio_type = 4;
 * @return {!proto.rv.data.Action.MediaType.Audio.MediaActionAudioType}
 */
proto.rv.data.Action.MediaType.Audio.prototype.getAudioType = function() {
  return /** @type {!proto.rv.data.Action.MediaType.Audio.MediaActionAudioType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.rv.data.Action.MediaType.Audio.MediaActionAudioType} value
 * @return {!proto.rv.data.Action.MediaType.Audio} returns this
 */
proto.rv.data.Action.MediaType.Audio.prototype.setAudioType = function(value) {
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
proto.rv.data.Action.MediaType.LiveVideo.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.MediaType.LiveVideo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.MediaType.LiveVideo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.MediaType.LiveVideo.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.data.Action.MediaType.LiveVideo}
 */
proto.rv.data.Action.MediaType.LiveVideo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.MediaType.LiveVideo;
  return proto.rv.data.Action.MediaType.LiveVideo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.MediaType.LiveVideo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.MediaType.LiveVideo}
 */
proto.rv.data.Action.MediaType.LiveVideo.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.data.Action.MediaType.LiveVideo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.MediaType.LiveVideo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.MediaType.LiveVideo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.MediaType.LiveVideo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.Action.MediaType.PlaybackMarker.repeatedFields_ = [5];



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
proto.rv.data.Action.MediaType.PlaybackMarker.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.MediaType.PlaybackMarker.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.MediaType.PlaybackMarker} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.MediaType.PlaybackMarker.toObject = function(includeInstance, msg) {
  var f, obj = {
uuid: (f = msg.getUuid()) && proto.rv.data.UUID.toObject(includeInstance, f),
time: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
color: (f = msg.getColor()) && proto.rv.data.Color.toObject(includeInstance, f),
name: jspb.Message.getFieldWithDefault(msg, 4, ""),
actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.rv.data.Action.toObject, includeInstance)
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
 * @return {!proto.rv.data.Action.MediaType.PlaybackMarker}
 */
proto.rv.data.Action.MediaType.PlaybackMarker.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.MediaType.PlaybackMarker;
  return proto.rv.data.Action.MediaType.PlaybackMarker.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.MediaType.PlaybackMarker} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.MediaType.PlaybackMarker}
 */
proto.rv.data.Action.MediaType.PlaybackMarker.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTime(value);
      break;
    case 3:
      var value = new proto.rv.data.Color;
      reader.readMessage(value,proto.rv.data.Color.deserializeBinaryFromReader);
      msg.setColor(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = new proto.rv.data.Action;
      reader.readMessage(value,proto.rv.data.Action.deserializeBinaryFromReader);
      msg.addActions(value);
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
proto.rv.data.Action.MediaType.PlaybackMarker.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.MediaType.PlaybackMarker.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.MediaType.PlaybackMarker} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.MediaType.PlaybackMarker.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.UUID.serializeBinaryToWriter
    );
  }
  f = message.getTime();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getColor();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.Color.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.rv.data.Action.serializeBinaryToWriter
    );
  }
};


/**
 * optional UUID uuid = 1;
 * @return {?proto.rv.data.UUID}
 */
proto.rv.data.Action.MediaType.PlaybackMarker.prototype.getUuid = function() {
  return /** @type{?proto.rv.data.UUID} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.UUID, 1));
};


/**
 * @param {?proto.rv.data.UUID|undefined} value
 * @return {!proto.rv.data.Action.MediaType.PlaybackMarker} returns this
*/
proto.rv.data.Action.MediaType.PlaybackMarker.prototype.setUuid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.MediaType.PlaybackMarker} returns this
 */
proto.rv.data.Action.MediaType.PlaybackMarker.prototype.clearUuid = function() {
  return this.setUuid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.MediaType.PlaybackMarker.prototype.hasUuid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double time = 2;
 * @return {number}
 */
proto.rv.data.Action.MediaType.PlaybackMarker.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Action.MediaType.PlaybackMarker} returns this
 */
proto.rv.data.Action.MediaType.PlaybackMarker.prototype.setTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional Color color = 3;
 * @return {?proto.rv.data.Color}
 */
proto.rv.data.Action.MediaType.PlaybackMarker.prototype.getColor = function() {
  return /** @type{?proto.rv.data.Color} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Color, 3));
};


/**
 * @param {?proto.rv.data.Color|undefined} value
 * @return {!proto.rv.data.Action.MediaType.PlaybackMarker} returns this
*/
proto.rv.data.Action.MediaType.PlaybackMarker.prototype.setColor = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.MediaType.PlaybackMarker} returns this
 */
proto.rv.data.Action.MediaType.PlaybackMarker.prototype.clearColor = function() {
  return this.setColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.MediaType.PlaybackMarker.prototype.hasColor = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.rv.data.Action.MediaType.PlaybackMarker.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Action.MediaType.PlaybackMarker} returns this
 */
proto.rv.data.Action.MediaType.PlaybackMarker.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Action actions = 5;
 * @return {!Array<!proto.rv.data.Action>}
 */
proto.rv.data.Action.MediaType.PlaybackMarker.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.rv.data.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.Action, 5));
};


/**
 * @param {!Array<!proto.rv.data.Action>} value
 * @return {!proto.rv.data.Action.MediaType.PlaybackMarker} returns this
*/
proto.rv.data.Action.MediaType.PlaybackMarker.prototype.setActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.rv.data.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.Action}
 */
proto.rv.data.Action.MediaType.PlaybackMarker.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.rv.data.Action, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Action.MediaType.PlaybackMarker} returns this
 */
proto.rv.data.Action.MediaType.PlaybackMarker.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};


/**
 * optional double transition_duration = 1;
 * @return {number}
 */
proto.rv.data.Action.MediaType.prototype.getTransitionDuration = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Action.MediaType} returns this
 */
proto.rv.data.Action.MediaType.prototype.setTransitionDuration = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional UUID selected_effect_preset_uuid = 2;
 * @return {?proto.rv.data.UUID}
 */
proto.rv.data.Action.MediaType.prototype.getSelectedEffectPresetUuid = function() {
  return /** @type{?proto.rv.data.UUID} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.UUID, 2));
};


/**
 * @param {?proto.rv.data.UUID|undefined} value
 * @return {!proto.rv.data.Action.MediaType} returns this
*/
proto.rv.data.Action.MediaType.prototype.setSelectedEffectPresetUuid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.MediaType} returns this
 */
proto.rv.data.Action.MediaType.prototype.clearSelectedEffectPresetUuid = function() {
  return this.setSelectedEffectPresetUuid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.MediaType.prototype.hasSelectedEffectPresetUuid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Transition transition = 3;
 * @return {?proto.rv.data.Transition}
 */
proto.rv.data.Action.MediaType.prototype.getTransition = function() {
  return /** @type{?proto.rv.data.Transition} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Transition, 3));
};


/**
 * @param {?proto.rv.data.Transition|undefined} value
 * @return {!proto.rv.data.Action.MediaType} returns this
*/
proto.rv.data.Action.MediaType.prototype.setTransition = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.MediaType} returns this
 */
proto.rv.data.Action.MediaType.prototype.clearTransition = function() {
  return this.setTransition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.MediaType.prototype.hasTransition = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Effect effects = 4;
 * @return {!Array<!proto.rv.data.Effect>}
 */
proto.rv.data.Action.MediaType.prototype.getEffectsList = function() {
  return /** @type{!Array<!proto.rv.data.Effect>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.Effect, 4));
};


/**
 * @param {!Array<!proto.rv.data.Effect>} value
 * @return {!proto.rv.data.Action.MediaType} returns this
*/
proto.rv.data.Action.MediaType.prototype.setEffectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.rv.data.Effect=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.Effect}
 */
proto.rv.data.Action.MediaType.prototype.addEffects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.rv.data.Effect, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Action.MediaType} returns this
 */
proto.rv.data.Action.MediaType.prototype.clearEffectsList = function() {
  return this.setEffectsList([]);
};


/**
 * optional Media element = 5;
 * @return {?proto.rv.data.Media}
 */
proto.rv.data.Action.MediaType.prototype.getElement = function() {
  return /** @type{?proto.rv.data.Media} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Media, 5));
};


/**
 * @param {?proto.rv.data.Media|undefined} value
 * @return {!proto.rv.data.Action.MediaType} returns this
*/
proto.rv.data.Action.MediaType.prototype.setElement = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.MediaType} returns this
 */
proto.rv.data.Action.MediaType.prototype.clearElement = function() {
  return this.setElement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.MediaType.prototype.hasElement = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional LayerType layer_type = 10;
 * @return {!proto.rv.data.Action.LayerType}
 */
proto.rv.data.Action.MediaType.prototype.getLayerType = function() {
  return /** @type {!proto.rv.data.Action.LayerType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.rv.data.Action.LayerType} value
 * @return {!proto.rv.data.Action.MediaType} returns this
 */
proto.rv.data.Action.MediaType.prototype.setLayerType = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional bool always_retrigger = 11;
 * @return {boolean}
 */
proto.rv.data.Action.MediaType.prototype.getAlwaysRetrigger = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Action.MediaType} returns this
 */
proto.rv.data.Action.MediaType.prototype.setAlwaysRetrigger = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * repeated PlaybackMarker markers = 12;
 * @return {!Array<!proto.rv.data.Action.MediaType.PlaybackMarker>}
 */
proto.rv.data.Action.MediaType.prototype.getMarkersList = function() {
  return /** @type{!Array<!proto.rv.data.Action.MediaType.PlaybackMarker>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.Action.MediaType.PlaybackMarker, 12));
};


/**
 * @param {!Array<!proto.rv.data.Action.MediaType.PlaybackMarker>} value
 * @return {!proto.rv.data.Action.MediaType} returns this
*/
proto.rv.data.Action.MediaType.prototype.setMarkersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.rv.data.Action.MediaType.PlaybackMarker=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.Action.MediaType.PlaybackMarker}
 */
proto.rv.data.Action.MediaType.prototype.addMarkers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.rv.data.Action.MediaType.PlaybackMarker, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Action.MediaType} returns this
 */
proto.rv.data.Action.MediaType.prototype.clearMarkersList = function() {
  return this.setMarkersList([]);
};


/**
 * optional Image image = 6;
 * @return {?proto.rv.data.Action.MediaType.Image}
 */
proto.rv.data.Action.MediaType.prototype.getImage = function() {
  return /** @type{?proto.rv.data.Action.MediaType.Image} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.MediaType.Image, 6));
};


/**
 * @param {?proto.rv.data.Action.MediaType.Image|undefined} value
 * @return {!proto.rv.data.Action.MediaType} returns this
*/
proto.rv.data.Action.MediaType.prototype.setImage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.rv.data.Action.MediaType.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.MediaType} returns this
 */
proto.rv.data.Action.MediaType.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.MediaType.prototype.hasImage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Video video = 7;
 * @return {?proto.rv.data.Action.MediaType.Video}
 */
proto.rv.data.Action.MediaType.prototype.getVideo = function() {
  return /** @type{?proto.rv.data.Action.MediaType.Video} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.MediaType.Video, 7));
};


/**
 * @param {?proto.rv.data.Action.MediaType.Video|undefined} value
 * @return {!proto.rv.data.Action.MediaType} returns this
*/
proto.rv.data.Action.MediaType.prototype.setVideo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.rv.data.Action.MediaType.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.MediaType} returns this
 */
proto.rv.data.Action.MediaType.prototype.clearVideo = function() {
  return this.setVideo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.MediaType.prototype.hasVideo = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Audio audio = 8;
 * @return {?proto.rv.data.Action.MediaType.Audio}
 */
proto.rv.data.Action.MediaType.prototype.getAudio = function() {
  return /** @type{?proto.rv.data.Action.MediaType.Audio} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.MediaType.Audio, 8));
};


/**
 * @param {?proto.rv.data.Action.MediaType.Audio|undefined} value
 * @return {!proto.rv.data.Action.MediaType} returns this
*/
proto.rv.data.Action.MediaType.prototype.setAudio = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.rv.data.Action.MediaType.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.MediaType} returns this
 */
proto.rv.data.Action.MediaType.prototype.clearAudio = function() {
  return this.setAudio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.MediaType.prototype.hasAudio = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional LiveVideo live_video = 9;
 * @return {?proto.rv.data.Action.MediaType.LiveVideo}
 */
proto.rv.data.Action.MediaType.prototype.getLiveVideo = function() {
  return /** @type{?proto.rv.data.Action.MediaType.LiveVideo} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.MediaType.LiveVideo, 9));
};


/**
 * @param {?proto.rv.data.Action.MediaType.LiveVideo|undefined} value
 * @return {!proto.rv.data.Action.MediaType} returns this
*/
proto.rv.data.Action.MediaType.prototype.setLiveVideo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.rv.data.Action.MediaType.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.MediaType} returns this
 */
proto.rv.data.Action.MediaType.prototype.clearLiveVideo = function() {
  return this.setLiveVideo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.MediaType.prototype.hasLiveVideo = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.Action.SlideType.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.rv.data.Action.SlideType.SlideCase = {
  SLIDE_NOT_SET: 0,
  PRESENTATION: 2,
  PROP: 3
};

/**
 * @return {proto.rv.data.Action.SlideType.SlideCase}
 */
proto.rv.data.Action.SlideType.prototype.getSlideCase = function() {
  return /** @type {proto.rv.data.Action.SlideType.SlideCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.Action.SlideType.oneofGroups_[0]));
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
proto.rv.data.Action.SlideType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.SlideType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.SlideType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.SlideType.toObject = function(includeInstance, msg) {
  var f, obj = {
presentation: (f = msg.getPresentation()) && proto.rv.data.PresentationSlide.toObject(includeInstance, f),
prop: (f = msg.getProp()) && proto.rv.data.PropSlide.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Action.SlideType}
 */
proto.rv.data.Action.SlideType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.SlideType;
  return proto.rv.data.Action.SlideType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.SlideType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.SlideType}
 */
proto.rv.data.Action.SlideType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.rv.data.PresentationSlide;
      reader.readMessage(value,proto.rv.data.PresentationSlide.deserializeBinaryFromReader);
      msg.setPresentation(value);
      break;
    case 3:
      var value = new proto.rv.data.PropSlide;
      reader.readMessage(value,proto.rv.data.PropSlide.deserializeBinaryFromReader);
      msg.setProp(value);
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
proto.rv.data.Action.SlideType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.SlideType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.SlideType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.SlideType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPresentation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.PresentationSlide.serializeBinaryToWriter
    );
  }
  f = message.getProp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.PropSlide.serializeBinaryToWriter
    );
  }
};


/**
 * optional PresentationSlide presentation = 2;
 * @return {?proto.rv.data.PresentationSlide}
 */
proto.rv.data.Action.SlideType.prototype.getPresentation = function() {
  return /** @type{?proto.rv.data.PresentationSlide} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.PresentationSlide, 2));
};


/**
 * @param {?proto.rv.data.PresentationSlide|undefined} value
 * @return {!proto.rv.data.Action.SlideType} returns this
*/
proto.rv.data.Action.SlideType.prototype.setPresentation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.data.Action.SlideType.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.SlideType} returns this
 */
proto.rv.data.Action.SlideType.prototype.clearPresentation = function() {
  return this.setPresentation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.SlideType.prototype.hasPresentation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PropSlide prop = 3;
 * @return {?proto.rv.data.PropSlide}
 */
proto.rv.data.Action.SlideType.prototype.getProp = function() {
  return /** @type{?proto.rv.data.PropSlide} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.PropSlide, 3));
};


/**
 * @param {?proto.rv.data.PropSlide|undefined} value
 * @return {!proto.rv.data.Action.SlideType} returns this
*/
proto.rv.data.Action.SlideType.prototype.setProp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.data.Action.SlideType.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.SlideType} returns this
 */
proto.rv.data.Action.SlideType.prototype.clearProp = function() {
  return this.setProp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.SlideType.prototype.hasProp = function() {
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
proto.rv.data.Action.BackgroundType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.BackgroundType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.BackgroundType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.BackgroundType.toObject = function(includeInstance, msg) {
  var f, obj = {
element: (f = msg.getElement()) && proto.rv.data.Background.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Action.BackgroundType}
 */
proto.rv.data.Action.BackgroundType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.BackgroundType;
  return proto.rv.data.Action.BackgroundType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.BackgroundType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.BackgroundType}
 */
proto.rv.data.Action.BackgroundType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Background;
      reader.readMessage(value,proto.rv.data.Background.deserializeBinaryFromReader);
      msg.setElement(value);
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
proto.rv.data.Action.BackgroundType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.BackgroundType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.BackgroundType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.BackgroundType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElement();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Background.serializeBinaryToWriter
    );
  }
};


/**
 * optional Background element = 1;
 * @return {?proto.rv.data.Background}
 */
proto.rv.data.Action.BackgroundType.prototype.getElement = function() {
  return /** @type{?proto.rv.data.Background} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Background, 1));
};


/**
 * @param {?proto.rv.data.Background|undefined} value
 * @return {!proto.rv.data.Action.BackgroundType} returns this
*/
proto.rv.data.Action.BackgroundType.prototype.setElement = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.BackgroundType} returns this
 */
proto.rv.data.Action.BackgroundType.prototype.clearElement = function() {
  return this.setElement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.BackgroundType.prototype.hasElement = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.rv.data.Action.TimerType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.TimerType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.TimerType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.TimerType.toObject = function(includeInstance, msg) {
  var f, obj = {
actionType: jspb.Message.getFieldWithDefault(msg, 2, 0),
timerIdentification: (f = msg.getTimerIdentification()) && proto.rv.data.CollectionElementType.toObject(includeInstance, f),
timerConfiguration: (f = msg.getTimerConfiguration()) && proto.rv.data.Timer.Configuration.toObject(includeInstance, f),
incrementAmount: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0)
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
 * @return {!proto.rv.data.Action.TimerType}
 */
proto.rv.data.Action.TimerType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.TimerType;
  return proto.rv.data.Action.TimerType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.TimerType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.TimerType}
 */
proto.rv.data.Action.TimerType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {!proto.rv.data.Action.TimerType.TimerAction} */ (reader.readEnum());
      msg.setActionType(value);
      break;
    case 4:
      var value = new proto.rv.data.CollectionElementType;
      reader.readMessage(value,proto.rv.data.CollectionElementType.deserializeBinaryFromReader);
      msg.setTimerIdentification(value);
      break;
    case 10:
      var value = new proto.rv.data.Timer.Configuration;
      reader.readMessage(value,proto.rv.data.Timer.Configuration.deserializeBinaryFromReader);
      msg.setTimerConfiguration(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setIncrementAmount(value);
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
proto.rv.data.Action.TimerType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.TimerType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.TimerType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.TimerType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTimerIdentification();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.data.CollectionElementType.serializeBinaryToWriter
    );
  }
  f = message.getTimerConfiguration();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.rv.data.Timer.Configuration.serializeBinaryToWriter
    );
  }
  f = message.getIncrementAmount();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Action.TimerType.TimerAction = {
  ACTION_START: 0,
  ACTION_STOP: 1,
  ACTION_RESET: 2,
  ACTION_RESET_AND_START: 3,
  ACTION_STOP_AND_RESET: 4,
  ACTION_INCREMENT: 5
};

/**
 * optional TimerAction action_type = 2;
 * @return {!proto.rv.data.Action.TimerType.TimerAction}
 */
proto.rv.data.Action.TimerType.prototype.getActionType = function() {
  return /** @type {!proto.rv.data.Action.TimerType.TimerAction} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.data.Action.TimerType.TimerAction} value
 * @return {!proto.rv.data.Action.TimerType} returns this
 */
proto.rv.data.Action.TimerType.prototype.setActionType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional CollectionElementType timer_identification = 4;
 * @return {?proto.rv.data.CollectionElementType}
 */
proto.rv.data.Action.TimerType.prototype.getTimerIdentification = function() {
  return /** @type{?proto.rv.data.CollectionElementType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.CollectionElementType, 4));
};


/**
 * @param {?proto.rv.data.CollectionElementType|undefined} value
 * @return {!proto.rv.data.Action.TimerType} returns this
*/
proto.rv.data.Action.TimerType.prototype.setTimerIdentification = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.TimerType} returns this
 */
proto.rv.data.Action.TimerType.prototype.clearTimerIdentification = function() {
  return this.setTimerIdentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.TimerType.prototype.hasTimerIdentification = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Timer.Configuration timer_configuration = 10;
 * @return {?proto.rv.data.Timer.Configuration}
 */
proto.rv.data.Action.TimerType.prototype.getTimerConfiguration = function() {
  return /** @type{?proto.rv.data.Timer.Configuration} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Timer.Configuration, 10));
};


/**
 * @param {?proto.rv.data.Timer.Configuration|undefined} value
 * @return {!proto.rv.data.Action.TimerType} returns this
*/
proto.rv.data.Action.TimerType.prototype.setTimerConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.TimerType} returns this
 */
proto.rv.data.Action.TimerType.prototype.clearTimerConfiguration = function() {
  return this.setTimerConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.TimerType.prototype.hasTimerConfiguration = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional double increment_amount = 11;
 * @return {number}
 */
proto.rv.data.Action.TimerType.prototype.getIncrementAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Action.TimerType} returns this
 */
proto.rv.data.Action.TimerType.prototype.setIncrementAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
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
proto.rv.data.Action.ClearType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.ClearType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.ClearType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.ClearType.toObject = function(includeInstance, msg) {
  var f, obj = {
targetLayer: jspb.Message.getFieldWithDefault(msg, 2, 0),
contentDestination: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.rv.data.Action.ClearType}
 */
proto.rv.data.Action.ClearType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.ClearType;
  return proto.rv.data.Action.ClearType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.ClearType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.ClearType}
 */
proto.rv.data.Action.ClearType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {!proto.rv.data.Action.ClearType.ClearTargetLayer} */ (reader.readEnum());
      msg.setTargetLayer(value);
      break;
    case 4:
      var value = /** @type {!proto.rv.data.Action.ContentDestination} */ (reader.readEnum());
      msg.setContentDestination(value);
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
proto.rv.data.Action.ClearType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.ClearType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.ClearType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.ClearType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetLayer();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getContentDestination();
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
proto.rv.data.Action.ClearType.ClearTargetLayer = {
  CLEAR_TARGET_LAYER_ALL: 0,
  CLEAR_TARGET_LAYER_AUDIO: 1,
  CLEAR_TARGET_LAYER_BACKGROUND: 2,
  CLEAR_TARGET_LAYER_LIVE_VIDEO: 3,
  CLEAR_TARGET_LAYER_PROP: 4,
  CLEAR_TARGET_LAYER_SLIDE: 5,
  CLEAR_TARGET_LAYER_LOGO: 6,
  CLEAR_TARGET_LAYER_MESSAGES: 7,
  CLEAR_TARGET_LAYER_AUDIO_EFFECTS: 8
};

/**
 * optional ClearTargetLayer target_layer = 2;
 * @return {!proto.rv.data.Action.ClearType.ClearTargetLayer}
 */
proto.rv.data.Action.ClearType.prototype.getTargetLayer = function() {
  return /** @type {!proto.rv.data.Action.ClearType.ClearTargetLayer} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.data.Action.ClearType.ClearTargetLayer} value
 * @return {!proto.rv.data.Action.ClearType} returns this
 */
proto.rv.data.Action.ClearType.prototype.setTargetLayer = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional ContentDestination content_destination = 4;
 * @return {!proto.rv.data.Action.ContentDestination}
 */
proto.rv.data.Action.ClearType.prototype.getContentDestination = function() {
  return /** @type {!proto.rv.data.Action.ContentDestination} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.rv.data.Action.ContentDestination} value
 * @return {!proto.rv.data.Action.ClearType} returns this
 */
proto.rv.data.Action.ClearType.prototype.setContentDestination = function(value) {
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
proto.rv.data.Action.ClearGroupType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.ClearGroupType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.ClearGroupType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.ClearGroupType.toObject = function(includeInstance, msg) {
  var f, obj = {
identification: (f = msg.getIdentification()) && proto.rv.data.CollectionElementType.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Action.ClearGroupType}
 */
proto.rv.data.Action.ClearGroupType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.ClearGroupType;
  return proto.rv.data.Action.ClearGroupType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.ClearGroupType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.ClearGroupType}
 */
proto.rv.data.Action.ClearGroupType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.CollectionElementType;
      reader.readMessage(value,proto.rv.data.CollectionElementType.deserializeBinaryFromReader);
      msg.setIdentification(value);
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
proto.rv.data.Action.ClearGroupType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.ClearGroupType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.ClearGroupType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.ClearGroupType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.CollectionElementType.serializeBinaryToWriter
    );
  }
};


/**
 * optional CollectionElementType identification = 1;
 * @return {?proto.rv.data.CollectionElementType}
 */
proto.rv.data.Action.ClearGroupType.prototype.getIdentification = function() {
  return /** @type{?proto.rv.data.CollectionElementType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.CollectionElementType, 1));
};


/**
 * @param {?proto.rv.data.CollectionElementType|undefined} value
 * @return {!proto.rv.data.Action.ClearGroupType} returns this
*/
proto.rv.data.Action.ClearGroupType.prototype.setIdentification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.ClearGroupType} returns this
 */
proto.rv.data.Action.ClearGroupType.prototype.clearIdentification = function() {
  return this.setIdentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.ClearGroupType.prototype.hasIdentification = function() {
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
proto.rv.data.Action.TransportControlType.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.rv.data.Action.TransportControlType.CommandCase = {
  COMMAND_NOT_SET: 0,
  PLAY: 1,
  PAUSE: 2,
  JUMPTOTIME: 3
};

/**
 * @return {proto.rv.data.Action.TransportControlType.CommandCase}
 */
proto.rv.data.Action.TransportControlType.prototype.getCommandCase = function() {
  return /** @type {proto.rv.data.Action.TransportControlType.CommandCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.Action.TransportControlType.oneofGroups_[0]));
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
proto.rv.data.Action.TransportControlType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.TransportControlType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.TransportControlType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.TransportControlType.toObject = function(includeInstance, msg) {
  var f, obj = {
play: (f = msg.getPlay()) && proto.rv.data.Action.TransportControlType.Play.toObject(includeInstance, f),
pause: (f = msg.getPause()) && proto.rv.data.Action.TransportControlType.Pause.toObject(includeInstance, f),
jumptotime: (f = msg.getJumptotime()) && proto.rv.data.Action.TransportControlType.JumpToTime.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Action.TransportControlType}
 */
proto.rv.data.Action.TransportControlType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.TransportControlType;
  return proto.rv.data.Action.TransportControlType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.TransportControlType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.TransportControlType}
 */
proto.rv.data.Action.TransportControlType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Action.TransportControlType.Play;
      reader.readMessage(value,proto.rv.data.Action.TransportControlType.Play.deserializeBinaryFromReader);
      msg.setPlay(value);
      break;
    case 2:
      var value = new proto.rv.data.Action.TransportControlType.Pause;
      reader.readMessage(value,proto.rv.data.Action.TransportControlType.Pause.deserializeBinaryFromReader);
      msg.setPause(value);
      break;
    case 3:
      var value = new proto.rv.data.Action.TransportControlType.JumpToTime;
      reader.readMessage(value,proto.rv.data.Action.TransportControlType.JumpToTime.deserializeBinaryFromReader);
      msg.setJumptotime(value);
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
proto.rv.data.Action.TransportControlType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.TransportControlType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.TransportControlType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.TransportControlType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlay();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Action.TransportControlType.Play.serializeBinaryToWriter
    );
  }
  f = message.getPause();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.Action.TransportControlType.Pause.serializeBinaryToWriter
    );
  }
  f = message.getJumptotime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.Action.TransportControlType.JumpToTime.serializeBinaryToWriter
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
proto.rv.data.Action.TransportControlType.Play.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.TransportControlType.Play.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.TransportControlType.Play} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.TransportControlType.Play.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.data.Action.TransportControlType.Play}
 */
proto.rv.data.Action.TransportControlType.Play.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.TransportControlType.Play;
  return proto.rv.data.Action.TransportControlType.Play.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.TransportControlType.Play} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.TransportControlType.Play}
 */
proto.rv.data.Action.TransportControlType.Play.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.data.Action.TransportControlType.Play.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.TransportControlType.Play.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.TransportControlType.Play} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.TransportControlType.Play.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.data.Action.TransportControlType.Pause.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.TransportControlType.Pause.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.TransportControlType.Pause} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.TransportControlType.Pause.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.data.Action.TransportControlType.Pause}
 */
proto.rv.data.Action.TransportControlType.Pause.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.TransportControlType.Pause;
  return proto.rv.data.Action.TransportControlType.Pause.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.TransportControlType.Pause} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.TransportControlType.Pause}
 */
proto.rv.data.Action.TransportControlType.Pause.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.data.Action.TransportControlType.Pause.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.TransportControlType.Pause.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.TransportControlType.Pause} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.TransportControlType.Pause.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.data.Action.TransportControlType.JumpToTime.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.TransportControlType.JumpToTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.TransportControlType.JumpToTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.TransportControlType.JumpToTime.toObject = function(includeInstance, msg) {
  var f, obj = {
time: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.rv.data.Action.TransportControlType.JumpToTime}
 */
proto.rv.data.Action.TransportControlType.JumpToTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.TransportControlType.JumpToTime;
  return proto.rv.data.Action.TransportControlType.JumpToTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.TransportControlType.JumpToTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.TransportControlType.JumpToTime}
 */
proto.rv.data.Action.TransportControlType.JumpToTime.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.data.Action.TransportControlType.JumpToTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.TransportControlType.JumpToTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.TransportControlType.JumpToTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.TransportControlType.JumpToTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTime();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double time = 1;
 * @return {number}
 */
proto.rv.data.Action.TransportControlType.JumpToTime.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Action.TransportControlType.JumpToTime} returns this
 */
proto.rv.data.Action.TransportControlType.JumpToTime.prototype.setTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional Play play = 1;
 * @return {?proto.rv.data.Action.TransportControlType.Play}
 */
proto.rv.data.Action.TransportControlType.prototype.getPlay = function() {
  return /** @type{?proto.rv.data.Action.TransportControlType.Play} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.TransportControlType.Play, 1));
};


/**
 * @param {?proto.rv.data.Action.TransportControlType.Play|undefined} value
 * @return {!proto.rv.data.Action.TransportControlType} returns this
*/
proto.rv.data.Action.TransportControlType.prototype.setPlay = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.data.Action.TransportControlType.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.TransportControlType} returns this
 */
proto.rv.data.Action.TransportControlType.prototype.clearPlay = function() {
  return this.setPlay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.TransportControlType.prototype.hasPlay = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Pause pause = 2;
 * @return {?proto.rv.data.Action.TransportControlType.Pause}
 */
proto.rv.data.Action.TransportControlType.prototype.getPause = function() {
  return /** @type{?proto.rv.data.Action.TransportControlType.Pause} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.TransportControlType.Pause, 2));
};


/**
 * @param {?proto.rv.data.Action.TransportControlType.Pause|undefined} value
 * @return {!proto.rv.data.Action.TransportControlType} returns this
*/
proto.rv.data.Action.TransportControlType.prototype.setPause = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.data.Action.TransportControlType.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.TransportControlType} returns this
 */
proto.rv.data.Action.TransportControlType.prototype.clearPause = function() {
  return this.setPause(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.TransportControlType.prototype.hasPause = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional JumpToTime jumpToTime = 3;
 * @return {?proto.rv.data.Action.TransportControlType.JumpToTime}
 */
proto.rv.data.Action.TransportControlType.prototype.getJumptotime = function() {
  return /** @type{?proto.rv.data.Action.TransportControlType.JumpToTime} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.TransportControlType.JumpToTime, 3));
};


/**
 * @param {?proto.rv.data.Action.TransportControlType.JumpToTime|undefined} value
 * @return {!proto.rv.data.Action.TransportControlType} returns this
*/
proto.rv.data.Action.TransportControlType.prototype.setJumptotime = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.data.Action.TransportControlType.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.TransportControlType} returns this
 */
proto.rv.data.Action.TransportControlType.prototype.clearJumptotime = function() {
  return this.setJumptotime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.TransportControlType.prototype.hasJumptotime = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.Action.StageLayoutType.repeatedFields_ = [4];



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
proto.rv.data.Action.StageLayoutType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.StageLayoutType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.StageLayoutType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.StageLayoutType.toObject = function(includeInstance, msg) {
  var f, obj = {
stageScreenAssignmentsList: jspb.Message.toObjectList(msg.getStageScreenAssignmentsList(),
    proto.rv.data.Stage.ScreenAssignment.toObject, includeInstance),
slideTarget: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.rv.data.Action.StageLayoutType}
 */
proto.rv.data.Action.StageLayoutType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.StageLayoutType;
  return proto.rv.data.Action.StageLayoutType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.StageLayoutType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.StageLayoutType}
 */
proto.rv.data.Action.StageLayoutType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = new proto.rv.data.Stage.ScreenAssignment;
      reader.readMessage(value,proto.rv.data.Stage.ScreenAssignment.deserializeBinaryFromReader);
      msg.addStageScreenAssignments(value);
      break;
    case 5:
      var value = /** @type {!proto.rv.data.Action.StageLayoutType.SlideTarget} */ (reader.readEnum());
      msg.setSlideTarget(value);
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
proto.rv.data.Action.StageLayoutType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.StageLayoutType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.StageLayoutType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.StageLayoutType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStageScreenAssignmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.rv.data.Stage.ScreenAssignment.serializeBinaryToWriter
    );
  }
  f = message.getSlideTarget();
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
proto.rv.data.Action.StageLayoutType.SlideTarget = {
  SLIDE_TARGET_NO_CHANGE: 0,
  SLIDE_TARGET_STAGE_ONLY: 1,
  SLIDE_TARGET_ALL: 2
};

/**
 * repeated Stage.ScreenAssignment stage_screen_assignments = 4;
 * @return {!Array<!proto.rv.data.Stage.ScreenAssignment>}
 */
proto.rv.data.Action.StageLayoutType.prototype.getStageScreenAssignmentsList = function() {
  return /** @type{!Array<!proto.rv.data.Stage.ScreenAssignment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.Stage.ScreenAssignment, 4));
};


/**
 * @param {!Array<!proto.rv.data.Stage.ScreenAssignment>} value
 * @return {!proto.rv.data.Action.StageLayoutType} returns this
*/
proto.rv.data.Action.StageLayoutType.prototype.setStageScreenAssignmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.rv.data.Stage.ScreenAssignment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.Stage.ScreenAssignment}
 */
proto.rv.data.Action.StageLayoutType.prototype.addStageScreenAssignments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.rv.data.Stage.ScreenAssignment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Action.StageLayoutType} returns this
 */
proto.rv.data.Action.StageLayoutType.prototype.clearStageScreenAssignmentsList = function() {
  return this.setStageScreenAssignmentsList([]);
};


/**
 * optional SlideTarget slide_target = 5;
 * @return {!proto.rv.data.Action.StageLayoutType.SlideTarget}
 */
proto.rv.data.Action.StageLayoutType.prototype.getSlideTarget = function() {
  return /** @type {!proto.rv.data.Action.StageLayoutType.SlideTarget} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.rv.data.Action.StageLayoutType.SlideTarget} value
 * @return {!proto.rv.data.Action.StageLayoutType} returns this
 */
proto.rv.data.Action.StageLayoutType.prototype.setSlideTarget = function(value) {
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
proto.rv.data.Action.SlideDestinationType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.SlideDestinationType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.SlideDestinationType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.SlideDestinationType.toObject = function(includeInstance, msg) {
  var f, obj = {
slideTarget: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.data.Action.SlideDestinationType}
 */
proto.rv.data.Action.SlideDestinationType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.SlideDestinationType;
  return proto.rv.data.Action.SlideDestinationType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.SlideDestinationType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.SlideDestinationType}
 */
proto.rv.data.Action.SlideDestinationType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Action.StageLayoutType.SlideTarget} */ (reader.readEnum());
      msg.setSlideTarget(value);
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
proto.rv.data.Action.SlideDestinationType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.SlideDestinationType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.SlideDestinationType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.SlideDestinationType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlideTarget();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional StageLayoutType.SlideTarget slide_target = 1;
 * @return {!proto.rv.data.Action.StageLayoutType.SlideTarget}
 */
proto.rv.data.Action.SlideDestinationType.prototype.getSlideTarget = function() {
  return /** @type {!proto.rv.data.Action.StageLayoutType.SlideTarget} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Action.StageLayoutType.SlideTarget} value
 * @return {!proto.rv.data.Action.SlideDestinationType} returns this
 */
proto.rv.data.Action.SlideDestinationType.prototype.setSlideTarget = function(value) {
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
proto.rv.data.Action.PropType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.PropType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.PropType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.PropType.toObject = function(includeInstance, msg) {
  var f, obj = {
identification: (f = msg.getIdentification()) && proto.rv.data.CollectionElementType.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Action.PropType}
 */
proto.rv.data.Action.PropType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.PropType;
  return proto.rv.data.Action.PropType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.PropType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.PropType}
 */
proto.rv.data.Action.PropType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto.rv.data.CollectionElementType;
      reader.readMessage(value,proto.rv.data.CollectionElementType.deserializeBinaryFromReader);
      msg.setIdentification(value);
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
proto.rv.data.Action.PropType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.PropType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.PropType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.PropType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentification();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.CollectionElementType.serializeBinaryToWriter
    );
  }
};


/**
 * optional CollectionElementType identification = 3;
 * @return {?proto.rv.data.CollectionElementType}
 */
proto.rv.data.Action.PropType.prototype.getIdentification = function() {
  return /** @type{?proto.rv.data.CollectionElementType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.CollectionElementType, 3));
};


/**
 * @param {?proto.rv.data.CollectionElementType|undefined} value
 * @return {!proto.rv.data.Action.PropType} returns this
*/
proto.rv.data.Action.PropType.prototype.setIdentification = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.PropType} returns this
 */
proto.rv.data.Action.PropType.prototype.clearIdentification = function() {
  return this.setIdentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.PropType.prototype.hasIdentification = function() {
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
proto.rv.data.Action.MaskType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.MaskType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.MaskType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.MaskType.toObject = function(includeInstance, msg) {
  var f, obj = {
identification: (f = msg.getIdentification()) && proto.rv.data.CollectionElementType.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Action.MaskType}
 */
proto.rv.data.Action.MaskType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.MaskType;
  return proto.rv.data.Action.MaskType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.MaskType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.MaskType}
 */
proto.rv.data.Action.MaskType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto.rv.data.CollectionElementType;
      reader.readMessage(value,proto.rv.data.CollectionElementType.deserializeBinaryFromReader);
      msg.setIdentification(value);
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
proto.rv.data.Action.MaskType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.MaskType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.MaskType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.MaskType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentification();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.CollectionElementType.serializeBinaryToWriter
    );
  }
};


/**
 * optional CollectionElementType identification = 3;
 * @return {?proto.rv.data.CollectionElementType}
 */
proto.rv.data.Action.MaskType.prototype.getIdentification = function() {
  return /** @type{?proto.rv.data.CollectionElementType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.CollectionElementType, 3));
};


/**
 * @param {?proto.rv.data.CollectionElementType|undefined} value
 * @return {!proto.rv.data.Action.MaskType} returns this
*/
proto.rv.data.Action.MaskType.prototype.setIdentification = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.MaskType} returns this
 */
proto.rv.data.Action.MaskType.prototype.clearIdentification = function() {
  return this.setIdentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.MaskType.prototype.hasIdentification = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.Action.MessageType.repeatedFields_ = [3];



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
proto.rv.data.Action.MessageType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.MessageType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.MessageType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.MessageType.toObject = function(includeInstance, msg) {
  var f, obj = {
messageIdentificaton: (f = msg.getMessageIdentificaton()) && proto.rv.data.CollectionElementType.toObject(includeInstance, f),
contentList: jspb.Message.toObjectList(msg.getContentList(),
    proto.rv.data.Message.TokenValue.toObject, includeInstance)
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
 * @return {!proto.rv.data.Action.MessageType}
 */
proto.rv.data.Action.MessageType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.MessageType;
  return proto.rv.data.Action.MessageType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.MessageType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.MessageType}
 */
proto.rv.data.Action.MessageType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.CollectionElementType;
      reader.readMessage(value,proto.rv.data.CollectionElementType.deserializeBinaryFromReader);
      msg.setMessageIdentificaton(value);
      break;
    case 3:
      var value = new proto.rv.data.Message.TokenValue;
      reader.readMessage(value,proto.rv.data.Message.TokenValue.deserializeBinaryFromReader);
      msg.addContent(value);
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
proto.rv.data.Action.MessageType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.MessageType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.MessageType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.MessageType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageIdentificaton();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.CollectionElementType.serializeBinaryToWriter
    );
  }
  f = message.getContentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.rv.data.Message.TokenValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional CollectionElementType message_identificaton = 1;
 * @return {?proto.rv.data.CollectionElementType}
 */
proto.rv.data.Action.MessageType.prototype.getMessageIdentificaton = function() {
  return /** @type{?proto.rv.data.CollectionElementType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.CollectionElementType, 1));
};


/**
 * @param {?proto.rv.data.CollectionElementType|undefined} value
 * @return {!proto.rv.data.Action.MessageType} returns this
*/
proto.rv.data.Action.MessageType.prototype.setMessageIdentificaton = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.MessageType} returns this
 */
proto.rv.data.Action.MessageType.prototype.clearMessageIdentificaton = function() {
  return this.setMessageIdentificaton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.MessageType.prototype.hasMessageIdentificaton = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Message.TokenValue content = 3;
 * @return {!Array<!proto.rv.data.Message.TokenValue>}
 */
proto.rv.data.Action.MessageType.prototype.getContentList = function() {
  return /** @type{!Array<!proto.rv.data.Message.TokenValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.Message.TokenValue, 3));
};


/**
 * @param {!Array<!proto.rv.data.Message.TokenValue>} value
 * @return {!proto.rv.data.Action.MessageType} returns this
*/
proto.rv.data.Action.MessageType.prototype.setContentList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.rv.data.Message.TokenValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.Message.TokenValue}
 */
proto.rv.data.Action.MessageType.prototype.addContent = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.rv.data.Message.TokenValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Action.MessageType} returns this
 */
proto.rv.data.Action.MessageType.prototype.clearContentList = function() {
  return this.setContentList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.Action.CommunicationType.repeatedFields_ = [4];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.Action.CommunicationType.oneofGroups_ = [[5,6,7,8]];

/**
 * @enum {number}
 */
proto.rv.data.Action.CommunicationType.CommandtypedataCase = {
  COMMANDTYPEDATA_NOT_SET: 0,
  MIDI_COMMAND: 5,
  GLOBAL_CACHE_COMMAND: 6,
  GVG100_COMMAND: 7,
  SONY_BVS_COMMAND: 8
};

/**
 * @return {proto.rv.data.Action.CommunicationType.CommandtypedataCase}
 */
proto.rv.data.Action.CommunicationType.prototype.getCommandtypedataCase = function() {
  return /** @type {proto.rv.data.Action.CommunicationType.CommandtypedataCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.Action.CommunicationType.oneofGroups_[0]));
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
proto.rv.data.Action.CommunicationType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.CommunicationType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.CommunicationType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.CommunicationType.toObject = function(includeInstance, msg) {
  var f, obj = {
deviceIdentification: (f = msg.getDeviceIdentification()) && proto.rv.data.CollectionElementType.toObject(includeInstance, f),
format: jspb.Message.getFieldWithDefault(msg, 2, ""),
description: jspb.Message.getFieldWithDefault(msg, 3, ""),
commandsList: jspb.Message.toObjectList(msg.getCommandsList(),
    proto.rv.data.Action.CommunicationType.Command.toObject, includeInstance),
midiCommand: (f = msg.getMidiCommand()) && proto.rv.data.Action.CommunicationType.MIDICommand.toObject(includeInstance, f),
globalCacheCommand: (f = msg.getGlobalCacheCommand()) && proto.rv.data.Action.CommunicationType.GlobalCacheCommand.toObject(includeInstance, f),
gvg100Command: (f = msg.getGvg100Command()) && proto.rv.data.Action.CommunicationType.GVG100Command.toObject(includeInstance, f),
sonyBvsCommand: (f = msg.getSonyBvsCommand()) && proto.rv.data.Action.CommunicationType.SonyBVSCommand.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Action.CommunicationType}
 */
proto.rv.data.Action.CommunicationType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.CommunicationType;
  return proto.rv.data.Action.CommunicationType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.CommunicationType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.CommunicationType}
 */
proto.rv.data.Action.CommunicationType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.CollectionElementType;
      reader.readMessage(value,proto.rv.data.CollectionElementType.deserializeBinaryFromReader);
      msg.setDeviceIdentification(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormat(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = new proto.rv.data.Action.CommunicationType.Command;
      reader.readMessage(value,proto.rv.data.Action.CommunicationType.Command.deserializeBinaryFromReader);
      msg.addCommands(value);
      break;
    case 5:
      var value = new proto.rv.data.Action.CommunicationType.MIDICommand;
      reader.readMessage(value,proto.rv.data.Action.CommunicationType.MIDICommand.deserializeBinaryFromReader);
      msg.setMidiCommand(value);
      break;
    case 6:
      var value = new proto.rv.data.Action.CommunicationType.GlobalCacheCommand;
      reader.readMessage(value,proto.rv.data.Action.CommunicationType.GlobalCacheCommand.deserializeBinaryFromReader);
      msg.setGlobalCacheCommand(value);
      break;
    case 7:
      var value = new proto.rv.data.Action.CommunicationType.GVG100Command;
      reader.readMessage(value,proto.rv.data.Action.CommunicationType.GVG100Command.deserializeBinaryFromReader);
      msg.setGvg100Command(value);
      break;
    case 8:
      var value = new proto.rv.data.Action.CommunicationType.SonyBVSCommand;
      reader.readMessage(value,proto.rv.data.Action.CommunicationType.SonyBVSCommand.deserializeBinaryFromReader);
      msg.setSonyBvsCommand(value);
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
proto.rv.data.Action.CommunicationType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.CommunicationType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.CommunicationType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.CommunicationType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceIdentification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.CollectionElementType.serializeBinaryToWriter
    );
  }
  f = message.getFormat();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCommandsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.rv.data.Action.CommunicationType.Command.serializeBinaryToWriter
    );
  }
  f = message.getMidiCommand();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.data.Action.CommunicationType.MIDICommand.serializeBinaryToWriter
    );
  }
  f = message.getGlobalCacheCommand();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.rv.data.Action.CommunicationType.GlobalCacheCommand.serializeBinaryToWriter
    );
  }
  f = message.getGvg100Command();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.rv.data.Action.CommunicationType.GVG100Command.serializeBinaryToWriter
    );
  }
  f = message.getSonyBvsCommand();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.rv.data.Action.CommunicationType.SonyBVSCommand.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.Action.CommunicationType.Command.repeatedFields_ = [4];



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
proto.rv.data.Action.CommunicationType.Command.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.CommunicationType.Command.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.CommunicationType.Command} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.CommunicationType.Command.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
value: jspb.Message.getFieldWithDefault(msg, 2, ""),
replacementRange: (f = msg.getReplacementRange()) && proto.rv.data.IntRange.toObject(includeInstance, f),
possibleValuesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.rv.data.Action.CommunicationType.Command}
 */
proto.rv.data.Action.CommunicationType.Command.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.CommunicationType.Command;
  return proto.rv.data.Action.CommunicationType.Command.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.CommunicationType.Command} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.CommunicationType.Command}
 */
proto.rv.data.Action.CommunicationType.Command.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 3:
      var value = new proto.rv.data.IntRange;
      reader.readMessage(value,proto.rv.data.IntRange.deserializeBinaryFromReader);
      msg.setReplacementRange(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addPossibleValues(value);
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
proto.rv.data.Action.CommunicationType.Command.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.CommunicationType.Command.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.CommunicationType.Command} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.CommunicationType.Command.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReplacementRange();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.IntRange.serializeBinaryToWriter
    );
  }
  f = message.getPossibleValuesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.rv.data.Action.CommunicationType.Command.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Action.CommunicationType.Command} returns this
 */
proto.rv.data.Action.CommunicationType.Command.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.rv.data.Action.CommunicationType.Command.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Action.CommunicationType.Command} returns this
 */
proto.rv.data.Action.CommunicationType.Command.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional IntRange replacement_range = 3;
 * @return {?proto.rv.data.IntRange}
 */
proto.rv.data.Action.CommunicationType.Command.prototype.getReplacementRange = function() {
  return /** @type{?proto.rv.data.IntRange} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.IntRange, 3));
};


/**
 * @param {?proto.rv.data.IntRange|undefined} value
 * @return {!proto.rv.data.Action.CommunicationType.Command} returns this
*/
proto.rv.data.Action.CommunicationType.Command.prototype.setReplacementRange = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.CommunicationType.Command} returns this
 */
proto.rv.data.Action.CommunicationType.Command.prototype.clearReplacementRange = function() {
  return this.setReplacementRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.CommunicationType.Command.prototype.hasReplacementRange = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string possible_values = 4;
 * @return {!Array<string>}
 */
proto.rv.data.Action.CommunicationType.Command.prototype.getPossibleValuesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.rv.data.Action.CommunicationType.Command} returns this
 */
proto.rv.data.Action.CommunicationType.Command.prototype.setPossibleValuesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.rv.data.Action.CommunicationType.Command} returns this
 */
proto.rv.data.Action.CommunicationType.Command.prototype.addPossibleValues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Action.CommunicationType.Command} returns this
 */
proto.rv.data.Action.CommunicationType.Command.prototype.clearPossibleValuesList = function() {
  return this.setPossibleValuesList([]);
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
proto.rv.data.Action.CommunicationType.MIDICommand.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.CommunicationType.MIDICommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.CommunicationType.MIDICommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.CommunicationType.MIDICommand.toObject = function(includeInstance, msg) {
  var f, obj = {
state: jspb.Message.getFieldWithDefault(msg, 1, 0),
channel: jspb.Message.getFieldWithDefault(msg, 2, 0),
note: jspb.Message.getFieldWithDefault(msg, 3, 0),
intensity: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.rv.data.Action.CommunicationType.MIDICommand}
 */
proto.rv.data.Action.CommunicationType.MIDICommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.CommunicationType.MIDICommand;
  return proto.rv.data.Action.CommunicationType.MIDICommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.CommunicationType.MIDICommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.CommunicationType.MIDICommand}
 */
proto.rv.data.Action.CommunicationType.MIDICommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Action.CommunicationType.MIDICommand.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChannel(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNote(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIntensity(value);
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
proto.rv.data.Action.CommunicationType.MIDICommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.CommunicationType.MIDICommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.CommunicationType.MIDICommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.CommunicationType.MIDICommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getChannel();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getNote();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getIntensity();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Action.CommunicationType.MIDICommand.State = {
  STATE_ON: 0,
  STATE_OFF: 1
};

/**
 * optional State state = 1;
 * @return {!proto.rv.data.Action.CommunicationType.MIDICommand.State}
 */
proto.rv.data.Action.CommunicationType.MIDICommand.prototype.getState = function() {
  return /** @type {!proto.rv.data.Action.CommunicationType.MIDICommand.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Action.CommunicationType.MIDICommand.State} value
 * @return {!proto.rv.data.Action.CommunicationType.MIDICommand} returns this
 */
proto.rv.data.Action.CommunicationType.MIDICommand.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 channel = 2;
 * @return {number}
 */
proto.rv.data.Action.CommunicationType.MIDICommand.prototype.getChannel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Action.CommunicationType.MIDICommand} returns this
 */
proto.rv.data.Action.CommunicationType.MIDICommand.prototype.setChannel = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 note = 3;
 * @return {number}
 */
proto.rv.data.Action.CommunicationType.MIDICommand.prototype.getNote = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Action.CommunicationType.MIDICommand} returns this
 */
proto.rv.data.Action.CommunicationType.MIDICommand.prototype.setNote = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 intensity = 4;
 * @return {number}
 */
proto.rv.data.Action.CommunicationType.MIDICommand.prototype.getIntensity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Action.CommunicationType.MIDICommand} returns this
 */
proto.rv.data.Action.CommunicationType.MIDICommand.prototype.setIntensity = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.rv.data.Action.CommunicationType.GlobalCacheCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.CommunicationType.GlobalCacheCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.CommunicationType.GlobalCacheCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.CommunicationType.GlobalCacheCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
commandAction: jspb.Message.getFieldWithDefault(msg, 1, 0),
output: jspb.Message.getFieldWithDefault(msg, 2, 0),
interval: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.rv.data.Action.CommunicationType.GlobalCacheCommand}
 */
proto.rv.data.Action.CommunicationType.GlobalCacheCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.CommunicationType.GlobalCacheCommand;
  return proto.rv.data.Action.CommunicationType.GlobalCacheCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.CommunicationType.GlobalCacheCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.CommunicationType.GlobalCacheCommand}
 */
proto.rv.data.Action.CommunicationType.GlobalCacheCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Action.CommunicationType.GlobalCacheCommand.CommandAction} */ (reader.readEnum());
      msg.setCommandAction(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOutput(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setInterval(value);
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
proto.rv.data.Action.CommunicationType.GlobalCacheCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.CommunicationType.GlobalCacheCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.CommunicationType.GlobalCacheCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.CommunicationType.GlobalCacheCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommandAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getOutput();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getInterval();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Action.CommunicationType.GlobalCacheCommand.CommandAction = {
  COMMAND_ACTION_ON: 0,
  COMMAND_ACTION_OFF: 1,
  COMMAND_ACTION_ON_OFF_WITH_INTERVAL: 2,
  COMMAND_ACTION_OFF_ON_WITH_INTERVAL: 3
};

/**
 * optional CommandAction command_action = 1;
 * @return {!proto.rv.data.Action.CommunicationType.GlobalCacheCommand.CommandAction}
 */
proto.rv.data.Action.CommunicationType.GlobalCacheCommand.prototype.getCommandAction = function() {
  return /** @type {!proto.rv.data.Action.CommunicationType.GlobalCacheCommand.CommandAction} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Action.CommunicationType.GlobalCacheCommand.CommandAction} value
 * @return {!proto.rv.data.Action.CommunicationType.GlobalCacheCommand} returns this
 */
proto.rv.data.Action.CommunicationType.GlobalCacheCommand.prototype.setCommandAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 output = 2;
 * @return {number}
 */
proto.rv.data.Action.CommunicationType.GlobalCacheCommand.prototype.getOutput = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Action.CommunicationType.GlobalCacheCommand} returns this
 */
proto.rv.data.Action.CommunicationType.GlobalCacheCommand.prototype.setOutput = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 interval = 3;
 * @return {number}
 */
proto.rv.data.Action.CommunicationType.GlobalCacheCommand.prototype.getInterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Action.CommunicationType.GlobalCacheCommand} returns this
 */
proto.rv.data.Action.CommunicationType.GlobalCacheCommand.prototype.setInterval = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.rv.data.Action.CommunicationType.GVG100Command.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.CommunicationType.GVG100Command.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.CommunicationType.GVG100Command} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.CommunicationType.GVG100Command.toObject = function(includeInstance, msg) {
  var f, obj = {
commandAction: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.data.Action.CommunicationType.GVG100Command}
 */
proto.rv.data.Action.CommunicationType.GVG100Command.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.CommunicationType.GVG100Command;
  return proto.rv.data.Action.CommunicationType.GVG100Command.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.CommunicationType.GVG100Command} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.CommunicationType.GVG100Command}
 */
proto.rv.data.Action.CommunicationType.GVG100Command.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Action.CommunicationType.GVG100Command.CommandAction} */ (reader.readEnum());
      msg.setCommandAction(value);
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
proto.rv.data.Action.CommunicationType.GVG100Command.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.CommunicationType.GVG100Command.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.CommunicationType.GVG100Command} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.CommunicationType.GVG100Command.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommandAction();
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
proto.rv.data.Action.CommunicationType.GVG100Command.CommandAction = {
  COMMAND_ACTION_FADE_TO_BLACK: 0,
  COMMAND_ACTION_DSK_TOGGLE: 1
};

/**
 * optional CommandAction command_action = 1;
 * @return {!proto.rv.data.Action.CommunicationType.GVG100Command.CommandAction}
 */
proto.rv.data.Action.CommunicationType.GVG100Command.prototype.getCommandAction = function() {
  return /** @type {!proto.rv.data.Action.CommunicationType.GVG100Command.CommandAction} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Action.CommunicationType.GVG100Command.CommandAction} value
 * @return {!proto.rv.data.Action.CommunicationType.GVG100Command} returns this
 */
proto.rv.data.Action.CommunicationType.GVG100Command.prototype.setCommandAction = function(value) {
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
proto.rv.data.Action.CommunicationType.SonyBVSCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.CommunicationType.SonyBVSCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.CommunicationType.SonyBVSCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.CommunicationType.SonyBVSCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
commandAction: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.data.Action.CommunicationType.SonyBVSCommand}
 */
proto.rv.data.Action.CommunicationType.SonyBVSCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.CommunicationType.SonyBVSCommand;
  return proto.rv.data.Action.CommunicationType.SonyBVSCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.CommunicationType.SonyBVSCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.CommunicationType.SonyBVSCommand}
 */
proto.rv.data.Action.CommunicationType.SonyBVSCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Action.CommunicationType.SonyBVSCommand.CommandAction} */ (reader.readEnum());
      msg.setCommandAction(value);
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
proto.rv.data.Action.CommunicationType.SonyBVSCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.CommunicationType.SonyBVSCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.CommunicationType.SonyBVSCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.CommunicationType.SonyBVSCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommandAction();
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
proto.rv.data.Action.CommunicationType.SonyBVSCommand.CommandAction = {
  COMMAND_ACTION_FADE_TO_BLACK: 0,
  COMMAND_ACTION_KEY_ON: 1,
  COMMAND_ACTION_KEY_OFF: 2,
  COMMAND_ACTION_DSK_ON: 3,
  COMMAND_ACTION_DSK_OFF: 4
};

/**
 * optional CommandAction command_action = 1;
 * @return {!proto.rv.data.Action.CommunicationType.SonyBVSCommand.CommandAction}
 */
proto.rv.data.Action.CommunicationType.SonyBVSCommand.prototype.getCommandAction = function() {
  return /** @type {!proto.rv.data.Action.CommunicationType.SonyBVSCommand.CommandAction} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Action.CommunicationType.SonyBVSCommand.CommandAction} value
 * @return {!proto.rv.data.Action.CommunicationType.SonyBVSCommand} returns this
 */
proto.rv.data.Action.CommunicationType.SonyBVSCommand.prototype.setCommandAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional CollectionElementType device_identification = 1;
 * @return {?proto.rv.data.CollectionElementType}
 */
proto.rv.data.Action.CommunicationType.prototype.getDeviceIdentification = function() {
  return /** @type{?proto.rv.data.CollectionElementType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.CollectionElementType, 1));
};


/**
 * @param {?proto.rv.data.CollectionElementType|undefined} value
 * @return {!proto.rv.data.Action.CommunicationType} returns this
*/
proto.rv.data.Action.CommunicationType.prototype.setDeviceIdentification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.CommunicationType} returns this
 */
proto.rv.data.Action.CommunicationType.prototype.clearDeviceIdentification = function() {
  return this.setDeviceIdentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.CommunicationType.prototype.hasDeviceIdentification = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string format = 2;
 * @return {string}
 */
proto.rv.data.Action.CommunicationType.prototype.getFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Action.CommunicationType} returns this
 */
proto.rv.data.Action.CommunicationType.prototype.setFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.rv.data.Action.CommunicationType.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Action.CommunicationType} returns this
 */
proto.rv.data.Action.CommunicationType.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Command commands = 4;
 * @return {!Array<!proto.rv.data.Action.CommunicationType.Command>}
 */
proto.rv.data.Action.CommunicationType.prototype.getCommandsList = function() {
  return /** @type{!Array<!proto.rv.data.Action.CommunicationType.Command>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.Action.CommunicationType.Command, 4));
};


/**
 * @param {!Array<!proto.rv.data.Action.CommunicationType.Command>} value
 * @return {!proto.rv.data.Action.CommunicationType} returns this
*/
proto.rv.data.Action.CommunicationType.prototype.setCommandsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.rv.data.Action.CommunicationType.Command=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.Action.CommunicationType.Command}
 */
proto.rv.data.Action.CommunicationType.prototype.addCommands = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.rv.data.Action.CommunicationType.Command, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Action.CommunicationType} returns this
 */
proto.rv.data.Action.CommunicationType.prototype.clearCommandsList = function() {
  return this.setCommandsList([]);
};


/**
 * optional MIDICommand midi_command = 5;
 * @return {?proto.rv.data.Action.CommunicationType.MIDICommand}
 */
proto.rv.data.Action.CommunicationType.prototype.getMidiCommand = function() {
  return /** @type{?proto.rv.data.Action.CommunicationType.MIDICommand} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.CommunicationType.MIDICommand, 5));
};


/**
 * @param {?proto.rv.data.Action.CommunicationType.MIDICommand|undefined} value
 * @return {!proto.rv.data.Action.CommunicationType} returns this
*/
proto.rv.data.Action.CommunicationType.prototype.setMidiCommand = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.rv.data.Action.CommunicationType.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.CommunicationType} returns this
 */
proto.rv.data.Action.CommunicationType.prototype.clearMidiCommand = function() {
  return this.setMidiCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.CommunicationType.prototype.hasMidiCommand = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional GlobalCacheCommand global_cache_command = 6;
 * @return {?proto.rv.data.Action.CommunicationType.GlobalCacheCommand}
 */
proto.rv.data.Action.CommunicationType.prototype.getGlobalCacheCommand = function() {
  return /** @type{?proto.rv.data.Action.CommunicationType.GlobalCacheCommand} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.CommunicationType.GlobalCacheCommand, 6));
};


/**
 * @param {?proto.rv.data.Action.CommunicationType.GlobalCacheCommand|undefined} value
 * @return {!proto.rv.data.Action.CommunicationType} returns this
*/
proto.rv.data.Action.CommunicationType.prototype.setGlobalCacheCommand = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.rv.data.Action.CommunicationType.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.CommunicationType} returns this
 */
proto.rv.data.Action.CommunicationType.prototype.clearGlobalCacheCommand = function() {
  return this.setGlobalCacheCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.CommunicationType.prototype.hasGlobalCacheCommand = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional GVG100Command gvg100_command = 7;
 * @return {?proto.rv.data.Action.CommunicationType.GVG100Command}
 */
proto.rv.data.Action.CommunicationType.prototype.getGvg100Command = function() {
  return /** @type{?proto.rv.data.Action.CommunicationType.GVG100Command} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.CommunicationType.GVG100Command, 7));
};


/**
 * @param {?proto.rv.data.Action.CommunicationType.GVG100Command|undefined} value
 * @return {!proto.rv.data.Action.CommunicationType} returns this
*/
proto.rv.data.Action.CommunicationType.prototype.setGvg100Command = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.rv.data.Action.CommunicationType.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.CommunicationType} returns this
 */
proto.rv.data.Action.CommunicationType.prototype.clearGvg100Command = function() {
  return this.setGvg100Command(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.CommunicationType.prototype.hasGvg100Command = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional SonyBVSCommand sony_BVS_command = 8;
 * @return {?proto.rv.data.Action.CommunicationType.SonyBVSCommand}
 */
proto.rv.data.Action.CommunicationType.prototype.getSonyBvsCommand = function() {
  return /** @type{?proto.rv.data.Action.CommunicationType.SonyBVSCommand} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.CommunicationType.SonyBVSCommand, 8));
};


/**
 * @param {?proto.rv.data.Action.CommunicationType.SonyBVSCommand|undefined} value
 * @return {!proto.rv.data.Action.CommunicationType} returns this
*/
proto.rv.data.Action.CommunicationType.prototype.setSonyBvsCommand = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.rv.data.Action.CommunicationType.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.CommunicationType} returns this
 */
proto.rv.data.Action.CommunicationType.prototype.clearSonyBvsCommand = function() {
  return this.setSonyBvsCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.CommunicationType.prototype.hasSonyBvsCommand = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.rv.data.Action.MultiScreenType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.MultiScreenType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.MultiScreenType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.MultiScreenType.toObject = function(includeInstance, msg) {
  var f, obj = {
identification: (f = msg.getIdentification()) && proto.rv.data.CollectionElementType.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Action.MultiScreenType}
 */
proto.rv.data.Action.MultiScreenType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.MultiScreenType;
  return proto.rv.data.Action.MultiScreenType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.MultiScreenType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.MultiScreenType}
 */
proto.rv.data.Action.MultiScreenType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto.rv.data.CollectionElementType;
      reader.readMessage(value,proto.rv.data.CollectionElementType.deserializeBinaryFromReader);
      msg.setIdentification(value);
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
proto.rv.data.Action.MultiScreenType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.MultiScreenType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.MultiScreenType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.MultiScreenType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentification();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.CollectionElementType.serializeBinaryToWriter
    );
  }
};


/**
 * optional CollectionElementType identification = 3;
 * @return {?proto.rv.data.CollectionElementType}
 */
proto.rv.data.Action.MultiScreenType.prototype.getIdentification = function() {
  return /** @type{?proto.rv.data.CollectionElementType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.CollectionElementType, 3));
};


/**
 * @param {?proto.rv.data.CollectionElementType|undefined} value
 * @return {!proto.rv.data.Action.MultiScreenType} returns this
*/
proto.rv.data.Action.MultiScreenType.prototype.setIdentification = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.MultiScreenType} returns this
 */
proto.rv.data.Action.MultiScreenType.prototype.clearIdentification = function() {
  return this.setIdentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.MultiScreenType.prototype.hasIdentification = function() {
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
proto.rv.data.Action.DocumentType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.DocumentType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.DocumentType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.DocumentType.toObject = function(includeInstance, msg) {
  var f, obj = {
identification: (f = msg.getIdentification()) && proto.rv.data.CollectionElementType.toObject(includeInstance, f),
selectedArrangement: (f = msg.getSelectedArrangement()) && proto.rv.data.UUID.toObject(includeInstance, f),
contentDestination: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.rv.data.Action.DocumentType}
 */
proto.rv.data.Action.DocumentType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.DocumentType;
  return proto.rv.data.Action.DocumentType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.DocumentType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.DocumentType}
 */
proto.rv.data.Action.DocumentType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.CollectionElementType;
      reader.readMessage(value,proto.rv.data.CollectionElementType.deserializeBinaryFromReader);
      msg.setIdentification(value);
      break;
    case 2:
      var value = new proto.rv.data.UUID;
      reader.readMessage(value,proto.rv.data.UUID.deserializeBinaryFromReader);
      msg.setSelectedArrangement(value);
      break;
    case 3:
      var value = /** @type {!proto.rv.data.Action.ContentDestination} */ (reader.readEnum());
      msg.setContentDestination(value);
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
proto.rv.data.Action.DocumentType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.DocumentType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.DocumentType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.DocumentType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.CollectionElementType.serializeBinaryToWriter
    );
  }
  f = message.getSelectedArrangement();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.UUID.serializeBinaryToWriter
    );
  }
  f = message.getContentDestination();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional CollectionElementType identification = 1;
 * @return {?proto.rv.data.CollectionElementType}
 */
proto.rv.data.Action.DocumentType.prototype.getIdentification = function() {
  return /** @type{?proto.rv.data.CollectionElementType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.CollectionElementType, 1));
};


/**
 * @param {?proto.rv.data.CollectionElementType|undefined} value
 * @return {!proto.rv.data.Action.DocumentType} returns this
*/
proto.rv.data.Action.DocumentType.prototype.setIdentification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.DocumentType} returns this
 */
proto.rv.data.Action.DocumentType.prototype.clearIdentification = function() {
  return this.setIdentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.DocumentType.prototype.hasIdentification = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UUID selected_arrangement = 2;
 * @return {?proto.rv.data.UUID}
 */
proto.rv.data.Action.DocumentType.prototype.getSelectedArrangement = function() {
  return /** @type{?proto.rv.data.UUID} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.UUID, 2));
};


/**
 * @param {?proto.rv.data.UUID|undefined} value
 * @return {!proto.rv.data.Action.DocumentType} returns this
*/
proto.rv.data.Action.DocumentType.prototype.setSelectedArrangement = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.DocumentType} returns this
 */
proto.rv.data.Action.DocumentType.prototype.clearSelectedArrangement = function() {
  return this.setSelectedArrangement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.DocumentType.prototype.hasSelectedArrangement = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ContentDestination content_destination = 3;
 * @return {!proto.rv.data.Action.ContentDestination}
 */
proto.rv.data.Action.DocumentType.prototype.getContentDestination = function() {
  return /** @type {!proto.rv.data.Action.ContentDestination} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.rv.data.Action.ContentDestination} value
 * @return {!proto.rv.data.Action.DocumentType} returns this
 */
proto.rv.data.Action.DocumentType.prototype.setContentDestination = function(value) {
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
proto.rv.data.Action.ExternalPresentationType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.ExternalPresentationType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.ExternalPresentationType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.ExternalPresentationType.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.data.Action.ExternalPresentationType}
 */
proto.rv.data.Action.ExternalPresentationType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.ExternalPresentationType;
  return proto.rv.data.Action.ExternalPresentationType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.ExternalPresentationType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.ExternalPresentationType}
 */
proto.rv.data.Action.ExternalPresentationType.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.data.Action.ExternalPresentationType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.ExternalPresentationType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.ExternalPresentationType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.ExternalPresentationType.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.data.Action.ExternalPresentationType.prototype.getUrl = function() {
  return /** @type{?proto.rv.data.URL} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.URL, 1));
};


/**
 * @param {?proto.rv.data.URL|undefined} value
 * @return {!proto.rv.data.Action.ExternalPresentationType} returns this
*/
proto.rv.data.Action.ExternalPresentationType.prototype.setUrl = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.ExternalPresentationType} returns this
 */
proto.rv.data.Action.ExternalPresentationType.prototype.clearUrl = function() {
  return this.setUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.ExternalPresentationType.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.rv.data.Action.AudienceLookType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.AudienceLookType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.AudienceLookType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.AudienceLookType.toObject = function(includeInstance, msg) {
  var f, obj = {
identification: (f = msg.getIdentification()) && proto.rv.data.CollectionElementType.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Action.AudienceLookType}
 */
proto.rv.data.Action.AudienceLookType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.AudienceLookType;
  return proto.rv.data.Action.AudienceLookType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.AudienceLookType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.AudienceLookType}
 */
proto.rv.data.Action.AudienceLookType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.CollectionElementType;
      reader.readMessage(value,proto.rv.data.CollectionElementType.deserializeBinaryFromReader);
      msg.setIdentification(value);
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
proto.rv.data.Action.AudienceLookType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.AudienceLookType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.AudienceLookType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.AudienceLookType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.CollectionElementType.serializeBinaryToWriter
    );
  }
};


/**
 * optional CollectionElementType identification = 1;
 * @return {?proto.rv.data.CollectionElementType}
 */
proto.rv.data.Action.AudienceLookType.prototype.getIdentification = function() {
  return /** @type{?proto.rv.data.CollectionElementType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.CollectionElementType, 1));
};


/**
 * @param {?proto.rv.data.CollectionElementType|undefined} value
 * @return {!proto.rv.data.Action.AudienceLookType} returns this
*/
proto.rv.data.Action.AudienceLookType.prototype.setIdentification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.AudienceLookType} returns this
 */
proto.rv.data.Action.AudienceLookType.prototype.clearIdentification = function() {
  return this.setIdentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.AudienceLookType.prototype.hasIdentification = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.rv.data.Action.AudioInputType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.AudioInputType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.AudioInputType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.AudioInputType.toObject = function(includeInstance, msg) {
  var f, obj = {
index: jspb.Message.getFieldWithDefault(msg, 1, 0),
overrideMode: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
behaviorMode: (f = msg.getBehaviorMode()) && proto.rv.data.AudioInput.BehaviorMode.toObject(includeInstance, f),
overrideVolume: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
volume: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
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
 * @return {!proto.rv.data.Action.AudioInputType}
 */
proto.rv.data.Action.AudioInputType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.AudioInputType;
  return proto.rv.data.Action.AudioInputType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.AudioInputType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.AudioInputType}
 */
proto.rv.data.Action.AudioInputType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOverrideMode(value);
      break;
    case 3:
      var value = new proto.rv.data.AudioInput.BehaviorMode;
      reader.readMessage(value,proto.rv.data.AudioInput.BehaviorMode.deserializeBinaryFromReader);
      msg.setBehaviorMode(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOverrideVolume(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolume(value);
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
proto.rv.data.Action.AudioInputType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.AudioInputType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.AudioInputType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.AudioInputType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getOverrideMode();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getBehaviorMode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.AudioInput.BehaviorMode.serializeBinaryToWriter
    );
  }
  f = message.getOverrideVolume();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional int32 index = 1;
 * @return {number}
 */
proto.rv.data.Action.AudioInputType.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Action.AudioInputType} returns this
 */
proto.rv.data.Action.AudioInputType.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool override_mode = 2;
 * @return {boolean}
 */
proto.rv.data.Action.AudioInputType.prototype.getOverrideMode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Action.AudioInputType} returns this
 */
proto.rv.data.Action.AudioInputType.prototype.setOverrideMode = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional AudioInput.BehaviorMode behavior_mode = 3;
 * @return {?proto.rv.data.AudioInput.BehaviorMode}
 */
proto.rv.data.Action.AudioInputType.prototype.getBehaviorMode = function() {
  return /** @type{?proto.rv.data.AudioInput.BehaviorMode} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.AudioInput.BehaviorMode, 3));
};


/**
 * @param {?proto.rv.data.AudioInput.BehaviorMode|undefined} value
 * @return {!proto.rv.data.Action.AudioInputType} returns this
*/
proto.rv.data.Action.AudioInputType.prototype.setBehaviorMode = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.AudioInputType} returns this
 */
proto.rv.data.Action.AudioInputType.prototype.clearBehaviorMode = function() {
  return this.setBehaviorMode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.AudioInputType.prototype.hasBehaviorMode = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool override_volume = 4;
 * @return {boolean}
 */
proto.rv.data.Action.AudioInputType.prototype.getOverrideVolume = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Action.AudioInputType} returns this
 */
proto.rv.data.Action.AudioInputType.prototype.setOverrideVolume = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional double volume = 5;
 * @return {number}
 */
proto.rv.data.Action.AudioInputType.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Action.AudioInputType} returns this
 */
proto.rv.data.Action.AudioInputType.prototype.setVolume = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
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
proto.rv.data.Action.MacroType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.MacroType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.MacroType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.MacroType.toObject = function(includeInstance, msg) {
  var f, obj = {
identification: (f = msg.getIdentification()) && proto.rv.data.CollectionElementType.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Action.MacroType}
 */
proto.rv.data.Action.MacroType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.MacroType;
  return proto.rv.data.Action.MacroType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.MacroType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.MacroType}
 */
proto.rv.data.Action.MacroType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.CollectionElementType;
      reader.readMessage(value,proto.rv.data.CollectionElementType.deserializeBinaryFromReader);
      msg.setIdentification(value);
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
proto.rv.data.Action.MacroType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.MacroType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.MacroType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.MacroType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.CollectionElementType.serializeBinaryToWriter
    );
  }
};


/**
 * optional CollectionElementType identification = 1;
 * @return {?proto.rv.data.CollectionElementType}
 */
proto.rv.data.Action.MacroType.prototype.getIdentification = function() {
  return /** @type{?proto.rv.data.CollectionElementType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.CollectionElementType, 1));
};


/**
 * @param {?proto.rv.data.CollectionElementType|undefined} value
 * @return {!proto.rv.data.Action.MacroType} returns this
*/
proto.rv.data.Action.MacroType.prototype.setIdentification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.MacroType} returns this
 */
proto.rv.data.Action.MacroType.prototype.clearIdentification = function() {
  return this.setIdentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.MacroType.prototype.hasIdentification = function() {
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
proto.rv.data.Action.CaptureType.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.rv.data.Action.CaptureType.CaptureactionCase = {
  CAPTUREACTION_NOT_SET: 0,
  START: 1,
  STOP: 2
};

/**
 * @return {proto.rv.data.Action.CaptureType.CaptureactionCase}
 */
proto.rv.data.Action.CaptureType.prototype.getCaptureactionCase = function() {
  return /** @type {proto.rv.data.Action.CaptureType.CaptureactionCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.Action.CaptureType.oneofGroups_[0]));
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
proto.rv.data.Action.CaptureType.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.CaptureType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.CaptureType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.CaptureType.toObject = function(includeInstance, msg) {
  var f, obj = {
start: (f = msg.getStart()) && proto.rv.data.Action.CaptureType.CaptureStart.toObject(includeInstance, f),
stop: (f = msg.getStop()) && proto.rv.data.Action.CaptureType.CaptureStop.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Action.CaptureType}
 */
proto.rv.data.Action.CaptureType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.CaptureType;
  return proto.rv.data.Action.CaptureType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.CaptureType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.CaptureType}
 */
proto.rv.data.Action.CaptureType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Action.CaptureType.CaptureStart;
      reader.readMessage(value,proto.rv.data.Action.CaptureType.CaptureStart.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = new proto.rv.data.Action.CaptureType.CaptureStop;
      reader.readMessage(value,proto.rv.data.Action.CaptureType.CaptureStop.deserializeBinaryFromReader);
      msg.setStop(value);
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
proto.rv.data.Action.CaptureType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.CaptureType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.CaptureType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.CaptureType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Action.CaptureType.CaptureStart.serializeBinaryToWriter
    );
  }
  f = message.getStop();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.Action.CaptureType.CaptureStop.serializeBinaryToWriter
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
proto.rv.data.Action.CaptureType.CaptureStart.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.CaptureType.CaptureStart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.CaptureType.CaptureStart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.CaptureType.CaptureStart.toObject = function(includeInstance, msg) {
  var f, obj = {
presetIdentification: (f = msg.getPresetIdentification()) && proto.rv.data.CollectionElementType.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Action.CaptureType.CaptureStart}
 */
proto.rv.data.Action.CaptureType.CaptureStart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.CaptureType.CaptureStart;
  return proto.rv.data.Action.CaptureType.CaptureStart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.CaptureType.CaptureStart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.CaptureType.CaptureStart}
 */
proto.rv.data.Action.CaptureType.CaptureStart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.CollectionElementType;
      reader.readMessage(value,proto.rv.data.CollectionElementType.deserializeBinaryFromReader);
      msg.setPresetIdentification(value);
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
proto.rv.data.Action.CaptureType.CaptureStart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.CaptureType.CaptureStart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.CaptureType.CaptureStart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.CaptureType.CaptureStart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPresetIdentification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.CollectionElementType.serializeBinaryToWriter
    );
  }
};


/**
 * optional CollectionElementType preset_identification = 1;
 * @return {?proto.rv.data.CollectionElementType}
 */
proto.rv.data.Action.CaptureType.CaptureStart.prototype.getPresetIdentification = function() {
  return /** @type{?proto.rv.data.CollectionElementType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.CollectionElementType, 1));
};


/**
 * @param {?proto.rv.data.CollectionElementType|undefined} value
 * @return {!proto.rv.data.Action.CaptureType.CaptureStart} returns this
*/
proto.rv.data.Action.CaptureType.CaptureStart.prototype.setPresetIdentification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.CaptureType.CaptureStart} returns this
 */
proto.rv.data.Action.CaptureType.CaptureStart.prototype.clearPresetIdentification = function() {
  return this.setPresetIdentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.CaptureType.CaptureStart.prototype.hasPresetIdentification = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.rv.data.Action.CaptureType.CaptureStop.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Action.CaptureType.CaptureStop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Action.CaptureType.CaptureStop} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.CaptureType.CaptureStop.toObject = function(includeInstance, msg) {
  var f, obj = {
showsAlertBeforeStopping: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.rv.data.Action.CaptureType.CaptureStop}
 */
proto.rv.data.Action.CaptureType.CaptureStop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Action.CaptureType.CaptureStop;
  return proto.rv.data.Action.CaptureType.CaptureStop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Action.CaptureType.CaptureStop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Action.CaptureType.CaptureStop}
 */
proto.rv.data.Action.CaptureType.CaptureStop.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShowsAlertBeforeStopping(value);
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
proto.rv.data.Action.CaptureType.CaptureStop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Action.CaptureType.CaptureStop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Action.CaptureType.CaptureStop} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Action.CaptureType.CaptureStop.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShowsAlertBeforeStopping();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool shows_alert_before_stopping = 1;
 * @return {boolean}
 */
proto.rv.data.Action.CaptureType.CaptureStop.prototype.getShowsAlertBeforeStopping = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Action.CaptureType.CaptureStop} returns this
 */
proto.rv.data.Action.CaptureType.CaptureStop.prototype.setShowsAlertBeforeStopping = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional CaptureStart start = 1;
 * @return {?proto.rv.data.Action.CaptureType.CaptureStart}
 */
proto.rv.data.Action.CaptureType.prototype.getStart = function() {
  return /** @type{?proto.rv.data.Action.CaptureType.CaptureStart} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.CaptureType.CaptureStart, 1));
};


/**
 * @param {?proto.rv.data.Action.CaptureType.CaptureStart|undefined} value
 * @return {!proto.rv.data.Action.CaptureType} returns this
*/
proto.rv.data.Action.CaptureType.prototype.setStart = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.data.Action.CaptureType.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.CaptureType} returns this
 */
proto.rv.data.Action.CaptureType.prototype.clearStart = function() {
  return this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.CaptureType.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CaptureStop stop = 2;
 * @return {?proto.rv.data.Action.CaptureType.CaptureStop}
 */
proto.rv.data.Action.CaptureType.prototype.getStop = function() {
  return /** @type{?proto.rv.data.Action.CaptureType.CaptureStop} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.CaptureType.CaptureStop, 2));
};


/**
 * @param {?proto.rv.data.Action.CaptureType.CaptureStop|undefined} value
 * @return {!proto.rv.data.Action.CaptureType} returns this
*/
proto.rv.data.Action.CaptureType.prototype.setStop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.data.Action.CaptureType.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action.CaptureType} returns this
 */
proto.rv.data.Action.CaptureType.prototype.clearStop = function() {
  return this.setStop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.CaptureType.prototype.hasStop = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional UUID uuid = 1;
 * @return {?proto.rv.data.UUID}
 */
proto.rv.data.Action.prototype.getUuid = function() {
  return /** @type{?proto.rv.data.UUID} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.UUID, 1));
};


/**
 * @param {?proto.rv.data.UUID|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setUuid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearUuid = function() {
  return this.setUuid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasUuid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.rv.data.Action.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Label label = 3;
 * @return {?proto.rv.data.Action.Label}
 */
proto.rv.data.Action.prototype.getLabel = function() {
  return /** @type{?proto.rv.data.Action.Label} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.Label, 3));
};


/**
 * @param {?proto.rv.data.Action.Label|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setLabel = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearLabel = function() {
  return this.setLabel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasLabel = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double delay_time = 4;
 * @return {number}
 */
proto.rv.data.Action.prototype.getDelayTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.setDelayTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional OldType old_type = 5;
 * @return {?proto.rv.data.Action.OldType}
 */
proto.rv.data.Action.prototype.getOldType = function() {
  return /** @type{?proto.rv.data.Action.OldType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.OldType, 5));
};


/**
 * @param {?proto.rv.data.Action.OldType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setOldType = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearOldType = function() {
  return this.setOldType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasOldType = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool isEnabled = 6;
 * @return {boolean}
 */
proto.rv.data.Action.prototype.getIsenabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.setIsenabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional LayerIdentification layer_identification = 7;
 * @return {?proto.rv.data.Action.LayerIdentification}
 */
proto.rv.data.Action.prototype.getLayerIdentification = function() {
  return /** @type{?proto.rv.data.Action.LayerIdentification} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.LayerIdentification, 7));
};


/**
 * @param {?proto.rv.data.Action.LayerIdentification|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setLayerIdentification = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearLayerIdentification = function() {
  return this.setLayerIdentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasLayerIdentification = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double duration = 8;
 * @return {number}
 */
proto.rv.data.Action.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.setDuration = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional ActionType type = 9;
 * @return {!proto.rv.data.Action.ActionType}
 */
proto.rv.data.Action.prototype.getType = function() {
  return /** @type {!proto.rv.data.Action.ActionType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.rv.data.Action.ActionType} value
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional CollectionElementType collection_element = 16;
 * @return {?proto.rv.data.CollectionElementType}
 */
proto.rv.data.Action.prototype.getCollectionElement = function() {
  return /** @type{?proto.rv.data.CollectionElementType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.CollectionElementType, 16));
};


/**
 * @param {?proto.rv.data.CollectionElementType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setCollectionElement = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearCollectionElement = function() {
  return this.setCollectionElement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasCollectionElement = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional PlaylistItemType playlist_item = 17;
 * @return {?proto.rv.data.Action.PlaylistItemType}
 */
proto.rv.data.Action.prototype.getPlaylistItem = function() {
  return /** @type{?proto.rv.data.Action.PlaylistItemType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.PlaylistItemType, 17));
};


/**
 * @param {?proto.rv.data.Action.PlaylistItemType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setPlaylistItem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearPlaylistItem = function() {
  return this.setPlaylistItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasPlaylistItem = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional BlendModeType blend_mode = 18;
 * @return {?proto.rv.data.Action.BlendModeType}
 */
proto.rv.data.Action.prototype.getBlendMode = function() {
  return /** @type{?proto.rv.data.Action.BlendModeType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.BlendModeType, 18));
};


/**
 * @param {?proto.rv.data.Action.BlendModeType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setBlendMode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearBlendMode = function() {
  return this.setBlendMode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasBlendMode = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional TransitionType transition = 19;
 * @return {?proto.rv.data.Action.TransitionType}
 */
proto.rv.data.Action.prototype.getTransition = function() {
  return /** @type{?proto.rv.data.Action.TransitionType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.TransitionType, 19));
};


/**
 * @param {?proto.rv.data.Action.TransitionType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setTransition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearTransition = function() {
  return this.setTransition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasTransition = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional MediaType media = 20;
 * @return {?proto.rv.data.Action.MediaType}
 */
proto.rv.data.Action.prototype.getMedia = function() {
  return /** @type{?proto.rv.data.Action.MediaType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.MediaType, 20));
};


/**
 * @param {?proto.rv.data.Action.MediaType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setMedia = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearMedia = function() {
  return this.setMedia(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasMedia = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional DoubleType double_item = 21;
 * @return {?proto.rv.data.Action.DoubleType}
 */
proto.rv.data.Action.prototype.getDoubleItem = function() {
  return /** @type{?proto.rv.data.Action.DoubleType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.DoubleType, 21));
};


/**
 * @param {?proto.rv.data.Action.DoubleType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setDoubleItem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearDoubleItem = function() {
  return this.setDoubleItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasDoubleItem = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional EffectsType effects = 22;
 * @return {?proto.rv.data.Action.EffectsType}
 */
proto.rv.data.Action.prototype.getEffects = function() {
  return /** @type{?proto.rv.data.Action.EffectsType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.EffectsType, 22));
};


/**
 * @param {?proto.rv.data.Action.EffectsType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setEffects = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearEffects = function() {
  return this.setEffects(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasEffects = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional SlideType slide = 23;
 * @return {?proto.rv.data.Action.SlideType}
 */
proto.rv.data.Action.prototype.getSlide = function() {
  return /** @type{?proto.rv.data.Action.SlideType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.SlideType, 23));
};


/**
 * @param {?proto.rv.data.Action.SlideType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setSlide = function(value) {
  return jspb.Message.setOneofWrapperField(this, 23, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearSlide = function() {
  return this.setSlide(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasSlide = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional BackgroundType background = 24;
 * @return {?proto.rv.data.Action.BackgroundType}
 */
proto.rv.data.Action.prototype.getBackground = function() {
  return /** @type{?proto.rv.data.Action.BackgroundType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.BackgroundType, 24));
};


/**
 * @param {?proto.rv.data.Action.BackgroundType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setBackground = function(value) {
  return jspb.Message.setOneofWrapperField(this, 24, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearBackground = function() {
  return this.setBackground(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasBackground = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional TimerType timer = 25;
 * @return {?proto.rv.data.Action.TimerType}
 */
proto.rv.data.Action.prototype.getTimer = function() {
  return /** @type{?proto.rv.data.Action.TimerType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.TimerType, 25));
};


/**
 * @param {?proto.rv.data.Action.TimerType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setTimer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 25, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearTimer = function() {
  return this.setTimer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasTimer = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional ClearType clear = 26;
 * @return {?proto.rv.data.Action.ClearType}
 */
proto.rv.data.Action.prototype.getClear = function() {
  return /** @type{?proto.rv.data.Action.ClearType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.ClearType, 26));
};


/**
 * @param {?proto.rv.data.Action.ClearType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setClear = function(value) {
  return jspb.Message.setOneofWrapperField(this, 26, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearClear = function() {
  return this.setClear(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasClear = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional StageLayoutType stage = 27;
 * @return {?proto.rv.data.Action.StageLayoutType}
 */
proto.rv.data.Action.prototype.getStage = function() {
  return /** @type{?proto.rv.data.Action.StageLayoutType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.StageLayoutType, 27));
};


/**
 * @param {?proto.rv.data.Action.StageLayoutType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setStage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 27, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearStage = function() {
  return this.setStage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasStage = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional PropType prop = 28;
 * @return {?proto.rv.data.Action.PropType}
 */
proto.rv.data.Action.prototype.getProp = function() {
  return /** @type{?proto.rv.data.Action.PropType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.PropType, 28));
};


/**
 * @param {?proto.rv.data.Action.PropType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setProp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 28, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearProp = function() {
  return this.setProp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasProp = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional MaskType mask = 29;
 * @return {?proto.rv.data.Action.MaskType}
 */
proto.rv.data.Action.prototype.getMask = function() {
  return /** @type{?proto.rv.data.Action.MaskType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.MaskType, 29));
};


/**
 * @param {?proto.rv.data.Action.MaskType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setMask = function(value) {
  return jspb.Message.setOneofWrapperField(this, 29, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasMask = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional MessageType message = 30;
 * @return {?proto.rv.data.Action.MessageType}
 */
proto.rv.data.Action.prototype.getMessage = function() {
  return /** @type{?proto.rv.data.Action.MessageType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.MessageType, 30));
};


/**
 * @param {?proto.rv.data.Action.MessageType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 30, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional CommunicationType communication = 32;
 * @return {?proto.rv.data.Action.CommunicationType}
 */
proto.rv.data.Action.prototype.getCommunication = function() {
  return /** @type{?proto.rv.data.Action.CommunicationType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.CommunicationType, 32));
};


/**
 * @param {?proto.rv.data.Action.CommunicationType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setCommunication = function(value) {
  return jspb.Message.setOneofWrapperField(this, 32, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearCommunication = function() {
  return this.setCommunication(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasCommunication = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional MultiScreenType multi_screen = 33;
 * @return {?proto.rv.data.Action.MultiScreenType}
 */
proto.rv.data.Action.prototype.getMultiScreen = function() {
  return /** @type{?proto.rv.data.Action.MultiScreenType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.MultiScreenType, 33));
};


/**
 * @param {?proto.rv.data.Action.MultiScreenType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setMultiScreen = function(value) {
  return jspb.Message.setOneofWrapperField(this, 33, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearMultiScreen = function() {
  return this.setMultiScreen(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasMultiScreen = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional DocumentType presentation_document = 34;
 * @return {?proto.rv.data.Action.DocumentType}
 */
proto.rv.data.Action.prototype.getPresentationDocument = function() {
  return /** @type{?proto.rv.data.Action.DocumentType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.DocumentType, 34));
};


/**
 * @param {?proto.rv.data.Action.DocumentType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setPresentationDocument = function(value) {
  return jspb.Message.setOneofWrapperField(this, 34, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearPresentationDocument = function() {
  return this.setPresentationDocument(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasPresentationDocument = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional ExternalPresentationType external_presentation = 36;
 * @return {?proto.rv.data.Action.ExternalPresentationType}
 */
proto.rv.data.Action.prototype.getExternalPresentation = function() {
  return /** @type{?proto.rv.data.Action.ExternalPresentationType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.ExternalPresentationType, 36));
};


/**
 * @param {?proto.rv.data.Action.ExternalPresentationType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setExternalPresentation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 36, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearExternalPresentation = function() {
  return this.setExternalPresentation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasExternalPresentation = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional AudienceLookType audience_look = 37;
 * @return {?proto.rv.data.Action.AudienceLookType}
 */
proto.rv.data.Action.prototype.getAudienceLook = function() {
  return /** @type{?proto.rv.data.Action.AudienceLookType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.AudienceLookType, 37));
};


/**
 * @param {?proto.rv.data.Action.AudienceLookType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setAudienceLook = function(value) {
  return jspb.Message.setOneofWrapperField(this, 37, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearAudienceLook = function() {
  return this.setAudienceLook(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasAudienceLook = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional AudioInputType audio_input = 38;
 * @return {?proto.rv.data.Action.AudioInputType}
 */
proto.rv.data.Action.prototype.getAudioInput = function() {
  return /** @type{?proto.rv.data.Action.AudioInputType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.AudioInputType, 38));
};


/**
 * @param {?proto.rv.data.Action.AudioInputType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setAudioInput = function(value) {
  return jspb.Message.setOneofWrapperField(this, 38, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearAudioInput = function() {
  return this.setAudioInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasAudioInput = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * optional SlideDestinationType slide_destination = 39;
 * @return {?proto.rv.data.Action.SlideDestinationType}
 */
proto.rv.data.Action.prototype.getSlideDestination = function() {
  return /** @type{?proto.rv.data.Action.SlideDestinationType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.SlideDestinationType, 39));
};


/**
 * @param {?proto.rv.data.Action.SlideDestinationType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setSlideDestination = function(value) {
  return jspb.Message.setOneofWrapperField(this, 39, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearSlideDestination = function() {
  return this.setSlideDestination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasSlideDestination = function() {
  return jspb.Message.getField(this, 39) != null;
};


/**
 * optional MacroType macro = 40;
 * @return {?proto.rv.data.Action.MacroType}
 */
proto.rv.data.Action.prototype.getMacro = function() {
  return /** @type{?proto.rv.data.Action.MacroType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.MacroType, 40));
};


/**
 * @param {?proto.rv.data.Action.MacroType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setMacro = function(value) {
  return jspb.Message.setOneofWrapperField(this, 40, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearMacro = function() {
  return this.setMacro(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasMacro = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional ClearGroupType clear_group = 41;
 * @return {?proto.rv.data.Action.ClearGroupType}
 */
proto.rv.data.Action.prototype.getClearGroup = function() {
  return /** @type{?proto.rv.data.Action.ClearGroupType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.ClearGroupType, 41));
};


/**
 * @param {?proto.rv.data.Action.ClearGroupType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setClearGroup = function(value) {
  return jspb.Message.setOneofWrapperField(this, 41, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearClearGroup = function() {
  return this.setClearGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasClearGroup = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional TransportControlType transport_control = 42;
 * @return {?proto.rv.data.Action.TransportControlType}
 */
proto.rv.data.Action.prototype.getTransportControl = function() {
  return /** @type{?proto.rv.data.Action.TransportControlType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.TransportControlType, 42));
};


/**
 * @param {?proto.rv.data.Action.TransportControlType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setTransportControl = function(value) {
  return jspb.Message.setOneofWrapperField(this, 42, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearTransportControl = function() {
  return this.setTransportControl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasTransportControl = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * optional CaptureType capture = 43;
 * @return {?proto.rv.data.Action.CaptureType}
 */
proto.rv.data.Action.prototype.getCapture = function() {
  return /** @type{?proto.rv.data.Action.CaptureType} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Action.CaptureType, 43));
};


/**
 * @param {?proto.rv.data.Action.CaptureType|undefined} value
 * @return {!proto.rv.data.Action} returns this
*/
proto.rv.data.Action.prototype.setCapture = function(value) {
  return jspb.Message.setOneofWrapperField(this, 43, proto.rv.data.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Action} returns this
 */
proto.rv.data.Action.prototype.clearCapture = function() {
  return this.setCapture(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Action.prototype.hasCapture = function() {
  return jspb.Message.getField(this, 43) != null;
};


