// source: proApi.proto
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

goog.provide('proto.rv.data.NetworkAPI');
goog.provide('proto.rv.data.NetworkAPI.Action');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Clear');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Clear.ClearinfoCase');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Clear.Layer');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Look');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Macro');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Message');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Message.MessageactionCase');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage');
goog.provide('proto.rv.data.NetworkAPI.Action.API_PrerollComplete');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Prop');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Prop.PropactionCase');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Stage');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ActionCase');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Stage.StageactionCase');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Status');
goog.provide('proto.rv.data.NetworkAPI.Action.API_StatusResponse');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Timer');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Timer.TimeractionCase');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Transport');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Transport.Pause');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Transport.Play');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Transport.TransportLayer');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Transport.TransportactionCase');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Trigger');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Trigger.Audio');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Trigger.Media');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PresentationsourceCase');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Trigger.TriggerdataCase');
goog.provide('proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput');
goog.provide('proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger');
goog.provide('proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.Operation');
goog.provide('proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.TriggerdataCase');
goog.provide('proto.rv.data.NetworkAPI.Action.CommandCase');
goog.provide('proto.rv.data.NetworkAPI.Action.StatusRequest');
goog.provide('proto.rv.data.NetworkAPI.CommandCase');
goog.provide('proto.rv.data.NetworkAPI.Group');
goog.provide('proto.rv.data.NetworkAPI.Group.Member');
goog.provide('proto.rv.data.NetworkAPI.GroupChange');
goog.provide('proto.rv.data.NetworkAPI.GroupChange.ChangeCase');
goog.provide('proto.rv.data.NetworkAPI.GroupInvite');
goog.provide('proto.rv.data.NetworkAPI.GroupJoin');
goog.provide('proto.rv.data.NetworkAPI.GroupKick');
goog.provide('proto.rv.data.NetworkAPI.GroupResponse');
goog.provide('proto.rv.data.NetworkAPI.GroupResponse.ResponseCase');
goog.provide('proto.rv.data.NetworkAPI.GroupResponse.Status');
goog.provide('proto.rv.data.NetworkAPI.GroupResponse.Success');
goog.provide('proto.rv.data.NetworkAPI.GroupStatus');
goog.provide('proto.rv.data.NetworkAPI.IndexOrNameIdentifier');
goog.provide('proto.rv.data.NetworkAPI.IndexOrNameIdentifier.ComponentCase');
goog.provide('proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair');
goog.provide('proto.rv.data.NetworkAPI.LinkStatus');
goog.provide('proto.rv.data.NetworkAPI.ServerState');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.rv.data.Message.TokenValue');
goog.require('proto.rv.data.ProLink.GroupDefinition');
goog.require('proto.rv.data.ProLink.MemberStatus');
goog.require('proto.rv.data.Timer.Configuration');

goog.forwardDeclare('proto.rv.data.ApplicationInfo.Platform');
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
proto.rv.data.NetworkAPI = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.NetworkAPI.oneofGroups_);
};
goog.inherits(proto.rv.data.NetworkAPI, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.displayName = 'proto.rv.data.NetworkAPI';
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
proto.rv.data.NetworkAPI.LinkStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.LinkStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.LinkStatus.displayName = 'proto.rv.data.NetworkAPI.LinkStatus';
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
proto.rv.data.NetworkAPI.Group = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.NetworkAPI.Group.repeatedFields_, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Group, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Group.displayName = 'proto.rv.data.NetworkAPI.Group';
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
proto.rv.data.NetworkAPI.Group.Member = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Group.Member, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Group.Member.displayName = 'proto.rv.data.NetworkAPI.Group.Member';
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
proto.rv.data.NetworkAPI.GroupChange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.NetworkAPI.GroupChange.oneofGroups_);
};
goog.inherits(proto.rv.data.NetworkAPI.GroupChange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.GroupChange.displayName = 'proto.rv.data.NetworkAPI.GroupChange';
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
proto.rv.data.NetworkAPI.GroupResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.NetworkAPI.GroupResponse.oneofGroups_);
};
goog.inherits(proto.rv.data.NetworkAPI.GroupResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.GroupResponse.displayName = 'proto.rv.data.NetworkAPI.GroupResponse';
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
proto.rv.data.NetworkAPI.GroupResponse.Success = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.GroupResponse.Success, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.GroupResponse.Success.displayName = 'proto.rv.data.NetworkAPI.GroupResponse.Success';
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
proto.rv.data.NetworkAPI.GroupResponse.Status = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.GroupResponse.Status, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.GroupResponse.Status.displayName = 'proto.rv.data.NetworkAPI.GroupResponse.Status';
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
proto.rv.data.NetworkAPI.GroupStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.GroupStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.GroupStatus.displayName = 'proto.rv.data.NetworkAPI.GroupStatus';
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
proto.rv.data.NetworkAPI.GroupInvite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.GroupInvite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.GroupInvite.displayName = 'proto.rv.data.NetworkAPI.GroupInvite';
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
proto.rv.data.NetworkAPI.GroupJoin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.GroupJoin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.GroupJoin.displayName = 'proto.rv.data.NetworkAPI.GroupJoin';
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
proto.rv.data.NetworkAPI.GroupKick = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.GroupKick, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.GroupKick.displayName = 'proto.rv.data.NetworkAPI.GroupKick';
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
proto.rv.data.NetworkAPI.ServerState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.ServerState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.ServerState.displayName = 'proto.rv.data.NetworkAPI.ServerState';
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
proto.rv.data.NetworkAPI.Action = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.NetworkAPI.Action.oneofGroups_);
};
goog.inherits(proto.rv.data.NetworkAPI.Action, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.displayName = 'proto.rv.data.NetworkAPI.Action';
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
proto.rv.data.NetworkAPI.Action.API_Clear = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.NetworkAPI.Action.API_Clear.oneofGroups_);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Clear, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Clear.displayName = 'proto.rv.data.NetworkAPI.Action.API_Clear';
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
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.oneofGroups_);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.displayName = 'proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger';
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
proto.rv.data.NetworkAPI.Action.API_PrerollComplete = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_PrerollComplete, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_PrerollComplete.displayName = 'proto.rv.data.NetworkAPI.Action.API_PrerollComplete';
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
proto.rv.data.NetworkAPI.Action.API_Trigger = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.NetworkAPI.Action.API_Trigger.oneofGroups_);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Trigger, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Trigger.displayName = 'proto.rv.data.NetworkAPI.Action.API_Trigger';
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
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.oneofGroups_);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.displayName = 'proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation';
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
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation.repeatedFields_, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation.displayName = 'proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation';
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
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation.displayName = 'proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation';
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
proto.rv.data.NetworkAPI.Action.API_Trigger.Media = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.NetworkAPI.Action.API_Trigger.Media.repeatedFields_, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Trigger.Media, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Trigger.Media.displayName = 'proto.rv.data.NetworkAPI.Action.API_Trigger.Media';
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
proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput.displayName = 'proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput';
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
proto.rv.data.NetworkAPI.Action.API_Trigger.Audio = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.NetworkAPI.Action.API_Trigger.Audio.repeatedFields_, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Trigger.Audio, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Trigger.Audio.displayName = 'proto.rv.data.NetworkAPI.Action.API_Trigger.Audio';
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
proto.rv.data.NetworkAPI.Action.API_Transport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.NetworkAPI.Action.API_Transport.oneofGroups_);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Transport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Transport.displayName = 'proto.rv.data.NetworkAPI.Action.API_Transport';
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
proto.rv.data.NetworkAPI.Action.API_Transport.Play = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Transport.Play, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Transport.Play.displayName = 'proto.rv.data.NetworkAPI.Action.API_Transport.Play';
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
proto.rv.data.NetworkAPI.Action.API_Transport.Pause = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Transport.Pause, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Transport.Pause.displayName = 'proto.rv.data.NetworkAPI.Action.API_Transport.Pause';
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
proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward.displayName = 'proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward';
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
proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward.displayName = 'proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward';
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
proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd.displayName = 'proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd';
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
proto.rv.data.NetworkAPI.Action.API_Prop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.NetworkAPI.Action.API_Prop.oneofGroups_);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Prop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Prop.displayName = 'proto.rv.data.NetworkAPI.Action.API_Prop';
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
proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp.displayName = 'proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp';
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
proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp.displayName = 'proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp';
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
proto.rv.data.NetworkAPI.Action.API_Timer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.NetworkAPI.Action.API_Timer.oneofGroups_);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Timer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Timer.displayName = 'proto.rv.data.NetworkAPI.Action.API_Timer';
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
proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer.displayName = 'proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer';
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
proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer.displayName = 'proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer';
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
proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer.displayName = 'proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer';
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
proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer.displayName = 'proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer';
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
proto.rv.data.NetworkAPI.Action.API_Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.NetworkAPI.Action.API_Message.oneofGroups_);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Message.displayName = 'proto.rv.data.NetworkAPI.Action.API_Message';
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
proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.repeatedFields_, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.displayName = 'proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage';
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
proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage.displayName = 'proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage';
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
proto.rv.data.NetworkAPI.Action.API_Macro = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.NetworkAPI.Action.API_Macro.repeatedFields_, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Macro, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Macro.displayName = 'proto.rv.data.NetworkAPI.Action.API_Macro';
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
proto.rv.data.NetworkAPI.Action.API_Look = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Look, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Look.displayName = 'proto.rv.data.NetworkAPI.Action.API_Look';
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
proto.rv.data.NetworkAPI.Action.API_Stage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.NetworkAPI.Action.API_Stage.oneofGroups_);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Stage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Stage.displayName = 'proto.rv.data.NetworkAPI.Action.API_Stage';
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
proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts.repeatedFields_, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts.displayName = 'proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts';
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
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.oneofGroups_);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.displayName = 'proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage';
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
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage.displayName = 'proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage';
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
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage.displayName = 'proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage';
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
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage.displayName = 'proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage';
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
proto.rv.data.NetworkAPI.Action.StatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.StatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.StatusRequest.displayName = 'proto.rv.data.NetworkAPI.Action.StatusRequest';
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
proto.rv.data.NetworkAPI.Action.API_Status = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_Status, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_Status.displayName = 'proto.rv.data.NetworkAPI.Action.API_Status';
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
proto.rv.data.NetworkAPI.Action.API_StatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.Action.API_StatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.Action.API_StatusResponse.displayName = 'proto.rv.data.NetworkAPI.Action.API_StatusResponse';
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
proto.rv.data.NetworkAPI.IndexOrNameIdentifier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.data.NetworkAPI.IndexOrNameIdentifier.oneofGroups_);
};
goog.inherits(proto.rv.data.NetworkAPI.IndexOrNameIdentifier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.IndexOrNameIdentifier.displayName = 'proto.rv.data.NetworkAPI.IndexOrNameIdentifier';
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
proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair.displayName = 'proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.NetworkAPI.oneofGroups_ = [[1,2,5,6]];

/**
 * @enum {number}
 */
proto.rv.data.NetworkAPI.CommandCase = {
  COMMAND_NOT_SET: 0,
  ACTION: 1,
  SERVER_STATE: 2,
  GROUP_CHANGE: 5,
  GROUP_RESPONSE: 6
};

/**
 * @return {proto.rv.data.NetworkAPI.CommandCase}
 */
proto.rv.data.NetworkAPI.prototype.getCommandCase = function() {
  return /** @type {proto.rv.data.NetworkAPI.CommandCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.NetworkAPI.oneofGroups_[0]));
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
proto.rv.data.NetworkAPI.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.toObject = function(includeInstance, msg) {
  var f, obj = {
action: (f = msg.getAction()) && proto.rv.data.NetworkAPI.Action.toObject(includeInstance, f),
serverState: (f = msg.getServerState()) && proto.rv.data.NetworkAPI.ServerState.toObject(includeInstance, f),
groupChange: (f = msg.getGroupChange()) && proto.rv.data.NetworkAPI.GroupChange.toObject(includeInstance, f),
groupResponse: (f = msg.getGroupResponse()) && proto.rv.data.NetworkAPI.GroupResponse.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI}
 */
proto.rv.data.NetworkAPI.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI;
  return proto.rv.data.NetworkAPI.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI}
 */
proto.rv.data.NetworkAPI.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.Action;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    case 2:
      var value = new proto.rv.data.NetworkAPI.ServerState;
      reader.readMessage(value,proto.rv.data.NetworkAPI.ServerState.deserializeBinaryFromReader);
      msg.setServerState(value);
      break;
    case 5:
      var value = new proto.rv.data.NetworkAPI.GroupChange;
      reader.readMessage(value,proto.rv.data.NetworkAPI.GroupChange.deserializeBinaryFromReader);
      msg.setGroupChange(value);
      break;
    case 6:
      var value = new proto.rv.data.NetworkAPI.GroupResponse;
      reader.readMessage(value,proto.rv.data.NetworkAPI.GroupResponse.deserializeBinaryFromReader);
      msg.setGroupResponse(value);
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
proto.rv.data.NetworkAPI.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.Action.serializeBinaryToWriter
    );
  }
  f = message.getServerState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.NetworkAPI.ServerState.serializeBinaryToWriter
    );
  }
  f = message.getGroupChange();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.data.NetworkAPI.GroupChange.serializeBinaryToWriter
    );
  }
  f = message.getGroupResponse();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.rv.data.NetworkAPI.GroupResponse.serializeBinaryToWriter
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
proto.rv.data.NetworkAPI.LinkStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.LinkStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.LinkStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.LinkStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
platform: jspb.Message.getFieldWithDefault(msg, 1, 0),
osVersion: jspb.Message.getFieldWithDefault(msg, 2, ""),
version: jspb.Message.getFieldWithDefault(msg, 3, ""),
description: jspb.Message.getFieldWithDefault(msg, 4, ""),
groupInfo: (f = msg.getGroupInfo()) && proto.rv.data.NetworkAPI.Group.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.LinkStatus}
 */
proto.rv.data.NetworkAPI.LinkStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.LinkStatus;
  return proto.rv.data.NetworkAPI.LinkStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.LinkStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.LinkStatus}
 */
proto.rv.data.NetworkAPI.LinkStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.ApplicationInfo.Platform} */ (reader.readEnum());
      msg.setPlatform(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOsVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = new proto.rv.data.NetworkAPI.Group;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Group.deserializeBinaryFromReader);
      msg.setGroupInfo(value);
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
proto.rv.data.NetworkAPI.LinkStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.LinkStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.LinkStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.LinkStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlatform();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getOsVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getGroupInfo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.data.NetworkAPI.Group.serializeBinaryToWriter
    );
  }
};


/**
 * optional ApplicationInfo.Platform platform = 1;
 * @return {!proto.rv.data.ApplicationInfo.Platform}
 */
proto.rv.data.NetworkAPI.LinkStatus.prototype.getPlatform = function() {
  return /** @type {!proto.rv.data.ApplicationInfo.Platform} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.ApplicationInfo.Platform} value
 * @return {!proto.rv.data.NetworkAPI.LinkStatus} returns this
 */
proto.rv.data.NetworkAPI.LinkStatus.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string os_version = 2;
 * @return {string}
 */
proto.rv.data.NetworkAPI.LinkStatus.prototype.getOsVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.NetworkAPI.LinkStatus} returns this
 */
proto.rv.data.NetworkAPI.LinkStatus.prototype.setOsVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string version = 3;
 * @return {string}
 */
proto.rv.data.NetworkAPI.LinkStatus.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.NetworkAPI.LinkStatus} returns this
 */
proto.rv.data.NetworkAPI.LinkStatus.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.rv.data.NetworkAPI.LinkStatus.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.NetworkAPI.LinkStatus} returns this
 */
proto.rv.data.NetworkAPI.LinkStatus.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Group group_info = 5;
 * @return {?proto.rv.data.NetworkAPI.Group}
 */
proto.rv.data.NetworkAPI.LinkStatus.prototype.getGroupInfo = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Group} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Group, 5));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Group|undefined} value
 * @return {!proto.rv.data.NetworkAPI.LinkStatus} returns this
*/
proto.rv.data.NetworkAPI.LinkStatus.prototype.setGroupInfo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.LinkStatus} returns this
 */
proto.rv.data.NetworkAPI.LinkStatus.prototype.clearGroupInfo = function() {
  return this.setGroupInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.LinkStatus.prototype.hasGroupInfo = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.NetworkAPI.Group.repeatedFields_ = [2];



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
proto.rv.data.NetworkAPI.Group.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Group.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Group} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Group.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
membersList: jspb.Message.toObjectList(msg.getMembersList(),
    proto.rv.data.NetworkAPI.Group.Member.toObject, includeInstance)
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
 * @return {!proto.rv.data.NetworkAPI.Group}
 */
proto.rv.data.NetworkAPI.Group.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Group;
  return proto.rv.data.NetworkAPI.Group.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Group} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Group}
 */
proto.rv.data.NetworkAPI.Group.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.rv.data.NetworkAPI.Group.Member;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Group.Member.deserializeBinaryFromReader);
      msg.addMembers(value);
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
proto.rv.data.NetworkAPI.Group.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Group.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Group} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Group.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMembersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.rv.data.NetworkAPI.Group.Member.serializeBinaryToWriter
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
proto.rv.data.NetworkAPI.Group.Member.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Group.Member.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Group.Member} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Group.Member.toObject = function(includeInstance, msg) {
  var f, obj = {
ipAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
port: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.rv.data.NetworkAPI.Group.Member}
 */
proto.rv.data.NetworkAPI.Group.Member.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Group.Member;
  return proto.rv.data.NetworkAPI.Group.Member.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Group.Member} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Group.Member}
 */
proto.rv.data.NetworkAPI.Group.Member.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
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
proto.rv.data.NetworkAPI.Group.Member.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Group.Member.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Group.Member} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Group.Member.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIpAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string ip_address = 1;
 * @return {string}
 */
proto.rv.data.NetworkAPI.Group.Member.prototype.getIpAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.NetworkAPI.Group.Member} returns this
 */
proto.rv.data.NetworkAPI.Group.Member.prototype.setIpAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 port = 2;
 * @return {number}
 */
proto.rv.data.NetworkAPI.Group.Member.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.NetworkAPI.Group.Member} returns this
 */
proto.rv.data.NetworkAPI.Group.Member.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.rv.data.NetworkAPI.Group.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.NetworkAPI.Group} returns this
 */
proto.rv.data.NetworkAPI.Group.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Member members = 2;
 * @return {!Array<!proto.rv.data.NetworkAPI.Group.Member>}
 */
proto.rv.data.NetworkAPI.Group.prototype.getMembersList = function() {
  return /** @type{!Array<!proto.rv.data.NetworkAPI.Group.Member>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.NetworkAPI.Group.Member, 2));
};


/**
 * @param {!Array<!proto.rv.data.NetworkAPI.Group.Member>} value
 * @return {!proto.rv.data.NetworkAPI.Group} returns this
*/
proto.rv.data.NetworkAPI.Group.prototype.setMembersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.rv.data.NetworkAPI.Group.Member=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.NetworkAPI.Group.Member}
 */
proto.rv.data.NetworkAPI.Group.prototype.addMembers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.rv.data.NetworkAPI.Group.Member, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.NetworkAPI.Group} returns this
 */
proto.rv.data.NetworkAPI.Group.prototype.clearMembersList = function() {
  return this.setMembersList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.NetworkAPI.GroupChange.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.rv.data.NetworkAPI.GroupChange.ChangeCase = {
  CHANGE_NOT_SET: 0,
  INVITE: 1,
  JOIN: 2,
  KICK: 3,
  STATUS: 4
};

/**
 * @return {proto.rv.data.NetworkAPI.GroupChange.ChangeCase}
 */
proto.rv.data.NetworkAPI.GroupChange.prototype.getChangeCase = function() {
  return /** @type {proto.rv.data.NetworkAPI.GroupChange.ChangeCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.NetworkAPI.GroupChange.oneofGroups_[0]));
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
proto.rv.data.NetworkAPI.GroupChange.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.GroupChange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.GroupChange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.GroupChange.toObject = function(includeInstance, msg) {
  var f, obj = {
invite: (f = msg.getInvite()) && proto.rv.data.NetworkAPI.GroupInvite.toObject(includeInstance, f),
join: (f = msg.getJoin()) && proto.rv.data.NetworkAPI.GroupJoin.toObject(includeInstance, f),
kick: (f = msg.getKick()) && proto.rv.data.NetworkAPI.GroupKick.toObject(includeInstance, f),
status: (f = msg.getStatus()) && proto.rv.data.NetworkAPI.GroupStatus.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.GroupChange}
 */
proto.rv.data.NetworkAPI.GroupChange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.GroupChange;
  return proto.rv.data.NetworkAPI.GroupChange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.GroupChange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.GroupChange}
 */
proto.rv.data.NetworkAPI.GroupChange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.GroupInvite;
      reader.readMessage(value,proto.rv.data.NetworkAPI.GroupInvite.deserializeBinaryFromReader);
      msg.setInvite(value);
      break;
    case 2:
      var value = new proto.rv.data.NetworkAPI.GroupJoin;
      reader.readMessage(value,proto.rv.data.NetworkAPI.GroupJoin.deserializeBinaryFromReader);
      msg.setJoin(value);
      break;
    case 3:
      var value = new proto.rv.data.NetworkAPI.GroupKick;
      reader.readMessage(value,proto.rv.data.NetworkAPI.GroupKick.deserializeBinaryFromReader);
      msg.setKick(value);
      break;
    case 4:
      var value = new proto.rv.data.NetworkAPI.GroupStatus;
      reader.readMessage(value,proto.rv.data.NetworkAPI.GroupStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
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
proto.rv.data.NetworkAPI.GroupChange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.GroupChange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.GroupChange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.GroupChange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvite();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.GroupInvite.serializeBinaryToWriter
    );
  }
  f = message.getJoin();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.NetworkAPI.GroupJoin.serializeBinaryToWriter
    );
  }
  f = message.getKick();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.NetworkAPI.GroupKick.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.data.NetworkAPI.GroupStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional GroupInvite invite = 1;
 * @return {?proto.rv.data.NetworkAPI.GroupInvite}
 */
proto.rv.data.NetworkAPI.GroupChange.prototype.getInvite = function() {
  return /** @type{?proto.rv.data.NetworkAPI.GroupInvite} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.GroupInvite, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.GroupInvite|undefined} value
 * @return {!proto.rv.data.NetworkAPI.GroupChange} returns this
*/
proto.rv.data.NetworkAPI.GroupChange.prototype.setInvite = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.data.NetworkAPI.GroupChange.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.GroupChange} returns this
 */
proto.rv.data.NetworkAPI.GroupChange.prototype.clearInvite = function() {
  return this.setInvite(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.GroupChange.prototype.hasInvite = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GroupJoin join = 2;
 * @return {?proto.rv.data.NetworkAPI.GroupJoin}
 */
proto.rv.data.NetworkAPI.GroupChange.prototype.getJoin = function() {
  return /** @type{?proto.rv.data.NetworkAPI.GroupJoin} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.GroupJoin, 2));
};


/**
 * @param {?proto.rv.data.NetworkAPI.GroupJoin|undefined} value
 * @return {!proto.rv.data.NetworkAPI.GroupChange} returns this
*/
proto.rv.data.NetworkAPI.GroupChange.prototype.setJoin = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.data.NetworkAPI.GroupChange.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.GroupChange} returns this
 */
proto.rv.data.NetworkAPI.GroupChange.prototype.clearJoin = function() {
  return this.setJoin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.GroupChange.prototype.hasJoin = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GroupKick kick = 3;
 * @return {?proto.rv.data.NetworkAPI.GroupKick}
 */
proto.rv.data.NetworkAPI.GroupChange.prototype.getKick = function() {
  return /** @type{?proto.rv.data.NetworkAPI.GroupKick} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.GroupKick, 3));
};


/**
 * @param {?proto.rv.data.NetworkAPI.GroupKick|undefined} value
 * @return {!proto.rv.data.NetworkAPI.GroupChange} returns this
*/
proto.rv.data.NetworkAPI.GroupChange.prototype.setKick = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.data.NetworkAPI.GroupChange.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.GroupChange} returns this
 */
proto.rv.data.NetworkAPI.GroupChange.prototype.clearKick = function() {
  return this.setKick(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.GroupChange.prototype.hasKick = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional GroupStatus status = 4;
 * @return {?proto.rv.data.NetworkAPI.GroupStatus}
 */
proto.rv.data.NetworkAPI.GroupChange.prototype.getStatus = function() {
  return /** @type{?proto.rv.data.NetworkAPI.GroupStatus} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.GroupStatus, 4));
};


/**
 * @param {?proto.rv.data.NetworkAPI.GroupStatus|undefined} value
 * @return {!proto.rv.data.NetworkAPI.GroupChange} returns this
*/
proto.rv.data.NetworkAPI.GroupChange.prototype.setStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rv.data.NetworkAPI.GroupChange.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.GroupChange} returns this
 */
proto.rv.data.NetworkAPI.GroupChange.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.GroupChange.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.NetworkAPI.GroupResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.rv.data.NetworkAPI.GroupResponse.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  SUCCESS: 1,
  STATUS: 2
};

/**
 * @return {proto.rv.data.NetworkAPI.GroupResponse.ResponseCase}
 */
proto.rv.data.NetworkAPI.GroupResponse.prototype.getResponseCase = function() {
  return /** @type {proto.rv.data.NetworkAPI.GroupResponse.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.NetworkAPI.GroupResponse.oneofGroups_[0]));
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
proto.rv.data.NetworkAPI.GroupResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.GroupResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.GroupResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.GroupResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
success: (f = msg.getSuccess()) && proto.rv.data.NetworkAPI.GroupResponse.Success.toObject(includeInstance, f),
status: (f = msg.getStatus()) && proto.rv.data.NetworkAPI.GroupResponse.Status.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.GroupResponse}
 */
proto.rv.data.NetworkAPI.GroupResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.GroupResponse;
  return proto.rv.data.NetworkAPI.GroupResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.GroupResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.GroupResponse}
 */
proto.rv.data.NetworkAPI.GroupResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.GroupResponse.Success;
      reader.readMessage(value,proto.rv.data.NetworkAPI.GroupResponse.Success.deserializeBinaryFromReader);
      msg.setSuccess(value);
      break;
    case 2:
      var value = new proto.rv.data.NetworkAPI.GroupResponse.Status;
      reader.readMessage(value,proto.rv.data.NetworkAPI.GroupResponse.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
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
proto.rv.data.NetworkAPI.GroupResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.GroupResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.GroupResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.GroupResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.GroupResponse.Success.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.NetworkAPI.GroupResponse.Status.serializeBinaryToWriter
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
proto.rv.data.NetworkAPI.GroupResponse.Success.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.GroupResponse.Success.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.GroupResponse.Success} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.GroupResponse.Success.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.data.NetworkAPI.GroupResponse.Success}
 */
proto.rv.data.NetworkAPI.GroupResponse.Success.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.GroupResponse.Success;
  return proto.rv.data.NetworkAPI.GroupResponse.Success.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.GroupResponse.Success} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.GroupResponse.Success}
 */
proto.rv.data.NetworkAPI.GroupResponse.Success.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.data.NetworkAPI.GroupResponse.Success.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.GroupResponse.Success.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.GroupResponse.Success} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.GroupResponse.Success.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.data.NetworkAPI.GroupResponse.Status.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.GroupResponse.Status.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.GroupResponse.Status} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.GroupResponse.Status.toObject = function(includeInstance, msg) {
  var f, obj = {
memberName: jspb.Message.getFieldWithDefault(msg, 1, ""),
groupName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.rv.data.NetworkAPI.GroupResponse.Status}
 */
proto.rv.data.NetworkAPI.GroupResponse.Status.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.GroupResponse.Status;
  return proto.rv.data.NetworkAPI.GroupResponse.Status.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.GroupResponse.Status} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.GroupResponse.Status}
 */
proto.rv.data.NetworkAPI.GroupResponse.Status.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemberName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupName(value);
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
proto.rv.data.NetworkAPI.GroupResponse.Status.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.GroupResponse.Status.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.GroupResponse.Status} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.GroupResponse.Status.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemberName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGroupName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string member_name = 1;
 * @return {string}
 */
proto.rv.data.NetworkAPI.GroupResponse.Status.prototype.getMemberName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.NetworkAPI.GroupResponse.Status} returns this
 */
proto.rv.data.NetworkAPI.GroupResponse.Status.prototype.setMemberName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string group_name = 2;
 * @return {string}
 */
proto.rv.data.NetworkAPI.GroupResponse.Status.prototype.getGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.NetworkAPI.GroupResponse.Status} returns this
 */
proto.rv.data.NetworkAPI.GroupResponse.Status.prototype.setGroupName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Success success = 1;
 * @return {?proto.rv.data.NetworkAPI.GroupResponse.Success}
 */
proto.rv.data.NetworkAPI.GroupResponse.prototype.getSuccess = function() {
  return /** @type{?proto.rv.data.NetworkAPI.GroupResponse.Success} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.GroupResponse.Success, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.GroupResponse.Success|undefined} value
 * @return {!proto.rv.data.NetworkAPI.GroupResponse} returns this
*/
proto.rv.data.NetworkAPI.GroupResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.data.NetworkAPI.GroupResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.GroupResponse} returns this
 */
proto.rv.data.NetworkAPI.GroupResponse.prototype.clearSuccess = function() {
  return this.setSuccess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.GroupResponse.prototype.hasSuccess = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Status status = 2;
 * @return {?proto.rv.data.NetworkAPI.GroupResponse.Status}
 */
proto.rv.data.NetworkAPI.GroupResponse.prototype.getStatus = function() {
  return /** @type{?proto.rv.data.NetworkAPI.GroupResponse.Status} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.GroupResponse.Status, 2));
};


/**
 * @param {?proto.rv.data.NetworkAPI.GroupResponse.Status|undefined} value
 * @return {!proto.rv.data.NetworkAPI.GroupResponse} returns this
*/
proto.rv.data.NetworkAPI.GroupResponse.prototype.setStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.data.NetworkAPI.GroupResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.GroupResponse} returns this
 */
proto.rv.data.NetworkAPI.GroupResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.GroupResponse.prototype.hasStatus = function() {
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
proto.rv.data.NetworkAPI.GroupStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.GroupStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.GroupStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.GroupStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
member: (f = msg.getMember()) && proto.rv.data.NetworkAPI.Group.Member.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.GroupStatus}
 */
proto.rv.data.NetworkAPI.GroupStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.GroupStatus;
  return proto.rv.data.NetworkAPI.GroupStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.GroupStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.GroupStatus}
 */
proto.rv.data.NetworkAPI.GroupStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.Group.Member;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Group.Member.deserializeBinaryFromReader);
      msg.setMember(value);
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
proto.rv.data.NetworkAPI.GroupStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.GroupStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.GroupStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.GroupStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMember();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.Group.Member.serializeBinaryToWriter
    );
  }
};


/**
 * optional Group.Member member = 1;
 * @return {?proto.rv.data.NetworkAPI.Group.Member}
 */
proto.rv.data.NetworkAPI.GroupStatus.prototype.getMember = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Group.Member} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Group.Member, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Group.Member|undefined} value
 * @return {!proto.rv.data.NetworkAPI.GroupStatus} returns this
*/
proto.rv.data.NetworkAPI.GroupStatus.prototype.setMember = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.GroupStatus} returns this
 */
proto.rv.data.NetworkAPI.GroupStatus.prototype.clearMember = function() {
  return this.setMember(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.GroupStatus.prototype.hasMember = function() {
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
proto.rv.data.NetworkAPI.GroupInvite.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.GroupInvite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.GroupInvite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.GroupInvite.toObject = function(includeInstance, msg) {
  var f, obj = {
groupInfo: (f = msg.getGroupInfo()) && proto.rv.data.NetworkAPI.Group.toObject(includeInstance, f),
secret: jspb.Message.getFieldWithDefault(msg, 2, ""),
prospect: (f = msg.getProspect()) && proto.rv.data.NetworkAPI.Group.Member.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.GroupInvite}
 */
proto.rv.data.NetworkAPI.GroupInvite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.GroupInvite;
  return proto.rv.data.NetworkAPI.GroupInvite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.GroupInvite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.GroupInvite}
 */
proto.rv.data.NetworkAPI.GroupInvite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.Group;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Group.deserializeBinaryFromReader);
      msg.setGroupInfo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecret(value);
      break;
    case 3:
      var value = new proto.rv.data.NetworkAPI.Group.Member;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Group.Member.deserializeBinaryFromReader);
      msg.setProspect(value);
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
proto.rv.data.NetworkAPI.GroupInvite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.GroupInvite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.GroupInvite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.GroupInvite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.Group.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProspect();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.NetworkAPI.Group.Member.serializeBinaryToWriter
    );
  }
};


/**
 * optional Group group_info = 1;
 * @return {?proto.rv.data.NetworkAPI.Group}
 */
proto.rv.data.NetworkAPI.GroupInvite.prototype.getGroupInfo = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Group} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Group, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Group|undefined} value
 * @return {!proto.rv.data.NetworkAPI.GroupInvite} returns this
*/
proto.rv.data.NetworkAPI.GroupInvite.prototype.setGroupInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.GroupInvite} returns this
 */
proto.rv.data.NetworkAPI.GroupInvite.prototype.clearGroupInfo = function() {
  return this.setGroupInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.GroupInvite.prototype.hasGroupInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string secret = 2;
 * @return {string}
 */
proto.rv.data.NetworkAPI.GroupInvite.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.NetworkAPI.GroupInvite} returns this
 */
proto.rv.data.NetworkAPI.GroupInvite.prototype.setSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Group.Member prospect = 3;
 * @return {?proto.rv.data.NetworkAPI.Group.Member}
 */
proto.rv.data.NetworkAPI.GroupInvite.prototype.getProspect = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Group.Member} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Group.Member, 3));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Group.Member|undefined} value
 * @return {!proto.rv.data.NetworkAPI.GroupInvite} returns this
*/
proto.rv.data.NetworkAPI.GroupInvite.prototype.setProspect = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.GroupInvite} returns this
 */
proto.rv.data.NetworkAPI.GroupInvite.prototype.clearProspect = function() {
  return this.setProspect(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.GroupInvite.prototype.hasProspect = function() {
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
proto.rv.data.NetworkAPI.GroupJoin.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.GroupJoin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.GroupJoin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.GroupJoin.toObject = function(includeInstance, msg) {
  var f, obj = {
sponsor: (f = msg.getSponsor()) && proto.rv.data.NetworkAPI.Group.Member.toObject(includeInstance, f),
prospect: (f = msg.getProspect()) && proto.rv.data.NetworkAPI.Group.Member.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.GroupJoin}
 */
proto.rv.data.NetworkAPI.GroupJoin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.GroupJoin;
  return proto.rv.data.NetworkAPI.GroupJoin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.GroupJoin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.GroupJoin}
 */
proto.rv.data.NetworkAPI.GroupJoin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.Group.Member;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Group.Member.deserializeBinaryFromReader);
      msg.setSponsor(value);
      break;
    case 2:
      var value = new proto.rv.data.NetworkAPI.Group.Member;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Group.Member.deserializeBinaryFromReader);
      msg.setProspect(value);
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
proto.rv.data.NetworkAPI.GroupJoin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.GroupJoin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.GroupJoin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.GroupJoin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSponsor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.Group.Member.serializeBinaryToWriter
    );
  }
  f = message.getProspect();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.NetworkAPI.Group.Member.serializeBinaryToWriter
    );
  }
};


/**
 * optional Group.Member sponsor = 1;
 * @return {?proto.rv.data.NetworkAPI.Group.Member}
 */
proto.rv.data.NetworkAPI.GroupJoin.prototype.getSponsor = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Group.Member} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Group.Member, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Group.Member|undefined} value
 * @return {!proto.rv.data.NetworkAPI.GroupJoin} returns this
*/
proto.rv.data.NetworkAPI.GroupJoin.prototype.setSponsor = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.GroupJoin} returns this
 */
proto.rv.data.NetworkAPI.GroupJoin.prototype.clearSponsor = function() {
  return this.setSponsor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.GroupJoin.prototype.hasSponsor = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Group.Member prospect = 2;
 * @return {?proto.rv.data.NetworkAPI.Group.Member}
 */
proto.rv.data.NetworkAPI.GroupJoin.prototype.getProspect = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Group.Member} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Group.Member, 2));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Group.Member|undefined} value
 * @return {!proto.rv.data.NetworkAPI.GroupJoin} returns this
*/
proto.rv.data.NetworkAPI.GroupJoin.prototype.setProspect = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.GroupJoin} returns this
 */
proto.rv.data.NetworkAPI.GroupJoin.prototype.clearProspect = function() {
  return this.setProspect(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.GroupJoin.prototype.hasProspect = function() {
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
proto.rv.data.NetworkAPI.GroupKick.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.GroupKick.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.GroupKick} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.GroupKick.toObject = function(includeInstance, msg) {
  var f, obj = {
member: (f = msg.getMember()) && proto.rv.data.NetworkAPI.Group.Member.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.GroupKick}
 */
proto.rv.data.NetworkAPI.GroupKick.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.GroupKick;
  return proto.rv.data.NetworkAPI.GroupKick.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.GroupKick} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.GroupKick}
 */
proto.rv.data.NetworkAPI.GroupKick.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.Group.Member;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Group.Member.deserializeBinaryFromReader);
      msg.setMember(value);
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
proto.rv.data.NetworkAPI.GroupKick.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.GroupKick.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.GroupKick} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.GroupKick.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMember();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.Group.Member.serializeBinaryToWriter
    );
  }
};


/**
 * optional Group.Member member = 1;
 * @return {?proto.rv.data.NetworkAPI.Group.Member}
 */
proto.rv.data.NetworkAPI.GroupKick.prototype.getMember = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Group.Member} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Group.Member, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Group.Member|undefined} value
 * @return {!proto.rv.data.NetworkAPI.GroupKick} returns this
*/
proto.rv.data.NetworkAPI.GroupKick.prototype.setMember = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.GroupKick} returns this
 */
proto.rv.data.NetworkAPI.GroupKick.prototype.clearMember = function() {
  return this.setMember(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.GroupKick.prototype.hasMember = function() {
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
proto.rv.data.NetworkAPI.ServerState.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.ServerState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.ServerState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.ServerState.toObject = function(includeInstance, msg) {
  var f, obj = {
localIp: jspb.Message.getFieldWithDefault(msg, 1, ""),
publicIp: jspb.Message.getFieldWithDefault(msg, 2, ""),
port: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.rv.data.NetworkAPI.ServerState}
 */
proto.rv.data.NetworkAPI.ServerState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.ServerState;
  return proto.rv.data.NetworkAPI.ServerState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.ServerState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.ServerState}
 */
proto.rv.data.NetworkAPI.ServerState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalIp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicIp(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
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
proto.rv.data.NetworkAPI.ServerState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.ServerState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.ServerState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.ServerState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocalIp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPublicIp();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string local_ip = 1;
 * @return {string}
 */
proto.rv.data.NetworkAPI.ServerState.prototype.getLocalIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.NetworkAPI.ServerState} returns this
 */
proto.rv.data.NetworkAPI.ServerState.prototype.setLocalIp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string public_ip = 2;
 * @return {string}
 */
proto.rv.data.NetworkAPI.ServerState.prototype.getPublicIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.NetworkAPI.ServerState} returns this
 */
proto.rv.data.NetworkAPI.ServerState.prototype.setPublicIp = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 port = 3;
 * @return {number}
 */
proto.rv.data.NetworkAPI.ServerState.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.NetworkAPI.ServerState} returns this
 */
proto.rv.data.NetworkAPI.ServerState.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.NetworkAPI.Action.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12,13]];

/**
 * @enum {number}
 */
proto.rv.data.NetworkAPI.Action.CommandCase = {
  COMMAND_NOT_SET: 0,
  CLEAR: 1,
  TRIGGER: 2,
  TRANSPORT: 3,
  PROP: 4,
  TIMER: 5,
  MESSAGE_: 6,
  MACRO: 7,
  LOOK: 8,
  STAGE: 9,
  STATUS: 10,
  STATUS_RESPONSE: 11,
  TWO_STEP_TRIGGER: 12,
  PREROLL_COMPLETE: 13
};

/**
 * @return {proto.rv.data.NetworkAPI.Action.CommandCase}
 */
proto.rv.data.NetworkAPI.Action.prototype.getCommandCase = function() {
  return /** @type {proto.rv.data.NetworkAPI.Action.CommandCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.NetworkAPI.Action.oneofGroups_[0]));
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
proto.rv.data.NetworkAPI.Action.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.toObject = function(includeInstance, msg) {
  var f, obj = {
clear: (f = msg.getClear()) && proto.rv.data.NetworkAPI.Action.API_Clear.toObject(includeInstance, f),
trigger: (f = msg.getTrigger()) && proto.rv.data.NetworkAPI.Action.API_Trigger.toObject(includeInstance, f),
transport: (f = msg.getTransport()) && proto.rv.data.NetworkAPI.Action.API_Transport.toObject(includeInstance, f),
prop: (f = msg.getProp()) && proto.rv.data.NetworkAPI.Action.API_Prop.toObject(includeInstance, f),
timer: (f = msg.getTimer()) && proto.rv.data.NetworkAPI.Action.API_Timer.toObject(includeInstance, f),
message: (f = msg.getMessage()) && proto.rv.data.NetworkAPI.Action.API_Message.toObject(includeInstance, f),
macro: (f = msg.getMacro()) && proto.rv.data.NetworkAPI.Action.API_Macro.toObject(includeInstance, f),
look: (f = msg.getLook()) && proto.rv.data.NetworkAPI.Action.API_Look.toObject(includeInstance, f),
stage: (f = msg.getStage()) && proto.rv.data.NetworkAPI.Action.API_Stage.toObject(includeInstance, f),
status: (f = msg.getStatus()) && proto.rv.data.NetworkAPI.Action.API_Status.toObject(includeInstance, f),
statusResponse: (f = msg.getStatusResponse()) && proto.rv.data.NetworkAPI.Action.API_StatusResponse.toObject(includeInstance, f),
twoStepTrigger: (f = msg.getTwoStepTrigger()) && proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.toObject(includeInstance, f),
prerollComplete: (f = msg.getPrerollComplete()) && proto.rv.data.NetworkAPI.Action.API_PrerollComplete.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.Action}
 */
proto.rv.data.NetworkAPI.Action.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action;
  return proto.rv.data.NetworkAPI.Action.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action}
 */
proto.rv.data.NetworkAPI.Action.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.Action.API_Clear;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Clear.deserializeBinaryFromReader);
      msg.setClear(value);
      break;
    case 2:
      var value = new proto.rv.data.NetworkAPI.Action.API_Trigger;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Trigger.deserializeBinaryFromReader);
      msg.setTrigger(value);
      break;
    case 3:
      var value = new proto.rv.data.NetworkAPI.Action.API_Transport;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Transport.deserializeBinaryFromReader);
      msg.setTransport(value);
      break;
    case 4:
      var value = new proto.rv.data.NetworkAPI.Action.API_Prop;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Prop.deserializeBinaryFromReader);
      msg.setProp(value);
      break;
    case 5:
      var value = new proto.rv.data.NetworkAPI.Action.API_Timer;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Timer.deserializeBinaryFromReader);
      msg.setTimer(value);
      break;
    case 6:
      var value = new proto.rv.data.NetworkAPI.Action.API_Message;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Message.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 7:
      var value = new proto.rv.data.NetworkAPI.Action.API_Macro;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Macro.deserializeBinaryFromReader);
      msg.setMacro(value);
      break;
    case 8:
      var value = new proto.rv.data.NetworkAPI.Action.API_Look;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Look.deserializeBinaryFromReader);
      msg.setLook(value);
      break;
    case 9:
      var value = new proto.rv.data.NetworkAPI.Action.API_Stage;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Stage.deserializeBinaryFromReader);
      msg.setStage(value);
      break;
    case 10:
      var value = new proto.rv.data.NetworkAPI.Action.API_Status;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 11:
      var value = new proto.rv.data.NetworkAPI.Action.API_StatusResponse;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_StatusResponse.deserializeBinaryFromReader);
      msg.setStatusResponse(value);
      break;
    case 12:
      var value = new proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.deserializeBinaryFromReader);
      msg.setTwoStepTrigger(value);
      break;
    case 13:
      var value = new proto.rv.data.NetworkAPI.Action.API_PrerollComplete;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_PrerollComplete.deserializeBinaryFromReader);
      msg.setPrerollComplete(value);
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
proto.rv.data.NetworkAPI.Action.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClear();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.Action.API_Clear.serializeBinaryToWriter
    );
  }
  f = message.getTrigger();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.NetworkAPI.Action.API_Trigger.serializeBinaryToWriter
    );
  }
  f = message.getTransport();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.NetworkAPI.Action.API_Transport.serializeBinaryToWriter
    );
  }
  f = message.getProp();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.data.NetworkAPI.Action.API_Prop.serializeBinaryToWriter
    );
  }
  f = message.getTimer();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.data.NetworkAPI.Action.API_Timer.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.rv.data.NetworkAPI.Action.API_Message.serializeBinaryToWriter
    );
  }
  f = message.getMacro();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.rv.data.NetworkAPI.Action.API_Macro.serializeBinaryToWriter
    );
  }
  f = message.getLook();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.rv.data.NetworkAPI.Action.API_Look.serializeBinaryToWriter
    );
  }
  f = message.getStage();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.rv.data.NetworkAPI.Action.API_Stage.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.rv.data.NetworkAPI.Action.API_Status.serializeBinaryToWriter
    );
  }
  f = message.getStatusResponse();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.rv.data.NetworkAPI.Action.API_StatusResponse.serializeBinaryToWriter
    );
  }
  f = message.getTwoStepTrigger();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.serializeBinaryToWriter
    );
  }
  f = message.getPrerollComplete();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.rv.data.NetworkAPI.Action.API_PrerollComplete.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.NetworkAPI.Action.API_Clear.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.rv.data.NetworkAPI.Action.API_Clear.ClearinfoCase = {
  CLEARINFO_NOT_SET: 0,
  LAYER: 1,
  GROUP_IDENTIFIER: 2
};

/**
 * @return {proto.rv.data.NetworkAPI.Action.API_Clear.ClearinfoCase}
 */
proto.rv.data.NetworkAPI.Action.API_Clear.prototype.getClearinfoCase = function() {
  return /** @type {proto.rv.data.NetworkAPI.Action.API_Clear.ClearinfoCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.NetworkAPI.Action.API_Clear.oneofGroups_[0]));
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
proto.rv.data.NetworkAPI.Action.API_Clear.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Clear.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Clear} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Clear.toObject = function(includeInstance, msg) {
  var f, obj = {
layer: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
groupIdentifier: (f = msg.getGroupIdentifier()) && proto.rv.data.NetworkAPI.IndexOrNameIdentifier.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Clear}
 */
proto.rv.data.NetworkAPI.Action.API_Clear.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Clear;
  return proto.rv.data.NetworkAPI.Action.API_Clear.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Clear} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Clear}
 */
proto.rv.data.NetworkAPI.Action.API_Clear.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.NetworkAPI.Action.API_Clear.Layer} */ (reader.readEnum());
      msg.setLayer(value);
      break;
    case 2:
      var value = new proto.rv.data.NetworkAPI.IndexOrNameIdentifier;
      reader.readMessage(value,proto.rv.data.NetworkAPI.IndexOrNameIdentifier.deserializeBinaryFromReader);
      msg.setGroupIdentifier(value);
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
proto.rv.data.NetworkAPI.Action.API_Clear.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Clear.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Clear} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Clear.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.rv.data.NetworkAPI.Action.API_Clear.Layer} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getGroupIdentifier();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.NetworkAPI.IndexOrNameIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.NetworkAPI.Action.API_Clear.Layer = {
  LAYER_UNKNOWN: 0,
  LAYER_VIDEO_INPUT: 1,
  LAYER_MEDIA: 2,
  LAYER_PRESENTATION: 3,
  LAYER_ANNOUNCEMENT: 4,
  LAYER_PROP: 5,
  LAYER_MESSAGE: 6,
  LAYER_AUDIO: 7
};

/**
 * optional Layer layer = 1;
 * @return {!proto.rv.data.NetworkAPI.Action.API_Clear.Layer}
 */
proto.rv.data.NetworkAPI.Action.API_Clear.prototype.getLayer = function() {
  return /** @type {!proto.rv.data.NetworkAPI.Action.API_Clear.Layer} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.NetworkAPI.Action.API_Clear.Layer} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Clear} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Clear.prototype.setLayer = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.rv.data.NetworkAPI.Action.API_Clear.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Clear} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Clear.prototype.clearLayer = function() {
  return jspb.Message.setOneofField(this, 1, proto.rv.data.NetworkAPI.Action.API_Clear.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Clear.prototype.hasLayer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional IndexOrNameIdentifier group_identifier = 2;
 * @return {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier}
 */
proto.rv.data.NetworkAPI.Action.API_Clear.prototype.getGroupIdentifier = function() {
  return /** @type{?proto.rv.data.NetworkAPI.IndexOrNameIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.IndexOrNameIdentifier, 2));
};


/**
 * @param {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Clear} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Clear.prototype.setGroupIdentifier = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.data.NetworkAPI.Action.API_Clear.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Clear} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Clear.prototype.clearGroupIdentifier = function() {
  return this.setGroupIdentifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Clear.prototype.hasGroupIdentifier = function() {
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
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.oneofGroups_ = [[4,5,6,7,8,9]];

/**
 * @enum {number}
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.TriggerdataCase = {
  TRIGGERDATA_NOT_SET: 0,
  PRESENTATION: 4,
  MEDIA: 5,
  VIDEO_INPUT: 6,
  AUDIO: 7,
  PROP: 8,
  MESSAGE: 9
};

/**
 * @return {proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.TriggerdataCase}
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.getTriggerdataCase = function() {
  return /** @type {proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.TriggerdataCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.oneofGroups_[0]));
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
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, 0),
operation: jspb.Message.getFieldWithDefault(msg, 2, 0),
renderTime: jspb.Message.getFieldWithDefault(msg, 3, 0),
presentation: (f = msg.getPresentation()) && proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.toObject(includeInstance, f),
media: (f = msg.getMedia()) && proto.rv.data.NetworkAPI.Action.API_Trigger.Media.toObject(includeInstance, f),
videoInput: (f = msg.getVideoInput()) && proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput.toObject(includeInstance, f),
audio: (f = msg.getAudio()) && proto.rv.data.NetworkAPI.Action.API_Trigger.Audio.toObject(includeInstance, f),
prop: (f = msg.getProp()) && proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp.toObject(includeInstance, f),
message: (f = msg.getMessage()) && proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger}
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger;
  return proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger}
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.Operation} */ (reader.readEnum());
      msg.setOperation(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRenderTime(value);
      break;
    case 4:
      var value = new proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.deserializeBinaryFromReader);
      msg.setPresentation(value);
      break;
    case 5:
      var value = new proto.rv.data.NetworkAPI.Action.API_Trigger.Media;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Trigger.Media.deserializeBinaryFromReader);
      msg.setMedia(value);
      break;
    case 6:
      var value = new proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput.deserializeBinaryFromReader);
      msg.setVideoInput(value);
      break;
    case 7:
      var value = new proto.rv.data.NetworkAPI.Action.API_Trigger.Audio;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Trigger.Audio.deserializeBinaryFromReader);
      msg.setAudio(value);
      break;
    case 8:
      var value = new proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp.deserializeBinaryFromReader);
      msg.setProp(value);
      break;
    case 9:
      var value = new proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
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
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getOperation();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getRenderTime();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getPresentation();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.serializeBinaryToWriter
    );
  }
  f = message.getMedia();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.data.NetworkAPI.Action.API_Trigger.Media.serializeBinaryToWriter
    );
  }
  f = message.getVideoInput();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput.serializeBinaryToWriter
    );
  }
  f = message.getAudio();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.rv.data.NetworkAPI.Action.API_Trigger.Audio.serializeBinaryToWriter
    );
  }
  f = message.getProp();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.Operation = {
  OPERATION_PREROLL: 0,
  OPERATION_ACTIVATE: 1
};

/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger} returns this
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Operation operation = 2;
 * @return {!proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.Operation}
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.getOperation = function() {
  return /** @type {!proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.Operation} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.Operation} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger} returns this
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.setOperation = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint64 render_time = 3;
 * @return {number}
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.getRenderTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger} returns this
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.setRenderTime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional API_Trigger.Presentation presentation = 4;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation}
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.getPresentation = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation, 4));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger} returns this
*/
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.setPresentation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger} returns this
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.clearPresentation = function() {
  return this.setPresentation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.hasPresentation = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional API_Trigger.Media media = 5;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Trigger.Media}
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.getMedia = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Trigger.Media} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Trigger.Media, 5));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Trigger.Media|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger} returns this
*/
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.setMedia = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger} returns this
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.clearMedia = function() {
  return this.setMedia(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.hasMedia = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional API_Trigger.VideoInput video_input = 6;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput}
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.getVideoInput = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput, 6));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger} returns this
*/
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.setVideoInput = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger} returns this
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.clearVideoInput = function() {
  return this.setVideoInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.hasVideoInput = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional API_Trigger.Audio audio = 7;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Trigger.Audio}
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.getAudio = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Trigger.Audio} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Trigger.Audio, 7));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Trigger.Audio|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger} returns this
*/
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.setAudio = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger} returns this
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.clearAudio = function() {
  return this.setAudio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.hasAudio = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional API_Prop.TriggerProp prop = 8;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp}
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.getProp = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp, 8));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger} returns this
*/
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.setProp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger} returns this
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.clearProp = function() {
  return this.setProp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.hasProp = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional API_Message.TriggerMessage message = 9;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage}
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.getMessage = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage, 9));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger} returns this
*/
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.setMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger} returns this
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.rv.data.NetworkAPI.Action.API_PrerollComplete.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_PrerollComplete.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_PrerollComplete} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_PrerollComplete.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, 0),
failed: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
latency: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_PrerollComplete}
 */
proto.rv.data.NetworkAPI.Action.API_PrerollComplete.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_PrerollComplete;
  return proto.rv.data.NetworkAPI.Action.API_PrerollComplete.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_PrerollComplete} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_PrerollComplete}
 */
proto.rv.data.NetworkAPI.Action.API_PrerollComplete.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFailed(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLatency(value);
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
proto.rv.data.NetworkAPI.Action.API_PrerollComplete.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_PrerollComplete.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_PrerollComplete} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_PrerollComplete.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getFailed();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getLatency();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.rv.data.NetworkAPI.Action.API_PrerollComplete.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_PrerollComplete} returns this
 */
proto.rv.data.NetworkAPI.Action.API_PrerollComplete.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool failed = 2;
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_PrerollComplete.prototype.getFailed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_PrerollComplete} returns this
 */
proto.rv.data.NetworkAPI.Action.API_PrerollComplete.prototype.setFailed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional uint64 latency = 3;
 * @return {number}
 */
proto.rv.data.NetworkAPI.Action.API_PrerollComplete.prototype.getLatency = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_PrerollComplete} returns this
 */
proto.rv.data.NetworkAPI.Action.API_PrerollComplete.prototype.setLatency = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.TriggerdataCase = {
  TRIGGERDATA_NOT_SET: 0,
  PRESENTATION: 1,
  MEDIA: 2,
  VIDEO_INPUT: 3,
  AUDIO: 4
};

/**
 * @return {proto.rv.data.NetworkAPI.Action.API_Trigger.TriggerdataCase}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.prototype.getTriggerdataCase = function() {
  return /** @type {proto.rv.data.NetworkAPI.Action.API_Trigger.TriggerdataCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.NetworkAPI.Action.API_Trigger.oneofGroups_[0]));
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
proto.rv.data.NetworkAPI.Action.API_Trigger.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Trigger.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Trigger} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.toObject = function(includeInstance, msg) {
  var f, obj = {
presentation: (f = msg.getPresentation()) && proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.toObject(includeInstance, f),
media: (f = msg.getMedia()) && proto.rv.data.NetworkAPI.Action.API_Trigger.Media.toObject(includeInstance, f),
videoInput: (f = msg.getVideoInput()) && proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput.toObject(includeInstance, f),
audio: (f = msg.getAudio()) && proto.rv.data.NetworkAPI.Action.API_Trigger.Audio.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Trigger;
  return proto.rv.data.NetworkAPI.Action.API_Trigger.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Trigger} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.deserializeBinaryFromReader);
      msg.setPresentation(value);
      break;
    case 2:
      var value = new proto.rv.data.NetworkAPI.Action.API_Trigger.Media;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Trigger.Media.deserializeBinaryFromReader);
      msg.setMedia(value);
      break;
    case 3:
      var value = new proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput.deserializeBinaryFromReader);
      msg.setVideoInput(value);
      break;
    case 4:
      var value = new proto.rv.data.NetworkAPI.Action.API_Trigger.Audio;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Trigger.Audio.deserializeBinaryFromReader);
      msg.setAudio(value);
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
proto.rv.data.NetworkAPI.Action.API_Trigger.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Trigger.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Trigger} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPresentation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.serializeBinaryToWriter
    );
  }
  f = message.getMedia();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.NetworkAPI.Action.API_Trigger.Media.serializeBinaryToWriter
    );
  }
  f = message.getVideoInput();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput.serializeBinaryToWriter
    );
  }
  f = message.getAudio();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.data.NetworkAPI.Action.API_Trigger.Audio.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PresentationsourceCase = {
  PRESENTATIONSOURCE_NOT_SET: 0,
  PLAYLIST_INDEX_PATH: 2,
  LIBRARY_INDEX_PATH: 3
};

/**
 * @return {proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PresentationsourceCase}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.prototype.getPresentationsourceCase = function() {
  return /** @type {proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PresentationsourceCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.oneofGroups_[0]));
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
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.toObject = function(includeInstance, msg) {
  var f, obj = {
playlistIndexPath: (f = msg.getPlaylistIndexPath()) && proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation.toObject(includeInstance, f),
libraryIndexPath: (f = msg.getLibraryIndexPath()) && proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation;
  return proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation.deserializeBinaryFromReader);
      msg.setPlaylistIndexPath(value);
      break;
    case 3:
      var value = new proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation.deserializeBinaryFromReader);
      msg.setLibraryIndexPath(value);
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
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlaylistIndexPath();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation.serializeBinaryToWriter
    );
  }
  f = message.getLibraryIndexPath();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation.repeatedFields_ = [1];



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
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation.toObject = function(includeInstance, msg) {
  var f, obj = {
indexPathComponentsList: jspb.Message.toObjectList(msg.getIndexPathComponentsList(),
    proto.rv.data.NetworkAPI.IndexOrNameIdentifier.toObject, includeInstance)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation;
  return proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.IndexOrNameIdentifier;
      reader.readMessage(value,proto.rv.data.NetworkAPI.IndexOrNameIdentifier.deserializeBinaryFromReader);
      msg.addIndexPathComponents(value);
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
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndexPathComponentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.IndexOrNameIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * repeated IndexOrNameIdentifier index_path_components = 1;
 * @return {!Array<!proto.rv.data.NetworkAPI.IndexOrNameIdentifier>}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation.prototype.getIndexPathComponentsList = function() {
  return /** @type{!Array<!proto.rv.data.NetworkAPI.IndexOrNameIdentifier>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.NetworkAPI.IndexOrNameIdentifier, 1));
};


/**
 * @param {!Array<!proto.rv.data.NetworkAPI.IndexOrNameIdentifier>} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation.prototype.setIndexPathComponentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.rv.data.NetworkAPI.IndexOrNameIdentifier=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.NetworkAPI.IndexOrNameIdentifier}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation.prototype.addIndexPathComponents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.rv.data.NetworkAPI.IndexOrNameIdentifier, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation.prototype.clearIndexPathComponentsList = function() {
  return this.setIndexPathComponentsList([]);
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
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation.toObject = function(includeInstance, msg) {
  var f, obj = {
libraryComponent: (f = msg.getLibraryComponent()) && proto.rv.data.NetworkAPI.IndexOrNameIdentifier.toObject(includeInstance, f),
presentationComponent: (f = msg.getPresentationComponent()) && proto.rv.data.NetworkAPI.IndexOrNameIdentifier.toObject(includeInstance, f),
cueComponent: (f = msg.getCueComponent()) && proto.rv.data.NetworkAPI.IndexOrNameIdentifier.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation;
  return proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.IndexOrNameIdentifier;
      reader.readMessage(value,proto.rv.data.NetworkAPI.IndexOrNameIdentifier.deserializeBinaryFromReader);
      msg.setLibraryComponent(value);
      break;
    case 2:
      var value = new proto.rv.data.NetworkAPI.IndexOrNameIdentifier;
      reader.readMessage(value,proto.rv.data.NetworkAPI.IndexOrNameIdentifier.deserializeBinaryFromReader);
      msg.setPresentationComponent(value);
      break;
    case 3:
      var value = new proto.rv.data.NetworkAPI.IndexOrNameIdentifier;
      reader.readMessage(value,proto.rv.data.NetworkAPI.IndexOrNameIdentifier.deserializeBinaryFromReader);
      msg.setCueComponent(value);
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
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLibraryComponent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.IndexOrNameIdentifier.serializeBinaryToWriter
    );
  }
  f = message.getPresentationComponent();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.NetworkAPI.IndexOrNameIdentifier.serializeBinaryToWriter
    );
  }
  f = message.getCueComponent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.NetworkAPI.IndexOrNameIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional IndexOrNameIdentifier library_component = 1;
 * @return {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation.prototype.getLibraryComponent = function() {
  return /** @type{?proto.rv.data.NetworkAPI.IndexOrNameIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.IndexOrNameIdentifier, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation.prototype.setLibraryComponent = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation.prototype.clearLibraryComponent = function() {
  return this.setLibraryComponent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation.prototype.hasLibraryComponent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional IndexOrNameIdentifier presentation_component = 2;
 * @return {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation.prototype.getPresentationComponent = function() {
  return /** @type{?proto.rv.data.NetworkAPI.IndexOrNameIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.IndexOrNameIdentifier, 2));
};


/**
 * @param {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation.prototype.setPresentationComponent = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation.prototype.clearPresentationComponent = function() {
  return this.setPresentationComponent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation.prototype.hasPresentationComponent = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional IndexOrNameIdentifier cue_component = 3;
 * @return {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation.prototype.getCueComponent = function() {
  return /** @type{?proto.rv.data.NetworkAPI.IndexOrNameIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.IndexOrNameIdentifier, 3));
};


/**
 * @param {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation.prototype.setCueComponent = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation.prototype.clearCueComponent = function() {
  return this.setCueComponent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation.prototype.hasCueComponent = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PlaylistPresentation playlist_index_path = 2;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.prototype.getPlaylistIndexPath = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation, 2));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.PlaylistPresentation|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.prototype.setPlaylistIndexPath = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.prototype.clearPlaylistIndexPath = function() {
  return this.setPlaylistIndexPath(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.prototype.hasPlaylistIndexPath = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LibraryPresentation library_index_path = 3;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.prototype.getLibraryIndexPath = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation, 3));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.LibraryPresentation|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.prototype.setLibraryIndexPath = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.prototype.clearLibraryIndexPath = function() {
  return this.setLibraryIndexPath(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation.prototype.hasLibraryIndexPath = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Media.repeatedFields_ = [1];



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
proto.rv.data.NetworkAPI.Action.API_Trigger.Media.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Trigger.Media.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Trigger.Media} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Media.toObject = function(includeInstance, msg) {
  var f, obj = {
indexPathComponentsList: jspb.Message.toObjectList(msg.getIndexPathComponentsList(),
    proto.rv.data.NetworkAPI.IndexOrNameIdentifier.toObject, includeInstance)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Media}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Media.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Trigger.Media;
  return proto.rv.data.NetworkAPI.Action.API_Trigger.Media.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Trigger.Media} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Media}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Media.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.IndexOrNameIdentifier;
      reader.readMessage(value,proto.rv.data.NetworkAPI.IndexOrNameIdentifier.deserializeBinaryFromReader);
      msg.addIndexPathComponents(value);
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
proto.rv.data.NetworkAPI.Action.API_Trigger.Media.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Trigger.Media.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Trigger.Media} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Media.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndexPathComponentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.IndexOrNameIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * repeated IndexOrNameIdentifier index_path_components = 1;
 * @return {!Array<!proto.rv.data.NetworkAPI.IndexOrNameIdentifier>}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Media.prototype.getIndexPathComponentsList = function() {
  return /** @type{!Array<!proto.rv.data.NetworkAPI.IndexOrNameIdentifier>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.NetworkAPI.IndexOrNameIdentifier, 1));
};


/**
 * @param {!Array<!proto.rv.data.NetworkAPI.IndexOrNameIdentifier>} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Media} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Trigger.Media.prototype.setIndexPathComponentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.rv.data.NetworkAPI.IndexOrNameIdentifier=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.NetworkAPI.IndexOrNameIdentifier}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Media.prototype.addIndexPathComponents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.rv.data.NetworkAPI.IndexOrNameIdentifier, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Media} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Media.prototype.clearIndexPathComponentsList = function() {
  return this.setIndexPathComponentsList([]);
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
proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput.toObject = function(includeInstance, msg) {
  var f, obj = {
videoInputId: (f = msg.getVideoInputId()) && proto.rv.data.NetworkAPI.IndexOrNameIdentifier.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput;
  return proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.IndexOrNameIdentifier;
      reader.readMessage(value,proto.rv.data.NetworkAPI.IndexOrNameIdentifier.deserializeBinaryFromReader);
      msg.setVideoInputId(value);
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
proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideoInputId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.IndexOrNameIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional IndexOrNameIdentifier video_input_id = 1;
 * @return {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput.prototype.getVideoInputId = function() {
  return /** @type{?proto.rv.data.NetworkAPI.IndexOrNameIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.IndexOrNameIdentifier, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput.prototype.setVideoInputId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput.prototype.clearVideoInputId = function() {
  return this.setVideoInputId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput.prototype.hasVideoInputId = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Audio.repeatedFields_ = [1];



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
proto.rv.data.NetworkAPI.Action.API_Trigger.Audio.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Trigger.Audio.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Trigger.Audio} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Audio.toObject = function(includeInstance, msg) {
  var f, obj = {
indexPathComponentsList: jspb.Message.toObjectList(msg.getIndexPathComponentsList(),
    proto.rv.data.NetworkAPI.IndexOrNameIdentifier.toObject, includeInstance)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Audio}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Audio.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Trigger.Audio;
  return proto.rv.data.NetworkAPI.Action.API_Trigger.Audio.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Trigger.Audio} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Audio}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Audio.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.IndexOrNameIdentifier;
      reader.readMessage(value,proto.rv.data.NetworkAPI.IndexOrNameIdentifier.deserializeBinaryFromReader);
      msg.addIndexPathComponents(value);
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
proto.rv.data.NetworkAPI.Action.API_Trigger.Audio.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Trigger.Audio.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Trigger.Audio} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Audio.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndexPathComponentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.IndexOrNameIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * repeated IndexOrNameIdentifier index_path_components = 1;
 * @return {!Array<!proto.rv.data.NetworkAPI.IndexOrNameIdentifier>}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Audio.prototype.getIndexPathComponentsList = function() {
  return /** @type{!Array<!proto.rv.data.NetworkAPI.IndexOrNameIdentifier>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.NetworkAPI.IndexOrNameIdentifier, 1));
};


/**
 * @param {!Array<!proto.rv.data.NetworkAPI.IndexOrNameIdentifier>} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Audio} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Trigger.Audio.prototype.setIndexPathComponentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.rv.data.NetworkAPI.IndexOrNameIdentifier=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.NetworkAPI.IndexOrNameIdentifier}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Audio.prototype.addIndexPathComponents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.rv.data.NetworkAPI.IndexOrNameIdentifier, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger.Audio} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.Audio.prototype.clearIndexPathComponentsList = function() {
  return this.setIndexPathComponentsList([]);
};


/**
 * optional Presentation presentation = 1;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.prototype.getPresentation = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Trigger.Presentation|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Trigger.prototype.setPresentation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.data.NetworkAPI.Action.API_Trigger.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.prototype.clearPresentation = function() {
  return this.setPresentation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.prototype.hasPresentation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Media media = 2;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Trigger.Media}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.prototype.getMedia = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Trigger.Media} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Trigger.Media, 2));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Trigger.Media|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Trigger.prototype.setMedia = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.data.NetworkAPI.Action.API_Trigger.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.prototype.clearMedia = function() {
  return this.setMedia(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.prototype.hasMedia = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional VideoInput video_input = 3;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.prototype.getVideoInput = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput, 3));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Trigger.VideoInput|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Trigger.prototype.setVideoInput = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.data.NetworkAPI.Action.API_Trigger.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.prototype.clearVideoInput = function() {
  return this.setVideoInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.prototype.hasVideoInput = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Audio audio = 4;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Trigger.Audio}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.prototype.getAudio = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Trigger.Audio} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Trigger.Audio, 4));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Trigger.Audio|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Trigger.prototype.setAudio = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rv.data.NetworkAPI.Action.API_Trigger.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Trigger} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.prototype.clearAudio = function() {
  return this.setAudio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Trigger.prototype.hasAudio = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.NetworkAPI.Action.API_Transport.oneofGroups_ = [[2,3,4,5,6]];

/**
 * @enum {number}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.TransportactionCase = {
  TRANSPORTACTION_NOT_SET: 0,
  PLAY: 2,
  PAUSE: 3,
  SKIP_BACKWARD: 4,
  SKIP_FORWARD: 5,
  GO_TO_END: 6
};

/**
 * @return {proto.rv.data.NetworkAPI.Action.API_Transport.TransportactionCase}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.prototype.getTransportactionCase = function() {
  return /** @type {proto.rv.data.NetworkAPI.Action.API_Transport.TransportactionCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.NetworkAPI.Action.API_Transport.oneofGroups_[0]));
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
proto.rv.data.NetworkAPI.Action.API_Transport.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Transport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Transport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Transport.toObject = function(includeInstance, msg) {
  var f, obj = {
layer: jspb.Message.getFieldWithDefault(msg, 1, 0),
play: (f = msg.getPlay()) && proto.rv.data.NetworkAPI.Action.API_Transport.Play.toObject(includeInstance, f),
pause: (f = msg.getPause()) && proto.rv.data.NetworkAPI.Action.API_Transport.Pause.toObject(includeInstance, f),
skipBackward: (f = msg.getSkipBackward()) && proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward.toObject(includeInstance, f),
skipForward: (f = msg.getSkipForward()) && proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward.toObject(includeInstance, f),
goToEnd: (f = msg.getGoToEnd()) && proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Transport;
  return proto.rv.data.NetworkAPI.Action.API_Transport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Transport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.data.NetworkAPI.Action.API_Transport.TransportLayer} */ (reader.readEnum());
      msg.setLayer(value);
      break;
    case 2:
      var value = new proto.rv.data.NetworkAPI.Action.API_Transport.Play;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Transport.Play.deserializeBinaryFromReader);
      msg.setPlay(value);
      break;
    case 3:
      var value = new proto.rv.data.NetworkAPI.Action.API_Transport.Pause;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Transport.Pause.deserializeBinaryFromReader);
      msg.setPause(value);
      break;
    case 4:
      var value = new proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward.deserializeBinaryFromReader);
      msg.setSkipBackward(value);
      break;
    case 5:
      var value = new proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward.deserializeBinaryFromReader);
      msg.setSkipForward(value);
      break;
    case 6:
      var value = new proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd.deserializeBinaryFromReader);
      msg.setGoToEnd(value);
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
proto.rv.data.NetworkAPI.Action.API_Transport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Transport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Transport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Transport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLayer();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPlay();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.NetworkAPI.Action.API_Transport.Play.serializeBinaryToWriter
    );
  }
  f = message.getPause();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.NetworkAPI.Action.API_Transport.Pause.serializeBinaryToWriter
    );
  }
  f = message.getSkipBackward();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward.serializeBinaryToWriter
    );
  }
  f = message.getSkipForward();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward.serializeBinaryToWriter
    );
  }
  f = message.getGoToEnd();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.TransportLayer = {
  TRANSPORT_LAYER_UNKNOWN: 0,
  TRANSPORT_LAYER_PRESENTATION: 1,
  TRANSPORT_LAYER_ANNOUNCEMENT: 2,
  TRANSPORT_LAYER_AUDIO: 3
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
proto.rv.data.NetworkAPI.Action.API_Transport.Play.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Transport.Play.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Transport.Play} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Transport.Play.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport.Play}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.Play.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Transport.Play;
  return proto.rv.data.NetworkAPI.Action.API_Transport.Play.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Transport.Play} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport.Play}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.Play.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.data.NetworkAPI.Action.API_Transport.Play.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Transport.Play.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Transport.Play} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Transport.Play.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.data.NetworkAPI.Action.API_Transport.Pause.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Transport.Pause.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Transport.Pause} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Transport.Pause.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport.Pause}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.Pause.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Transport.Pause;
  return proto.rv.data.NetworkAPI.Action.API_Transport.Pause.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Transport.Pause} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport.Pause}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.Pause.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.data.NetworkAPI.Action.API_Transport.Pause.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Transport.Pause.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Transport.Pause} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Transport.Pause.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward.toObject = function(includeInstance, msg) {
  var f, obj = {
seconds: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward;
  return proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeconds(value);
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
proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeconds();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 seconds = 1;
 * @return {number}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward.prototype.getSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward.prototype.setSeconds = function(value) {
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
proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward.toObject = function(includeInstance, msg) {
  var f, obj = {
seconds: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward;
  return proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeconds(value);
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
proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeconds();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 seconds = 1;
 * @return {number}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward.prototype.getSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward.prototype.setSeconds = function(value) {
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
proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd.toObject = function(includeInstance, msg) {
  var f, obj = {
secondsToEnd: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd;
  return proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSecondsToEnd(value);
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
proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecondsToEnd();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 seconds_to_end = 1;
 * @return {number}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd.prototype.getSecondsToEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd.prototype.setSecondsToEnd = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional TransportLayer layer = 1;
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport.TransportLayer}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.prototype.getLayer = function() {
  return /** @type {!proto.rv.data.NetworkAPI.Action.API_Transport.TransportLayer} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.data.NetworkAPI.Action.API_Transport.TransportLayer} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Transport.prototype.setLayer = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Play play = 2;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Transport.Play}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.prototype.getPlay = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Transport.Play} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Transport.Play, 2));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Transport.Play|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Transport.prototype.setPlay = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.data.NetworkAPI.Action.API_Transport.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Transport.prototype.clearPlay = function() {
  return this.setPlay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.prototype.hasPlay = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Pause pause = 3;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Transport.Pause}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.prototype.getPause = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Transport.Pause} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Transport.Pause, 3));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Transport.Pause|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Transport.prototype.setPause = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.data.NetworkAPI.Action.API_Transport.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Transport.prototype.clearPause = function() {
  return this.setPause(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.prototype.hasPause = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SkipBackward skip_backward = 4;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.prototype.getSkipBackward = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward, 4));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Transport.SkipBackward|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Transport.prototype.setSkipBackward = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rv.data.NetworkAPI.Action.API_Transport.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Transport.prototype.clearSkipBackward = function() {
  return this.setSkipBackward(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.prototype.hasSkipBackward = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SkipForward skip_forward = 5;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.prototype.getSkipForward = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward, 5));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Transport.SkipForward|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Transport.prototype.setSkipForward = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.rv.data.NetworkAPI.Action.API_Transport.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Transport.prototype.clearSkipForward = function() {
  return this.setSkipForward(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.prototype.hasSkipForward = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional GoToEnd go_to_end = 6;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.prototype.getGoToEnd = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd, 6));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Transport.GoToEnd|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Transport.prototype.setGoToEnd = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.rv.data.NetworkAPI.Action.API_Transport.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Transport} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Transport.prototype.clearGoToEnd = function() {
  return this.setGoToEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Transport.prototype.hasGoToEnd = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.NetworkAPI.Action.API_Prop.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.rv.data.NetworkAPI.Action.API_Prop.PropactionCase = {
  PROPACTION_NOT_SET: 0,
  TRIGGER: 1,
  CLEAR: 2
};

/**
 * @return {proto.rv.data.NetworkAPI.Action.API_Prop.PropactionCase}
 */
proto.rv.data.NetworkAPI.Action.API_Prop.prototype.getPropactionCase = function() {
  return /** @type {proto.rv.data.NetworkAPI.Action.API_Prop.PropactionCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.NetworkAPI.Action.API_Prop.oneofGroups_[0]));
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
proto.rv.data.NetworkAPI.Action.API_Prop.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Prop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Prop} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Prop.toObject = function(includeInstance, msg) {
  var f, obj = {
trigger: (f = msg.getTrigger()) && proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp.toObject(includeInstance, f),
clear: (f = msg.getClear()) && proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Prop}
 */
proto.rv.data.NetworkAPI.Action.API_Prop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Prop;
  return proto.rv.data.NetworkAPI.Action.API_Prop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Prop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Prop}
 */
proto.rv.data.NetworkAPI.Action.API_Prop.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp.deserializeBinaryFromReader);
      msg.setTrigger(value);
      break;
    case 2:
      var value = new proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp.deserializeBinaryFromReader);
      msg.setClear(value);
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
proto.rv.data.NetworkAPI.Action.API_Prop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Prop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Prop} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Prop.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrigger();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp.serializeBinaryToWriter
    );
  }
  f = message.getClear();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp.serializeBinaryToWriter
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
proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp.toObject = function(includeInstance, msg) {
  var f, obj = {
identifier: (f = msg.getIdentifier()) && proto.rv.data.NetworkAPI.IndexOrNameIdentifier.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp}
 */
proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp;
  return proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp}
 */
proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.IndexOrNameIdentifier;
      reader.readMessage(value,proto.rv.data.NetworkAPI.IndexOrNameIdentifier.deserializeBinaryFromReader);
      msg.setIdentifier(value);
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
proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentifier();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.IndexOrNameIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional IndexOrNameIdentifier identifier = 1;
 * @return {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier}
 */
proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp.prototype.getIdentifier = function() {
  return /** @type{?proto.rv.data.NetworkAPI.IndexOrNameIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.IndexOrNameIdentifier, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp.prototype.setIdentifier = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp.prototype.clearIdentifier = function() {
  return this.setIdentifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp.prototype.hasIdentifier = function() {
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
proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp.toObject = function(includeInstance, msg) {
  var f, obj = {
identifier: (f = msg.getIdentifier()) && proto.rv.data.NetworkAPI.IndexOrNameIdentifier.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp}
 */
proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp;
  return proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp}
 */
proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.IndexOrNameIdentifier;
      reader.readMessage(value,proto.rv.data.NetworkAPI.IndexOrNameIdentifier.deserializeBinaryFromReader);
      msg.setIdentifier(value);
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
proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentifier();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.IndexOrNameIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional IndexOrNameIdentifier identifier = 1;
 * @return {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier}
 */
proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp.prototype.getIdentifier = function() {
  return /** @type{?proto.rv.data.NetworkAPI.IndexOrNameIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.IndexOrNameIdentifier, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp.prototype.setIdentifier = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp.prototype.clearIdentifier = function() {
  return this.setIdentifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp.prototype.hasIdentifier = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TriggerProp trigger = 1;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp}
 */
proto.rv.data.NetworkAPI.Action.API_Prop.prototype.getTrigger = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Prop.TriggerProp|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Prop} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Prop.prototype.setTrigger = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.data.NetworkAPI.Action.API_Prop.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Prop} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Prop.prototype.clearTrigger = function() {
  return this.setTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Prop.prototype.hasTrigger = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ClearProp clear = 2;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp}
 */
proto.rv.data.NetworkAPI.Action.API_Prop.prototype.getClear = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp, 2));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Prop.ClearProp|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Prop} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Prop.prototype.setClear = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.data.NetworkAPI.Action.API_Prop.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Prop} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Prop.prototype.clearClear = function() {
  return this.setClear(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Prop.prototype.hasClear = function() {
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
proto.rv.data.NetworkAPI.Action.API_Timer.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.TimeractionCase = {
  TIMERACTION_NOT_SET: 0,
  START: 1,
  STOP: 2,
  RESET: 3,
  CONFIGURE: 4
};

/**
 * @return {proto.rv.data.NetworkAPI.Action.API_Timer.TimeractionCase}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.prototype.getTimeractionCase = function() {
  return /** @type {proto.rv.data.NetworkAPI.Action.API_Timer.TimeractionCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.NetworkAPI.Action.API_Timer.oneofGroups_[0]));
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
proto.rv.data.NetworkAPI.Action.API_Timer.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Timer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Timer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Timer.toObject = function(includeInstance, msg) {
  var f, obj = {
start: (f = msg.getStart()) && proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer.toObject(includeInstance, f),
stop: (f = msg.getStop()) && proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer.toObject(includeInstance, f),
reset: (f = msg.getReset()) && proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer.toObject(includeInstance, f),
configure: (f = msg.getConfigure()) && proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Timer;
  return proto.rv.data.NetworkAPI.Action.API_Timer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Timer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = new proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer.deserializeBinaryFromReader);
      msg.setStop(value);
      break;
    case 3:
      var value = new proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer.deserializeBinaryFromReader);
      msg.setReset(value);
      break;
    case 4:
      var value = new proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer.deserializeBinaryFromReader);
      msg.setConfigure(value);
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
proto.rv.data.NetworkAPI.Action.API_Timer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Timer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Timer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Timer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer.serializeBinaryToWriter
    );
  }
  f = message.getStop();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer.serializeBinaryToWriter
    );
  }
  f = message.getReset();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer.serializeBinaryToWriter
    );
  }
  f = message.getConfigure();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer.serializeBinaryToWriter
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
proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer.toObject = function(includeInstance, msg) {
  var f, obj = {
identifier: (f = msg.getIdentifier()) && proto.rv.data.NetworkAPI.IndexOrNameIdentifier.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer;
  return proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.IndexOrNameIdentifier;
      reader.readMessage(value,proto.rv.data.NetworkAPI.IndexOrNameIdentifier.deserializeBinaryFromReader);
      msg.setIdentifier(value);
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
proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentifier();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.IndexOrNameIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional IndexOrNameIdentifier identifier = 1;
 * @return {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer.prototype.getIdentifier = function() {
  return /** @type{?proto.rv.data.NetworkAPI.IndexOrNameIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.IndexOrNameIdentifier, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer.prototype.setIdentifier = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer.prototype.clearIdentifier = function() {
  return this.setIdentifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer.prototype.hasIdentifier = function() {
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
proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer.toObject = function(includeInstance, msg) {
  var f, obj = {
identifier: (f = msg.getIdentifier()) && proto.rv.data.NetworkAPI.IndexOrNameIdentifier.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer;
  return proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.IndexOrNameIdentifier;
      reader.readMessage(value,proto.rv.data.NetworkAPI.IndexOrNameIdentifier.deserializeBinaryFromReader);
      msg.setIdentifier(value);
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
proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentifier();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.IndexOrNameIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional IndexOrNameIdentifier identifier = 1;
 * @return {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer.prototype.getIdentifier = function() {
  return /** @type{?proto.rv.data.NetworkAPI.IndexOrNameIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.IndexOrNameIdentifier, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer.prototype.setIdentifier = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer.prototype.clearIdentifier = function() {
  return this.setIdentifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer.prototype.hasIdentifier = function() {
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
proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer.toObject = function(includeInstance, msg) {
  var f, obj = {
identifier: (f = msg.getIdentifier()) && proto.rv.data.NetworkAPI.IndexOrNameIdentifier.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer;
  return proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.IndexOrNameIdentifier;
      reader.readMessage(value,proto.rv.data.NetworkAPI.IndexOrNameIdentifier.deserializeBinaryFromReader);
      msg.setIdentifier(value);
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
proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentifier();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.IndexOrNameIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional IndexOrNameIdentifier identifier = 1;
 * @return {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer.prototype.getIdentifier = function() {
  return /** @type{?proto.rv.data.NetworkAPI.IndexOrNameIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.IndexOrNameIdentifier, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer.prototype.setIdentifier = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer.prototype.clearIdentifier = function() {
  return this.setIdentifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer.prototype.hasIdentifier = function() {
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
proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer.toObject = function(includeInstance, msg) {
  var f, obj = {
identifier: (f = msg.getIdentifier()) && proto.rv.data.NetworkAPI.IndexOrNameIdentifier.toObject(includeInstance, f),
configuration: (f = msg.getConfiguration()) && proto.rv.data.Timer.Configuration.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer;
  return proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.IndexOrNameIdentifier;
      reader.readMessage(value,proto.rv.data.NetworkAPI.IndexOrNameIdentifier.deserializeBinaryFromReader);
      msg.setIdentifier(value);
      break;
    case 2:
      var value = new proto.rv.data.Timer.Configuration;
      reader.readMessage(value,proto.rv.data.Timer.Configuration.deserializeBinaryFromReader);
      msg.setConfiguration(value);
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
proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentifier();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.IndexOrNameIdentifier.serializeBinaryToWriter
    );
  }
  f = message.getConfiguration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.Timer.Configuration.serializeBinaryToWriter
    );
  }
};


/**
 * optional IndexOrNameIdentifier identifier = 1;
 * @return {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer.prototype.getIdentifier = function() {
  return /** @type{?proto.rv.data.NetworkAPI.IndexOrNameIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.IndexOrNameIdentifier, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer.prototype.setIdentifier = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer.prototype.clearIdentifier = function() {
  return this.setIdentifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer.prototype.hasIdentifier = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Timer.Configuration configuration = 2;
 * @return {?proto.rv.data.Timer.Configuration}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer.prototype.getConfiguration = function() {
  return /** @type{?proto.rv.data.Timer.Configuration} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.Timer.Configuration, 2));
};


/**
 * @param {?proto.rv.data.Timer.Configuration|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer.prototype.setConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer.prototype.clearConfiguration = function() {
  return this.setConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer.prototype.hasConfiguration = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional StartTimer start = 1;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.prototype.getStart = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Timer.StartTimer|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Timer.prototype.setStart = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.data.NetworkAPI.Action.API_Timer.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Timer.prototype.clearStart = function() {
  return this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional StopTimer stop = 2;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.prototype.getStop = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer, 2));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Timer.StopTimer|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Timer.prototype.setStop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.data.NetworkAPI.Action.API_Timer.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Timer.prototype.clearStop = function() {
  return this.setStop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.prototype.hasStop = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ResetTimer reset = 3;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.prototype.getReset = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer, 3));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Timer.ResetTimer|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Timer.prototype.setReset = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.data.NetworkAPI.Action.API_Timer.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Timer.prototype.clearReset = function() {
  return this.setReset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.prototype.hasReset = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ConfigureTimer configure = 4;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.prototype.getConfigure = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer, 4));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Timer.ConfigureTimer|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Timer.prototype.setConfigure = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rv.data.NetworkAPI.Action.API_Timer.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Timer} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Timer.prototype.clearConfigure = function() {
  return this.setConfigure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Timer.prototype.hasConfigure = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.NetworkAPI.Action.API_Message.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.rv.data.NetworkAPI.Action.API_Message.MessageactionCase = {
  MESSAGEACTION_NOT_SET: 0,
  TRIGGER: 1,
  CLEAR: 2
};

/**
 * @return {proto.rv.data.NetworkAPI.Action.API_Message.MessageactionCase}
 */
proto.rv.data.NetworkAPI.Action.API_Message.prototype.getMessageactionCase = function() {
  return /** @type {proto.rv.data.NetworkAPI.Action.API_Message.MessageactionCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.NetworkAPI.Action.API_Message.oneofGroups_[0]));
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
proto.rv.data.NetworkAPI.Action.API_Message.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Message} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Message.toObject = function(includeInstance, msg) {
  var f, obj = {
trigger: (f = msg.getTrigger()) && proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.toObject(includeInstance, f),
clear: (f = msg.getClear()) && proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Message}
 */
proto.rv.data.NetworkAPI.Action.API_Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Message;
  return proto.rv.data.NetworkAPI.Action.API_Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Message}
 */
proto.rv.data.NetworkAPI.Action.API_Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.deserializeBinaryFromReader);
      msg.setTrigger(value);
      break;
    case 2:
      var value = new proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage.deserializeBinaryFromReader);
      msg.setClear(value);
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
proto.rv.data.NetworkAPI.Action.API_Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Message.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrigger();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.serializeBinaryToWriter
    );
  }
  f = message.getClear();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.repeatedFields_ = [2];



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
proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
identifier: (f = msg.getIdentifier()) && proto.rv.data.NetworkAPI.IndexOrNameIdentifier.toObject(includeInstance, f),
tokenValuesList: jspb.Message.toObjectList(msg.getTokenValuesList(),
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage}
 */
proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage;
  return proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage}
 */
proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.IndexOrNameIdentifier;
      reader.readMessage(value,proto.rv.data.NetworkAPI.IndexOrNameIdentifier.deserializeBinaryFromReader);
      msg.setIdentifier(value);
      break;
    case 2:
      var value = new proto.rv.data.Message.TokenValue;
      reader.readMessage(value,proto.rv.data.Message.TokenValue.deserializeBinaryFromReader);
      msg.addTokenValues(value);
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
proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentifier();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.IndexOrNameIdentifier.serializeBinaryToWriter
    );
  }
  f = message.getTokenValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.rv.data.Message.TokenValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional IndexOrNameIdentifier identifier = 1;
 * @return {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier}
 */
proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.prototype.getIdentifier = function() {
  return /** @type{?proto.rv.data.NetworkAPI.IndexOrNameIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.IndexOrNameIdentifier, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.prototype.setIdentifier = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.prototype.clearIdentifier = function() {
  return this.setIdentifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.prototype.hasIdentifier = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Message.TokenValue token_values = 2;
 * @return {!Array<!proto.rv.data.Message.TokenValue>}
 */
proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.prototype.getTokenValuesList = function() {
  return /** @type{!Array<!proto.rv.data.Message.TokenValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.Message.TokenValue, 2));
};


/**
 * @param {!Array<!proto.rv.data.Message.TokenValue>} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.prototype.setTokenValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.rv.data.Message.TokenValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.Message.TokenValue}
 */
proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.prototype.addTokenValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.rv.data.Message.TokenValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage.prototype.clearTokenValuesList = function() {
  return this.setTokenValuesList([]);
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
proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
identifier: (f = msg.getIdentifier()) && proto.rv.data.NetworkAPI.IndexOrNameIdentifier.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage}
 */
proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage;
  return proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage}
 */
proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.IndexOrNameIdentifier;
      reader.readMessage(value,proto.rv.data.NetworkAPI.IndexOrNameIdentifier.deserializeBinaryFromReader);
      msg.setIdentifier(value);
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
proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentifier();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.IndexOrNameIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional IndexOrNameIdentifier identifier = 1;
 * @return {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier}
 */
proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage.prototype.getIdentifier = function() {
  return /** @type{?proto.rv.data.NetworkAPI.IndexOrNameIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.IndexOrNameIdentifier, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage.prototype.setIdentifier = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage.prototype.clearIdentifier = function() {
  return this.setIdentifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage.prototype.hasIdentifier = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TriggerMessage trigger = 1;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage}
 */
proto.rv.data.NetworkAPI.Action.API_Message.prototype.getTrigger = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Message.TriggerMessage|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Message} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Message.prototype.setTrigger = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.data.NetworkAPI.Action.API_Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Message} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Message.prototype.clearTrigger = function() {
  return this.setTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Message.prototype.hasTrigger = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ClearMessage clear = 2;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage}
 */
proto.rv.data.NetworkAPI.Action.API_Message.prototype.getClear = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage, 2));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Message.ClearMessage|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Message} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Message.prototype.setClear = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.data.NetworkAPI.Action.API_Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Message} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Message.prototype.clearClear = function() {
  return this.setClear(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Message.prototype.hasClear = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.NetworkAPI.Action.API_Macro.repeatedFields_ = [2];



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
proto.rv.data.NetworkAPI.Action.API_Macro.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Macro.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Macro} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Macro.toObject = function(includeInstance, msg) {
  var f, obj = {
identifier: (f = msg.getIdentifier()) && proto.rv.data.NetworkAPI.IndexOrNameIdentifier.toObject(includeInstance, f),
indexPathComponentsList: jspb.Message.toObjectList(msg.getIndexPathComponentsList(),
    proto.rv.data.NetworkAPI.IndexOrNameIdentifier.toObject, includeInstance)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Macro}
 */
proto.rv.data.NetworkAPI.Action.API_Macro.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Macro;
  return proto.rv.data.NetworkAPI.Action.API_Macro.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Macro} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Macro}
 */
proto.rv.data.NetworkAPI.Action.API_Macro.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.IndexOrNameIdentifier;
      reader.readMessage(value,proto.rv.data.NetworkAPI.IndexOrNameIdentifier.deserializeBinaryFromReader);
      msg.setIdentifier(value);
      break;
    case 2:
      var value = new proto.rv.data.NetworkAPI.IndexOrNameIdentifier;
      reader.readMessage(value,proto.rv.data.NetworkAPI.IndexOrNameIdentifier.deserializeBinaryFromReader);
      msg.addIndexPathComponents(value);
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
proto.rv.data.NetworkAPI.Action.API_Macro.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Macro.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Macro} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Macro.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentifier();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.IndexOrNameIdentifier.serializeBinaryToWriter
    );
  }
  f = message.getIndexPathComponentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.rv.data.NetworkAPI.IndexOrNameIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional IndexOrNameIdentifier identifier = 1;
 * @return {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier}
 */
proto.rv.data.NetworkAPI.Action.API_Macro.prototype.getIdentifier = function() {
  return /** @type{?proto.rv.data.NetworkAPI.IndexOrNameIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.IndexOrNameIdentifier, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Macro} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Macro.prototype.setIdentifier = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Macro} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Macro.prototype.clearIdentifier = function() {
  return this.setIdentifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Macro.prototype.hasIdentifier = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated IndexOrNameIdentifier index_path_components = 2;
 * @return {!Array<!proto.rv.data.NetworkAPI.IndexOrNameIdentifier>}
 */
proto.rv.data.NetworkAPI.Action.API_Macro.prototype.getIndexPathComponentsList = function() {
  return /** @type{!Array<!proto.rv.data.NetworkAPI.IndexOrNameIdentifier>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.NetworkAPI.IndexOrNameIdentifier, 2));
};


/**
 * @param {!Array<!proto.rv.data.NetworkAPI.IndexOrNameIdentifier>} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Macro} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Macro.prototype.setIndexPathComponentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.rv.data.NetworkAPI.IndexOrNameIdentifier=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.NetworkAPI.IndexOrNameIdentifier}
 */
proto.rv.data.NetworkAPI.Action.API_Macro.prototype.addIndexPathComponents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.rv.data.NetworkAPI.IndexOrNameIdentifier, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Macro} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Macro.prototype.clearIndexPathComponentsList = function() {
  return this.setIndexPathComponentsList([]);
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
proto.rv.data.NetworkAPI.Action.API_Look.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Look.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Look} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Look.toObject = function(includeInstance, msg) {
  var f, obj = {
identifier: (f = msg.getIdentifier()) && proto.rv.data.NetworkAPI.IndexOrNameIdentifier.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Look}
 */
proto.rv.data.NetworkAPI.Action.API_Look.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Look;
  return proto.rv.data.NetworkAPI.Action.API_Look.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Look} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Look}
 */
proto.rv.data.NetworkAPI.Action.API_Look.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.IndexOrNameIdentifier;
      reader.readMessage(value,proto.rv.data.NetworkAPI.IndexOrNameIdentifier.deserializeBinaryFromReader);
      msg.setIdentifier(value);
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
proto.rv.data.NetworkAPI.Action.API_Look.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Look.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Look} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Look.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentifier();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.IndexOrNameIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional IndexOrNameIdentifier identifier = 1;
 * @return {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier}
 */
proto.rv.data.NetworkAPI.Action.API_Look.prototype.getIdentifier = function() {
  return /** @type{?proto.rv.data.NetworkAPI.IndexOrNameIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.IndexOrNameIdentifier, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Look} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Look.prototype.setIdentifier = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Look} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Look.prototype.clearIdentifier = function() {
  return this.setIdentifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Look.prototype.hasIdentifier = function() {
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
proto.rv.data.NetworkAPI.Action.API_Stage.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageactionCase = {
  STAGEACTION_NOT_SET: 0,
  LAYOUTS: 1,
  MESSAGE: 2
};

/**
 * @return {proto.rv.data.NetworkAPI.Action.API_Stage.StageactionCase}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.prototype.getStageactionCase = function() {
  return /** @type {proto.rv.data.NetworkAPI.Action.API_Stage.StageactionCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.NetworkAPI.Action.API_Stage.oneofGroups_[0]));
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
proto.rv.data.NetworkAPI.Action.API_Stage.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Stage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Stage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Stage.toObject = function(includeInstance, msg) {
  var f, obj = {
layouts: (f = msg.getLayouts()) && proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts.toObject(includeInstance, f),
message: (f = msg.getMessage()) && proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Stage}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Stage;
  return proto.rv.data.NetworkAPI.Action.API_Stage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Stage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Stage}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts.deserializeBinaryFromReader);
      msg.setLayouts(value);
      break;
    case 2:
      var value = new proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
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
proto.rv.data.NetworkAPI.Action.API_Stage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Stage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Stage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Stage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLayouts();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts.repeatedFields_ = [1];



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
proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts.toObject = function(includeInstance, msg) {
  var f, obj = {
layoutsList: jspb.Message.toObjectList(msg.getLayoutsList(),
    proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair.toObject, includeInstance)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts;
  return proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair;
      reader.readMessage(value,proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair.deserializeBinaryFromReader);
      msg.addLayouts(value);
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
proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLayoutsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair.serializeBinaryToWriter
    );
  }
};


/**
 * repeated IndexOrNameIdentifierPair layouts = 1;
 * @return {!Array<!proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair>}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts.prototype.getLayoutsList = function() {
  return /** @type{!Array<!proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair, 1));
};


/**
 * @param {!Array<!proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair>} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts.prototype.setLayoutsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts.prototype.addLayouts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts.prototype.clearLayoutsList = function() {
  return this.setLayoutsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ActionCase = {
  ACTION_NOT_SET: 0,
  SHOW_MESSAGE: 1,
  CLEAR_MESSAGE: 2,
  HIDE_MESSAGE: 3
};

/**
 * @return {proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ActionCase}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.prototype.getActionCase = function() {
  return /** @type {proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ActionCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.oneofGroups_[0]));
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
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
showMessage: (f = msg.getShowMessage()) && proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage.toObject(includeInstance, f),
clearMessage: (f = msg.getClearMessage()) && proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage.toObject(includeInstance, f),
hideMessage: (f = msg.getHideMessage()) && proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage;
  return proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage.deserializeBinaryFromReader);
      msg.setShowMessage(value);
      break;
    case 2:
      var value = new proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage.deserializeBinaryFromReader);
      msg.setClearMessage(value);
      break;
    case 3:
      var value = new proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage;
      reader.readMessage(value,proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage.deserializeBinaryFromReader);
      msg.setHideMessage(value);
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
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShowMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage.serializeBinaryToWriter
    );
  }
  f = message.getClearMessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage.serializeBinaryToWriter
    );
  }
  f = message.getHideMessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage.serializeBinaryToWriter
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
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
message: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage;
  return proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage.prototype.setMessage = function(value) {
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
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage;
  return proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage;
  return proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional ShowMessage show_message = 1;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.prototype.getShowMessage = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ShowMessage|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.prototype.setShowMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.prototype.clearShowMessage = function() {
  return this.setShowMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.prototype.hasShowMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ClearMessage clear_message = 2;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.prototype.getClearMessage = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage, 2));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.ClearMessage|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.prototype.setClearMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.prototype.clearClearMessage = function() {
  return this.setClearMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.prototype.hasClearMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional HideMessage hide_message = 3;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.prototype.getHideMessage = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage, 3));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.HideMessage|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.prototype.setHideMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.prototype.clearHideMessage = function() {
  return this.setHideMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage.prototype.hasHideMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional StageLayouts layouts = 1;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.prototype.getLayouts = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Stage.StageLayouts|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Stage} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Stage.prototype.setLayouts = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.data.NetworkAPI.Action.API_Stage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Stage} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Stage.prototype.clearLayouts = function() {
  return this.setLayouts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.prototype.hasLayouts = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional StageMessage message = 2;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.prototype.getMessage = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage, 2));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Stage.StageMessage|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_Stage} returns this
*/
proto.rv.data.NetworkAPI.Action.API_Stage.prototype.setMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.data.NetworkAPI.Action.API_Stage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Stage} returns this
 */
proto.rv.data.NetworkAPI.Action.API_Stage.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_Stage.prototype.hasMessage = function() {
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
proto.rv.data.NetworkAPI.Action.StatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.StatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.StatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.StatusRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.data.NetworkAPI.Action.StatusRequest}
 */
proto.rv.data.NetworkAPI.Action.StatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.StatusRequest;
  return proto.rv.data.NetworkAPI.Action.StatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.StatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.StatusRequest}
 */
proto.rv.data.NetworkAPI.Action.StatusRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.data.NetworkAPI.Action.StatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.StatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.StatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.StatusRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.data.NetworkAPI.Action.API_Status.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_Status.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_Status} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Status.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_Status}
 */
proto.rv.data.NetworkAPI.Action.API_Status.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_Status;
  return proto.rv.data.NetworkAPI.Action.API_Status.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Status} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_Status}
 */
proto.rv.data.NetworkAPI.Action.API_Status.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.data.NetworkAPI.Action.API_Status.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_Status.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_Status} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_Status.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.data.NetworkAPI.Action.API_StatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.Action.API_StatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.Action.API_StatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_StatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
groupDefinition: (f = msg.getGroupDefinition()) && proto.rv.data.ProLink.GroupDefinition.toObject(includeInstance, f),
status: (f = msg.getStatus()) && proto.rv.data.ProLink.MemberStatus.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.Action.API_StatusResponse}
 */
proto.rv.data.NetworkAPI.Action.API_StatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.Action.API_StatusResponse;
  return proto.rv.data.NetworkAPI.Action.API_StatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.Action.API_StatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.Action.API_StatusResponse}
 */
proto.rv.data.NetworkAPI.Action.API_StatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.ProLink.GroupDefinition;
      reader.readMessage(value,proto.rv.data.ProLink.GroupDefinition.deserializeBinaryFromReader);
      msg.setGroupDefinition(value);
      break;
    case 2:
      var value = new proto.rv.data.ProLink.MemberStatus;
      reader.readMessage(value,proto.rv.data.ProLink.MemberStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
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
proto.rv.data.NetworkAPI.Action.API_StatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.Action.API_StatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.Action.API_StatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.Action.API_StatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupDefinition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.ProLink.GroupDefinition.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.ProLink.MemberStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProLink.GroupDefinition group_definition = 1;
 * @return {?proto.rv.data.ProLink.GroupDefinition}
 */
proto.rv.data.NetworkAPI.Action.API_StatusResponse.prototype.getGroupDefinition = function() {
  return /** @type{?proto.rv.data.ProLink.GroupDefinition} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.ProLink.GroupDefinition, 1));
};


/**
 * @param {?proto.rv.data.ProLink.GroupDefinition|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_StatusResponse} returns this
*/
proto.rv.data.NetworkAPI.Action.API_StatusResponse.prototype.setGroupDefinition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_StatusResponse} returns this
 */
proto.rv.data.NetworkAPI.Action.API_StatusResponse.prototype.clearGroupDefinition = function() {
  return this.setGroupDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_StatusResponse.prototype.hasGroupDefinition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ProLink.MemberStatus status = 2;
 * @return {?proto.rv.data.ProLink.MemberStatus}
 */
proto.rv.data.NetworkAPI.Action.API_StatusResponse.prototype.getStatus = function() {
  return /** @type{?proto.rv.data.ProLink.MemberStatus} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.ProLink.MemberStatus, 2));
};


/**
 * @param {?proto.rv.data.ProLink.MemberStatus|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action.API_StatusResponse} returns this
*/
proto.rv.data.NetworkAPI.Action.API_StatusResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action.API_StatusResponse} returns this
 */
proto.rv.data.NetworkAPI.Action.API_StatusResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.API_StatusResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional API_Clear clear = 1;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Clear}
 */
proto.rv.data.NetworkAPI.Action.prototype.getClear = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Clear} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Clear, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Clear|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
*/
proto.rv.data.NetworkAPI.Action.prototype.setClear = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.data.NetworkAPI.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
 */
proto.rv.data.NetworkAPI.Action.prototype.clearClear = function() {
  return this.setClear(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.prototype.hasClear = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional API_Trigger trigger = 2;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Trigger}
 */
proto.rv.data.NetworkAPI.Action.prototype.getTrigger = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Trigger} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Trigger, 2));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Trigger|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
*/
proto.rv.data.NetworkAPI.Action.prototype.setTrigger = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.data.NetworkAPI.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
 */
proto.rv.data.NetworkAPI.Action.prototype.clearTrigger = function() {
  return this.setTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.prototype.hasTrigger = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional API_Transport transport = 3;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Transport}
 */
proto.rv.data.NetworkAPI.Action.prototype.getTransport = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Transport} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Transport, 3));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Transport|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
*/
proto.rv.data.NetworkAPI.Action.prototype.setTransport = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.data.NetworkAPI.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
 */
proto.rv.data.NetworkAPI.Action.prototype.clearTransport = function() {
  return this.setTransport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.prototype.hasTransport = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional API_Prop prop = 4;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Prop}
 */
proto.rv.data.NetworkAPI.Action.prototype.getProp = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Prop} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Prop, 4));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Prop|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
*/
proto.rv.data.NetworkAPI.Action.prototype.setProp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rv.data.NetworkAPI.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
 */
proto.rv.data.NetworkAPI.Action.prototype.clearProp = function() {
  return this.setProp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.prototype.hasProp = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional API_Timer timer = 5;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Timer}
 */
proto.rv.data.NetworkAPI.Action.prototype.getTimer = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Timer} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Timer, 5));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Timer|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
*/
proto.rv.data.NetworkAPI.Action.prototype.setTimer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.rv.data.NetworkAPI.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
 */
proto.rv.data.NetworkAPI.Action.prototype.clearTimer = function() {
  return this.setTimer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.prototype.hasTimer = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional API_Message message_ = 6;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Message}
 */
proto.rv.data.NetworkAPI.Action.prototype.getMessage = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Message} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Message, 6));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Message|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
*/
proto.rv.data.NetworkAPI.Action.prototype.setMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.rv.data.NetworkAPI.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
 */
proto.rv.data.NetworkAPI.Action.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional API_Macro macro = 7;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Macro}
 */
proto.rv.data.NetworkAPI.Action.prototype.getMacro = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Macro} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Macro, 7));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Macro|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
*/
proto.rv.data.NetworkAPI.Action.prototype.setMacro = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.rv.data.NetworkAPI.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
 */
proto.rv.data.NetworkAPI.Action.prototype.clearMacro = function() {
  return this.setMacro(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.prototype.hasMacro = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional API_Look look = 8;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Look}
 */
proto.rv.data.NetworkAPI.Action.prototype.getLook = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Look} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Look, 8));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Look|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
*/
proto.rv.data.NetworkAPI.Action.prototype.setLook = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.rv.data.NetworkAPI.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
 */
proto.rv.data.NetworkAPI.Action.prototype.clearLook = function() {
  return this.setLook(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.prototype.hasLook = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional API_Stage stage = 9;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Stage}
 */
proto.rv.data.NetworkAPI.Action.prototype.getStage = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Stage} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Stage, 9));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Stage|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
*/
proto.rv.data.NetworkAPI.Action.prototype.setStage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.rv.data.NetworkAPI.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
 */
proto.rv.data.NetworkAPI.Action.prototype.clearStage = function() {
  return this.setStage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.prototype.hasStage = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional API_Status status = 10;
 * @return {?proto.rv.data.NetworkAPI.Action.API_Status}
 */
proto.rv.data.NetworkAPI.Action.prototype.getStatus = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_Status} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_Status, 10));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_Status|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
*/
proto.rv.data.NetworkAPI.Action.prototype.setStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.rv.data.NetworkAPI.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
 */
proto.rv.data.NetworkAPI.Action.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional API_StatusResponse status_response = 11;
 * @return {?proto.rv.data.NetworkAPI.Action.API_StatusResponse}
 */
proto.rv.data.NetworkAPI.Action.prototype.getStatusResponse = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_StatusResponse} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_StatusResponse, 11));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_StatusResponse|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
*/
proto.rv.data.NetworkAPI.Action.prototype.setStatusResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.rv.data.NetworkAPI.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
 */
proto.rv.data.NetworkAPI.Action.prototype.clearStatusResponse = function() {
  return this.setStatusResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.prototype.hasStatusResponse = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional API_TwoStepTrigger two_step_trigger = 12;
 * @return {?proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger}
 */
proto.rv.data.NetworkAPI.Action.prototype.getTwoStepTrigger = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger, 12));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_TwoStepTrigger|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
*/
proto.rv.data.NetworkAPI.Action.prototype.setTwoStepTrigger = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.rv.data.NetworkAPI.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
 */
proto.rv.data.NetworkAPI.Action.prototype.clearTwoStepTrigger = function() {
  return this.setTwoStepTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.prototype.hasTwoStepTrigger = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional API_PrerollComplete preroll_complete = 13;
 * @return {?proto.rv.data.NetworkAPI.Action.API_PrerollComplete}
 */
proto.rv.data.NetworkAPI.Action.prototype.getPrerollComplete = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action.API_PrerollComplete} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action.API_PrerollComplete, 13));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action.API_PrerollComplete|undefined} value
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
*/
proto.rv.data.NetworkAPI.Action.prototype.setPrerollComplete = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.rv.data.NetworkAPI.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.Action} returns this
 */
proto.rv.data.NetworkAPI.Action.prototype.clearPrerollComplete = function() {
  return this.setPrerollComplete(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.Action.prototype.hasPrerollComplete = function() {
  return jspb.Message.getField(this, 13) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.data.NetworkAPI.IndexOrNameIdentifier.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.rv.data.NetworkAPI.IndexOrNameIdentifier.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  INDEX: 1,
  NAME: 2
};

/**
 * @return {proto.rv.data.NetworkAPI.IndexOrNameIdentifier.ComponentCase}
 */
proto.rv.data.NetworkAPI.IndexOrNameIdentifier.prototype.getComponentCase = function() {
  return /** @type {proto.rv.data.NetworkAPI.IndexOrNameIdentifier.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.data.NetworkAPI.IndexOrNameIdentifier.oneofGroups_[0]));
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
proto.rv.data.NetworkAPI.IndexOrNameIdentifier.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.IndexOrNameIdentifier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.IndexOrNameIdentifier} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.IndexOrNameIdentifier.toObject = function(includeInstance, msg) {
  var f, obj = {
index: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.rv.data.NetworkAPI.IndexOrNameIdentifier}
 */
proto.rv.data.NetworkAPI.IndexOrNameIdentifier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.IndexOrNameIdentifier;
  return proto.rv.data.NetworkAPI.IndexOrNameIdentifier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.IndexOrNameIdentifier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.IndexOrNameIdentifier}
 */
proto.rv.data.NetworkAPI.IndexOrNameIdentifier.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.data.NetworkAPI.IndexOrNameIdentifier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.IndexOrNameIdentifier.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.IndexOrNameIdentifier} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.IndexOrNameIdentifier.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 index = 1;
 * @return {number}
 */
proto.rv.data.NetworkAPI.IndexOrNameIdentifier.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.data.NetworkAPI.IndexOrNameIdentifier} returns this
 */
proto.rv.data.NetworkAPI.IndexOrNameIdentifier.prototype.setIndex = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.rv.data.NetworkAPI.IndexOrNameIdentifier.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.IndexOrNameIdentifier} returns this
 */
proto.rv.data.NetworkAPI.IndexOrNameIdentifier.prototype.clearIndex = function() {
  return jspb.Message.setOneofField(this, 1, proto.rv.data.NetworkAPI.IndexOrNameIdentifier.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.IndexOrNameIdentifier.prototype.hasIndex = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.rv.data.NetworkAPI.IndexOrNameIdentifier.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.data.NetworkAPI.IndexOrNameIdentifier} returns this
 */
proto.rv.data.NetworkAPI.IndexOrNameIdentifier.prototype.setName = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.rv.data.NetworkAPI.IndexOrNameIdentifier.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.IndexOrNameIdentifier} returns this
 */
proto.rv.data.NetworkAPI.IndexOrNameIdentifier.prototype.clearName = function() {
  return jspb.Message.setOneofField(this, 2, proto.rv.data.NetworkAPI.IndexOrNameIdentifier.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.IndexOrNameIdentifier.prototype.hasName = function() {
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
proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair.toObject = function(includeInstance, msg) {
  var f, obj = {
key: (f = msg.getKey()) && proto.rv.data.NetworkAPI.IndexOrNameIdentifier.toObject(includeInstance, f),
value: (f = msg.getValue()) && proto.rv.data.NetworkAPI.IndexOrNameIdentifier.toObject(includeInstance, f)
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
 * @return {!proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair}
 */
proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair;
  return proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair}
 */
proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.data.NetworkAPI.IndexOrNameIdentifier;
      reader.readMessage(value,proto.rv.data.NetworkAPI.IndexOrNameIdentifier.deserializeBinaryFromReader);
      msg.setKey(value);
      break;
    case 2:
      var value = new proto.rv.data.NetworkAPI.IndexOrNameIdentifier;
      reader.readMessage(value,proto.rv.data.NetworkAPI.IndexOrNameIdentifier.deserializeBinaryFromReader);
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
proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.data.NetworkAPI.IndexOrNameIdentifier.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.data.NetworkAPI.IndexOrNameIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional IndexOrNameIdentifier key = 1;
 * @return {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier}
 */
proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair.prototype.getKey = function() {
  return /** @type{?proto.rv.data.NetworkAPI.IndexOrNameIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.IndexOrNameIdentifier, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier|undefined} value
 * @return {!proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair} returns this
*/
proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair.prototype.setKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair} returns this
 */
proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional IndexOrNameIdentifier value = 2;
 * @return {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier}
 */
proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair.prototype.getValue = function() {
  return /** @type{?proto.rv.data.NetworkAPI.IndexOrNameIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.IndexOrNameIdentifier, 2));
};


/**
 * @param {?proto.rv.data.NetworkAPI.IndexOrNameIdentifier|undefined} value
 * @return {!proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair} returns this
*/
proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair} returns this
 */
proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.IndexOrNameIdentifierPair.prototype.hasValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Action action = 1;
 * @return {?proto.rv.data.NetworkAPI.Action}
 */
proto.rv.data.NetworkAPI.prototype.getAction = function() {
  return /** @type{?proto.rv.data.NetworkAPI.Action} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.Action, 1));
};


/**
 * @param {?proto.rv.data.NetworkAPI.Action|undefined} value
 * @return {!proto.rv.data.NetworkAPI} returns this
*/
proto.rv.data.NetworkAPI.prototype.setAction = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.data.NetworkAPI.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI} returns this
 */
proto.rv.data.NetworkAPI.prototype.clearAction = function() {
  return this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.prototype.hasAction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ServerState server_state = 2;
 * @return {?proto.rv.data.NetworkAPI.ServerState}
 */
proto.rv.data.NetworkAPI.prototype.getServerState = function() {
  return /** @type{?proto.rv.data.NetworkAPI.ServerState} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.ServerState, 2));
};


/**
 * @param {?proto.rv.data.NetworkAPI.ServerState|undefined} value
 * @return {!proto.rv.data.NetworkAPI} returns this
*/
proto.rv.data.NetworkAPI.prototype.setServerState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.data.NetworkAPI.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI} returns this
 */
proto.rv.data.NetworkAPI.prototype.clearServerState = function() {
  return this.setServerState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.prototype.hasServerState = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GroupChange group_change = 5;
 * @return {?proto.rv.data.NetworkAPI.GroupChange}
 */
proto.rv.data.NetworkAPI.prototype.getGroupChange = function() {
  return /** @type{?proto.rv.data.NetworkAPI.GroupChange} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.GroupChange, 5));
};


/**
 * @param {?proto.rv.data.NetworkAPI.GroupChange|undefined} value
 * @return {!proto.rv.data.NetworkAPI} returns this
*/
proto.rv.data.NetworkAPI.prototype.setGroupChange = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.rv.data.NetworkAPI.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI} returns this
 */
proto.rv.data.NetworkAPI.prototype.clearGroupChange = function() {
  return this.setGroupChange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.prototype.hasGroupChange = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional GroupResponse group_response = 6;
 * @return {?proto.rv.data.NetworkAPI.GroupResponse}
 */
proto.rv.data.NetworkAPI.prototype.getGroupResponse = function() {
  return /** @type{?proto.rv.data.NetworkAPI.GroupResponse} */ (
    jspb.Message.getWrapperField(this, proto.rv.data.NetworkAPI.GroupResponse, 6));
};


/**
 * @param {?proto.rv.data.NetworkAPI.GroupResponse|undefined} value
 * @return {!proto.rv.data.NetworkAPI} returns this
*/
proto.rv.data.NetworkAPI.prototype.setGroupResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.rv.data.NetworkAPI.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.data.NetworkAPI} returns this
 */
proto.rv.data.NetworkAPI.prototype.clearGroupResponse = function() {
  return this.setGroupResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.data.NetworkAPI.prototype.hasGroupResponse = function() {
  return jspb.Message.getField(this, 6) != null;
};


