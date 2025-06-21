// source: graphicsData.proto
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

goog.provide('proto.rv.data.Graphics');
goog.provide('proto.rv.data.Graphics.BackgroundEffect');
goog.provide('proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur');
goog.provide('proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert');
goog.provide('proto.rv.data.Graphics.BackgroundEffect.EffecttypeCase');
goog.provide('proto.rv.data.Graphics.EdgeInsets');
goog.provide('proto.rv.data.Graphics.Element');
goog.provide('proto.rv.data.Graphics.Element.FlipMode');
goog.provide('proto.rv.data.Graphics.Element.MaskCase');
goog.provide('proto.rv.data.Graphics.Feather');
goog.provide('proto.rv.data.Graphics.Feather.Style');
goog.provide('proto.rv.data.Graphics.Fill');
goog.provide('proto.rv.data.Graphics.Fill.FilltypeCase');
goog.provide('proto.rv.data.Graphics.Gradient');
goog.provide('proto.rv.data.Graphics.Gradient.ColorStop');
goog.provide('proto.rv.data.Graphics.Gradient.Type');
goog.provide('proto.rv.data.Graphics.Path');
goog.provide('proto.rv.data.Graphics.Path.BezierPoint');
goog.provide('proto.rv.data.Graphics.Path.Shape');
goog.provide('proto.rv.data.Graphics.Path.Shape.AdditionaldataCase');
goog.provide('proto.rv.data.Graphics.Path.Shape.Arrow');
goog.provide('proto.rv.data.Graphics.Path.Shape.Polygon');
goog.provide('proto.rv.data.Graphics.Path.Shape.RoundedRectangle');
goog.provide('proto.rv.data.Graphics.Path.Shape.Star');
goog.provide('proto.rv.data.Graphics.Path.Shape.Type');
goog.provide('proto.rv.data.Graphics.Point');
goog.provide('proto.rv.data.Graphics.Rect');
goog.provide('proto.rv.data.Graphics.Shadow');
goog.provide('proto.rv.data.Graphics.Shadow.Style');
goog.provide('proto.rv.data.Graphics.Size');
goog.provide('proto.rv.data.Graphics.Stroke');
goog.provide('proto.rv.data.Graphics.Stroke.Style');
goog.provide('proto.rv.data.Graphics.Text');
goog.provide('proto.rv.data.Graphics.Text.Attributes');
goog.provide('proto.rv.data.Graphics.Text.Attributes.Alignment');
goog.provide('proto.rv.data.Graphics.Text.Attributes.Capitalization');
goog.provide('proto.rv.data.Graphics.Text.Attributes.CustomAttribute');
goog.provide('proto.rv.data.Graphics.Text.Attributes.CustomAttribute.AttributeCase');
goog.provide('proto.rv.data.Graphics.Text.Attributes.FillCase');
goog.provide('proto.rv.data.Graphics.Text.Attributes.Paragraph');
goog.provide('proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop');
goog.provide('proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList');
goog.provide('proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.NumberType');
goog.provide('proto.rv.data.Graphics.Text.Attributes.Underline');
goog.provide('proto.rv.data.Graphics.Text.Attributes.Underline.Pattern');
goog.provide('proto.rv.data.Graphics.Text.Attributes.Underline.Style');
goog.provide('proto.rv.data.Graphics.Text.ChordPro');
goog.provide('proto.rv.data.Graphics.Text.ChordPro.Notation');
goog.provide('proto.rv.data.Graphics.Text.CutOutFill');
goog.provide('proto.rv.data.Graphics.Text.GradientFill');
goog.provide('proto.rv.data.Graphics.Text.LineFillMask');
goog.provide('proto.rv.data.Graphics.Text.LineFillMask.LineMaskStyle');
goog.provide('proto.rv.data.Graphics.Text.MediaFill');
goog.provide('proto.rv.data.Graphics.Text.ScaleBehavior');
goog.provide('proto.rv.data.Graphics.Text.Transform');
goog.provide('proto.rv.data.Graphics.Text.VerticalAlignment');
goog.provide('proto.rv.data.Media');
goog.provide('proto.rv.data.Media.Audio');
goog.provide('proto.rv.data.Media.Audio.Channel');
goog.provide('proto.rv.data.Media.Audio.Channel.Output');
goog.provide('proto.rv.data.Media.AudioDevice');
goog.provide('proto.rv.data.Media.AudioProperties');
goog.provide('proto.rv.data.Media.AudioTypeProperties');
goog.provide('proto.rv.data.Media.DrawingProperties');
goog.provide('proto.rv.data.Media.DrawingProperties.NativeRotationType');
goog.provide('proto.rv.data.Media.ImageTypeProperties');
goog.provide('proto.rv.data.Media.LiveVideoProperties');
goog.provide('proto.rv.data.Media.LiveVideoTypeProperties');
goog.provide('proto.rv.data.Media.Metadata');
goog.provide('proto.rv.data.Media.ScaleAlignment');
goog.provide('proto.rv.data.Media.ScaleBehavior');
goog.provide('proto.rv.data.Media.TransportProperties');
goog.provide('proto.rv.data.Media.TransportProperties.PlaybackBehavior');
goog.provide('proto.rv.data.Media.TransportProperties.RetriggerSetting');
goog.provide('proto.rv.data.Media.TypepropertiesCase');
goog.provide('proto.rv.data.Media.VideoDevice');
goog.provide('proto.rv.data.Media.VideoDevice.Type');
goog.provide('proto.rv.data.Media.VideoProperties');
goog.provide('proto.rv.data.Media.VideoProperties.EndBehavior');
goog.provide('proto.rv.data.Media.VideoProperties.FieldType');
goog.provide('proto.rv.data.Media.VideoTypeProperties');
goog.provide('proto.rv.data.Media.WebContentTypeProperties');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.rv.data.Color');
goog.require('proto.rv.data.DigitalAudio.Device.Routing');
goog.require('proto.rv.data.Effect');
goog.require('proto.rv.data.FileProperties');
goog.require('proto.rv.data.Font');
goog.require('proto.rv.data.IntRange');
goog.require('proto.rv.data.URL');
goog.require('proto.rv.data.UUID');

goog.forwardDeclare('proto.rv.data.AlphaType');
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
proto.rv.data.Graphics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Graphics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.displayName = 'proto.rv.data.Graphics';
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
proto.rv.data.Graphics.Element = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.Graphics.Element.oneofGroups_);
};
goog.inherits(proto.rv.data.Graphics.Element, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Element.displayName = 'proto.rv.data.Graphics.Element';
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
proto.rv.data.Graphics.Rect = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Graphics.Rect, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Rect.displayName = 'proto.rv.data.Graphics.Rect';
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
proto.rv.data.Graphics.Point = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Graphics.Point, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Point.displayName = 'proto.rv.data.Graphics.Point';
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
proto.rv.data.Graphics.Size = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Graphics.Size, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Size.displayName = 'proto.rv.data.Graphics.Size';
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
proto.rv.data.Graphics.EdgeInsets = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Graphics.EdgeInsets, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.EdgeInsets.displayName = 'proto.rv.data.Graphics.EdgeInsets';
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
proto.rv.data.Graphics.Path = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.Graphics.Path.repeatedFields_, null);
};
goog.inherits(proto.rv.data.Graphics.Path, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Path.displayName = 'proto.rv.data.Graphics.Path';
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
proto.rv.data.Graphics.Path.BezierPoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Graphics.Path.BezierPoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Path.BezierPoint.displayName = 'proto.rv.data.Graphics.Path.BezierPoint';
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
proto.rv.data.Graphics.Path.Shape = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.Graphics.Path.Shape.oneofGroups_);
};
goog.inherits(proto.rv.data.Graphics.Path.Shape, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Path.Shape.displayName = 'proto.rv.data.Graphics.Path.Shape';
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
proto.rv.data.Graphics.Path.Shape.RoundedRectangle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Graphics.Path.Shape.RoundedRectangle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Path.Shape.RoundedRectangle.displayName = 'proto.rv.data.Graphics.Path.Shape.RoundedRectangle';
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
proto.rv.data.Graphics.Path.Shape.Arrow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Graphics.Path.Shape.Arrow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Path.Shape.Arrow.displayName = 'proto.rv.data.Graphics.Path.Shape.Arrow';
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
proto.rv.data.Graphics.Path.Shape.Polygon = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Graphics.Path.Shape.Polygon, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Path.Shape.Polygon.displayName = 'proto.rv.data.Graphics.Path.Shape.Polygon';
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
proto.rv.data.Graphics.Path.Shape.Star = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Graphics.Path.Shape.Star, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Path.Shape.Star.displayName = 'proto.rv.data.Graphics.Path.Shape.Star';
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
proto.rv.data.Graphics.Fill = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.Graphics.Fill.oneofGroups_);
};
goog.inherits(proto.rv.data.Graphics.Fill, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Fill.displayName = 'proto.rv.data.Graphics.Fill';
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
proto.rv.data.Graphics.BackgroundEffect = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.Graphics.BackgroundEffect.oneofGroups_);
};
goog.inherits(proto.rv.data.Graphics.BackgroundEffect, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.BackgroundEffect.displayName = 'proto.rv.data.Graphics.BackgroundEffect';
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
proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur.displayName = 'proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur';
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
proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert.displayName = 'proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert';
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
proto.rv.data.Graphics.Gradient = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.Graphics.Gradient.repeatedFields_, null);
};
goog.inherits(proto.rv.data.Graphics.Gradient, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Gradient.displayName = 'proto.rv.data.Graphics.Gradient';
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
proto.rv.data.Graphics.Gradient.ColorStop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Graphics.Gradient.ColorStop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Gradient.ColorStop.displayName = 'proto.rv.data.Graphics.Gradient.ColorStop';
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
proto.rv.data.Graphics.Shadow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Graphics.Shadow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Shadow.displayName = 'proto.rv.data.Graphics.Shadow';
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
proto.rv.data.Graphics.Stroke = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.Graphics.Stroke.repeatedFields_, null);
};
goog.inherits(proto.rv.data.Graphics.Stroke, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Stroke.displayName = 'proto.rv.data.Graphics.Stroke';
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
proto.rv.data.Graphics.Feather = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Graphics.Feather, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Feather.displayName = 'proto.rv.data.Graphics.Feather';
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
proto.rv.data.Graphics.Text = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Graphics.Text, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Text.displayName = 'proto.rv.data.Graphics.Text';
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
proto.rv.data.Graphics.Text.LineFillMask = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Graphics.Text.LineFillMask, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Text.LineFillMask.displayName = 'proto.rv.data.Graphics.Text.LineFillMask';
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
proto.rv.data.Graphics.Text.GradientFill = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Graphics.Text.GradientFill, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Text.GradientFill.displayName = 'proto.rv.data.Graphics.Text.GradientFill';
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
proto.rv.data.Graphics.Text.CutOutFill = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Graphics.Text.CutOutFill, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Text.CutOutFill.displayName = 'proto.rv.data.Graphics.Text.CutOutFill';
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
proto.rv.data.Graphics.Text.MediaFill = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Graphics.Text.MediaFill, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Text.MediaFill.displayName = 'proto.rv.data.Graphics.Text.MediaFill';
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
proto.rv.data.Graphics.Text.ChordPro = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Graphics.Text.ChordPro, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Text.ChordPro.displayName = 'proto.rv.data.Graphics.Text.ChordPro';
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
proto.rv.data.Graphics.Text.Attributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.Graphics.Text.Attributes.repeatedFields_, proto.rv.data.Graphics.Text.Attributes.oneofGroups_);
};
goog.inherits(proto.rv.data.Graphics.Text.Attributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Text.Attributes.displayName = 'proto.rv.data.Graphics.Text.Attributes';
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
proto.rv.data.Graphics.Text.Attributes.Underline = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Graphics.Text.Attributes.Underline, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Text.Attributes.Underline.displayName = 'proto.rv.data.Graphics.Text.Attributes.Underline';
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
proto.rv.data.Graphics.Text.Attributes.Paragraph = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.Graphics.Text.Attributes.Paragraph.repeatedFields_, null);
};
goog.inherits(proto.rv.data.Graphics.Text.Attributes.Paragraph, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Text.Attributes.Paragraph.displayName = 'proto.rv.data.Graphics.Text.Attributes.Paragraph';
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
proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop.displayName = 'proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop';
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
proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.displayName = 'proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList';
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
proto.rv.data.Graphics.Text.Attributes.CustomAttribute = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.Graphics.Text.Attributes.CustomAttribute.oneofGroups_);
};
goog.inherits(proto.rv.data.Graphics.Text.Attributes.CustomAttribute, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Graphics.Text.Attributes.CustomAttribute.displayName = 'proto.rv.data.Graphics.Text.Attributes.CustomAttribute';
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
proto.rv.data.Media = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.Media.oneofGroups_);
};
goog.inherits(proto.rv.data.Media, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Media.displayName = 'proto.rv.data.Media';
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
proto.rv.data.Media.Metadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Media.Metadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Media.Metadata.displayName = 'proto.rv.data.Media.Metadata';
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
proto.rv.data.Media.VideoDevice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Media.VideoDevice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Media.VideoDevice.displayName = 'proto.rv.data.Media.VideoDevice';
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
proto.rv.data.Media.AudioDevice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Media.AudioDevice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Media.AudioDevice.displayName = 'proto.rv.data.Media.AudioDevice';
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
proto.rv.data.Media.Audio = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Media.Audio, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Media.Audio.displayName = 'proto.rv.data.Media.Audio';
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
proto.rv.data.Media.Audio.Channel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.Media.Audio.Channel.repeatedFields_, null);
};
goog.inherits(proto.rv.data.Media.Audio.Channel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Media.Audio.Channel.displayName = 'proto.rv.data.Media.Audio.Channel';
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
proto.rv.data.Media.Audio.Channel.Output = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Media.Audio.Channel.Output, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Media.Audio.Channel.Output.displayName = 'proto.rv.data.Media.Audio.Channel.Output';
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
proto.rv.data.Media.AudioProperties = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.Media.AudioProperties.repeatedFields_, null);
};
goog.inherits(proto.rv.data.Media.AudioProperties, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Media.AudioProperties.displayName = 'proto.rv.data.Media.AudioProperties';
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
proto.rv.data.Media.TransportProperties = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Media.TransportProperties, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Media.TransportProperties.displayName = 'proto.rv.data.Media.TransportProperties';
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
proto.rv.data.Media.DrawingProperties = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.Media.DrawingProperties.repeatedFields_, null);
};
goog.inherits(proto.rv.data.Media.DrawingProperties, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Media.DrawingProperties.displayName = 'proto.rv.data.Media.DrawingProperties';
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
proto.rv.data.Media.VideoProperties = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Media.VideoProperties, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Media.VideoProperties.displayName = 'proto.rv.data.Media.VideoProperties';
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
proto.rv.data.Media.LiveVideoProperties = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Media.LiveVideoProperties, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Media.LiveVideoProperties.displayName = 'proto.rv.data.Media.LiveVideoProperties';
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
proto.rv.data.Media.AudioTypeProperties = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Media.AudioTypeProperties, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Media.AudioTypeProperties.displayName = 'proto.rv.data.Media.AudioTypeProperties';
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
proto.rv.data.Media.ImageTypeProperties = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Media.ImageTypeProperties, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Media.ImageTypeProperties.displayName = 'proto.rv.data.Media.ImageTypeProperties';
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
proto.rv.data.Media.VideoTypeProperties = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Media.VideoTypeProperties, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Media.VideoTypeProperties.displayName = 'proto.rv.data.Media.VideoTypeProperties';
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
proto.rv.data.Media.LiveVideoTypeProperties = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Media.LiveVideoTypeProperties, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Media.LiveVideoTypeProperties.displayName = 'proto.rv.data.Media.LiveVideoTypeProperties';
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
proto.rv.data.Media.WebContentTypeProperties = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.Media.WebContentTypeProperties, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.Media.WebContentTypeProperties.displayName = 'proto.rv.data.Media.WebContentTypeProperties';
}



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
proto.rv.data.Graphics.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.data.Graphics}
 */
proto.rv.data.Graphics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics;
  return proto.rv.data.Graphics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics}
 */
proto.rv.data.Graphics.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.data.Graphics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.Graphics.Element.oneofGroups_ = [[14]];

/**
 * @enum {number}
 */
proto.rv.data.Graphics.Element.MaskCase = {
  MASK_NOT_SET: 0,
  TEXT_LINE_MASK: 14
};

/**
 * @return {proto.rv.data.Graphics.Element.MaskCase}
 */
proto.rv.data.Graphics.Element.prototype.getMaskCase = function() {
  return /** @type {proto.rv.data.Graphics.Element.MaskCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.Graphics.Element.oneofGroups_[0]));
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
proto.rv.data.Graphics.Element.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Element.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Element} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Element.toObject = function(includeInstance, msg) {
  var f, obj = {
uuid: (f = msg.getUuid()) && proto.rv.data.UUID.toObject(includeInstance, f),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
bounds: (f = msg.getBounds()) && proto.rv.data.Graphics.Rect.toObject(includeInstance, f),
rotation: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
opacity: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
locked: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
aspectRatioLocked: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
path: (f = msg.getPath()) && proto.rv.data.Graphics.Path.toObject(includeInstance, f),
fill: (f = msg.getFill()) && proto.rv.data.Graphics.Fill.toObject(includeInstance, f),
stroke: (f = msg.getStroke()) && proto.rv.data.Graphics.Stroke.toObject(includeInstance, f),
shadow: (f = msg.getShadow()) && proto.rv.data.Graphics.Shadow.toObject(includeInstance, f),
feather: (f = msg.getFeather()) && proto.rv.data.Graphics.Feather.toObject(includeInstance, f),
text: (f = msg.getText()) && proto.rv.data.Graphics.Text.toObject(includeInstance, f),
flipmode: jspb.Message.getFieldWithDefault(msg, 15, 0),
hidden: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
textLineMask: (f = msg.getTextLineMask()) && proto.rv.data.Graphics.Text.LineFillMask.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Graphics.Element}
 */
proto.rv.data.Graphics.Element.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Element;
  return proto.rv.data.Graphics.Element.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Element} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Element}
 */
proto.rv.data.Graphics.Element.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.rv.data.Graphics.Rect;
      reader.readMessage(value,proto.rv.data.Graphics.Rect.deserializeBinaryFromReader);
      msg.setBounds(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRotation(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOpacity(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLocked(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAspectRatioLocked(value);
      break;
    case 8:
      var value = new proto.rv.data.Graphics.Path;
      reader.readMessage(value,proto.rv.data.Graphics.Path.deserializeBinaryFromReader);
      msg.setPath(value);
      break;
    case 9:
      var value = new proto.rv.data.Graphics.Fill;
      reader.readMessage(value,proto.rv.data.Graphics.Fill.deserializeBinaryFromReader);
      msg.setFill(value);
      break;
    case 10:
      var value = new proto.rv.data.Graphics.Stroke;
      reader.readMessage(value,proto.rv.data.Graphics.Stroke.deserializeBinaryFromReader);
      msg.setStroke(value);
      break;
    case 11:
      var value = new proto.rv.data.Graphics.Shadow;
      reader.readMessage(value,proto.rv.data.Graphics.Shadow.deserializeBinaryFromReader);
      msg.setShadow(value);
      break;
    case 12:
      var value = new proto.rv.data.Graphics.Feather;
      reader.readMessage(value,proto.rv.data.Graphics.Feather.deserializeBinaryFromReader);
      msg.setFeather(value);
      break;
    case 13:
      var value = new proto.rv.data.Graphics.Text;
      reader.readMessage(value,proto.rv.data.Graphics.Text.deserializeBinaryFromReader);
      msg.setText(value);
      break;
    case 15:
      var value = /** @type {!proto.rv.data.Graphics.Element.FlipMode} */ (reader.readEnum());
      msg.setFlipmode(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHidden(value);
      break;
    case 14:
      var value = new proto.rv.data.Graphics.Text.LineFillMask;
      reader.readMessage(value,proto.rv.data.Graphics.Text.LineFillMask.deserializeBinaryFromReader);
      msg.setTextLineMask(value);
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
proto.rv.data.Graphics.Element.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Element.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Element} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Element.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getBounds();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.Graphics.Rect.serializeBinaryToWriter
    );
  }
  f = message.getRotation();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getOpacity();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getLocked();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getAspectRatioLocked();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getPath();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.rv.data.Graphics.Path.serializeBinaryToWriter
    );
  }
  f = message.getFill();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.rv.data.Graphics.Fill.serializeBinaryToWriter
    );
  }
  f = message.getStroke();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.rv.data.Graphics.Stroke.serializeBinaryToWriter
    );
  }
  f = message.getShadow();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.rv.data.Graphics.Shadow.serializeBinaryToWriter
    );
  }
  f = message.getFeather();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.rv.data.Graphics.Feather.serializeBinaryToWriter
    );
  }
  f = message.getText();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.rv.data.Graphics.Text.serializeBinaryToWriter
    );
  }
  f = message.getFlipmode();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = message.getHidden();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getTextLineMask();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.rv.data.Graphics.Text.LineFillMask.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Graphics.Element.FlipMode = {
  FLIP_MODE_NONE: 0,
  FLIP_MODE_VERTICAL: 1,
  FLIP_MODE_HORIZONTAL: 2,
  FLIP_MODE_BOTH: 3
};

/**
 * optional UUID uuid = 1;
 * @return {?proto.rv.data.UUID}
 */
proto.rv.data.Graphics.Element.prototype.getUuid = function() {
  return /** @type{?proto.rv.data.UUID} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.UUID, 1));
};


/**
 * @param {?proto.rv.data.UUID|undefined} value
 * @return {!proto.rv.data.Graphics.Element} returns this
*/
proto.rv.data.Graphics.Element.prototype.setUuid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Element} returns this
 */
proto.rv.data.Graphics.Element.prototype.clearUuid = function() {
  return this.setUuid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Element.prototype.hasUuid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.rv.data.Graphics.Element.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Graphics.Element} returns this
 */
proto.rv.data.Graphics.Element.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Rect bounds = 3;
 * @return {?proto.rv.data.Graphics.Rect}
 */
proto.rv.data.Graphics.Element.prototype.getBounds = function() {
  return /** @type{?proto.rv.data.Graphics.Rect} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Rect, 3));
};


/**
 * @param {?proto.rv.data.Graphics.Rect|undefined} value
 * @return {!proto.rv.data.Graphics.Element} returns this
*/
proto.rv.data.Graphics.Element.prototype.setBounds = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Element} returns this
 */
proto.rv.data.Graphics.Element.prototype.clearBounds = function() {
  return this.setBounds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Element.prototype.hasBounds = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double rotation = 4;
 * @return {number}
 */
proto.rv.data.Graphics.Element.prototype.getRotation = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Element} returns this
 */
proto.rv.data.Graphics.Element.prototype.setRotation = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double opacity = 5;
 * @return {number}
 */
proto.rv.data.Graphics.Element.prototype.getOpacity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Element} returns this
 */
proto.rv.data.Graphics.Element.prototype.setOpacity = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional bool locked = 6;
 * @return {boolean}
 */
proto.rv.data.Graphics.Element.prototype.getLocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Graphics.Element} returns this
 */
proto.rv.data.Graphics.Element.prototype.setLocked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool aspect_ratio_locked = 7;
 * @return {boolean}
 */
proto.rv.data.Graphics.Element.prototype.getAspectRatioLocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Graphics.Element} returns this
 */
proto.rv.data.Graphics.Element.prototype.setAspectRatioLocked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional Path path = 8;
 * @return {?proto.rv.data.Graphics.Path}
 */
proto.rv.data.Graphics.Element.prototype.getPath = function() {
  return /** @type{?proto.rv.data.Graphics.Path} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Path, 8));
};


/**
 * @param {?proto.rv.data.Graphics.Path|undefined} value
 * @return {!proto.rv.data.Graphics.Element} returns this
*/
proto.rv.data.Graphics.Element.prototype.setPath = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Element} returns this
 */
proto.rv.data.Graphics.Element.prototype.clearPath = function() {
  return this.setPath(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Element.prototype.hasPath = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Fill fill = 9;
 * @return {?proto.rv.data.Graphics.Fill}
 */
proto.rv.data.Graphics.Element.prototype.getFill = function() {
  return /** @type{?proto.rv.data.Graphics.Fill} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Fill, 9));
};


/**
 * @param {?proto.rv.data.Graphics.Fill|undefined} value
 * @return {!proto.rv.data.Graphics.Element} returns this
*/
proto.rv.data.Graphics.Element.prototype.setFill = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Element} returns this
 */
proto.rv.data.Graphics.Element.prototype.clearFill = function() {
  return this.setFill(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Element.prototype.hasFill = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Stroke stroke = 10;
 * @return {?proto.rv.data.Graphics.Stroke}
 */
proto.rv.data.Graphics.Element.prototype.getStroke = function() {
  return /** @type{?proto.rv.data.Graphics.Stroke} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Stroke, 10));
};


/**
 * @param {?proto.rv.data.Graphics.Stroke|undefined} value
 * @return {!proto.rv.data.Graphics.Element} returns this
*/
proto.rv.data.Graphics.Element.prototype.setStroke = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Element} returns this
 */
proto.rv.data.Graphics.Element.prototype.clearStroke = function() {
  return this.setStroke(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Element.prototype.hasStroke = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Shadow shadow = 11;
 * @return {?proto.rv.data.Graphics.Shadow}
 */
proto.rv.data.Graphics.Element.prototype.getShadow = function() {
  return /** @type{?proto.rv.data.Graphics.Shadow} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Shadow, 11));
};


/**
 * @param {?proto.rv.data.Graphics.Shadow|undefined} value
 * @return {!proto.rv.data.Graphics.Element} returns this
*/
proto.rv.data.Graphics.Element.prototype.setShadow = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Element} returns this
 */
proto.rv.data.Graphics.Element.prototype.clearShadow = function() {
  return this.setShadow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Element.prototype.hasShadow = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Feather feather = 12;
 * @return {?proto.rv.data.Graphics.Feather}
 */
proto.rv.data.Graphics.Element.prototype.getFeather = function() {
  return /** @type{?proto.rv.data.Graphics.Feather} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Feather, 12));
};


/**
 * @param {?proto.rv.data.Graphics.Feather|undefined} value
 * @return {!proto.rv.data.Graphics.Element} returns this
*/
proto.rv.data.Graphics.Element.prototype.setFeather = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Element} returns this
 */
proto.rv.data.Graphics.Element.prototype.clearFeather = function() {
  return this.setFeather(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Element.prototype.hasFeather = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Text text = 13;
 * @return {?proto.rv.data.Graphics.Text}
 */
proto.rv.data.Graphics.Element.prototype.getText = function() {
  return /** @type{?proto.rv.data.Graphics.Text} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Text, 13));
};


/**
 * @param {?proto.rv.data.Graphics.Text|undefined} value
 * @return {!proto.rv.data.Graphics.Element} returns this
*/
proto.rv.data.Graphics.Element.prototype.setText = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Element} returns this
 */
proto.rv.data.Graphics.Element.prototype.clearText = function() {
  return this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Element.prototype.hasText = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional FlipMode flipMode = 15;
 * @return {!proto.rv.data.Graphics.Element.FlipMode}
 */
proto.rv.data.Graphics.Element.prototype.getFlipmode = function() {
  return /** @type {!proto.rv.data.Graphics.Element.FlipMode} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.rv.data.Graphics.Element.FlipMode} value
 * @return {!proto.rv.data.Graphics.Element} returns this
 */
proto.rv.data.Graphics.Element.prototype.setFlipmode = function(value) {
  return jspb.Message.setProto3EnumField(this, 15, value);
};


/**
 * optional bool hidden = 16;
 * @return {boolean}
 */
proto.rv.data.Graphics.Element.prototype.getHidden = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Graphics.Element} returns this
 */
proto.rv.data.Graphics.Element.prototype.setHidden = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional Text.LineFillMask text_line_mask = 14;
 * @return {?proto.rv.data.Graphics.Text.LineFillMask}
 */
proto.rv.data.Graphics.Element.prototype.getTextLineMask = function() {
  return /** @type{?proto.rv.data.Graphics.Text.LineFillMask} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Text.LineFillMask, 14));
};


/**
 * @param {?proto.rv.data.Graphics.Text.LineFillMask|undefined} value
 * @return {!proto.rv.data.Graphics.Element} returns this
*/
proto.rv.data.Graphics.Element.prototype.setTextLineMask = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.rv.data.Graphics.Element.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Element} returns this
 */
proto.rv.data.Graphics.Element.prototype.clearTextLineMask = function() {
  return this.setTextLineMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Element.prototype.hasTextLineMask = function() {
  return jspb.Message.getField(this, 14) != null;
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
proto.rv.data.Graphics.Rect.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Rect.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Rect} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Rect.toObject = function(includeInstance, msg) {
  var f, obj = {
origin: (f = msg.getOrigin()) && proto.rv.data.Graphics.Point.toObject(includeInstance, f),
size: (f = msg.getSize()) && proto.rv.data.Graphics.Size.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Graphics.Rect}
 */
proto.rv.data.Graphics.Rect.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Rect;
  return proto.rv.data.Graphics.Rect.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Rect} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Rect}
 */
proto.rv.data.Graphics.Rect.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Graphics.Point;
      reader.readMessage(value,proto.rv.data.Graphics.Point.deserializeBinaryFromReader);
      msg.setOrigin(value);
      break;
    case 2:
      var value = new proto.rv.data.Graphics.Size;
      reader.readMessage(value,proto.rv.data.Graphics.Size.deserializeBinaryFromReader);
      msg.setSize(value);
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
proto.rv.data.Graphics.Rect.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Rect.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Rect} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Rect.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrigin();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Graphics.Point.serializeBinaryToWriter
    );
  }
  f = message.getSize();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.Graphics.Size.serializeBinaryToWriter
    );
  }
};


/**
 * optional Point origin = 1;
 * @return {?proto.rv.data.Graphics.Point}
 */
proto.rv.data.Graphics.Rect.prototype.getOrigin = function() {
  return /** @type{?proto.rv.data.Graphics.Point} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Point, 1));
};


/**
 * @param {?proto.rv.data.Graphics.Point|undefined} value
 * @return {!proto.rv.data.Graphics.Rect} returns this
*/
proto.rv.data.Graphics.Rect.prototype.setOrigin = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Rect} returns this
 */
proto.rv.data.Graphics.Rect.prototype.clearOrigin = function() {
  return this.setOrigin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Rect.prototype.hasOrigin = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Size size = 2;
 * @return {?proto.rv.data.Graphics.Size}
 */
proto.rv.data.Graphics.Rect.prototype.getSize = function() {
  return /** @type{?proto.rv.data.Graphics.Size} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Size, 2));
};


/**
 * @param {?proto.rv.data.Graphics.Size|undefined} value
 * @return {!proto.rv.data.Graphics.Rect} returns this
*/
proto.rv.data.Graphics.Rect.prototype.setSize = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Rect} returns this
 */
proto.rv.data.Graphics.Rect.prototype.clearSize = function() {
  return this.setSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Rect.prototype.hasSize = function() {
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
proto.rv.data.Graphics.Point.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Point.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Point} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Point.toObject = function(includeInstance, msg) {
  var f, obj = {
x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.rv.data.Graphics.Point}
 */
proto.rv.data.Graphics.Point.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Point;
  return proto.rv.data.Graphics.Point.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Point} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Point}
 */
proto.rv.data.Graphics.Point.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setY(value);
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
proto.rv.data.Graphics.Point.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Point.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Point} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Point.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double x = 1;
 * @return {number}
 */
proto.rv.data.Graphics.Point.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Point} returns this
 */
proto.rv.data.Graphics.Point.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double y = 2;
 * @return {number}
 */
proto.rv.data.Graphics.Point.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Point} returns this
 */
proto.rv.data.Graphics.Point.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
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
proto.rv.data.Graphics.Size.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Size.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Size} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Size.toObject = function(includeInstance, msg) {
  var f, obj = {
width: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
height: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.rv.data.Graphics.Size}
 */
proto.rv.data.Graphics.Size.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Size;
  return proto.rv.data.Graphics.Size.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Size} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Size}
 */
proto.rv.data.Graphics.Size.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWidth(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHeight(value);
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
proto.rv.data.Graphics.Size.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Size.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Size} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Size.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWidth();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double width = 1;
 * @return {number}
 */
proto.rv.data.Graphics.Size.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Size} returns this
 */
proto.rv.data.Graphics.Size.prototype.setWidth = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double height = 2;
 * @return {number}
 */
proto.rv.data.Graphics.Size.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Size} returns this
 */
proto.rv.data.Graphics.Size.prototype.setHeight = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
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
proto.rv.data.Graphics.EdgeInsets.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.EdgeInsets.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.EdgeInsets} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.EdgeInsets.toObject = function(includeInstance, msg) {
  var f, obj = {
left: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
right: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
top: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
bottom: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.rv.data.Graphics.EdgeInsets}
 */
proto.rv.data.Graphics.EdgeInsets.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.EdgeInsets;
  return proto.rv.data.Graphics.EdgeInsets.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.EdgeInsets} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.EdgeInsets}
 */
proto.rv.data.Graphics.EdgeInsets.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLeft(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRight(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTop(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBottom(value);
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
proto.rv.data.Graphics.EdgeInsets.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.EdgeInsets.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.EdgeInsets} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.EdgeInsets.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeft();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getRight();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getTop();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getBottom();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional double left = 1;
 * @return {number}
 */
proto.rv.data.Graphics.EdgeInsets.prototype.getLeft = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.EdgeInsets} returns this
 */
proto.rv.data.Graphics.EdgeInsets.prototype.setLeft = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double right = 2;
 * @return {number}
 */
proto.rv.data.Graphics.EdgeInsets.prototype.getRight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.EdgeInsets} returns this
 */
proto.rv.data.Graphics.EdgeInsets.prototype.setRight = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double top = 3;
 * @return {number}
 */
proto.rv.data.Graphics.EdgeInsets.prototype.getTop = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.EdgeInsets} returns this
 */
proto.rv.data.Graphics.EdgeInsets.prototype.setTop = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double bottom = 4;
 * @return {number}
 */
proto.rv.data.Graphics.EdgeInsets.prototype.getBottom = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.EdgeInsets} returns this
 */
proto.rv.data.Graphics.EdgeInsets.prototype.setBottom = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.Graphics.Path.repeatedFields_ = [2];



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
proto.rv.data.Graphics.Path.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Path.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Path} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Path.toObject = function(includeInstance, msg) {
  var f, obj = {
closed: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
pointsList: jspb.Message.toObjectList(msg.getPointsList(),
    proto.rv.data.Graphics.Path.BezierPoint.toObject, includeInstance),
shape: (f = msg.getShape()) && proto.rv.data.Graphics.Path.Shape.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Graphics.Path}
 */
proto.rv.data.Graphics.Path.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Path;
  return proto.rv.data.Graphics.Path.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Path} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Path}
 */
proto.rv.data.Graphics.Path.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClosed(value);
      break;
    case 2:
      var value = new proto.rv.data.Graphics.Path.BezierPoint;
      reader.readMessage(value,proto.rv.data.Graphics.Path.BezierPoint.deserializeBinaryFromReader);
      msg.addPoints(value);
      break;
    case 3:
      var value = new proto.rv.data.Graphics.Path.Shape;
      reader.readMessage(value,proto.rv.data.Graphics.Path.Shape.deserializeBinaryFromReader);
      msg.setShape(value);
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
proto.rv.data.Graphics.Path.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Path.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Path} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Path.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClosed();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getPointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.rv.data.Graphics.Path.BezierPoint.serializeBinaryToWriter
    );
  }
  f = message.getShape();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.Graphics.Path.Shape.serializeBinaryToWriter
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
proto.rv.data.Graphics.Path.BezierPoint.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Path.BezierPoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Path.BezierPoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Path.BezierPoint.toObject = function(includeInstance, msg) {
  var f, obj = {
point: (f = msg.getPoint()) && proto.rv.data.Graphics.Point.toObject(includeInstance, f),
q0: (f = msg.getQ0()) && proto.rv.data.Graphics.Point.toObject(includeInstance, f),
q1: (f = msg.getQ1()) && proto.rv.data.Graphics.Point.toObject(includeInstance, f),
curved: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.rv.data.Graphics.Path.BezierPoint}
 */
proto.rv.data.Graphics.Path.BezierPoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Path.BezierPoint;
  return proto.rv.data.Graphics.Path.BezierPoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Path.BezierPoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Path.BezierPoint}
 */
proto.rv.data.Graphics.Path.BezierPoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Graphics.Point;
      reader.readMessage(value,proto.rv.data.Graphics.Point.deserializeBinaryFromReader);
      msg.setPoint(value);
      break;
    case 2:
      var value = new proto.rv.data.Graphics.Point;
      reader.readMessage(value,proto.rv.data.Graphics.Point.deserializeBinaryFromReader);
      msg.setQ0(value);
      break;
    case 3:
      var value = new proto.rv.data.Graphics.Point;
      reader.readMessage(value,proto.rv.data.Graphics.Point.deserializeBinaryFromReader);
      msg.setQ1(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCurved(value);
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
proto.rv.data.Graphics.Path.BezierPoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Path.BezierPoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Path.BezierPoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Path.BezierPoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPoint();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Graphics.Point.serializeBinaryToWriter
    );
  }
  f = message.getQ0();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.Graphics.Point.serializeBinaryToWriter
    );
  }
  f = message.getQ1();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.Graphics.Point.serializeBinaryToWriter
    );
  }
  f = message.getCurved();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional Point point = 1;
 * @return {?proto.rv.data.Graphics.Point}
 */
proto.rv.data.Graphics.Path.BezierPoint.prototype.getPoint = function() {
  return /** @type{?proto.rv.data.Graphics.Point} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Point, 1));
};


/**
 * @param {?proto.rv.data.Graphics.Point|undefined} value
 * @return {!proto.rv.data.Graphics.Path.BezierPoint} returns this
*/
proto.rv.data.Graphics.Path.BezierPoint.prototype.setPoint = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Path.BezierPoint} returns this
 */
proto.rv.data.Graphics.Path.BezierPoint.prototype.clearPoint = function() {
  return this.setPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Path.BezierPoint.prototype.hasPoint = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Point q0 = 2;
 * @return {?proto.rv.data.Graphics.Point}
 */
proto.rv.data.Graphics.Path.BezierPoint.prototype.getQ0 = function() {
  return /** @type{?proto.rv.data.Graphics.Point} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Point, 2));
};


/**
 * @param {?proto.rv.data.Graphics.Point|undefined} value
 * @return {!proto.rv.data.Graphics.Path.BezierPoint} returns this
*/
proto.rv.data.Graphics.Path.BezierPoint.prototype.setQ0 = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Path.BezierPoint} returns this
 */
proto.rv.data.Graphics.Path.BezierPoint.prototype.clearQ0 = function() {
  return this.setQ0(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Path.BezierPoint.prototype.hasQ0 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Point q1 = 3;
 * @return {?proto.rv.data.Graphics.Point}
 */
proto.rv.data.Graphics.Path.BezierPoint.prototype.getQ1 = function() {
  return /** @type{?proto.rv.data.Graphics.Point} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Point, 3));
};


/**
 * @param {?proto.rv.data.Graphics.Point|undefined} value
 * @return {!proto.rv.data.Graphics.Path.BezierPoint} returns this
*/
proto.rv.data.Graphics.Path.BezierPoint.prototype.setQ1 = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Path.BezierPoint} returns this
 */
proto.rv.data.Graphics.Path.BezierPoint.prototype.clearQ1 = function() {
  return this.setQ1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Path.BezierPoint.prototype.hasQ1 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool curved = 4;
 * @return {boolean}
 */
proto.rv.data.Graphics.Path.BezierPoint.prototype.getCurved = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Graphics.Path.BezierPoint} returns this
 */
proto.rv.data.Graphics.Path.BezierPoint.prototype.setCurved = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.Graphics.Path.Shape.oneofGroups_ = [[2,3,4,5]];

/**
 * @enum {number}
 */
proto.rv.data.Graphics.Path.Shape.AdditionaldataCase = {
  ADDITIONALDATA_NOT_SET: 0,
  ROUNDED_RECTANGLE: 2,
  POLYGON: 3,
  STAR: 4,
  ARROW: 5
};

/**
 * @return {proto.rv.data.Graphics.Path.Shape.AdditionaldataCase}
 */
proto.rv.data.Graphics.Path.Shape.prototype.getAdditionaldataCase = function() {
  return /** @type {proto.rv.data.Graphics.Path.Shape.AdditionaldataCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.Graphics.Path.Shape.oneofGroups_[0]));
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
proto.rv.data.Graphics.Path.Shape.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Path.Shape.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Path.Shape} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Path.Shape.toObject = function(includeInstance, msg) {
  var f, obj = {
type: jspb.Message.getFieldWithDefault(msg, 1, 0),
roundedRectangle: (f = msg.getRoundedRectangle()) && proto.rv.data.Graphics.Path.Shape.RoundedRectangle.toObject(includeInstance, f),
polygon: (f = msg.getPolygon()) && proto.rv.data.Graphics.Path.Shape.Polygon.toObject(includeInstance, f),
star: (f = msg.getStar()) && proto.rv.data.Graphics.Path.Shape.Star.toObject(includeInstance, f),
arrow: (f = msg.getArrow()) && proto.rv.data.Graphics.Path.Shape.Arrow.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Graphics.Path.Shape}
 */
proto.rv.data.Graphics.Path.Shape.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Path.Shape;
  return proto.rv.data.Graphics.Path.Shape.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Path.Shape} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Path.Shape}
 */
proto.rv.data.Graphics.Path.Shape.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Graphics.Path.Shape.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.rv.data.Graphics.Path.Shape.RoundedRectangle;
      reader.readMessage(value,proto.rv.data.Graphics.Path.Shape.RoundedRectangle.deserializeBinaryFromReader);
      msg.setRoundedRectangle(value);
      break;
    case 3:
      var value = new proto.rv.data.Graphics.Path.Shape.Polygon;
      reader.readMessage(value,proto.rv.data.Graphics.Path.Shape.Polygon.deserializeBinaryFromReader);
      msg.setPolygon(value);
      break;
    case 4:
      var value = new proto.rv.data.Graphics.Path.Shape.Star;
      reader.readMessage(value,proto.rv.data.Graphics.Path.Shape.Star.deserializeBinaryFromReader);
      msg.setStar(value);
      break;
    case 5:
      var value = new proto.rv.data.Graphics.Path.Shape.Arrow;
      reader.readMessage(value,proto.rv.data.Graphics.Path.Shape.Arrow.deserializeBinaryFromReader);
      msg.setArrow(value);
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
proto.rv.data.Graphics.Path.Shape.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Path.Shape.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Path.Shape} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Path.Shape.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getRoundedRectangle();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.Graphics.Path.Shape.RoundedRectangle.serializeBinaryToWriter
    );
  }
  f = message.getPolygon();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.Graphics.Path.Shape.Polygon.serializeBinaryToWriter
    );
  }
  f = message.getStar();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.data.Graphics.Path.Shape.Star.serializeBinaryToWriter
    );
  }
  f = message.getArrow();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.data.Graphics.Path.Shape.Arrow.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Graphics.Path.Shape.Type = {
  TYPE_UNKNOWN: 0,
  TYPE_RECTANGLE: 1,
  TYPE_ELLIPSE: 2,
  TYPE_ISOSCELES_TRIANGLE: 3,
  TYPE_RIGHT_TRIANGLE: 4,
  TYPE_RHOMBUS: 5,
  TYPE_STAR: 6,
  TYPE_POLYGON: 7,
  TYPE_CUSTOM: 8,
  TYPE_RIGHT_ARROW: 9,
  TYPE_DOUBLE_ARROW: 10,
  TYPE_ROUNDED_RECTANGLE: 11
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
proto.rv.data.Graphics.Path.Shape.RoundedRectangle.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Path.Shape.RoundedRectangle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Path.Shape.RoundedRectangle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Path.Shape.RoundedRectangle.toObject = function(includeInstance, msg) {
  var f, obj = {
roundness: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.rv.data.Graphics.Path.Shape.RoundedRectangle}
 */
proto.rv.data.Graphics.Path.Shape.RoundedRectangle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Path.Shape.RoundedRectangle;
  return proto.rv.data.Graphics.Path.Shape.RoundedRectangle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Path.Shape.RoundedRectangle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Path.Shape.RoundedRectangle}
 */
proto.rv.data.Graphics.Path.Shape.RoundedRectangle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRoundness(value);
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
proto.rv.data.Graphics.Path.Shape.RoundedRectangle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Path.Shape.RoundedRectangle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Path.Shape.RoundedRectangle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Path.Shape.RoundedRectangle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoundness();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double roundness = 1;
 * @return {number}
 */
proto.rv.data.Graphics.Path.Shape.RoundedRectangle.prototype.getRoundness = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Path.Shape.RoundedRectangle} returns this
 */
proto.rv.data.Graphics.Path.Shape.RoundedRectangle.prototype.setRoundness = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
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
proto.rv.data.Graphics.Path.Shape.Arrow.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Path.Shape.Arrow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Path.Shape.Arrow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Path.Shape.Arrow.toObject = function(includeInstance, msg) {
  var f, obj = {
corner: (f = msg.getCorner()) && proto.rv.data.Graphics.Point.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Graphics.Path.Shape.Arrow}
 */
proto.rv.data.Graphics.Path.Shape.Arrow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Path.Shape.Arrow;
  return proto.rv.data.Graphics.Path.Shape.Arrow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Path.Shape.Arrow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Path.Shape.Arrow}
 */
proto.rv.data.Graphics.Path.Shape.Arrow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Graphics.Point;
      reader.readMessage(value,proto.rv.data.Graphics.Point.deserializeBinaryFromReader);
      msg.setCorner(value);
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
proto.rv.data.Graphics.Path.Shape.Arrow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Path.Shape.Arrow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Path.Shape.Arrow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Path.Shape.Arrow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCorner();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Graphics.Point.serializeBinaryToWriter
    );
  }
};


/**
 * optional Point corner = 1;
 * @return {?proto.rv.data.Graphics.Point}
 */
proto.rv.data.Graphics.Path.Shape.Arrow.prototype.getCorner = function() {
  return /** @type{?proto.rv.data.Graphics.Point} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Point, 1));
};


/**
 * @param {?proto.rv.data.Graphics.Point|undefined} value
 * @return {!proto.rv.data.Graphics.Path.Shape.Arrow} returns this
*/
proto.rv.data.Graphics.Path.Shape.Arrow.prototype.setCorner = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Path.Shape.Arrow} returns this
 */
proto.rv.data.Graphics.Path.Shape.Arrow.prototype.clearCorner = function() {
  return this.setCorner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Path.Shape.Arrow.prototype.hasCorner = function() {
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
proto.rv.data.Graphics.Path.Shape.Polygon.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Path.Shape.Polygon.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Path.Shape.Polygon} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Path.Shape.Polygon.toObject = function(includeInstance, msg) {
  var f, obj = {
numberSides: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.data.Graphics.Path.Shape.Polygon}
 */
proto.rv.data.Graphics.Path.Shape.Polygon.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Path.Shape.Polygon;
  return proto.rv.data.Graphics.Path.Shape.Polygon.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Path.Shape.Polygon} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Path.Shape.Polygon}
 */
proto.rv.data.Graphics.Path.Shape.Polygon.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumberSides(value);
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
proto.rv.data.Graphics.Path.Shape.Polygon.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Path.Shape.Polygon.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Path.Shape.Polygon} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Path.Shape.Polygon.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumberSides();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 number_sides = 1;
 * @return {number}
 */
proto.rv.data.Graphics.Path.Shape.Polygon.prototype.getNumberSides = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Path.Shape.Polygon} returns this
 */
proto.rv.data.Graphics.Path.Shape.Polygon.prototype.setNumberSides = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.rv.data.Graphics.Path.Shape.Star.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Path.Shape.Star.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Path.Shape.Star} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Path.Shape.Star.toObject = function(includeInstance, msg) {
  var f, obj = {
innerRadius: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
numberPoints: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.rv.data.Graphics.Path.Shape.Star}
 */
proto.rv.data.Graphics.Path.Shape.Star.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Path.Shape.Star;
  return proto.rv.data.Graphics.Path.Shape.Star.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Path.Shape.Star} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Path.Shape.Star}
 */
proto.rv.data.Graphics.Path.Shape.Star.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setInnerRadius(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumberPoints(value);
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
proto.rv.data.Graphics.Path.Shape.Star.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Path.Shape.Star.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Path.Shape.Star} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Path.Shape.Star.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInnerRadius();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getNumberPoints();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional double inner_radius = 1;
 * @return {number}
 */
proto.rv.data.Graphics.Path.Shape.Star.prototype.getInnerRadius = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Path.Shape.Star} returns this
 */
proto.rv.data.Graphics.Path.Shape.Star.prototype.setInnerRadius = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional uint32 number_points = 2;
 * @return {number}
 */
proto.rv.data.Graphics.Path.Shape.Star.prototype.getNumberPoints = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Path.Shape.Star} returns this
 */
proto.rv.data.Graphics.Path.Shape.Star.prototype.setNumberPoints = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Type type = 1;
 * @return {!proto.rv.data.Graphics.Path.Shape.Type}
 */
proto.rv.data.Graphics.Path.Shape.prototype.getType = function() {
  return /** @type {!proto.rv.data.Graphics.Path.Shape.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Graphics.Path.Shape.Type} value
 * @return {!proto.rv.data.Graphics.Path.Shape} returns this
 */
proto.rv.data.Graphics.Path.Shape.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional RoundedRectangle rounded_rectangle = 2;
 * @return {?proto.rv.data.Graphics.Path.Shape.RoundedRectangle}
 */
proto.rv.data.Graphics.Path.Shape.prototype.getRoundedRectangle = function() {
  return /** @type{?proto.rv.data.Graphics.Path.Shape.RoundedRectangle} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Path.Shape.RoundedRectangle, 2));
};


/**
 * @param {?proto.rv.data.Graphics.Path.Shape.RoundedRectangle|undefined} value
 * @return {!proto.rv.data.Graphics.Path.Shape} returns this
*/
proto.rv.data.Graphics.Path.Shape.prototype.setRoundedRectangle = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.data.Graphics.Path.Shape.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Path.Shape} returns this
 */
proto.rv.data.Graphics.Path.Shape.prototype.clearRoundedRectangle = function() {
  return this.setRoundedRectangle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Path.Shape.prototype.hasRoundedRectangle = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Polygon polygon = 3;
 * @return {?proto.rv.data.Graphics.Path.Shape.Polygon}
 */
proto.rv.data.Graphics.Path.Shape.prototype.getPolygon = function() {
  return /** @type{?proto.rv.data.Graphics.Path.Shape.Polygon} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Path.Shape.Polygon, 3));
};


/**
 * @param {?proto.rv.data.Graphics.Path.Shape.Polygon|undefined} value
 * @return {!proto.rv.data.Graphics.Path.Shape} returns this
*/
proto.rv.data.Graphics.Path.Shape.prototype.setPolygon = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.data.Graphics.Path.Shape.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Path.Shape} returns this
 */
proto.rv.data.Graphics.Path.Shape.prototype.clearPolygon = function() {
  return this.setPolygon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Path.Shape.prototype.hasPolygon = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Star star = 4;
 * @return {?proto.rv.data.Graphics.Path.Shape.Star}
 */
proto.rv.data.Graphics.Path.Shape.prototype.getStar = function() {
  return /** @type{?proto.rv.data.Graphics.Path.Shape.Star} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Path.Shape.Star, 4));
};


/**
 * @param {?proto.rv.data.Graphics.Path.Shape.Star|undefined} value
 * @return {!proto.rv.data.Graphics.Path.Shape} returns this
*/
proto.rv.data.Graphics.Path.Shape.prototype.setStar = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rv.data.Graphics.Path.Shape.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Path.Shape} returns this
 */
proto.rv.data.Graphics.Path.Shape.prototype.clearStar = function() {
  return this.setStar(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Path.Shape.prototype.hasStar = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Arrow arrow = 5;
 * @return {?proto.rv.data.Graphics.Path.Shape.Arrow}
 */
proto.rv.data.Graphics.Path.Shape.prototype.getArrow = function() {
  return /** @type{?proto.rv.data.Graphics.Path.Shape.Arrow} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Path.Shape.Arrow, 5));
};


/**
 * @param {?proto.rv.data.Graphics.Path.Shape.Arrow|undefined} value
 * @return {!proto.rv.data.Graphics.Path.Shape} returns this
*/
proto.rv.data.Graphics.Path.Shape.prototype.setArrow = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.rv.data.Graphics.Path.Shape.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Path.Shape} returns this
 */
proto.rv.data.Graphics.Path.Shape.prototype.clearArrow = function() {
  return this.setArrow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Path.Shape.prototype.hasArrow = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool closed = 1;
 * @return {boolean}
 */
proto.rv.data.Graphics.Path.prototype.getClosed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Graphics.Path} returns this
 */
proto.rv.data.Graphics.Path.prototype.setClosed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated BezierPoint points = 2;
 * @return {!Array<!proto.rv.data.Graphics.Path.BezierPoint>}
 */
proto.rv.data.Graphics.Path.prototype.getPointsList = function() {
  return /** @type{!Array<!proto.rv.data.Graphics.Path.BezierPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.Graphics.Path.BezierPoint, 2));
};


/**
 * @param {!Array<!proto.rv.data.Graphics.Path.BezierPoint>} value
 * @return {!proto.rv.data.Graphics.Path} returns this
*/
proto.rv.data.Graphics.Path.prototype.setPointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.rv.data.Graphics.Path.BezierPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.Graphics.Path.BezierPoint}
 */
proto.rv.data.Graphics.Path.prototype.addPoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.rv.data.Graphics.Path.BezierPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Graphics.Path} returns this
 */
proto.rv.data.Graphics.Path.prototype.clearPointsList = function() {
  return this.setPointsList([]);
};


/**
 * optional Shape shape = 3;
 * @return {?proto.rv.data.Graphics.Path.Shape}
 */
proto.rv.data.Graphics.Path.prototype.getShape = function() {
  return /** @type{?proto.rv.data.Graphics.Path.Shape} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Path.Shape, 3));
};


/**
 * @param {?proto.rv.data.Graphics.Path.Shape|undefined} value
 * @return {!proto.rv.data.Graphics.Path} returns this
*/
proto.rv.data.Graphics.Path.prototype.setShape = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Path} returns this
 */
proto.rv.data.Graphics.Path.prototype.clearShape = function() {
  return this.setShape(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Path.prototype.hasShape = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.Graphics.Fill.oneofGroups_ = [[1,2,3,5]];

/**
 * @enum {number}
 */
proto.rv.data.Graphics.Fill.FilltypeCase = {
  FILLTYPE_NOT_SET: 0,
  COLOR: 1,
  GRADIENT: 2,
  MEDIA: 3,
  BACKGROUNDEFFECT: 5
};

/**
 * @return {proto.rv.data.Graphics.Fill.FilltypeCase}
 */
proto.rv.data.Graphics.Fill.prototype.getFilltypeCase = function() {
  return /** @type {proto.rv.data.Graphics.Fill.FilltypeCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.Graphics.Fill.oneofGroups_[0]));
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
proto.rv.data.Graphics.Fill.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Fill.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Fill} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Fill.toObject = function(includeInstance, msg) {
  var f, obj = {
enable: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
color: (f = msg.getColor()) && proto.rv.data.Color.toObject(includeInstance, f),
gradient: (f = msg.getGradient()) && proto.rv.data.Graphics.Gradient.toObject(includeInstance, f),
media: (f = msg.getMedia()) && proto.rv.data.Media.toObject(includeInstance, f),
backgroundeffect: (f = msg.getBackgroundeffect()) && proto.rv.data.Graphics.BackgroundEffect.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Graphics.Fill}
 */
proto.rv.data.Graphics.Fill.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Fill;
  return proto.rv.data.Graphics.Fill.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Fill} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Fill}
 */
proto.rv.data.Graphics.Fill.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    case 1:
      var value = new proto.rv.data.Color;
      reader.readMessage(value,proto.rv.data.Color.deserializeBinaryFromReader);
      msg.setColor(value);
      break;
    case 2:
      var value = new proto.rv.data.Graphics.Gradient;
      reader.readMessage(value,proto.rv.data.Graphics.Gradient.deserializeBinaryFromReader);
      msg.setGradient(value);
      break;
    case 3:
      var value = new proto.rv.data.Media;
      reader.readMessage(value,proto.rv.data.Media.deserializeBinaryFromReader);
      msg.setMedia(value);
      break;
    case 5:
      var value = new proto.rv.data.Graphics.BackgroundEffect;
      reader.readMessage(value,proto.rv.data.Graphics.BackgroundEffect.deserializeBinaryFromReader);
      msg.setBackgroundeffect(value);
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
proto.rv.data.Graphics.Fill.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Fill.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Fill} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Fill.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnable();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getColor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Color.serializeBinaryToWriter
    );
  }
  f = message.getGradient();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.Graphics.Gradient.serializeBinaryToWriter
    );
  }
  f = message.getMedia();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.Media.serializeBinaryToWriter
    );
  }
  f = message.getBackgroundeffect();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.data.Graphics.BackgroundEffect.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool enable = 4;
 * @return {boolean}
 */
proto.rv.data.Graphics.Fill.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Graphics.Fill} returns this
 */
proto.rv.data.Graphics.Fill.prototype.setEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional Color color = 1;
 * @return {?proto.rv.data.Color}
 */
proto.rv.data.Graphics.Fill.prototype.getColor = function() {
  return /** @type{?proto.rv.data.Color} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Color, 1));
};


/**
 * @param {?proto.rv.data.Color|undefined} value
 * @return {!proto.rv.data.Graphics.Fill} returns this
*/
proto.rv.data.Graphics.Fill.prototype.setColor = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.data.Graphics.Fill.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Fill} returns this
 */
proto.rv.data.Graphics.Fill.prototype.clearColor = function() {
  return this.setColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Fill.prototype.hasColor = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Gradient gradient = 2;
 * @return {?proto.rv.data.Graphics.Gradient}
 */
proto.rv.data.Graphics.Fill.prototype.getGradient = function() {
  return /** @type{?proto.rv.data.Graphics.Gradient} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Gradient, 2));
};


/**
 * @param {?proto.rv.data.Graphics.Gradient|undefined} value
 * @return {!proto.rv.data.Graphics.Fill} returns this
*/
proto.rv.data.Graphics.Fill.prototype.setGradient = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.data.Graphics.Fill.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Fill} returns this
 */
proto.rv.data.Graphics.Fill.prototype.clearGradient = function() {
  return this.setGradient(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Fill.prototype.hasGradient = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Media media = 3;
 * @return {?proto.rv.data.Media}
 */
proto.rv.data.Graphics.Fill.prototype.getMedia = function() {
  return /** @type{?proto.rv.data.Media} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Media, 3));
};


/**
 * @param {?proto.rv.data.Media|undefined} value
 * @return {!proto.rv.data.Graphics.Fill} returns this
*/
proto.rv.data.Graphics.Fill.prototype.setMedia = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.data.Graphics.Fill.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Fill} returns this
 */
proto.rv.data.Graphics.Fill.prototype.clearMedia = function() {
  return this.setMedia(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Fill.prototype.hasMedia = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional BackgroundEffect backgroundEffect = 5;
 * @return {?proto.rv.data.Graphics.BackgroundEffect}
 */
proto.rv.data.Graphics.Fill.prototype.getBackgroundeffect = function() {
  return /** @type{?proto.rv.data.Graphics.BackgroundEffect} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.BackgroundEffect, 5));
};


/**
 * @param {?proto.rv.data.Graphics.BackgroundEffect|undefined} value
 * @return {!proto.rv.data.Graphics.Fill} returns this
*/
proto.rv.data.Graphics.Fill.prototype.setBackgroundeffect = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.rv.data.Graphics.Fill.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Fill} returns this
 */
proto.rv.data.Graphics.Fill.prototype.clearBackgroundeffect = function() {
  return this.setBackgroundeffect(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Fill.prototype.hasBackgroundeffect = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.Graphics.BackgroundEffect.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.rv.data.Graphics.BackgroundEffect.EffecttypeCase = {
  EFFECTTYPE_NOT_SET: 0,
  BACKGROUNDBLUR: 2,
  BACKGROUNDINVERT: 3
};

/**
 * @return {proto.rv.data.Graphics.BackgroundEffect.EffecttypeCase}
 */
proto.rv.data.Graphics.BackgroundEffect.prototype.getEffecttypeCase = function() {
  return /** @type {proto.rv.data.Graphics.BackgroundEffect.EffecttypeCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.Graphics.BackgroundEffect.oneofGroups_[0]));
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
proto.rv.data.Graphics.BackgroundEffect.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.BackgroundEffect.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.BackgroundEffect} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.BackgroundEffect.toObject = function(includeInstance, msg) {
  var f, obj = {
backgroundblur: (f = msg.getBackgroundblur()) && proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur.toObject(includeInstance, f),
backgroundinvert: (f = msg.getBackgroundinvert()) && proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Graphics.BackgroundEffect}
 */
proto.rv.data.Graphics.BackgroundEffect.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.BackgroundEffect;
  return proto.rv.data.Graphics.BackgroundEffect.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.BackgroundEffect} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.BackgroundEffect}
 */
proto.rv.data.Graphics.BackgroundEffect.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur;
      reader.readMessage(value,proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur.deserializeBinaryFromReader);
      msg.setBackgroundblur(value);
      break;
    case 3:
      var value = new proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert;
      reader.readMessage(value,proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert.deserializeBinaryFromReader);
      msg.setBackgroundinvert(value);
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
proto.rv.data.Graphics.BackgroundEffect.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.BackgroundEffect.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.BackgroundEffect} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.BackgroundEffect.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBackgroundblur();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur.serializeBinaryToWriter
    );
  }
  f = message.getBackgroundinvert();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert.serializeBinaryToWriter
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
proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur.toObject = function(includeInstance, msg) {
  var f, obj = {
saturation: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
blurAmount: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur}
 */
proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur;
  return proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur}
 */
proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSaturation(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBlurAmount(value);
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
proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSaturation();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getBlurAmount();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double saturation = 1;
 * @return {number}
 */
proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur.prototype.getSaturation = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur} returns this
 */
proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur.prototype.setSaturation = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double blur_amount = 2;
 * @return {number}
 */
proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur.prototype.getBlurAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur} returns this
 */
proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur.prototype.setBlurAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
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
proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert}
 */
proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert;
  return proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert}
 */
proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional BackgroundEffectBlur backgroundBlur = 2;
 * @return {?proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur}
 */
proto.rv.data.Graphics.BackgroundEffect.prototype.getBackgroundblur = function() {
  return /** @type{?proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur, 2));
};


/**
 * @param {?proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectBlur|undefined} value
 * @return {!proto.rv.data.Graphics.BackgroundEffect} returns this
*/
proto.rv.data.Graphics.BackgroundEffect.prototype.setBackgroundblur = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.data.Graphics.BackgroundEffect.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.BackgroundEffect} returns this
 */
proto.rv.data.Graphics.BackgroundEffect.prototype.clearBackgroundblur = function() {
  return this.setBackgroundblur(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.BackgroundEffect.prototype.hasBackgroundblur = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional BackgroundEffectInvert backgroundInvert = 3;
 * @return {?proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert}
 */
proto.rv.data.Graphics.BackgroundEffect.prototype.getBackgroundinvert = function() {
  return /** @type{?proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert, 3));
};


/**
 * @param {?proto.rv.data.Graphics.BackgroundEffect.BackgroundEffectInvert|undefined} value
 * @return {!proto.rv.data.Graphics.BackgroundEffect} returns this
*/
proto.rv.data.Graphics.BackgroundEffect.prototype.setBackgroundinvert = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.data.Graphics.BackgroundEffect.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.BackgroundEffect} returns this
 */
proto.rv.data.Graphics.BackgroundEffect.prototype.clearBackgroundinvert = function() {
  return this.setBackgroundinvert(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.BackgroundEffect.prototype.hasBackgroundinvert = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.Graphics.Gradient.repeatedFields_ = [4];



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
proto.rv.data.Graphics.Gradient.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Gradient.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Gradient} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Gradient.toObject = function(includeInstance, msg) {
  var f, obj = {
type: jspb.Message.getFieldWithDefault(msg, 1, 0),
angle: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
length: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
stopsList: jspb.Message.toObjectList(msg.getStopsList(),
    proto.rv.data.Graphics.Gradient.ColorStop.toObject, includeInstance)
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
 * @return {!proto.rv.data.Graphics.Gradient}
 */
proto.rv.data.Graphics.Gradient.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Gradient;
  return proto.rv.data.Graphics.Gradient.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Gradient} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Gradient}
 */
proto.rv.data.Graphics.Gradient.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Graphics.Gradient.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAngle(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLength(value);
      break;
    case 4:
      var value = new proto.rv.data.Graphics.Gradient.ColorStop;
      reader.readMessage(value,proto.rv.data.Graphics.Gradient.ColorStop.deserializeBinaryFromReader);
      msg.addStops(value);
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
proto.rv.data.Graphics.Gradient.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Gradient.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Gradient} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Gradient.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAngle();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getLength();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getStopsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.rv.data.Graphics.Gradient.ColorStop.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Graphics.Gradient.Type = {
  TYPE_LINEAR: 0,
  TYPE_RADIAL: 1,
  TYPE_ANGLE: 2
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
proto.rv.data.Graphics.Gradient.ColorStop.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Gradient.ColorStop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Gradient.ColorStop} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Gradient.ColorStop.toObject = function(includeInstance, msg) {
  var f, obj = {
color: (f = msg.getColor()) && proto.rv.data.Color.toObject(includeInstance, f),
position: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
blendPoint: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.rv.data.Graphics.Gradient.ColorStop}
 */
proto.rv.data.Graphics.Gradient.ColorStop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Gradient.ColorStop;
  return proto.rv.data.Graphics.Gradient.ColorStop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Gradient.ColorStop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Gradient.ColorStop}
 */
proto.rv.data.Graphics.Gradient.ColorStop.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Color;
      reader.readMessage(value,proto.rv.data.Color.deserializeBinaryFromReader);
      msg.setColor(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPosition(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBlendPoint(value);
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
proto.rv.data.Graphics.Gradient.ColorStop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Gradient.ColorStop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Gradient.ColorStop} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Gradient.ColorStop.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Color.serializeBinaryToWriter
    );
  }
  f = message.getPosition();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getBlendPoint();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional Color color = 1;
 * @return {?proto.rv.data.Color}
 */
proto.rv.data.Graphics.Gradient.ColorStop.prototype.getColor = function() {
  return /** @type{?proto.rv.data.Color} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Color, 1));
};


/**
 * @param {?proto.rv.data.Color|undefined} value
 * @return {!proto.rv.data.Graphics.Gradient.ColorStop} returns this
*/
proto.rv.data.Graphics.Gradient.ColorStop.prototype.setColor = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Gradient.ColorStop} returns this
 */
proto.rv.data.Graphics.Gradient.ColorStop.prototype.clearColor = function() {
  return this.setColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Gradient.ColorStop.prototype.hasColor = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double position = 2;
 * @return {number}
 */
proto.rv.data.Graphics.Gradient.ColorStop.prototype.getPosition = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Gradient.ColorStop} returns this
 */
proto.rv.data.Graphics.Gradient.ColorStop.prototype.setPosition = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double blend_point = 3;
 * @return {number}
 */
proto.rv.data.Graphics.Gradient.ColorStop.prototype.getBlendPoint = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Gradient.ColorStop} returns this
 */
proto.rv.data.Graphics.Gradient.ColorStop.prototype.setBlendPoint = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional Type type = 1;
 * @return {!proto.rv.data.Graphics.Gradient.Type}
 */
proto.rv.data.Graphics.Gradient.prototype.getType = function() {
  return /** @type {!proto.rv.data.Graphics.Gradient.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Graphics.Gradient.Type} value
 * @return {!proto.rv.data.Graphics.Gradient} returns this
 */
proto.rv.data.Graphics.Gradient.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional double angle = 2;
 * @return {number}
 */
proto.rv.data.Graphics.Gradient.prototype.getAngle = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Gradient} returns this
 */
proto.rv.data.Graphics.Gradient.prototype.setAngle = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double length = 3;
 * @return {number}
 */
proto.rv.data.Graphics.Gradient.prototype.getLength = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Gradient} returns this
 */
proto.rv.data.Graphics.Gradient.prototype.setLength = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * repeated ColorStop stops = 4;
 * @return {!Array<!proto.rv.data.Graphics.Gradient.ColorStop>}
 */
proto.rv.data.Graphics.Gradient.prototype.getStopsList = function() {
  return /** @type{!Array<!proto.rv.data.Graphics.Gradient.ColorStop>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.Graphics.Gradient.ColorStop, 4));
};


/**
 * @param {!Array<!proto.rv.data.Graphics.Gradient.ColorStop>} value
 * @return {!proto.rv.data.Graphics.Gradient} returns this
*/
proto.rv.data.Graphics.Gradient.prototype.setStopsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.rv.data.Graphics.Gradient.ColorStop=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.Graphics.Gradient.ColorStop}
 */
proto.rv.data.Graphics.Gradient.prototype.addStops = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.rv.data.Graphics.Gradient.ColorStop, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Graphics.Gradient} returns this
 */
proto.rv.data.Graphics.Gradient.prototype.clearStopsList = function() {
  return this.setStopsList([]);
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
proto.rv.data.Graphics.Shadow.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Shadow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Shadow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Shadow.toObject = function(includeInstance, msg) {
  var f, obj = {
style: jspb.Message.getFieldWithDefault(msg, 1, 0),
angle: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
offset: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
radius: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
color: (f = msg.getColor()) && proto.rv.data.Color.toObject(includeInstance, f),
opacity: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
enable: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
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
 * @return {!proto.rv.data.Graphics.Shadow}
 */
proto.rv.data.Graphics.Shadow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Shadow;
  return proto.rv.data.Graphics.Shadow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Shadow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Shadow}
 */
proto.rv.data.Graphics.Shadow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Graphics.Shadow.Style} */ (reader.readEnum());
      msg.setStyle(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAngle(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOffset(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRadius(value);
      break;
    case 5:
      var value = new proto.rv.data.Color;
      reader.readMessage(value,proto.rv.data.Color.deserializeBinaryFromReader);
      msg.setColor(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOpacity(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
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
proto.rv.data.Graphics.Shadow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Shadow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Shadow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Shadow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStyle();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAngle();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getRadius();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getColor();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.data.Color.serializeBinaryToWriter
    );
  }
  f = message.getOpacity();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getEnable();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Graphics.Shadow.Style = {
  STYLE_DROP: 0
};

/**
 * optional Style style = 1;
 * @return {!proto.rv.data.Graphics.Shadow.Style}
 */
proto.rv.data.Graphics.Shadow.prototype.getStyle = function() {
  return /** @type {!proto.rv.data.Graphics.Shadow.Style} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Graphics.Shadow.Style} value
 * @return {!proto.rv.data.Graphics.Shadow} returns this
 */
proto.rv.data.Graphics.Shadow.prototype.setStyle = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional double angle = 2;
 * @return {number}
 */
proto.rv.data.Graphics.Shadow.prototype.getAngle = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Shadow} returns this
 */
proto.rv.data.Graphics.Shadow.prototype.setAngle = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double offset = 3;
 * @return {number}
 */
proto.rv.data.Graphics.Shadow.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Shadow} returns this
 */
proto.rv.data.Graphics.Shadow.prototype.setOffset = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double radius = 4;
 * @return {number}
 */
proto.rv.data.Graphics.Shadow.prototype.getRadius = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Shadow} returns this
 */
proto.rv.data.Graphics.Shadow.prototype.setRadius = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional Color color = 5;
 * @return {?proto.rv.data.Color}
 */
proto.rv.data.Graphics.Shadow.prototype.getColor = function() {
  return /** @type{?proto.rv.data.Color} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Color, 5));
};


/**
 * @param {?proto.rv.data.Color|undefined} value
 * @return {!proto.rv.data.Graphics.Shadow} returns this
*/
proto.rv.data.Graphics.Shadow.prototype.setColor = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Shadow} returns this
 */
proto.rv.data.Graphics.Shadow.prototype.clearColor = function() {
  return this.setColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Shadow.prototype.hasColor = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double opacity = 6;
 * @return {number}
 */
proto.rv.data.Graphics.Shadow.prototype.getOpacity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Shadow} returns this
 */
proto.rv.data.Graphics.Shadow.prototype.setOpacity = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional bool enable = 7;
 * @return {boolean}
 */
proto.rv.data.Graphics.Shadow.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Graphics.Shadow} returns this
 */
proto.rv.data.Graphics.Shadow.prototype.setEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.Graphics.Stroke.repeatedFields_ = [4];



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
proto.rv.data.Graphics.Stroke.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Stroke.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Stroke} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Stroke.toObject = function(includeInstance, msg) {
  var f, obj = {
style: jspb.Message.getFieldWithDefault(msg, 1, 0),
width: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
color: (f = msg.getColor()) && proto.rv.data.Color.toObject(includeInstance, f),
patternList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 4)) == null ? undefined : f,
enable: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.rv.data.Graphics.Stroke}
 */
proto.rv.data.Graphics.Stroke.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Stroke;
  return proto.rv.data.Graphics.Stroke.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Stroke} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Stroke}
 */
proto.rv.data.Graphics.Stroke.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Graphics.Stroke.Style} */ (reader.readEnum());
      msg.setStyle(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWidth(value);
      break;
    case 3:
      var value = new proto.rv.data.Color;
      reader.readMessage(value,proto.rv.data.Color.deserializeBinaryFromReader);
      msg.setColor(value);
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPattern(values[i]);
      }
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
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
proto.rv.data.Graphics.Stroke.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Stroke.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Stroke} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Stroke.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStyle();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getWidth();
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
  f = message.getPatternList();
  if (f.length > 0) {
    writer.writePackedDouble(
      4,
      f
    );
  }
  f = message.getEnable();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Graphics.Stroke.Style = {
  STYLE_SOLID_LINE: 0,
  STYLE_SQUARE_DASH: 1,
  STYLE_SHORT_DASH: 2,
  STYLE_LONG_DASH: 3
};

/**
 * optional Style style = 1;
 * @return {!proto.rv.data.Graphics.Stroke.Style}
 */
proto.rv.data.Graphics.Stroke.prototype.getStyle = function() {
  return /** @type {!proto.rv.data.Graphics.Stroke.Style} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Graphics.Stroke.Style} value
 * @return {!proto.rv.data.Graphics.Stroke} returns this
 */
proto.rv.data.Graphics.Stroke.prototype.setStyle = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional double width = 2;
 * @return {number}
 */
proto.rv.data.Graphics.Stroke.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Stroke} returns this
 */
proto.rv.data.Graphics.Stroke.prototype.setWidth = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional Color color = 3;
 * @return {?proto.rv.data.Color}
 */
proto.rv.data.Graphics.Stroke.prototype.getColor = function() {
  return /** @type{?proto.rv.data.Color} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Color, 3));
};


/**
 * @param {?proto.rv.data.Color|undefined} value
 * @return {!proto.rv.data.Graphics.Stroke} returns this
*/
proto.rv.data.Graphics.Stroke.prototype.setColor = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Stroke} returns this
 */
proto.rv.data.Graphics.Stroke.prototype.clearColor = function() {
  return this.setColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Stroke.prototype.hasColor = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated double pattern = 4;
 * @return {!Array<number>}
 */
proto.rv.data.Graphics.Stroke.prototype.getPatternList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.rv.data.Graphics.Stroke} returns this
 */
proto.rv.data.Graphics.Stroke.prototype.setPatternList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.rv.data.Graphics.Stroke} returns this
 */
proto.rv.data.Graphics.Stroke.prototype.addPattern = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Graphics.Stroke} returns this
 */
proto.rv.data.Graphics.Stroke.prototype.clearPatternList = function() {
  return this.setPatternList([]);
};


/**
 * optional bool enable = 5;
 * @return {boolean}
 */
proto.rv.data.Graphics.Stroke.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Graphics.Stroke} returns this
 */
proto.rv.data.Graphics.Stroke.prototype.setEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
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
proto.rv.data.Graphics.Feather.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Feather.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Feather} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Feather.toObject = function(includeInstance, msg) {
  var f, obj = {
style: jspb.Message.getFieldWithDefault(msg, 1, 0),
radius: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
enable: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.rv.data.Graphics.Feather}
 */
proto.rv.data.Graphics.Feather.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Feather;
  return proto.rv.data.Graphics.Feather.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Feather} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Feather}
 */
proto.rv.data.Graphics.Feather.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Graphics.Feather.Style} */ (reader.readEnum());
      msg.setStyle(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRadius(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
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
proto.rv.data.Graphics.Feather.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Feather.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Feather} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Feather.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStyle();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getRadius();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getEnable();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Graphics.Feather.Style = {
  STYLE_INSIDE: 0,
  STYLE_CENTER: 1,
  STYLE_OUTSIDE: 2
};

/**
 * optional Style style = 1;
 * @return {!proto.rv.data.Graphics.Feather.Style}
 */
proto.rv.data.Graphics.Feather.prototype.getStyle = function() {
  return /** @type {!proto.rv.data.Graphics.Feather.Style} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Graphics.Feather.Style} value
 * @return {!proto.rv.data.Graphics.Feather} returns this
 */
proto.rv.data.Graphics.Feather.prototype.setStyle = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional double radius = 2;
 * @return {number}
 */
proto.rv.data.Graphics.Feather.prototype.getRadius = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Feather} returns this
 */
proto.rv.data.Graphics.Feather.prototype.setRadius = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional bool enable = 3;
 * @return {boolean}
 */
proto.rv.data.Graphics.Feather.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Graphics.Feather} returns this
 */
proto.rv.data.Graphics.Feather.prototype.setEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
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
proto.rv.data.Graphics.Text.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Text.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Text} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Text.toObject = function(includeInstance, msg) {
  var f, obj = {
attributes: (f = msg.getAttributes()) && proto.rv.data.Graphics.Text.Attributes.toObject(includeInstance, f),
shadow: (f = msg.getShadow()) && proto.rv.data.Graphics.Shadow.toObject(includeInstance, f),
rtfData: msg.getRtfData_asB64(),
verticalAlignment: jspb.Message.getFieldWithDefault(msg, 6, 0),
scaleBehavior: jspb.Message.getFieldWithDefault(msg, 7, 0),
margins: (f = msg.getMargins()) && proto.rv.data.Graphics.EdgeInsets.toObject(includeInstance, f),
isSuperscriptStandardized: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
transform: jspb.Message.getFieldWithDefault(msg, 10, 0),
transformdelimiter: jspb.Message.getFieldWithDefault(msg, 11, ""),
chordPro: (f = msg.getChordPro()) && proto.rv.data.Graphics.Text.ChordPro.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Graphics.Text}
 */
proto.rv.data.Graphics.Text.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Text;
  return proto.rv.data.Graphics.Text.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Text} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Text}
 */
proto.rv.data.Graphics.Text.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto.rv.data.Graphics.Text.Attributes;
      reader.readMessage(value,proto.rv.data.Graphics.Text.Attributes.deserializeBinaryFromReader);
      msg.setAttributes(value);
      break;
    case 4:
      var value = new proto.rv.data.Graphics.Shadow;
      reader.readMessage(value,proto.rv.data.Graphics.Shadow.deserializeBinaryFromReader);
      msg.setShadow(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRtfData(value);
      break;
    case 6:
      var value = /** @type {!proto.rv.data.Graphics.Text.VerticalAlignment} */ (reader.readEnum());
      msg.setVerticalAlignment(value);
      break;
    case 7:
      var value = /** @type {!proto.rv.data.Graphics.Text.ScaleBehavior} */ (reader.readEnum());
      msg.setScaleBehavior(value);
      break;
    case 8:
      var value = new proto.rv.data.Graphics.EdgeInsets;
      reader.readMessage(value,proto.rv.data.Graphics.EdgeInsets.deserializeBinaryFromReader);
      msg.setMargins(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSuperscriptStandardized(value);
      break;
    case 10:
      var value = /** @type {!proto.rv.data.Graphics.Text.Transform} */ (reader.readEnum());
      msg.setTransform(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransformdelimiter(value);
      break;
    case 12:
      var value = new proto.rv.data.Graphics.Text.ChordPro;
      reader.readMessage(value,proto.rv.data.Graphics.Text.ChordPro.deserializeBinaryFromReader);
      msg.setChordPro(value);
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
proto.rv.data.Graphics.Text.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Text.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Text} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Text.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttributes();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.Graphics.Text.Attributes.serializeBinaryToWriter
    );
  }
  f = message.getShadow();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.data.Graphics.Shadow.serializeBinaryToWriter
    );
  }
  f = message.getRtfData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getVerticalAlignment();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getScaleBehavior();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getMargins();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.rv.data.Graphics.EdgeInsets.serializeBinaryToWriter
    );
  }
  f = message.getIsSuperscriptStandardized();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getTransform();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getTransformdelimiter();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getChordPro();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.rv.data.Graphics.Text.ChordPro.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Graphics.Text.VerticalAlignment = {
  VERTICAL_ALIGNMENT_TOP: 0,
  VERTICAL_ALIGNMENT_MIDDLE: 1,
  VERTICAL_ALIGNMENT_BOTTOM: 2
};

/**
 * @enum {number}
 */
proto.rv.data.Graphics.Text.ScaleBehavior = {
  SCALE_BEHAVIOR_NONE: 0,
  SCALE_BEHAVIOR_ADJUST_CONTAINER_HEIGHT: 1,
  SCALE_BEHAVIOR_SCALE_FONT_DOWN: 2,
  SCALE_BEHAVIOR_SCALE_FONT_UP: 3,
  SCALE_BEHAVIOR_SCALE_FONT_UP_DOWN: 4
};

/**
 * @enum {number}
 */
proto.rv.data.Graphics.Text.Transform = {
  TRANSFORM_NONE: 0,
  TRANSFORM_SINGLE_LINE: 1,
  TRANSFORM_ONE_WORD_PER_LINE: 2,
  TRANSFORM_ONE_CHARACTER_PER_LINE: 3,
  TRANSFORM_REPLACE_LINE_RETURNS: 4
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
proto.rv.data.Graphics.Text.LineFillMask.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Text.LineFillMask.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Text.LineFillMask} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Text.LineFillMask.toObject = function(includeInstance, msg) {
  var f, obj = {
enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
heightOffset: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
verticalOffset: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
maskStyle: jspb.Message.getFieldWithDefault(msg, 4, 0),
widthOffset: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
horizontalOffset: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0)
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
 * @return {!proto.rv.data.Graphics.Text.LineFillMask}
 */
proto.rv.data.Graphics.Text.LineFillMask.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Text.LineFillMask;
  return proto.rv.data.Graphics.Text.LineFillMask.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Text.LineFillMask} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Text.LineFillMask}
 */
proto.rv.data.Graphics.Text.LineFillMask.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHeightOffset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVerticalOffset(value);
      break;
    case 4:
      var value = /** @type {!proto.rv.data.Graphics.Text.LineFillMask.LineMaskStyle} */ (reader.readEnum());
      msg.setMaskStyle(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWidthOffset(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHorizontalOffset(value);
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
proto.rv.data.Graphics.Text.LineFillMask.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Text.LineFillMask.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Text.LineFillMask} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Text.LineFillMask.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getHeightOffset();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getVerticalOffset();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getMaskStyle();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getWidthOffset();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getHorizontalOffset();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Graphics.Text.LineFillMask.LineMaskStyle = {
  LINE_MASK_STYLE_FULL_WIDTH: 0,
  LINE_MASK_STYLE_LINE_WIDTH: 1,
  LINE_MASK_STYLE_MAX_LINE_WIDTH: 2
};

/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.LineFillMask.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Graphics.Text.LineFillMask} returns this
 */
proto.rv.data.Graphics.Text.LineFillMask.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional double height_offset = 2;
 * @return {number}
 */
proto.rv.data.Graphics.Text.LineFillMask.prototype.getHeightOffset = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Text.LineFillMask} returns this
 */
proto.rv.data.Graphics.Text.LineFillMask.prototype.setHeightOffset = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double vertical_offset = 3;
 * @return {number}
 */
proto.rv.data.Graphics.Text.LineFillMask.prototype.getVerticalOffset = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Text.LineFillMask} returns this
 */
proto.rv.data.Graphics.Text.LineFillMask.prototype.setVerticalOffset = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional LineMaskStyle mask_style = 4;
 * @return {!proto.rv.data.Graphics.Text.LineFillMask.LineMaskStyle}
 */
proto.rv.data.Graphics.Text.LineFillMask.prototype.getMaskStyle = function() {
  return /** @type {!proto.rv.data.Graphics.Text.LineFillMask.LineMaskStyle} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.rv.data.Graphics.Text.LineFillMask.LineMaskStyle} value
 * @return {!proto.rv.data.Graphics.Text.LineFillMask} returns this
 */
proto.rv.data.Graphics.Text.LineFillMask.prototype.setMaskStyle = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional double width_offset = 5;
 * @return {number}
 */
proto.rv.data.Graphics.Text.LineFillMask.prototype.getWidthOffset = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Text.LineFillMask} returns this
 */
proto.rv.data.Graphics.Text.LineFillMask.prototype.setWidthOffset = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double horizontal_offset = 6;
 * @return {number}
 */
proto.rv.data.Graphics.Text.LineFillMask.prototype.getHorizontalOffset = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Text.LineFillMask} returns this
 */
proto.rv.data.Graphics.Text.LineFillMask.prototype.setHorizontalOffset = function(value) {
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
proto.rv.data.Graphics.Text.GradientFill.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Text.GradientFill.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Text.GradientFill} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Text.GradientFill.toObject = function(includeInstance, msg) {
  var f, obj = {
gradient: (f = msg.getGradient()) && proto.rv.data.Graphics.Gradient.toObject(includeInstance, f),
stretchToDocumentBounds: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.rv.data.Graphics.Text.GradientFill}
 */
proto.rv.data.Graphics.Text.GradientFill.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Text.GradientFill;
  return proto.rv.data.Graphics.Text.GradientFill.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Text.GradientFill} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Text.GradientFill}
 */
proto.rv.data.Graphics.Text.GradientFill.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Graphics.Gradient;
      reader.readMessage(value,proto.rv.data.Graphics.Gradient.deserializeBinaryFromReader);
      msg.setGradient(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStretchToDocumentBounds(value);
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
proto.rv.data.Graphics.Text.GradientFill.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Text.GradientFill.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Text.GradientFill} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Text.GradientFill.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGradient();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Graphics.Gradient.serializeBinaryToWriter
    );
  }
  f = message.getStretchToDocumentBounds();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Gradient gradient = 1;
 * @return {?proto.rv.data.Graphics.Gradient}
 */
proto.rv.data.Graphics.Text.GradientFill.prototype.getGradient = function() {
  return /** @type{?proto.rv.data.Graphics.Gradient} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Gradient, 1));
};


/**
 * @param {?proto.rv.data.Graphics.Gradient|undefined} value
 * @return {!proto.rv.data.Graphics.Text.GradientFill} returns this
*/
proto.rv.data.Graphics.Text.GradientFill.prototype.setGradient = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.GradientFill} returns this
 */
proto.rv.data.Graphics.Text.GradientFill.prototype.clearGradient = function() {
  return this.setGradient(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.GradientFill.prototype.hasGradient = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool stretch_to_document_bounds = 2;
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.GradientFill.prototype.getStretchToDocumentBounds = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Graphics.Text.GradientFill} returns this
 */
proto.rv.data.Graphics.Text.GradientFill.prototype.setStretchToDocumentBounds = function(value) {
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
proto.rv.data.Graphics.Text.CutOutFill.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Text.CutOutFill.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Text.CutOutFill} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Text.CutOutFill.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.data.Graphics.Text.CutOutFill}
 */
proto.rv.data.Graphics.Text.CutOutFill.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Text.CutOutFill;
  return proto.rv.data.Graphics.Text.CutOutFill.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Text.CutOutFill} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Text.CutOutFill}
 */
proto.rv.data.Graphics.Text.CutOutFill.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.data.Graphics.Text.CutOutFill.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Text.CutOutFill.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Text.CutOutFill} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Text.CutOutFill.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.data.Graphics.Text.MediaFill.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Text.MediaFill.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Text.MediaFill} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Text.MediaFill.toObject = function(includeInstance, msg) {
  var f, obj = {
media: (f = msg.getMedia()) && proto.rv.data.Media.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Graphics.Text.MediaFill}
 */
proto.rv.data.Graphics.Text.MediaFill.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Text.MediaFill;
  return proto.rv.data.Graphics.Text.MediaFill.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Text.MediaFill} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Text.MediaFill}
 */
proto.rv.data.Graphics.Text.MediaFill.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Media;
      reader.readMessage(value,proto.rv.data.Media.deserializeBinaryFromReader);
      msg.setMedia(value);
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
proto.rv.data.Graphics.Text.MediaFill.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Text.MediaFill.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Text.MediaFill} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Text.MediaFill.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMedia();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Media.serializeBinaryToWriter
    );
  }
};


/**
 * optional Media media = 1;
 * @return {?proto.rv.data.Media}
 */
proto.rv.data.Graphics.Text.MediaFill.prototype.getMedia = function() {
  return /** @type{?proto.rv.data.Media} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Media, 1));
};


/**
 * @param {?proto.rv.data.Media|undefined} value
 * @return {!proto.rv.data.Graphics.Text.MediaFill} returns this
*/
proto.rv.data.Graphics.Text.MediaFill.prototype.setMedia = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.MediaFill} returns this
 */
proto.rv.data.Graphics.Text.MediaFill.prototype.clearMedia = function() {
  return this.setMedia(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.MediaFill.prototype.hasMedia = function() {
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
proto.rv.data.Graphics.Text.ChordPro.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Text.ChordPro.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Text.ChordPro} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Text.ChordPro.toObject = function(includeInstance, msg) {
  var f, obj = {
enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
notation: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.rv.data.Graphics.Text.ChordPro}
 */
proto.rv.data.Graphics.Text.ChordPro.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Text.ChordPro;
  return proto.rv.data.Graphics.Text.ChordPro.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Text.ChordPro} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Text.ChordPro}
 */
proto.rv.data.Graphics.Text.ChordPro.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = /** @type {!proto.rv.data.Graphics.Text.ChordPro.Notation} */ (reader.readEnum());
      msg.setNotation(value);
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
proto.rv.data.Graphics.Text.ChordPro.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Text.ChordPro.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Text.ChordPro} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Text.ChordPro.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getNotation();
  if (f !== 0.0) {
    writer.writeEnum(
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
 * @enum {number}
 */
proto.rv.data.Graphics.Text.ChordPro.Notation = {
  NOTATION_CHORDS: 0,
  NOTATION_NUMBERS: 1,
  NOTATION_NUMERALS: 2,
  NOTATION_DO_RE_MI: 3
};

/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.ChordPro.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Graphics.Text.ChordPro} returns this
 */
proto.rv.data.Graphics.Text.ChordPro.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional Notation notation = 2;
 * @return {!proto.rv.data.Graphics.Text.ChordPro.Notation}
 */
proto.rv.data.Graphics.Text.ChordPro.prototype.getNotation = function() {
  return /** @type {!proto.rv.data.Graphics.Text.ChordPro.Notation} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.data.Graphics.Text.ChordPro.Notation} value
 * @return {!proto.rv.data.Graphics.Text.ChordPro} returns this
 */
proto.rv.data.Graphics.Text.ChordPro.prototype.setNotation = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Color color = 3;
 * @return {?proto.rv.data.Color}
 */
proto.rv.data.Graphics.Text.ChordPro.prototype.getColor = function() {
  return /** @type{?proto.rv.data.Color} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Color, 3));
};


/**
 * @param {?proto.rv.data.Color|undefined} value
 * @return {!proto.rv.data.Graphics.Text.ChordPro} returns this
*/
proto.rv.data.Graphics.Text.ChordPro.prototype.setColor = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.ChordPro} returns this
 */
proto.rv.data.Graphics.Text.ChordPro.prototype.clearColor = function() {
  return this.setColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.ChordPro.prototype.hasColor = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.Graphics.Text.Attributes.repeatedFields_ = [13];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.Graphics.Text.Attributes.oneofGroups_ = [[3,14,16,17,18]];

/**
 * @enum {number}
 */
proto.rv.data.Graphics.Text.Attributes.FillCase = {
  FILL_NOT_SET: 0,
  TEXT_SOLID_FILL: 3,
  TEXT_GRADIENT_FILL: 14,
  CUT_OUT_FILL: 16,
  MEDIA_FILL: 17,
  BACKGROUND_EFFECT: 18
};

/**
 * @return {proto.rv.data.Graphics.Text.Attributes.FillCase}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.getFillCase = function() {
  return /** @type {proto.rv.data.Graphics.Text.Attributes.FillCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.Graphics.Text.Attributes.oneofGroups_[0]));
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
proto.rv.data.Graphics.Text.Attributes.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Text.Attributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Text.Attributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Text.Attributes.toObject = function(includeInstance, msg) {
  var f, obj = {
font: (f = msg.getFont()) && proto.rv.data.Font.toObject(includeInstance, f),
capitalization: jspb.Message.getFieldWithDefault(msg, 2, 0),
underlineStyle: (f = msg.getUnderlineStyle()) && proto.rv.data.Graphics.Text.Attributes.Underline.toObject(includeInstance, f),
underlineColor: (f = msg.getUnderlineColor()) && proto.rv.data.Color.toObject(includeInstance, f),
paragraphStyle: (f = msg.getParagraphStyle()) && proto.rv.data.Graphics.Text.Attributes.Paragraph.toObject(includeInstance, f),
kerning: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
superscript: jspb.Message.getFieldWithDefault(msg, 8, 0),
strikethroughStyle: (f = msg.getStrikethroughStyle()) && proto.rv.data.Graphics.Text.Attributes.Underline.toObject(includeInstance, f),
strikethroughColor: (f = msg.getStrikethroughColor()) && proto.rv.data.Color.toObject(includeInstance, f),
strokeWidth: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
strokeColor: (f = msg.getStrokeColor()) && proto.rv.data.Color.toObject(includeInstance, f),
customAttributesList: jspb.Message.toObjectList(msg.getCustomAttributesList(),
    proto.rv.data.Graphics.Text.Attributes.CustomAttribute.toObject, includeInstance),
backgroundColor: (f = msg.getBackgroundColor()) && proto.rv.data.Color.toObject(includeInstance, f),
textSolidFill: (f = msg.getTextSolidFill()) && proto.rv.data.Color.toObject(includeInstance, f),
textGradientFill: (f = msg.getTextGradientFill()) && proto.rv.data.Graphics.Text.GradientFill.toObject(includeInstance, f),
cutOutFill: (f = msg.getCutOutFill()) && proto.rv.data.Graphics.Text.CutOutFill.toObject(includeInstance, f),
mediaFill: (f = msg.getMediaFill()) && proto.rv.data.Graphics.Text.MediaFill.toObject(includeInstance, f),
backgroundEffect: (f = msg.getBackgroundEffect()) && proto.rv.data.Graphics.BackgroundEffect.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Graphics.Text.Attributes}
 */
proto.rv.data.Graphics.Text.Attributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Text.Attributes;
  return proto.rv.data.Graphics.Text.Attributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Text.Attributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Text.Attributes}
 */
proto.rv.data.Graphics.Text.Attributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Font;
      reader.readMessage(value,proto.rv.data.Font.deserializeBinaryFromReader);
      msg.setFont(value);
      break;
    case 2:
      var value = /** @type {!proto.rv.data.Graphics.Text.Attributes.Capitalization} */ (reader.readEnum());
      msg.setCapitalization(value);
      break;
    case 4:
      var value = new proto.rv.data.Graphics.Text.Attributes.Underline;
      reader.readMessage(value,proto.rv.data.Graphics.Text.Attributes.Underline.deserializeBinaryFromReader);
      msg.setUnderlineStyle(value);
      break;
    case 5:
      var value = new proto.rv.data.Color;
      reader.readMessage(value,proto.rv.data.Color.deserializeBinaryFromReader);
      msg.setUnderlineColor(value);
      break;
    case 6:
      var value = new proto.rv.data.Graphics.Text.Attributes.Paragraph;
      reader.readMessage(value,proto.rv.data.Graphics.Text.Attributes.Paragraph.deserializeBinaryFromReader);
      msg.setParagraphStyle(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setKerning(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSuperscript(value);
      break;
    case 9:
      var value = new proto.rv.data.Graphics.Text.Attributes.Underline;
      reader.readMessage(value,proto.rv.data.Graphics.Text.Attributes.Underline.deserializeBinaryFromReader);
      msg.setStrikethroughStyle(value);
      break;
    case 10:
      var value = new proto.rv.data.Color;
      reader.readMessage(value,proto.rv.data.Color.deserializeBinaryFromReader);
      msg.setStrikethroughColor(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStrokeWidth(value);
      break;
    case 12:
      var value = new proto.rv.data.Color;
      reader.readMessage(value,proto.rv.data.Color.deserializeBinaryFromReader);
      msg.setStrokeColor(value);
      break;
    case 13:
      var value = new proto.rv.data.Graphics.Text.Attributes.CustomAttribute;
      reader.readMessage(value,proto.rv.data.Graphics.Text.Attributes.CustomAttribute.deserializeBinaryFromReader);
      msg.addCustomAttributes(value);
      break;
    case 15:
      var value = new proto.rv.data.Color;
      reader.readMessage(value,proto.rv.data.Color.deserializeBinaryFromReader);
      msg.setBackgroundColor(value);
      break;
    case 3:
      var value = new proto.rv.data.Color;
      reader.readMessage(value,proto.rv.data.Color.deserializeBinaryFromReader);
      msg.setTextSolidFill(value);
      break;
    case 14:
      var value = new proto.rv.data.Graphics.Text.GradientFill;
      reader.readMessage(value,proto.rv.data.Graphics.Text.GradientFill.deserializeBinaryFromReader);
      msg.setTextGradientFill(value);
      break;
    case 16:
      var value = new proto.rv.data.Graphics.Text.CutOutFill;
      reader.readMessage(value,proto.rv.data.Graphics.Text.CutOutFill.deserializeBinaryFromReader);
      msg.setCutOutFill(value);
      break;
    case 17:
      var value = new proto.rv.data.Graphics.Text.MediaFill;
      reader.readMessage(value,proto.rv.data.Graphics.Text.MediaFill.deserializeBinaryFromReader);
      msg.setMediaFill(value);
      break;
    case 18:
      var value = new proto.rv.data.Graphics.BackgroundEffect;
      reader.readMessage(value,proto.rv.data.Graphics.BackgroundEffect.deserializeBinaryFromReader);
      msg.setBackgroundEffect(value);
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
proto.rv.data.Graphics.Text.Attributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Text.Attributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Text.Attributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Text.Attributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFont();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Font.serializeBinaryToWriter
    );
  }
  f = message.getCapitalization();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getUnderlineStyle();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.data.Graphics.Text.Attributes.Underline.serializeBinaryToWriter
    );
  }
  f = message.getUnderlineColor();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.data.Color.serializeBinaryToWriter
    );
  }
  f = message.getParagraphStyle();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.rv.data.Graphics.Text.Attributes.Paragraph.serializeBinaryToWriter
    );
  }
  f = message.getKerning();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getSuperscript();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getStrikethroughStyle();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.rv.data.Graphics.Text.Attributes.Underline.serializeBinaryToWriter
    );
  }
  f = message.getStrikethroughColor();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.rv.data.Color.serializeBinaryToWriter
    );
  }
  f = message.getStrokeWidth();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getStrokeColor();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.rv.data.Color.serializeBinaryToWriter
    );
  }
  f = message.getCustomAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.rv.data.Graphics.Text.Attributes.CustomAttribute.serializeBinaryToWriter
    );
  }
  f = message.getBackgroundColor();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.rv.data.Color.serializeBinaryToWriter
    );
  }
  f = message.getTextSolidFill();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.Color.serializeBinaryToWriter
    );
  }
  f = message.getTextGradientFill();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.rv.data.Graphics.Text.GradientFill.serializeBinaryToWriter
    );
  }
  f = message.getCutOutFill();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.rv.data.Graphics.Text.CutOutFill.serializeBinaryToWriter
    );
  }
  f = message.getMediaFill();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.rv.data.Graphics.Text.MediaFill.serializeBinaryToWriter
    );
  }
  f = message.getBackgroundEffect();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.rv.data.Graphics.BackgroundEffect.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Graphics.Text.Attributes.Capitalization = {
  CAPITALIZATION_NONE: 0,
  CAPITALIZATION_ALL_CAPS: 1,
  CAPITALIZATION_SMALL_CAPS: 2,
  CAPITALIZATION_TITLE_CASE: 3,
  CAPITALIZATION_START_CASE: 4
};

/**
 * @enum {number}
 */
proto.rv.data.Graphics.Text.Attributes.Alignment = {
  ALIGNMENT_LEFT: 0,
  ALIGNMENT_RIGHT: 1,
  ALIGNMENT_CENTER: 2,
  ALIGNMENT_JUSTIFIED: 3,
  ALIGNMENT_NATURAL: 4
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
proto.rv.data.Graphics.Text.Attributes.Underline.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Text.Attributes.Underline.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Text.Attributes.Underline} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Text.Attributes.Underline.toObject = function(includeInstance, msg) {
  var f, obj = {
style: jspb.Message.getFieldWithDefault(msg, 1, 0),
pattern: jspb.Message.getFieldWithDefault(msg, 2, 0),
byWord: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.rv.data.Graphics.Text.Attributes.Underline}
 */
proto.rv.data.Graphics.Text.Attributes.Underline.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Text.Attributes.Underline;
  return proto.rv.data.Graphics.Text.Attributes.Underline.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Text.Attributes.Underline} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Text.Attributes.Underline}
 */
proto.rv.data.Graphics.Text.Attributes.Underline.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Graphics.Text.Attributes.Underline.Style} */ (reader.readEnum());
      msg.setStyle(value);
      break;
    case 2:
      var value = /** @type {!proto.rv.data.Graphics.Text.Attributes.Underline.Pattern} */ (reader.readEnum());
      msg.setPattern(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setByWord(value);
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
proto.rv.data.Graphics.Text.Attributes.Underline.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Text.Attributes.Underline.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Text.Attributes.Underline} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Text.Attributes.Underline.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStyle();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPattern();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getByWord();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Graphics.Text.Attributes.Underline.Style = {
  STYLE_NONE: 0,
  STYLE_SINGLE: 1,
  STYLE_THICK: 2,
  STYLE_DOUBLE: 3
};

/**
 * @enum {number}
 */
proto.rv.data.Graphics.Text.Attributes.Underline.Pattern = {
  PATTERN_SOLID: 0,
  PATTERN_DOT: 1,
  PATTERN_DASH: 2,
  PATTERN_DASH_DOT: 3,
  PATTERN_DASH_DOT_DOT: 4
};

/**
 * optional Style style = 1;
 * @return {!proto.rv.data.Graphics.Text.Attributes.Underline.Style}
 */
proto.rv.data.Graphics.Text.Attributes.Underline.prototype.getStyle = function() {
  return /** @type {!proto.rv.data.Graphics.Text.Attributes.Underline.Style} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Graphics.Text.Attributes.Underline.Style} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.Underline} returns this
 */
proto.rv.data.Graphics.Text.Attributes.Underline.prototype.setStyle = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Pattern pattern = 2;
 * @return {!proto.rv.data.Graphics.Text.Attributes.Underline.Pattern}
 */
proto.rv.data.Graphics.Text.Attributes.Underline.prototype.getPattern = function() {
  return /** @type {!proto.rv.data.Graphics.Text.Attributes.Underline.Pattern} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.data.Graphics.Text.Attributes.Underline.Pattern} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.Underline} returns this
 */
proto.rv.data.Graphics.Text.Attributes.Underline.prototype.setPattern = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bool by_word = 3;
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.Underline.prototype.getByWord = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.Underline} returns this
 */
proto.rv.data.Graphics.Text.Attributes.Underline.prototype.setByWord = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.repeatedFields_ = [11,14];



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
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Text.Attributes.Paragraph.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Text.Attributes.Paragraph} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.toObject = function(includeInstance, msg) {
  var f, obj = {
alignment: jspb.Message.getFieldWithDefault(msg, 1, 0),
firstLineHeadIndent: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
headIndent: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
tailIndent: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
lineHeightMultiple: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
maximumLineHeight: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
minimumLineHeight: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
lineSpacing: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
paragraphSpacing: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
paragraphSpacingBefore: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
tabStopsList: jspb.Message.toObjectList(msg.getTabStopsList(),
    proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop.toObject, includeInstance),
defaultTabInterval: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
textList: (f = msg.getTextList()) && proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.toObject(includeInstance, f),
textListsList: jspb.Message.toObjectList(msg.getTextListsList(),
    proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.toObject, includeInstance)
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
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Text.Attributes.Paragraph;
  return proto.rv.data.Graphics.Text.Attributes.Paragraph.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Text.Attributes.Paragraph} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Graphics.Text.Attributes.Alignment} */ (reader.readEnum());
      msg.setAlignment(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFirstLineHeadIndent(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHeadIndent(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTailIndent(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLineHeightMultiple(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaximumLineHeight(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMinimumLineHeight(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLineSpacing(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setParagraphSpacing(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setParagraphSpacingBefore(value);
      break;
    case 11:
      var value = new proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop;
      reader.readMessage(value,proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop.deserializeBinaryFromReader);
      msg.addTabStops(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDefaultTabInterval(value);
      break;
    case 13:
      var value = new proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList;
      reader.readMessage(value,proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.deserializeBinaryFromReader);
      msg.setTextList(value);
      break;
    case 14:
      var value = new proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList;
      reader.readMessage(value,proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.deserializeBinaryFromReader);
      msg.addTextLists(value);
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
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Text.Attributes.Paragraph.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Text.Attributes.Paragraph} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlignment();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getFirstLineHeadIndent();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getHeadIndent();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getTailIndent();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getLineHeightMultiple();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getMaximumLineHeight();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getMinimumLineHeight();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getLineSpacing();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getParagraphSpacing();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getParagraphSpacingBefore();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getTabStopsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop.serializeBinaryToWriter
    );
  }
  f = message.getDefaultTabInterval();
  if (f !== 0.0) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = message.getTextList();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.serializeBinaryToWriter
    );
  }
  f = message.getTextListsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.serializeBinaryToWriter
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
proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop.toObject = function(includeInstance, msg) {
  var f, obj = {
location: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
alignment: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop;
  return proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLocation(value);
      break;
    case 2:
      var value = /** @type {!proto.rv.data.Graphics.Text.Attributes.Alignment} */ (reader.readEnum());
      msg.setAlignment(value);
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
proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getAlignment();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional double location = 1;
 * @return {number}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop.prototype.getLocation = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop} returns this
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop.prototype.setLocation = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional Alignment alignment = 2;
 * @return {!proto.rv.data.Graphics.Text.Attributes.Alignment}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop.prototype.getAlignment = function() {
  return /** @type {!proto.rv.data.Graphics.Text.Attributes.Alignment} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.data.Graphics.Text.Attributes.Alignment} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop} returns this
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop.prototype.setAlignment = function(value) {
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
proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.toObject = function(includeInstance, msg) {
  var f, obj = {
isEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
numberType: jspb.Message.getFieldWithDefault(msg, 2, 0),
prefix: jspb.Message.getFieldWithDefault(msg, 3, ""),
postfix: jspb.Message.getFieldWithDefault(msg, 4, ""),
startingNumber: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList;
  return proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEnabled(value);
      break;
    case 2:
      var value = /** @type {!proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.NumberType} */ (reader.readEnum());
      msg.setNumberType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrefix(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostfix(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStartingNumber(value);
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
proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getNumberType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPrefix();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPostfix();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStartingNumber();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.NumberType = {
  NUMBER_TYPE_BOX: 0,
  NUMBER_TYPE_CHECK: 1,
  NUMBER_TYPE_CIRCLE: 2,
  NUMBER_TYPE_DIAMOND: 3,
  NUMBER_TYPE_DISC: 4,
  NUMBER_TYPE_HYPHEN: 5,
  NUMBER_TYPE_SQUARE: 6,
  NUMBER_TYPE_DECIMAL: 7,
  NUMBER_TYPE_LOWERCASE_ALPHA: 8,
  NUMBER_TYPE_UPPERCASE_ALPHA: 9,
  NUMBER_TYPE_LOWERCASE_ROMAN: 10,
  NUMBER_TYPE_UPPERCASE_ROMAN: 11
};

/**
 * optional bool is_enabled = 1;
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.prototype.getIsEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList} returns this
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.prototype.setIsEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional NumberType number_type = 2;
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.NumberType}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.prototype.getNumberType = function() {
  return /** @type {!proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.NumberType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.NumberType} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList} returns this
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.prototype.setNumberType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string prefix = 3;
 * @return {string}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.prototype.getPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList} returns this
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.prototype.setPrefix = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string postfix = 4;
 * @return {string}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.prototype.getPostfix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList} returns this
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.prototype.setPostfix = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 starting_number = 5;
 * @return {number}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.prototype.getStartingNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList} returns this
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList.prototype.setStartingNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional Alignment alignment = 1;
 * @return {!proto.rv.data.Graphics.Text.Attributes.Alignment}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.getAlignment = function() {
  return /** @type {!proto.rv.data.Graphics.Text.Attributes.Alignment} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Graphics.Text.Attributes.Alignment} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph} returns this
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.setAlignment = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional double first_line_head_indent = 2;
 * @return {number}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.getFirstLineHeadIndent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph} returns this
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.setFirstLineHeadIndent = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double head_indent = 3;
 * @return {number}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.getHeadIndent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph} returns this
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.setHeadIndent = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double tail_indent = 4;
 * @return {number}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.getTailIndent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph} returns this
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.setTailIndent = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double line_height_multiple = 5;
 * @return {number}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.getLineHeightMultiple = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph} returns this
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.setLineHeightMultiple = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double maximum_line_height = 6;
 * @return {number}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.getMaximumLineHeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph} returns this
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.setMaximumLineHeight = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double minimum_line_height = 7;
 * @return {number}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.getMinimumLineHeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph} returns this
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.setMinimumLineHeight = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double line_spacing = 8;
 * @return {number}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.getLineSpacing = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph} returns this
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.setLineSpacing = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double paragraph_spacing = 9;
 * @return {number}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.getParagraphSpacing = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph} returns this
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.setParagraphSpacing = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional double paragraph_spacing_before = 10;
 * @return {number}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.getParagraphSpacingBefore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph} returns this
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.setParagraphSpacingBefore = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * repeated TabStop tab_stops = 11;
 * @return {!Array<!proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop>}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.getTabStopsList = function() {
  return /** @type{!Array<!proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop, 11));
};


/**
 * @param {!Array<!proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop>} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph} returns this
*/
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.setTabStopsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.addTabStops = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.rv.data.Graphics.Text.Attributes.Paragraph.TabStop, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph} returns this
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.clearTabStopsList = function() {
  return this.setTabStopsList([]);
};


/**
 * optional double default_tab_interval = 12;
 * @return {number}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.getDefaultTabInterval = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph} returns this
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.setDefaultTabInterval = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional TextList text_list = 13;
 * @return {?proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.getTextList = function() {
  return /** @type{?proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList, 13));
};


/**
 * @param {?proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList|undefined} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph} returns this
*/
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.setTextList = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph} returns this
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.clearTextList = function() {
  return this.setTextList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.hasTextList = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * repeated TextList text_lists = 14;
 * @return {!Array<!proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList>}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.getTextListsList = function() {
  return /** @type{!Array<!proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList, 14));
};


/**
 * @param {!Array<!proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList>} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph} returns this
*/
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.setTextListsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList}
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.addTextLists = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.rv.data.Graphics.Text.Attributes.Paragraph.TextList, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Graphics.Text.Attributes.Paragraph} returns this
 */
proto.rv.data.Graphics.Text.Attributes.Paragraph.prototype.clearTextListsList = function() {
  return this.setTextListsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.oneofGroups_ = [[2,3,4,5,6,7,8,9,10]];

/**
 * @enum {number}
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.AttributeCase = {
  ATTRIBUTE_NOT_SET: 0,
  CAPITALIZATION: 2,
  ORIGINAL_FONT_SIZE: 3,
  FONT_SCALE_FACTOR: 4,
  TEXT_GRADIENT_FILL: 5,
  SHOULD_PRESERVE_FOREGROUND_COLOR: 6,
  CHORD: 7,
  CUT_OUT_FILL: 8,
  MEDIA_FILL: 9,
  BACKGROUND_EFFECT: 10
};

/**
 * @return {proto.rv.data.Graphics.Text.Attributes.CustomAttribute.AttributeCase}
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.getAttributeCase = function() {
  return /** @type {proto.rv.data.Graphics.Text.Attributes.CustomAttribute.AttributeCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.Graphics.Text.Attributes.CustomAttribute.oneofGroups_[0]));
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
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Graphics.Text.Attributes.CustomAttribute.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.toObject = function(includeInstance, msg) {
  var f, obj = {
range: (f = msg.getRange()) && proto.rv.data.IntRange.toObject(includeInstance, f),
capitalization: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
originalFontSize: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
fontScaleFactor: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
textGradientFill: (f = msg.getTextGradientFill()) && proto.rv.data.Graphics.Text.GradientFill.toObject(includeInstance, f),
shouldPreserveForegroundColor: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
chord: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
cutOutFill: (f = msg.getCutOutFill()) && proto.rv.data.Graphics.Text.CutOutFill.toObject(includeInstance, f),
mediaFill: (f = msg.getMediaFill()) && proto.rv.data.Graphics.Text.MediaFill.toObject(includeInstance, f),
backgroundEffect: (f = msg.getBackgroundEffect()) && proto.rv.data.Graphics.BackgroundEffect.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute}
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Graphics.Text.Attributes.CustomAttribute;
  return proto.rv.data.Graphics.Text.Attributes.CustomAttribute.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute}
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.IntRange;
      reader.readMessage(value,proto.rv.data.IntRange.deserializeBinaryFromReader);
      msg.setRange(value);
      break;
    case 2:
      var value = /** @type {!proto.rv.data.Graphics.Text.Attributes.Capitalization} */ (reader.readEnum());
      msg.setCapitalization(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOriginalFontSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFontScaleFactor(value);
      break;
    case 5:
      var value = new proto.rv.data.Graphics.Text.GradientFill;
      reader.readMessage(value,proto.rv.data.Graphics.Text.GradientFill.deserializeBinaryFromReader);
      msg.setTextGradientFill(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShouldPreserveForegroundColor(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setChord(value);
      break;
    case 8:
      var value = new proto.rv.data.Graphics.Text.CutOutFill;
      reader.readMessage(value,proto.rv.data.Graphics.Text.CutOutFill.deserializeBinaryFromReader);
      msg.setCutOutFill(value);
      break;
    case 9:
      var value = new proto.rv.data.Graphics.Text.MediaFill;
      reader.readMessage(value,proto.rv.data.Graphics.Text.MediaFill.deserializeBinaryFromReader);
      msg.setMediaFill(value);
      break;
    case 10:
      var value = new proto.rv.data.Graphics.BackgroundEffect;
      reader.readMessage(value,proto.rv.data.Graphics.BackgroundEffect.deserializeBinaryFromReader);
      msg.setBackgroundEffect(value);
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
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Graphics.Text.Attributes.CustomAttribute.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.IntRange.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.rv.data.Graphics.Text.Attributes.Capitalization} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getTextGradientFill();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.data.Graphics.Text.GradientFill.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCutOutFill();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.rv.data.Graphics.Text.CutOutFill.serializeBinaryToWriter
    );
  }
  f = message.getMediaFill();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.rv.data.Graphics.Text.MediaFill.serializeBinaryToWriter
    );
  }
  f = message.getBackgroundEffect();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.rv.data.Graphics.BackgroundEffect.serializeBinaryToWriter
    );
  }
};


/**
 * optional IntRange range = 1;
 * @return {?proto.rv.data.IntRange}
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.getRange = function() {
  return /** @type{?proto.rv.data.IntRange} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.IntRange, 1));
};


/**
 * @param {?proto.rv.data.IntRange|undefined} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute} returns this
*/
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.setRange = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute} returns this
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.clearRange = function() {
  return this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.hasRange = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Capitalization capitalization = 2;
 * @return {!proto.rv.data.Graphics.Text.Attributes.Capitalization}
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.getCapitalization = function() {
  return /** @type {!proto.rv.data.Graphics.Text.Attributes.Capitalization} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.data.Graphics.Text.Attributes.Capitalization} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute} returns this
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.setCapitalization = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.rv.data.Graphics.Text.Attributes.CustomAttribute.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute} returns this
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.clearCapitalization = function() {
  return jspb.Message.setOneofField(this, 2, proto.rv.data.Graphics.Text.Attributes.CustomAttribute.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.hasCapitalization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double original_font_size = 3;
 * @return {number}
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.getOriginalFontSize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute} returns this
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.setOriginalFontSize = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.rv.data.Graphics.Text.Attributes.CustomAttribute.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute} returns this
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.clearOriginalFontSize = function() {
  return jspb.Message.setOneofField(this, 3, proto.rv.data.Graphics.Text.Attributes.CustomAttribute.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.hasOriginalFontSize = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double font_scale_factor = 4;
 * @return {number}
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.getFontScaleFactor = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute} returns this
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.setFontScaleFactor = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.rv.data.Graphics.Text.Attributes.CustomAttribute.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute} returns this
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.clearFontScaleFactor = function() {
  return jspb.Message.setOneofField(this, 4, proto.rv.data.Graphics.Text.Attributes.CustomAttribute.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.hasFontScaleFactor = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional GradientFill text_gradient_fill = 5;
 * @return {?proto.rv.data.Graphics.Text.GradientFill}
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.getTextGradientFill = function() {
  return /** @type{?proto.rv.data.Graphics.Text.GradientFill} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Text.GradientFill, 5));
};


/**
 * @param {?proto.rv.data.Graphics.Text.GradientFill|undefined} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute} returns this
*/
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.setTextGradientFill = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.rv.data.Graphics.Text.Attributes.CustomAttribute.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute} returns this
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.clearTextGradientFill = function() {
  return this.setTextGradientFill(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.hasTextGradientFill = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool should_preserve_foreground_color = 6;
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.getShouldPreserveForegroundColor = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute} returns this
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.setShouldPreserveForegroundColor = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.rv.data.Graphics.Text.Attributes.CustomAttribute.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute} returns this
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.clearShouldPreserveForegroundColor = function() {
  return jspb.Message.setOneofField(this, 6, proto.rv.data.Graphics.Text.Attributes.CustomAttribute.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.hasShouldPreserveForegroundColor = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string chord = 7;
 * @return {string}
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.getChord = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute} returns this
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.setChord = function(value) {
  return jspb.Message.setOneofField(this, 7, proto.rv.data.Graphics.Text.Attributes.CustomAttribute.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute} returns this
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.clearChord = function() {
  return jspb.Message.setOneofField(this, 7, proto.rv.data.Graphics.Text.Attributes.CustomAttribute.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.hasChord = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional CutOutFill cut_out_fill = 8;
 * @return {?proto.rv.data.Graphics.Text.CutOutFill}
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.getCutOutFill = function() {
  return /** @type{?proto.rv.data.Graphics.Text.CutOutFill} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Text.CutOutFill, 8));
};


/**
 * @param {?proto.rv.data.Graphics.Text.CutOutFill|undefined} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute} returns this
*/
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.setCutOutFill = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.rv.data.Graphics.Text.Attributes.CustomAttribute.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute} returns this
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.clearCutOutFill = function() {
  return this.setCutOutFill(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.hasCutOutFill = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional MediaFill media_fill = 9;
 * @return {?proto.rv.data.Graphics.Text.MediaFill}
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.getMediaFill = function() {
  return /** @type{?proto.rv.data.Graphics.Text.MediaFill} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Text.MediaFill, 9));
};


/**
 * @param {?proto.rv.data.Graphics.Text.MediaFill|undefined} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute} returns this
*/
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.setMediaFill = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.rv.data.Graphics.Text.Attributes.CustomAttribute.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute} returns this
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.clearMediaFill = function() {
  return this.setMediaFill(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.hasMediaFill = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional BackgroundEffect background_effect = 10;
 * @return {?proto.rv.data.Graphics.BackgroundEffect}
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.getBackgroundEffect = function() {
  return /** @type{?proto.rv.data.Graphics.BackgroundEffect} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.BackgroundEffect, 10));
};


/**
 * @param {?proto.rv.data.Graphics.BackgroundEffect|undefined} value
 * @return {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute} returns this
*/
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.setBackgroundEffect = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.rv.data.Graphics.Text.Attributes.CustomAttribute.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute} returns this
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.clearBackgroundEffect = function() {
  return this.setBackgroundEffect(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.CustomAttribute.prototype.hasBackgroundEffect = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Font font = 1;
 * @return {?proto.rv.data.Font}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.getFont = function() {
  return /** @type{?proto.rv.data.Font} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Font, 1));
};


/**
 * @param {?proto.rv.data.Font|undefined} value
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
*/
proto.rv.data.Graphics.Text.Attributes.prototype.setFont = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
 */
proto.rv.data.Graphics.Text.Attributes.prototype.clearFont = function() {
  return this.setFont(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.hasFont = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Capitalization capitalization = 2;
 * @return {!proto.rv.data.Graphics.Text.Attributes.Capitalization}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.getCapitalization = function() {
  return /** @type {!proto.rv.data.Graphics.Text.Attributes.Capitalization} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.data.Graphics.Text.Attributes.Capitalization} value
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
 */
proto.rv.data.Graphics.Text.Attributes.prototype.setCapitalization = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Underline underline_style = 4;
 * @return {?proto.rv.data.Graphics.Text.Attributes.Underline}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.getUnderlineStyle = function() {
  return /** @type{?proto.rv.data.Graphics.Text.Attributes.Underline} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Text.Attributes.Underline, 4));
};


/**
 * @param {?proto.rv.data.Graphics.Text.Attributes.Underline|undefined} value
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
*/
proto.rv.data.Graphics.Text.Attributes.prototype.setUnderlineStyle = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
 */
proto.rv.data.Graphics.Text.Attributes.prototype.clearUnderlineStyle = function() {
  return this.setUnderlineStyle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.hasUnderlineStyle = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Color underline_color = 5;
 * @return {?proto.rv.data.Color}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.getUnderlineColor = function() {
  return /** @type{?proto.rv.data.Color} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Color, 5));
};


/**
 * @param {?proto.rv.data.Color|undefined} value
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
*/
proto.rv.data.Graphics.Text.Attributes.prototype.setUnderlineColor = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
 */
proto.rv.data.Graphics.Text.Attributes.prototype.clearUnderlineColor = function() {
  return this.setUnderlineColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.hasUnderlineColor = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Paragraph paragraph_style = 6;
 * @return {?proto.rv.data.Graphics.Text.Attributes.Paragraph}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.getParagraphStyle = function() {
  return /** @type{?proto.rv.data.Graphics.Text.Attributes.Paragraph} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Text.Attributes.Paragraph, 6));
};


/**
 * @param {?proto.rv.data.Graphics.Text.Attributes.Paragraph|undefined} value
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
*/
proto.rv.data.Graphics.Text.Attributes.prototype.setParagraphStyle = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
 */
proto.rv.data.Graphics.Text.Attributes.prototype.clearParagraphStyle = function() {
  return this.setParagraphStyle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.hasParagraphStyle = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double kerning = 7;
 * @return {number}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.getKerning = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
 */
proto.rv.data.Graphics.Text.Attributes.prototype.setKerning = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional int32 superscript = 8;
 * @return {number}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.getSuperscript = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
 */
proto.rv.data.Graphics.Text.Attributes.prototype.setSuperscript = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional Underline strikethrough_style = 9;
 * @return {?proto.rv.data.Graphics.Text.Attributes.Underline}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.getStrikethroughStyle = function() {
  return /** @type{?proto.rv.data.Graphics.Text.Attributes.Underline} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Text.Attributes.Underline, 9));
};


/**
 * @param {?proto.rv.data.Graphics.Text.Attributes.Underline|undefined} value
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
*/
proto.rv.data.Graphics.Text.Attributes.prototype.setStrikethroughStyle = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
 */
proto.rv.data.Graphics.Text.Attributes.prototype.clearStrikethroughStyle = function() {
  return this.setStrikethroughStyle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.hasStrikethroughStyle = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Color strikethrough_color = 10;
 * @return {?proto.rv.data.Color}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.getStrikethroughColor = function() {
  return /** @type{?proto.rv.data.Color} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Color, 10));
};


/**
 * @param {?proto.rv.data.Color|undefined} value
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
*/
proto.rv.data.Graphics.Text.Attributes.prototype.setStrikethroughColor = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
 */
proto.rv.data.Graphics.Text.Attributes.prototype.clearStrikethroughColor = function() {
  return this.setStrikethroughColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.hasStrikethroughColor = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional double stroke_width = 11;
 * @return {number}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.getStrokeWidth = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
 */
proto.rv.data.Graphics.Text.Attributes.prototype.setStrokeWidth = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional Color stroke_color = 12;
 * @return {?proto.rv.data.Color}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.getStrokeColor = function() {
  return /** @type{?proto.rv.data.Color} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Color, 12));
};


/**
 * @param {?proto.rv.data.Color|undefined} value
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
*/
proto.rv.data.Graphics.Text.Attributes.prototype.setStrokeColor = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
 */
proto.rv.data.Graphics.Text.Attributes.prototype.clearStrokeColor = function() {
  return this.setStrokeColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.hasStrokeColor = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * repeated CustomAttribute custom_attributes = 13;
 * @return {!Array<!proto.rv.data.Graphics.Text.Attributes.CustomAttribute>}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.getCustomAttributesList = function() {
  return /** @type{!Array<!proto.rv.data.Graphics.Text.Attributes.CustomAttribute>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.Graphics.Text.Attributes.CustomAttribute, 13));
};


/**
 * @param {!Array<!proto.rv.data.Graphics.Text.Attributes.CustomAttribute>} value
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
*/
proto.rv.data.Graphics.Text.Attributes.prototype.setCustomAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.Graphics.Text.Attributes.CustomAttribute}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.addCustomAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.rv.data.Graphics.Text.Attributes.CustomAttribute, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
 */
proto.rv.data.Graphics.Text.Attributes.prototype.clearCustomAttributesList = function() {
  return this.setCustomAttributesList([]);
};


/**
 * optional Color background_color = 15;
 * @return {?proto.rv.data.Color}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.getBackgroundColor = function() {
  return /** @type{?proto.rv.data.Color} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Color, 15));
};


/**
 * @param {?proto.rv.data.Color|undefined} value
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
*/
proto.rv.data.Graphics.Text.Attributes.prototype.setBackgroundColor = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
 */
proto.rv.data.Graphics.Text.Attributes.prototype.clearBackgroundColor = function() {
  return this.setBackgroundColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.hasBackgroundColor = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional Color text_solid_fill = 3;
 * @return {?proto.rv.data.Color}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.getTextSolidFill = function() {
  return /** @type{?proto.rv.data.Color} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Color, 3));
};


/**
 * @param {?proto.rv.data.Color|undefined} value
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
*/
proto.rv.data.Graphics.Text.Attributes.prototype.setTextSolidFill = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.data.Graphics.Text.Attributes.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
 */
proto.rv.data.Graphics.Text.Attributes.prototype.clearTextSolidFill = function() {
  return this.setTextSolidFill(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.hasTextSolidFill = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional GradientFill text_gradient_fill = 14;
 * @return {?proto.rv.data.Graphics.Text.GradientFill}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.getTextGradientFill = function() {
  return /** @type{?proto.rv.data.Graphics.Text.GradientFill} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Text.GradientFill, 14));
};


/**
 * @param {?proto.rv.data.Graphics.Text.GradientFill|undefined} value
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
*/
proto.rv.data.Graphics.Text.Attributes.prototype.setTextGradientFill = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.rv.data.Graphics.Text.Attributes.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
 */
proto.rv.data.Graphics.Text.Attributes.prototype.clearTextGradientFill = function() {
  return this.setTextGradientFill(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.hasTextGradientFill = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional CutOutFill cut_out_fill = 16;
 * @return {?proto.rv.data.Graphics.Text.CutOutFill}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.getCutOutFill = function() {
  return /** @type{?proto.rv.data.Graphics.Text.CutOutFill} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Text.CutOutFill, 16));
};


/**
 * @param {?proto.rv.data.Graphics.Text.CutOutFill|undefined} value
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
*/
proto.rv.data.Graphics.Text.Attributes.prototype.setCutOutFill = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.rv.data.Graphics.Text.Attributes.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
 */
proto.rv.data.Graphics.Text.Attributes.prototype.clearCutOutFill = function() {
  return this.setCutOutFill(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.hasCutOutFill = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional MediaFill media_fill = 17;
 * @return {?proto.rv.data.Graphics.Text.MediaFill}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.getMediaFill = function() {
  return /** @type{?proto.rv.data.Graphics.Text.MediaFill} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Text.MediaFill, 17));
};


/**
 * @param {?proto.rv.data.Graphics.Text.MediaFill|undefined} value
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
*/
proto.rv.data.Graphics.Text.Attributes.prototype.setMediaFill = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.rv.data.Graphics.Text.Attributes.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
 */
proto.rv.data.Graphics.Text.Attributes.prototype.clearMediaFill = function() {
  return this.setMediaFill(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.hasMediaFill = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional BackgroundEffect background_effect = 18;
 * @return {?proto.rv.data.Graphics.BackgroundEffect}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.getBackgroundEffect = function() {
  return /** @type{?proto.rv.data.Graphics.BackgroundEffect} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.BackgroundEffect, 18));
};


/**
 * @param {?proto.rv.data.Graphics.BackgroundEffect|undefined} value
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
*/
proto.rv.data.Graphics.Text.Attributes.prototype.setBackgroundEffect = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.rv.data.Graphics.Text.Attributes.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text.Attributes} returns this
 */
proto.rv.data.Graphics.Text.Attributes.prototype.clearBackgroundEffect = function() {
  return this.setBackgroundEffect(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.Attributes.prototype.hasBackgroundEffect = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional Attributes attributes = 3;
 * @return {?proto.rv.data.Graphics.Text.Attributes}
 */
proto.rv.data.Graphics.Text.prototype.getAttributes = function() {
  return /** @type{?proto.rv.data.Graphics.Text.Attributes} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Text.Attributes, 3));
};


/**
 * @param {?proto.rv.data.Graphics.Text.Attributes|undefined} value
 * @return {!proto.rv.data.Graphics.Text} returns this
*/
proto.rv.data.Graphics.Text.prototype.setAttributes = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text} returns this
 */
proto.rv.data.Graphics.Text.prototype.clearAttributes = function() {
  return this.setAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.prototype.hasAttributes = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Shadow shadow = 4;
 * @return {?proto.rv.data.Graphics.Shadow}
 */
proto.rv.data.Graphics.Text.prototype.getShadow = function() {
  return /** @type{?proto.rv.data.Graphics.Shadow} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Shadow, 4));
};


/**
 * @param {?proto.rv.data.Graphics.Shadow|undefined} value
 * @return {!proto.rv.data.Graphics.Text} returns this
*/
proto.rv.data.Graphics.Text.prototype.setShadow = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text} returns this
 */
proto.rv.data.Graphics.Text.prototype.clearShadow = function() {
  return this.setShadow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.prototype.hasShadow = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bytes rtf_data = 5;
 * @return {!(string|Uint8Array)}
 */
proto.rv.data.Graphics.Text.prototype.getRtfData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes rtf_data = 5;
 * This is a type-conversion wrapper around `getRtfData()`
 * @return {string}
 */
proto.rv.data.Graphics.Text.prototype.getRtfData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRtfData()));
};


/**
 * optional bytes rtf_data = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRtfData()`
 * @return {!Uint8Array}
 */
proto.rv.data.Graphics.Text.prototype.getRtfData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRtfData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.rv.data.Graphics.Text} returns this
 */
proto.rv.data.Graphics.Text.prototype.setRtfData = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional VerticalAlignment vertical_alignment = 6;
 * @return {!proto.rv.data.Graphics.Text.VerticalAlignment}
 */
proto.rv.data.Graphics.Text.prototype.getVerticalAlignment = function() {
  return /** @type {!proto.rv.data.Graphics.Text.VerticalAlignment} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.rv.data.Graphics.Text.VerticalAlignment} value
 * @return {!proto.rv.data.Graphics.Text} returns this
 */
proto.rv.data.Graphics.Text.prototype.setVerticalAlignment = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional ScaleBehavior scale_behavior = 7;
 * @return {!proto.rv.data.Graphics.Text.ScaleBehavior}
 */
proto.rv.data.Graphics.Text.prototype.getScaleBehavior = function() {
  return /** @type {!proto.rv.data.Graphics.Text.ScaleBehavior} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.rv.data.Graphics.Text.ScaleBehavior} value
 * @return {!proto.rv.data.Graphics.Text} returns this
 */
proto.rv.data.Graphics.Text.prototype.setScaleBehavior = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional EdgeInsets margins = 8;
 * @return {?proto.rv.data.Graphics.EdgeInsets}
 */
proto.rv.data.Graphics.Text.prototype.getMargins = function() {
  return /** @type{?proto.rv.data.Graphics.EdgeInsets} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.EdgeInsets, 8));
};


/**
 * @param {?proto.rv.data.Graphics.EdgeInsets|undefined} value
 * @return {!proto.rv.data.Graphics.Text} returns this
*/
proto.rv.data.Graphics.Text.prototype.setMargins = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text} returns this
 */
proto.rv.data.Graphics.Text.prototype.clearMargins = function() {
  return this.setMargins(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.prototype.hasMargins = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool is_superscript_standardized = 9;
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.prototype.getIsSuperscriptStandardized = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Graphics.Text} returns this
 */
proto.rv.data.Graphics.Text.prototype.setIsSuperscriptStandardized = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional Transform transform = 10;
 * @return {!proto.rv.data.Graphics.Text.Transform}
 */
proto.rv.data.Graphics.Text.prototype.getTransform = function() {
  return /** @type {!proto.rv.data.Graphics.Text.Transform} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.rv.data.Graphics.Text.Transform} value
 * @return {!proto.rv.data.Graphics.Text} returns this
 */
proto.rv.data.Graphics.Text.prototype.setTransform = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional string transformDelimiter = 11;
 * @return {string}
 */
proto.rv.data.Graphics.Text.prototype.getTransformdelimiter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Graphics.Text} returns this
 */
proto.rv.data.Graphics.Text.prototype.setTransformdelimiter = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional ChordPro chord_pro = 12;
 * @return {?proto.rv.data.Graphics.Text.ChordPro}
 */
proto.rv.data.Graphics.Text.prototype.getChordPro = function() {
  return /** @type{?proto.rv.data.Graphics.Text.ChordPro} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Text.ChordPro, 12));
};


/**
 * @param {?proto.rv.data.Graphics.Text.ChordPro|undefined} value
 * @return {!proto.rv.data.Graphics.Text} returns this
*/
proto.rv.data.Graphics.Text.prototype.setChordPro = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Graphics.Text} returns this
 */
proto.rv.data.Graphics.Text.prototype.clearChordPro = function() {
  return this.setChordPro(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Graphics.Text.prototype.hasChordPro = function() {
  return jspb.Message.getField(this, 12) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.Media.oneofGroups_ = [[4,5,6,7,8]];

/**
 * @enum {number}
 */
proto.rv.data.Media.TypepropertiesCase = {
  TYPEPROPERTIES_NOT_SET: 0,
  AUDIO: 4,
  IMAGE: 5,
  VIDEO: 6,
  LIVE_VIDEO: 7,
  WEB_CONTENT: 8
};

/**
 * @return {proto.rv.data.Media.TypepropertiesCase}
 */
proto.rv.data.Media.prototype.getTypepropertiesCase = function() {
  return /** @type {proto.rv.data.Media.TypepropertiesCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.Media.oneofGroups_[0]));
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
proto.rv.data.Media.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Media.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Media} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.toObject = function(includeInstance, msg) {
  var f, obj = {
uuid: (f = msg.getUuid()) && proto.rv.data.UUID.toObject(includeInstance, f),
url: (f = msg.getUrl()) && proto.rv.data.URL.toObject(includeInstance, f),
metadata: (f = msg.getMetadata()) && proto.rv.data.Media.Metadata.toObject(includeInstance, f),
audio: (f = msg.getAudio()) && proto.rv.data.Media.AudioTypeProperties.toObject(includeInstance, f),
image: (f = msg.getImage()) && proto.rv.data.Media.ImageTypeProperties.toObject(includeInstance, f),
video: (f = msg.getVideo()) && proto.rv.data.Media.VideoTypeProperties.toObject(includeInstance, f),
liveVideo: (f = msg.getLiveVideo()) && proto.rv.data.Media.LiveVideoTypeProperties.toObject(includeInstance, f),
webContent: (f = msg.getWebContent()) && proto.rv.data.Media.WebContentTypeProperties.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Media}
 */
proto.rv.data.Media.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Media;
  return proto.rv.data.Media.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Media} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Media}
 */
proto.rv.data.Media.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.rv.data.URL;
      reader.readMessage(value,proto.rv.data.URL.deserializeBinaryFromReader);
      msg.setUrl(value);
      break;
    case 3:
      var value = new proto.rv.data.Media.Metadata;
      reader.readMessage(value,proto.rv.data.Media.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 4:
      var value = new proto.rv.data.Media.AudioTypeProperties;
      reader.readMessage(value,proto.rv.data.Media.AudioTypeProperties.deserializeBinaryFromReader);
      msg.setAudio(value);
      break;
    case 5:
      var value = new proto.rv.data.Media.ImageTypeProperties;
      reader.readMessage(value,proto.rv.data.Media.ImageTypeProperties.deserializeBinaryFromReader);
      msg.setImage(value);
      break;
    case 6:
      var value = new proto.rv.data.Media.VideoTypeProperties;
      reader.readMessage(value,proto.rv.data.Media.VideoTypeProperties.deserializeBinaryFromReader);
      msg.setVideo(value);
      break;
    case 7:
      var value = new proto.rv.data.Media.LiveVideoTypeProperties;
      reader.readMessage(value,proto.rv.data.Media.LiveVideoTypeProperties.deserializeBinaryFromReader);
      msg.setLiveVideo(value);
      break;
    case 8:
      var value = new proto.rv.data.Media.WebContentTypeProperties;
      reader.readMessage(value,proto.rv.data.Media.WebContentTypeProperties.deserializeBinaryFromReader);
      msg.setWebContent(value);
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
proto.rv.data.Media.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Media.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Media} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.UUID.serializeBinaryToWriter
    );
  }
  f = message.getUrl();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.URL.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.Media.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getAudio();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.data.Media.AudioTypeProperties.serializeBinaryToWriter
    );
  }
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.data.Media.ImageTypeProperties.serializeBinaryToWriter
    );
  }
  f = message.getVideo();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.rv.data.Media.VideoTypeProperties.serializeBinaryToWriter
    );
  }
  f = message.getLiveVideo();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.rv.data.Media.LiveVideoTypeProperties.serializeBinaryToWriter
    );
  }
  f = message.getWebContent();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.rv.data.Media.WebContentTypeProperties.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Media.ScaleBehavior = {
  SCALE_BEHAVIOR_FIT: 0,
  SCALE_BEHAVIOR_FILL: 1,
  SCALE_BEHAVIOR_STRETCH: 2,
  SCALE_BEHAVIOR_CUSTOM: 3
};

/**
 * @enum {number}
 */
proto.rv.data.Media.ScaleAlignment = {
  SCALE_ALIGNMENT_MIDDLE_CENTER: 0,
  SCALE_ALIGNMENT_TOP_LEFT: 1,
  SCALE_ALIGNMENT_TOP_CENTER: 2,
  SCALE_ALIGNMENT_TOP_RIGHT: 3,
  SCALE_ALIGNMENT_MIDDLE_RIGHT: 4,
  SCALE_ALIGNMENT_BOTTOM_RIGHT: 5,
  SCALE_ALIGNMENT_BOTTOM_CENTER: 6,
  SCALE_ALIGNMENT_BOTTOM_LEFT: 7,
  SCALE_ALIGNMENT_MIDDLE_LEFT: 8
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
proto.rv.data.Media.Metadata.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Media.Metadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Media.Metadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.Metadata.toObject = function(includeInstance, msg) {
  var f, obj = {
manufactureName: jspb.Message.getFieldWithDefault(msg, 1, ""),
manufactureUrl: (f = msg.getManufactureUrl()) && proto.rv.data.URL.toObject(includeInstance, f),
information: jspb.Message.getFieldWithDefault(msg, 3, ""),
artist: jspb.Message.getFieldWithDefault(msg, 4, ""),
format: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.rv.data.Media.Metadata}
 */
proto.rv.data.Media.Metadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Media.Metadata;
  return proto.rv.data.Media.Metadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Media.Metadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Media.Metadata}
 */
proto.rv.data.Media.Metadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setManufactureName(value);
      break;
    case 2:
      var value = new proto.rv.data.URL;
      reader.readMessage(value,proto.rv.data.URL.deserializeBinaryFromReader);
      msg.setManufactureUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInformation(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setArtist(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
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
proto.rv.data.Media.Metadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Media.Metadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Media.Metadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.Metadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getManufactureName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getManufactureUrl();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.URL.serializeBinaryToWriter
    );
  }
  f = message.getInformation();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getArtist();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFormat();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string manufacture_name = 1;
 * @return {string}
 */
proto.rv.data.Media.Metadata.prototype.getManufactureName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Media.Metadata} returns this
 */
proto.rv.data.Media.Metadata.prototype.setManufactureName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional URL manufacture_url = 2;
 * @return {?proto.rv.data.URL}
 */
proto.rv.data.Media.Metadata.prototype.getManufactureUrl = function() {
  return /** @type{?proto.rv.data.URL} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.URL, 2));
};


/**
 * @param {?proto.rv.data.URL|undefined} value
 * @return {!proto.rv.data.Media.Metadata} returns this
*/
proto.rv.data.Media.Metadata.prototype.setManufactureUrl = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media.Metadata} returns this
 */
proto.rv.data.Media.Metadata.prototype.clearManufactureUrl = function() {
  return this.setManufactureUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.Metadata.prototype.hasManufactureUrl = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string information = 3;
 * @return {string}
 */
proto.rv.data.Media.Metadata.prototype.getInformation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Media.Metadata} returns this
 */
proto.rv.data.Media.Metadata.prototype.setInformation = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string artist = 4;
 * @return {string}
 */
proto.rv.data.Media.Metadata.prototype.getArtist = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Media.Metadata} returns this
 */
proto.rv.data.Media.Metadata.prototype.setArtist = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string format = 5;
 * @return {string}
 */
proto.rv.data.Media.Metadata.prototype.getFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Media.Metadata} returns this
 */
proto.rv.data.Media.Metadata.prototype.setFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.rv.data.Media.VideoDevice.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Media.VideoDevice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Media.VideoDevice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.VideoDevice.toObject = function(includeInstance, msg) {
  var f, obj = {
type: jspb.Message.getFieldWithDefault(msg, 1, 0),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
uniqueId: jspb.Message.getFieldWithDefault(msg, 3, ""),
modelId: jspb.Message.getFieldWithDefault(msg, 4, ""),
formatIndex: jspb.Message.getFieldWithDefault(msg, 5, 0),
audioRouting: (f = msg.getAudioRouting()) && proto.rv.data.DigitalAudio.Device.Routing.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Media.VideoDevice}
 */
proto.rv.data.Media.VideoDevice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Media.VideoDevice;
  return proto.rv.data.Media.VideoDevice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Media.VideoDevice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Media.VideoDevice}
 */
proto.rv.data.Media.VideoDevice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Media.VideoDevice.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFormatIndex(value);
      break;
    case 6:
      var value = new proto.rv.data.DigitalAudio.Device.Routing;
      reader.readMessage(value,proto.rv.data.DigitalAudio.Device.Routing.deserializeBinaryFromReader);
      msg.setAudioRouting(value);
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
proto.rv.data.Media.VideoDevice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Media.VideoDevice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Media.VideoDevice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.VideoDevice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUniqueId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getModelId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFormatIndex();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getAudioRouting();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.rv.data.DigitalAudio.Device.Routing.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Media.VideoDevice.Type = {
  TYPE_GENERIC: 0,
  TYPE_DIRECTSHOW: 1,
  TYPE_BLACKMAGIC: 2,
  TYPE_AJA: 3,
  TYPE_AV: 4,
  TYPE_SYPHON: 5,
  TYPE_NDI: 6,
  TYPE_BLUEFISH: 7
};

/**
 * optional Type type = 1;
 * @return {!proto.rv.data.Media.VideoDevice.Type}
 */
proto.rv.data.Media.VideoDevice.prototype.getType = function() {
  return /** @type {!proto.rv.data.Media.VideoDevice.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Media.VideoDevice.Type} value
 * @return {!proto.rv.data.Media.VideoDevice} returns this
 */
proto.rv.data.Media.VideoDevice.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.rv.data.Media.VideoDevice.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Media.VideoDevice} returns this
 */
proto.rv.data.Media.VideoDevice.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string unique_id = 3;
 * @return {string}
 */
proto.rv.data.Media.VideoDevice.prototype.getUniqueId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Media.VideoDevice} returns this
 */
proto.rv.data.Media.VideoDevice.prototype.setUniqueId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string model_id = 4;
 * @return {string}
 */
proto.rv.data.Media.VideoDevice.prototype.getModelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Media.VideoDevice} returns this
 */
proto.rv.data.Media.VideoDevice.prototype.setModelId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 format_index = 5;
 * @return {number}
 */
proto.rv.data.Media.VideoDevice.prototype.getFormatIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Media.VideoDevice} returns this
 */
proto.rv.data.Media.VideoDevice.prototype.setFormatIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional DigitalAudio.Device.Routing audio_routing = 6;
 * @return {?proto.rv.data.DigitalAudio.Device.Routing}
 */
proto.rv.data.Media.VideoDevice.prototype.getAudioRouting = function() {
  return /** @type{?proto.rv.data.DigitalAudio.Device.Routing} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.DigitalAudio.Device.Routing, 6));
};


/**
 * @param {?proto.rv.data.DigitalAudio.Device.Routing|undefined} value
 * @return {!proto.rv.data.Media.VideoDevice} returns this
*/
proto.rv.data.Media.VideoDevice.prototype.setAudioRouting = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media.VideoDevice} returns this
 */
proto.rv.data.Media.VideoDevice.prototype.clearAudioRouting = function() {
  return this.setAudioRouting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.VideoDevice.prototype.hasAudioRouting = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.rv.data.Media.AudioDevice.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Media.AudioDevice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Media.AudioDevice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.AudioDevice.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
uniqueId: jspb.Message.getFieldWithDefault(msg, 2, ""),
modelId: jspb.Message.getFieldWithDefault(msg, 3, ""),
channelCount: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.rv.data.Media.AudioDevice}
 */
proto.rv.data.Media.AudioDevice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Media.AudioDevice;
  return proto.rv.data.Media.AudioDevice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Media.AudioDevice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Media.AudioDevice}
 */
proto.rv.data.Media.AudioDevice.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setUniqueId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChannelCount(value);
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
proto.rv.data.Media.AudioDevice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Media.AudioDevice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Media.AudioDevice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.AudioDevice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUniqueId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getModelId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getChannelCount();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.rv.data.Media.AudioDevice.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Media.AudioDevice} returns this
 */
proto.rv.data.Media.AudioDevice.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string unique_id = 2;
 * @return {string}
 */
proto.rv.data.Media.AudioDevice.prototype.getUniqueId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Media.AudioDevice} returns this
 */
proto.rv.data.Media.AudioDevice.prototype.setUniqueId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string model_id = 3;
 * @return {string}
 */
proto.rv.data.Media.AudioDevice.prototype.getModelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.Media.AudioDevice} returns this
 */
proto.rv.data.Media.AudioDevice.prototype.setModelId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 channel_count = 4;
 * @return {number}
 */
proto.rv.data.Media.AudioDevice.prototype.getChannelCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Media.AudioDevice} returns this
 */
proto.rv.data.Media.AudioDevice.prototype.setChannelCount = function(value) {
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
proto.rv.data.Media.Audio.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Media.Audio.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Media.Audio} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.Audio.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.data.Media.Audio}
 */
proto.rv.data.Media.Audio.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Media.Audio;
  return proto.rv.data.Media.Audio.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Media.Audio} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Media.Audio}
 */
proto.rv.data.Media.Audio.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.data.Media.Audio.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Media.Audio.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Media.Audio} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.Audio.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.Media.Audio.Channel.repeatedFields_ = [5];



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
proto.rv.data.Media.Audio.Channel.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Media.Audio.Channel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Media.Audio.Channel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.Audio.Channel.toObject = function(includeInstance, msg) {
  var f, obj = {
index: jspb.Message.getFieldWithDefault(msg, 1, 0),
muted: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
volume: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
compressLimit: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
outputsList: jspb.Message.toObjectList(msg.getOutputsList(),
    proto.rv.data.Media.Audio.Channel.Output.toObject, includeInstance)
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
 * @return {!proto.rv.data.Media.Audio.Channel}
 */
proto.rv.data.Media.Audio.Channel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Media.Audio.Channel;
  return proto.rv.data.Media.Audio.Channel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Media.Audio.Channel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Media.Audio.Channel}
 */
proto.rv.data.Media.Audio.Channel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMuted(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolume(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCompressLimit(value);
      break;
    case 5:
      var value = new proto.rv.data.Media.Audio.Channel.Output;
      reader.readMessage(value,proto.rv.data.Media.Audio.Channel.Output.deserializeBinaryFromReader);
      msg.addOutputs(value);
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
proto.rv.data.Media.Audio.Channel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Media.Audio.Channel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Media.Audio.Channel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.Audio.Channel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getMuted();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getCompressLimit();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.rv.data.Media.Audio.Channel.Output.serializeBinaryToWriter
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
proto.rv.data.Media.Audio.Channel.Output.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Media.Audio.Channel.Output.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Media.Audio.Channel.Output} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.Audio.Channel.Output.toObject = function(includeInstance, msg) {
  var f, obj = {
channelIndex: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.rv.data.Media.Audio.Channel.Output}
 */
proto.rv.data.Media.Audio.Channel.Output.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Media.Audio.Channel.Output;
  return proto.rv.data.Media.Audio.Channel.Output.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Media.Audio.Channel.Output} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Media.Audio.Channel.Output}
 */
proto.rv.data.Media.Audio.Channel.Output.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChannelIndex(value);
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
proto.rv.data.Media.Audio.Channel.Output.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Media.Audio.Channel.Output.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Media.Audio.Channel.Output} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.Audio.Channel.Output.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannelIndex();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 channel_index = 2;
 * @return {number}
 */
proto.rv.data.Media.Audio.Channel.Output.prototype.getChannelIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Media.Audio.Channel.Output} returns this
 */
proto.rv.data.Media.Audio.Channel.Output.prototype.setChannelIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 index = 1;
 * @return {number}
 */
proto.rv.data.Media.Audio.Channel.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Media.Audio.Channel} returns this
 */
proto.rv.data.Media.Audio.Channel.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool muted = 2;
 * @return {boolean}
 */
proto.rv.data.Media.Audio.Channel.prototype.getMuted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Media.Audio.Channel} returns this
 */
proto.rv.data.Media.Audio.Channel.prototype.setMuted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional double volume = 3;
 * @return {number}
 */
proto.rv.data.Media.Audio.Channel.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Media.Audio.Channel} returns this
 */
proto.rv.data.Media.Audio.Channel.prototype.setVolume = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional bool compress_limit = 4;
 * @return {boolean}
 */
proto.rv.data.Media.Audio.Channel.prototype.getCompressLimit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Media.Audio.Channel} returns this
 */
proto.rv.data.Media.Audio.Channel.prototype.setCompressLimit = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * repeated Output outputs = 5;
 * @return {!Array<!proto.rv.data.Media.Audio.Channel.Output>}
 */
proto.rv.data.Media.Audio.Channel.prototype.getOutputsList = function() {
  return /** @type{!Array<!proto.rv.data.Media.Audio.Channel.Output>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.Media.Audio.Channel.Output, 5));
};


/**
 * @param {!Array<!proto.rv.data.Media.Audio.Channel.Output>} value
 * @return {!proto.rv.data.Media.Audio.Channel} returns this
*/
proto.rv.data.Media.Audio.Channel.prototype.setOutputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.rv.data.Media.Audio.Channel.Output=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.Media.Audio.Channel.Output}
 */
proto.rv.data.Media.Audio.Channel.prototype.addOutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.rv.data.Media.Audio.Channel.Output, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Media.Audio.Channel} returns this
 */
proto.rv.data.Media.Audio.Channel.prototype.clearOutputsList = function() {
  return this.setOutputsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.Media.AudioProperties.repeatedFields_ = [2];



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
proto.rv.data.Media.AudioProperties.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Media.AudioProperties.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Media.AudioProperties} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.AudioProperties.toObject = function(includeInstance, msg) {
  var f, obj = {
volume: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
audioChannelsList: jspb.Message.toObjectList(msg.getAudioChannelsList(),
    proto.rv.data.Media.Audio.Channel.toObject, includeInstance),
isCustomMapping: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.rv.data.Media.AudioProperties}
 */
proto.rv.data.Media.AudioProperties.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Media.AudioProperties;
  return proto.rv.data.Media.AudioProperties.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Media.AudioProperties} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Media.AudioProperties}
 */
proto.rv.data.Media.AudioProperties.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolume(value);
      break;
    case 2:
      var value = new proto.rv.data.Media.Audio.Channel;
      reader.readMessage(value,proto.rv.data.Media.Audio.Channel.deserializeBinaryFromReader);
      msg.addAudioChannels(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsCustomMapping(value);
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
proto.rv.data.Media.AudioProperties.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Media.AudioProperties.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Media.AudioProperties} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.AudioProperties.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolume();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getAudioChannelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.rv.data.Media.Audio.Channel.serializeBinaryToWriter
    );
  }
  f = message.getIsCustomMapping();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional double volume = 1;
 * @return {number}
 */
proto.rv.data.Media.AudioProperties.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Media.AudioProperties} returns this
 */
proto.rv.data.Media.AudioProperties.prototype.setVolume = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * repeated Audio.Channel audio_channels = 2;
 * @return {!Array<!proto.rv.data.Media.Audio.Channel>}
 */
proto.rv.data.Media.AudioProperties.prototype.getAudioChannelsList = function() {
  return /** @type{!Array<!proto.rv.data.Media.Audio.Channel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.Media.Audio.Channel, 2));
};


/**
 * @param {!Array<!proto.rv.data.Media.Audio.Channel>} value
 * @return {!proto.rv.data.Media.AudioProperties} returns this
*/
proto.rv.data.Media.AudioProperties.prototype.setAudioChannelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.rv.data.Media.Audio.Channel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.Media.Audio.Channel}
 */
proto.rv.data.Media.AudioProperties.prototype.addAudioChannels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.rv.data.Media.Audio.Channel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Media.AudioProperties} returns this
 */
proto.rv.data.Media.AudioProperties.prototype.clearAudioChannelsList = function() {
  return this.setAudioChannelsList([]);
};


/**
 * optional bool is_custom_mapping = 3;
 * @return {boolean}
 */
proto.rv.data.Media.AudioProperties.prototype.getIsCustomMapping = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Media.AudioProperties} returns this
 */
proto.rv.data.Media.AudioProperties.prototype.setIsCustomMapping = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
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
proto.rv.data.Media.TransportProperties.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Media.TransportProperties.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Media.TransportProperties} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.TransportProperties.toObject = function(includeInstance, msg) {
  var f, obj = {
playRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
inPoint: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
outPoint: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
fadeInDuration: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
fadeOutDuration: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
shouldFadeIn: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
shouldFadeOut: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
endPoint: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
playbackBehavior: jspb.Message.getFieldWithDefault(msg, 12, 0),
loopTime: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
timesToLoop: jspb.Message.getFieldWithDefault(msg, 14, 0),
retrigger: jspb.Message.getFieldWithDefault(msg, 15, 0)
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
 * @return {!proto.rv.data.Media.TransportProperties}
 */
proto.rv.data.Media.TransportProperties.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Media.TransportProperties;
  return proto.rv.data.Media.TransportProperties.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Media.TransportProperties} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Media.TransportProperties}
 */
proto.rv.data.Media.TransportProperties.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPlayRate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setInPoint(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOutPoint(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFadeInDuration(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFadeOutDuration(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShouldFadeIn(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShouldFadeOut(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEndPoint(value);
      break;
    case 12:
      var value = /** @type {!proto.rv.data.Media.TransportProperties.PlaybackBehavior} */ (reader.readEnum());
      msg.setPlaybackBehavior(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLoopTime(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimesToLoop(value);
      break;
    case 15:
      var value = /** @type {!proto.rv.data.Media.TransportProperties.RetriggerSetting} */ (reader.readEnum());
      msg.setRetrigger(value);
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
proto.rv.data.Media.TransportProperties.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Media.TransportProperties.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Media.TransportProperties} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.TransportProperties.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayRate();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getInPoint();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getOutPoint();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getFadeInDuration();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getFadeOutDuration();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getShouldFadeIn();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getShouldFadeOut();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getEndPoint();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getPlaybackBehavior();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getLoopTime();
  if (f !== 0.0) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = message.getTimesToLoop();
  if (f !== 0) {
    writer.writeUint32(
      14,
      f
    );
  }
  f = message.getRetrigger();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Media.TransportProperties.PlaybackBehavior = {
  PLAYBACK_BEHAVIOR_STOP: 0,
  PLAYBACK_BEHAVIOR_LOOP: 1,
  PLAYBACK_BEHAVIOR_LOOP_FOR_COUNT: 2,
  PLAYBACK_BEHAVIOR_LOOP_FOR_TIME: 3
};

/**
 * @enum {number}
 */
proto.rv.data.Media.TransportProperties.RetriggerSetting = {
  RETRIGGER_SETTING_UNSET: 0,
  RETRIGGER_SETTING_ALWAYS: 1,
  RETRIGGER_SETTING_NEVER: 2,
  RETRIGGER_SETTING_AUTOMATIC: 3
};

/**
 * optional double play_rate = 1;
 * @return {number}
 */
proto.rv.data.Media.TransportProperties.prototype.getPlayRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Media.TransportProperties} returns this
 */
proto.rv.data.Media.TransportProperties.prototype.setPlayRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double in_point = 2;
 * @return {number}
 */
proto.rv.data.Media.TransportProperties.prototype.getInPoint = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Media.TransportProperties} returns this
 */
proto.rv.data.Media.TransportProperties.prototype.setInPoint = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double out_point = 3;
 * @return {number}
 */
proto.rv.data.Media.TransportProperties.prototype.getOutPoint = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Media.TransportProperties} returns this
 */
proto.rv.data.Media.TransportProperties.prototype.setOutPoint = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double fade_in_duration = 7;
 * @return {number}
 */
proto.rv.data.Media.TransportProperties.prototype.getFadeInDuration = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Media.TransportProperties} returns this
 */
proto.rv.data.Media.TransportProperties.prototype.setFadeInDuration = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double fade_out_duration = 8;
 * @return {number}
 */
proto.rv.data.Media.TransportProperties.prototype.getFadeOutDuration = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Media.TransportProperties} returns this
 */
proto.rv.data.Media.TransportProperties.prototype.setFadeOutDuration = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional bool should_fade_in = 9;
 * @return {boolean}
 */
proto.rv.data.Media.TransportProperties.prototype.getShouldFadeIn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Media.TransportProperties} returns this
 */
proto.rv.data.Media.TransportProperties.prototype.setShouldFadeIn = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool should_fade_out = 10;
 * @return {boolean}
 */
proto.rv.data.Media.TransportProperties.prototype.getShouldFadeOut = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Media.TransportProperties} returns this
 */
proto.rv.data.Media.TransportProperties.prototype.setShouldFadeOut = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional double end_point = 11;
 * @return {number}
 */
proto.rv.data.Media.TransportProperties.prototype.getEndPoint = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Media.TransportProperties} returns this
 */
proto.rv.data.Media.TransportProperties.prototype.setEndPoint = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional PlaybackBehavior playback_behavior = 12;
 * @return {!proto.rv.data.Media.TransportProperties.PlaybackBehavior}
 */
proto.rv.data.Media.TransportProperties.prototype.getPlaybackBehavior = function() {
  return /** @type {!proto.rv.data.Media.TransportProperties.PlaybackBehavior} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.rv.data.Media.TransportProperties.PlaybackBehavior} value
 * @return {!proto.rv.data.Media.TransportProperties} returns this
 */
proto.rv.data.Media.TransportProperties.prototype.setPlaybackBehavior = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional double loop_time = 13;
 * @return {number}
 */
proto.rv.data.Media.TransportProperties.prototype.getLoopTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Media.TransportProperties} returns this
 */
proto.rv.data.Media.TransportProperties.prototype.setLoopTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional uint32 times_to_loop = 14;
 * @return {number}
 */
proto.rv.data.Media.TransportProperties.prototype.getTimesToLoop = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Media.TransportProperties} returns this
 */
proto.rv.data.Media.TransportProperties.prototype.setTimesToLoop = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional RetriggerSetting retrigger = 15;
 * @return {!proto.rv.data.Media.TransportProperties.RetriggerSetting}
 */
proto.rv.data.Media.TransportProperties.prototype.getRetrigger = function() {
  return /** @type {!proto.rv.data.Media.TransportProperties.RetriggerSetting} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.rv.data.Media.TransportProperties.RetriggerSetting} value
 * @return {!proto.rv.data.Media.TransportProperties} returns this
 */
proto.rv.data.Media.TransportProperties.prototype.setRetrigger = function(value) {
  return jspb.Message.setProto3EnumField(this, 15, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.Media.DrawingProperties.repeatedFields_ = [12];



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
proto.rv.data.Media.DrawingProperties.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Media.DrawingProperties.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Media.DrawingProperties} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.DrawingProperties.toObject = function(includeInstance, msg) {
  var f, obj = {
scaleBehavior: jspb.Message.getFieldWithDefault(msg, 1, 0),
isBlurred: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
scaleAlignment: jspb.Message.getFieldWithDefault(msg, 2, 0),
flippedHorizontally: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
flippedVertically: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
naturalSize: (f = msg.getNaturalSize()) && proto.rv.data.Graphics.Size.toObject(includeInstance, f),
customImageRotation: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
customImageBounds: (f = msg.getCustomImageBounds()) && proto.rv.data.Graphics.Rect.toObject(includeInstance, f),
customImageAspectLocked: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
alphaInverted: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
nativeRotation: jspb.Message.getFieldWithDefault(msg, 10, 0),
selectedEffectPresetUuid: (f = msg.getSelectedEffectPresetUuid()) && proto.rv.data.UUID.toObject(includeInstance, f),
effectsList: jspb.Message.toObjectList(msg.getEffectsList(),
    proto.rv.data.Effect.toObject, includeInstance),
cropEnable: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
cropInsets: (f = msg.getCropInsets()) && proto.rv.data.Graphics.EdgeInsets.toObject(includeInstance, f),
alphaType: jspb.Message.getFieldWithDefault(msg, 15, 0)
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
 * @return {!proto.rv.data.Media.DrawingProperties}
 */
proto.rv.data.Media.DrawingProperties.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Media.DrawingProperties;
  return proto.rv.data.Media.DrawingProperties.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Media.DrawingProperties} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Media.DrawingProperties}
 */
proto.rv.data.Media.DrawingProperties.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.Media.ScaleBehavior} */ (reader.readEnum());
      msg.setScaleBehavior(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsBlurred(value);
      break;
    case 2:
      var value = /** @type {!proto.rv.data.Media.ScaleAlignment} */ (reader.readEnum());
      msg.setScaleAlignment(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFlippedHorizontally(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFlippedVertically(value);
      break;
    case 5:
      var value = new proto.rv.data.Graphics.Size;
      reader.readMessage(value,proto.rv.data.Graphics.Size.deserializeBinaryFromReader);
      msg.setNaturalSize(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCustomImageRotation(value);
      break;
    case 7:
      var value = new proto.rv.data.Graphics.Rect;
      reader.readMessage(value,proto.rv.data.Graphics.Rect.deserializeBinaryFromReader);
      msg.setCustomImageBounds(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCustomImageAspectLocked(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAlphaInverted(value);
      break;
    case 10:
      var value = /** @type {!proto.rv.data.Media.DrawingProperties.NativeRotationType} */ (reader.readEnum());
      msg.setNativeRotation(value);
      break;
    case 11:
      var value = new proto.rv.data.UUID;
      reader.readMessage(value,proto.rv.data.UUID.deserializeBinaryFromReader);
      msg.setSelectedEffectPresetUuid(value);
      break;
    case 12:
      var value = new proto.rv.data.Effect;
      reader.readMessage(value,proto.rv.data.Effect.deserializeBinaryFromReader);
      msg.addEffects(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCropEnable(value);
      break;
    case 14:
      var value = new proto.rv.data.Graphics.EdgeInsets;
      reader.readMessage(value,proto.rv.data.Graphics.EdgeInsets.deserializeBinaryFromReader);
      msg.setCropInsets(value);
      break;
    case 15:
      var value = /** @type {!proto.rv.data.AlphaType} */ (reader.readEnum());
      msg.setAlphaType(value);
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
proto.rv.data.Media.DrawingProperties.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Media.DrawingProperties.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Media.DrawingProperties} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.DrawingProperties.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScaleBehavior();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getIsBlurred();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getScaleAlignment();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFlippedHorizontally();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getFlippedVertically();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getNaturalSize();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.data.Graphics.Size.serializeBinaryToWriter
    );
  }
  f = message.getCustomImageRotation();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getCustomImageBounds();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.rv.data.Graphics.Rect.serializeBinaryToWriter
    );
  }
  f = message.getCustomImageAspectLocked();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getAlphaInverted();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getNativeRotation();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getSelectedEffectPresetUuid();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.rv.data.UUID.serializeBinaryToWriter
    );
  }
  f = message.getEffectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.rv.data.Effect.serializeBinaryToWriter
    );
  }
  f = message.getCropEnable();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getCropInsets();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.rv.data.Graphics.EdgeInsets.serializeBinaryToWriter
    );
  }
  f = message.getAlphaType();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.Media.DrawingProperties.NativeRotationType = {
  NATIVE_ROTATION_TYPE_ROTATE_STANDARD: 0,
  NATIVE_ROTATION_TYPE_ROTATE_90: 90,
  NATIVE_ROTATION_TYPE_ROTATE_180: 180,
  NATIVE_ROTATION_TYPE_ROTATE_270: 270
};

/**
 * optional ScaleBehavior scale_behavior = 1;
 * @return {!proto.rv.data.Media.ScaleBehavior}
 */
proto.rv.data.Media.DrawingProperties.prototype.getScaleBehavior = function() {
  return /** @type {!proto.rv.data.Media.ScaleBehavior} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.Media.ScaleBehavior} value
 * @return {!proto.rv.data.Media.DrawingProperties} returns this
 */
proto.rv.data.Media.DrawingProperties.prototype.setScaleBehavior = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool is_blurred = 16;
 * @return {boolean}
 */
proto.rv.data.Media.DrawingProperties.prototype.getIsBlurred = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Media.DrawingProperties} returns this
 */
proto.rv.data.Media.DrawingProperties.prototype.setIsBlurred = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional ScaleAlignment scale_alignment = 2;
 * @return {!proto.rv.data.Media.ScaleAlignment}
 */
proto.rv.data.Media.DrawingProperties.prototype.getScaleAlignment = function() {
  return /** @type {!proto.rv.data.Media.ScaleAlignment} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.data.Media.ScaleAlignment} value
 * @return {!proto.rv.data.Media.DrawingProperties} returns this
 */
proto.rv.data.Media.DrawingProperties.prototype.setScaleAlignment = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bool flipped_horizontally = 3;
 * @return {boolean}
 */
proto.rv.data.Media.DrawingProperties.prototype.getFlippedHorizontally = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Media.DrawingProperties} returns this
 */
proto.rv.data.Media.DrawingProperties.prototype.setFlippedHorizontally = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool flipped_vertically = 4;
 * @return {boolean}
 */
proto.rv.data.Media.DrawingProperties.prototype.getFlippedVertically = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Media.DrawingProperties} returns this
 */
proto.rv.data.Media.DrawingProperties.prototype.setFlippedVertically = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional Graphics.Size natural_size = 5;
 * @return {?proto.rv.data.Graphics.Size}
 */
proto.rv.data.Media.DrawingProperties.prototype.getNaturalSize = function() {
  return /** @type{?proto.rv.data.Graphics.Size} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Size, 5));
};


/**
 * @param {?proto.rv.data.Graphics.Size|undefined} value
 * @return {!proto.rv.data.Media.DrawingProperties} returns this
*/
proto.rv.data.Media.DrawingProperties.prototype.setNaturalSize = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media.DrawingProperties} returns this
 */
proto.rv.data.Media.DrawingProperties.prototype.clearNaturalSize = function() {
  return this.setNaturalSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.DrawingProperties.prototype.hasNaturalSize = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double custom_image_rotation = 6;
 * @return {number}
 */
proto.rv.data.Media.DrawingProperties.prototype.getCustomImageRotation = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Media.DrawingProperties} returns this
 */
proto.rv.data.Media.DrawingProperties.prototype.setCustomImageRotation = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional Graphics.Rect custom_image_bounds = 7;
 * @return {?proto.rv.data.Graphics.Rect}
 */
proto.rv.data.Media.DrawingProperties.prototype.getCustomImageBounds = function() {
  return /** @type{?proto.rv.data.Graphics.Rect} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.Rect, 7));
};


/**
 * @param {?proto.rv.data.Graphics.Rect|undefined} value
 * @return {!proto.rv.data.Media.DrawingProperties} returns this
*/
proto.rv.data.Media.DrawingProperties.prototype.setCustomImageBounds = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media.DrawingProperties} returns this
 */
proto.rv.data.Media.DrawingProperties.prototype.clearCustomImageBounds = function() {
  return this.setCustomImageBounds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.DrawingProperties.prototype.hasCustomImageBounds = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool custom_image_aspect_locked = 8;
 * @return {boolean}
 */
proto.rv.data.Media.DrawingProperties.prototype.getCustomImageAspectLocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Media.DrawingProperties} returns this
 */
proto.rv.data.Media.DrawingProperties.prototype.setCustomImageAspectLocked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool alpha_inverted = 9;
 * @return {boolean}
 */
proto.rv.data.Media.DrawingProperties.prototype.getAlphaInverted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Media.DrawingProperties} returns this
 */
proto.rv.data.Media.DrawingProperties.prototype.setAlphaInverted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional NativeRotationType native_rotation = 10;
 * @return {!proto.rv.data.Media.DrawingProperties.NativeRotationType}
 */
proto.rv.data.Media.DrawingProperties.prototype.getNativeRotation = function() {
  return /** @type {!proto.rv.data.Media.DrawingProperties.NativeRotationType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.rv.data.Media.DrawingProperties.NativeRotationType} value
 * @return {!proto.rv.data.Media.DrawingProperties} returns this
 */
proto.rv.data.Media.DrawingProperties.prototype.setNativeRotation = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional UUID selected_effect_preset_uuid = 11;
 * @return {?proto.rv.data.UUID}
 */
proto.rv.data.Media.DrawingProperties.prototype.getSelectedEffectPresetUuid = function() {
  return /** @type{?proto.rv.data.UUID} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.UUID, 11));
};


/**
 * @param {?proto.rv.data.UUID|undefined} value
 * @return {!proto.rv.data.Media.DrawingProperties} returns this
*/
proto.rv.data.Media.DrawingProperties.prototype.setSelectedEffectPresetUuid = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media.DrawingProperties} returns this
 */
proto.rv.data.Media.DrawingProperties.prototype.clearSelectedEffectPresetUuid = function() {
  return this.setSelectedEffectPresetUuid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.DrawingProperties.prototype.hasSelectedEffectPresetUuid = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated Effect effects = 12;
 * @return {!Array<!proto.rv.data.Effect>}
 */
proto.rv.data.Media.DrawingProperties.prototype.getEffectsList = function() {
  return /** @type{!Array<!proto.rv.data.Effect>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.Effect, 12));
};


/**
 * @param {!Array<!proto.rv.data.Effect>} value
 * @return {!proto.rv.data.Media.DrawingProperties} returns this
*/
proto.rv.data.Media.DrawingProperties.prototype.setEffectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.rv.data.Effect=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.Effect}
 */
proto.rv.data.Media.DrawingProperties.prototype.addEffects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.rv.data.Effect, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.Media.DrawingProperties} returns this
 */
proto.rv.data.Media.DrawingProperties.prototype.clearEffectsList = function() {
  return this.setEffectsList([]);
};


/**
 * optional bool crop_enable = 13;
 * @return {boolean}
 */
proto.rv.data.Media.DrawingProperties.prototype.getCropEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Media.DrawingProperties} returns this
 */
proto.rv.data.Media.DrawingProperties.prototype.setCropEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional Graphics.EdgeInsets crop_insets = 14;
 * @return {?proto.rv.data.Graphics.EdgeInsets}
 */
proto.rv.data.Media.DrawingProperties.prototype.getCropInsets = function() {
  return /** @type{?proto.rv.data.Graphics.EdgeInsets} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Graphics.EdgeInsets, 14));
};


/**
 * @param {?proto.rv.data.Graphics.EdgeInsets|undefined} value
 * @return {!proto.rv.data.Media.DrawingProperties} returns this
*/
proto.rv.data.Media.DrawingProperties.prototype.setCropInsets = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media.DrawingProperties} returns this
 */
proto.rv.data.Media.DrawingProperties.prototype.clearCropInsets = function() {
  return this.setCropInsets(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.DrawingProperties.prototype.hasCropInsets = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional AlphaType alpha_type = 15;
 * @return {!proto.rv.data.AlphaType}
 */
proto.rv.data.Media.DrawingProperties.prototype.getAlphaType = function() {
  return /** @type {!proto.rv.data.AlphaType} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.rv.data.AlphaType} value
 * @return {!proto.rv.data.Media.DrawingProperties} returns this
 */
proto.rv.data.Media.DrawingProperties.prototype.setAlphaType = function(value) {
  return jspb.Message.setProto3EnumField(this, 15, value);
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
proto.rv.data.Media.VideoProperties.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Media.VideoProperties.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Media.VideoProperties} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.VideoProperties.toObject = function(includeInstance, msg) {
  var f, obj = {
frameRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
fieldType: jspb.Message.getFieldWithDefault(msg, 2, 0),
thumbnailPosition: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
endBehavior: jspb.Message.getFieldWithDefault(msg, 4, 0),
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
 * @return {!proto.rv.data.Media.VideoProperties}
 */
proto.rv.data.Media.VideoProperties.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Media.VideoProperties;
  return proto.rv.data.Media.VideoProperties.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Media.VideoProperties} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Media.VideoProperties}
 */
proto.rv.data.Media.VideoProperties.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFrameRate(value);
      break;
    case 2:
      var value = /** @type {!proto.rv.data.Media.VideoProperties.FieldType} */ (reader.readEnum());
      msg.setFieldType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setThumbnailPosition(value);
      break;
    case 4:
      var value = /** @type {!proto.rv.data.Media.VideoProperties.EndBehavior} */ (reader.readEnum());
      msg.setEndBehavior(value);
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
proto.rv.data.Media.VideoProperties.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Media.VideoProperties.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Media.VideoProperties} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.VideoProperties.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrameRate();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getFieldType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getThumbnailPosition();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getEndBehavior();
  if (f !== 0.0) {
    writer.writeEnum(
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
 * @enum {number}
 */
proto.rv.data.Media.VideoProperties.EndBehavior = {
  END_BEHAVIOR_STOP: 0,
  END_BEHAVIOR_STOP_ON_BLACK: 1,
  END_BEHAVIOR_STOP_ON_CLEAR: 2,
  END_BEHAVIOR_FADE_TO_BLACK: 3,
  END_BEHAVIOR_FADE_TO_CLEAR: 4
};

/**
 * @enum {number}
 */
proto.rv.data.Media.VideoProperties.FieldType = {
  FIELD_TYPE_UNKNOWN: 0,
  FIELD_TYPE_PROGRESSIVE: 1,
  FIELD_TYPE_INTERLACED_UPPER_FIRST: 2,
  FIELD_TYPE_INTERLACED_LOWER_FIRST: 3
};

/**
 * optional double frame_rate = 1;
 * @return {number}
 */
proto.rv.data.Media.VideoProperties.prototype.getFrameRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Media.VideoProperties} returns this
 */
proto.rv.data.Media.VideoProperties.prototype.setFrameRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional FieldType field_type = 2;
 * @return {!proto.rv.data.Media.VideoProperties.FieldType}
 */
proto.rv.data.Media.VideoProperties.prototype.getFieldType = function() {
  return /** @type {!proto.rv.data.Media.VideoProperties.FieldType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.data.Media.VideoProperties.FieldType} value
 * @return {!proto.rv.data.Media.VideoProperties} returns this
 */
proto.rv.data.Media.VideoProperties.prototype.setFieldType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional double thumbnail_position = 3;
 * @return {number}
 */
proto.rv.data.Media.VideoProperties.prototype.getThumbnailPosition = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Media.VideoProperties} returns this
 */
proto.rv.data.Media.VideoProperties.prototype.setThumbnailPosition = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional EndBehavior end_behavior = 4;
 * @return {!proto.rv.data.Media.VideoProperties.EndBehavior}
 */
proto.rv.data.Media.VideoProperties.prototype.getEndBehavior = function() {
  return /** @type {!proto.rv.data.Media.VideoProperties.EndBehavior} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.rv.data.Media.VideoProperties.EndBehavior} value
 * @return {!proto.rv.data.Media.VideoProperties} returns this
 */
proto.rv.data.Media.VideoProperties.prototype.setEndBehavior = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional bool soft_loop = 5;
 * @return {boolean}
 */
proto.rv.data.Media.VideoProperties.prototype.getSoftLoop = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.Media.VideoProperties} returns this
 */
proto.rv.data.Media.VideoProperties.prototype.setSoftLoop = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional double soft_loop_duration = 6;
 * @return {number}
 */
proto.rv.data.Media.VideoProperties.prototype.getSoftLoopDuration = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Media.VideoProperties} returns this
 */
proto.rv.data.Media.VideoProperties.prototype.setSoftLoopDuration = function(value) {
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
proto.rv.data.Media.LiveVideoProperties.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Media.LiveVideoProperties.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Media.LiveVideoProperties} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.LiveVideoProperties.toObject = function(includeInstance, msg) {
  var f, obj = {
videoDevice: (f = msg.getVideoDevice()) && proto.rv.data.Media.VideoDevice.toObject(includeInstance, f),
audioDevice: (f = msg.getAudioDevice()) && proto.rv.data.Media.AudioDevice.toObject(includeInstance, f),
liveVideoIndex: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.rv.data.Media.LiveVideoProperties}
 */
proto.rv.data.Media.LiveVideoProperties.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Media.LiveVideoProperties;
  return proto.rv.data.Media.LiveVideoProperties.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Media.LiveVideoProperties} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Media.LiveVideoProperties}
 */
proto.rv.data.Media.LiveVideoProperties.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Media.VideoDevice;
      reader.readMessage(value,proto.rv.data.Media.VideoDevice.deserializeBinaryFromReader);
      msg.setVideoDevice(value);
      break;
    case 2:
      var value = new proto.rv.data.Media.AudioDevice;
      reader.readMessage(value,proto.rv.data.Media.AudioDevice.deserializeBinaryFromReader);
      msg.setAudioDevice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLiveVideoIndex(value);
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
proto.rv.data.Media.LiveVideoProperties.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Media.LiveVideoProperties.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Media.LiveVideoProperties} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.LiveVideoProperties.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideoDevice();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Media.VideoDevice.serializeBinaryToWriter
    );
  }
  f = message.getAudioDevice();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.Media.AudioDevice.serializeBinaryToWriter
    );
  }
  f = message.getLiveVideoIndex();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional VideoDevice video_device = 1;
 * @return {?proto.rv.data.Media.VideoDevice}
 */
proto.rv.data.Media.LiveVideoProperties.prototype.getVideoDevice = function() {
  return /** @type{?proto.rv.data.Media.VideoDevice} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Media.VideoDevice, 1));
};


/**
 * @param {?proto.rv.data.Media.VideoDevice|undefined} value
 * @return {!proto.rv.data.Media.LiveVideoProperties} returns this
*/
proto.rv.data.Media.LiveVideoProperties.prototype.setVideoDevice = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media.LiveVideoProperties} returns this
 */
proto.rv.data.Media.LiveVideoProperties.prototype.clearVideoDevice = function() {
  return this.setVideoDevice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.LiveVideoProperties.prototype.hasVideoDevice = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AudioDevice audio_device = 2;
 * @return {?proto.rv.data.Media.AudioDevice}
 */
proto.rv.data.Media.LiveVideoProperties.prototype.getAudioDevice = function() {
  return /** @type{?proto.rv.data.Media.AudioDevice} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Media.AudioDevice, 2));
};


/**
 * @param {?proto.rv.data.Media.AudioDevice|undefined} value
 * @return {!proto.rv.data.Media.LiveVideoProperties} returns this
*/
proto.rv.data.Media.LiveVideoProperties.prototype.setAudioDevice = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media.LiveVideoProperties} returns this
 */
proto.rv.data.Media.LiveVideoProperties.prototype.clearAudioDevice = function() {
  return this.setAudioDevice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.LiveVideoProperties.prototype.hasAudioDevice = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 live_video_index = 3;
 * @return {number}
 */
proto.rv.data.Media.LiveVideoProperties.prototype.getLiveVideoIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.Media.LiveVideoProperties} returns this
 */
proto.rv.data.Media.LiveVideoProperties.prototype.setLiveVideoIndex = function(value) {
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
proto.rv.data.Media.AudioTypeProperties.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Media.AudioTypeProperties.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Media.AudioTypeProperties} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.AudioTypeProperties.toObject = function(includeInstance, msg) {
  var f, obj = {
audio: (f = msg.getAudio()) && proto.rv.data.Media.AudioProperties.toObject(includeInstance, f),
transport: (f = msg.getTransport()) && proto.rv.data.Media.TransportProperties.toObject(includeInstance, f),
file: (f = msg.getFile()) && proto.rv.data.FileProperties.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Media.AudioTypeProperties}
 */
proto.rv.data.Media.AudioTypeProperties.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Media.AudioTypeProperties;
  return proto.rv.data.Media.AudioTypeProperties.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Media.AudioTypeProperties} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Media.AudioTypeProperties}
 */
proto.rv.data.Media.AudioTypeProperties.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Media.AudioProperties;
      reader.readMessage(value,proto.rv.data.Media.AudioProperties.deserializeBinaryFromReader);
      msg.setAudio(value);
      break;
    case 2:
      var value = new proto.rv.data.Media.TransportProperties;
      reader.readMessage(value,proto.rv.data.Media.TransportProperties.deserializeBinaryFromReader);
      msg.setTransport(value);
      break;
    case 3:
      var value = new proto.rv.data.FileProperties;
      reader.readMessage(value,proto.rv.data.FileProperties.deserializeBinaryFromReader);
      msg.setFile(value);
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
proto.rv.data.Media.AudioTypeProperties.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Media.AudioTypeProperties.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Media.AudioTypeProperties} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.AudioTypeProperties.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAudio();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Media.AudioProperties.serializeBinaryToWriter
    );
  }
  f = message.getTransport();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.Media.TransportProperties.serializeBinaryToWriter
    );
  }
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.FileProperties.serializeBinaryToWriter
    );
  }
};


/**
 * optional AudioProperties audio = 1;
 * @return {?proto.rv.data.Media.AudioProperties}
 */
proto.rv.data.Media.AudioTypeProperties.prototype.getAudio = function() {
  return /** @type{?proto.rv.data.Media.AudioProperties} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Media.AudioProperties, 1));
};


/**
 * @param {?proto.rv.data.Media.AudioProperties|undefined} value
 * @return {!proto.rv.data.Media.AudioTypeProperties} returns this
*/
proto.rv.data.Media.AudioTypeProperties.prototype.setAudio = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media.AudioTypeProperties} returns this
 */
proto.rv.data.Media.AudioTypeProperties.prototype.clearAudio = function() {
  return this.setAudio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.AudioTypeProperties.prototype.hasAudio = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TransportProperties transport = 2;
 * @return {?proto.rv.data.Media.TransportProperties}
 */
proto.rv.data.Media.AudioTypeProperties.prototype.getTransport = function() {
  return /** @type{?proto.rv.data.Media.TransportProperties} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Media.TransportProperties, 2));
};


/**
 * @param {?proto.rv.data.Media.TransportProperties|undefined} value
 * @return {!proto.rv.data.Media.AudioTypeProperties} returns this
*/
proto.rv.data.Media.AudioTypeProperties.prototype.setTransport = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media.AudioTypeProperties} returns this
 */
proto.rv.data.Media.AudioTypeProperties.prototype.clearTransport = function() {
  return this.setTransport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.AudioTypeProperties.prototype.hasTransport = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FileProperties file = 3;
 * @return {?proto.rv.data.FileProperties}
 */
proto.rv.data.Media.AudioTypeProperties.prototype.getFile = function() {
  return /** @type{?proto.rv.data.FileProperties} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.FileProperties, 3));
};


/**
 * @param {?proto.rv.data.FileProperties|undefined} value
 * @return {!proto.rv.data.Media.AudioTypeProperties} returns this
*/
proto.rv.data.Media.AudioTypeProperties.prototype.setFile = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media.AudioTypeProperties} returns this
 */
proto.rv.data.Media.AudioTypeProperties.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.AudioTypeProperties.prototype.hasFile = function() {
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
proto.rv.data.Media.ImageTypeProperties.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Media.ImageTypeProperties.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Media.ImageTypeProperties} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.ImageTypeProperties.toObject = function(includeInstance, msg) {
  var f, obj = {
drawing: (f = msg.getDrawing()) && proto.rv.data.Media.DrawingProperties.toObject(includeInstance, f),
file: (f = msg.getFile()) && proto.rv.data.FileProperties.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Media.ImageTypeProperties}
 */
proto.rv.data.Media.ImageTypeProperties.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Media.ImageTypeProperties;
  return proto.rv.data.Media.ImageTypeProperties.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Media.ImageTypeProperties} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Media.ImageTypeProperties}
 */
proto.rv.data.Media.ImageTypeProperties.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Media.DrawingProperties;
      reader.readMessage(value,proto.rv.data.Media.DrawingProperties.deserializeBinaryFromReader);
      msg.setDrawing(value);
      break;
    case 2:
      var value = new proto.rv.data.FileProperties;
      reader.readMessage(value,proto.rv.data.FileProperties.deserializeBinaryFromReader);
      msg.setFile(value);
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
proto.rv.data.Media.ImageTypeProperties.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Media.ImageTypeProperties.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Media.ImageTypeProperties} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.ImageTypeProperties.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDrawing();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Media.DrawingProperties.serializeBinaryToWriter
    );
  }
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.FileProperties.serializeBinaryToWriter
    );
  }
};


/**
 * optional DrawingProperties drawing = 1;
 * @return {?proto.rv.data.Media.DrawingProperties}
 */
proto.rv.data.Media.ImageTypeProperties.prototype.getDrawing = function() {
  return /** @type{?proto.rv.data.Media.DrawingProperties} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Media.DrawingProperties, 1));
};


/**
 * @param {?proto.rv.data.Media.DrawingProperties|undefined} value
 * @return {!proto.rv.data.Media.ImageTypeProperties} returns this
*/
proto.rv.data.Media.ImageTypeProperties.prototype.setDrawing = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media.ImageTypeProperties} returns this
 */
proto.rv.data.Media.ImageTypeProperties.prototype.clearDrawing = function() {
  return this.setDrawing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.ImageTypeProperties.prototype.hasDrawing = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional FileProperties file = 2;
 * @return {?proto.rv.data.FileProperties}
 */
proto.rv.data.Media.ImageTypeProperties.prototype.getFile = function() {
  return /** @type{?proto.rv.data.FileProperties} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.FileProperties, 2));
};


/**
 * @param {?proto.rv.data.FileProperties|undefined} value
 * @return {!proto.rv.data.Media.ImageTypeProperties} returns this
*/
proto.rv.data.Media.ImageTypeProperties.prototype.setFile = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media.ImageTypeProperties} returns this
 */
proto.rv.data.Media.ImageTypeProperties.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.ImageTypeProperties.prototype.hasFile = function() {
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
proto.rv.data.Media.VideoTypeProperties.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Media.VideoTypeProperties.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Media.VideoTypeProperties} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.VideoTypeProperties.toObject = function(includeInstance, msg) {
  var f, obj = {
drawing: (f = msg.getDrawing()) && proto.rv.data.Media.DrawingProperties.toObject(includeInstance, f),
audio: (f = msg.getAudio()) && proto.rv.data.Media.AudioProperties.toObject(includeInstance, f),
transport: (f = msg.getTransport()) && proto.rv.data.Media.TransportProperties.toObject(includeInstance, f),
video: (f = msg.getVideo()) && proto.rv.data.Media.VideoProperties.toObject(includeInstance, f),
file: (f = msg.getFile()) && proto.rv.data.FileProperties.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Media.VideoTypeProperties}
 */
proto.rv.data.Media.VideoTypeProperties.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Media.VideoTypeProperties;
  return proto.rv.data.Media.VideoTypeProperties.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Media.VideoTypeProperties} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Media.VideoTypeProperties}
 */
proto.rv.data.Media.VideoTypeProperties.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Media.DrawingProperties;
      reader.readMessage(value,proto.rv.data.Media.DrawingProperties.deserializeBinaryFromReader);
      msg.setDrawing(value);
      break;
    case 2:
      var value = new proto.rv.data.Media.AudioProperties;
      reader.readMessage(value,proto.rv.data.Media.AudioProperties.deserializeBinaryFromReader);
      msg.setAudio(value);
      break;
    case 3:
      var value = new proto.rv.data.Media.TransportProperties;
      reader.readMessage(value,proto.rv.data.Media.TransportProperties.deserializeBinaryFromReader);
      msg.setTransport(value);
      break;
    case 4:
      var value = new proto.rv.data.Media.VideoProperties;
      reader.readMessage(value,proto.rv.data.Media.VideoProperties.deserializeBinaryFromReader);
      msg.setVideo(value);
      break;
    case 5:
      var value = new proto.rv.data.FileProperties;
      reader.readMessage(value,proto.rv.data.FileProperties.deserializeBinaryFromReader);
      msg.setFile(value);
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
proto.rv.data.Media.VideoTypeProperties.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Media.VideoTypeProperties.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Media.VideoTypeProperties} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.VideoTypeProperties.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDrawing();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Media.DrawingProperties.serializeBinaryToWriter
    );
  }
  f = message.getAudio();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.Media.AudioProperties.serializeBinaryToWriter
    );
  }
  f = message.getTransport();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.Media.TransportProperties.serializeBinaryToWriter
    );
  }
  f = message.getVideo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.data.Media.VideoProperties.serializeBinaryToWriter
    );
  }
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.data.FileProperties.serializeBinaryToWriter
    );
  }
};


/**
 * optional DrawingProperties drawing = 1;
 * @return {?proto.rv.data.Media.DrawingProperties}
 */
proto.rv.data.Media.VideoTypeProperties.prototype.getDrawing = function() {
  return /** @type{?proto.rv.data.Media.DrawingProperties} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Media.DrawingProperties, 1));
};


/**
 * @param {?proto.rv.data.Media.DrawingProperties|undefined} value
 * @return {!proto.rv.data.Media.VideoTypeProperties} returns this
*/
proto.rv.data.Media.VideoTypeProperties.prototype.setDrawing = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media.VideoTypeProperties} returns this
 */
proto.rv.data.Media.VideoTypeProperties.prototype.clearDrawing = function() {
  return this.setDrawing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.VideoTypeProperties.prototype.hasDrawing = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AudioProperties audio = 2;
 * @return {?proto.rv.data.Media.AudioProperties}
 */
proto.rv.data.Media.VideoTypeProperties.prototype.getAudio = function() {
  return /** @type{?proto.rv.data.Media.AudioProperties} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Media.AudioProperties, 2));
};


/**
 * @param {?proto.rv.data.Media.AudioProperties|undefined} value
 * @return {!proto.rv.data.Media.VideoTypeProperties} returns this
*/
proto.rv.data.Media.VideoTypeProperties.prototype.setAudio = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media.VideoTypeProperties} returns this
 */
proto.rv.data.Media.VideoTypeProperties.prototype.clearAudio = function() {
  return this.setAudio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.VideoTypeProperties.prototype.hasAudio = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TransportProperties transport = 3;
 * @return {?proto.rv.data.Media.TransportProperties}
 */
proto.rv.data.Media.VideoTypeProperties.prototype.getTransport = function() {
  return /** @type{?proto.rv.data.Media.TransportProperties} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Media.TransportProperties, 3));
};


/**
 * @param {?proto.rv.data.Media.TransportProperties|undefined} value
 * @return {!proto.rv.data.Media.VideoTypeProperties} returns this
*/
proto.rv.data.Media.VideoTypeProperties.prototype.setTransport = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media.VideoTypeProperties} returns this
 */
proto.rv.data.Media.VideoTypeProperties.prototype.clearTransport = function() {
  return this.setTransport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.VideoTypeProperties.prototype.hasTransport = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional VideoProperties video = 4;
 * @return {?proto.rv.data.Media.VideoProperties}
 */
proto.rv.data.Media.VideoTypeProperties.prototype.getVideo = function() {
  return /** @type{?proto.rv.data.Media.VideoProperties} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Media.VideoProperties, 4));
};


/**
 * @param {?proto.rv.data.Media.VideoProperties|undefined} value
 * @return {!proto.rv.data.Media.VideoTypeProperties} returns this
*/
proto.rv.data.Media.VideoTypeProperties.prototype.setVideo = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media.VideoTypeProperties} returns this
 */
proto.rv.data.Media.VideoTypeProperties.prototype.clearVideo = function() {
  return this.setVideo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.VideoTypeProperties.prototype.hasVideo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional FileProperties file = 5;
 * @return {?proto.rv.data.FileProperties}
 */
proto.rv.data.Media.VideoTypeProperties.prototype.getFile = function() {
  return /** @type{?proto.rv.data.FileProperties} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.FileProperties, 5));
};


/**
 * @param {?proto.rv.data.FileProperties|undefined} value
 * @return {!proto.rv.data.Media.VideoTypeProperties} returns this
*/
proto.rv.data.Media.VideoTypeProperties.prototype.setFile = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media.VideoTypeProperties} returns this
 */
proto.rv.data.Media.VideoTypeProperties.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.VideoTypeProperties.prototype.hasFile = function() {
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
proto.rv.data.Media.LiveVideoTypeProperties.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Media.LiveVideoTypeProperties.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Media.LiveVideoTypeProperties} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.LiveVideoTypeProperties.toObject = function(includeInstance, msg) {
  var f, obj = {
drawing: (f = msg.getDrawing()) && proto.rv.data.Media.DrawingProperties.toObject(includeInstance, f),
audio: (f = msg.getAudio()) && proto.rv.data.Media.AudioProperties.toObject(includeInstance, f),
liveVideo: (f = msg.getLiveVideo()) && proto.rv.data.Media.LiveVideoProperties.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.Media.LiveVideoTypeProperties}
 */
proto.rv.data.Media.LiveVideoTypeProperties.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Media.LiveVideoTypeProperties;
  return proto.rv.data.Media.LiveVideoTypeProperties.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Media.LiveVideoTypeProperties} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Media.LiveVideoTypeProperties}
 */
proto.rv.data.Media.LiveVideoTypeProperties.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Media.DrawingProperties;
      reader.readMessage(value,proto.rv.data.Media.DrawingProperties.deserializeBinaryFromReader);
      msg.setDrawing(value);
      break;
    case 2:
      var value = new proto.rv.data.Media.AudioProperties;
      reader.readMessage(value,proto.rv.data.Media.AudioProperties.deserializeBinaryFromReader);
      msg.setAudio(value);
      break;
    case 3:
      var value = new proto.rv.data.Media.LiveVideoProperties;
      reader.readMessage(value,proto.rv.data.Media.LiveVideoProperties.deserializeBinaryFromReader);
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
proto.rv.data.Media.LiveVideoTypeProperties.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Media.LiveVideoTypeProperties.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Media.LiveVideoTypeProperties} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.LiveVideoTypeProperties.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDrawing();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Media.DrawingProperties.serializeBinaryToWriter
    );
  }
  f = message.getAudio();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.Media.AudioProperties.serializeBinaryToWriter
    );
  }
  f = message.getLiveVideo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.Media.LiveVideoProperties.serializeBinaryToWriter
    );
  }
};


/**
 * optional DrawingProperties drawing = 1;
 * @return {?proto.rv.data.Media.DrawingProperties}
 */
proto.rv.data.Media.LiveVideoTypeProperties.prototype.getDrawing = function() {
  return /** @type{?proto.rv.data.Media.DrawingProperties} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Media.DrawingProperties, 1));
};


/**
 * @param {?proto.rv.data.Media.DrawingProperties|undefined} value
 * @return {!proto.rv.data.Media.LiveVideoTypeProperties} returns this
*/
proto.rv.data.Media.LiveVideoTypeProperties.prototype.setDrawing = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media.LiveVideoTypeProperties} returns this
 */
proto.rv.data.Media.LiveVideoTypeProperties.prototype.clearDrawing = function() {
  return this.setDrawing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.LiveVideoTypeProperties.prototype.hasDrawing = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AudioProperties audio = 2;
 * @return {?proto.rv.data.Media.AudioProperties}
 */
proto.rv.data.Media.LiveVideoTypeProperties.prototype.getAudio = function() {
  return /** @type{?proto.rv.data.Media.AudioProperties} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Media.AudioProperties, 2));
};


/**
 * @param {?proto.rv.data.Media.AudioProperties|undefined} value
 * @return {!proto.rv.data.Media.LiveVideoTypeProperties} returns this
*/
proto.rv.data.Media.LiveVideoTypeProperties.prototype.setAudio = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media.LiveVideoTypeProperties} returns this
 */
proto.rv.data.Media.LiveVideoTypeProperties.prototype.clearAudio = function() {
  return this.setAudio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.LiveVideoTypeProperties.prototype.hasAudio = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LiveVideoProperties live_video = 3;
 * @return {?proto.rv.data.Media.LiveVideoProperties}
 */
proto.rv.data.Media.LiveVideoTypeProperties.prototype.getLiveVideo = function() {
  return /** @type{?proto.rv.data.Media.LiveVideoProperties} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Media.LiveVideoProperties, 3));
};


/**
 * @param {?proto.rv.data.Media.LiveVideoProperties|undefined} value
 * @return {!proto.rv.data.Media.LiveVideoTypeProperties} returns this
*/
proto.rv.data.Media.LiveVideoTypeProperties.prototype.setLiveVideo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media.LiveVideoTypeProperties} returns this
 */
proto.rv.data.Media.LiveVideoTypeProperties.prototype.clearLiveVideo = function() {
  return this.setLiveVideo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.LiveVideoTypeProperties.prototype.hasLiveVideo = function() {
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
proto.rv.data.Media.WebContentTypeProperties.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.Media.WebContentTypeProperties.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.Media.WebContentTypeProperties} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.WebContentTypeProperties.toObject = function(includeInstance, msg) {
  var f, obj = {
drawing: (f = msg.getDrawing()) && proto.rv.data.Media.DrawingProperties.toObject(includeInstance, f),
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
 * @return {!proto.rv.data.Media.WebContentTypeProperties}
 */
proto.rv.data.Media.WebContentTypeProperties.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.Media.WebContentTypeProperties;
  return proto.rv.data.Media.WebContentTypeProperties.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.Media.WebContentTypeProperties} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.Media.WebContentTypeProperties}
 */
proto.rv.data.Media.WebContentTypeProperties.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.Media.DrawingProperties;
      reader.readMessage(value,proto.rv.data.Media.DrawingProperties.deserializeBinaryFromReader);
      msg.setDrawing(value);
      break;
    case 2:
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
proto.rv.data.Media.WebContentTypeProperties.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.Media.WebContentTypeProperties.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.Media.WebContentTypeProperties} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.Media.WebContentTypeProperties.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDrawing();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.Media.DrawingProperties.serializeBinaryToWriter
    );
  }
  f = message.getUrl();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.URL.serializeBinaryToWriter
    );
  }
};


/**
 * optional DrawingProperties drawing = 1;
 * @return {?proto.rv.data.Media.DrawingProperties}
 */
proto.rv.data.Media.WebContentTypeProperties.prototype.getDrawing = function() {
  return /** @type{?proto.rv.data.Media.DrawingProperties} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Media.DrawingProperties, 1));
};


/**
 * @param {?proto.rv.data.Media.DrawingProperties|undefined} value
 * @return {!proto.rv.data.Media.WebContentTypeProperties} returns this
*/
proto.rv.data.Media.WebContentTypeProperties.prototype.setDrawing = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media.WebContentTypeProperties} returns this
 */
proto.rv.data.Media.WebContentTypeProperties.prototype.clearDrawing = function() {
  return this.setDrawing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.WebContentTypeProperties.prototype.hasDrawing = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional URL url = 2;
 * @return {?proto.rv.data.URL}
 */
proto.rv.data.Media.WebContentTypeProperties.prototype.getUrl = function() {
  return /** @type{?proto.rv.data.URL} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.URL, 2));
};


/**
 * @param {?proto.rv.data.URL|undefined} value
 * @return {!proto.rv.data.Media.WebContentTypeProperties} returns this
*/
proto.rv.data.Media.WebContentTypeProperties.prototype.setUrl = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media.WebContentTypeProperties} returns this
 */
proto.rv.data.Media.WebContentTypeProperties.prototype.clearUrl = function() {
  return this.setUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.WebContentTypeProperties.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional UUID uuid = 1;
 * @return {?proto.rv.data.UUID}
 */
proto.rv.data.Media.prototype.getUuid = function() {
  return /** @type{?proto.rv.data.UUID} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.UUID, 1));
};


/**
 * @param {?proto.rv.data.UUID|undefined} value
 * @return {!proto.rv.data.Media} returns this
*/
proto.rv.data.Media.prototype.setUuid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media} returns this
 */
proto.rv.data.Media.prototype.clearUuid = function() {
  return this.setUuid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.prototype.hasUuid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional URL url = 2;
 * @return {?proto.rv.data.URL}
 */
proto.rv.data.Media.prototype.getUrl = function() {
  return /** @type{?proto.rv.data.URL} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.URL, 2));
};


/**
 * @param {?proto.rv.data.URL|undefined} value
 * @return {!proto.rv.data.Media} returns this
*/
proto.rv.data.Media.prototype.setUrl = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media} returns this
 */
proto.rv.data.Media.prototype.clearUrl = function() {
  return this.setUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Metadata metadata = 3;
 * @return {?proto.rv.data.Media.Metadata}
 */
proto.rv.data.Media.prototype.getMetadata = function() {
  return /** @type{?proto.rv.data.Media.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Media.Metadata, 3));
};


/**
 * @param {?proto.rv.data.Media.Metadata|undefined} value
 * @return {!proto.rv.data.Media} returns this
*/
proto.rv.data.Media.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media} returns this
 */
proto.rv.data.Media.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AudioTypeProperties audio = 4;
 * @return {?proto.rv.data.Media.AudioTypeProperties}
 */
proto.rv.data.Media.prototype.getAudio = function() {
  return /** @type{?proto.rv.data.Media.AudioTypeProperties} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Media.AudioTypeProperties, 4));
};


/**
 * @param {?proto.rv.data.Media.AudioTypeProperties|undefined} value
 * @return {!proto.rv.data.Media} returns this
*/
proto.rv.data.Media.prototype.setAudio = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rv.data.Media.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media} returns this
 */
proto.rv.data.Media.prototype.clearAudio = function() {
  return this.setAudio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.prototype.hasAudio = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ImageTypeProperties image = 5;
 * @return {?proto.rv.data.Media.ImageTypeProperties}
 */
proto.rv.data.Media.prototype.getImage = function() {
  return /** @type{?proto.rv.data.Media.ImageTypeProperties} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Media.ImageTypeProperties, 5));
};


/**
 * @param {?proto.rv.data.Media.ImageTypeProperties|undefined} value
 * @return {!proto.rv.data.Media} returns this
*/
proto.rv.data.Media.prototype.setImage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.rv.data.Media.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media} returns this
 */
proto.rv.data.Media.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.prototype.hasImage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional VideoTypeProperties video = 6;
 * @return {?proto.rv.data.Media.VideoTypeProperties}
 */
proto.rv.data.Media.prototype.getVideo = function() {
  return /** @type{?proto.rv.data.Media.VideoTypeProperties} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Media.VideoTypeProperties, 6));
};


/**
 * @param {?proto.rv.data.Media.VideoTypeProperties|undefined} value
 * @return {!proto.rv.data.Media} returns this
*/
proto.rv.data.Media.prototype.setVideo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.rv.data.Media.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media} returns this
 */
proto.rv.data.Media.prototype.clearVideo = function() {
  return this.setVideo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.prototype.hasVideo = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional LiveVideoTypeProperties live_video = 7;
 * @return {?proto.rv.data.Media.LiveVideoTypeProperties}
 */
proto.rv.data.Media.prototype.getLiveVideo = function() {
  return /** @type{?proto.rv.data.Media.LiveVideoTypeProperties} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Media.LiveVideoTypeProperties, 7));
};


/**
 * @param {?proto.rv.data.Media.LiveVideoTypeProperties|undefined} value
 * @return {!proto.rv.data.Media} returns this
*/
proto.rv.data.Media.prototype.setLiveVideo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.rv.data.Media.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media} returns this
 */
proto.rv.data.Media.prototype.clearLiveVideo = function() {
  return this.setLiveVideo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.prototype.hasLiveVideo = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional WebContentTypeProperties web_content = 8;
 * @return {?proto.rv.data.Media.WebContentTypeProperties}
 */
proto.rv.data.Media.prototype.getWebContent = function() {
  return /** @type{?proto.rv.data.Media.WebContentTypeProperties} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Media.WebContentTypeProperties, 8));
};


/**
 * @param {?proto.rv.data.Media.WebContentTypeProperties|undefined} value
 * @return {!proto.rv.data.Media} returns this
*/
proto.rv.data.Media.prototype.setWebContent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.rv.data.Media.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.Media} returns this
 */
proto.rv.data.Media.prototype.clearWebContent = function() {
  return this.setWebContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.Media.prototype.hasWebContent = function() {
  return jspb.Message.getField(this, 8) != null;
};


