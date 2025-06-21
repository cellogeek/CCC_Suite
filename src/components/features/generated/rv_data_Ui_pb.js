// source: analyticsUI.proto
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

goog.provide('proto.rv.analytics.UI');
goog.provide('proto.rv.analytics.UI.CCLI');
goog.provide('proto.rv.analytics.UI.CCLI.Report');
goog.provide('proto.rv.analytics.UI.CCLI.Report.ComponentCase');
goog.provide('proto.rv.analytics.UI.CCLI.Report.Export');
goog.provide('proto.rv.analytics.UI.CCLI.Report.Reset');
goog.provide('proto.rv.analytics.UI.CCLI.Report.Shown');
goog.provide('proto.rv.analytics.UI.Capture');
goog.provide('proto.rv.analytics.UI.Capture.ComponentCase');
goog.provide('proto.rv.analytics.UI.Capture.Shown');
goog.provide('proto.rv.analytics.UI.Capture.Shown.Source');
goog.provide('proto.rv.analytics.UI.ClearGroups');
goog.provide('proto.rv.analytics.UI.ClearGroups.ComponentCase');
goog.provide('proto.rv.analytics.UI.ClearGroups.Create');
goog.provide('proto.rv.analytics.UI.ClearGroups.Delete');
goog.provide('proto.rv.analytics.UI.ClearGroups.Group');
goog.provide('proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon');
goog.provide('proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon.IconType');
goog.provide('proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility');
goog.provide('proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility.Visibility');
goog.provide('proto.rv.analytics.UI.ClearGroups.Group.ComponentCase');
goog.provide('proto.rv.analytics.UI.ClearGroups.Shown');
goog.provide('proto.rv.analytics.UI.ClearGroups.Shown.Source');
goog.provide('proto.rv.analytics.UI.ComponentCase');
goog.provide('proto.rv.analytics.UI.Editor');
goog.provide('proto.rv.analytics.UI.Editor.ComponentCase');
goog.provide('proto.rv.analytics.UI.Editor.Overlay');
goog.provide('proto.rv.analytics.UI.Editor.Overlay.Closed');
goog.provide('proto.rv.analytics.UI.Editor.Overlay.Closed.Source');
goog.provide('proto.rv.analytics.UI.Editor.Overlay.ComponentCase');
goog.provide('proto.rv.analytics.UI.Editor.Overlay.Shown');
goog.provide('proto.rv.analytics.UI.Editor.Overlay.Shown.Source');
goog.provide('proto.rv.analytics.UI.InAppStore');
goog.provide('proto.rv.analytics.UI.InAppStore.ComponentCase');
goog.provide('proto.rv.analytics.UI.InAppStore.Trial');
goog.provide('proto.rv.analytics.UI.InAppStore.Trial.Complete');
goog.provide('proto.rv.analytics.UI.InAppStore.Trial.Complete.Result');
goog.provide('proto.rv.analytics.UI.InAppStore.Trial.ComponentCase');
goog.provide('proto.rv.analytics.UI.InAppStore.Trial.Shown');
goog.provide('proto.rv.analytics.UI.Looks');
goog.provide('proto.rv.analytics.UI.Looks.ComponentCase');
goog.provide('proto.rv.analytics.UI.Looks.Shown');
goog.provide('proto.rv.analytics.UI.Looks.Shown.Source');
goog.provide('proto.rv.analytics.UI.LowerRight');
goog.provide('proto.rv.analytics.UI.LowerRight.AudioBin');
goog.provide('proto.rv.analytics.UI.LowerRight.ComponentCase');
goog.provide('proto.rv.analytics.UI.LowerRight.Macros');
goog.provide('proto.rv.analytics.UI.LowerRight.Macros.ComponentCase');
goog.provide('proto.rv.analytics.UI.LowerRight.Macros.Create');
goog.provide('proto.rv.analytics.UI.LowerRight.Macros.Delete');
goog.provide('proto.rv.analytics.UI.LowerRight.Macros.Shown');
goog.provide('proto.rv.analytics.UI.LowerRight.Macros.Trigger');
goog.provide('proto.rv.analytics.UI.LowerRight.Messages');
goog.provide('proto.rv.analytics.UI.LowerRight.Messages.ComponentCase');
goog.provide('proto.rv.analytics.UI.LowerRight.Messages.Create');
goog.provide('proto.rv.analytics.UI.LowerRight.Messages.Delete');
goog.provide('proto.rv.analytics.UI.LowerRight.Messages.Edit');
goog.provide('proto.rv.analytics.UI.LowerRight.Messages.Edit.Action');
goog.provide('proto.rv.analytics.UI.LowerRight.Messages.Shown');
goog.provide('proto.rv.analytics.UI.LowerRight.Messages.State');
goog.provide('proto.rv.analytics.UI.LowerRight.Messages.State.State');
goog.provide('proto.rv.analytics.UI.LowerRight.Props');
goog.provide('proto.rv.analytics.UI.LowerRight.Props.ComponentCase');
goog.provide('proto.rv.analytics.UI.LowerRight.Props.Create');
goog.provide('proto.rv.analytics.UI.LowerRight.Props.Delete');
goog.provide('proto.rv.analytics.UI.LowerRight.Props.Shown');
goog.provide('proto.rv.analytics.UI.LowerRight.Props.State');
goog.provide('proto.rv.analytics.UI.LowerRight.Props.State.State');
goog.provide('proto.rv.analytics.UI.LowerRight.Props.Transition');
goog.provide('proto.rv.analytics.UI.LowerRight.Stage');
goog.provide('proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout');
goog.provide('proto.rv.analytics.UI.LowerRight.Stage.ComponentCase');
goog.provide('proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens');
goog.provide('proto.rv.analytics.UI.LowerRight.Stage.EditLayouts');
goog.provide('proto.rv.analytics.UI.LowerRight.Stage.MessageState');
goog.provide('proto.rv.analytics.UI.LowerRight.Stage.MessageState.State');
goog.provide('proto.rv.analytics.UI.LowerRight.Stage.Shown');
goog.provide('proto.rv.analytics.UI.LowerRight.Timers');
goog.provide('proto.rv.analytics.UI.LowerRight.Timers.Collapse');
goog.provide('proto.rv.analytics.UI.LowerRight.Timers.Collapse.State');
goog.provide('proto.rv.analytics.UI.LowerRight.Timers.ComponentCase');
goog.provide('proto.rv.analytics.UI.LowerRight.Timers.Create');
goog.provide('proto.rv.analytics.UI.LowerRight.Timers.Delete');
goog.provide('proto.rv.analytics.UI.LowerRight.Timers.Edit');
goog.provide('proto.rv.analytics.UI.LowerRight.Timers.Edit.Field');
goog.provide('proto.rv.analytics.UI.LowerRight.Timers.Shown');
goog.provide('proto.rv.analytics.UI.LowerRight.Timers.State');
goog.provide('proto.rv.analytics.UI.LowerRight.Timers.State.State');
goog.provide('proto.rv.analytics.UI.MainView');
goog.provide('proto.rv.analytics.UI.MainView.Bible');
goog.provide('proto.rv.analytics.UI.MainView.Bible.BibleCount');
goog.provide('proto.rv.analytics.UI.MainView.Bible.ComponentCase');
goog.provide('proto.rv.analytics.UI.MainView.Bible.GenerateNext');
goog.provide('proto.rv.analytics.UI.MainView.Bible.GeneratePrevious');
goog.provide('proto.rv.analytics.UI.MainView.Bible.GenerateSlides');
goog.provide('proto.rv.analytics.UI.MainView.Bible.GenerateSlides.ReferenceType');
goog.provide('proto.rv.analytics.UI.MainView.Bible.GenerateSlides.TextBoxLocation');
goog.provide('proto.rv.analytics.UI.MainView.Bible.Location');
goog.provide('proto.rv.analytics.UI.MainView.Bible.Lookup');
goog.provide('proto.rv.analytics.UI.MainView.Bible.Lookup.LookupLocation');
goog.provide('proto.rv.analytics.UI.MainView.Bible.SaveSlides');
goog.provide('proto.rv.analytics.UI.MainView.Bible.SaveSlides.SlideDestination');
goog.provide('proto.rv.analytics.UI.MainView.Bible.Shown');
goog.provide('proto.rv.analytics.UI.MainView.Bible.Shown.Source');
goog.provide('proto.rv.analytics.UI.MainView.Bible.Trigger');
goog.provide('proto.rv.analytics.UI.MainView.ComponentCase');
goog.provide('proto.rv.analytics.UI.MainView.CopyrightEditor');
goog.provide('proto.rv.analytics.UI.MainView.CopyrightEditor.ComponentCase');
goog.provide('proto.rv.analytics.UI.MainView.CopyrightEditor.Shown');
goog.provide('proto.rv.analytics.UI.MainView.CopyrightEditor.Shown.Source');
goog.provide('proto.rv.analytics.UI.MainView.MaskEditor');
goog.provide('proto.rv.analytics.UI.MainView.MaskEditor.ComponentCase');
goog.provide('proto.rv.analytics.UI.MainView.MaskEditor.Shown');
goog.provide('proto.rv.analytics.UI.MainView.MaskEditor.Shown.Source');
goog.provide('proto.rv.analytics.UI.MainView.PresentationEditor');
goog.provide('proto.rv.analytics.UI.MainView.PresentationEditor.ComponentCase');
goog.provide('proto.rv.analytics.UI.MainView.PresentationEditor.Shown');
goog.provide('proto.rv.analytics.UI.MainView.PresentationEditor.Shown.Source');
goog.provide('proto.rv.analytics.UI.MainView.PropsEditor');
goog.provide('proto.rv.analytics.UI.MainView.PropsEditor.ComponentCase');
goog.provide('proto.rv.analytics.UI.MainView.PropsEditor.Shown');
goog.provide('proto.rv.analytics.UI.MainView.PropsEditor.Shown.Source');
goog.provide('proto.rv.analytics.UI.MainView.ReflowEditor');
goog.provide('proto.rv.analytics.UI.MainView.ReflowEditor.ComponentCase');
goog.provide('proto.rv.analytics.UI.MainView.ReflowEditor.Shown');
goog.provide('proto.rv.analytics.UI.MainView.ReflowEditor.Shown.Source');
goog.provide('proto.rv.analytics.UI.MainView.Show');
goog.provide('proto.rv.analytics.UI.MainView.Show.ComponentCase');
goog.provide('proto.rv.analytics.UI.MainView.Show.Shown');
goog.provide('proto.rv.analytics.UI.MainView.Show.Shown.Source');
goog.provide('proto.rv.analytics.UI.MainView.StageEditor');
goog.provide('proto.rv.analytics.UI.MainView.StageEditor.ComponentCase');
goog.provide('proto.rv.analytics.UI.MainView.StageEditor.Shown');
goog.provide('proto.rv.analytics.UI.MainView.StageEditor.Shown.Source');
goog.provide('proto.rv.analytics.UI.MainView.ThemeEditor');
goog.provide('proto.rv.analytics.UI.MainView.ThemeEditor.ComponentCase');
goog.provide('proto.rv.analytics.UI.MainView.ThemeEditor.Shown');
goog.provide('proto.rv.analytics.UI.MainView.ThemeEditor.Shown.Source');
goog.provide('proto.rv.analytics.UI.NetworkGroup');
goog.provide('proto.rv.analytics.UI.NetworkGroup.Add');
goog.provide('proto.rv.analytics.UI.NetworkGroup.ComponentCase');
goog.provide('proto.rv.analytics.UI.NetworkGroup.Create');
goog.provide('proto.rv.analytics.UI.NetworkGroup.Invite');
goog.provide('proto.rv.analytics.UI.NetworkGroup.Join');
goog.provide('proto.rv.analytics.UI.NetworkGroup.Leave');
goog.provide('proto.rv.analytics.UI.NetworkGroup.Remove');
goog.provide('proto.rv.analytics.UI.Placeholder');
goog.provide('proto.rv.analytics.UI.Placeholder.ComponentCase');
goog.provide('proto.rv.analytics.UI.Placeholder.Link');
goog.provide('proto.rv.analytics.UI.Placeholder.Link.Source');
goog.provide('proto.rv.analytics.UI.Placeholder.Link.Type');
goog.provide('proto.rv.analytics.UI.Placeholder.Unlink');
goog.provide('proto.rv.analytics.UI.PlanningCenterLive');
goog.provide('proto.rv.analytics.UI.PlanningCenterLive.ComponentCase');
goog.provide('proto.rv.analytics.UI.PlanningCenterLive.Shown');
goog.provide('proto.rv.analytics.UI.PlanningCenterLive.Shown.WindowType');
goog.provide('proto.rv.analytics.UI.Preferences');
goog.provide('proto.rv.analytics.UI.Preferences.ComponentCase');
goog.provide('proto.rv.analytics.UI.Preferences.CustomLogo');
goog.provide('proto.rv.analytics.UI.PreviewArea');
goog.provide('proto.rv.analytics.UI.PreviewArea.ClearGroups');
goog.provide('proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed');
goog.provide('proto.rv.analytics.UI.PreviewArea.ClearGroups.ComponentCase');
goog.provide('proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger');
goog.provide('proto.rv.analytics.UI.PreviewArea.ComponentCase');
goog.provide('proto.rv.analytics.UI.QuickSearch');
goog.provide('proto.rv.analytics.UI.QuickSearch.ComponentCase');
goog.provide('proto.rv.analytics.UI.QuickSearch.OpenItems');
goog.provide('proto.rv.analytics.UI.QuickSearch.OpenItems.Source');
goog.provide('proto.rv.analytics.UI.QuickSearch.OpenItems.Style');
goog.provide('proto.rv.analytics.UI.QuickSearch.Search');
goog.provide('proto.rv.analytics.UI.QuickSearch.Search.Source');
goog.provide('proto.rv.analytics.UI.QuickSearch.Shown');
goog.provide('proto.rv.analytics.UI.QuickSearch.Shown.Source');
goog.provide('proto.rv.analytics.UI.ScreenConfiguration');
goog.provide('proto.rv.analytics.UI.ScreenConfiguration.ComponentCase');
goog.provide('proto.rv.analytics.UI.ScreenConfiguration.Shown');
goog.provide('proto.rv.analytics.UI.ScreenConfiguration.Shown.Source');
goog.provide('proto.rv.analytics.UI.Show');
goog.provide('proto.rv.analytics.UI.Show.ComponentCase');
goog.provide('proto.rv.analytics.UI.Show.SlideLabel');
goog.provide('proto.rv.analytics.UI.Show.SlideLabel.Change');
goog.provide('proto.rv.analytics.UI.Show.SlideLabel.Change.Source');
goog.provide('proto.rv.analytics.UI.Show.SlideLabel.ComponentCase');
goog.provide('proto.rv.analytics.UI.Show.SlideLabel.Shown');
goog.provide('proto.rv.analytics.UI.TestPattern');
goog.provide('proto.rv.analytics.UI.TestPattern.ComponentCase');
goog.provide('proto.rv.analytics.UI.TestPattern.Shown');
goog.provide('proto.rv.analytics.UI.TestPattern.Shown.Source');
goog.provide('proto.rv.analytics.UI.TextInspector');
goog.provide('proto.rv.analytics.UI.TextInspector.BackgroundColor');
goog.provide('proto.rv.analytics.UI.TextInspector.BackgroundColor.ColorType');
goog.provide('proto.rv.analytics.UI.TextInspector.ComponentCase');
goog.provide('proto.rv.analytics.UI.TextInspector.Foreground');
goog.provide('proto.rv.analytics.UI.TextInspector.Foreground.FillType');
goog.provide('proto.rv.analytics.UI.TextInspector.LineTransform');
goog.provide('proto.rv.analytics.UI.TextInspector.LineTransform.TransformType');
goog.provide('proto.rv.analytics.UI.TextInspector.ScrollingText');
goog.provide('proto.rv.analytics.UI.TextInspector.ScrollingText.ComponentCase');
goog.provide('proto.rv.analytics.UI.TextInspector.ScrollingText.Enable');
goog.provide('proto.rv.analytics.UI.TextInspector.SelectionMode');
goog.provide('proto.rv.analytics.UI.TextInspector.Shown');
goog.provide('proto.rv.analytics.UI.TextInspector.UnderlineColor');
goog.provide('proto.rv.analytics.UI.Toolbar');
goog.provide('proto.rv.analytics.UI.Toolbar.ComponentCase');
goog.provide('proto.rv.analytics.UI.Toolbar.TextStyle');
goog.provide('proto.rv.analytics.UI.Toolbar.TextStyle.Change');
goog.provide('proto.rv.analytics.UI.Toolbar.TextStyle.Change.Property');
goog.provide('proto.rv.analytics.UI.Toolbar.TextStyle.Change.Target');
goog.provide('proto.rv.analytics.UI.Toolbar.TextStyle.ComponentCase');
goog.provide('proto.rv.analytics.UI.Toolbar.TextStyle.Shown');
goog.provide('proto.rv.analytics.UI.Toolbar.Theme');
goog.provide('proto.rv.analytics.UI.Toolbar.Theme.Applied');
goog.provide('proto.rv.analytics.UI.Toolbar.Theme.Applied.Target');
goog.provide('proto.rv.analytics.UI.Toolbar.Theme.ComponentCase');
goog.provide('proto.rv.analytics.UI.Toolbar.Theme.Shown');
goog.provide('proto.rv.analytics.UI.WelcomeToProPresenter');
goog.provide('proto.rv.analytics.UI.WelcomeToProPresenter.Blog');
goog.provide('proto.rv.analytics.UI.WelcomeToProPresenter.ComponentCase');
goog.provide('proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent');
goog.provide('proto.rv.analytics.UI.WelcomeToProPresenter.Facebook');
goog.provide('proto.rv.analytics.UI.WelcomeToProPresenter.Instagram');
goog.provide('proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase');
goog.provide('proto.rv.analytics.UI.WelcomeToProPresenter.Migration');
goog.provide('proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp');
goog.provide('proto.rv.analytics.UI.WelcomeToProPresenter.Shown');
goog.provide('proto.rv.analytics.UI.WelcomeToProPresenter.Shown.Source');
goog.provide('proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials');
goog.provide('proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup');
goog.provide('proto.rv.analytics.UI.WhatsNew');
goog.provide('proto.rv.analytics.UI.WhatsNew.ComponentCase');
goog.provide('proto.rv.analytics.UI.WhatsNew.Viewed');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

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
proto.rv.analytics.UI = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.displayName = 'proto.rv.analytics.UI';
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
proto.rv.analytics.UI.QuickSearch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.QuickSearch.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.QuickSearch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.QuickSearch.displayName = 'proto.rv.analytics.UI.QuickSearch';
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
proto.rv.analytics.UI.QuickSearch.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.QuickSearch.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.QuickSearch.Shown.displayName = 'proto.rv.analytics.UI.QuickSearch.Shown';
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
proto.rv.analytics.UI.QuickSearch.Search = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.QuickSearch.Search, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.QuickSearch.Search.displayName = 'proto.rv.analytics.UI.QuickSearch.Search';
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
proto.rv.analytics.UI.QuickSearch.OpenItems = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.QuickSearch.OpenItems, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.QuickSearch.OpenItems.displayName = 'proto.rv.analytics.UI.QuickSearch.OpenItems';
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
proto.rv.analytics.UI.Toolbar = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.Toolbar.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.Toolbar, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.Toolbar.displayName = 'proto.rv.analytics.UI.Toolbar';
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
proto.rv.analytics.UI.Toolbar.TextStyle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.Toolbar.TextStyle.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.Toolbar.TextStyle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.Toolbar.TextStyle.displayName = 'proto.rv.analytics.UI.Toolbar.TextStyle';
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
proto.rv.analytics.UI.Toolbar.TextStyle.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.Toolbar.TextStyle.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.Toolbar.TextStyle.Shown.displayName = 'proto.rv.analytics.UI.Toolbar.TextStyle.Shown';
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
proto.rv.analytics.UI.Toolbar.TextStyle.Change = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.Toolbar.TextStyle.Change, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.Toolbar.TextStyle.Change.displayName = 'proto.rv.analytics.UI.Toolbar.TextStyle.Change';
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
proto.rv.analytics.UI.Toolbar.Theme = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.Toolbar.Theme.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.Toolbar.Theme, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.Toolbar.Theme.displayName = 'proto.rv.analytics.UI.Toolbar.Theme';
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
proto.rv.analytics.UI.Toolbar.Theme.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.Toolbar.Theme.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.Toolbar.Theme.Shown.displayName = 'proto.rv.analytics.UI.Toolbar.Theme.Shown';
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
proto.rv.analytics.UI.Toolbar.Theme.Applied = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.Toolbar.Theme.Applied, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.Toolbar.Theme.Applied.displayName = 'proto.rv.analytics.UI.Toolbar.Theme.Applied';
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
proto.rv.analytics.UI.MainView = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.MainView.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.MainView, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.displayName = 'proto.rv.analytics.UI.MainView';
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
proto.rv.analytics.UI.MainView.Show = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.MainView.Show.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.MainView.Show, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.Show.displayName = 'proto.rv.analytics.UI.MainView.Show';
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
proto.rv.analytics.UI.MainView.Show.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.MainView.Show.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.Show.Shown.displayName = 'proto.rv.analytics.UI.MainView.Show.Shown';
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
proto.rv.analytics.UI.MainView.PresentationEditor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.MainView.PresentationEditor.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.MainView.PresentationEditor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.PresentationEditor.displayName = 'proto.rv.analytics.UI.MainView.PresentationEditor';
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
proto.rv.analytics.UI.MainView.PresentationEditor.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.MainView.PresentationEditor.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.PresentationEditor.Shown.displayName = 'proto.rv.analytics.UI.MainView.PresentationEditor.Shown';
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
proto.rv.analytics.UI.MainView.ReflowEditor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.MainView.ReflowEditor.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.MainView.ReflowEditor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.ReflowEditor.displayName = 'proto.rv.analytics.UI.MainView.ReflowEditor';
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
proto.rv.analytics.UI.MainView.ReflowEditor.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.MainView.ReflowEditor.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.ReflowEditor.Shown.displayName = 'proto.rv.analytics.UI.MainView.ReflowEditor.Shown';
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
proto.rv.analytics.UI.MainView.Bible = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.MainView.Bible.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.MainView.Bible, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.Bible.displayName = 'proto.rv.analytics.UI.MainView.Bible';
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
proto.rv.analytics.UI.MainView.Bible.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.MainView.Bible.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.Bible.Shown.displayName = 'proto.rv.analytics.UI.MainView.Bible.Shown';
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
proto.rv.analytics.UI.MainView.Bible.Trigger = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.MainView.Bible.Trigger, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.Bible.Trigger.displayName = 'proto.rv.analytics.UI.MainView.Bible.Trigger';
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
proto.rv.analytics.UI.MainView.Bible.GenerateSlides = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.MainView.Bible.GenerateSlides, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.Bible.GenerateSlides.displayName = 'proto.rv.analytics.UI.MainView.Bible.GenerateSlides';
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
proto.rv.analytics.UI.MainView.Bible.GenerateNext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.MainView.Bible.GenerateNext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.Bible.GenerateNext.displayName = 'proto.rv.analytics.UI.MainView.Bible.GenerateNext';
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
proto.rv.analytics.UI.MainView.Bible.GeneratePrevious = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.MainView.Bible.GeneratePrevious, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.Bible.GeneratePrevious.displayName = 'proto.rv.analytics.UI.MainView.Bible.GeneratePrevious';
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
proto.rv.analytics.UI.MainView.Bible.SaveSlides = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.MainView.Bible.SaveSlides, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.Bible.SaveSlides.displayName = 'proto.rv.analytics.UI.MainView.Bible.SaveSlides';
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
proto.rv.analytics.UI.MainView.Bible.Lookup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.MainView.Bible.Lookup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.Bible.Lookup.displayName = 'proto.rv.analytics.UI.MainView.Bible.Lookup';
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
proto.rv.analytics.UI.MainView.Bible.BibleCount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.MainView.Bible.BibleCount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.Bible.BibleCount.displayName = 'proto.rv.analytics.UI.MainView.Bible.BibleCount';
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
proto.rv.analytics.UI.MainView.StageEditor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.MainView.StageEditor.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.MainView.StageEditor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.StageEditor.displayName = 'proto.rv.analytics.UI.MainView.StageEditor';
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
proto.rv.analytics.UI.MainView.StageEditor.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.MainView.StageEditor.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.StageEditor.Shown.displayName = 'proto.rv.analytics.UI.MainView.StageEditor.Shown';
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
proto.rv.analytics.UI.MainView.ThemeEditor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.MainView.ThemeEditor.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.MainView.ThemeEditor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.ThemeEditor.displayName = 'proto.rv.analytics.UI.MainView.ThemeEditor';
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
proto.rv.analytics.UI.MainView.ThemeEditor.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.MainView.ThemeEditor.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.ThemeEditor.Shown.displayName = 'proto.rv.analytics.UI.MainView.ThemeEditor.Shown';
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
proto.rv.analytics.UI.MainView.CopyrightEditor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.MainView.CopyrightEditor.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.MainView.CopyrightEditor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.CopyrightEditor.displayName = 'proto.rv.analytics.UI.MainView.CopyrightEditor';
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
proto.rv.analytics.UI.MainView.CopyrightEditor.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.MainView.CopyrightEditor.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.CopyrightEditor.Shown.displayName = 'proto.rv.analytics.UI.MainView.CopyrightEditor.Shown';
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
proto.rv.analytics.UI.MainView.PropsEditor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.MainView.PropsEditor.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.MainView.PropsEditor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.PropsEditor.displayName = 'proto.rv.analytics.UI.MainView.PropsEditor';
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
proto.rv.analytics.UI.MainView.PropsEditor.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.MainView.PropsEditor.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.PropsEditor.Shown.displayName = 'proto.rv.analytics.UI.MainView.PropsEditor.Shown';
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
proto.rv.analytics.UI.MainView.MaskEditor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.MainView.MaskEditor.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.MainView.MaskEditor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.MaskEditor.displayName = 'proto.rv.analytics.UI.MainView.MaskEditor';
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
proto.rv.analytics.UI.MainView.MaskEditor.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.MainView.MaskEditor.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.MainView.MaskEditor.Shown.displayName = 'proto.rv.analytics.UI.MainView.MaskEditor.Shown';
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
proto.rv.analytics.UI.Looks = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.Looks.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.Looks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.Looks.displayName = 'proto.rv.analytics.UI.Looks';
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
proto.rv.analytics.UI.Looks.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.Looks.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.Looks.Shown.displayName = 'proto.rv.analytics.UI.Looks.Shown';
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
proto.rv.analytics.UI.ScreenConfiguration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.ScreenConfiguration.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.ScreenConfiguration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.ScreenConfiguration.displayName = 'proto.rv.analytics.UI.ScreenConfiguration';
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
proto.rv.analytics.UI.ScreenConfiguration.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.ScreenConfiguration.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.ScreenConfiguration.Shown.displayName = 'proto.rv.analytics.UI.ScreenConfiguration.Shown';
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
proto.rv.analytics.UI.LowerRight = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.LowerRight.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.LowerRight, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.displayName = 'proto.rv.analytics.UI.LowerRight';
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
proto.rv.analytics.UI.LowerRight.Timers = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.LowerRight.Timers.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Timers, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Timers.displayName = 'proto.rv.analytics.UI.LowerRight.Timers';
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
proto.rv.analytics.UI.LowerRight.Timers.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Timers.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Timers.Shown.displayName = 'proto.rv.analytics.UI.LowerRight.Timers.Shown';
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
proto.rv.analytics.UI.LowerRight.Timers.Collapse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Timers.Collapse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Timers.Collapse.displayName = 'proto.rv.analytics.UI.LowerRight.Timers.Collapse';
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
proto.rv.analytics.UI.LowerRight.Timers.Edit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Timers.Edit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Timers.Edit.displayName = 'proto.rv.analytics.UI.LowerRight.Timers.Edit';
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
proto.rv.analytics.UI.LowerRight.Timers.State = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Timers.State, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Timers.State.displayName = 'proto.rv.analytics.UI.LowerRight.Timers.State';
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
proto.rv.analytics.UI.LowerRight.Timers.Create = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Timers.Create, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Timers.Create.displayName = 'proto.rv.analytics.UI.LowerRight.Timers.Create';
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
proto.rv.analytics.UI.LowerRight.Timers.Delete = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Timers.Delete, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Timers.Delete.displayName = 'proto.rv.analytics.UI.LowerRight.Timers.Delete';
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
proto.rv.analytics.UI.LowerRight.Messages = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.LowerRight.Messages.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Messages, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Messages.displayName = 'proto.rv.analytics.UI.LowerRight.Messages';
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
proto.rv.analytics.UI.LowerRight.Messages.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Messages.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Messages.Shown.displayName = 'proto.rv.analytics.UI.LowerRight.Messages.Shown';
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
proto.rv.analytics.UI.LowerRight.Messages.Edit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Messages.Edit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Messages.Edit.displayName = 'proto.rv.analytics.UI.LowerRight.Messages.Edit';
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
proto.rv.analytics.UI.LowerRight.Messages.State = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Messages.State, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Messages.State.displayName = 'proto.rv.analytics.UI.LowerRight.Messages.State';
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
proto.rv.analytics.UI.LowerRight.Messages.Create = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Messages.Create, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Messages.Create.displayName = 'proto.rv.analytics.UI.LowerRight.Messages.Create';
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
proto.rv.analytics.UI.LowerRight.Messages.Delete = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Messages.Delete, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Messages.Delete.displayName = 'proto.rv.analytics.UI.LowerRight.Messages.Delete';
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
proto.rv.analytics.UI.LowerRight.Props = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.LowerRight.Props.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Props, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Props.displayName = 'proto.rv.analytics.UI.LowerRight.Props';
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
proto.rv.analytics.UI.LowerRight.Props.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Props.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Props.Shown.displayName = 'proto.rv.analytics.UI.LowerRight.Props.Shown';
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
proto.rv.analytics.UI.LowerRight.Props.Transition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Props.Transition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Props.Transition.displayName = 'proto.rv.analytics.UI.LowerRight.Props.Transition';
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
proto.rv.analytics.UI.LowerRight.Props.State = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Props.State, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Props.State.displayName = 'proto.rv.analytics.UI.LowerRight.Props.State';
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
proto.rv.analytics.UI.LowerRight.Props.Create = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Props.Create, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Props.Create.displayName = 'proto.rv.analytics.UI.LowerRight.Props.Create';
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
proto.rv.analytics.UI.LowerRight.Props.Delete = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Props.Delete, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Props.Delete.displayName = 'proto.rv.analytics.UI.LowerRight.Props.Delete';
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
proto.rv.analytics.UI.LowerRight.Stage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.LowerRight.Stage.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Stage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Stage.displayName = 'proto.rv.analytics.UI.LowerRight.Stage';
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
proto.rv.analytics.UI.LowerRight.Stage.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Stage.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Stage.Shown.displayName = 'proto.rv.analytics.UI.LowerRight.Stage.Shown';
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
proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout.displayName = 'proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout';
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
proto.rv.analytics.UI.LowerRight.Stage.MessageState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Stage.MessageState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Stage.MessageState.displayName = 'proto.rv.analytics.UI.LowerRight.Stage.MessageState';
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
proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens.displayName = 'proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens';
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
proto.rv.analytics.UI.LowerRight.Stage.EditLayouts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Stage.EditLayouts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Stage.EditLayouts.displayName = 'proto.rv.analytics.UI.LowerRight.Stage.EditLayouts';
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
proto.rv.analytics.UI.LowerRight.AudioBin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.AudioBin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.AudioBin.displayName = 'proto.rv.analytics.UI.LowerRight.AudioBin';
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
proto.rv.analytics.UI.LowerRight.Macros = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.LowerRight.Macros.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Macros, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Macros.displayName = 'proto.rv.analytics.UI.LowerRight.Macros';
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
proto.rv.analytics.UI.LowerRight.Macros.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Macros.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Macros.Shown.displayName = 'proto.rv.analytics.UI.LowerRight.Macros.Shown';
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
proto.rv.analytics.UI.LowerRight.Macros.Trigger = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Macros.Trigger, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Macros.Trigger.displayName = 'proto.rv.analytics.UI.LowerRight.Macros.Trigger';
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
proto.rv.analytics.UI.LowerRight.Macros.Create = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Macros.Create, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Macros.Create.displayName = 'proto.rv.analytics.UI.LowerRight.Macros.Create';
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
proto.rv.analytics.UI.LowerRight.Macros.Delete = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.LowerRight.Macros.Delete, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.LowerRight.Macros.Delete.displayName = 'proto.rv.analytics.UI.LowerRight.Macros.Delete';
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
proto.rv.analytics.UI.TextInspector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.TextInspector.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.TextInspector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.TextInspector.displayName = 'proto.rv.analytics.UI.TextInspector';
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
proto.rv.analytics.UI.TextInspector.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.TextInspector.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.TextInspector.Shown.displayName = 'proto.rv.analytics.UI.TextInspector.Shown';
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
proto.rv.analytics.UI.TextInspector.Foreground = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.TextInspector.Foreground, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.TextInspector.Foreground.displayName = 'proto.rv.analytics.UI.TextInspector.Foreground';
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
proto.rv.analytics.UI.TextInspector.UnderlineColor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.TextInspector.UnderlineColor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.TextInspector.UnderlineColor.displayName = 'proto.rv.analytics.UI.TextInspector.UnderlineColor';
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
proto.rv.analytics.UI.TextInspector.BackgroundColor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.TextInspector.BackgroundColor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.TextInspector.BackgroundColor.displayName = 'proto.rv.analytics.UI.TextInspector.BackgroundColor';
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
proto.rv.analytics.UI.TextInspector.ScrollingText = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.TextInspector.ScrollingText.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.TextInspector.ScrollingText, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.TextInspector.ScrollingText.displayName = 'proto.rv.analytics.UI.TextInspector.ScrollingText';
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
proto.rv.analytics.UI.TextInspector.ScrollingText.Enable = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.TextInspector.ScrollingText.Enable, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.TextInspector.ScrollingText.Enable.displayName = 'proto.rv.analytics.UI.TextInspector.ScrollingText.Enable';
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
proto.rv.analytics.UI.TextInspector.LineTransform = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.TextInspector.LineTransform, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.TextInspector.LineTransform.displayName = 'proto.rv.analytics.UI.TextInspector.LineTransform';
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
proto.rv.analytics.UI.Show = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.Show.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.Show, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.Show.displayName = 'proto.rv.analytics.UI.Show';
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
proto.rv.analytics.UI.Show.SlideLabel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.Show.SlideLabel.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.Show.SlideLabel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.Show.SlideLabel.displayName = 'proto.rv.analytics.UI.Show.SlideLabel';
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
proto.rv.analytics.UI.Show.SlideLabel.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.Show.SlideLabel.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.Show.SlideLabel.Shown.displayName = 'proto.rv.analytics.UI.Show.SlideLabel.Shown';
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
proto.rv.analytics.UI.Show.SlideLabel.Change = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.Show.SlideLabel.Change, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.Show.SlideLabel.Change.displayName = 'proto.rv.analytics.UI.Show.SlideLabel.Change';
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
proto.rv.analytics.UI.InAppStore = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.InAppStore.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.InAppStore, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.InAppStore.displayName = 'proto.rv.analytics.UI.InAppStore';
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
proto.rv.analytics.UI.InAppStore.Trial = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.InAppStore.Trial.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.InAppStore.Trial, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.InAppStore.Trial.displayName = 'proto.rv.analytics.UI.InAppStore.Trial';
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
proto.rv.analytics.UI.InAppStore.Trial.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.InAppStore.Trial.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.InAppStore.Trial.Shown.displayName = 'proto.rv.analytics.UI.InAppStore.Trial.Shown';
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
proto.rv.analytics.UI.InAppStore.Trial.Complete = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.InAppStore.Trial.Complete, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.InAppStore.Trial.Complete.displayName = 'proto.rv.analytics.UI.InAppStore.Trial.Complete';
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
proto.rv.analytics.UI.Editor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.Editor.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.Editor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.Editor.displayName = 'proto.rv.analytics.UI.Editor';
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
proto.rv.analytics.UI.Editor.Overlay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.Editor.Overlay.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.Editor.Overlay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.Editor.Overlay.displayName = 'proto.rv.analytics.UI.Editor.Overlay';
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
proto.rv.analytics.UI.Editor.Overlay.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.Editor.Overlay.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.Editor.Overlay.Shown.displayName = 'proto.rv.analytics.UI.Editor.Overlay.Shown';
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
proto.rv.analytics.UI.Editor.Overlay.Closed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.Editor.Overlay.Closed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.Editor.Overlay.Closed.displayName = 'proto.rv.analytics.UI.Editor.Overlay.Closed';
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
proto.rv.analytics.UI.WhatsNew = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.WhatsNew.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.WhatsNew, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.WhatsNew.displayName = 'proto.rv.analytics.UI.WhatsNew';
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
proto.rv.analytics.UI.WhatsNew.Viewed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.WhatsNew.Viewed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.WhatsNew.Viewed.displayName = 'proto.rv.analytics.UI.WhatsNew.Viewed';
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
proto.rv.analytics.UI.ClearGroups = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.ClearGroups.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.ClearGroups, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.ClearGroups.displayName = 'proto.rv.analytics.UI.ClearGroups';
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
proto.rv.analytics.UI.ClearGroups.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.ClearGroups.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.ClearGroups.Shown.displayName = 'proto.rv.analytics.UI.ClearGroups.Shown';
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
proto.rv.analytics.UI.ClearGroups.Create = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.ClearGroups.Create, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.ClearGroups.Create.displayName = 'proto.rv.analytics.UI.ClearGroups.Create';
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
proto.rv.analytics.UI.ClearGroups.Delete = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.ClearGroups.Delete, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.ClearGroups.Delete.displayName = 'proto.rv.analytics.UI.ClearGroups.Delete';
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
proto.rv.analytics.UI.ClearGroups.Group = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.ClearGroups.Group.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.ClearGroups.Group, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.ClearGroups.Group.displayName = 'proto.rv.analytics.UI.ClearGroups.Group';
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
proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility.displayName = 'proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility';
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
proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon.displayName = 'proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon';
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
proto.rv.analytics.UI.PreviewArea = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.PreviewArea.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.PreviewArea, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.PreviewArea.displayName = 'proto.rv.analytics.UI.PreviewArea';
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
proto.rv.analytics.UI.PreviewArea.ClearGroups = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.PreviewArea.ClearGroups.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.PreviewArea.ClearGroups, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.PreviewArea.ClearGroups.displayName = 'proto.rv.analytics.UI.PreviewArea.ClearGroups';
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
proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger.displayName = 'proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger';
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
proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed.displayName = 'proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed';
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
proto.rv.analytics.UI.Placeholder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.Placeholder.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.Placeholder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.Placeholder.displayName = 'proto.rv.analytics.UI.Placeholder';
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
proto.rv.analytics.UI.Placeholder.Link = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.Placeholder.Link, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.Placeholder.Link.displayName = 'proto.rv.analytics.UI.Placeholder.Link';
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
proto.rv.analytics.UI.Placeholder.Unlink = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.Placeholder.Unlink, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.Placeholder.Unlink.displayName = 'proto.rv.analytics.UI.Placeholder.Unlink';
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
proto.rv.analytics.UI.PlanningCenterLive = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.PlanningCenterLive.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.PlanningCenterLive, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.PlanningCenterLive.displayName = 'proto.rv.analytics.UI.PlanningCenterLive';
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
proto.rv.analytics.UI.PlanningCenterLive.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.PlanningCenterLive.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.PlanningCenterLive.Shown.displayName = 'proto.rv.analytics.UI.PlanningCenterLive.Shown';
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
proto.rv.analytics.UI.NetworkGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.NetworkGroup.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.NetworkGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.NetworkGroup.displayName = 'proto.rv.analytics.UI.NetworkGroup';
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
proto.rv.analytics.UI.NetworkGroup.Create = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.NetworkGroup.Create, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.NetworkGroup.Create.displayName = 'proto.rv.analytics.UI.NetworkGroup.Create';
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
proto.rv.analytics.UI.NetworkGroup.Add = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.NetworkGroup.Add, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.NetworkGroup.Add.displayName = 'proto.rv.analytics.UI.NetworkGroup.Add';
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
proto.rv.analytics.UI.NetworkGroup.Join = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.NetworkGroup.Join, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.NetworkGroup.Join.displayName = 'proto.rv.analytics.UI.NetworkGroup.Join';
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
proto.rv.analytics.UI.NetworkGroup.Invite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.NetworkGroup.Invite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.NetworkGroup.Invite.displayName = 'proto.rv.analytics.UI.NetworkGroup.Invite';
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
proto.rv.analytics.UI.NetworkGroup.Leave = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.NetworkGroup.Leave, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.NetworkGroup.Leave.displayName = 'proto.rv.analytics.UI.NetworkGroup.Leave';
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
proto.rv.analytics.UI.NetworkGroup.Remove = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.NetworkGroup.Remove, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.NetworkGroup.Remove.displayName = 'proto.rv.analytics.UI.NetworkGroup.Remove';
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
proto.rv.analytics.UI.CCLI = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.CCLI, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.CCLI.displayName = 'proto.rv.analytics.UI.CCLI';
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
proto.rv.analytics.UI.CCLI.Report = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.CCLI.Report.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.CCLI.Report, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.CCLI.Report.displayName = 'proto.rv.analytics.UI.CCLI.Report';
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
proto.rv.analytics.UI.CCLI.Report.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.CCLI.Report.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.CCLI.Report.Shown.displayName = 'proto.rv.analytics.UI.CCLI.Report.Shown';
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
proto.rv.analytics.UI.CCLI.Report.Reset = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.CCLI.Report.Reset, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.CCLI.Report.Reset.displayName = 'proto.rv.analytics.UI.CCLI.Report.Reset';
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
proto.rv.analytics.UI.CCLI.Report.Export = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.CCLI.Report.Export, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.CCLI.Report.Export.displayName = 'proto.rv.analytics.UI.CCLI.Report.Export';
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
proto.rv.analytics.UI.Capture = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.Capture.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.Capture, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.Capture.displayName = 'proto.rv.analytics.UI.Capture';
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
proto.rv.analytics.UI.Capture.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.Capture.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.Capture.Shown.displayName = 'proto.rv.analytics.UI.Capture.Shown';
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
proto.rv.analytics.UI.WelcomeToProPresenter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.WelcomeToProPresenter.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.WelcomeToProPresenter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.WelcomeToProPresenter.displayName = 'proto.rv.analytics.UI.WelcomeToProPresenter';
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
proto.rv.analytics.UI.WelcomeToProPresenter.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.WelcomeToProPresenter.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.WelcomeToProPresenter.Shown.displayName = 'proto.rv.analytics.UI.WelcomeToProPresenter.Shown';
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
proto.rv.analytics.UI.WelcomeToProPresenter.Migration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.WelcomeToProPresenter.Migration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.WelcomeToProPresenter.Migration.displayName = 'proto.rv.analytics.UI.WelcomeToProPresenter.Migration';
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
proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp.displayName = 'proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp';
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
proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent.displayName = 'proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent';
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
proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup.displayName = 'proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup';
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
proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials.displayName = 'proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials';
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
proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase.displayName = 'proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase';
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
proto.rv.analytics.UI.WelcomeToProPresenter.Blog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.WelcomeToProPresenter.Blog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.WelcomeToProPresenter.Blog.displayName = 'proto.rv.analytics.UI.WelcomeToProPresenter.Blog';
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
proto.rv.analytics.UI.WelcomeToProPresenter.Instagram = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.WelcomeToProPresenter.Instagram, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.WelcomeToProPresenter.Instagram.displayName = 'proto.rv.analytics.UI.WelcomeToProPresenter.Instagram';
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
proto.rv.analytics.UI.WelcomeToProPresenter.Facebook = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.WelcomeToProPresenter.Facebook, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.WelcomeToProPresenter.Facebook.displayName = 'proto.rv.analytics.UI.WelcomeToProPresenter.Facebook';
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
proto.rv.analytics.UI.TestPattern = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.TestPattern.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.TestPattern, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.TestPattern.displayName = 'proto.rv.analytics.UI.TestPattern';
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
proto.rv.analytics.UI.TestPattern.Shown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.TestPattern.Shown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.TestPattern.Shown.displayName = 'proto.rv.analytics.UI.TestPattern.Shown';
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
proto.rv.analytics.UI.Preferences = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rv.analytics.UI.Preferences.oneofGroups_);
};
goog.inherits(proto.rv.analytics.UI.Preferences, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.Preferences.displayName = 'proto.rv.analytics.UI.Preferences';
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
proto.rv.analytics.UI.Preferences.CustomLogo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rv.analytics.UI.Preferences.CustomLogo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rv.analytics.UI.Preferences.CustomLogo.displayName = 'proto.rv.analytics.UI.Preferences.CustomLogo';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.analytics.UI.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  QUICK_SEARCH: 1,
  TOOLBAR: 2,
  MAIN_VIEW: 3,
  LOOKS: 4,
  SCREEN_CONFIGURATION: 5,
  LOWER_RIGHT: 6,
  TEXT_INSPECTOR: 7,
  SHOW: 8,
  IN_APP_STORE: 9,
  EDITOR: 10,
  WHATS_NEW: 11,
  CLEAR_GROUPS: 12,
  PREVIEW_AREA: 13,
  PLACEHOLDER: 14,
  PLANNING_CENTER_LIVE: 15,
  NETWORK_GROUP: 16,
  CCLI: 17,
  CAPTURE: 18,
  WELCOMETOPROPRESENTER: 19,
  TEST_PATTERN: 20,
  PREFERENCES: 21
};

/**
 * @return {proto.rv.analytics.UI.ComponentCase}
 */
proto.rv.analytics.UI.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.oneofGroups_[0]));
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
proto.rv.analytics.UI.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.toObject = function(includeInstance, msg) {
  var f, obj = {
quickSearch: (f = msg.getQuickSearch()) && proto.rv.analytics.UI.QuickSearch.toObject(includeInstance, f),
toolbar: (f = msg.getToolbar()) && proto.rv.analytics.UI.Toolbar.toObject(includeInstance, f),
mainView: (f = msg.getMainView()) && proto.rv.analytics.UI.MainView.toObject(includeInstance, f),
looks: (f = msg.getLooks()) && proto.rv.analytics.UI.Looks.toObject(includeInstance, f),
screenConfiguration: (f = msg.getScreenConfiguration()) && proto.rv.analytics.UI.ScreenConfiguration.toObject(includeInstance, f),
lowerRight: (f = msg.getLowerRight()) && proto.rv.analytics.UI.LowerRight.toObject(includeInstance, f),
textInspector: (f = msg.getTextInspector()) && proto.rv.analytics.UI.TextInspector.toObject(includeInstance, f),
show: (f = msg.getShow()) && proto.rv.analytics.UI.Show.toObject(includeInstance, f),
inAppStore: (f = msg.getInAppStore()) && proto.rv.analytics.UI.InAppStore.toObject(includeInstance, f),
editor: (f = msg.getEditor()) && proto.rv.analytics.UI.Editor.toObject(includeInstance, f),
whatsNew: (f = msg.getWhatsNew()) && proto.rv.analytics.UI.WhatsNew.toObject(includeInstance, f),
clearGroups: (f = msg.getClearGroups()) && proto.rv.analytics.UI.ClearGroups.toObject(includeInstance, f),
previewArea: (f = msg.getPreviewArea()) && proto.rv.analytics.UI.PreviewArea.toObject(includeInstance, f),
placeholder: (f = msg.getPlaceholder()) && proto.rv.analytics.UI.Placeholder.toObject(includeInstance, f),
planningCenterLive: (f = msg.getPlanningCenterLive()) && proto.rv.analytics.UI.PlanningCenterLive.toObject(includeInstance, f),
networkGroup: (f = msg.getNetworkGroup()) && proto.rv.analytics.UI.NetworkGroup.toObject(includeInstance, f),
ccli: (f = msg.getCcli()) && proto.rv.analytics.UI.CCLI.toObject(includeInstance, f),
capture: (f = msg.getCapture()) && proto.rv.analytics.UI.Capture.toObject(includeInstance, f),
welcometopropresenter: (f = msg.getWelcometopropresenter()) && proto.rv.analytics.UI.WelcomeToProPresenter.toObject(includeInstance, f),
testPattern: (f = msg.getTestPattern()) && proto.rv.analytics.UI.TestPattern.toObject(includeInstance, f),
preferences: (f = msg.getPreferences()) && proto.rv.analytics.UI.Preferences.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI}
 */
proto.rv.analytics.UI.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI;
  return proto.rv.analytics.UI.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI}
 */
proto.rv.analytics.UI.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.QuickSearch;
      reader.readMessage(value,proto.rv.analytics.UI.QuickSearch.deserializeBinaryFromReader);
      msg.setQuickSearch(value);
      break;
    case 2:
      var value = new proto.rv.analytics.UI.Toolbar;
      reader.readMessage(value,proto.rv.analytics.UI.Toolbar.deserializeBinaryFromReader);
      msg.setToolbar(value);
      break;
    case 3:
      var value = new proto.rv.analytics.UI.MainView;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.deserializeBinaryFromReader);
      msg.setMainView(value);
      break;
    case 4:
      var value = new proto.rv.analytics.UI.Looks;
      reader.readMessage(value,proto.rv.analytics.UI.Looks.deserializeBinaryFromReader);
      msg.setLooks(value);
      break;
    case 5:
      var value = new proto.rv.analytics.UI.ScreenConfiguration;
      reader.readMessage(value,proto.rv.analytics.UI.ScreenConfiguration.deserializeBinaryFromReader);
      msg.setScreenConfiguration(value);
      break;
    case 6:
      var value = new proto.rv.analytics.UI.LowerRight;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.deserializeBinaryFromReader);
      msg.setLowerRight(value);
      break;
    case 7:
      var value = new proto.rv.analytics.UI.TextInspector;
      reader.readMessage(value,proto.rv.analytics.UI.TextInspector.deserializeBinaryFromReader);
      msg.setTextInspector(value);
      break;
    case 8:
      var value = new proto.rv.analytics.UI.Show;
      reader.readMessage(value,proto.rv.analytics.UI.Show.deserializeBinaryFromReader);
      msg.setShow(value);
      break;
    case 9:
      var value = new proto.rv.analytics.UI.InAppStore;
      reader.readMessage(value,proto.rv.analytics.UI.InAppStore.deserializeBinaryFromReader);
      msg.setInAppStore(value);
      break;
    case 10:
      var value = new proto.rv.analytics.UI.Editor;
      reader.readMessage(value,proto.rv.analytics.UI.Editor.deserializeBinaryFromReader);
      msg.setEditor(value);
      break;
    case 11:
      var value = new proto.rv.analytics.UI.WhatsNew;
      reader.readMessage(value,proto.rv.analytics.UI.WhatsNew.deserializeBinaryFromReader);
      msg.setWhatsNew(value);
      break;
    case 12:
      var value = new proto.rv.analytics.UI.ClearGroups;
      reader.readMessage(value,proto.rv.analytics.UI.ClearGroups.deserializeBinaryFromReader);
      msg.setClearGroups(value);
      break;
    case 13:
      var value = new proto.rv.analytics.UI.PreviewArea;
      reader.readMessage(value,proto.rv.analytics.UI.PreviewArea.deserializeBinaryFromReader);
      msg.setPreviewArea(value);
      break;
    case 14:
      var value = new proto.rv.analytics.UI.Placeholder;
      reader.readMessage(value,proto.rv.analytics.UI.Placeholder.deserializeBinaryFromReader);
      msg.setPlaceholder(value);
      break;
    case 15:
      var value = new proto.rv.analytics.UI.PlanningCenterLive;
      reader.readMessage(value,proto.rv.analytics.UI.PlanningCenterLive.deserializeBinaryFromReader);
      msg.setPlanningCenterLive(value);
      break;
    case 16:
      var value = new proto.rv.analytics.UI.NetworkGroup;
      reader.readMessage(value,proto.rv.analytics.UI.NetworkGroup.deserializeBinaryFromReader);
      msg.setNetworkGroup(value);
      break;
    case 17:
      var value = new proto.rv.analytics.UI.CCLI;
      reader.readMessage(value,proto.rv.analytics.UI.CCLI.deserializeBinaryFromReader);
      msg.setCcli(value);
      break;
    case 18:
      var value = new proto.rv.analytics.UI.Capture;
      reader.readMessage(value,proto.rv.analytics.UI.Capture.deserializeBinaryFromReader);
      msg.setCapture(value);
      break;
    case 19:
      var value = new proto.rv.analytics.UI.WelcomeToProPresenter;
      reader.readMessage(value,proto.rv.analytics.UI.WelcomeToProPresenter.deserializeBinaryFromReader);
      msg.setWelcometopropresenter(value);
      break;
    case 20:
      var value = new proto.rv.analytics.UI.TestPattern;
      reader.readMessage(value,proto.rv.analytics.UI.TestPattern.deserializeBinaryFromReader);
      msg.setTestPattern(value);
      break;
    case 21:
      var value = new proto.rv.analytics.UI.Preferences;
      reader.readMessage(value,proto.rv.analytics.UI.Preferences.deserializeBinaryFromReader);
      msg.setPreferences(value);
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
proto.rv.analytics.UI.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuickSearch();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.QuickSearch.serializeBinaryToWriter
    );
  }
  f = message.getToolbar();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.analytics.UI.Toolbar.serializeBinaryToWriter
    );
  }
  f = message.getMainView();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.analytics.UI.MainView.serializeBinaryToWriter
    );
  }
  f = message.getLooks();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.analytics.UI.Looks.serializeBinaryToWriter
    );
  }
  f = message.getScreenConfiguration();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.analytics.UI.ScreenConfiguration.serializeBinaryToWriter
    );
  }
  f = message.getLowerRight();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.rv.analytics.UI.LowerRight.serializeBinaryToWriter
    );
  }
  f = message.getTextInspector();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.rv.analytics.UI.TextInspector.serializeBinaryToWriter
    );
  }
  f = message.getShow();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.rv.analytics.UI.Show.serializeBinaryToWriter
    );
  }
  f = message.getInAppStore();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.rv.analytics.UI.InAppStore.serializeBinaryToWriter
    );
  }
  f = message.getEditor();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.rv.analytics.UI.Editor.serializeBinaryToWriter
    );
  }
  f = message.getWhatsNew();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.rv.analytics.UI.WhatsNew.serializeBinaryToWriter
    );
  }
  f = message.getClearGroups();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.rv.analytics.UI.ClearGroups.serializeBinaryToWriter
    );
  }
  f = message.getPreviewArea();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.rv.analytics.UI.PreviewArea.serializeBinaryToWriter
    );
  }
  f = message.getPlaceholder();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.rv.analytics.UI.Placeholder.serializeBinaryToWriter
    );
  }
  f = message.getPlanningCenterLive();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.rv.analytics.UI.PlanningCenterLive.serializeBinaryToWriter
    );
  }
  f = message.getNetworkGroup();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.rv.analytics.UI.NetworkGroup.serializeBinaryToWriter
    );
  }
  f = message.getCcli();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.rv.analytics.UI.CCLI.serializeBinaryToWriter
    );
  }
  f = message.getCapture();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.rv.analytics.UI.Capture.serializeBinaryToWriter
    );
  }
  f = message.getWelcometopropresenter();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.rv.analytics.UI.WelcomeToProPresenter.serializeBinaryToWriter
    );
  }
  f = message.getTestPattern();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.rv.analytics.UI.TestPattern.serializeBinaryToWriter
    );
  }
  f = message.getPreferences();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.rv.analytics.UI.Preferences.serializeBinaryToWriter
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
proto.rv.analytics.UI.QuickSearch.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.QuickSearch.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1,
  SEARCH: 2,
  OPEN_ITEMS: 3
};

/**
 * @return {proto.rv.analytics.UI.QuickSearch.ComponentCase}
 */
proto.rv.analytics.UI.QuickSearch.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.QuickSearch.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.QuickSearch.oneofGroups_[0]));
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
proto.rv.analytics.UI.QuickSearch.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.QuickSearch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.QuickSearch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.QuickSearch.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.QuickSearch.Shown.toObject(includeInstance, f),
search: (f = msg.getSearch()) && proto.rv.analytics.UI.QuickSearch.Search.toObject(includeInstance, f),
openItems: (f = msg.getOpenItems()) && proto.rv.analytics.UI.QuickSearch.OpenItems.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.QuickSearch}
 */
proto.rv.analytics.UI.QuickSearch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.QuickSearch;
  return proto.rv.analytics.UI.QuickSearch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.QuickSearch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.QuickSearch}
 */
proto.rv.analytics.UI.QuickSearch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.QuickSearch.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.QuickSearch.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
      break;
    case 2:
      var value = new proto.rv.analytics.UI.QuickSearch.Search;
      reader.readMessage(value,proto.rv.analytics.UI.QuickSearch.Search.deserializeBinaryFromReader);
      msg.setSearch(value);
      break;
    case 3:
      var value = new proto.rv.analytics.UI.QuickSearch.OpenItems;
      reader.readMessage(value,proto.rv.analytics.UI.QuickSearch.OpenItems.deserializeBinaryFromReader);
      msg.setOpenItems(value);
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
proto.rv.analytics.UI.QuickSearch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.QuickSearch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.QuickSearch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.QuickSearch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.QuickSearch.Shown.serializeBinaryToWriter
    );
  }
  f = message.getSearch();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.analytics.UI.QuickSearch.Search.serializeBinaryToWriter
    );
  }
  f = message.getOpenItems();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.analytics.UI.QuickSearch.OpenItems.serializeBinaryToWriter
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
proto.rv.analytics.UI.QuickSearch.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.QuickSearch.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.QuickSearch.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.QuickSearch.Shown.toObject = function(includeInstance, msg) {
  var f, obj = {
source: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.QuickSearch.Shown}
 */
proto.rv.analytics.UI.QuickSearch.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.QuickSearch.Shown;
  return proto.rv.analytics.UI.QuickSearch.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.QuickSearch.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.QuickSearch.Shown}
 */
proto.rv.analytics.UI.QuickSearch.Shown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.QuickSearch.Shown.Source} */ (reader.readEnum());
      msg.setSource(value);
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
proto.rv.analytics.UI.QuickSearch.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.QuickSearch.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.QuickSearch.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.QuickSearch.Shown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
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
proto.rv.analytics.UI.QuickSearch.Shown.Source = {
  SOURCE_UNKNOWN: 0,
  SOURCE_APPLICATION_MENU: 1,
  SOURCE_TOOLBAR: 2,
  SOURCE_UNLINKED_HEADER: 3
};

/**
 * optional Source source = 1;
 * @return {!proto.rv.analytics.UI.QuickSearch.Shown.Source}
 */
proto.rv.analytics.UI.QuickSearch.Shown.prototype.getSource = function() {
  return /** @type {!proto.rv.analytics.UI.QuickSearch.Shown.Source} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.QuickSearch.Shown.Source} value
 * @return {!proto.rv.analytics.UI.QuickSearch.Shown} returns this
 */
proto.rv.analytics.UI.QuickSearch.Shown.prototype.setSource = function(value) {
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
proto.rv.analytics.UI.QuickSearch.Search.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.QuickSearch.Search.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.QuickSearch.Search} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.QuickSearch.Search.toObject = function(includeInstance, msg) {
  var f, obj = {
source: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.QuickSearch.Search}
 */
proto.rv.analytics.UI.QuickSearch.Search.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.QuickSearch.Search;
  return proto.rv.analytics.UI.QuickSearch.Search.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.QuickSearch.Search} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.QuickSearch.Search}
 */
proto.rv.analytics.UI.QuickSearch.Search.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.QuickSearch.Search.Source} */ (reader.readEnum());
      msg.setSource(value);
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
proto.rv.analytics.UI.QuickSearch.Search.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.QuickSearch.Search.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.QuickSearch.Search} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.QuickSearch.Search.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
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
proto.rv.analytics.UI.QuickSearch.Search.Source = {
  SOURCE_UNKNOWN: 0,
  SOURCE_LIBRARY: 1,
  SOURCE_SONG_SELECT: 2,
  SOURCE_MULTI_TRACKS: 3
};

/**
 * optional Source source = 1;
 * @return {!proto.rv.analytics.UI.QuickSearch.Search.Source}
 */
proto.rv.analytics.UI.QuickSearch.Search.prototype.getSource = function() {
  return /** @type {!proto.rv.analytics.UI.QuickSearch.Search.Source} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.QuickSearch.Search.Source} value
 * @return {!proto.rv.analytics.UI.QuickSearch.Search} returns this
 */
proto.rv.analytics.UI.QuickSearch.Search.prototype.setSource = function(value) {
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
proto.rv.analytics.UI.QuickSearch.OpenItems.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.QuickSearch.OpenItems.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.QuickSearch.OpenItems} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.QuickSearch.OpenItems.toObject = function(includeInstance, msg) {
  var f, obj = {
source: jspb.Message.getFieldWithDefault(msg, 1, 0),
style: jspb.Message.getFieldWithDefault(msg, 2, 0),
count: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.rv.analytics.UI.QuickSearch.OpenItems}
 */
proto.rv.analytics.UI.QuickSearch.OpenItems.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.QuickSearch.OpenItems;
  return proto.rv.analytics.UI.QuickSearch.OpenItems.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.QuickSearch.OpenItems} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.QuickSearch.OpenItems}
 */
proto.rv.analytics.UI.QuickSearch.OpenItems.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.QuickSearch.OpenItems.Source} */ (reader.readEnum());
      msg.setSource(value);
      break;
    case 2:
      var value = /** @type {!proto.rv.analytics.UI.QuickSearch.OpenItems.Style} */ (reader.readEnum());
      msg.setStyle(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
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
proto.rv.analytics.UI.QuickSearch.OpenItems.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.QuickSearch.OpenItems.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.QuickSearch.OpenItems} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.QuickSearch.OpenItems.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getStyle();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.analytics.UI.QuickSearch.OpenItems.Source = {
  SOURCE_UNKNOWN: 0,
  SOURCE_LIBRARY: 1,
  SOURCE_SONG_SELECT: 2,
  SOURCE_MULTI_TRACKS: 3
};

/**
 * @enum {number}
 */
proto.rv.analytics.UI.QuickSearch.OpenItems.Style = {
  STYLE_UNKNOWN: 0,
  STYLE_RETURN_KEY: 1,
  STYLE_COMMAND_RETURN_KEY: 2,
  STYLE_DRAG_DROP: 3
};

/**
 * optional Source source = 1;
 * @return {!proto.rv.analytics.UI.QuickSearch.OpenItems.Source}
 */
proto.rv.analytics.UI.QuickSearch.OpenItems.prototype.getSource = function() {
  return /** @type {!proto.rv.analytics.UI.QuickSearch.OpenItems.Source} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.QuickSearch.OpenItems.Source} value
 * @return {!proto.rv.analytics.UI.QuickSearch.OpenItems} returns this
 */
proto.rv.analytics.UI.QuickSearch.OpenItems.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Style style = 2;
 * @return {!proto.rv.analytics.UI.QuickSearch.OpenItems.Style}
 */
proto.rv.analytics.UI.QuickSearch.OpenItems.prototype.getStyle = function() {
  return /** @type {!proto.rv.analytics.UI.QuickSearch.OpenItems.Style} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.analytics.UI.QuickSearch.OpenItems.Style} value
 * @return {!proto.rv.analytics.UI.QuickSearch.OpenItems} returns this
 */
proto.rv.analytics.UI.QuickSearch.OpenItems.prototype.setStyle = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int32 count = 3;
 * @return {number}
 */
proto.rv.analytics.UI.QuickSearch.OpenItems.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.analytics.UI.QuickSearch.OpenItems} returns this
 */
proto.rv.analytics.UI.QuickSearch.OpenItems.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.QuickSearch.Shown}
 */
proto.rv.analytics.UI.QuickSearch.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.QuickSearch.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.QuickSearch.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.QuickSearch.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.QuickSearch} returns this
*/
proto.rv.analytics.UI.QuickSearch.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.QuickSearch.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.QuickSearch} returns this
 */
proto.rv.analytics.UI.QuickSearch.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.QuickSearch.prototype.hasShown = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Search search = 2;
 * @return {?proto.rv.analytics.UI.QuickSearch.Search}
 */
proto.rv.analytics.UI.QuickSearch.prototype.getSearch = function() {
  return /** @type{?proto.rv.analytics.UI.QuickSearch.Search} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.QuickSearch.Search, 2));
};


/**
 * @param {?proto.rv.analytics.UI.QuickSearch.Search|undefined} value
 * @return {!proto.rv.analytics.UI.QuickSearch} returns this
*/
proto.rv.analytics.UI.QuickSearch.prototype.setSearch = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.analytics.UI.QuickSearch.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.QuickSearch} returns this
 */
proto.rv.analytics.UI.QuickSearch.prototype.clearSearch = function() {
  return this.setSearch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.QuickSearch.prototype.hasSearch = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional OpenItems open_items = 3;
 * @return {?proto.rv.analytics.UI.QuickSearch.OpenItems}
 */
proto.rv.analytics.UI.QuickSearch.prototype.getOpenItems = function() {
  return /** @type{?proto.rv.analytics.UI.QuickSearch.OpenItems} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.QuickSearch.OpenItems, 3));
};


/**
 * @param {?proto.rv.analytics.UI.QuickSearch.OpenItems|undefined} value
 * @return {!proto.rv.analytics.UI.QuickSearch} returns this
*/
proto.rv.analytics.UI.QuickSearch.prototype.setOpenItems = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.analytics.UI.QuickSearch.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.QuickSearch} returns this
 */
proto.rv.analytics.UI.QuickSearch.prototype.clearOpenItems = function() {
  return this.setOpenItems(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.QuickSearch.prototype.hasOpenItems = function() {
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
proto.rv.analytics.UI.Toolbar.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.Toolbar.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  TEXT_STYLE: 1,
  THEME: 2
};

/**
 * @return {proto.rv.analytics.UI.Toolbar.ComponentCase}
 */
proto.rv.analytics.UI.Toolbar.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.Toolbar.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.Toolbar.oneofGroups_[0]));
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
proto.rv.analytics.UI.Toolbar.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.Toolbar.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.Toolbar} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Toolbar.toObject = function(includeInstance, msg) {
  var f, obj = {
textStyle: (f = msg.getTextStyle()) && proto.rv.analytics.UI.Toolbar.TextStyle.toObject(includeInstance, f),
theme: (f = msg.getTheme()) && proto.rv.analytics.UI.Toolbar.Theme.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.Toolbar}
 */
proto.rv.analytics.UI.Toolbar.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.Toolbar;
  return proto.rv.analytics.UI.Toolbar.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.Toolbar} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.Toolbar}
 */
proto.rv.analytics.UI.Toolbar.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.Toolbar.TextStyle;
      reader.readMessage(value,proto.rv.analytics.UI.Toolbar.TextStyle.deserializeBinaryFromReader);
      msg.setTextStyle(value);
      break;
    case 2:
      var value = new proto.rv.analytics.UI.Toolbar.Theme;
      reader.readMessage(value,proto.rv.analytics.UI.Toolbar.Theme.deserializeBinaryFromReader);
      msg.setTheme(value);
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
proto.rv.analytics.UI.Toolbar.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.Toolbar.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.Toolbar} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Toolbar.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTextStyle();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.Toolbar.TextStyle.serializeBinaryToWriter
    );
  }
  f = message.getTheme();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.analytics.UI.Toolbar.Theme.serializeBinaryToWriter
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
proto.rv.analytics.UI.Toolbar.TextStyle.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.Toolbar.TextStyle.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1,
  CHANGE: 2
};

/**
 * @return {proto.rv.analytics.UI.Toolbar.TextStyle.ComponentCase}
 */
proto.rv.analytics.UI.Toolbar.TextStyle.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.Toolbar.TextStyle.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.Toolbar.TextStyle.oneofGroups_[0]));
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
proto.rv.analytics.UI.Toolbar.TextStyle.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.Toolbar.TextStyle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.Toolbar.TextStyle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Toolbar.TextStyle.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.Toolbar.TextStyle.Shown.toObject(includeInstance, f),
change: (f = msg.getChange()) && proto.rv.analytics.UI.Toolbar.TextStyle.Change.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.Toolbar.TextStyle}
 */
proto.rv.analytics.UI.Toolbar.TextStyle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.Toolbar.TextStyle;
  return proto.rv.analytics.UI.Toolbar.TextStyle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.Toolbar.TextStyle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.Toolbar.TextStyle}
 */
proto.rv.analytics.UI.Toolbar.TextStyle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.Toolbar.TextStyle.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.Toolbar.TextStyle.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
      break;
    case 2:
      var value = new proto.rv.analytics.UI.Toolbar.TextStyle.Change;
      reader.readMessage(value,proto.rv.analytics.UI.Toolbar.TextStyle.Change.deserializeBinaryFromReader);
      msg.setChange(value);
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
proto.rv.analytics.UI.Toolbar.TextStyle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.Toolbar.TextStyle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.Toolbar.TextStyle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Toolbar.TextStyle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.Toolbar.TextStyle.Shown.serializeBinaryToWriter
    );
  }
  f = message.getChange();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.analytics.UI.Toolbar.TextStyle.Change.serializeBinaryToWriter
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
proto.rv.analytics.UI.Toolbar.TextStyle.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.Toolbar.TextStyle.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.Toolbar.TextStyle.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Toolbar.TextStyle.Shown.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.Toolbar.TextStyle.Shown}
 */
proto.rv.analytics.UI.Toolbar.TextStyle.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.Toolbar.TextStyle.Shown;
  return proto.rv.analytics.UI.Toolbar.TextStyle.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.Toolbar.TextStyle.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.Toolbar.TextStyle.Shown}
 */
proto.rv.analytics.UI.Toolbar.TextStyle.Shown.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.Toolbar.TextStyle.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.Toolbar.TextStyle.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.Toolbar.TextStyle.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Toolbar.TextStyle.Shown.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.Toolbar.TextStyle.Change.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.Toolbar.TextStyle.Change.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.Toolbar.TextStyle.Change} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Toolbar.TextStyle.Change.toObject = function(includeInstance, msg) {
  var f, obj = {
property: jspb.Message.getFieldWithDefault(msg, 1, 0),
target: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.rv.analytics.UI.Toolbar.TextStyle.Change}
 */
proto.rv.analytics.UI.Toolbar.TextStyle.Change.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.Toolbar.TextStyle.Change;
  return proto.rv.analytics.UI.Toolbar.TextStyle.Change.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.Toolbar.TextStyle.Change} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.Toolbar.TextStyle.Change}
 */
proto.rv.analytics.UI.Toolbar.TextStyle.Change.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.Toolbar.TextStyle.Change.Property} */ (reader.readEnum());
      msg.setProperty(value);
      break;
    case 2:
      var value = /** @type {!proto.rv.analytics.UI.Toolbar.TextStyle.Change.Target} */ (reader.readEnum());
      msg.setTarget(value);
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
proto.rv.analytics.UI.Toolbar.TextStyle.Change.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.Toolbar.TextStyle.Change.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.Toolbar.TextStyle.Change} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Toolbar.TextStyle.Change.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProperty();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTarget();
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
proto.rv.analytics.UI.Toolbar.TextStyle.Change.Property = {
  PROPERTY_UNKNOWN: 0,
  PROPERTY_FONT_TYPEFACE: 1,
  PROPERTY_FONT_WEIGHT: 2,
  PROPERTY_FONT_CAPITALIZATION: 3,
  PROPERTY_FONT_SIZE: 4,
  PROPERTY_FONT_COLOR: 5,
  PROPERTY_HORIZONTAL_ALIGNMENT: 6,
  PROPERTY_VERTICAL_ALIGNMENT: 7,
  PROPERTY_STROKE_ENABLE: 8,
  PROPERTY_STROKE_WIDTH: 9,
  PROPERTY_STROKE_COLOR: 10,
  PROPERTY_SHADOW_ENABLE: 11,
  PROPERTY_SHADOW_BLUR: 12,
  PROPERTY_SHADOW_OPACITY: 13,
  PROPERTY_SHADOW_COLOR: 14,
  PROPERTY_SHADOW_ANGLE: 15,
  PROPERTY_SHADOW_OFFSET: 16
};

/**
 * @enum {number}
 */
proto.rv.analytics.UI.Toolbar.TextStyle.Change.Target = {
  TARGET_UNKNOWN: 0,
  TARGET_SLIDE_SELECTION: 1,
  TARGET_PRESENTATION_SELECTION: 2
};

/**
 * optional Property property = 1;
 * @return {!proto.rv.analytics.UI.Toolbar.TextStyle.Change.Property}
 */
proto.rv.analytics.UI.Toolbar.TextStyle.Change.prototype.getProperty = function() {
  return /** @type {!proto.rv.analytics.UI.Toolbar.TextStyle.Change.Property} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.Toolbar.TextStyle.Change.Property} value
 * @return {!proto.rv.analytics.UI.Toolbar.TextStyle.Change} returns this
 */
proto.rv.analytics.UI.Toolbar.TextStyle.Change.prototype.setProperty = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Target target = 2;
 * @return {!proto.rv.analytics.UI.Toolbar.TextStyle.Change.Target}
 */
proto.rv.analytics.UI.Toolbar.TextStyle.Change.prototype.getTarget = function() {
  return /** @type {!proto.rv.analytics.UI.Toolbar.TextStyle.Change.Target} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.analytics.UI.Toolbar.TextStyle.Change.Target} value
 * @return {!proto.rv.analytics.UI.Toolbar.TextStyle.Change} returns this
 */
proto.rv.analytics.UI.Toolbar.TextStyle.Change.prototype.setTarget = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.Toolbar.TextStyle.Shown}
 */
proto.rv.analytics.UI.Toolbar.TextStyle.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.Toolbar.TextStyle.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.Toolbar.TextStyle.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.Toolbar.TextStyle.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.Toolbar.TextStyle} returns this
*/
proto.rv.analytics.UI.Toolbar.TextStyle.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.Toolbar.TextStyle.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.Toolbar.TextStyle} returns this
 */
proto.rv.analytics.UI.Toolbar.TextStyle.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.Toolbar.TextStyle.prototype.hasShown = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Change change = 2;
 * @return {?proto.rv.analytics.UI.Toolbar.TextStyle.Change}
 */
proto.rv.analytics.UI.Toolbar.TextStyle.prototype.getChange = function() {
  return /** @type{?proto.rv.analytics.UI.Toolbar.TextStyle.Change} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.Toolbar.TextStyle.Change, 2));
};


/**
 * @param {?proto.rv.analytics.UI.Toolbar.TextStyle.Change|undefined} value
 * @return {!proto.rv.analytics.UI.Toolbar.TextStyle} returns this
*/
proto.rv.analytics.UI.Toolbar.TextStyle.prototype.setChange = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.analytics.UI.Toolbar.TextStyle.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.Toolbar.TextStyle} returns this
 */
proto.rv.analytics.UI.Toolbar.TextStyle.prototype.clearChange = function() {
  return this.setChange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.Toolbar.TextStyle.prototype.hasChange = function() {
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
proto.rv.analytics.UI.Toolbar.Theme.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.Toolbar.Theme.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1,
  APPLIED: 2
};

/**
 * @return {proto.rv.analytics.UI.Toolbar.Theme.ComponentCase}
 */
proto.rv.analytics.UI.Toolbar.Theme.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.Toolbar.Theme.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.Toolbar.Theme.oneofGroups_[0]));
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
proto.rv.analytics.UI.Toolbar.Theme.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.Toolbar.Theme.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.Toolbar.Theme} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Toolbar.Theme.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.Toolbar.Theme.Shown.toObject(includeInstance, f),
applied: (f = msg.getApplied()) && proto.rv.analytics.UI.Toolbar.Theme.Applied.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.Toolbar.Theme}
 */
proto.rv.analytics.UI.Toolbar.Theme.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.Toolbar.Theme;
  return proto.rv.analytics.UI.Toolbar.Theme.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.Toolbar.Theme} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.Toolbar.Theme}
 */
proto.rv.analytics.UI.Toolbar.Theme.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.Toolbar.Theme.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.Toolbar.Theme.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
      break;
    case 2:
      var value = new proto.rv.analytics.UI.Toolbar.Theme.Applied;
      reader.readMessage(value,proto.rv.analytics.UI.Toolbar.Theme.Applied.deserializeBinaryFromReader);
      msg.setApplied(value);
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
proto.rv.analytics.UI.Toolbar.Theme.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.Toolbar.Theme.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.Toolbar.Theme} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Toolbar.Theme.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.Toolbar.Theme.Shown.serializeBinaryToWriter
    );
  }
  f = message.getApplied();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.analytics.UI.Toolbar.Theme.Applied.serializeBinaryToWriter
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
proto.rv.analytics.UI.Toolbar.Theme.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.Toolbar.Theme.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.Toolbar.Theme.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Toolbar.Theme.Shown.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.Toolbar.Theme.Shown}
 */
proto.rv.analytics.UI.Toolbar.Theme.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.Toolbar.Theme.Shown;
  return proto.rv.analytics.UI.Toolbar.Theme.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.Toolbar.Theme.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.Toolbar.Theme.Shown}
 */
proto.rv.analytics.UI.Toolbar.Theme.Shown.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.Toolbar.Theme.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.Toolbar.Theme.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.Toolbar.Theme.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Toolbar.Theme.Shown.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.Toolbar.Theme.Applied.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.Toolbar.Theme.Applied.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.Toolbar.Theme.Applied} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Toolbar.Theme.Applied.toObject = function(includeInstance, msg) {
  var f, obj = {
target: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.Toolbar.Theme.Applied}
 */
proto.rv.analytics.UI.Toolbar.Theme.Applied.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.Toolbar.Theme.Applied;
  return proto.rv.analytics.UI.Toolbar.Theme.Applied.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.Toolbar.Theme.Applied} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.Toolbar.Theme.Applied}
 */
proto.rv.analytics.UI.Toolbar.Theme.Applied.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.Toolbar.Theme.Applied.Target} */ (reader.readEnum());
      msg.setTarget(value);
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
proto.rv.analytics.UI.Toolbar.Theme.Applied.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.Toolbar.Theme.Applied.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.Toolbar.Theme.Applied} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Toolbar.Theme.Applied.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTarget();
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
proto.rv.analytics.UI.Toolbar.Theme.Applied.Target = {
  TARGET_UNKNOWN: 0,
  TARGET_SLIDE_SELECTION: 1,
  TARGET_PRESENTATION_SELECTION: 2
};

/**
 * optional Target target = 1;
 * @return {!proto.rv.analytics.UI.Toolbar.Theme.Applied.Target}
 */
proto.rv.analytics.UI.Toolbar.Theme.Applied.prototype.getTarget = function() {
  return /** @type {!proto.rv.analytics.UI.Toolbar.Theme.Applied.Target} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.Toolbar.Theme.Applied.Target} value
 * @return {!proto.rv.analytics.UI.Toolbar.Theme.Applied} returns this
 */
proto.rv.analytics.UI.Toolbar.Theme.Applied.prototype.setTarget = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.Toolbar.Theme.Shown}
 */
proto.rv.analytics.UI.Toolbar.Theme.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.Toolbar.Theme.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.Toolbar.Theme.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.Toolbar.Theme.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.Toolbar.Theme} returns this
*/
proto.rv.analytics.UI.Toolbar.Theme.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.Toolbar.Theme.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.Toolbar.Theme} returns this
 */
proto.rv.analytics.UI.Toolbar.Theme.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.Toolbar.Theme.prototype.hasShown = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Applied applied = 2;
 * @return {?proto.rv.analytics.UI.Toolbar.Theme.Applied}
 */
proto.rv.analytics.UI.Toolbar.Theme.prototype.getApplied = function() {
  return /** @type{?proto.rv.analytics.UI.Toolbar.Theme.Applied} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.Toolbar.Theme.Applied, 2));
};


/**
 * @param {?proto.rv.analytics.UI.Toolbar.Theme.Applied|undefined} value
 * @return {!proto.rv.analytics.UI.Toolbar.Theme} returns this
*/
proto.rv.analytics.UI.Toolbar.Theme.prototype.setApplied = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.analytics.UI.Toolbar.Theme.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.Toolbar.Theme} returns this
 */
proto.rv.analytics.UI.Toolbar.Theme.prototype.clearApplied = function() {
  return this.setApplied(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.Toolbar.Theme.prototype.hasApplied = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TextStyle text_style = 1;
 * @return {?proto.rv.analytics.UI.Toolbar.TextStyle}
 */
proto.rv.analytics.UI.Toolbar.prototype.getTextStyle = function() {
  return /** @type{?proto.rv.analytics.UI.Toolbar.TextStyle} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.Toolbar.TextStyle, 1));
};


/**
 * @param {?proto.rv.analytics.UI.Toolbar.TextStyle|undefined} value
 * @return {!proto.rv.analytics.UI.Toolbar} returns this
*/
proto.rv.analytics.UI.Toolbar.prototype.setTextStyle = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.Toolbar.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.Toolbar} returns this
 */
proto.rv.analytics.UI.Toolbar.prototype.clearTextStyle = function() {
  return this.setTextStyle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.Toolbar.prototype.hasTextStyle = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Theme theme = 2;
 * @return {?proto.rv.analytics.UI.Toolbar.Theme}
 */
proto.rv.analytics.UI.Toolbar.prototype.getTheme = function() {
  return /** @type{?proto.rv.analytics.UI.Toolbar.Theme} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.Toolbar.Theme, 2));
};


/**
 * @param {?proto.rv.analytics.UI.Toolbar.Theme|undefined} value
 * @return {!proto.rv.analytics.UI.Toolbar} returns this
*/
proto.rv.analytics.UI.Toolbar.prototype.setTheme = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.analytics.UI.Toolbar.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.Toolbar} returns this
 */
proto.rv.analytics.UI.Toolbar.prototype.clearTheme = function() {
  return this.setTheme(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.Toolbar.prototype.hasTheme = function() {
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
proto.rv.analytics.UI.MainView.oneofGroups_ = [[1,2,3,4,5,6,7,8,9]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.MainView.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOW: 1,
  PRESENTATION_EDITOR: 2,
  REFLOW_EDITOR: 3,
  BIBLE: 4,
  STAGE_EDITOR: 5,
  THEME_EDITOR: 6,
  COPYRIGHT_EDITOR: 7,
  PROPS_EDITOR: 8,
  MASK_EDITOR: 9
};

/**
 * @return {proto.rv.analytics.UI.MainView.ComponentCase}
 */
proto.rv.analytics.UI.MainView.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.MainView.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.MainView.oneofGroups_[0]));
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
proto.rv.analytics.UI.MainView.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.toObject = function(includeInstance, msg) {
  var f, obj = {
show: (f = msg.getShow()) && proto.rv.analytics.UI.MainView.Show.toObject(includeInstance, f),
presentationEditor: (f = msg.getPresentationEditor()) && proto.rv.analytics.UI.MainView.PresentationEditor.toObject(includeInstance, f),
reflowEditor: (f = msg.getReflowEditor()) && proto.rv.analytics.UI.MainView.ReflowEditor.toObject(includeInstance, f),
bible: (f = msg.getBible()) && proto.rv.analytics.UI.MainView.Bible.toObject(includeInstance, f),
stageEditor: (f = msg.getStageEditor()) && proto.rv.analytics.UI.MainView.StageEditor.toObject(includeInstance, f),
themeEditor: (f = msg.getThemeEditor()) && proto.rv.analytics.UI.MainView.ThemeEditor.toObject(includeInstance, f),
copyrightEditor: (f = msg.getCopyrightEditor()) && proto.rv.analytics.UI.MainView.CopyrightEditor.toObject(includeInstance, f),
propsEditor: (f = msg.getPropsEditor()) && proto.rv.analytics.UI.MainView.PropsEditor.toObject(includeInstance, f),
maskEditor: (f = msg.getMaskEditor()) && proto.rv.analytics.UI.MainView.MaskEditor.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.MainView}
 */
proto.rv.analytics.UI.MainView.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView;
  return proto.rv.analytics.UI.MainView.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView}
 */
proto.rv.analytics.UI.MainView.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.MainView.Show;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.Show.deserializeBinaryFromReader);
      msg.setShow(value);
      break;
    case 2:
      var value = new proto.rv.analytics.UI.MainView.PresentationEditor;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.PresentationEditor.deserializeBinaryFromReader);
      msg.setPresentationEditor(value);
      break;
    case 3:
      var value = new proto.rv.analytics.UI.MainView.ReflowEditor;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.ReflowEditor.deserializeBinaryFromReader);
      msg.setReflowEditor(value);
      break;
    case 4:
      var value = new proto.rv.analytics.UI.MainView.Bible;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.Bible.deserializeBinaryFromReader);
      msg.setBible(value);
      break;
    case 5:
      var value = new proto.rv.analytics.UI.MainView.StageEditor;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.StageEditor.deserializeBinaryFromReader);
      msg.setStageEditor(value);
      break;
    case 6:
      var value = new proto.rv.analytics.UI.MainView.ThemeEditor;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.ThemeEditor.deserializeBinaryFromReader);
      msg.setThemeEditor(value);
      break;
    case 7:
      var value = new proto.rv.analytics.UI.MainView.CopyrightEditor;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.CopyrightEditor.deserializeBinaryFromReader);
      msg.setCopyrightEditor(value);
      break;
    case 8:
      var value = new proto.rv.analytics.UI.MainView.PropsEditor;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.PropsEditor.deserializeBinaryFromReader);
      msg.setPropsEditor(value);
      break;
    case 9:
      var value = new proto.rv.analytics.UI.MainView.MaskEditor;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.MaskEditor.deserializeBinaryFromReader);
      msg.setMaskEditor(value);
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
proto.rv.analytics.UI.MainView.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShow();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.MainView.Show.serializeBinaryToWriter
    );
  }
  f = message.getPresentationEditor();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.analytics.UI.MainView.PresentationEditor.serializeBinaryToWriter
    );
  }
  f = message.getReflowEditor();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.analytics.UI.MainView.ReflowEditor.serializeBinaryToWriter
    );
  }
  f = message.getBible();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.analytics.UI.MainView.Bible.serializeBinaryToWriter
    );
  }
  f = message.getStageEditor();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.analytics.UI.MainView.StageEditor.serializeBinaryToWriter
    );
  }
  f = message.getThemeEditor();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.rv.analytics.UI.MainView.ThemeEditor.serializeBinaryToWriter
    );
  }
  f = message.getCopyrightEditor();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.rv.analytics.UI.MainView.CopyrightEditor.serializeBinaryToWriter
    );
  }
  f = message.getPropsEditor();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.rv.analytics.UI.MainView.PropsEditor.serializeBinaryToWriter
    );
  }
  f = message.getMaskEditor();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.rv.analytics.UI.MainView.MaskEditor.serializeBinaryToWriter
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
proto.rv.analytics.UI.MainView.Show.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.MainView.Show.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1
};

/**
 * @return {proto.rv.analytics.UI.MainView.Show.ComponentCase}
 */
proto.rv.analytics.UI.MainView.Show.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.MainView.Show.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.MainView.Show.oneofGroups_[0]));
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
proto.rv.analytics.UI.MainView.Show.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.Show.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView.Show} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.Show.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.MainView.Show.Shown.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.MainView.Show}
 */
proto.rv.analytics.UI.MainView.Show.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView.Show;
  return proto.rv.analytics.UI.MainView.Show.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView.Show} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView.Show}
 */
proto.rv.analytics.UI.MainView.Show.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.MainView.Show.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.Show.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
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
proto.rv.analytics.UI.MainView.Show.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.Show.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView.Show} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.Show.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.MainView.Show.Shown.serializeBinaryToWriter
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
proto.rv.analytics.UI.MainView.Show.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.Show.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView.Show.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.Show.Shown.toObject = function(includeInstance, msg) {
  var f, obj = {
source: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.MainView.Show.Shown}
 */
proto.rv.analytics.UI.MainView.Show.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView.Show.Shown;
  return proto.rv.analytics.UI.MainView.Show.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView.Show.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView.Show.Shown}
 */
proto.rv.analytics.UI.MainView.Show.Shown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.MainView.Show.Shown.Source} */ (reader.readEnum());
      msg.setSource(value);
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
proto.rv.analytics.UI.MainView.Show.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.Show.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView.Show.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.Show.Shown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
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
proto.rv.analytics.UI.MainView.Show.Shown.Source = {
  SOURCE_UNKNOWN: 0,
  SOURCE_TOOLBAR: 1,
  SOURCE_APPLICATION_MENU: 2
};

/**
 * optional Source source = 1;
 * @return {!proto.rv.analytics.UI.MainView.Show.Shown.Source}
 */
proto.rv.analytics.UI.MainView.Show.Shown.prototype.getSource = function() {
  return /** @type {!proto.rv.analytics.UI.MainView.Show.Shown.Source} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.MainView.Show.Shown.Source} value
 * @return {!proto.rv.analytics.UI.MainView.Show.Shown} returns this
 */
proto.rv.analytics.UI.MainView.Show.Shown.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.MainView.Show.Shown}
 */
proto.rv.analytics.UI.MainView.Show.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.Show.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.Show.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.Show.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.MainView.Show} returns this
*/
proto.rv.analytics.UI.MainView.Show.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.MainView.Show.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView.Show} returns this
 */
proto.rv.analytics.UI.MainView.Show.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.Show.prototype.hasShown = function() {
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
proto.rv.analytics.UI.MainView.PresentationEditor.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.MainView.PresentationEditor.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1
};

/**
 * @return {proto.rv.analytics.UI.MainView.PresentationEditor.ComponentCase}
 */
proto.rv.analytics.UI.MainView.PresentationEditor.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.MainView.PresentationEditor.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.MainView.PresentationEditor.oneofGroups_[0]));
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
proto.rv.analytics.UI.MainView.PresentationEditor.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.PresentationEditor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView.PresentationEditor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.PresentationEditor.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.MainView.PresentationEditor.Shown.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.MainView.PresentationEditor}
 */
proto.rv.analytics.UI.MainView.PresentationEditor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView.PresentationEditor;
  return proto.rv.analytics.UI.MainView.PresentationEditor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView.PresentationEditor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView.PresentationEditor}
 */
proto.rv.analytics.UI.MainView.PresentationEditor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.MainView.PresentationEditor.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.PresentationEditor.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
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
proto.rv.analytics.UI.MainView.PresentationEditor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.PresentationEditor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView.PresentationEditor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.PresentationEditor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.MainView.PresentationEditor.Shown.serializeBinaryToWriter
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
proto.rv.analytics.UI.MainView.PresentationEditor.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.PresentationEditor.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView.PresentationEditor.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.PresentationEditor.Shown.toObject = function(includeInstance, msg) {
  var f, obj = {
source: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.MainView.PresentationEditor.Shown}
 */
proto.rv.analytics.UI.MainView.PresentationEditor.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView.PresentationEditor.Shown;
  return proto.rv.analytics.UI.MainView.PresentationEditor.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView.PresentationEditor.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView.PresentationEditor.Shown}
 */
proto.rv.analytics.UI.MainView.PresentationEditor.Shown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.MainView.PresentationEditor.Shown.Source} */ (reader.readEnum());
      msg.setSource(value);
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
proto.rv.analytics.UI.MainView.PresentationEditor.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.PresentationEditor.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView.PresentationEditor.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.PresentationEditor.Shown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
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
proto.rv.analytics.UI.MainView.PresentationEditor.Shown.Source = {
  SOURCE_UNKNOWN: 0,
  SOURCE_TOOLBAR: 1,
  SOURCE_APPLICATION_MENU: 2,
  SOURCE_CONTEXT_MENU: 3
};

/**
 * optional Source source = 1;
 * @return {!proto.rv.analytics.UI.MainView.PresentationEditor.Shown.Source}
 */
proto.rv.analytics.UI.MainView.PresentationEditor.Shown.prototype.getSource = function() {
  return /** @type {!proto.rv.analytics.UI.MainView.PresentationEditor.Shown.Source} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.MainView.PresentationEditor.Shown.Source} value
 * @return {!proto.rv.analytics.UI.MainView.PresentationEditor.Shown} returns this
 */
proto.rv.analytics.UI.MainView.PresentationEditor.Shown.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.MainView.PresentationEditor.Shown}
 */
proto.rv.analytics.UI.MainView.PresentationEditor.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.PresentationEditor.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.PresentationEditor.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.PresentationEditor.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.MainView.PresentationEditor} returns this
*/
proto.rv.analytics.UI.MainView.PresentationEditor.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.MainView.PresentationEditor.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView.PresentationEditor} returns this
 */
proto.rv.analytics.UI.MainView.PresentationEditor.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.PresentationEditor.prototype.hasShown = function() {
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
proto.rv.analytics.UI.MainView.ReflowEditor.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.MainView.ReflowEditor.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1
};

/**
 * @return {proto.rv.analytics.UI.MainView.ReflowEditor.ComponentCase}
 */
proto.rv.analytics.UI.MainView.ReflowEditor.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.MainView.ReflowEditor.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.MainView.ReflowEditor.oneofGroups_[0]));
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
proto.rv.analytics.UI.MainView.ReflowEditor.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.ReflowEditor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView.ReflowEditor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.ReflowEditor.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.MainView.ReflowEditor.Shown.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.MainView.ReflowEditor}
 */
proto.rv.analytics.UI.MainView.ReflowEditor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView.ReflowEditor;
  return proto.rv.analytics.UI.MainView.ReflowEditor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView.ReflowEditor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView.ReflowEditor}
 */
proto.rv.analytics.UI.MainView.ReflowEditor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.MainView.ReflowEditor.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.ReflowEditor.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
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
proto.rv.analytics.UI.MainView.ReflowEditor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.ReflowEditor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView.ReflowEditor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.ReflowEditor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.MainView.ReflowEditor.Shown.serializeBinaryToWriter
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
proto.rv.analytics.UI.MainView.ReflowEditor.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.ReflowEditor.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView.ReflowEditor.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.ReflowEditor.Shown.toObject = function(includeInstance, msg) {
  var f, obj = {
source: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.MainView.ReflowEditor.Shown}
 */
proto.rv.analytics.UI.MainView.ReflowEditor.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView.ReflowEditor.Shown;
  return proto.rv.analytics.UI.MainView.ReflowEditor.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView.ReflowEditor.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView.ReflowEditor.Shown}
 */
proto.rv.analytics.UI.MainView.ReflowEditor.Shown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.MainView.ReflowEditor.Shown.Source} */ (reader.readEnum());
      msg.setSource(value);
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
proto.rv.analytics.UI.MainView.ReflowEditor.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.ReflowEditor.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView.ReflowEditor.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.ReflowEditor.Shown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
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
proto.rv.analytics.UI.MainView.ReflowEditor.Shown.Source = {
  SOURCE_UNKNOWN: 0,
  SOURCE_TOOLBAR: 1,
  SOURCE_APPLICATION_MENU: 2,
  SOURCE_LIBRARY_CONTEXT_MENU: 3
};

/**
 * optional Source source = 1;
 * @return {!proto.rv.analytics.UI.MainView.ReflowEditor.Shown.Source}
 */
proto.rv.analytics.UI.MainView.ReflowEditor.Shown.prototype.getSource = function() {
  return /** @type {!proto.rv.analytics.UI.MainView.ReflowEditor.Shown.Source} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.MainView.ReflowEditor.Shown.Source} value
 * @return {!proto.rv.analytics.UI.MainView.ReflowEditor.Shown} returns this
 */
proto.rv.analytics.UI.MainView.ReflowEditor.Shown.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.MainView.ReflowEditor.Shown}
 */
proto.rv.analytics.UI.MainView.ReflowEditor.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.ReflowEditor.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.ReflowEditor.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.ReflowEditor.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.MainView.ReflowEditor} returns this
*/
proto.rv.analytics.UI.MainView.ReflowEditor.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.MainView.ReflowEditor.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView.ReflowEditor} returns this
 */
proto.rv.analytics.UI.MainView.ReflowEditor.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.ReflowEditor.prototype.hasShown = function() {
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
proto.rv.analytics.UI.MainView.Bible.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.MainView.Bible.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1,
  TRIGGER: 2,
  GENERATE_SLIDES: 3,
  GENERATE_NEXT: 4,
  GENERATE_PREVIOUS: 5,
  SAVE_SLIDES: 6,
  LOOKUP: 7,
  INSTALL: 8,
  REMOVE: 9,
  STARTUP: 10
};

/**
 * @return {proto.rv.analytics.UI.MainView.Bible.ComponentCase}
 */
proto.rv.analytics.UI.MainView.Bible.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.MainView.Bible.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.MainView.Bible.oneofGroups_[0]));
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
proto.rv.analytics.UI.MainView.Bible.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.Bible.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView.Bible} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.Bible.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.MainView.Bible.Shown.toObject(includeInstance, f),
trigger: (f = msg.getTrigger()) && proto.rv.analytics.UI.MainView.Bible.Trigger.toObject(includeInstance, f),
generateSlides: (f = msg.getGenerateSlides()) && proto.rv.analytics.UI.MainView.Bible.GenerateSlides.toObject(includeInstance, f),
generateNext: (f = msg.getGenerateNext()) && proto.rv.analytics.UI.MainView.Bible.GenerateNext.toObject(includeInstance, f),
generatePrevious: (f = msg.getGeneratePrevious()) && proto.rv.analytics.UI.MainView.Bible.GeneratePrevious.toObject(includeInstance, f),
saveSlides: (f = msg.getSaveSlides()) && proto.rv.analytics.UI.MainView.Bible.SaveSlides.toObject(includeInstance, f),
lookup: (f = msg.getLookup()) && proto.rv.analytics.UI.MainView.Bible.Lookup.toObject(includeInstance, f),
install: (f = msg.getInstall()) && proto.rv.analytics.UI.MainView.Bible.BibleCount.toObject(includeInstance, f),
remove: (f = msg.getRemove()) && proto.rv.analytics.UI.MainView.Bible.BibleCount.toObject(includeInstance, f),
startup: (f = msg.getStartup()) && proto.rv.analytics.UI.MainView.Bible.BibleCount.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.MainView.Bible}
 */
proto.rv.analytics.UI.MainView.Bible.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView.Bible;
  return proto.rv.analytics.UI.MainView.Bible.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView.Bible} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView.Bible}
 */
proto.rv.analytics.UI.MainView.Bible.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.MainView.Bible.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.Bible.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
      break;
    case 2:
      var value = new proto.rv.analytics.UI.MainView.Bible.Trigger;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.Bible.Trigger.deserializeBinaryFromReader);
      msg.setTrigger(value);
      break;
    case 3:
      var value = new proto.rv.analytics.UI.MainView.Bible.GenerateSlides;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.Bible.GenerateSlides.deserializeBinaryFromReader);
      msg.setGenerateSlides(value);
      break;
    case 4:
      var value = new proto.rv.analytics.UI.MainView.Bible.GenerateNext;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.Bible.GenerateNext.deserializeBinaryFromReader);
      msg.setGenerateNext(value);
      break;
    case 5:
      var value = new proto.rv.analytics.UI.MainView.Bible.GeneratePrevious;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.Bible.GeneratePrevious.deserializeBinaryFromReader);
      msg.setGeneratePrevious(value);
      break;
    case 6:
      var value = new proto.rv.analytics.UI.MainView.Bible.SaveSlides;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.Bible.SaveSlides.deserializeBinaryFromReader);
      msg.setSaveSlides(value);
      break;
    case 7:
      var value = new proto.rv.analytics.UI.MainView.Bible.Lookup;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.Bible.Lookup.deserializeBinaryFromReader);
      msg.setLookup(value);
      break;
    case 8:
      var value = new proto.rv.analytics.UI.MainView.Bible.BibleCount;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.Bible.BibleCount.deserializeBinaryFromReader);
      msg.setInstall(value);
      break;
    case 9:
      var value = new proto.rv.analytics.UI.MainView.Bible.BibleCount;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.Bible.BibleCount.deserializeBinaryFromReader);
      msg.setRemove(value);
      break;
    case 10:
      var value = new proto.rv.analytics.UI.MainView.Bible.BibleCount;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.Bible.BibleCount.deserializeBinaryFromReader);
      msg.setStartup(value);
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
proto.rv.analytics.UI.MainView.Bible.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.Bible.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView.Bible} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.Bible.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.MainView.Bible.Shown.serializeBinaryToWriter
    );
  }
  f = message.getTrigger();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.analytics.UI.MainView.Bible.Trigger.serializeBinaryToWriter
    );
  }
  f = message.getGenerateSlides();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.analytics.UI.MainView.Bible.GenerateSlides.serializeBinaryToWriter
    );
  }
  f = message.getGenerateNext();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.analytics.UI.MainView.Bible.GenerateNext.serializeBinaryToWriter
    );
  }
  f = message.getGeneratePrevious();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.analytics.UI.MainView.Bible.GeneratePrevious.serializeBinaryToWriter
    );
  }
  f = message.getSaveSlides();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.rv.analytics.UI.MainView.Bible.SaveSlides.serializeBinaryToWriter
    );
  }
  f = message.getLookup();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.rv.analytics.UI.MainView.Bible.Lookup.serializeBinaryToWriter
    );
  }
  f = message.getInstall();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.rv.analytics.UI.MainView.Bible.BibleCount.serializeBinaryToWriter
    );
  }
  f = message.getRemove();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.rv.analytics.UI.MainView.Bible.BibleCount.serializeBinaryToWriter
    );
  }
  f = message.getStartup();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.rv.analytics.UI.MainView.Bible.BibleCount.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.analytics.UI.MainView.Bible.Location = {
  LOCATION_UNKNOWN: 0,
  LOCATION_PRESENTATION: 1,
  LOCATION_BIBLE_MODULE: 2
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
proto.rv.analytics.UI.MainView.Bible.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.Bible.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView.Bible.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.Bible.Shown.toObject = function(includeInstance, msg) {
  var f, obj = {
source: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.MainView.Bible.Shown}
 */
proto.rv.analytics.UI.MainView.Bible.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView.Bible.Shown;
  return proto.rv.analytics.UI.MainView.Bible.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView.Bible.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView.Bible.Shown}
 */
proto.rv.analytics.UI.MainView.Bible.Shown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.MainView.Bible.Shown.Source} */ (reader.readEnum());
      msg.setSource(value);
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
proto.rv.analytics.UI.MainView.Bible.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.Bible.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView.Bible.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.Bible.Shown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
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
proto.rv.analytics.UI.MainView.Bible.Shown.Source = {
  SOURCE_UNKNOWN: 0,
  SOURCE_TOOLBAR: 1,
  SOURCE_APPLICATION_MENU: 2
};

/**
 * optional Source source = 1;
 * @return {!proto.rv.analytics.UI.MainView.Bible.Shown.Source}
 */
proto.rv.analytics.UI.MainView.Bible.Shown.prototype.getSource = function() {
  return /** @type {!proto.rv.analytics.UI.MainView.Bible.Shown.Source} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.MainView.Bible.Shown.Source} value
 * @return {!proto.rv.analytics.UI.MainView.Bible.Shown} returns this
 */
proto.rv.analytics.UI.MainView.Bible.Shown.prototype.setSource = function(value) {
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
proto.rv.analytics.UI.MainView.Bible.Trigger.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.Bible.Trigger.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView.Bible.Trigger} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.Bible.Trigger.toObject = function(includeInstance, msg) {
  var f, obj = {
location: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.MainView.Bible.Trigger}
 */
proto.rv.analytics.UI.MainView.Bible.Trigger.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView.Bible.Trigger;
  return proto.rv.analytics.UI.MainView.Bible.Trigger.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView.Bible.Trigger} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView.Bible.Trigger}
 */
proto.rv.analytics.UI.MainView.Bible.Trigger.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.MainView.Bible.Location} */ (reader.readEnum());
      msg.setLocation(value);
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
proto.rv.analytics.UI.MainView.Bible.Trigger.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.Bible.Trigger.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView.Bible.Trigger} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.Bible.Trigger.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional Location location = 1;
 * @return {!proto.rv.analytics.UI.MainView.Bible.Location}
 */
proto.rv.analytics.UI.MainView.Bible.Trigger.prototype.getLocation = function() {
  return /** @type {!proto.rv.analytics.UI.MainView.Bible.Location} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.MainView.Bible.Location} value
 * @return {!proto.rv.analytics.UI.MainView.Bible.Trigger} returns this
 */
proto.rv.analytics.UI.MainView.Bible.Trigger.prototype.setLocation = function(value) {
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
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.Bible.GenerateSlides.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.toObject = function(includeInstance, msg) {
  var f, obj = {
translationCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
slideCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
verseLocation: jspb.Message.getFieldWithDefault(msg, 3, 0),
referenceLocation: jspb.Message.getFieldWithDefault(msg, 4, 0),
showVerseNumbers: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
breakNewVerse: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
displayTranslation: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
preserveFontColor: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
referenceStyle: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides}
 */
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView.Bible.GenerateSlides;
  return proto.rv.analytics.UI.MainView.Bible.GenerateSlides.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides}
 */
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTranslationCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSlideCount(value);
      break;
    case 3:
      var value = /** @type {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides.TextBoxLocation} */ (reader.readEnum());
      msg.setVerseLocation(value);
      break;
    case 4:
      var value = /** @type {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides.TextBoxLocation} */ (reader.readEnum());
      msg.setReferenceLocation(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShowVerseNumbers(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBreakNewVerse(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayTranslation(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPreserveFontColor(value);
      break;
    case 9:
      var value = /** @type {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides.ReferenceType} */ (reader.readEnum());
      msg.setReferenceStyle(value);
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
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.Bible.GenerateSlides.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTranslationCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSlideCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getVerseLocation();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getReferenceLocation();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getShowVerseNumbers();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getBreakNewVerse();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getDisplayTranslation();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getPreserveFontColor();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getReferenceStyle();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.TextBoxLocation = {
  TEXT_BOX_LOCATION_UNKNOWN: 0,
  TEXT_BOX_LOCATION_NONE: 1,
  TEXT_BOX_LOCATION_TEXT_BOX: 2,
  TEXT_BOX_LOCATION_WITH_VERSE: 3
};

/**
 * @enum {number}
 */
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.ReferenceType = {
  REFERENCE_TYPE_UNKNOWN: 0,
  REFERENCE_TYPE_PASSAGE_NONE: 1,
  REFERENCE_TYPE_PASSAGE_EACH: 2,
  REFERENCE_TYPE_PASSAGE_LAST: 3,
  REFERENCE_TYPE_VERSE: 4
};

/**
 * optional int32 translation_count = 1;
 * @return {number}
 */
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.prototype.getTranslationCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides} returns this
 */
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.prototype.setTranslationCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 slide_count = 2;
 * @return {number}
 */
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.prototype.getSlideCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides} returns this
 */
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.prototype.setSlideCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional TextBoxLocation verse_location = 3;
 * @return {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides.TextBoxLocation}
 */
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.prototype.getVerseLocation = function() {
  return /** @type {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides.TextBoxLocation} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides.TextBoxLocation} value
 * @return {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides} returns this
 */
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.prototype.setVerseLocation = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional TextBoxLocation reference_location = 4;
 * @return {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides.TextBoxLocation}
 */
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.prototype.getReferenceLocation = function() {
  return /** @type {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides.TextBoxLocation} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides.TextBoxLocation} value
 * @return {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides} returns this
 */
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.prototype.setReferenceLocation = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional bool show_verse_numbers = 5;
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.prototype.getShowVerseNumbers = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides} returns this
 */
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.prototype.setShowVerseNumbers = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool break_new_verse = 6;
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.prototype.getBreakNewVerse = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides} returns this
 */
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.prototype.setBreakNewVerse = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool display_translation = 7;
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.prototype.getDisplayTranslation = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides} returns this
 */
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.prototype.setDisplayTranslation = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool preserve_font_color = 8;
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.prototype.getPreserveFontColor = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides} returns this
 */
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.prototype.setPreserveFontColor = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional ReferenceType reference_style = 9;
 * @return {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides.ReferenceType}
 */
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.prototype.getReferenceStyle = function() {
  return /** @type {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides.ReferenceType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides.ReferenceType} value
 * @return {!proto.rv.analytics.UI.MainView.Bible.GenerateSlides} returns this
 */
proto.rv.analytics.UI.MainView.Bible.GenerateSlides.prototype.setReferenceStyle = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
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
proto.rv.analytics.UI.MainView.Bible.GenerateNext.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.Bible.GenerateNext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView.Bible.GenerateNext} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.Bible.GenerateNext.toObject = function(includeInstance, msg) {
  var f, obj = {
location: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.MainView.Bible.GenerateNext}
 */
proto.rv.analytics.UI.MainView.Bible.GenerateNext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView.Bible.GenerateNext;
  return proto.rv.analytics.UI.MainView.Bible.GenerateNext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView.Bible.GenerateNext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView.Bible.GenerateNext}
 */
proto.rv.analytics.UI.MainView.Bible.GenerateNext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.MainView.Bible.Location} */ (reader.readEnum());
      msg.setLocation(value);
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
proto.rv.analytics.UI.MainView.Bible.GenerateNext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.Bible.GenerateNext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView.Bible.GenerateNext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.Bible.GenerateNext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional Location location = 1;
 * @return {!proto.rv.analytics.UI.MainView.Bible.Location}
 */
proto.rv.analytics.UI.MainView.Bible.GenerateNext.prototype.getLocation = function() {
  return /** @type {!proto.rv.analytics.UI.MainView.Bible.Location} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.MainView.Bible.Location} value
 * @return {!proto.rv.analytics.UI.MainView.Bible.GenerateNext} returns this
 */
proto.rv.analytics.UI.MainView.Bible.GenerateNext.prototype.setLocation = function(value) {
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
proto.rv.analytics.UI.MainView.Bible.GeneratePrevious.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.Bible.GeneratePrevious.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView.Bible.GeneratePrevious} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.Bible.GeneratePrevious.toObject = function(includeInstance, msg) {
  var f, obj = {
location: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.rv.analytics.UI.MainView.Bible.GeneratePrevious}
 */
proto.rv.analytics.UI.MainView.Bible.GeneratePrevious.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView.Bible.GeneratePrevious;
  return proto.rv.analytics.UI.MainView.Bible.GeneratePrevious.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView.Bible.GeneratePrevious} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView.Bible.GeneratePrevious}
 */
proto.rv.analytics.UI.MainView.Bible.GeneratePrevious.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {!proto.rv.analytics.UI.MainView.Bible.Location} */ (reader.readEnum());
      msg.setLocation(value);
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
proto.rv.analytics.UI.MainView.Bible.GeneratePrevious.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.Bible.GeneratePrevious.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView.Bible.GeneratePrevious} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.Bible.GeneratePrevious.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional Location location = 2;
 * @return {!proto.rv.analytics.UI.MainView.Bible.Location}
 */
proto.rv.analytics.UI.MainView.Bible.GeneratePrevious.prototype.getLocation = function() {
  return /** @type {!proto.rv.analytics.UI.MainView.Bible.Location} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.analytics.UI.MainView.Bible.Location} value
 * @return {!proto.rv.analytics.UI.MainView.Bible.GeneratePrevious} returns this
 */
proto.rv.analytics.UI.MainView.Bible.GeneratePrevious.prototype.setLocation = function(value) {
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
proto.rv.analytics.UI.MainView.Bible.SaveSlides.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.Bible.SaveSlides.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView.Bible.SaveSlides} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.Bible.SaveSlides.toObject = function(includeInstance, msg) {
  var f, obj = {
destination: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.MainView.Bible.SaveSlides}
 */
proto.rv.analytics.UI.MainView.Bible.SaveSlides.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView.Bible.SaveSlides;
  return proto.rv.analytics.UI.MainView.Bible.SaveSlides.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView.Bible.SaveSlides} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView.Bible.SaveSlides}
 */
proto.rv.analytics.UI.MainView.Bible.SaveSlides.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.MainView.Bible.SaveSlides.SlideDestination} */ (reader.readEnum());
      msg.setDestination(value);
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
proto.rv.analytics.UI.MainView.Bible.SaveSlides.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.Bible.SaveSlides.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView.Bible.SaveSlides} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.Bible.SaveSlides.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDestination();
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
proto.rv.analytics.UI.MainView.Bible.SaveSlides.SlideDestination = {
  SLIDE_DESTINATION_UNKNOWN: 0,
  SLIDE_DESTINATION_SAVE_TO_LIBRARY: 1,
  SLIDE_DESTINATION_SAVE_TO_PLAYLIST: 2,
  SLIDE_DESTINATION_COPY_TO_PRESENTATION: 3
};

/**
 * optional SlideDestination destination = 1;
 * @return {!proto.rv.analytics.UI.MainView.Bible.SaveSlides.SlideDestination}
 */
proto.rv.analytics.UI.MainView.Bible.SaveSlides.prototype.getDestination = function() {
  return /** @type {!proto.rv.analytics.UI.MainView.Bible.SaveSlides.SlideDestination} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.MainView.Bible.SaveSlides.SlideDestination} value
 * @return {!proto.rv.analytics.UI.MainView.Bible.SaveSlides} returns this
 */
proto.rv.analytics.UI.MainView.Bible.SaveSlides.prototype.setDestination = function(value) {
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
proto.rv.analytics.UI.MainView.Bible.Lookup.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.Bible.Lookup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView.Bible.Lookup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.Bible.Lookup.toObject = function(includeInstance, msg) {
  var f, obj = {
location: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.MainView.Bible.Lookup}
 */
proto.rv.analytics.UI.MainView.Bible.Lookup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView.Bible.Lookup;
  return proto.rv.analytics.UI.MainView.Bible.Lookup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView.Bible.Lookup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView.Bible.Lookup}
 */
proto.rv.analytics.UI.MainView.Bible.Lookup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.MainView.Bible.Lookup.LookupLocation} */ (reader.readEnum());
      msg.setLocation(value);
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
proto.rv.analytics.UI.MainView.Bible.Lookup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.Bible.Lookup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView.Bible.Lookup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.Bible.Lookup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
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
proto.rv.analytics.UI.MainView.Bible.Lookup.LookupLocation = {
  LOOKUP_LOCATION_UNKNOWN: 0,
  LOOKUP_LOCATION_TEXT_REFERENCE: 1,
  LOOKUP_LOCATION_MENU_BOOK: 2,
  LOOKUP_LOCATION_MENU_CHAPTER: 3,
  LOOKUP_LOCATION_MENU_VERSE: 4,
  LOOKUP_LOCATION_TEXT_SEARCH_CHAPTER: 5,
  LOOKUP_LOCATION_TEXT_SEARCH_VERSE: 6
};

/**
 * optional LookupLocation location = 1;
 * @return {!proto.rv.analytics.UI.MainView.Bible.Lookup.LookupLocation}
 */
proto.rv.analytics.UI.MainView.Bible.Lookup.prototype.getLocation = function() {
  return /** @type {!proto.rv.analytics.UI.MainView.Bible.Lookup.LookupLocation} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.MainView.Bible.Lookup.LookupLocation} value
 * @return {!proto.rv.analytics.UI.MainView.Bible.Lookup} returns this
 */
proto.rv.analytics.UI.MainView.Bible.Lookup.prototype.setLocation = function(value) {
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
proto.rv.analytics.UI.MainView.Bible.BibleCount.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.Bible.BibleCount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView.Bible.BibleCount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.Bible.BibleCount.toObject = function(includeInstance, msg) {
  var f, obj = {
freeInstalledCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
purchasedInstalledCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.rv.analytics.UI.MainView.Bible.BibleCount}
 */
proto.rv.analytics.UI.MainView.Bible.BibleCount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView.Bible.BibleCount;
  return proto.rv.analytics.UI.MainView.Bible.BibleCount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView.Bible.BibleCount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView.Bible.BibleCount}
 */
proto.rv.analytics.UI.MainView.Bible.BibleCount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFreeInstalledCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPurchasedInstalledCount(value);
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
proto.rv.analytics.UI.MainView.Bible.BibleCount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.Bible.BibleCount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView.Bible.BibleCount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.Bible.BibleCount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFreeInstalledCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPurchasedInstalledCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 free_installed_count = 1;
 * @return {number}
 */
proto.rv.analytics.UI.MainView.Bible.BibleCount.prototype.getFreeInstalledCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.analytics.UI.MainView.Bible.BibleCount} returns this
 */
proto.rv.analytics.UI.MainView.Bible.BibleCount.prototype.setFreeInstalledCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 purchased_installed_count = 2;
 * @return {number}
 */
proto.rv.analytics.UI.MainView.Bible.BibleCount.prototype.getPurchasedInstalledCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.analytics.UI.MainView.Bible.BibleCount} returns this
 */
proto.rv.analytics.UI.MainView.Bible.BibleCount.prototype.setPurchasedInstalledCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.MainView.Bible.Shown}
 */
proto.rv.analytics.UI.MainView.Bible.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.Bible.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.Bible.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.Bible.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.MainView.Bible} returns this
*/
proto.rv.analytics.UI.MainView.Bible.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.MainView.Bible.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView.Bible} returns this
 */
proto.rv.analytics.UI.MainView.Bible.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.Bible.prototype.hasShown = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Trigger trigger = 2;
 * @return {?proto.rv.analytics.UI.MainView.Bible.Trigger}
 */
proto.rv.analytics.UI.MainView.Bible.prototype.getTrigger = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.Bible.Trigger} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.Bible.Trigger, 2));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.Bible.Trigger|undefined} value
 * @return {!proto.rv.analytics.UI.MainView.Bible} returns this
*/
proto.rv.analytics.UI.MainView.Bible.prototype.setTrigger = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.analytics.UI.MainView.Bible.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView.Bible} returns this
 */
proto.rv.analytics.UI.MainView.Bible.prototype.clearTrigger = function() {
  return this.setTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.Bible.prototype.hasTrigger = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GenerateSlides generate_slides = 3;
 * @return {?proto.rv.analytics.UI.MainView.Bible.GenerateSlides}
 */
proto.rv.analytics.UI.MainView.Bible.prototype.getGenerateSlides = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.Bible.GenerateSlides} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.Bible.GenerateSlides, 3));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.Bible.GenerateSlides|undefined} value
 * @return {!proto.rv.analytics.UI.MainView.Bible} returns this
*/
proto.rv.analytics.UI.MainView.Bible.prototype.setGenerateSlides = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.analytics.UI.MainView.Bible.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView.Bible} returns this
 */
proto.rv.analytics.UI.MainView.Bible.prototype.clearGenerateSlides = function() {
  return this.setGenerateSlides(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.Bible.prototype.hasGenerateSlides = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional GenerateNext generate_next = 4;
 * @return {?proto.rv.analytics.UI.MainView.Bible.GenerateNext}
 */
proto.rv.analytics.UI.MainView.Bible.prototype.getGenerateNext = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.Bible.GenerateNext} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.Bible.GenerateNext, 4));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.Bible.GenerateNext|undefined} value
 * @return {!proto.rv.analytics.UI.MainView.Bible} returns this
*/
proto.rv.analytics.UI.MainView.Bible.prototype.setGenerateNext = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rv.analytics.UI.MainView.Bible.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView.Bible} returns this
 */
proto.rv.analytics.UI.MainView.Bible.prototype.clearGenerateNext = function() {
  return this.setGenerateNext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.Bible.prototype.hasGenerateNext = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional GeneratePrevious generate_previous = 5;
 * @return {?proto.rv.analytics.UI.MainView.Bible.GeneratePrevious}
 */
proto.rv.analytics.UI.MainView.Bible.prototype.getGeneratePrevious = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.Bible.GeneratePrevious} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.Bible.GeneratePrevious, 5));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.Bible.GeneratePrevious|undefined} value
 * @return {!proto.rv.analytics.UI.MainView.Bible} returns this
*/
proto.rv.analytics.UI.MainView.Bible.prototype.setGeneratePrevious = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.rv.analytics.UI.MainView.Bible.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView.Bible} returns this
 */
proto.rv.analytics.UI.MainView.Bible.prototype.clearGeneratePrevious = function() {
  return this.setGeneratePrevious(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.Bible.prototype.hasGeneratePrevious = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional SaveSlides save_slides = 6;
 * @return {?proto.rv.analytics.UI.MainView.Bible.SaveSlides}
 */
proto.rv.analytics.UI.MainView.Bible.prototype.getSaveSlides = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.Bible.SaveSlides} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.Bible.SaveSlides, 6));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.Bible.SaveSlides|undefined} value
 * @return {!proto.rv.analytics.UI.MainView.Bible} returns this
*/
proto.rv.analytics.UI.MainView.Bible.prototype.setSaveSlides = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.rv.analytics.UI.MainView.Bible.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView.Bible} returns this
 */
proto.rv.analytics.UI.MainView.Bible.prototype.clearSaveSlides = function() {
  return this.setSaveSlides(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.Bible.prototype.hasSaveSlides = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Lookup lookup = 7;
 * @return {?proto.rv.analytics.UI.MainView.Bible.Lookup}
 */
proto.rv.analytics.UI.MainView.Bible.prototype.getLookup = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.Bible.Lookup} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.Bible.Lookup, 7));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.Bible.Lookup|undefined} value
 * @return {!proto.rv.analytics.UI.MainView.Bible} returns this
*/
proto.rv.analytics.UI.MainView.Bible.prototype.setLookup = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.rv.analytics.UI.MainView.Bible.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView.Bible} returns this
 */
proto.rv.analytics.UI.MainView.Bible.prototype.clearLookup = function() {
  return this.setLookup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.Bible.prototype.hasLookup = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional BibleCount install = 8;
 * @return {?proto.rv.analytics.UI.MainView.Bible.BibleCount}
 */
proto.rv.analytics.UI.MainView.Bible.prototype.getInstall = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.Bible.BibleCount} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.Bible.BibleCount, 8));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.Bible.BibleCount|undefined} value
 * @return {!proto.rv.analytics.UI.MainView.Bible} returns this
*/
proto.rv.analytics.UI.MainView.Bible.prototype.setInstall = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.rv.analytics.UI.MainView.Bible.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView.Bible} returns this
 */
proto.rv.analytics.UI.MainView.Bible.prototype.clearInstall = function() {
  return this.setInstall(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.Bible.prototype.hasInstall = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional BibleCount remove = 9;
 * @return {?proto.rv.analytics.UI.MainView.Bible.BibleCount}
 */
proto.rv.analytics.UI.MainView.Bible.prototype.getRemove = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.Bible.BibleCount} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.Bible.BibleCount, 9));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.Bible.BibleCount|undefined} value
 * @return {!proto.rv.analytics.UI.MainView.Bible} returns this
*/
proto.rv.analytics.UI.MainView.Bible.prototype.setRemove = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.rv.analytics.UI.MainView.Bible.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView.Bible} returns this
 */
proto.rv.analytics.UI.MainView.Bible.prototype.clearRemove = function() {
  return this.setRemove(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.Bible.prototype.hasRemove = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional BibleCount startup = 10;
 * @return {?proto.rv.analytics.UI.MainView.Bible.BibleCount}
 */
proto.rv.analytics.UI.MainView.Bible.prototype.getStartup = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.Bible.BibleCount} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.Bible.BibleCount, 10));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.Bible.BibleCount|undefined} value
 * @return {!proto.rv.analytics.UI.MainView.Bible} returns this
*/
proto.rv.analytics.UI.MainView.Bible.prototype.setStartup = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.rv.analytics.UI.MainView.Bible.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView.Bible} returns this
 */
proto.rv.analytics.UI.MainView.Bible.prototype.clearStartup = function() {
  return this.setStartup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.Bible.prototype.hasStartup = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.analytics.UI.MainView.StageEditor.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.MainView.StageEditor.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1
};

/**
 * @return {proto.rv.analytics.UI.MainView.StageEditor.ComponentCase}
 */
proto.rv.analytics.UI.MainView.StageEditor.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.MainView.StageEditor.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.MainView.StageEditor.oneofGroups_[0]));
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
proto.rv.analytics.UI.MainView.StageEditor.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.StageEditor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView.StageEditor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.StageEditor.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.MainView.StageEditor.Shown.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.MainView.StageEditor}
 */
proto.rv.analytics.UI.MainView.StageEditor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView.StageEditor;
  return proto.rv.analytics.UI.MainView.StageEditor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView.StageEditor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView.StageEditor}
 */
proto.rv.analytics.UI.MainView.StageEditor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.MainView.StageEditor.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.StageEditor.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
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
proto.rv.analytics.UI.MainView.StageEditor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.StageEditor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView.StageEditor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.StageEditor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.MainView.StageEditor.Shown.serializeBinaryToWriter
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
proto.rv.analytics.UI.MainView.StageEditor.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.StageEditor.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView.StageEditor.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.StageEditor.Shown.toObject = function(includeInstance, msg) {
  var f, obj = {
source: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.MainView.StageEditor.Shown}
 */
proto.rv.analytics.UI.MainView.StageEditor.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView.StageEditor.Shown;
  return proto.rv.analytics.UI.MainView.StageEditor.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView.StageEditor.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView.StageEditor.Shown}
 */
proto.rv.analytics.UI.MainView.StageEditor.Shown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.MainView.StageEditor.Shown.Source} */ (reader.readEnum());
      msg.setSource(value);
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
proto.rv.analytics.UI.MainView.StageEditor.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.StageEditor.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView.StageEditor.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.StageEditor.Shown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
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
proto.rv.analytics.UI.MainView.StageEditor.Shown.Source = {
  SOURCE_UNKNOWN: 0,
  SOURCE_TOOLBAR: 1,
  SOURCE_APPLICATION_MENU: 2,
  SOURCE_LOWER_RIGHT: 3
};

/**
 * optional Source source = 1;
 * @return {!proto.rv.analytics.UI.MainView.StageEditor.Shown.Source}
 */
proto.rv.analytics.UI.MainView.StageEditor.Shown.prototype.getSource = function() {
  return /** @type {!proto.rv.analytics.UI.MainView.StageEditor.Shown.Source} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.MainView.StageEditor.Shown.Source} value
 * @return {!proto.rv.analytics.UI.MainView.StageEditor.Shown} returns this
 */
proto.rv.analytics.UI.MainView.StageEditor.Shown.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.MainView.StageEditor.Shown}
 */
proto.rv.analytics.UI.MainView.StageEditor.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.StageEditor.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.StageEditor.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.StageEditor.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.MainView.StageEditor} returns this
*/
proto.rv.analytics.UI.MainView.StageEditor.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.MainView.StageEditor.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView.StageEditor} returns this
 */
proto.rv.analytics.UI.MainView.StageEditor.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.StageEditor.prototype.hasShown = function() {
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
proto.rv.analytics.UI.MainView.ThemeEditor.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.MainView.ThemeEditor.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1
};

/**
 * @return {proto.rv.analytics.UI.MainView.ThemeEditor.ComponentCase}
 */
proto.rv.analytics.UI.MainView.ThemeEditor.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.MainView.ThemeEditor.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.MainView.ThemeEditor.oneofGroups_[0]));
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
proto.rv.analytics.UI.MainView.ThemeEditor.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.ThemeEditor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView.ThemeEditor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.ThemeEditor.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.MainView.ThemeEditor.Shown.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.MainView.ThemeEditor}
 */
proto.rv.analytics.UI.MainView.ThemeEditor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView.ThemeEditor;
  return proto.rv.analytics.UI.MainView.ThemeEditor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView.ThemeEditor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView.ThemeEditor}
 */
proto.rv.analytics.UI.MainView.ThemeEditor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.MainView.ThemeEditor.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.ThemeEditor.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
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
proto.rv.analytics.UI.MainView.ThemeEditor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.ThemeEditor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView.ThemeEditor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.ThemeEditor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.MainView.ThemeEditor.Shown.serializeBinaryToWriter
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
proto.rv.analytics.UI.MainView.ThemeEditor.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.ThemeEditor.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView.ThemeEditor.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.ThemeEditor.Shown.toObject = function(includeInstance, msg) {
  var f, obj = {
source: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.MainView.ThemeEditor.Shown}
 */
proto.rv.analytics.UI.MainView.ThemeEditor.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView.ThemeEditor.Shown;
  return proto.rv.analytics.UI.MainView.ThemeEditor.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView.ThemeEditor.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView.ThemeEditor.Shown}
 */
proto.rv.analytics.UI.MainView.ThemeEditor.Shown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.MainView.ThemeEditor.Shown.Source} */ (reader.readEnum());
      msg.setSource(value);
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
proto.rv.analytics.UI.MainView.ThemeEditor.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.ThemeEditor.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView.ThemeEditor.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.ThemeEditor.Shown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
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
proto.rv.analytics.UI.MainView.ThemeEditor.Shown.Source = {
  SOURCE_UNKNOWN: 0,
  SOURCE_TOOLBAR: 1,
  SOURCE_THEME_CONTEXT_MENU: 2
};

/**
 * optional Source source = 1;
 * @return {!proto.rv.analytics.UI.MainView.ThemeEditor.Shown.Source}
 */
proto.rv.analytics.UI.MainView.ThemeEditor.Shown.prototype.getSource = function() {
  return /** @type {!proto.rv.analytics.UI.MainView.ThemeEditor.Shown.Source} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.MainView.ThemeEditor.Shown.Source} value
 * @return {!proto.rv.analytics.UI.MainView.ThemeEditor.Shown} returns this
 */
proto.rv.analytics.UI.MainView.ThemeEditor.Shown.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.MainView.ThemeEditor.Shown}
 */
proto.rv.analytics.UI.MainView.ThemeEditor.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.ThemeEditor.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.ThemeEditor.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.ThemeEditor.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.MainView.ThemeEditor} returns this
*/
proto.rv.analytics.UI.MainView.ThemeEditor.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.MainView.ThemeEditor.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView.ThemeEditor} returns this
 */
proto.rv.analytics.UI.MainView.ThemeEditor.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.ThemeEditor.prototype.hasShown = function() {
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
proto.rv.analytics.UI.MainView.CopyrightEditor.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.MainView.CopyrightEditor.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1
};

/**
 * @return {proto.rv.analytics.UI.MainView.CopyrightEditor.ComponentCase}
 */
proto.rv.analytics.UI.MainView.CopyrightEditor.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.MainView.CopyrightEditor.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.MainView.CopyrightEditor.oneofGroups_[0]));
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
proto.rv.analytics.UI.MainView.CopyrightEditor.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.CopyrightEditor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView.CopyrightEditor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.CopyrightEditor.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.MainView.CopyrightEditor.Shown.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.MainView.CopyrightEditor}
 */
proto.rv.analytics.UI.MainView.CopyrightEditor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView.CopyrightEditor;
  return proto.rv.analytics.UI.MainView.CopyrightEditor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView.CopyrightEditor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView.CopyrightEditor}
 */
proto.rv.analytics.UI.MainView.CopyrightEditor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.MainView.CopyrightEditor.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.CopyrightEditor.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
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
proto.rv.analytics.UI.MainView.CopyrightEditor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.CopyrightEditor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView.CopyrightEditor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.CopyrightEditor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.MainView.CopyrightEditor.Shown.serializeBinaryToWriter
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
proto.rv.analytics.UI.MainView.CopyrightEditor.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.CopyrightEditor.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView.CopyrightEditor.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.CopyrightEditor.Shown.toObject = function(includeInstance, msg) {
  var f, obj = {
source: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.MainView.CopyrightEditor.Shown}
 */
proto.rv.analytics.UI.MainView.CopyrightEditor.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView.CopyrightEditor.Shown;
  return proto.rv.analytics.UI.MainView.CopyrightEditor.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView.CopyrightEditor.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView.CopyrightEditor.Shown}
 */
proto.rv.analytics.UI.MainView.CopyrightEditor.Shown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.MainView.CopyrightEditor.Shown.Source} */ (reader.readEnum());
      msg.setSource(value);
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
proto.rv.analytics.UI.MainView.CopyrightEditor.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.CopyrightEditor.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView.CopyrightEditor.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.CopyrightEditor.Shown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
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
proto.rv.analytics.UI.MainView.CopyrightEditor.Shown.Source = {
  SOURCE_UNKNOWN: 0,
  SOURCE_TOOLBAR: 1,
  SOURCE_PREFERENCE: 2
};

/**
 * optional Source source = 1;
 * @return {!proto.rv.analytics.UI.MainView.CopyrightEditor.Shown.Source}
 */
proto.rv.analytics.UI.MainView.CopyrightEditor.Shown.prototype.getSource = function() {
  return /** @type {!proto.rv.analytics.UI.MainView.CopyrightEditor.Shown.Source} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.MainView.CopyrightEditor.Shown.Source} value
 * @return {!proto.rv.analytics.UI.MainView.CopyrightEditor.Shown} returns this
 */
proto.rv.analytics.UI.MainView.CopyrightEditor.Shown.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.MainView.CopyrightEditor.Shown}
 */
proto.rv.analytics.UI.MainView.CopyrightEditor.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.CopyrightEditor.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.CopyrightEditor.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.CopyrightEditor.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.MainView.CopyrightEditor} returns this
*/
proto.rv.analytics.UI.MainView.CopyrightEditor.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.MainView.CopyrightEditor.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView.CopyrightEditor} returns this
 */
proto.rv.analytics.UI.MainView.CopyrightEditor.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.CopyrightEditor.prototype.hasShown = function() {
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
proto.rv.analytics.UI.MainView.PropsEditor.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.MainView.PropsEditor.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1
};

/**
 * @return {proto.rv.analytics.UI.MainView.PropsEditor.ComponentCase}
 */
proto.rv.analytics.UI.MainView.PropsEditor.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.MainView.PropsEditor.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.MainView.PropsEditor.oneofGroups_[0]));
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
proto.rv.analytics.UI.MainView.PropsEditor.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.PropsEditor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView.PropsEditor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.PropsEditor.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.MainView.PropsEditor.Shown.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.MainView.PropsEditor}
 */
proto.rv.analytics.UI.MainView.PropsEditor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView.PropsEditor;
  return proto.rv.analytics.UI.MainView.PropsEditor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView.PropsEditor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView.PropsEditor}
 */
proto.rv.analytics.UI.MainView.PropsEditor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.MainView.PropsEditor.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.PropsEditor.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
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
proto.rv.analytics.UI.MainView.PropsEditor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.PropsEditor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView.PropsEditor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.PropsEditor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.MainView.PropsEditor.Shown.serializeBinaryToWriter
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
proto.rv.analytics.UI.MainView.PropsEditor.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.PropsEditor.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView.PropsEditor.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.PropsEditor.Shown.toObject = function(includeInstance, msg) {
  var f, obj = {
source: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.MainView.PropsEditor.Shown}
 */
proto.rv.analytics.UI.MainView.PropsEditor.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView.PropsEditor.Shown;
  return proto.rv.analytics.UI.MainView.PropsEditor.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView.PropsEditor.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView.PropsEditor.Shown}
 */
proto.rv.analytics.UI.MainView.PropsEditor.Shown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.MainView.PropsEditor.Shown.Source} */ (reader.readEnum());
      msg.setSource(value);
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
proto.rv.analytics.UI.MainView.PropsEditor.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.PropsEditor.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView.PropsEditor.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.PropsEditor.Shown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
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
proto.rv.analytics.UI.MainView.PropsEditor.Shown.Source = {
  SOURCE_UNKNOWN: 0,
  SOURCE_TOOLBAR: 1,
  SOURCE_LOWER_RIGHT: 2
};

/**
 * optional Source source = 1;
 * @return {!proto.rv.analytics.UI.MainView.PropsEditor.Shown.Source}
 */
proto.rv.analytics.UI.MainView.PropsEditor.Shown.prototype.getSource = function() {
  return /** @type {!proto.rv.analytics.UI.MainView.PropsEditor.Shown.Source} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.MainView.PropsEditor.Shown.Source} value
 * @return {!proto.rv.analytics.UI.MainView.PropsEditor.Shown} returns this
 */
proto.rv.analytics.UI.MainView.PropsEditor.Shown.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.MainView.PropsEditor.Shown}
 */
proto.rv.analytics.UI.MainView.PropsEditor.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.PropsEditor.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.PropsEditor.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.PropsEditor.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.MainView.PropsEditor} returns this
*/
proto.rv.analytics.UI.MainView.PropsEditor.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.MainView.PropsEditor.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView.PropsEditor} returns this
 */
proto.rv.analytics.UI.MainView.PropsEditor.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.PropsEditor.prototype.hasShown = function() {
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
proto.rv.analytics.UI.MainView.MaskEditor.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.MainView.MaskEditor.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1
};

/**
 * @return {proto.rv.analytics.UI.MainView.MaskEditor.ComponentCase}
 */
proto.rv.analytics.UI.MainView.MaskEditor.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.MainView.MaskEditor.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.MainView.MaskEditor.oneofGroups_[0]));
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
proto.rv.analytics.UI.MainView.MaskEditor.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.MaskEditor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView.MaskEditor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.MaskEditor.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.MainView.MaskEditor.Shown.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.MainView.MaskEditor}
 */
proto.rv.analytics.UI.MainView.MaskEditor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView.MaskEditor;
  return proto.rv.analytics.UI.MainView.MaskEditor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView.MaskEditor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView.MaskEditor}
 */
proto.rv.analytics.UI.MainView.MaskEditor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.MainView.MaskEditor.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.MainView.MaskEditor.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
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
proto.rv.analytics.UI.MainView.MaskEditor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.MaskEditor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView.MaskEditor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.MaskEditor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.MainView.MaskEditor.Shown.serializeBinaryToWriter
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
proto.rv.analytics.UI.MainView.MaskEditor.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.MainView.MaskEditor.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.MainView.MaskEditor.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.MaskEditor.Shown.toObject = function(includeInstance, msg) {
  var f, obj = {
source: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.MainView.MaskEditor.Shown}
 */
proto.rv.analytics.UI.MainView.MaskEditor.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.MainView.MaskEditor.Shown;
  return proto.rv.analytics.UI.MainView.MaskEditor.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.MainView.MaskEditor.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.MainView.MaskEditor.Shown}
 */
proto.rv.analytics.UI.MainView.MaskEditor.Shown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.MainView.MaskEditor.Shown.Source} */ (reader.readEnum());
      msg.setSource(value);
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
proto.rv.analytics.UI.MainView.MaskEditor.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.MainView.MaskEditor.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.MainView.MaskEditor.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.MainView.MaskEditor.Shown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
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
proto.rv.analytics.UI.MainView.MaskEditor.Shown.Source = {
  SOURCE_UNKNOWN: 0,
  SOURCE_TOOLBAR: 1,
  SOURCE_LOOKS_WINDOW: 2
};

/**
 * optional Source source = 1;
 * @return {!proto.rv.analytics.UI.MainView.MaskEditor.Shown.Source}
 */
proto.rv.analytics.UI.MainView.MaskEditor.Shown.prototype.getSource = function() {
  return /** @type {!proto.rv.analytics.UI.MainView.MaskEditor.Shown.Source} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.MainView.MaskEditor.Shown.Source} value
 * @return {!proto.rv.analytics.UI.MainView.MaskEditor.Shown} returns this
 */
proto.rv.analytics.UI.MainView.MaskEditor.Shown.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.MainView.MaskEditor.Shown}
 */
proto.rv.analytics.UI.MainView.MaskEditor.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.MaskEditor.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.MaskEditor.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.MaskEditor.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.MainView.MaskEditor} returns this
*/
proto.rv.analytics.UI.MainView.MaskEditor.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.MainView.MaskEditor.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView.MaskEditor} returns this
 */
proto.rv.analytics.UI.MainView.MaskEditor.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.MaskEditor.prototype.hasShown = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Show show = 1;
 * @return {?proto.rv.analytics.UI.MainView.Show}
 */
proto.rv.analytics.UI.MainView.prototype.getShow = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.Show} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.Show, 1));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.Show|undefined} value
 * @return {!proto.rv.analytics.UI.MainView} returns this
*/
proto.rv.analytics.UI.MainView.prototype.setShow = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.MainView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView} returns this
 */
proto.rv.analytics.UI.MainView.prototype.clearShow = function() {
  return this.setShow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.prototype.hasShow = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PresentationEditor presentation_editor = 2;
 * @return {?proto.rv.analytics.UI.MainView.PresentationEditor}
 */
proto.rv.analytics.UI.MainView.prototype.getPresentationEditor = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.PresentationEditor} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.PresentationEditor, 2));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.PresentationEditor|undefined} value
 * @return {!proto.rv.analytics.UI.MainView} returns this
*/
proto.rv.analytics.UI.MainView.prototype.setPresentationEditor = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.analytics.UI.MainView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView} returns this
 */
proto.rv.analytics.UI.MainView.prototype.clearPresentationEditor = function() {
  return this.setPresentationEditor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.prototype.hasPresentationEditor = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ReflowEditor reflow_editor = 3;
 * @return {?proto.rv.analytics.UI.MainView.ReflowEditor}
 */
proto.rv.analytics.UI.MainView.prototype.getReflowEditor = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.ReflowEditor} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.ReflowEditor, 3));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.ReflowEditor|undefined} value
 * @return {!proto.rv.analytics.UI.MainView} returns this
*/
proto.rv.analytics.UI.MainView.prototype.setReflowEditor = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.analytics.UI.MainView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView} returns this
 */
proto.rv.analytics.UI.MainView.prototype.clearReflowEditor = function() {
  return this.setReflowEditor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.prototype.hasReflowEditor = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Bible bible = 4;
 * @return {?proto.rv.analytics.UI.MainView.Bible}
 */
proto.rv.analytics.UI.MainView.prototype.getBible = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.Bible} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.Bible, 4));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.Bible|undefined} value
 * @return {!proto.rv.analytics.UI.MainView} returns this
*/
proto.rv.analytics.UI.MainView.prototype.setBible = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rv.analytics.UI.MainView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView} returns this
 */
proto.rv.analytics.UI.MainView.prototype.clearBible = function() {
  return this.setBible(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.prototype.hasBible = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional StageEditor stage_editor = 5;
 * @return {?proto.rv.analytics.UI.MainView.StageEditor}
 */
proto.rv.analytics.UI.MainView.prototype.getStageEditor = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.StageEditor} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.StageEditor, 5));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.StageEditor|undefined} value
 * @return {!proto.rv.analytics.UI.MainView} returns this
*/
proto.rv.analytics.UI.MainView.prototype.setStageEditor = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.rv.analytics.UI.MainView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView} returns this
 */
proto.rv.analytics.UI.MainView.prototype.clearStageEditor = function() {
  return this.setStageEditor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.prototype.hasStageEditor = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ThemeEditor theme_editor = 6;
 * @return {?proto.rv.analytics.UI.MainView.ThemeEditor}
 */
proto.rv.analytics.UI.MainView.prototype.getThemeEditor = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.ThemeEditor} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.ThemeEditor, 6));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.ThemeEditor|undefined} value
 * @return {!proto.rv.analytics.UI.MainView} returns this
*/
proto.rv.analytics.UI.MainView.prototype.setThemeEditor = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.rv.analytics.UI.MainView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView} returns this
 */
proto.rv.analytics.UI.MainView.prototype.clearThemeEditor = function() {
  return this.setThemeEditor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.prototype.hasThemeEditor = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional CopyrightEditor copyright_editor = 7;
 * @return {?proto.rv.analytics.UI.MainView.CopyrightEditor}
 */
proto.rv.analytics.UI.MainView.prototype.getCopyrightEditor = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.CopyrightEditor} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.CopyrightEditor, 7));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.CopyrightEditor|undefined} value
 * @return {!proto.rv.analytics.UI.MainView} returns this
*/
proto.rv.analytics.UI.MainView.prototype.setCopyrightEditor = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.rv.analytics.UI.MainView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView} returns this
 */
proto.rv.analytics.UI.MainView.prototype.clearCopyrightEditor = function() {
  return this.setCopyrightEditor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.prototype.hasCopyrightEditor = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional PropsEditor props_editor = 8;
 * @return {?proto.rv.analytics.UI.MainView.PropsEditor}
 */
proto.rv.analytics.UI.MainView.prototype.getPropsEditor = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.PropsEditor} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.PropsEditor, 8));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.PropsEditor|undefined} value
 * @return {!proto.rv.analytics.UI.MainView} returns this
*/
proto.rv.analytics.UI.MainView.prototype.setPropsEditor = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.rv.analytics.UI.MainView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView} returns this
 */
proto.rv.analytics.UI.MainView.prototype.clearPropsEditor = function() {
  return this.setPropsEditor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.prototype.hasPropsEditor = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional MaskEditor mask_editor = 9;
 * @return {?proto.rv.analytics.UI.MainView.MaskEditor}
 */
proto.rv.analytics.UI.MainView.prototype.getMaskEditor = function() {
  return /** @type{?proto.rv.analytics.UI.MainView.MaskEditor} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView.MaskEditor, 9));
};


/**
 * @param {?proto.rv.analytics.UI.MainView.MaskEditor|undefined} value
 * @return {!proto.rv.analytics.UI.MainView} returns this
*/
proto.rv.analytics.UI.MainView.prototype.setMaskEditor = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.rv.analytics.UI.MainView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.MainView} returns this
 */
proto.rv.analytics.UI.MainView.prototype.clearMaskEditor = function() {
  return this.setMaskEditor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.MainView.prototype.hasMaskEditor = function() {
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
proto.rv.analytics.UI.Looks.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.Looks.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1
};

/**
 * @return {proto.rv.analytics.UI.Looks.ComponentCase}
 */
proto.rv.analytics.UI.Looks.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.Looks.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.Looks.oneofGroups_[0]));
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
proto.rv.analytics.UI.Looks.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.Looks.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.Looks} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Looks.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.Looks.Shown.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.Looks}
 */
proto.rv.analytics.UI.Looks.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.Looks;
  return proto.rv.analytics.UI.Looks.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.Looks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.Looks}
 */
proto.rv.analytics.UI.Looks.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.Looks.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.Looks.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
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
proto.rv.analytics.UI.Looks.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.Looks.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.Looks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Looks.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.Looks.Shown.serializeBinaryToWriter
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
proto.rv.analytics.UI.Looks.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.Looks.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.Looks.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Looks.Shown.toObject = function(includeInstance, msg) {
  var f, obj = {
source: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.Looks.Shown}
 */
proto.rv.analytics.UI.Looks.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.Looks.Shown;
  return proto.rv.analytics.UI.Looks.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.Looks.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.Looks.Shown}
 */
proto.rv.analytics.UI.Looks.Shown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.Looks.Shown.Source} */ (reader.readEnum());
      msg.setSource(value);
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
proto.rv.analytics.UI.Looks.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.Looks.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.Looks.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Looks.Shown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
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
proto.rv.analytics.UI.Looks.Shown.Source = {
  SOURCE_UNKNOWN: 0,
  SOURCE_APPLICATION_MENU: 1,
  SOURCE_PRESENTATION_VIEW: 2
};

/**
 * optional Source source = 1;
 * @return {!proto.rv.analytics.UI.Looks.Shown.Source}
 */
proto.rv.analytics.UI.Looks.Shown.prototype.getSource = function() {
  return /** @type {!proto.rv.analytics.UI.Looks.Shown.Source} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.Looks.Shown.Source} value
 * @return {!proto.rv.analytics.UI.Looks.Shown} returns this
 */
proto.rv.analytics.UI.Looks.Shown.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.Looks.Shown}
 */
proto.rv.analytics.UI.Looks.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.Looks.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.Looks.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.Looks.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.Looks} returns this
*/
proto.rv.analytics.UI.Looks.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.Looks.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.Looks} returns this
 */
proto.rv.analytics.UI.Looks.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.Looks.prototype.hasShown = function() {
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
proto.rv.analytics.UI.ScreenConfiguration.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.ScreenConfiguration.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1
};

/**
 * @return {proto.rv.analytics.UI.ScreenConfiguration.ComponentCase}
 */
proto.rv.analytics.UI.ScreenConfiguration.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.ScreenConfiguration.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.ScreenConfiguration.oneofGroups_[0]));
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
proto.rv.analytics.UI.ScreenConfiguration.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.ScreenConfiguration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.ScreenConfiguration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.ScreenConfiguration.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.ScreenConfiguration.Shown.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.ScreenConfiguration}
 */
proto.rv.analytics.UI.ScreenConfiguration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.ScreenConfiguration;
  return proto.rv.analytics.UI.ScreenConfiguration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.ScreenConfiguration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.ScreenConfiguration}
 */
proto.rv.analytics.UI.ScreenConfiguration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.ScreenConfiguration.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.ScreenConfiguration.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
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
proto.rv.analytics.UI.ScreenConfiguration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.ScreenConfiguration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.ScreenConfiguration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.ScreenConfiguration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.ScreenConfiguration.Shown.serializeBinaryToWriter
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
proto.rv.analytics.UI.ScreenConfiguration.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.ScreenConfiguration.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.ScreenConfiguration.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.ScreenConfiguration.Shown.toObject = function(includeInstance, msg) {
  var f, obj = {
source: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.ScreenConfiguration.Shown}
 */
proto.rv.analytics.UI.ScreenConfiguration.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.ScreenConfiguration.Shown;
  return proto.rv.analytics.UI.ScreenConfiguration.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.ScreenConfiguration.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.ScreenConfiguration.Shown}
 */
proto.rv.analytics.UI.ScreenConfiguration.Shown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.ScreenConfiguration.Shown.Source} */ (reader.readEnum());
      msg.setSource(value);
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
proto.rv.analytics.UI.ScreenConfiguration.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.ScreenConfiguration.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.ScreenConfiguration.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.ScreenConfiguration.Shown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
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
proto.rv.analytics.UI.ScreenConfiguration.Shown.Source = {
  SOURCE_UNKNOWN: 0,
  SOURCE_APPLICATION_MENU: 1,
  SOURCE_STAGE: 2
};

/**
 * optional Source source = 1;
 * @return {!proto.rv.analytics.UI.ScreenConfiguration.Shown.Source}
 */
proto.rv.analytics.UI.ScreenConfiguration.Shown.prototype.getSource = function() {
  return /** @type {!proto.rv.analytics.UI.ScreenConfiguration.Shown.Source} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.ScreenConfiguration.Shown.Source} value
 * @return {!proto.rv.analytics.UI.ScreenConfiguration.Shown} returns this
 */
proto.rv.analytics.UI.ScreenConfiguration.Shown.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.ScreenConfiguration.Shown}
 */
proto.rv.analytics.UI.ScreenConfiguration.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.ScreenConfiguration.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.ScreenConfiguration.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.ScreenConfiguration.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.ScreenConfiguration} returns this
*/
proto.rv.analytics.UI.ScreenConfiguration.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.ScreenConfiguration.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.ScreenConfiguration} returns this
 */
proto.rv.analytics.UI.ScreenConfiguration.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.ScreenConfiguration.prototype.hasShown = function() {
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
proto.rv.analytics.UI.LowerRight.oneofGroups_ = [[1,2,3,4,5,6]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.LowerRight.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  TIMERS: 1,
  MESSAGES: 2,
  PROPS: 3,
  STAGE: 4,
  AUDIO_BIN: 5,
  MACROS: 6
};

/**
 * @return {proto.rv.analytics.UI.LowerRight.ComponentCase}
 */
proto.rv.analytics.UI.LowerRight.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.LowerRight.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.LowerRight.oneofGroups_[0]));
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
proto.rv.analytics.UI.LowerRight.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.toObject = function(includeInstance, msg) {
  var f, obj = {
timers: (f = msg.getTimers()) && proto.rv.analytics.UI.LowerRight.Timers.toObject(includeInstance, f),
messages: (f = msg.getMessages()) && proto.rv.analytics.UI.LowerRight.Messages.toObject(includeInstance, f),
props: (f = msg.getProps()) && proto.rv.analytics.UI.LowerRight.Props.toObject(includeInstance, f),
stage: (f = msg.getStage()) && proto.rv.analytics.UI.LowerRight.Stage.toObject(includeInstance, f),
audioBin: (f = msg.getAudioBin()) && proto.rv.analytics.UI.LowerRight.AudioBin.toObject(includeInstance, f),
macros: (f = msg.getMacros()) && proto.rv.analytics.UI.LowerRight.Macros.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.LowerRight}
 */
proto.rv.analytics.UI.LowerRight.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight;
  return proto.rv.analytics.UI.LowerRight.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight}
 */
proto.rv.analytics.UI.LowerRight.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.LowerRight.Timers;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Timers.deserializeBinaryFromReader);
      msg.setTimers(value);
      break;
    case 2:
      var value = new proto.rv.analytics.UI.LowerRight.Messages;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Messages.deserializeBinaryFromReader);
      msg.setMessages(value);
      break;
    case 3:
      var value = new proto.rv.analytics.UI.LowerRight.Props;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Props.deserializeBinaryFromReader);
      msg.setProps(value);
      break;
    case 4:
      var value = new proto.rv.analytics.UI.LowerRight.Stage;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Stage.deserializeBinaryFromReader);
      msg.setStage(value);
      break;
    case 5:
      var value = new proto.rv.analytics.UI.LowerRight.AudioBin;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.AudioBin.deserializeBinaryFromReader);
      msg.setAudioBin(value);
      break;
    case 6:
      var value = new proto.rv.analytics.UI.LowerRight.Macros;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Macros.deserializeBinaryFromReader);
      msg.setMacros(value);
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
proto.rv.analytics.UI.LowerRight.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimers();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.LowerRight.Timers.serializeBinaryToWriter
    );
  }
  f = message.getMessages();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.analytics.UI.LowerRight.Messages.serializeBinaryToWriter
    );
  }
  f = message.getProps();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.analytics.UI.LowerRight.Props.serializeBinaryToWriter
    );
  }
  f = message.getStage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.analytics.UI.LowerRight.Stage.serializeBinaryToWriter
    );
  }
  f = message.getAudioBin();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.analytics.UI.LowerRight.AudioBin.serializeBinaryToWriter
    );
  }
  f = message.getMacros();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.rv.analytics.UI.LowerRight.Macros.serializeBinaryToWriter
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
proto.rv.analytics.UI.LowerRight.Timers.oneofGroups_ = [[1,2,3,4,5,6]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.LowerRight.Timers.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1,
  COLLAPSE: 2,
  EDIT: 3,
  STATE: 4,
  CREATE: 5,
  DELETE: 6
};

/**
 * @return {proto.rv.analytics.UI.LowerRight.Timers.ComponentCase}
 */
proto.rv.analytics.UI.LowerRight.Timers.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.LowerRight.Timers.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.LowerRight.Timers.oneofGroups_[0]));
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
proto.rv.analytics.UI.LowerRight.Timers.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Timers.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Timers} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Timers.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.LowerRight.Timers.Shown.toObject(includeInstance, f),
collapse: (f = msg.getCollapse()) && proto.rv.analytics.UI.LowerRight.Timers.Collapse.toObject(includeInstance, f),
edit: (f = msg.getEdit()) && proto.rv.analytics.UI.LowerRight.Timers.Edit.toObject(includeInstance, f),
state: (f = msg.getState()) && proto.rv.analytics.UI.LowerRight.Timers.State.toObject(includeInstance, f),
create: (f = msg.getCreate()) && proto.rv.analytics.UI.LowerRight.Timers.Create.toObject(includeInstance, f),
pb_delete: (f = msg.getDelete()) && proto.rv.analytics.UI.LowerRight.Timers.Delete.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.LowerRight.Timers}
 */
proto.rv.analytics.UI.LowerRight.Timers.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Timers;
  return proto.rv.analytics.UI.LowerRight.Timers.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Timers} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Timers}
 */
proto.rv.analytics.UI.LowerRight.Timers.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.LowerRight.Timers.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Timers.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
      break;
    case 2:
      var value = new proto.rv.analytics.UI.LowerRight.Timers.Collapse;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Timers.Collapse.deserializeBinaryFromReader);
      msg.setCollapse(value);
      break;
    case 3:
      var value = new proto.rv.analytics.UI.LowerRight.Timers.Edit;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Timers.Edit.deserializeBinaryFromReader);
      msg.setEdit(value);
      break;
    case 4:
      var value = new proto.rv.analytics.UI.LowerRight.Timers.State;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Timers.State.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    case 5:
      var value = new proto.rv.analytics.UI.LowerRight.Timers.Create;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Timers.Create.deserializeBinaryFromReader);
      msg.setCreate(value);
      break;
    case 6:
      var value = new proto.rv.analytics.UI.LowerRight.Timers.Delete;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Timers.Delete.deserializeBinaryFromReader);
      msg.setDelete(value);
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
proto.rv.analytics.UI.LowerRight.Timers.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Timers.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Timers} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Timers.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.LowerRight.Timers.Shown.serializeBinaryToWriter
    );
  }
  f = message.getCollapse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.analytics.UI.LowerRight.Timers.Collapse.serializeBinaryToWriter
    );
  }
  f = message.getEdit();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.analytics.UI.LowerRight.Timers.Edit.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.analytics.UI.LowerRight.Timers.State.serializeBinaryToWriter
    );
  }
  f = message.getCreate();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.analytics.UI.LowerRight.Timers.Create.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.rv.analytics.UI.LowerRight.Timers.Delete.serializeBinaryToWriter
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
proto.rv.analytics.UI.LowerRight.Timers.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Timers.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Timers.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Timers.Shown.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.LowerRight.Timers.Shown}
 */
proto.rv.analytics.UI.LowerRight.Timers.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Timers.Shown;
  return proto.rv.analytics.UI.LowerRight.Timers.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Timers.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Timers.Shown}
 */
proto.rv.analytics.UI.LowerRight.Timers.Shown.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.LowerRight.Timers.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Timers.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Timers.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Timers.Shown.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.LowerRight.Timers.Collapse.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Timers.Collapse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Timers.Collapse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Timers.Collapse.toObject = function(includeInstance, msg) {
  var f, obj = {
state: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.LowerRight.Timers.Collapse}
 */
proto.rv.analytics.UI.LowerRight.Timers.Collapse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Timers.Collapse;
  return proto.rv.analytics.UI.LowerRight.Timers.Collapse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Timers.Collapse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Timers.Collapse}
 */
proto.rv.analytics.UI.LowerRight.Timers.Collapse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.LowerRight.Timers.Collapse.State} */ (reader.readEnum());
      msg.setState(value);
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
proto.rv.analytics.UI.LowerRight.Timers.Collapse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Timers.Collapse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Timers.Collapse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Timers.Collapse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
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
proto.rv.analytics.UI.LowerRight.Timers.Collapse.State = {
  STATE_UNKNOWN: 0,
  STATE_COLLAPSED: 1,
  STATE_EXPANDED: 2
};

/**
 * optional State state = 1;
 * @return {!proto.rv.analytics.UI.LowerRight.Timers.Collapse.State}
 */
proto.rv.analytics.UI.LowerRight.Timers.Collapse.prototype.getState = function() {
  return /** @type {!proto.rv.analytics.UI.LowerRight.Timers.Collapse.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.LowerRight.Timers.Collapse.State} value
 * @return {!proto.rv.analytics.UI.LowerRight.Timers.Collapse} returns this
 */
proto.rv.analytics.UI.LowerRight.Timers.Collapse.prototype.setState = function(value) {
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
proto.rv.analytics.UI.LowerRight.Timers.Edit.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Timers.Edit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Timers.Edit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Timers.Edit.toObject = function(includeInstance, msg) {
  var f, obj = {
field: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.LowerRight.Timers.Edit}
 */
proto.rv.analytics.UI.LowerRight.Timers.Edit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Timers.Edit;
  return proto.rv.analytics.UI.LowerRight.Timers.Edit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Timers.Edit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Timers.Edit}
 */
proto.rv.analytics.UI.LowerRight.Timers.Edit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.LowerRight.Timers.Edit.Field} */ (reader.readEnum());
      msg.setField(value);
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
proto.rv.analytics.UI.LowerRight.Timers.Edit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Timers.Edit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Timers.Edit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Timers.Edit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField();
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
proto.rv.analytics.UI.LowerRight.Timers.Edit.Field = {
  FIELD_UNKNOWN: 0,
  FIELD_TYPE: 1,
  FIELD_VALUE: 2,
  FIELD_OVERRUN: 3,
  FIELD_NAME: 4
};

/**
 * optional Field field = 1;
 * @return {!proto.rv.analytics.UI.LowerRight.Timers.Edit.Field}
 */
proto.rv.analytics.UI.LowerRight.Timers.Edit.prototype.getField = function() {
  return /** @type {!proto.rv.analytics.UI.LowerRight.Timers.Edit.Field} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.LowerRight.Timers.Edit.Field} value
 * @return {!proto.rv.analytics.UI.LowerRight.Timers.Edit} returns this
 */
proto.rv.analytics.UI.LowerRight.Timers.Edit.prototype.setField = function(value) {
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
proto.rv.analytics.UI.LowerRight.Timers.State.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Timers.State.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Timers.State} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Timers.State.toObject = function(includeInstance, msg) {
  var f, obj = {
state: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.LowerRight.Timers.State}
 */
proto.rv.analytics.UI.LowerRight.Timers.State.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Timers.State;
  return proto.rv.analytics.UI.LowerRight.Timers.State.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Timers.State} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Timers.State}
 */
proto.rv.analytics.UI.LowerRight.Timers.State.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.LowerRight.Timers.State.State} */ (reader.readEnum());
      msg.setState(value);
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
proto.rv.analytics.UI.LowerRight.Timers.State.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Timers.State.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Timers.State} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Timers.State.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
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
proto.rv.analytics.UI.LowerRight.Timers.State.State = {
  STATE_UNKNOWN: 0,
  STATE_START: 1,
  STATE_STOP: 2,
  STATE_RESET: 3
};

/**
 * optional State state = 1;
 * @return {!proto.rv.analytics.UI.LowerRight.Timers.State.State}
 */
proto.rv.analytics.UI.LowerRight.Timers.State.prototype.getState = function() {
  return /** @type {!proto.rv.analytics.UI.LowerRight.Timers.State.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.LowerRight.Timers.State.State} value
 * @return {!proto.rv.analytics.UI.LowerRight.Timers.State} returns this
 */
proto.rv.analytics.UI.LowerRight.Timers.State.prototype.setState = function(value) {
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
proto.rv.analytics.UI.LowerRight.Timers.Create.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Timers.Create.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Timers.Create} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Timers.Create.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.LowerRight.Timers.Create}
 */
proto.rv.analytics.UI.LowerRight.Timers.Create.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Timers.Create;
  return proto.rv.analytics.UI.LowerRight.Timers.Create.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Timers.Create} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Timers.Create}
 */
proto.rv.analytics.UI.LowerRight.Timers.Create.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.LowerRight.Timers.Create.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Timers.Create.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Timers.Create} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Timers.Create.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.LowerRight.Timers.Delete.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Timers.Delete.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Timers.Delete} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Timers.Delete.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.LowerRight.Timers.Delete}
 */
proto.rv.analytics.UI.LowerRight.Timers.Delete.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Timers.Delete;
  return proto.rv.analytics.UI.LowerRight.Timers.Delete.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Timers.Delete} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Timers.Delete}
 */
proto.rv.analytics.UI.LowerRight.Timers.Delete.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.LowerRight.Timers.Delete.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Timers.Delete.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Timers.Delete} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Timers.Delete.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.LowerRight.Timers.Shown}
 */
proto.rv.analytics.UI.LowerRight.Timers.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Timers.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Timers.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Timers.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight.Timers} returns this
*/
proto.rv.analytics.UI.LowerRight.Timers.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.LowerRight.Timers.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight.Timers} returns this
 */
proto.rv.analytics.UI.LowerRight.Timers.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.Timers.prototype.hasShown = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Collapse collapse = 2;
 * @return {?proto.rv.analytics.UI.LowerRight.Timers.Collapse}
 */
proto.rv.analytics.UI.LowerRight.Timers.prototype.getCollapse = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Timers.Collapse} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Timers.Collapse, 2));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Timers.Collapse|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight.Timers} returns this
*/
proto.rv.analytics.UI.LowerRight.Timers.prototype.setCollapse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.analytics.UI.LowerRight.Timers.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight.Timers} returns this
 */
proto.rv.analytics.UI.LowerRight.Timers.prototype.clearCollapse = function() {
  return this.setCollapse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.Timers.prototype.hasCollapse = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Edit edit = 3;
 * @return {?proto.rv.analytics.UI.LowerRight.Timers.Edit}
 */
proto.rv.analytics.UI.LowerRight.Timers.prototype.getEdit = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Timers.Edit} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Timers.Edit, 3));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Timers.Edit|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight.Timers} returns this
*/
proto.rv.analytics.UI.LowerRight.Timers.prototype.setEdit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.analytics.UI.LowerRight.Timers.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight.Timers} returns this
 */
proto.rv.analytics.UI.LowerRight.Timers.prototype.clearEdit = function() {
  return this.setEdit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.Timers.prototype.hasEdit = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional State state = 4;
 * @return {?proto.rv.analytics.UI.LowerRight.Timers.State}
 */
proto.rv.analytics.UI.LowerRight.Timers.prototype.getState = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Timers.State} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Timers.State, 4));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Timers.State|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight.Timers} returns this
*/
proto.rv.analytics.UI.LowerRight.Timers.prototype.setState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rv.analytics.UI.LowerRight.Timers.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight.Timers} returns this
 */
proto.rv.analytics.UI.LowerRight.Timers.prototype.clearState = function() {
  return this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.Timers.prototype.hasState = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Create create = 5;
 * @return {?proto.rv.analytics.UI.LowerRight.Timers.Create}
 */
proto.rv.analytics.UI.LowerRight.Timers.prototype.getCreate = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Timers.Create} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Timers.Create, 5));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Timers.Create|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight.Timers} returns this
*/
proto.rv.analytics.UI.LowerRight.Timers.prototype.setCreate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.rv.analytics.UI.LowerRight.Timers.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight.Timers} returns this
 */
proto.rv.analytics.UI.LowerRight.Timers.prototype.clearCreate = function() {
  return this.setCreate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.Timers.prototype.hasCreate = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Delete delete = 6;
 * @return {?proto.rv.analytics.UI.LowerRight.Timers.Delete}
 */
proto.rv.analytics.UI.LowerRight.Timers.prototype.getDelete = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Timers.Delete} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Timers.Delete, 6));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Timers.Delete|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight.Timers} returns this
*/
proto.rv.analytics.UI.LowerRight.Timers.prototype.setDelete = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.rv.analytics.UI.LowerRight.Timers.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight.Timers} returns this
 */
proto.rv.analytics.UI.LowerRight.Timers.prototype.clearDelete = function() {
  return this.setDelete(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.Timers.prototype.hasDelete = function() {
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
proto.rv.analytics.UI.LowerRight.Messages.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.LowerRight.Messages.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1,
  EDIT: 2,
  STATE: 3,
  CREATE: 4,
  DELETE: 5
};

/**
 * @return {proto.rv.analytics.UI.LowerRight.Messages.ComponentCase}
 */
proto.rv.analytics.UI.LowerRight.Messages.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.LowerRight.Messages.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.LowerRight.Messages.oneofGroups_[0]));
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
proto.rv.analytics.UI.LowerRight.Messages.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Messages.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Messages} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Messages.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.LowerRight.Messages.Shown.toObject(includeInstance, f),
edit: (f = msg.getEdit()) && proto.rv.analytics.UI.LowerRight.Messages.Edit.toObject(includeInstance, f),
state: (f = msg.getState()) && proto.rv.analytics.UI.LowerRight.Messages.State.toObject(includeInstance, f),
create: (f = msg.getCreate()) && proto.rv.analytics.UI.LowerRight.Messages.Create.toObject(includeInstance, f),
pb_delete: (f = msg.getDelete()) && proto.rv.analytics.UI.LowerRight.Messages.Delete.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.LowerRight.Messages}
 */
proto.rv.analytics.UI.LowerRight.Messages.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Messages;
  return proto.rv.analytics.UI.LowerRight.Messages.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Messages} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Messages}
 */
proto.rv.analytics.UI.LowerRight.Messages.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.LowerRight.Messages.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Messages.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
      break;
    case 2:
      var value = new proto.rv.analytics.UI.LowerRight.Messages.Edit;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Messages.Edit.deserializeBinaryFromReader);
      msg.setEdit(value);
      break;
    case 3:
      var value = new proto.rv.analytics.UI.LowerRight.Messages.State;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Messages.State.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    case 4:
      var value = new proto.rv.analytics.UI.LowerRight.Messages.Create;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Messages.Create.deserializeBinaryFromReader);
      msg.setCreate(value);
      break;
    case 5:
      var value = new proto.rv.analytics.UI.LowerRight.Messages.Delete;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Messages.Delete.deserializeBinaryFromReader);
      msg.setDelete(value);
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
proto.rv.analytics.UI.LowerRight.Messages.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Messages.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Messages} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Messages.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.LowerRight.Messages.Shown.serializeBinaryToWriter
    );
  }
  f = message.getEdit();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.analytics.UI.LowerRight.Messages.Edit.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.analytics.UI.LowerRight.Messages.State.serializeBinaryToWriter
    );
  }
  f = message.getCreate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.analytics.UI.LowerRight.Messages.Create.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.analytics.UI.LowerRight.Messages.Delete.serializeBinaryToWriter
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
proto.rv.analytics.UI.LowerRight.Messages.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Messages.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Messages.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Messages.Shown.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.LowerRight.Messages.Shown}
 */
proto.rv.analytics.UI.LowerRight.Messages.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Messages.Shown;
  return proto.rv.analytics.UI.LowerRight.Messages.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Messages.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Messages.Shown}
 */
proto.rv.analytics.UI.LowerRight.Messages.Shown.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.LowerRight.Messages.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Messages.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Messages.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Messages.Shown.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.LowerRight.Messages.Edit.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Messages.Edit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Messages.Edit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Messages.Edit.toObject = function(includeInstance, msg) {
  var f, obj = {
action: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.LowerRight.Messages.Edit}
 */
proto.rv.analytics.UI.LowerRight.Messages.Edit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Messages.Edit;
  return proto.rv.analytics.UI.LowerRight.Messages.Edit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Messages.Edit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Messages.Edit}
 */
proto.rv.analytics.UI.LowerRight.Messages.Edit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.LowerRight.Messages.Edit.Action} */ (reader.readEnum());
      msg.setAction(value);
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
proto.rv.analytics.UI.LowerRight.Messages.Edit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Messages.Edit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Messages.Edit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Messages.Edit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
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
proto.rv.analytics.UI.LowerRight.Messages.Edit.Action = {
  ACTION_UNKNOWN: 0,
  ACTION_ADD_TEXT_TOKEN: 1,
  ACTION_ADD_TIMER_TOKEN: 2,
  ACTION_ADD_CUSTOM_TOKEN: 3,
  ACTION_SET_THEME: 4,
  ACTION_SET_TEXT: 5,
  ACTION_SET_WEB_NOTIFICATION: 6,
  ACTION_SET_DISMISS_BEHAVIOR: 7
};

/**
 * optional Action action = 1;
 * @return {!proto.rv.analytics.UI.LowerRight.Messages.Edit.Action}
 */
proto.rv.analytics.UI.LowerRight.Messages.Edit.prototype.getAction = function() {
  return /** @type {!proto.rv.analytics.UI.LowerRight.Messages.Edit.Action} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.LowerRight.Messages.Edit.Action} value
 * @return {!proto.rv.analytics.UI.LowerRight.Messages.Edit} returns this
 */
proto.rv.analytics.UI.LowerRight.Messages.Edit.prototype.setAction = function(value) {
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
proto.rv.analytics.UI.LowerRight.Messages.State.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Messages.State.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Messages.State} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Messages.State.toObject = function(includeInstance, msg) {
  var f, obj = {
state: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.LowerRight.Messages.State}
 */
proto.rv.analytics.UI.LowerRight.Messages.State.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Messages.State;
  return proto.rv.analytics.UI.LowerRight.Messages.State.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Messages.State} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Messages.State}
 */
proto.rv.analytics.UI.LowerRight.Messages.State.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.LowerRight.Messages.State.State} */ (reader.readEnum());
      msg.setState(value);
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
proto.rv.analytics.UI.LowerRight.Messages.State.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Messages.State.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Messages.State} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Messages.State.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
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
proto.rv.analytics.UI.LowerRight.Messages.State.State = {
  STATE_UNKNOWN: 0,
  STATE_SHOW: 1,
  STATE_CLEAR: 2
};

/**
 * optional State state = 1;
 * @return {!proto.rv.analytics.UI.LowerRight.Messages.State.State}
 */
proto.rv.analytics.UI.LowerRight.Messages.State.prototype.getState = function() {
  return /** @type {!proto.rv.analytics.UI.LowerRight.Messages.State.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.LowerRight.Messages.State.State} value
 * @return {!proto.rv.analytics.UI.LowerRight.Messages.State} returns this
 */
proto.rv.analytics.UI.LowerRight.Messages.State.prototype.setState = function(value) {
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
proto.rv.analytics.UI.LowerRight.Messages.Create.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Messages.Create.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Messages.Create} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Messages.Create.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.LowerRight.Messages.Create}
 */
proto.rv.analytics.UI.LowerRight.Messages.Create.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Messages.Create;
  return proto.rv.analytics.UI.LowerRight.Messages.Create.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Messages.Create} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Messages.Create}
 */
proto.rv.analytics.UI.LowerRight.Messages.Create.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.LowerRight.Messages.Create.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Messages.Create.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Messages.Create} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Messages.Create.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.LowerRight.Messages.Delete.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Messages.Delete.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Messages.Delete} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Messages.Delete.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.LowerRight.Messages.Delete}
 */
proto.rv.analytics.UI.LowerRight.Messages.Delete.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Messages.Delete;
  return proto.rv.analytics.UI.LowerRight.Messages.Delete.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Messages.Delete} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Messages.Delete}
 */
proto.rv.analytics.UI.LowerRight.Messages.Delete.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.LowerRight.Messages.Delete.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Messages.Delete.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Messages.Delete} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Messages.Delete.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.LowerRight.Messages.Shown}
 */
proto.rv.analytics.UI.LowerRight.Messages.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Messages.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Messages.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Messages.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight.Messages} returns this
*/
proto.rv.analytics.UI.LowerRight.Messages.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.LowerRight.Messages.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight.Messages} returns this
 */
proto.rv.analytics.UI.LowerRight.Messages.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.Messages.prototype.hasShown = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Edit edit = 2;
 * @return {?proto.rv.analytics.UI.LowerRight.Messages.Edit}
 */
proto.rv.analytics.UI.LowerRight.Messages.prototype.getEdit = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Messages.Edit} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Messages.Edit, 2));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Messages.Edit|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight.Messages} returns this
*/
proto.rv.analytics.UI.LowerRight.Messages.prototype.setEdit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.analytics.UI.LowerRight.Messages.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight.Messages} returns this
 */
proto.rv.analytics.UI.LowerRight.Messages.prototype.clearEdit = function() {
  return this.setEdit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.Messages.prototype.hasEdit = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional State state = 3;
 * @return {?proto.rv.analytics.UI.LowerRight.Messages.State}
 */
proto.rv.analytics.UI.LowerRight.Messages.prototype.getState = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Messages.State} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Messages.State, 3));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Messages.State|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight.Messages} returns this
*/
proto.rv.analytics.UI.LowerRight.Messages.prototype.setState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.analytics.UI.LowerRight.Messages.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight.Messages} returns this
 */
proto.rv.analytics.UI.LowerRight.Messages.prototype.clearState = function() {
  return this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.Messages.prototype.hasState = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Create create = 4;
 * @return {?proto.rv.analytics.UI.LowerRight.Messages.Create}
 */
proto.rv.analytics.UI.LowerRight.Messages.prototype.getCreate = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Messages.Create} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Messages.Create, 4));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Messages.Create|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight.Messages} returns this
*/
proto.rv.analytics.UI.LowerRight.Messages.prototype.setCreate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rv.analytics.UI.LowerRight.Messages.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight.Messages} returns this
 */
proto.rv.analytics.UI.LowerRight.Messages.prototype.clearCreate = function() {
  return this.setCreate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.Messages.prototype.hasCreate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Delete delete = 5;
 * @return {?proto.rv.analytics.UI.LowerRight.Messages.Delete}
 */
proto.rv.analytics.UI.LowerRight.Messages.prototype.getDelete = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Messages.Delete} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Messages.Delete, 5));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Messages.Delete|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight.Messages} returns this
*/
proto.rv.analytics.UI.LowerRight.Messages.prototype.setDelete = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.rv.analytics.UI.LowerRight.Messages.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight.Messages} returns this
 */
proto.rv.analytics.UI.LowerRight.Messages.prototype.clearDelete = function() {
  return this.setDelete(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.Messages.prototype.hasDelete = function() {
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
proto.rv.analytics.UI.LowerRight.Props.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.LowerRight.Props.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1,
  TRANSITION: 2,
  STATE: 3,
  CREATE: 4,
  DELETE: 5
};

/**
 * @return {proto.rv.analytics.UI.LowerRight.Props.ComponentCase}
 */
proto.rv.analytics.UI.LowerRight.Props.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.LowerRight.Props.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.LowerRight.Props.oneofGroups_[0]));
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
proto.rv.analytics.UI.LowerRight.Props.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Props.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Props} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Props.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.LowerRight.Props.Shown.toObject(includeInstance, f),
transition: (f = msg.getTransition()) && proto.rv.analytics.UI.LowerRight.Props.Transition.toObject(includeInstance, f),
state: (f = msg.getState()) && proto.rv.analytics.UI.LowerRight.Props.State.toObject(includeInstance, f),
create: (f = msg.getCreate()) && proto.rv.analytics.UI.LowerRight.Props.Create.toObject(includeInstance, f),
pb_delete: (f = msg.getDelete()) && proto.rv.analytics.UI.LowerRight.Props.Delete.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.LowerRight.Props}
 */
proto.rv.analytics.UI.LowerRight.Props.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Props;
  return proto.rv.analytics.UI.LowerRight.Props.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Props} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Props}
 */
proto.rv.analytics.UI.LowerRight.Props.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.LowerRight.Props.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Props.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
      break;
    case 2:
      var value = new proto.rv.analytics.UI.LowerRight.Props.Transition;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Props.Transition.deserializeBinaryFromReader);
      msg.setTransition(value);
      break;
    case 3:
      var value = new proto.rv.analytics.UI.LowerRight.Props.State;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Props.State.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    case 4:
      var value = new proto.rv.analytics.UI.LowerRight.Props.Create;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Props.Create.deserializeBinaryFromReader);
      msg.setCreate(value);
      break;
    case 5:
      var value = new proto.rv.analytics.UI.LowerRight.Props.Delete;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Props.Delete.deserializeBinaryFromReader);
      msg.setDelete(value);
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
proto.rv.analytics.UI.LowerRight.Props.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Props.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Props} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Props.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.LowerRight.Props.Shown.serializeBinaryToWriter
    );
  }
  f = message.getTransition();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.analytics.UI.LowerRight.Props.Transition.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.analytics.UI.LowerRight.Props.State.serializeBinaryToWriter
    );
  }
  f = message.getCreate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.analytics.UI.LowerRight.Props.Create.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.analytics.UI.LowerRight.Props.Delete.serializeBinaryToWriter
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
proto.rv.analytics.UI.LowerRight.Props.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Props.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Props.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Props.Shown.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.LowerRight.Props.Shown}
 */
proto.rv.analytics.UI.LowerRight.Props.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Props.Shown;
  return proto.rv.analytics.UI.LowerRight.Props.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Props.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Props.Shown}
 */
proto.rv.analytics.UI.LowerRight.Props.Shown.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.LowerRight.Props.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Props.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Props.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Props.Shown.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.LowerRight.Props.Transition.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Props.Transition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Props.Transition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Props.Transition.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.LowerRight.Props.Transition}
 */
proto.rv.analytics.UI.LowerRight.Props.Transition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Props.Transition;
  return proto.rv.analytics.UI.LowerRight.Props.Transition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Props.Transition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Props.Transition}
 */
proto.rv.analytics.UI.LowerRight.Props.Transition.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.LowerRight.Props.Transition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Props.Transition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Props.Transition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Props.Transition.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.LowerRight.Props.State.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Props.State.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Props.State} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Props.State.toObject = function(includeInstance, msg) {
  var f, obj = {
state: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.LowerRight.Props.State}
 */
proto.rv.analytics.UI.LowerRight.Props.State.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Props.State;
  return proto.rv.analytics.UI.LowerRight.Props.State.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Props.State} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Props.State}
 */
proto.rv.analytics.UI.LowerRight.Props.State.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.LowerRight.Props.State.State} */ (reader.readEnum());
      msg.setState(value);
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
proto.rv.analytics.UI.LowerRight.Props.State.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Props.State.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Props.State} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Props.State.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
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
proto.rv.analytics.UI.LowerRight.Props.State.State = {
  STATE_UNKNOWN: 0,
  STATE_SHOW: 1,
  STATE_CLEAR: 2
};

/**
 * optional State state = 1;
 * @return {!proto.rv.analytics.UI.LowerRight.Props.State.State}
 */
proto.rv.analytics.UI.LowerRight.Props.State.prototype.getState = function() {
  return /** @type {!proto.rv.analytics.UI.LowerRight.Props.State.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.LowerRight.Props.State.State} value
 * @return {!proto.rv.analytics.UI.LowerRight.Props.State} returns this
 */
proto.rv.analytics.UI.LowerRight.Props.State.prototype.setState = function(value) {
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
proto.rv.analytics.UI.LowerRight.Props.Create.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Props.Create.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Props.Create} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Props.Create.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.LowerRight.Props.Create}
 */
proto.rv.analytics.UI.LowerRight.Props.Create.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Props.Create;
  return proto.rv.analytics.UI.LowerRight.Props.Create.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Props.Create} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Props.Create}
 */
proto.rv.analytics.UI.LowerRight.Props.Create.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.LowerRight.Props.Create.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Props.Create.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Props.Create} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Props.Create.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.LowerRight.Props.Delete.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Props.Delete.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Props.Delete} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Props.Delete.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.LowerRight.Props.Delete}
 */
proto.rv.analytics.UI.LowerRight.Props.Delete.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Props.Delete;
  return proto.rv.analytics.UI.LowerRight.Props.Delete.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Props.Delete} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Props.Delete}
 */
proto.rv.analytics.UI.LowerRight.Props.Delete.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.LowerRight.Props.Delete.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Props.Delete.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Props.Delete} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Props.Delete.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.LowerRight.Props.Shown}
 */
proto.rv.analytics.UI.LowerRight.Props.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Props.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Props.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Props.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight.Props} returns this
*/
proto.rv.analytics.UI.LowerRight.Props.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.LowerRight.Props.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight.Props} returns this
 */
proto.rv.analytics.UI.LowerRight.Props.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.Props.prototype.hasShown = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Transition transition = 2;
 * @return {?proto.rv.analytics.UI.LowerRight.Props.Transition}
 */
proto.rv.analytics.UI.LowerRight.Props.prototype.getTransition = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Props.Transition} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Props.Transition, 2));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Props.Transition|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight.Props} returns this
*/
proto.rv.analytics.UI.LowerRight.Props.prototype.setTransition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.analytics.UI.LowerRight.Props.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight.Props} returns this
 */
proto.rv.analytics.UI.LowerRight.Props.prototype.clearTransition = function() {
  return this.setTransition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.Props.prototype.hasTransition = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional State state = 3;
 * @return {?proto.rv.analytics.UI.LowerRight.Props.State}
 */
proto.rv.analytics.UI.LowerRight.Props.prototype.getState = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Props.State} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Props.State, 3));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Props.State|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight.Props} returns this
*/
proto.rv.analytics.UI.LowerRight.Props.prototype.setState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.analytics.UI.LowerRight.Props.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight.Props} returns this
 */
proto.rv.analytics.UI.LowerRight.Props.prototype.clearState = function() {
  return this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.Props.prototype.hasState = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Create create = 4;
 * @return {?proto.rv.analytics.UI.LowerRight.Props.Create}
 */
proto.rv.analytics.UI.LowerRight.Props.prototype.getCreate = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Props.Create} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Props.Create, 4));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Props.Create|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight.Props} returns this
*/
proto.rv.analytics.UI.LowerRight.Props.prototype.setCreate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rv.analytics.UI.LowerRight.Props.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight.Props} returns this
 */
proto.rv.analytics.UI.LowerRight.Props.prototype.clearCreate = function() {
  return this.setCreate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.Props.prototype.hasCreate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Delete delete = 5;
 * @return {?proto.rv.analytics.UI.LowerRight.Props.Delete}
 */
proto.rv.analytics.UI.LowerRight.Props.prototype.getDelete = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Props.Delete} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Props.Delete, 5));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Props.Delete|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight.Props} returns this
*/
proto.rv.analytics.UI.LowerRight.Props.prototype.setDelete = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.rv.analytics.UI.LowerRight.Props.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight.Props} returns this
 */
proto.rv.analytics.UI.LowerRight.Props.prototype.clearDelete = function() {
  return this.setDelete(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.Props.prototype.hasDelete = function() {
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
proto.rv.analytics.UI.LowerRight.Stage.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.LowerRight.Stage.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1,
  CHANGE_LAYOUT: 2,
  MESSAGE_STATE: 3,
  CONFIGURE_SCREENS: 4,
  EDIT_LAYOUTS: 5
};

/**
 * @return {proto.rv.analytics.UI.LowerRight.Stage.ComponentCase}
 */
proto.rv.analytics.UI.LowerRight.Stage.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.LowerRight.Stage.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.LowerRight.Stage.oneofGroups_[0]));
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
proto.rv.analytics.UI.LowerRight.Stage.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Stage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Stage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Stage.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.LowerRight.Stage.Shown.toObject(includeInstance, f),
changeLayout: (f = msg.getChangeLayout()) && proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout.toObject(includeInstance, f),
messageState: (f = msg.getMessageState()) && proto.rv.analytics.UI.LowerRight.Stage.MessageState.toObject(includeInstance, f),
configureScreens: (f = msg.getConfigureScreens()) && proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens.toObject(includeInstance, f),
editLayouts: (f = msg.getEditLayouts()) && proto.rv.analytics.UI.LowerRight.Stage.EditLayouts.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.LowerRight.Stage}
 */
proto.rv.analytics.UI.LowerRight.Stage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Stage;
  return proto.rv.analytics.UI.LowerRight.Stage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Stage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Stage}
 */
proto.rv.analytics.UI.LowerRight.Stage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.LowerRight.Stage.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Stage.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
      break;
    case 2:
      var value = new proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout.deserializeBinaryFromReader);
      msg.setChangeLayout(value);
      break;
    case 3:
      var value = new proto.rv.analytics.UI.LowerRight.Stage.MessageState;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Stage.MessageState.deserializeBinaryFromReader);
      msg.setMessageState(value);
      break;
    case 4:
      var value = new proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens.deserializeBinaryFromReader);
      msg.setConfigureScreens(value);
      break;
    case 5:
      var value = new proto.rv.analytics.UI.LowerRight.Stage.EditLayouts;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Stage.EditLayouts.deserializeBinaryFromReader);
      msg.setEditLayouts(value);
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
proto.rv.analytics.UI.LowerRight.Stage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Stage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Stage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Stage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.LowerRight.Stage.Shown.serializeBinaryToWriter
    );
  }
  f = message.getChangeLayout();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout.serializeBinaryToWriter
    );
  }
  f = message.getMessageState();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.analytics.UI.LowerRight.Stage.MessageState.serializeBinaryToWriter
    );
  }
  f = message.getConfigureScreens();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens.serializeBinaryToWriter
    );
  }
  f = message.getEditLayouts();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.analytics.UI.LowerRight.Stage.EditLayouts.serializeBinaryToWriter
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
proto.rv.analytics.UI.LowerRight.Stage.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Stage.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Stage.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Stage.Shown.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.LowerRight.Stage.Shown}
 */
proto.rv.analytics.UI.LowerRight.Stage.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Stage.Shown;
  return proto.rv.analytics.UI.LowerRight.Stage.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Stage.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Stage.Shown}
 */
proto.rv.analytics.UI.LowerRight.Stage.Shown.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.LowerRight.Stage.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Stage.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Stage.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Stage.Shown.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout}
 */
proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout;
  return proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout}
 */
proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.LowerRight.Stage.MessageState.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Stage.MessageState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Stage.MessageState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Stage.MessageState.toObject = function(includeInstance, msg) {
  var f, obj = {
state: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.LowerRight.Stage.MessageState}
 */
proto.rv.analytics.UI.LowerRight.Stage.MessageState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Stage.MessageState;
  return proto.rv.analytics.UI.LowerRight.Stage.MessageState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Stage.MessageState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Stage.MessageState}
 */
proto.rv.analytics.UI.LowerRight.Stage.MessageState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.LowerRight.Stage.MessageState.State} */ (reader.readEnum());
      msg.setState(value);
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
proto.rv.analytics.UI.LowerRight.Stage.MessageState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Stage.MessageState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Stage.MessageState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Stage.MessageState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
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
proto.rv.analytics.UI.LowerRight.Stage.MessageState.State = {
  STATE_UNKNOWN: 0,
  STATE_SHOW: 1,
  STATE_CLEAR: 2
};

/**
 * optional State state = 1;
 * @return {!proto.rv.analytics.UI.LowerRight.Stage.MessageState.State}
 */
proto.rv.analytics.UI.LowerRight.Stage.MessageState.prototype.getState = function() {
  return /** @type {!proto.rv.analytics.UI.LowerRight.Stage.MessageState.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.LowerRight.Stage.MessageState.State} value
 * @return {!proto.rv.analytics.UI.LowerRight.Stage.MessageState} returns this
 */
proto.rv.analytics.UI.LowerRight.Stage.MessageState.prototype.setState = function(value) {
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
proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens}
 */
proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens;
  return proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens}
 */
proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.LowerRight.Stage.EditLayouts.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Stage.EditLayouts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Stage.EditLayouts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Stage.EditLayouts.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.LowerRight.Stage.EditLayouts}
 */
proto.rv.analytics.UI.LowerRight.Stage.EditLayouts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Stage.EditLayouts;
  return proto.rv.analytics.UI.LowerRight.Stage.EditLayouts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Stage.EditLayouts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Stage.EditLayouts}
 */
proto.rv.analytics.UI.LowerRight.Stage.EditLayouts.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.LowerRight.Stage.EditLayouts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Stage.EditLayouts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Stage.EditLayouts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Stage.EditLayouts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.LowerRight.Stage.Shown}
 */
proto.rv.analytics.UI.LowerRight.Stage.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Stage.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Stage.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Stage.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight.Stage} returns this
*/
proto.rv.analytics.UI.LowerRight.Stage.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.LowerRight.Stage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight.Stage} returns this
 */
proto.rv.analytics.UI.LowerRight.Stage.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.Stage.prototype.hasShown = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ChangeLayout change_layout = 2;
 * @return {?proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout}
 */
proto.rv.analytics.UI.LowerRight.Stage.prototype.getChangeLayout = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout, 2));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Stage.ChangeLayout|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight.Stage} returns this
*/
proto.rv.analytics.UI.LowerRight.Stage.prototype.setChangeLayout = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.analytics.UI.LowerRight.Stage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight.Stage} returns this
 */
proto.rv.analytics.UI.LowerRight.Stage.prototype.clearChangeLayout = function() {
  return this.setChangeLayout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.Stage.prototype.hasChangeLayout = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MessageState message_state = 3;
 * @return {?proto.rv.analytics.UI.LowerRight.Stage.MessageState}
 */
proto.rv.analytics.UI.LowerRight.Stage.prototype.getMessageState = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Stage.MessageState} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Stage.MessageState, 3));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Stage.MessageState|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight.Stage} returns this
*/
proto.rv.analytics.UI.LowerRight.Stage.prototype.setMessageState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.analytics.UI.LowerRight.Stage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight.Stage} returns this
 */
proto.rv.analytics.UI.LowerRight.Stage.prototype.clearMessageState = function() {
  return this.setMessageState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.Stage.prototype.hasMessageState = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ConfigureScreens configure_screens = 4;
 * @return {?proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens}
 */
proto.rv.analytics.UI.LowerRight.Stage.prototype.getConfigureScreens = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens, 4));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Stage.ConfigureScreens|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight.Stage} returns this
*/
proto.rv.analytics.UI.LowerRight.Stage.prototype.setConfigureScreens = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rv.analytics.UI.LowerRight.Stage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight.Stage} returns this
 */
proto.rv.analytics.UI.LowerRight.Stage.prototype.clearConfigureScreens = function() {
  return this.setConfigureScreens(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.Stage.prototype.hasConfigureScreens = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional EditLayouts edit_layouts = 5;
 * @return {?proto.rv.analytics.UI.LowerRight.Stage.EditLayouts}
 */
proto.rv.analytics.UI.LowerRight.Stage.prototype.getEditLayouts = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Stage.EditLayouts} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Stage.EditLayouts, 5));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Stage.EditLayouts|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight.Stage} returns this
*/
proto.rv.analytics.UI.LowerRight.Stage.prototype.setEditLayouts = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.rv.analytics.UI.LowerRight.Stage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight.Stage} returns this
 */
proto.rv.analytics.UI.LowerRight.Stage.prototype.clearEditLayouts = function() {
  return this.setEditLayouts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.Stage.prototype.hasEditLayouts = function() {
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
proto.rv.analytics.UI.LowerRight.AudioBin.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.AudioBin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.AudioBin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.AudioBin.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.LowerRight.AudioBin}
 */
proto.rv.analytics.UI.LowerRight.AudioBin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.AudioBin;
  return proto.rv.analytics.UI.LowerRight.AudioBin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.AudioBin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.AudioBin}
 */
proto.rv.analytics.UI.LowerRight.AudioBin.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.LowerRight.AudioBin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.AudioBin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.AudioBin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.AudioBin.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.LowerRight.Macros.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.LowerRight.Macros.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1,
  TRIGGER: 2,
  CREATE: 3,
  DELETE: 4
};

/**
 * @return {proto.rv.analytics.UI.LowerRight.Macros.ComponentCase}
 */
proto.rv.analytics.UI.LowerRight.Macros.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.LowerRight.Macros.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.LowerRight.Macros.oneofGroups_[0]));
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
proto.rv.analytics.UI.LowerRight.Macros.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Macros.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Macros} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Macros.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.LowerRight.Macros.Shown.toObject(includeInstance, f),
trigger: (f = msg.getTrigger()) && proto.rv.analytics.UI.LowerRight.Macros.Trigger.toObject(includeInstance, f),
create: (f = msg.getCreate()) && proto.rv.analytics.UI.LowerRight.Macros.Create.toObject(includeInstance, f),
pb_delete: (f = msg.getDelete()) && proto.rv.analytics.UI.LowerRight.Macros.Delete.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.LowerRight.Macros}
 */
proto.rv.analytics.UI.LowerRight.Macros.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Macros;
  return proto.rv.analytics.UI.LowerRight.Macros.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Macros} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Macros}
 */
proto.rv.analytics.UI.LowerRight.Macros.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.LowerRight.Macros.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Macros.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
      break;
    case 2:
      var value = new proto.rv.analytics.UI.LowerRight.Macros.Trigger;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Macros.Trigger.deserializeBinaryFromReader);
      msg.setTrigger(value);
      break;
    case 3:
      var value = new proto.rv.analytics.UI.LowerRight.Macros.Create;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Macros.Create.deserializeBinaryFromReader);
      msg.setCreate(value);
      break;
    case 4:
      var value = new proto.rv.analytics.UI.LowerRight.Macros.Delete;
      reader.readMessage(value,proto.rv.analytics.UI.LowerRight.Macros.Delete.deserializeBinaryFromReader);
      msg.setDelete(value);
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
proto.rv.analytics.UI.LowerRight.Macros.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Macros.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Macros} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Macros.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.LowerRight.Macros.Shown.serializeBinaryToWriter
    );
  }
  f = message.getTrigger();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.analytics.UI.LowerRight.Macros.Trigger.serializeBinaryToWriter
    );
  }
  f = message.getCreate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.analytics.UI.LowerRight.Macros.Create.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.analytics.UI.LowerRight.Macros.Delete.serializeBinaryToWriter
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
proto.rv.analytics.UI.LowerRight.Macros.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Macros.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Macros.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Macros.Shown.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.LowerRight.Macros.Shown}
 */
proto.rv.analytics.UI.LowerRight.Macros.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Macros.Shown;
  return proto.rv.analytics.UI.LowerRight.Macros.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Macros.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Macros.Shown}
 */
proto.rv.analytics.UI.LowerRight.Macros.Shown.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.LowerRight.Macros.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Macros.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Macros.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Macros.Shown.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.LowerRight.Macros.Trigger.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Macros.Trigger.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Macros.Trigger} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Macros.Trigger.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.LowerRight.Macros.Trigger}
 */
proto.rv.analytics.UI.LowerRight.Macros.Trigger.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Macros.Trigger;
  return proto.rv.analytics.UI.LowerRight.Macros.Trigger.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Macros.Trigger} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Macros.Trigger}
 */
proto.rv.analytics.UI.LowerRight.Macros.Trigger.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.LowerRight.Macros.Trigger.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Macros.Trigger.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Macros.Trigger} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Macros.Trigger.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.LowerRight.Macros.Create.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Macros.Create.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Macros.Create} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Macros.Create.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.LowerRight.Macros.Create}
 */
proto.rv.analytics.UI.LowerRight.Macros.Create.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Macros.Create;
  return proto.rv.analytics.UI.LowerRight.Macros.Create.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Macros.Create} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Macros.Create}
 */
proto.rv.analytics.UI.LowerRight.Macros.Create.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.LowerRight.Macros.Create.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Macros.Create.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Macros.Create} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Macros.Create.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.LowerRight.Macros.Delete.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.LowerRight.Macros.Delete.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.LowerRight.Macros.Delete} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Macros.Delete.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.LowerRight.Macros.Delete}
 */
proto.rv.analytics.UI.LowerRight.Macros.Delete.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.LowerRight.Macros.Delete;
  return proto.rv.analytics.UI.LowerRight.Macros.Delete.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.LowerRight.Macros.Delete} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.LowerRight.Macros.Delete}
 */
proto.rv.analytics.UI.LowerRight.Macros.Delete.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.LowerRight.Macros.Delete.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.LowerRight.Macros.Delete.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.LowerRight.Macros.Delete} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.LowerRight.Macros.Delete.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.LowerRight.Macros.Shown}
 */
proto.rv.analytics.UI.LowerRight.Macros.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Macros.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Macros.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Macros.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight.Macros} returns this
*/
proto.rv.analytics.UI.LowerRight.Macros.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.LowerRight.Macros.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight.Macros} returns this
 */
proto.rv.analytics.UI.LowerRight.Macros.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.Macros.prototype.hasShown = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Trigger trigger = 2;
 * @return {?proto.rv.analytics.UI.LowerRight.Macros.Trigger}
 */
proto.rv.analytics.UI.LowerRight.Macros.prototype.getTrigger = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Macros.Trigger} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Macros.Trigger, 2));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Macros.Trigger|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight.Macros} returns this
*/
proto.rv.analytics.UI.LowerRight.Macros.prototype.setTrigger = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.analytics.UI.LowerRight.Macros.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight.Macros} returns this
 */
proto.rv.analytics.UI.LowerRight.Macros.prototype.clearTrigger = function() {
  return this.setTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.Macros.prototype.hasTrigger = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Create create = 3;
 * @return {?proto.rv.analytics.UI.LowerRight.Macros.Create}
 */
proto.rv.analytics.UI.LowerRight.Macros.prototype.getCreate = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Macros.Create} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Macros.Create, 3));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Macros.Create|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight.Macros} returns this
*/
proto.rv.analytics.UI.LowerRight.Macros.prototype.setCreate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.analytics.UI.LowerRight.Macros.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight.Macros} returns this
 */
proto.rv.analytics.UI.LowerRight.Macros.prototype.clearCreate = function() {
  return this.setCreate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.Macros.prototype.hasCreate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Delete delete = 4;
 * @return {?proto.rv.analytics.UI.LowerRight.Macros.Delete}
 */
proto.rv.analytics.UI.LowerRight.Macros.prototype.getDelete = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Macros.Delete} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Macros.Delete, 4));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Macros.Delete|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight.Macros} returns this
*/
proto.rv.analytics.UI.LowerRight.Macros.prototype.setDelete = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rv.analytics.UI.LowerRight.Macros.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight.Macros} returns this
 */
proto.rv.analytics.UI.LowerRight.Macros.prototype.clearDelete = function() {
  return this.setDelete(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.Macros.prototype.hasDelete = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Timers timers = 1;
 * @return {?proto.rv.analytics.UI.LowerRight.Timers}
 */
proto.rv.analytics.UI.LowerRight.prototype.getTimers = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Timers} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Timers, 1));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Timers|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight} returns this
*/
proto.rv.analytics.UI.LowerRight.prototype.setTimers = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.LowerRight.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight} returns this
 */
proto.rv.analytics.UI.LowerRight.prototype.clearTimers = function() {
  return this.setTimers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.prototype.hasTimers = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Messages messages = 2;
 * @return {?proto.rv.analytics.UI.LowerRight.Messages}
 */
proto.rv.analytics.UI.LowerRight.prototype.getMessages = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Messages} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Messages, 2));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Messages|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight} returns this
*/
proto.rv.analytics.UI.LowerRight.prototype.setMessages = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.analytics.UI.LowerRight.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight} returns this
 */
proto.rv.analytics.UI.LowerRight.prototype.clearMessages = function() {
  return this.setMessages(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.prototype.hasMessages = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Props props = 3;
 * @return {?proto.rv.analytics.UI.LowerRight.Props}
 */
proto.rv.analytics.UI.LowerRight.prototype.getProps = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Props} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Props, 3));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Props|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight} returns this
*/
proto.rv.analytics.UI.LowerRight.prototype.setProps = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.analytics.UI.LowerRight.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight} returns this
 */
proto.rv.analytics.UI.LowerRight.prototype.clearProps = function() {
  return this.setProps(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.prototype.hasProps = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Stage stage = 4;
 * @return {?proto.rv.analytics.UI.LowerRight.Stage}
 */
proto.rv.analytics.UI.LowerRight.prototype.getStage = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Stage} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Stage, 4));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Stage|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight} returns this
*/
proto.rv.analytics.UI.LowerRight.prototype.setStage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rv.analytics.UI.LowerRight.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight} returns this
 */
proto.rv.analytics.UI.LowerRight.prototype.clearStage = function() {
  return this.setStage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.prototype.hasStage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AudioBin audio_bin = 5;
 * @return {?proto.rv.analytics.UI.LowerRight.AudioBin}
 */
proto.rv.analytics.UI.LowerRight.prototype.getAudioBin = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.AudioBin} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.AudioBin, 5));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.AudioBin|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight} returns this
*/
proto.rv.analytics.UI.LowerRight.prototype.setAudioBin = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.rv.analytics.UI.LowerRight.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight} returns this
 */
proto.rv.analytics.UI.LowerRight.prototype.clearAudioBin = function() {
  return this.setAudioBin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.prototype.hasAudioBin = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Macros macros = 6;
 * @return {?proto.rv.analytics.UI.LowerRight.Macros}
 */
proto.rv.analytics.UI.LowerRight.prototype.getMacros = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight.Macros} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight.Macros, 6));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight.Macros|undefined} value
 * @return {!proto.rv.analytics.UI.LowerRight} returns this
*/
proto.rv.analytics.UI.LowerRight.prototype.setMacros = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.rv.analytics.UI.LowerRight.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.LowerRight} returns this
 */
proto.rv.analytics.UI.LowerRight.prototype.clearMacros = function() {
  return this.setMacros(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.LowerRight.prototype.hasMacros = function() {
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
proto.rv.analytics.UI.TextInspector.oneofGroups_ = [[1,2,3,4,5,6]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.TextInspector.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1,
  FOREGROUND: 2,
  UNDERLINE_COLOR: 3,
  BACKGROUND_COLOR: 4,
  SCROLLING_TEXT: 5,
  LINE_TRANSFORM: 6
};

/**
 * @return {proto.rv.analytics.UI.TextInspector.ComponentCase}
 */
proto.rv.analytics.UI.TextInspector.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.TextInspector.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.TextInspector.oneofGroups_[0]));
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
proto.rv.analytics.UI.TextInspector.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.TextInspector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.TextInspector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.TextInspector.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.TextInspector.Shown.toObject(includeInstance, f),
foreground: (f = msg.getForeground()) && proto.rv.analytics.UI.TextInspector.Foreground.toObject(includeInstance, f),
underlineColor: (f = msg.getUnderlineColor()) && proto.rv.analytics.UI.TextInspector.UnderlineColor.toObject(includeInstance, f),
backgroundColor: (f = msg.getBackgroundColor()) && proto.rv.analytics.UI.TextInspector.BackgroundColor.toObject(includeInstance, f),
scrollingText: (f = msg.getScrollingText()) && proto.rv.analytics.UI.TextInspector.ScrollingText.toObject(includeInstance, f),
lineTransform: (f = msg.getLineTransform()) && proto.rv.analytics.UI.TextInspector.LineTransform.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.TextInspector}
 */
proto.rv.analytics.UI.TextInspector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.TextInspector;
  return proto.rv.analytics.UI.TextInspector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.TextInspector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.TextInspector}
 */
proto.rv.analytics.UI.TextInspector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.TextInspector.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.TextInspector.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
      break;
    case 2:
      var value = new proto.rv.analytics.UI.TextInspector.Foreground;
      reader.readMessage(value,proto.rv.analytics.UI.TextInspector.Foreground.deserializeBinaryFromReader);
      msg.setForeground(value);
      break;
    case 3:
      var value = new proto.rv.analytics.UI.TextInspector.UnderlineColor;
      reader.readMessage(value,proto.rv.analytics.UI.TextInspector.UnderlineColor.deserializeBinaryFromReader);
      msg.setUnderlineColor(value);
      break;
    case 4:
      var value = new proto.rv.analytics.UI.TextInspector.BackgroundColor;
      reader.readMessage(value,proto.rv.analytics.UI.TextInspector.BackgroundColor.deserializeBinaryFromReader);
      msg.setBackgroundColor(value);
      break;
    case 5:
      var value = new proto.rv.analytics.UI.TextInspector.ScrollingText;
      reader.readMessage(value,proto.rv.analytics.UI.TextInspector.ScrollingText.deserializeBinaryFromReader);
      msg.setScrollingText(value);
      break;
    case 6:
      var value = new proto.rv.analytics.UI.TextInspector.LineTransform;
      reader.readMessage(value,proto.rv.analytics.UI.TextInspector.LineTransform.deserializeBinaryFromReader);
      msg.setLineTransform(value);
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
proto.rv.analytics.UI.TextInspector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.TextInspector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.TextInspector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.TextInspector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.TextInspector.Shown.serializeBinaryToWriter
    );
  }
  f = message.getForeground();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.analytics.UI.TextInspector.Foreground.serializeBinaryToWriter
    );
  }
  f = message.getUnderlineColor();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.analytics.UI.TextInspector.UnderlineColor.serializeBinaryToWriter
    );
  }
  f = message.getBackgroundColor();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.analytics.UI.TextInspector.BackgroundColor.serializeBinaryToWriter
    );
  }
  f = message.getScrollingText();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.analytics.UI.TextInspector.ScrollingText.serializeBinaryToWriter
    );
  }
  f = message.getLineTransform();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.rv.analytics.UI.TextInspector.LineTransform.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.rv.analytics.UI.TextInspector.SelectionMode = {
  SELECTION_MODE_UNKNOWN: 0,
  SELECTION_MODE_OBJECT: 1,
  SELECTION_MODE_RANGE: 2
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
proto.rv.analytics.UI.TextInspector.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.TextInspector.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.TextInspector.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.TextInspector.Shown.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.TextInspector.Shown}
 */
proto.rv.analytics.UI.TextInspector.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.TextInspector.Shown;
  return proto.rv.analytics.UI.TextInspector.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.TextInspector.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.TextInspector.Shown}
 */
proto.rv.analytics.UI.TextInspector.Shown.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.TextInspector.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.TextInspector.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.TextInspector.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.TextInspector.Shown.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.TextInspector.Foreground.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.TextInspector.Foreground.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.TextInspector.Foreground} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.TextInspector.Foreground.toObject = function(includeInstance, msg) {
  var f, obj = {
fillType: jspb.Message.getFieldWithDefault(msg, 1, 0),
selectionMode: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.rv.analytics.UI.TextInspector.Foreground}
 */
proto.rv.analytics.UI.TextInspector.Foreground.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.TextInspector.Foreground;
  return proto.rv.analytics.UI.TextInspector.Foreground.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.TextInspector.Foreground} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.TextInspector.Foreground}
 */
proto.rv.analytics.UI.TextInspector.Foreground.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.TextInspector.Foreground.FillType} */ (reader.readEnum());
      msg.setFillType(value);
      break;
    case 2:
      var value = /** @type {!proto.rv.analytics.UI.TextInspector.SelectionMode} */ (reader.readEnum());
      msg.setSelectionMode(value);
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
proto.rv.analytics.UI.TextInspector.Foreground.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.TextInspector.Foreground.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.TextInspector.Foreground} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.TextInspector.Foreground.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFillType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSelectionMode();
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
proto.rv.analytics.UI.TextInspector.Foreground.FillType = {
  FILL_TYPE_UNKNOWN: 0,
  FILL_TYPE_SOLID: 1,
  FILL_TYPE_GRADIENT: 2
};

/**
 * optional FillType fill_type = 1;
 * @return {!proto.rv.analytics.UI.TextInspector.Foreground.FillType}
 */
proto.rv.analytics.UI.TextInspector.Foreground.prototype.getFillType = function() {
  return /** @type {!proto.rv.analytics.UI.TextInspector.Foreground.FillType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.TextInspector.Foreground.FillType} value
 * @return {!proto.rv.analytics.UI.TextInspector.Foreground} returns this
 */
proto.rv.analytics.UI.TextInspector.Foreground.prototype.setFillType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional SelectionMode selection_mode = 2;
 * @return {!proto.rv.analytics.UI.TextInspector.SelectionMode}
 */
proto.rv.analytics.UI.TextInspector.Foreground.prototype.getSelectionMode = function() {
  return /** @type {!proto.rv.analytics.UI.TextInspector.SelectionMode} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.analytics.UI.TextInspector.SelectionMode} value
 * @return {!proto.rv.analytics.UI.TextInspector.Foreground} returns this
 */
proto.rv.analytics.UI.TextInspector.Foreground.prototype.setSelectionMode = function(value) {
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
proto.rv.analytics.UI.TextInspector.UnderlineColor.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.TextInspector.UnderlineColor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.TextInspector.UnderlineColor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.TextInspector.UnderlineColor.toObject = function(includeInstance, msg) {
  var f, obj = {
isEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
selectionMode: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.rv.analytics.UI.TextInspector.UnderlineColor}
 */
proto.rv.analytics.UI.TextInspector.UnderlineColor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.TextInspector.UnderlineColor;
  return proto.rv.analytics.UI.TextInspector.UnderlineColor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.TextInspector.UnderlineColor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.TextInspector.UnderlineColor}
 */
proto.rv.analytics.UI.TextInspector.UnderlineColor.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.rv.analytics.UI.TextInspector.SelectionMode} */ (reader.readEnum());
      msg.setSelectionMode(value);
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
proto.rv.analytics.UI.TextInspector.UnderlineColor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.TextInspector.UnderlineColor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.TextInspector.UnderlineColor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.TextInspector.UnderlineColor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getSelectionMode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional bool is_enabled = 1;
 * @return {boolean}
 */
proto.rv.analytics.UI.TextInspector.UnderlineColor.prototype.getIsEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.analytics.UI.TextInspector.UnderlineColor} returns this
 */
proto.rv.analytics.UI.TextInspector.UnderlineColor.prototype.setIsEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional SelectionMode selection_mode = 2;
 * @return {!proto.rv.analytics.UI.TextInspector.SelectionMode}
 */
proto.rv.analytics.UI.TextInspector.UnderlineColor.prototype.getSelectionMode = function() {
  return /** @type {!proto.rv.analytics.UI.TextInspector.SelectionMode} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.analytics.UI.TextInspector.SelectionMode} value
 * @return {!proto.rv.analytics.UI.TextInspector.UnderlineColor} returns this
 */
proto.rv.analytics.UI.TextInspector.UnderlineColor.prototype.setSelectionMode = function(value) {
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
proto.rv.analytics.UI.TextInspector.BackgroundColor.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.TextInspector.BackgroundColor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.TextInspector.BackgroundColor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.TextInspector.BackgroundColor.toObject = function(includeInstance, msg) {
  var f, obj = {
colorType: jspb.Message.getFieldWithDefault(msg, 1, 0),
selectionMode: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.rv.analytics.UI.TextInspector.BackgroundColor}
 */
proto.rv.analytics.UI.TextInspector.BackgroundColor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.TextInspector.BackgroundColor;
  return proto.rv.analytics.UI.TextInspector.BackgroundColor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.TextInspector.BackgroundColor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.TextInspector.BackgroundColor}
 */
proto.rv.analytics.UI.TextInspector.BackgroundColor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.TextInspector.BackgroundColor.ColorType} */ (reader.readEnum());
      msg.setColorType(value);
      break;
    case 2:
      var value = /** @type {!proto.rv.analytics.UI.TextInspector.SelectionMode} */ (reader.readEnum());
      msg.setSelectionMode(value);
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
proto.rv.analytics.UI.TextInspector.BackgroundColor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.TextInspector.BackgroundColor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.TextInspector.BackgroundColor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.TextInspector.BackgroundColor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColorType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSelectionMode();
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
proto.rv.analytics.UI.TextInspector.BackgroundColor.ColorType = {
  COLOR_TYPE_UNKNOWN: 0,
  COLOR_TYPE_CLEAR: 1,
  COLOR_TYPE_OTHER: 2
};

/**
 * optional ColorType color_type = 1;
 * @return {!proto.rv.analytics.UI.TextInspector.BackgroundColor.ColorType}
 */
proto.rv.analytics.UI.TextInspector.BackgroundColor.prototype.getColorType = function() {
  return /** @type {!proto.rv.analytics.UI.TextInspector.BackgroundColor.ColorType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.TextInspector.BackgroundColor.ColorType} value
 * @return {!proto.rv.analytics.UI.TextInspector.BackgroundColor} returns this
 */
proto.rv.analytics.UI.TextInspector.BackgroundColor.prototype.setColorType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional SelectionMode selection_mode = 2;
 * @return {!proto.rv.analytics.UI.TextInspector.SelectionMode}
 */
proto.rv.analytics.UI.TextInspector.BackgroundColor.prototype.getSelectionMode = function() {
  return /** @type {!proto.rv.analytics.UI.TextInspector.SelectionMode} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.analytics.UI.TextInspector.SelectionMode} value
 * @return {!proto.rv.analytics.UI.TextInspector.BackgroundColor} returns this
 */
proto.rv.analytics.UI.TextInspector.BackgroundColor.prototype.setSelectionMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.analytics.UI.TextInspector.ScrollingText.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.TextInspector.ScrollingText.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  ENABLE: 1
};

/**
 * @return {proto.rv.analytics.UI.TextInspector.ScrollingText.ComponentCase}
 */
proto.rv.analytics.UI.TextInspector.ScrollingText.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.TextInspector.ScrollingText.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.TextInspector.ScrollingText.oneofGroups_[0]));
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
proto.rv.analytics.UI.TextInspector.ScrollingText.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.TextInspector.ScrollingText.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.TextInspector.ScrollingText} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.TextInspector.ScrollingText.toObject = function(includeInstance, msg) {
  var f, obj = {
enable: (f = msg.getEnable()) && proto.rv.analytics.UI.TextInspector.ScrollingText.Enable.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.TextInspector.ScrollingText}
 */
proto.rv.analytics.UI.TextInspector.ScrollingText.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.TextInspector.ScrollingText;
  return proto.rv.analytics.UI.TextInspector.ScrollingText.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.TextInspector.ScrollingText} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.TextInspector.ScrollingText}
 */
proto.rv.analytics.UI.TextInspector.ScrollingText.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.TextInspector.ScrollingText.Enable;
      reader.readMessage(value,proto.rv.analytics.UI.TextInspector.ScrollingText.Enable.deserializeBinaryFromReader);
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
proto.rv.analytics.UI.TextInspector.ScrollingText.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.TextInspector.ScrollingText.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.TextInspector.ScrollingText} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.TextInspector.ScrollingText.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnable();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.TextInspector.ScrollingText.Enable.serializeBinaryToWriter
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
proto.rv.analytics.UI.TextInspector.ScrollingText.Enable.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.TextInspector.ScrollingText.Enable.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.TextInspector.ScrollingText.Enable} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.TextInspector.ScrollingText.Enable.toObject = function(includeInstance, msg) {
  var f, obj = {
enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.rv.analytics.UI.TextInspector.ScrollingText.Enable}
 */
proto.rv.analytics.UI.TextInspector.ScrollingText.Enable.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.TextInspector.ScrollingText.Enable;
  return proto.rv.analytics.UI.TextInspector.ScrollingText.Enable.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.TextInspector.ScrollingText.Enable} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.TextInspector.ScrollingText.Enable}
 */
proto.rv.analytics.UI.TextInspector.ScrollingText.Enable.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.TextInspector.ScrollingText.Enable.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.TextInspector.ScrollingText.Enable.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.TextInspector.ScrollingText.Enable} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.TextInspector.ScrollingText.Enable.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.rv.analytics.UI.TextInspector.ScrollingText.Enable.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.analytics.UI.TextInspector.ScrollingText.Enable} returns this
 */
proto.rv.analytics.UI.TextInspector.ScrollingText.Enable.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional Enable enable = 1;
 * @return {?proto.rv.analytics.UI.TextInspector.ScrollingText.Enable}
 */
proto.rv.analytics.UI.TextInspector.ScrollingText.prototype.getEnable = function() {
  return /** @type{?proto.rv.analytics.UI.TextInspector.ScrollingText.Enable} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.TextInspector.ScrollingText.Enable, 1));
};


/**
 * @param {?proto.rv.analytics.UI.TextInspector.ScrollingText.Enable|undefined} value
 * @return {!proto.rv.analytics.UI.TextInspector.ScrollingText} returns this
*/
proto.rv.analytics.UI.TextInspector.ScrollingText.prototype.setEnable = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.TextInspector.ScrollingText.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.TextInspector.ScrollingText} returns this
 */
proto.rv.analytics.UI.TextInspector.ScrollingText.prototype.clearEnable = function() {
  return this.setEnable(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.TextInspector.ScrollingText.prototype.hasEnable = function() {
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
proto.rv.analytics.UI.TextInspector.LineTransform.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.TextInspector.LineTransform.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.TextInspector.LineTransform} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.TextInspector.LineTransform.toObject = function(includeInstance, msg) {
  var f, obj = {
transformType: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.TextInspector.LineTransform}
 */
proto.rv.analytics.UI.TextInspector.LineTransform.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.TextInspector.LineTransform;
  return proto.rv.analytics.UI.TextInspector.LineTransform.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.TextInspector.LineTransform} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.TextInspector.LineTransform}
 */
proto.rv.analytics.UI.TextInspector.LineTransform.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.TextInspector.LineTransform.TransformType} */ (reader.readEnum());
      msg.setTransformType(value);
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
proto.rv.analytics.UI.TextInspector.LineTransform.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.TextInspector.LineTransform.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.TextInspector.LineTransform} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.TextInspector.LineTransform.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransformType();
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
proto.rv.analytics.UI.TextInspector.LineTransform.TransformType = {
  TRANSFORM_TYPE_UNKNOWN: 0,
  TRANSFORM_TYPE_NONE: 1,
  TRANSFORM_TYPE_REMOVE_LINE_RETURNS: 2,
  TRANSFORM_TYPE_REPLACE_LINE_RETURNS: 3,
  TRANSFORM_TYPE_ONE_WORD_PER_LINE: 4,
  TRANSFORM_TYPE_ONE_CHARACTER_PER_LINE: 5
};

/**
 * optional TransformType transform_type = 1;
 * @return {!proto.rv.analytics.UI.TextInspector.LineTransform.TransformType}
 */
proto.rv.analytics.UI.TextInspector.LineTransform.prototype.getTransformType = function() {
  return /** @type {!proto.rv.analytics.UI.TextInspector.LineTransform.TransformType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.TextInspector.LineTransform.TransformType} value
 * @return {!proto.rv.analytics.UI.TextInspector.LineTransform} returns this
 */
proto.rv.analytics.UI.TextInspector.LineTransform.prototype.setTransformType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.TextInspector.Shown}
 */
proto.rv.analytics.UI.TextInspector.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.TextInspector.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.TextInspector.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.TextInspector.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.TextInspector} returns this
*/
proto.rv.analytics.UI.TextInspector.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.TextInspector.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.TextInspector} returns this
 */
proto.rv.analytics.UI.TextInspector.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.TextInspector.prototype.hasShown = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Foreground foreground = 2;
 * @return {?proto.rv.analytics.UI.TextInspector.Foreground}
 */
proto.rv.analytics.UI.TextInspector.prototype.getForeground = function() {
  return /** @type{?proto.rv.analytics.UI.TextInspector.Foreground} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.TextInspector.Foreground, 2));
};


/**
 * @param {?proto.rv.analytics.UI.TextInspector.Foreground|undefined} value
 * @return {!proto.rv.analytics.UI.TextInspector} returns this
*/
proto.rv.analytics.UI.TextInspector.prototype.setForeground = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.analytics.UI.TextInspector.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.TextInspector} returns this
 */
proto.rv.analytics.UI.TextInspector.prototype.clearForeground = function() {
  return this.setForeground(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.TextInspector.prototype.hasForeground = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional UnderlineColor underline_color = 3;
 * @return {?proto.rv.analytics.UI.TextInspector.UnderlineColor}
 */
proto.rv.analytics.UI.TextInspector.prototype.getUnderlineColor = function() {
  return /** @type{?proto.rv.analytics.UI.TextInspector.UnderlineColor} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.TextInspector.UnderlineColor, 3));
};


/**
 * @param {?proto.rv.analytics.UI.TextInspector.UnderlineColor|undefined} value
 * @return {!proto.rv.analytics.UI.TextInspector} returns this
*/
proto.rv.analytics.UI.TextInspector.prototype.setUnderlineColor = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.analytics.UI.TextInspector.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.TextInspector} returns this
 */
proto.rv.analytics.UI.TextInspector.prototype.clearUnderlineColor = function() {
  return this.setUnderlineColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.TextInspector.prototype.hasUnderlineColor = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional BackgroundColor background_color = 4;
 * @return {?proto.rv.analytics.UI.TextInspector.BackgroundColor}
 */
proto.rv.analytics.UI.TextInspector.prototype.getBackgroundColor = function() {
  return /** @type{?proto.rv.analytics.UI.TextInspector.BackgroundColor} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.TextInspector.BackgroundColor, 4));
};


/**
 * @param {?proto.rv.analytics.UI.TextInspector.BackgroundColor|undefined} value
 * @return {!proto.rv.analytics.UI.TextInspector} returns this
*/
proto.rv.analytics.UI.TextInspector.prototype.setBackgroundColor = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rv.analytics.UI.TextInspector.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.TextInspector} returns this
 */
proto.rv.analytics.UI.TextInspector.prototype.clearBackgroundColor = function() {
  return this.setBackgroundColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.TextInspector.prototype.hasBackgroundColor = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ScrollingText scrolling_text = 5;
 * @return {?proto.rv.analytics.UI.TextInspector.ScrollingText}
 */
proto.rv.analytics.UI.TextInspector.prototype.getScrollingText = function() {
  return /** @type{?proto.rv.analytics.UI.TextInspector.ScrollingText} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.TextInspector.ScrollingText, 5));
};


/**
 * @param {?proto.rv.analytics.UI.TextInspector.ScrollingText|undefined} value
 * @return {!proto.rv.analytics.UI.TextInspector} returns this
*/
proto.rv.analytics.UI.TextInspector.prototype.setScrollingText = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.rv.analytics.UI.TextInspector.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.TextInspector} returns this
 */
proto.rv.analytics.UI.TextInspector.prototype.clearScrollingText = function() {
  return this.setScrollingText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.TextInspector.prototype.hasScrollingText = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional LineTransform line_transform = 6;
 * @return {?proto.rv.analytics.UI.TextInspector.LineTransform}
 */
proto.rv.analytics.UI.TextInspector.prototype.getLineTransform = function() {
  return /** @type{?proto.rv.analytics.UI.TextInspector.LineTransform} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.TextInspector.LineTransform, 6));
};


/**
 * @param {?proto.rv.analytics.UI.TextInspector.LineTransform|undefined} value
 * @return {!proto.rv.analytics.UI.TextInspector} returns this
*/
proto.rv.analytics.UI.TextInspector.prototype.setLineTransform = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.rv.analytics.UI.TextInspector.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.TextInspector} returns this
 */
proto.rv.analytics.UI.TextInspector.prototype.clearLineTransform = function() {
  return this.setLineTransform(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.TextInspector.prototype.hasLineTransform = function() {
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
proto.rv.analytics.UI.Show.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.Show.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SLIDE_LABEL: 1
};

/**
 * @return {proto.rv.analytics.UI.Show.ComponentCase}
 */
proto.rv.analytics.UI.Show.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.Show.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.Show.oneofGroups_[0]));
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
proto.rv.analytics.UI.Show.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.Show.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.Show} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Show.toObject = function(includeInstance, msg) {
  var f, obj = {
slideLabel: (f = msg.getSlideLabel()) && proto.rv.analytics.UI.Show.SlideLabel.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.Show}
 */
proto.rv.analytics.UI.Show.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.Show;
  return proto.rv.analytics.UI.Show.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.Show} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.Show}
 */
proto.rv.analytics.UI.Show.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.Show.SlideLabel;
      reader.readMessage(value,proto.rv.analytics.UI.Show.SlideLabel.deserializeBinaryFromReader);
      msg.setSlideLabel(value);
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
proto.rv.analytics.UI.Show.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.Show.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.Show} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Show.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlideLabel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.Show.SlideLabel.serializeBinaryToWriter
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
proto.rv.analytics.UI.Show.SlideLabel.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.Show.SlideLabel.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1,
  CHANGE: 2
};

/**
 * @return {proto.rv.analytics.UI.Show.SlideLabel.ComponentCase}
 */
proto.rv.analytics.UI.Show.SlideLabel.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.Show.SlideLabel.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.Show.SlideLabel.oneofGroups_[0]));
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
proto.rv.analytics.UI.Show.SlideLabel.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.Show.SlideLabel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.Show.SlideLabel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Show.SlideLabel.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.Show.SlideLabel.Shown.toObject(includeInstance, f),
change: (f = msg.getChange()) && proto.rv.analytics.UI.Show.SlideLabel.Change.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.Show.SlideLabel}
 */
proto.rv.analytics.UI.Show.SlideLabel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.Show.SlideLabel;
  return proto.rv.analytics.UI.Show.SlideLabel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.Show.SlideLabel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.Show.SlideLabel}
 */
proto.rv.analytics.UI.Show.SlideLabel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.Show.SlideLabel.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.Show.SlideLabel.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
      break;
    case 2:
      var value = new proto.rv.analytics.UI.Show.SlideLabel.Change;
      reader.readMessage(value,proto.rv.analytics.UI.Show.SlideLabel.Change.deserializeBinaryFromReader);
      msg.setChange(value);
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
proto.rv.analytics.UI.Show.SlideLabel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.Show.SlideLabel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.Show.SlideLabel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Show.SlideLabel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.Show.SlideLabel.Shown.serializeBinaryToWriter
    );
  }
  f = message.getChange();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.analytics.UI.Show.SlideLabel.Change.serializeBinaryToWriter
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
proto.rv.analytics.UI.Show.SlideLabel.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.Show.SlideLabel.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.Show.SlideLabel.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Show.SlideLabel.Shown.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.Show.SlideLabel.Shown}
 */
proto.rv.analytics.UI.Show.SlideLabel.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.Show.SlideLabel.Shown;
  return proto.rv.analytics.UI.Show.SlideLabel.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.Show.SlideLabel.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.Show.SlideLabel.Shown}
 */
proto.rv.analytics.UI.Show.SlideLabel.Shown.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.Show.SlideLabel.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.Show.SlideLabel.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.Show.SlideLabel.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Show.SlideLabel.Shown.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.Show.SlideLabel.Change.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.Show.SlideLabel.Change.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.Show.SlideLabel.Change} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Show.SlideLabel.Change.toObject = function(includeInstance, msg) {
  var f, obj = {
numberOfSlides: jspb.Message.getFieldWithDefault(msg, 1, 0),
source: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.rv.analytics.UI.Show.SlideLabel.Change}
 */
proto.rv.analytics.UI.Show.SlideLabel.Change.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.Show.SlideLabel.Change;
  return proto.rv.analytics.UI.Show.SlideLabel.Change.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.Show.SlideLabel.Change} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.Show.SlideLabel.Change}
 */
proto.rv.analytics.UI.Show.SlideLabel.Change.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberOfSlides(value);
      break;
    case 2:
      var value = /** @type {!proto.rv.analytics.UI.Show.SlideLabel.Change.Source} */ (reader.readEnum());
      msg.setSource(value);
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
proto.rv.analytics.UI.Show.SlideLabel.Change.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.Show.SlideLabel.Change.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.Show.SlideLabel.Change} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Show.SlideLabel.Change.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumberOfSlides();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSource();
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
proto.rv.analytics.UI.Show.SlideLabel.Change.Source = {
  SOURCE_UNKNOWN: 0,
  SOURCE_CONTEXT_MENU: 1,
  SOURCE_POPOVER: 2
};

/**
 * optional int32 number_of_slides = 1;
 * @return {number}
 */
proto.rv.analytics.UI.Show.SlideLabel.Change.prototype.getNumberOfSlides = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.analytics.UI.Show.SlideLabel.Change} returns this
 */
proto.rv.analytics.UI.Show.SlideLabel.Change.prototype.setNumberOfSlides = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Source source = 2;
 * @return {!proto.rv.analytics.UI.Show.SlideLabel.Change.Source}
 */
proto.rv.analytics.UI.Show.SlideLabel.Change.prototype.getSource = function() {
  return /** @type {!proto.rv.analytics.UI.Show.SlideLabel.Change.Source} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.analytics.UI.Show.SlideLabel.Change.Source} value
 * @return {!proto.rv.analytics.UI.Show.SlideLabel.Change} returns this
 */
proto.rv.analytics.UI.Show.SlideLabel.Change.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.Show.SlideLabel.Shown}
 */
proto.rv.analytics.UI.Show.SlideLabel.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.Show.SlideLabel.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.Show.SlideLabel.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.Show.SlideLabel.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.Show.SlideLabel} returns this
*/
proto.rv.analytics.UI.Show.SlideLabel.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.Show.SlideLabel.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.Show.SlideLabel} returns this
 */
proto.rv.analytics.UI.Show.SlideLabel.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.Show.SlideLabel.prototype.hasShown = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Change change = 2;
 * @return {?proto.rv.analytics.UI.Show.SlideLabel.Change}
 */
proto.rv.analytics.UI.Show.SlideLabel.prototype.getChange = function() {
  return /** @type{?proto.rv.analytics.UI.Show.SlideLabel.Change} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.Show.SlideLabel.Change, 2));
};


/**
 * @param {?proto.rv.analytics.UI.Show.SlideLabel.Change|undefined} value
 * @return {!proto.rv.analytics.UI.Show.SlideLabel} returns this
*/
proto.rv.analytics.UI.Show.SlideLabel.prototype.setChange = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.analytics.UI.Show.SlideLabel.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.Show.SlideLabel} returns this
 */
proto.rv.analytics.UI.Show.SlideLabel.prototype.clearChange = function() {
  return this.setChange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.Show.SlideLabel.prototype.hasChange = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SlideLabel slide_label = 1;
 * @return {?proto.rv.analytics.UI.Show.SlideLabel}
 */
proto.rv.analytics.UI.Show.prototype.getSlideLabel = function() {
  return /** @type{?proto.rv.analytics.UI.Show.SlideLabel} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.Show.SlideLabel, 1));
};


/**
 * @param {?proto.rv.analytics.UI.Show.SlideLabel|undefined} value
 * @return {!proto.rv.analytics.UI.Show} returns this
*/
proto.rv.analytics.UI.Show.prototype.setSlideLabel = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.Show.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.Show} returns this
 */
proto.rv.analytics.UI.Show.prototype.clearSlideLabel = function() {
  return this.setSlideLabel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.Show.prototype.hasSlideLabel = function() {
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
proto.rv.analytics.UI.InAppStore.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.InAppStore.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  TRIAL: 1
};

/**
 * @return {proto.rv.analytics.UI.InAppStore.ComponentCase}
 */
proto.rv.analytics.UI.InAppStore.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.InAppStore.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.InAppStore.oneofGroups_[0]));
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
proto.rv.analytics.UI.InAppStore.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.InAppStore.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.InAppStore} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.InAppStore.toObject = function(includeInstance, msg) {
  var f, obj = {
trial: (f = msg.getTrial()) && proto.rv.analytics.UI.InAppStore.Trial.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.InAppStore}
 */
proto.rv.analytics.UI.InAppStore.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.InAppStore;
  return proto.rv.analytics.UI.InAppStore.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.InAppStore} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.InAppStore}
 */
proto.rv.analytics.UI.InAppStore.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.InAppStore.Trial;
      reader.readMessage(value,proto.rv.analytics.UI.InAppStore.Trial.deserializeBinaryFromReader);
      msg.setTrial(value);
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
proto.rv.analytics.UI.InAppStore.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.InAppStore.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.InAppStore} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.InAppStore.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrial();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.InAppStore.Trial.serializeBinaryToWriter
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
proto.rv.analytics.UI.InAppStore.Trial.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.InAppStore.Trial.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1,
  COMPLETE: 2
};

/**
 * @return {proto.rv.analytics.UI.InAppStore.Trial.ComponentCase}
 */
proto.rv.analytics.UI.InAppStore.Trial.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.InAppStore.Trial.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.InAppStore.Trial.oneofGroups_[0]));
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
proto.rv.analytics.UI.InAppStore.Trial.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.InAppStore.Trial.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.InAppStore.Trial} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.InAppStore.Trial.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.InAppStore.Trial.Shown.toObject(includeInstance, f),
complete: (f = msg.getComplete()) && proto.rv.analytics.UI.InAppStore.Trial.Complete.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.InAppStore.Trial}
 */
proto.rv.analytics.UI.InAppStore.Trial.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.InAppStore.Trial;
  return proto.rv.analytics.UI.InAppStore.Trial.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.InAppStore.Trial} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.InAppStore.Trial}
 */
proto.rv.analytics.UI.InAppStore.Trial.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.InAppStore.Trial.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.InAppStore.Trial.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
      break;
    case 2:
      var value = new proto.rv.analytics.UI.InAppStore.Trial.Complete;
      reader.readMessage(value,proto.rv.analytics.UI.InAppStore.Trial.Complete.deserializeBinaryFromReader);
      msg.setComplete(value);
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
proto.rv.analytics.UI.InAppStore.Trial.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.InAppStore.Trial.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.InAppStore.Trial} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.InAppStore.Trial.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.InAppStore.Trial.Shown.serializeBinaryToWriter
    );
  }
  f = message.getComplete();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.analytics.UI.InAppStore.Trial.Complete.serializeBinaryToWriter
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
proto.rv.analytics.UI.InAppStore.Trial.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.InAppStore.Trial.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.InAppStore.Trial.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.InAppStore.Trial.Shown.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.InAppStore.Trial.Shown}
 */
proto.rv.analytics.UI.InAppStore.Trial.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.InAppStore.Trial.Shown;
  return proto.rv.analytics.UI.InAppStore.Trial.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.InAppStore.Trial.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.InAppStore.Trial.Shown}
 */
proto.rv.analytics.UI.InAppStore.Trial.Shown.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.InAppStore.Trial.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.InAppStore.Trial.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.InAppStore.Trial.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.InAppStore.Trial.Shown.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.InAppStore.Trial.Complete.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.InAppStore.Trial.Complete.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.InAppStore.Trial.Complete} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.InAppStore.Trial.Complete.toObject = function(includeInstance, msg) {
  var f, obj = {
result: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.InAppStore.Trial.Complete}
 */
proto.rv.analytics.UI.InAppStore.Trial.Complete.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.InAppStore.Trial.Complete;
  return proto.rv.analytics.UI.InAppStore.Trial.Complete.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.InAppStore.Trial.Complete} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.InAppStore.Trial.Complete}
 */
proto.rv.analytics.UI.InAppStore.Trial.Complete.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.InAppStore.Trial.Complete.Result} */ (reader.readEnum());
      msg.setResult(value);
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
proto.rv.analytics.UI.InAppStore.Trial.Complete.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.InAppStore.Trial.Complete.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.InAppStore.Trial.Complete} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.InAppStore.Trial.Complete.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
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
proto.rv.analytics.UI.InAppStore.Trial.Complete.Result = {
  RESULT_UNKNOWN: 0,
  RESULT_SUCCESS: 1,
  RESULT_EARLY_EXIT: 2
};

/**
 * optional Result result = 1;
 * @return {!proto.rv.analytics.UI.InAppStore.Trial.Complete.Result}
 */
proto.rv.analytics.UI.InAppStore.Trial.Complete.prototype.getResult = function() {
  return /** @type {!proto.rv.analytics.UI.InAppStore.Trial.Complete.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.InAppStore.Trial.Complete.Result} value
 * @return {!proto.rv.analytics.UI.InAppStore.Trial.Complete} returns this
 */
proto.rv.analytics.UI.InAppStore.Trial.Complete.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.InAppStore.Trial.Shown}
 */
proto.rv.analytics.UI.InAppStore.Trial.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.InAppStore.Trial.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.InAppStore.Trial.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.InAppStore.Trial.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.InAppStore.Trial} returns this
*/
proto.rv.analytics.UI.InAppStore.Trial.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.InAppStore.Trial.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.InAppStore.Trial} returns this
 */
proto.rv.analytics.UI.InAppStore.Trial.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.InAppStore.Trial.prototype.hasShown = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Complete complete = 2;
 * @return {?proto.rv.analytics.UI.InAppStore.Trial.Complete}
 */
proto.rv.analytics.UI.InAppStore.Trial.prototype.getComplete = function() {
  return /** @type{?proto.rv.analytics.UI.InAppStore.Trial.Complete} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.InAppStore.Trial.Complete, 2));
};


/**
 * @param {?proto.rv.analytics.UI.InAppStore.Trial.Complete|undefined} value
 * @return {!proto.rv.analytics.UI.InAppStore.Trial} returns this
*/
proto.rv.analytics.UI.InAppStore.Trial.prototype.setComplete = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.analytics.UI.InAppStore.Trial.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.InAppStore.Trial} returns this
 */
proto.rv.analytics.UI.InAppStore.Trial.prototype.clearComplete = function() {
  return this.setComplete(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.InAppStore.Trial.prototype.hasComplete = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Trial trial = 1;
 * @return {?proto.rv.analytics.UI.InAppStore.Trial}
 */
proto.rv.analytics.UI.InAppStore.prototype.getTrial = function() {
  return /** @type{?proto.rv.analytics.UI.InAppStore.Trial} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.InAppStore.Trial, 1));
};


/**
 * @param {?proto.rv.analytics.UI.InAppStore.Trial|undefined} value
 * @return {!proto.rv.analytics.UI.InAppStore} returns this
*/
proto.rv.analytics.UI.InAppStore.prototype.setTrial = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.InAppStore.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.InAppStore} returns this
 */
proto.rv.analytics.UI.InAppStore.prototype.clearTrial = function() {
  return this.setTrial(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.InAppStore.prototype.hasTrial = function() {
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
proto.rv.analytics.UI.Editor.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.Editor.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  OVERLAY: 1
};

/**
 * @return {proto.rv.analytics.UI.Editor.ComponentCase}
 */
proto.rv.analytics.UI.Editor.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.Editor.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.Editor.oneofGroups_[0]));
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
proto.rv.analytics.UI.Editor.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.Editor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.Editor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Editor.toObject = function(includeInstance, msg) {
  var f, obj = {
overlay: (f = msg.getOverlay()) && proto.rv.analytics.UI.Editor.Overlay.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.Editor}
 */
proto.rv.analytics.UI.Editor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.Editor;
  return proto.rv.analytics.UI.Editor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.Editor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.Editor}
 */
proto.rv.analytics.UI.Editor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.Editor.Overlay;
      reader.readMessage(value,proto.rv.analytics.UI.Editor.Overlay.deserializeBinaryFromReader);
      msg.setOverlay(value);
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
proto.rv.analytics.UI.Editor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.Editor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.Editor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Editor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOverlay();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.Editor.Overlay.serializeBinaryToWriter
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
proto.rv.analytics.UI.Editor.Overlay.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.Editor.Overlay.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1,
  CLOSED: 2
};

/**
 * @return {proto.rv.analytics.UI.Editor.Overlay.ComponentCase}
 */
proto.rv.analytics.UI.Editor.Overlay.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.Editor.Overlay.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.Editor.Overlay.oneofGroups_[0]));
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
proto.rv.analytics.UI.Editor.Overlay.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.Editor.Overlay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.Editor.Overlay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Editor.Overlay.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.Editor.Overlay.Shown.toObject(includeInstance, f),
closed: (f = msg.getClosed()) && proto.rv.analytics.UI.Editor.Overlay.Closed.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.Editor.Overlay}
 */
proto.rv.analytics.UI.Editor.Overlay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.Editor.Overlay;
  return proto.rv.analytics.UI.Editor.Overlay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.Editor.Overlay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.Editor.Overlay}
 */
proto.rv.analytics.UI.Editor.Overlay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.Editor.Overlay.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.Editor.Overlay.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
      break;
    case 2:
      var value = new proto.rv.analytics.UI.Editor.Overlay.Closed;
      reader.readMessage(value,proto.rv.analytics.UI.Editor.Overlay.Closed.deserializeBinaryFromReader);
      msg.setClosed(value);
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
proto.rv.analytics.UI.Editor.Overlay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.Editor.Overlay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.Editor.Overlay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Editor.Overlay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.Editor.Overlay.Shown.serializeBinaryToWriter
    );
  }
  f = message.getClosed();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.analytics.UI.Editor.Overlay.Closed.serializeBinaryToWriter
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
proto.rv.analytics.UI.Editor.Overlay.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.Editor.Overlay.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.Editor.Overlay.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Editor.Overlay.Shown.toObject = function(includeInstance, msg) {
  var f, obj = {
source: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.Editor.Overlay.Shown}
 */
proto.rv.analytics.UI.Editor.Overlay.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.Editor.Overlay.Shown;
  return proto.rv.analytics.UI.Editor.Overlay.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.Editor.Overlay.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.Editor.Overlay.Shown}
 */
proto.rv.analytics.UI.Editor.Overlay.Shown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.Editor.Overlay.Shown.Source} */ (reader.readEnum());
      msg.setSource(value);
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
proto.rv.analytics.UI.Editor.Overlay.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.Editor.Overlay.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.Editor.Overlay.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Editor.Overlay.Shown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
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
proto.rv.analytics.UI.Editor.Overlay.Shown.Source = {
  SOURCE_UNKNOWN: 0,
  SOURCE_DOUBLE_CLICK: 1,
  SOURCE_CONTEXTUAL_MENU: 2,
  SOURCE_PLUS_BUTTON_MENU: 3
};

/**
 * optional Source source = 1;
 * @return {!proto.rv.analytics.UI.Editor.Overlay.Shown.Source}
 */
proto.rv.analytics.UI.Editor.Overlay.Shown.prototype.getSource = function() {
  return /** @type {!proto.rv.analytics.UI.Editor.Overlay.Shown.Source} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.Editor.Overlay.Shown.Source} value
 * @return {!proto.rv.analytics.UI.Editor.Overlay.Shown} returns this
 */
proto.rv.analytics.UI.Editor.Overlay.Shown.prototype.setSource = function(value) {
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
proto.rv.analytics.UI.Editor.Overlay.Closed.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.Editor.Overlay.Closed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.Editor.Overlay.Closed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Editor.Overlay.Closed.toObject = function(includeInstance, msg) {
  var f, obj = {
source: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.Editor.Overlay.Closed}
 */
proto.rv.analytics.UI.Editor.Overlay.Closed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.Editor.Overlay.Closed;
  return proto.rv.analytics.UI.Editor.Overlay.Closed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.Editor.Overlay.Closed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.Editor.Overlay.Closed}
 */
proto.rv.analytics.UI.Editor.Overlay.Closed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.Editor.Overlay.Closed.Source} */ (reader.readEnum());
      msg.setSource(value);
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
proto.rv.analytics.UI.Editor.Overlay.Closed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.Editor.Overlay.Closed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.Editor.Overlay.Closed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Editor.Overlay.Closed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
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
proto.rv.analytics.UI.Editor.Overlay.Closed.Source = {
  SOURCE_UNKNOWN: 0,
  SOURCE_CLICK_OFF_ELEMENT: 1,
  SOURCE_ESCAPE_KEY: 2,
  SOURCE_CLOSE_BUTTON: 3
};

/**
 * optional Source source = 1;
 * @return {!proto.rv.analytics.UI.Editor.Overlay.Closed.Source}
 */
proto.rv.analytics.UI.Editor.Overlay.Closed.prototype.getSource = function() {
  return /** @type {!proto.rv.analytics.UI.Editor.Overlay.Closed.Source} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.Editor.Overlay.Closed.Source} value
 * @return {!proto.rv.analytics.UI.Editor.Overlay.Closed} returns this
 */
proto.rv.analytics.UI.Editor.Overlay.Closed.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.Editor.Overlay.Shown}
 */
proto.rv.analytics.UI.Editor.Overlay.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.Editor.Overlay.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.Editor.Overlay.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.Editor.Overlay.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.Editor.Overlay} returns this
*/
proto.rv.analytics.UI.Editor.Overlay.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.Editor.Overlay.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.Editor.Overlay} returns this
 */
proto.rv.analytics.UI.Editor.Overlay.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.Editor.Overlay.prototype.hasShown = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Closed closed = 2;
 * @return {?proto.rv.analytics.UI.Editor.Overlay.Closed}
 */
proto.rv.analytics.UI.Editor.Overlay.prototype.getClosed = function() {
  return /** @type{?proto.rv.analytics.UI.Editor.Overlay.Closed} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.Editor.Overlay.Closed, 2));
};


/**
 * @param {?proto.rv.analytics.UI.Editor.Overlay.Closed|undefined} value
 * @return {!proto.rv.analytics.UI.Editor.Overlay} returns this
*/
proto.rv.analytics.UI.Editor.Overlay.prototype.setClosed = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.analytics.UI.Editor.Overlay.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.Editor.Overlay} returns this
 */
proto.rv.analytics.UI.Editor.Overlay.prototype.clearClosed = function() {
  return this.setClosed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.Editor.Overlay.prototype.hasClosed = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Overlay overlay = 1;
 * @return {?proto.rv.analytics.UI.Editor.Overlay}
 */
proto.rv.analytics.UI.Editor.prototype.getOverlay = function() {
  return /** @type{?proto.rv.analytics.UI.Editor.Overlay} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.Editor.Overlay, 1));
};


/**
 * @param {?proto.rv.analytics.UI.Editor.Overlay|undefined} value
 * @return {!proto.rv.analytics.UI.Editor} returns this
*/
proto.rv.analytics.UI.Editor.prototype.setOverlay = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.Editor.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.Editor} returns this
 */
proto.rv.analytics.UI.Editor.prototype.clearOverlay = function() {
  return this.setOverlay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.Editor.prototype.hasOverlay = function() {
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
proto.rv.analytics.UI.WhatsNew.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.WhatsNew.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  VIEWED: 1
};

/**
 * @return {proto.rv.analytics.UI.WhatsNew.ComponentCase}
 */
proto.rv.analytics.UI.WhatsNew.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.WhatsNew.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.WhatsNew.oneofGroups_[0]));
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
proto.rv.analytics.UI.WhatsNew.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.WhatsNew.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.WhatsNew} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WhatsNew.toObject = function(includeInstance, msg) {
  var f, obj = {
viewed: (f = msg.getViewed()) && proto.rv.analytics.UI.WhatsNew.Viewed.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.WhatsNew}
 */
proto.rv.analytics.UI.WhatsNew.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.WhatsNew;
  return proto.rv.analytics.UI.WhatsNew.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.WhatsNew} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.WhatsNew}
 */
proto.rv.analytics.UI.WhatsNew.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.WhatsNew.Viewed;
      reader.readMessage(value,proto.rv.analytics.UI.WhatsNew.Viewed.deserializeBinaryFromReader);
      msg.setViewed(value);
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
proto.rv.analytics.UI.WhatsNew.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.WhatsNew.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.WhatsNew} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WhatsNew.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getViewed();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.WhatsNew.Viewed.serializeBinaryToWriter
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
proto.rv.analytics.UI.WhatsNew.Viewed.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.WhatsNew.Viewed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.WhatsNew.Viewed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WhatsNew.Viewed.toObject = function(includeInstance, msg) {
  var f, obj = {
version: jspb.Message.getFieldWithDefault(msg, 1, ""),
resourceName: jspb.Message.getFieldWithDefault(msg, 2, ""),
viewTime: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.rv.analytics.UI.WhatsNew.Viewed}
 */
proto.rv.analytics.UI.WhatsNew.Viewed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.WhatsNew.Viewed;
  return proto.rv.analytics.UI.WhatsNew.Viewed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.WhatsNew.Viewed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.WhatsNew.Viewed}
 */
proto.rv.analytics.UI.WhatsNew.Viewed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setViewTime(value);
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
proto.rv.analytics.UI.WhatsNew.Viewed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.WhatsNew.Viewed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.WhatsNew.Viewed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WhatsNew.Viewed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getViewTime();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.rv.analytics.UI.WhatsNew.Viewed.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.analytics.UI.WhatsNew.Viewed} returns this
 */
proto.rv.analytics.UI.WhatsNew.Viewed.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string resource_name = 2;
 * @return {string}
 */
proto.rv.analytics.UI.WhatsNew.Viewed.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rv.analytics.UI.WhatsNew.Viewed} returns this
 */
proto.rv.analytics.UI.WhatsNew.Viewed.prototype.setResourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 view_time = 3;
 * @return {number}
 */
proto.rv.analytics.UI.WhatsNew.Viewed.prototype.getViewTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.analytics.UI.WhatsNew.Viewed} returns this
 */
proto.rv.analytics.UI.WhatsNew.Viewed.prototype.setViewTime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional Viewed viewed = 1;
 * @return {?proto.rv.analytics.UI.WhatsNew.Viewed}
 */
proto.rv.analytics.UI.WhatsNew.prototype.getViewed = function() {
  return /** @type{?proto.rv.analytics.UI.WhatsNew.Viewed} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.WhatsNew.Viewed, 1));
};


/**
 * @param {?proto.rv.analytics.UI.WhatsNew.Viewed|undefined} value
 * @return {!proto.rv.analytics.UI.WhatsNew} returns this
*/
proto.rv.analytics.UI.WhatsNew.prototype.setViewed = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.WhatsNew.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.WhatsNew} returns this
 */
proto.rv.analytics.UI.WhatsNew.prototype.clearViewed = function() {
  return this.setViewed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.WhatsNew.prototype.hasViewed = function() {
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
proto.rv.analytics.UI.ClearGroups.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.ClearGroups.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1,
  CREATE: 2,
  DELETE: 3,
  GROUP: 4
};

/**
 * @return {proto.rv.analytics.UI.ClearGroups.ComponentCase}
 */
proto.rv.analytics.UI.ClearGroups.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.ClearGroups.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.ClearGroups.oneofGroups_[0]));
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
proto.rv.analytics.UI.ClearGroups.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.ClearGroups.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.ClearGroups} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.ClearGroups.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.ClearGroups.Shown.toObject(includeInstance, f),
create: (f = msg.getCreate()) && proto.rv.analytics.UI.ClearGroups.Create.toObject(includeInstance, f),
pb_delete: (f = msg.getDelete()) && proto.rv.analytics.UI.ClearGroups.Delete.toObject(includeInstance, f),
group: (f = msg.getGroup()) && proto.rv.analytics.UI.ClearGroups.Group.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.ClearGroups}
 */
proto.rv.analytics.UI.ClearGroups.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.ClearGroups;
  return proto.rv.analytics.UI.ClearGroups.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.ClearGroups} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.ClearGroups}
 */
proto.rv.analytics.UI.ClearGroups.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.ClearGroups.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.ClearGroups.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
      break;
    case 2:
      var value = new proto.rv.analytics.UI.ClearGroups.Create;
      reader.readMessage(value,proto.rv.analytics.UI.ClearGroups.Create.deserializeBinaryFromReader);
      msg.setCreate(value);
      break;
    case 3:
      var value = new proto.rv.analytics.UI.ClearGroups.Delete;
      reader.readMessage(value,proto.rv.analytics.UI.ClearGroups.Delete.deserializeBinaryFromReader);
      msg.setDelete(value);
      break;
    case 4:
      var value = new proto.rv.analytics.UI.ClearGroups.Group;
      reader.readMessage(value,proto.rv.analytics.UI.ClearGroups.Group.deserializeBinaryFromReader);
      msg.setGroup(value);
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
proto.rv.analytics.UI.ClearGroups.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.ClearGroups.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.ClearGroups} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.ClearGroups.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.ClearGroups.Shown.serializeBinaryToWriter
    );
  }
  f = message.getCreate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.analytics.UI.ClearGroups.Create.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.analytics.UI.ClearGroups.Delete.serializeBinaryToWriter
    );
  }
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.analytics.UI.ClearGroups.Group.serializeBinaryToWriter
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
proto.rv.analytics.UI.ClearGroups.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.ClearGroups.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.ClearGroups.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.ClearGroups.Shown.toObject = function(includeInstance, msg) {
  var f, obj = {
source: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.ClearGroups.Shown}
 */
proto.rv.analytics.UI.ClearGroups.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.ClearGroups.Shown;
  return proto.rv.analytics.UI.ClearGroups.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.ClearGroups.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.ClearGroups.Shown}
 */
proto.rv.analytics.UI.ClearGroups.Shown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.ClearGroups.Shown.Source} */ (reader.readEnum());
      msg.setSource(value);
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
proto.rv.analytics.UI.ClearGroups.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.ClearGroups.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.ClearGroups.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.ClearGroups.Shown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
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
proto.rv.analytics.UI.ClearGroups.Shown.Source = {
  SOURCE_UNKNOWN: 0,
  SOURCE_APPLICATION_MENU: 1,
  SOURCE_PREVIEW_MENU: 2,
  SOURCE_ACTION_MENU: 3
};

/**
 * optional Source source = 1;
 * @return {!proto.rv.analytics.UI.ClearGroups.Shown.Source}
 */
proto.rv.analytics.UI.ClearGroups.Shown.prototype.getSource = function() {
  return /** @type {!proto.rv.analytics.UI.ClearGroups.Shown.Source} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.ClearGroups.Shown.Source} value
 * @return {!proto.rv.analytics.UI.ClearGroups.Shown} returns this
 */
proto.rv.analytics.UI.ClearGroups.Shown.prototype.setSource = function(value) {
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
proto.rv.analytics.UI.ClearGroups.Create.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.ClearGroups.Create.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.ClearGroups.Create} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.ClearGroups.Create.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.ClearGroups.Create}
 */
proto.rv.analytics.UI.ClearGroups.Create.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.ClearGroups.Create;
  return proto.rv.analytics.UI.ClearGroups.Create.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.ClearGroups.Create} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.ClearGroups.Create}
 */
proto.rv.analytics.UI.ClearGroups.Create.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.ClearGroups.Create.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.ClearGroups.Create.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.ClearGroups.Create} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.ClearGroups.Create.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.ClearGroups.Delete.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.ClearGroups.Delete.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.ClearGroups.Delete} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.ClearGroups.Delete.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.ClearGroups.Delete}
 */
proto.rv.analytics.UI.ClearGroups.Delete.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.ClearGroups.Delete;
  return proto.rv.analytics.UI.ClearGroups.Delete.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.ClearGroups.Delete} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.ClearGroups.Delete}
 */
proto.rv.analytics.UI.ClearGroups.Delete.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.ClearGroups.Delete.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.ClearGroups.Delete.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.ClearGroups.Delete} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.ClearGroups.Delete.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.ClearGroups.Group.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.ClearGroups.Group.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  CHANGE_VISIBILITY: 1,
  CHANGE_ICON: 2
};

/**
 * @return {proto.rv.analytics.UI.ClearGroups.Group.ComponentCase}
 */
proto.rv.analytics.UI.ClearGroups.Group.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.ClearGroups.Group.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.ClearGroups.Group.oneofGroups_[0]));
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
proto.rv.analytics.UI.ClearGroups.Group.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.ClearGroups.Group.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.ClearGroups.Group} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.ClearGroups.Group.toObject = function(includeInstance, msg) {
  var f, obj = {
changeVisibility: (f = msg.getChangeVisibility()) && proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility.toObject(includeInstance, f),
changeIcon: (f = msg.getChangeIcon()) && proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.ClearGroups.Group}
 */
proto.rv.analytics.UI.ClearGroups.Group.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.ClearGroups.Group;
  return proto.rv.analytics.UI.ClearGroups.Group.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.ClearGroups.Group} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.ClearGroups.Group}
 */
proto.rv.analytics.UI.ClearGroups.Group.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility;
      reader.readMessage(value,proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility.deserializeBinaryFromReader);
      msg.setChangeVisibility(value);
      break;
    case 2:
      var value = new proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon;
      reader.readMessage(value,proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon.deserializeBinaryFromReader);
      msg.setChangeIcon(value);
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
proto.rv.analytics.UI.ClearGroups.Group.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.ClearGroups.Group.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.ClearGroups.Group} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.ClearGroups.Group.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChangeVisibility();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility.serializeBinaryToWriter
    );
  }
  f = message.getChangeIcon();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon.serializeBinaryToWriter
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
proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility.toObject = function(includeInstance, msg) {
  var f, obj = {
visibility: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility}
 */
proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility;
  return proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility}
 */
proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility.Visibility} */ (reader.readEnum());
      msg.setVisibility(value);
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
proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVisibility();
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
proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility.Visibility = {
  VISIBILITY_UNKNOWN: 0,
  VISIBILITY_SHOWN: 1,
  VISIBILITY_HIDDEN: 2
};

/**
 * optional Visibility visibility = 1;
 * @return {!proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility.Visibility}
 */
proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility.prototype.getVisibility = function() {
  return /** @type {!proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility.Visibility} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility.Visibility} value
 * @return {!proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility} returns this
 */
proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility.prototype.setVisibility = function(value) {
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
proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon.toObject = function(includeInstance, msg) {
  var f, obj = {
iconType: jspb.Message.getFieldWithDefault(msg, 1, 0),
isTinted: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon}
 */
proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon;
  return proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon}
 */
proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon.IconType} */ (reader.readEnum());
      msg.setIconType(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsTinted(value);
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
proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIconType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getIsTinted();
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
proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon.IconType = {
  ICON_TYPE_UNKNOWN: 0,
  ICON_TYPE_DEFAULT: 1,
  ICON_TYPE_CUSTOM: 2
};

/**
 * optional IconType icon_type = 1;
 * @return {!proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon.IconType}
 */
proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon.prototype.getIconType = function() {
  return /** @type {!proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon.IconType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon.IconType} value
 * @return {!proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon} returns this
 */
proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon.prototype.setIconType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool is_tinted = 2;
 * @return {boolean}
 */
proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon.prototype.getIsTinted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon} returns this
 */
proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon.prototype.setIsTinted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional ChangeVisibility change_visibility = 1;
 * @return {?proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility}
 */
proto.rv.analytics.UI.ClearGroups.Group.prototype.getChangeVisibility = function() {
  return /** @type{?proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility, 1));
};


/**
 * @param {?proto.rv.analytics.UI.ClearGroups.Group.ChangeVisibility|undefined} value
 * @return {!proto.rv.analytics.UI.ClearGroups.Group} returns this
*/
proto.rv.analytics.UI.ClearGroups.Group.prototype.setChangeVisibility = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.ClearGroups.Group.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.ClearGroups.Group} returns this
 */
proto.rv.analytics.UI.ClearGroups.Group.prototype.clearChangeVisibility = function() {
  return this.setChangeVisibility(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.ClearGroups.Group.prototype.hasChangeVisibility = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ChangeIcon change_icon = 2;
 * @return {?proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon}
 */
proto.rv.analytics.UI.ClearGroups.Group.prototype.getChangeIcon = function() {
  return /** @type{?proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon, 2));
};


/**
 * @param {?proto.rv.analytics.UI.ClearGroups.Group.ChangeIcon|undefined} value
 * @return {!proto.rv.analytics.UI.ClearGroups.Group} returns this
*/
proto.rv.analytics.UI.ClearGroups.Group.prototype.setChangeIcon = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.analytics.UI.ClearGroups.Group.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.ClearGroups.Group} returns this
 */
proto.rv.analytics.UI.ClearGroups.Group.prototype.clearChangeIcon = function() {
  return this.setChangeIcon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.ClearGroups.Group.prototype.hasChangeIcon = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.ClearGroups.Shown}
 */
proto.rv.analytics.UI.ClearGroups.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.ClearGroups.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.ClearGroups.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.ClearGroups.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.ClearGroups} returns this
*/
proto.rv.analytics.UI.ClearGroups.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.ClearGroups.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.ClearGroups} returns this
 */
proto.rv.analytics.UI.ClearGroups.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.ClearGroups.prototype.hasShown = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Create create = 2;
 * @return {?proto.rv.analytics.UI.ClearGroups.Create}
 */
proto.rv.analytics.UI.ClearGroups.prototype.getCreate = function() {
  return /** @type{?proto.rv.analytics.UI.ClearGroups.Create} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.ClearGroups.Create, 2));
};


/**
 * @param {?proto.rv.analytics.UI.ClearGroups.Create|undefined} value
 * @return {!proto.rv.analytics.UI.ClearGroups} returns this
*/
proto.rv.analytics.UI.ClearGroups.prototype.setCreate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.analytics.UI.ClearGroups.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.ClearGroups} returns this
 */
proto.rv.analytics.UI.ClearGroups.prototype.clearCreate = function() {
  return this.setCreate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.ClearGroups.prototype.hasCreate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Delete delete = 3;
 * @return {?proto.rv.analytics.UI.ClearGroups.Delete}
 */
proto.rv.analytics.UI.ClearGroups.prototype.getDelete = function() {
  return /** @type{?proto.rv.analytics.UI.ClearGroups.Delete} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.ClearGroups.Delete, 3));
};


/**
 * @param {?proto.rv.analytics.UI.ClearGroups.Delete|undefined} value
 * @return {!proto.rv.analytics.UI.ClearGroups} returns this
*/
proto.rv.analytics.UI.ClearGroups.prototype.setDelete = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.analytics.UI.ClearGroups.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.ClearGroups} returns this
 */
proto.rv.analytics.UI.ClearGroups.prototype.clearDelete = function() {
  return this.setDelete(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.ClearGroups.prototype.hasDelete = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Group group = 4;
 * @return {?proto.rv.analytics.UI.ClearGroups.Group}
 */
proto.rv.analytics.UI.ClearGroups.prototype.getGroup = function() {
  return /** @type{?proto.rv.analytics.UI.ClearGroups.Group} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.ClearGroups.Group, 4));
};


/**
 * @param {?proto.rv.analytics.UI.ClearGroups.Group|undefined} value
 * @return {!proto.rv.analytics.UI.ClearGroups} returns this
*/
proto.rv.analytics.UI.ClearGroups.prototype.setGroup = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rv.analytics.UI.ClearGroups.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.ClearGroups} returns this
 */
proto.rv.analytics.UI.ClearGroups.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.ClearGroups.prototype.hasGroup = function() {
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
proto.rv.analytics.UI.PreviewArea.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.PreviewArea.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  CLEAR_GROUPS: 1
};

/**
 * @return {proto.rv.analytics.UI.PreviewArea.ComponentCase}
 */
proto.rv.analytics.UI.PreviewArea.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.PreviewArea.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.PreviewArea.oneofGroups_[0]));
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
proto.rv.analytics.UI.PreviewArea.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.PreviewArea.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.PreviewArea} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.PreviewArea.toObject = function(includeInstance, msg) {
  var f, obj = {
clearGroups: (f = msg.getClearGroups()) && proto.rv.analytics.UI.PreviewArea.ClearGroups.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.PreviewArea}
 */
proto.rv.analytics.UI.PreviewArea.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.PreviewArea;
  return proto.rv.analytics.UI.PreviewArea.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.PreviewArea} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.PreviewArea}
 */
proto.rv.analytics.UI.PreviewArea.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.PreviewArea.ClearGroups;
      reader.readMessage(value,proto.rv.analytics.UI.PreviewArea.ClearGroups.deserializeBinaryFromReader);
      msg.setClearGroups(value);
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
proto.rv.analytics.UI.PreviewArea.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.PreviewArea.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.PreviewArea} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.PreviewArea.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClearGroups();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.PreviewArea.ClearGroups.serializeBinaryToWriter
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
proto.rv.analytics.UI.PreviewArea.ClearGroups.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.PreviewArea.ClearGroups.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  TRIGGER: 1,
  CHANGED: 2
};

/**
 * @return {proto.rv.analytics.UI.PreviewArea.ClearGroups.ComponentCase}
 */
proto.rv.analytics.UI.PreviewArea.ClearGroups.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.PreviewArea.ClearGroups.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.PreviewArea.ClearGroups.oneofGroups_[0]));
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
proto.rv.analytics.UI.PreviewArea.ClearGroups.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.PreviewArea.ClearGroups.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.PreviewArea.ClearGroups} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.PreviewArea.ClearGroups.toObject = function(includeInstance, msg) {
  var f, obj = {
trigger: (f = msg.getTrigger()) && proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger.toObject(includeInstance, f),
changed: (f = msg.getChanged()) && proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.PreviewArea.ClearGroups}
 */
proto.rv.analytics.UI.PreviewArea.ClearGroups.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.PreviewArea.ClearGroups;
  return proto.rv.analytics.UI.PreviewArea.ClearGroups.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.PreviewArea.ClearGroups} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.PreviewArea.ClearGroups}
 */
proto.rv.analytics.UI.PreviewArea.ClearGroups.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger;
      reader.readMessage(value,proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger.deserializeBinaryFromReader);
      msg.setTrigger(value);
      break;
    case 2:
      var value = new proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed;
      reader.readMessage(value,proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed.deserializeBinaryFromReader);
      msg.setChanged(value);
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
proto.rv.analytics.UI.PreviewArea.ClearGroups.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.PreviewArea.ClearGroups.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.PreviewArea.ClearGroups} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.PreviewArea.ClearGroups.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrigger();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger.serializeBinaryToWriter
    );
  }
  f = message.getChanged();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed.serializeBinaryToWriter
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
proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger}
 */
proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger;
  return proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger}
 */
proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed.toObject = function(includeInstance, msg) {
  var f, obj = {
count: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed}
 */
proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed;
  return proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed}
 */
proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
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
proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 count = 1;
 * @return {number}
 */
proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed} returns this
 */
proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Trigger trigger = 1;
 * @return {?proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger}
 */
proto.rv.analytics.UI.PreviewArea.ClearGroups.prototype.getTrigger = function() {
  return /** @type{?proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger, 1));
};


/**
 * @param {?proto.rv.analytics.UI.PreviewArea.ClearGroups.Trigger|undefined} value
 * @return {!proto.rv.analytics.UI.PreviewArea.ClearGroups} returns this
*/
proto.rv.analytics.UI.PreviewArea.ClearGroups.prototype.setTrigger = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.PreviewArea.ClearGroups.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.PreviewArea.ClearGroups} returns this
 */
proto.rv.analytics.UI.PreviewArea.ClearGroups.prototype.clearTrigger = function() {
  return this.setTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.PreviewArea.ClearGroups.prototype.hasTrigger = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Changed changed = 2;
 * @return {?proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed}
 */
proto.rv.analytics.UI.PreviewArea.ClearGroups.prototype.getChanged = function() {
  return /** @type{?proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed, 2));
};


/**
 * @param {?proto.rv.analytics.UI.PreviewArea.ClearGroups.Changed|undefined} value
 * @return {!proto.rv.analytics.UI.PreviewArea.ClearGroups} returns this
*/
proto.rv.analytics.UI.PreviewArea.ClearGroups.prototype.setChanged = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.analytics.UI.PreviewArea.ClearGroups.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.PreviewArea.ClearGroups} returns this
 */
proto.rv.analytics.UI.PreviewArea.ClearGroups.prototype.clearChanged = function() {
  return this.setChanged(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.PreviewArea.ClearGroups.prototype.hasChanged = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ClearGroups clear_groups = 1;
 * @return {?proto.rv.analytics.UI.PreviewArea.ClearGroups}
 */
proto.rv.analytics.UI.PreviewArea.prototype.getClearGroups = function() {
  return /** @type{?proto.rv.analytics.UI.PreviewArea.ClearGroups} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.PreviewArea.ClearGroups, 1));
};


/**
 * @param {?proto.rv.analytics.UI.PreviewArea.ClearGroups|undefined} value
 * @return {!proto.rv.analytics.UI.PreviewArea} returns this
*/
proto.rv.analytics.UI.PreviewArea.prototype.setClearGroups = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.PreviewArea.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.PreviewArea} returns this
 */
proto.rv.analytics.UI.PreviewArea.prototype.clearClearGroups = function() {
  return this.setClearGroups(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.PreviewArea.prototype.hasClearGroups = function() {
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
proto.rv.analytics.UI.Placeholder.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.Placeholder.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  LINK: 1,
  UNLINK: 2
};

/**
 * @return {proto.rv.analytics.UI.Placeholder.ComponentCase}
 */
proto.rv.analytics.UI.Placeholder.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.Placeholder.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.Placeholder.oneofGroups_[0]));
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
proto.rv.analytics.UI.Placeholder.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.Placeholder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.Placeholder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Placeholder.toObject = function(includeInstance, msg) {
  var f, obj = {
link: (f = msg.getLink()) && proto.rv.analytics.UI.Placeholder.Link.toObject(includeInstance, f),
unlink: (f = msg.getUnlink()) && proto.rv.analytics.UI.Placeholder.Unlink.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.Placeholder}
 */
proto.rv.analytics.UI.Placeholder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.Placeholder;
  return proto.rv.analytics.UI.Placeholder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.Placeholder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.Placeholder}
 */
proto.rv.analytics.UI.Placeholder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.Placeholder.Link;
      reader.readMessage(value,proto.rv.analytics.UI.Placeholder.Link.deserializeBinaryFromReader);
      msg.setLink(value);
      break;
    case 2:
      var value = new proto.rv.analytics.UI.Placeholder.Unlink;
      reader.readMessage(value,proto.rv.analytics.UI.Placeholder.Unlink.deserializeBinaryFromReader);
      msg.setUnlink(value);
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
proto.rv.analytics.UI.Placeholder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.Placeholder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.Placeholder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Placeholder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLink();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.Placeholder.Link.serializeBinaryToWriter
    );
  }
  f = message.getUnlink();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.analytics.UI.Placeholder.Unlink.serializeBinaryToWriter
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
proto.rv.analytics.UI.Placeholder.Link.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.Placeholder.Link.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.Placeholder.Link} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Placeholder.Link.toObject = function(includeInstance, msg) {
  var f, obj = {
linkType: jspb.Message.getFieldWithDefault(msg, 1, 0),
linkSource: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.rv.analytics.UI.Placeholder.Link}
 */
proto.rv.analytics.UI.Placeholder.Link.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.Placeholder.Link;
  return proto.rv.analytics.UI.Placeholder.Link.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.Placeholder.Link} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.Placeholder.Link}
 */
proto.rv.analytics.UI.Placeholder.Link.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.Placeholder.Link.Type} */ (reader.readEnum());
      msg.setLinkType(value);
      break;
    case 2:
      var value = /** @type {!proto.rv.analytics.UI.Placeholder.Link.Source} */ (reader.readEnum());
      msg.setLinkSource(value);
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
proto.rv.analytics.UI.Placeholder.Link.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.Placeholder.Link.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.Placeholder.Link} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Placeholder.Link.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLinkType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getLinkSource();
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
proto.rv.analytics.UI.Placeholder.Link.Type = {
  TYPE_UNKNOWN: 0,
  TYPE_PRESENTATION: 1,
  TYPE_MEDIA: 2,
  TYPE_EXTERNAL_PRESENTATION: 3
};

/**
 * @enum {number}
 */
proto.rv.analytics.UI.Placeholder.Link.Source = {
  SOURCE_UNKNOWN: 0,
  SOURCE_QUICK_SEARCH: 1,
  SOURCE_IMPORT_BUTTON: 2,
  SOURCE_CREATE_BUTTON: 3,
  SOURCE_DRAG_DROP: 4,
  SOURCE_AUTOMATIC: 5
};

/**
 * optional Type link_type = 1;
 * @return {!proto.rv.analytics.UI.Placeholder.Link.Type}
 */
proto.rv.analytics.UI.Placeholder.Link.prototype.getLinkType = function() {
  return /** @type {!proto.rv.analytics.UI.Placeholder.Link.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.Placeholder.Link.Type} value
 * @return {!proto.rv.analytics.UI.Placeholder.Link} returns this
 */
proto.rv.analytics.UI.Placeholder.Link.prototype.setLinkType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Source link_source = 2;
 * @return {!proto.rv.analytics.UI.Placeholder.Link.Source}
 */
proto.rv.analytics.UI.Placeholder.Link.prototype.getLinkSource = function() {
  return /** @type {!proto.rv.analytics.UI.Placeholder.Link.Source} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rv.analytics.UI.Placeholder.Link.Source} value
 * @return {!proto.rv.analytics.UI.Placeholder.Link} returns this
 */
proto.rv.analytics.UI.Placeholder.Link.prototype.setLinkSource = function(value) {
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
proto.rv.analytics.UI.Placeholder.Unlink.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.Placeholder.Unlink.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.Placeholder.Unlink} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Placeholder.Unlink.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.Placeholder.Unlink}
 */
proto.rv.analytics.UI.Placeholder.Unlink.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.Placeholder.Unlink;
  return proto.rv.analytics.UI.Placeholder.Unlink.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.Placeholder.Unlink} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.Placeholder.Unlink}
 */
proto.rv.analytics.UI.Placeholder.Unlink.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.Placeholder.Unlink.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.Placeholder.Unlink.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.Placeholder.Unlink} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Placeholder.Unlink.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional Link link = 1;
 * @return {?proto.rv.analytics.UI.Placeholder.Link}
 */
proto.rv.analytics.UI.Placeholder.prototype.getLink = function() {
  return /** @type{?proto.rv.analytics.UI.Placeholder.Link} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.Placeholder.Link, 1));
};


/**
 * @param {?proto.rv.analytics.UI.Placeholder.Link|undefined} value
 * @return {!proto.rv.analytics.UI.Placeholder} returns this
*/
proto.rv.analytics.UI.Placeholder.prototype.setLink = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.Placeholder.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.Placeholder} returns this
 */
proto.rv.analytics.UI.Placeholder.prototype.clearLink = function() {
  return this.setLink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.Placeholder.prototype.hasLink = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Unlink unlink = 2;
 * @return {?proto.rv.analytics.UI.Placeholder.Unlink}
 */
proto.rv.analytics.UI.Placeholder.prototype.getUnlink = function() {
  return /** @type{?proto.rv.analytics.UI.Placeholder.Unlink} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.Placeholder.Unlink, 2));
};


/**
 * @param {?proto.rv.analytics.UI.Placeholder.Unlink|undefined} value
 * @return {!proto.rv.analytics.UI.Placeholder} returns this
*/
proto.rv.analytics.UI.Placeholder.prototype.setUnlink = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.analytics.UI.Placeholder.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.Placeholder} returns this
 */
proto.rv.analytics.UI.Placeholder.prototype.clearUnlink = function() {
  return this.setUnlink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.Placeholder.prototype.hasUnlink = function() {
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
proto.rv.analytics.UI.PlanningCenterLive.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.PlanningCenterLive.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1
};

/**
 * @return {proto.rv.analytics.UI.PlanningCenterLive.ComponentCase}
 */
proto.rv.analytics.UI.PlanningCenterLive.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.PlanningCenterLive.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.PlanningCenterLive.oneofGroups_[0]));
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
proto.rv.analytics.UI.PlanningCenterLive.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.PlanningCenterLive.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.PlanningCenterLive} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.PlanningCenterLive.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.PlanningCenterLive.Shown.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.PlanningCenterLive}
 */
proto.rv.analytics.UI.PlanningCenterLive.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.PlanningCenterLive;
  return proto.rv.analytics.UI.PlanningCenterLive.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.PlanningCenterLive} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.PlanningCenterLive}
 */
proto.rv.analytics.UI.PlanningCenterLive.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.PlanningCenterLive.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.PlanningCenterLive.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
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
proto.rv.analytics.UI.PlanningCenterLive.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.PlanningCenterLive.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.PlanningCenterLive} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.PlanningCenterLive.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.PlanningCenterLive.Shown.serializeBinaryToWriter
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
proto.rv.analytics.UI.PlanningCenterLive.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.PlanningCenterLive.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.PlanningCenterLive.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.PlanningCenterLive.Shown.toObject = function(includeInstance, msg) {
  var f, obj = {
windowType: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.PlanningCenterLive.Shown}
 */
proto.rv.analytics.UI.PlanningCenterLive.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.PlanningCenterLive.Shown;
  return proto.rv.analytics.UI.PlanningCenterLive.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.PlanningCenterLive.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.PlanningCenterLive.Shown}
 */
proto.rv.analytics.UI.PlanningCenterLive.Shown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.PlanningCenterLive.Shown.WindowType} */ (reader.readEnum());
      msg.setWindowType(value);
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
proto.rv.analytics.UI.PlanningCenterLive.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.PlanningCenterLive.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.PlanningCenterLive.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.PlanningCenterLive.Shown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWindowType();
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
proto.rv.analytics.UI.PlanningCenterLive.Shown.WindowType = {
  WINDOW_TYPE_UNKNOWN: 0,
  WINDOW_TYPE_DOCKED: 1,
  WINDOW_TYPE_FLOATING: 2
};

/**
 * optional WindowType window_type = 1;
 * @return {!proto.rv.analytics.UI.PlanningCenterLive.Shown.WindowType}
 */
proto.rv.analytics.UI.PlanningCenterLive.Shown.prototype.getWindowType = function() {
  return /** @type {!proto.rv.analytics.UI.PlanningCenterLive.Shown.WindowType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.PlanningCenterLive.Shown.WindowType} value
 * @return {!proto.rv.analytics.UI.PlanningCenterLive.Shown} returns this
 */
proto.rv.analytics.UI.PlanningCenterLive.Shown.prototype.setWindowType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.PlanningCenterLive.Shown}
 */
proto.rv.analytics.UI.PlanningCenterLive.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.PlanningCenterLive.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.PlanningCenterLive.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.PlanningCenterLive.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.PlanningCenterLive} returns this
*/
proto.rv.analytics.UI.PlanningCenterLive.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.PlanningCenterLive.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.PlanningCenterLive} returns this
 */
proto.rv.analytics.UI.PlanningCenterLive.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.PlanningCenterLive.prototype.hasShown = function() {
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
proto.rv.analytics.UI.NetworkGroup.oneofGroups_ = [[1,2,3,4,5,6]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.NetworkGroup.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  CREATE: 1,
  ADD: 2,
  JOIN: 3,
  INVITE: 4,
  LEAVE: 5,
  REMOVE: 6
};

/**
 * @return {proto.rv.analytics.UI.NetworkGroup.ComponentCase}
 */
proto.rv.analytics.UI.NetworkGroup.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.NetworkGroup.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.NetworkGroup.oneofGroups_[0]));
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
proto.rv.analytics.UI.NetworkGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.NetworkGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.NetworkGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.NetworkGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
create: (f = msg.getCreate()) && proto.rv.analytics.UI.NetworkGroup.Create.toObject(includeInstance, f),
add: (f = msg.getAdd()) && proto.rv.analytics.UI.NetworkGroup.Add.toObject(includeInstance, f),
join: (f = msg.getJoin()) && proto.rv.analytics.UI.NetworkGroup.Join.toObject(includeInstance, f),
invite: (f = msg.getInvite()) && proto.rv.analytics.UI.NetworkGroup.Invite.toObject(includeInstance, f),
leave: (f = msg.getLeave()) && proto.rv.analytics.UI.NetworkGroup.Leave.toObject(includeInstance, f),
remove: (f = msg.getRemove()) && proto.rv.analytics.UI.NetworkGroup.Remove.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.NetworkGroup}
 */
proto.rv.analytics.UI.NetworkGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.NetworkGroup;
  return proto.rv.analytics.UI.NetworkGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.NetworkGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.NetworkGroup}
 */
proto.rv.analytics.UI.NetworkGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.NetworkGroup.Create;
      reader.readMessage(value,proto.rv.analytics.UI.NetworkGroup.Create.deserializeBinaryFromReader);
      msg.setCreate(value);
      break;
    case 2:
      var value = new proto.rv.analytics.UI.NetworkGroup.Add;
      reader.readMessage(value,proto.rv.analytics.UI.NetworkGroup.Add.deserializeBinaryFromReader);
      msg.setAdd(value);
      break;
    case 3:
      var value = new proto.rv.analytics.UI.NetworkGroup.Join;
      reader.readMessage(value,proto.rv.analytics.UI.NetworkGroup.Join.deserializeBinaryFromReader);
      msg.setJoin(value);
      break;
    case 4:
      var value = new proto.rv.analytics.UI.NetworkGroup.Invite;
      reader.readMessage(value,proto.rv.analytics.UI.NetworkGroup.Invite.deserializeBinaryFromReader);
      msg.setInvite(value);
      break;
    case 5:
      var value = new proto.rv.analytics.UI.NetworkGroup.Leave;
      reader.readMessage(value,proto.rv.analytics.UI.NetworkGroup.Leave.deserializeBinaryFromReader);
      msg.setLeave(value);
      break;
    case 6:
      var value = new proto.rv.analytics.UI.NetworkGroup.Remove;
      reader.readMessage(value,proto.rv.analytics.UI.NetworkGroup.Remove.deserializeBinaryFromReader);
      msg.setRemove(value);
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
proto.rv.analytics.UI.NetworkGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.NetworkGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.NetworkGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.NetworkGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.NetworkGroup.Create.serializeBinaryToWriter
    );
  }
  f = message.getAdd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.analytics.UI.NetworkGroup.Add.serializeBinaryToWriter
    );
  }
  f = message.getJoin();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.analytics.UI.NetworkGroup.Join.serializeBinaryToWriter
    );
  }
  f = message.getInvite();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.analytics.UI.NetworkGroup.Invite.serializeBinaryToWriter
    );
  }
  f = message.getLeave();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.analytics.UI.NetworkGroup.Leave.serializeBinaryToWriter
    );
  }
  f = message.getRemove();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.rv.analytics.UI.NetworkGroup.Remove.serializeBinaryToWriter
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
proto.rv.analytics.UI.NetworkGroup.Create.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.NetworkGroup.Create.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.NetworkGroup.Create} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.NetworkGroup.Create.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.NetworkGroup.Create}
 */
proto.rv.analytics.UI.NetworkGroup.Create.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.NetworkGroup.Create;
  return proto.rv.analytics.UI.NetworkGroup.Create.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.NetworkGroup.Create} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.NetworkGroup.Create}
 */
proto.rv.analytics.UI.NetworkGroup.Create.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.NetworkGroup.Create.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.NetworkGroup.Create.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.NetworkGroup.Create} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.NetworkGroup.Create.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.NetworkGroup.Add.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.NetworkGroup.Add.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.NetworkGroup.Add} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.NetworkGroup.Add.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.NetworkGroup.Add}
 */
proto.rv.analytics.UI.NetworkGroup.Add.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.NetworkGroup.Add;
  return proto.rv.analytics.UI.NetworkGroup.Add.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.NetworkGroup.Add} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.NetworkGroup.Add}
 */
proto.rv.analytics.UI.NetworkGroup.Add.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.NetworkGroup.Add.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.NetworkGroup.Add.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.NetworkGroup.Add} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.NetworkGroup.Add.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.NetworkGroup.Join.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.NetworkGroup.Join.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.NetworkGroup.Join} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.NetworkGroup.Join.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.NetworkGroup.Join}
 */
proto.rv.analytics.UI.NetworkGroup.Join.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.NetworkGroup.Join;
  return proto.rv.analytics.UI.NetworkGroup.Join.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.NetworkGroup.Join} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.NetworkGroup.Join}
 */
proto.rv.analytics.UI.NetworkGroup.Join.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.NetworkGroup.Join.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.NetworkGroup.Join.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.NetworkGroup.Join} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.NetworkGroup.Join.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.NetworkGroup.Invite.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.NetworkGroup.Invite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.NetworkGroup.Invite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.NetworkGroup.Invite.toObject = function(includeInstance, msg) {
  var f, obj = {
didAccept: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.rv.analytics.UI.NetworkGroup.Invite}
 */
proto.rv.analytics.UI.NetworkGroup.Invite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.NetworkGroup.Invite;
  return proto.rv.analytics.UI.NetworkGroup.Invite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.NetworkGroup.Invite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.NetworkGroup.Invite}
 */
proto.rv.analytics.UI.NetworkGroup.Invite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDidAccept(value);
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
proto.rv.analytics.UI.NetworkGroup.Invite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.NetworkGroup.Invite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.NetworkGroup.Invite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.NetworkGroup.Invite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDidAccept();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool did_accept = 1;
 * @return {boolean}
 */
proto.rv.analytics.UI.NetworkGroup.Invite.prototype.getDidAccept = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.analytics.UI.NetworkGroup.Invite} returns this
 */
proto.rv.analytics.UI.NetworkGroup.Invite.prototype.setDidAccept = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
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
proto.rv.analytics.UI.NetworkGroup.Leave.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.NetworkGroup.Leave.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.NetworkGroup.Leave} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.NetworkGroup.Leave.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.NetworkGroup.Leave}
 */
proto.rv.analytics.UI.NetworkGroup.Leave.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.NetworkGroup.Leave;
  return proto.rv.analytics.UI.NetworkGroup.Leave.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.NetworkGroup.Leave} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.NetworkGroup.Leave}
 */
proto.rv.analytics.UI.NetworkGroup.Leave.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.NetworkGroup.Leave.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.NetworkGroup.Leave.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.NetworkGroup.Leave} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.NetworkGroup.Leave.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.NetworkGroup.Remove.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.NetworkGroup.Remove.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.NetworkGroup.Remove} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.NetworkGroup.Remove.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.NetworkGroup.Remove}
 */
proto.rv.analytics.UI.NetworkGroup.Remove.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.NetworkGroup.Remove;
  return proto.rv.analytics.UI.NetworkGroup.Remove.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.NetworkGroup.Remove} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.NetworkGroup.Remove}
 */
proto.rv.analytics.UI.NetworkGroup.Remove.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.NetworkGroup.Remove.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.NetworkGroup.Remove.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.NetworkGroup.Remove} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.NetworkGroup.Remove.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional Create create = 1;
 * @return {?proto.rv.analytics.UI.NetworkGroup.Create}
 */
proto.rv.analytics.UI.NetworkGroup.prototype.getCreate = function() {
  return /** @type{?proto.rv.analytics.UI.NetworkGroup.Create} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.NetworkGroup.Create, 1));
};


/**
 * @param {?proto.rv.analytics.UI.NetworkGroup.Create|undefined} value
 * @return {!proto.rv.analytics.UI.NetworkGroup} returns this
*/
proto.rv.analytics.UI.NetworkGroup.prototype.setCreate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.NetworkGroup.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.NetworkGroup} returns this
 */
proto.rv.analytics.UI.NetworkGroup.prototype.clearCreate = function() {
  return this.setCreate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.NetworkGroup.prototype.hasCreate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Add add = 2;
 * @return {?proto.rv.analytics.UI.NetworkGroup.Add}
 */
proto.rv.analytics.UI.NetworkGroup.prototype.getAdd = function() {
  return /** @type{?proto.rv.analytics.UI.NetworkGroup.Add} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.NetworkGroup.Add, 2));
};


/**
 * @param {?proto.rv.analytics.UI.NetworkGroup.Add|undefined} value
 * @return {!proto.rv.analytics.UI.NetworkGroup} returns this
*/
proto.rv.analytics.UI.NetworkGroup.prototype.setAdd = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.analytics.UI.NetworkGroup.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.NetworkGroup} returns this
 */
proto.rv.analytics.UI.NetworkGroup.prototype.clearAdd = function() {
  return this.setAdd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.NetworkGroup.prototype.hasAdd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Join join = 3;
 * @return {?proto.rv.analytics.UI.NetworkGroup.Join}
 */
proto.rv.analytics.UI.NetworkGroup.prototype.getJoin = function() {
  return /** @type{?proto.rv.analytics.UI.NetworkGroup.Join} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.NetworkGroup.Join, 3));
};


/**
 * @param {?proto.rv.analytics.UI.NetworkGroup.Join|undefined} value
 * @return {!proto.rv.analytics.UI.NetworkGroup} returns this
*/
proto.rv.analytics.UI.NetworkGroup.prototype.setJoin = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.analytics.UI.NetworkGroup.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.NetworkGroup} returns this
 */
proto.rv.analytics.UI.NetworkGroup.prototype.clearJoin = function() {
  return this.setJoin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.NetworkGroup.prototype.hasJoin = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Invite invite = 4;
 * @return {?proto.rv.analytics.UI.NetworkGroup.Invite}
 */
proto.rv.analytics.UI.NetworkGroup.prototype.getInvite = function() {
  return /** @type{?proto.rv.analytics.UI.NetworkGroup.Invite} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.NetworkGroup.Invite, 4));
};


/**
 * @param {?proto.rv.analytics.UI.NetworkGroup.Invite|undefined} value
 * @return {!proto.rv.analytics.UI.NetworkGroup} returns this
*/
proto.rv.analytics.UI.NetworkGroup.prototype.setInvite = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rv.analytics.UI.NetworkGroup.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.NetworkGroup} returns this
 */
proto.rv.analytics.UI.NetworkGroup.prototype.clearInvite = function() {
  return this.setInvite(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.NetworkGroup.prototype.hasInvite = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Leave leave = 5;
 * @return {?proto.rv.analytics.UI.NetworkGroup.Leave}
 */
proto.rv.analytics.UI.NetworkGroup.prototype.getLeave = function() {
  return /** @type{?proto.rv.analytics.UI.NetworkGroup.Leave} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.NetworkGroup.Leave, 5));
};


/**
 * @param {?proto.rv.analytics.UI.NetworkGroup.Leave|undefined} value
 * @return {!proto.rv.analytics.UI.NetworkGroup} returns this
*/
proto.rv.analytics.UI.NetworkGroup.prototype.setLeave = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.rv.analytics.UI.NetworkGroup.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.NetworkGroup} returns this
 */
proto.rv.analytics.UI.NetworkGroup.prototype.clearLeave = function() {
  return this.setLeave(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.NetworkGroup.prototype.hasLeave = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Remove remove = 6;
 * @return {?proto.rv.analytics.UI.NetworkGroup.Remove}
 */
proto.rv.analytics.UI.NetworkGroup.prototype.getRemove = function() {
  return /** @type{?proto.rv.analytics.UI.NetworkGroup.Remove} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.NetworkGroup.Remove, 6));
};


/**
 * @param {?proto.rv.analytics.UI.NetworkGroup.Remove|undefined} value
 * @return {!proto.rv.analytics.UI.NetworkGroup} returns this
*/
proto.rv.analytics.UI.NetworkGroup.prototype.setRemove = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.rv.analytics.UI.NetworkGroup.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.NetworkGroup} returns this
 */
proto.rv.analytics.UI.NetworkGroup.prototype.clearRemove = function() {
  return this.setRemove(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.NetworkGroup.prototype.hasRemove = function() {
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
proto.rv.analytics.UI.CCLI.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.CCLI.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.CCLI} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.CCLI.toObject = function(includeInstance, msg) {
  var f, obj = {
report: (f = msg.getReport()) && proto.rv.analytics.UI.CCLI.Report.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.CCLI}
 */
proto.rv.analytics.UI.CCLI.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.CCLI;
  return proto.rv.analytics.UI.CCLI.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.CCLI} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.CCLI}
 */
proto.rv.analytics.UI.CCLI.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.CCLI.Report;
      reader.readMessage(value,proto.rv.analytics.UI.CCLI.Report.deserializeBinaryFromReader);
      msg.setReport(value);
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
proto.rv.analytics.UI.CCLI.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.CCLI.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.CCLI} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.CCLI.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.CCLI.Report.serializeBinaryToWriter
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
proto.rv.analytics.UI.CCLI.Report.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.CCLI.Report.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1,
  RESET: 2,
  EXPORT: 3
};

/**
 * @return {proto.rv.analytics.UI.CCLI.Report.ComponentCase}
 */
proto.rv.analytics.UI.CCLI.Report.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.CCLI.Report.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.CCLI.Report.oneofGroups_[0]));
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
proto.rv.analytics.UI.CCLI.Report.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.CCLI.Report.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.CCLI.Report} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.CCLI.Report.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.CCLI.Report.Shown.toObject(includeInstance, f),
reset: (f = msg.getReset()) && proto.rv.analytics.UI.CCLI.Report.Reset.toObject(includeInstance, f),
pb_export: (f = msg.getExport()) && proto.rv.analytics.UI.CCLI.Report.Export.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.CCLI.Report}
 */
proto.rv.analytics.UI.CCLI.Report.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.CCLI.Report;
  return proto.rv.analytics.UI.CCLI.Report.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.CCLI.Report} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.CCLI.Report}
 */
proto.rv.analytics.UI.CCLI.Report.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.CCLI.Report.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.CCLI.Report.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
      break;
    case 2:
      var value = new proto.rv.analytics.UI.CCLI.Report.Reset;
      reader.readMessage(value,proto.rv.analytics.UI.CCLI.Report.Reset.deserializeBinaryFromReader);
      msg.setReset(value);
      break;
    case 3:
      var value = new proto.rv.analytics.UI.CCLI.Report.Export;
      reader.readMessage(value,proto.rv.analytics.UI.CCLI.Report.Export.deserializeBinaryFromReader);
      msg.setExport(value);
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
proto.rv.analytics.UI.CCLI.Report.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.CCLI.Report.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.CCLI.Report} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.CCLI.Report.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.CCLI.Report.Shown.serializeBinaryToWriter
    );
  }
  f = message.getReset();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.analytics.UI.CCLI.Report.Reset.serializeBinaryToWriter
    );
  }
  f = message.getExport();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.analytics.UI.CCLI.Report.Export.serializeBinaryToWriter
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
proto.rv.analytics.UI.CCLI.Report.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.CCLI.Report.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.CCLI.Report.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.CCLI.Report.Shown.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.CCLI.Report.Shown}
 */
proto.rv.analytics.UI.CCLI.Report.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.CCLI.Report.Shown;
  return proto.rv.analytics.UI.CCLI.Report.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.CCLI.Report.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.CCLI.Report.Shown}
 */
proto.rv.analytics.UI.CCLI.Report.Shown.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.CCLI.Report.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.CCLI.Report.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.CCLI.Report.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.CCLI.Report.Shown.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.CCLI.Report.Reset.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.CCLI.Report.Reset.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.CCLI.Report.Reset} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.CCLI.Report.Reset.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.CCLI.Report.Reset}
 */
proto.rv.analytics.UI.CCLI.Report.Reset.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.CCLI.Report.Reset;
  return proto.rv.analytics.UI.CCLI.Report.Reset.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.CCLI.Report.Reset} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.CCLI.Report.Reset}
 */
proto.rv.analytics.UI.CCLI.Report.Reset.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.CCLI.Report.Reset.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.CCLI.Report.Reset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.CCLI.Report.Reset} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.CCLI.Report.Reset.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.CCLI.Report.Export.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.CCLI.Report.Export.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.CCLI.Report.Export} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.CCLI.Report.Export.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.CCLI.Report.Export}
 */
proto.rv.analytics.UI.CCLI.Report.Export.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.CCLI.Report.Export;
  return proto.rv.analytics.UI.CCLI.Report.Export.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.CCLI.Report.Export} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.CCLI.Report.Export}
 */
proto.rv.analytics.UI.CCLI.Report.Export.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.CCLI.Report.Export.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.CCLI.Report.Export.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.CCLI.Report.Export} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.CCLI.Report.Export.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.CCLI.Report.Shown}
 */
proto.rv.analytics.UI.CCLI.Report.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.CCLI.Report.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.CCLI.Report.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.CCLI.Report.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.CCLI.Report} returns this
*/
proto.rv.analytics.UI.CCLI.Report.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.CCLI.Report.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.CCLI.Report} returns this
 */
proto.rv.analytics.UI.CCLI.Report.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.CCLI.Report.prototype.hasShown = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reset reset = 2;
 * @return {?proto.rv.analytics.UI.CCLI.Report.Reset}
 */
proto.rv.analytics.UI.CCLI.Report.prototype.getReset = function() {
  return /** @type{?proto.rv.analytics.UI.CCLI.Report.Reset} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.CCLI.Report.Reset, 2));
};


/**
 * @param {?proto.rv.analytics.UI.CCLI.Report.Reset|undefined} value
 * @return {!proto.rv.analytics.UI.CCLI.Report} returns this
*/
proto.rv.analytics.UI.CCLI.Report.prototype.setReset = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.analytics.UI.CCLI.Report.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.CCLI.Report} returns this
 */
proto.rv.analytics.UI.CCLI.Report.prototype.clearReset = function() {
  return this.setReset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.CCLI.Report.prototype.hasReset = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Export export = 3;
 * @return {?proto.rv.analytics.UI.CCLI.Report.Export}
 */
proto.rv.analytics.UI.CCLI.Report.prototype.getExport = function() {
  return /** @type{?proto.rv.analytics.UI.CCLI.Report.Export} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.CCLI.Report.Export, 3));
};


/**
 * @param {?proto.rv.analytics.UI.CCLI.Report.Export|undefined} value
 * @return {!proto.rv.analytics.UI.CCLI.Report} returns this
*/
proto.rv.analytics.UI.CCLI.Report.prototype.setExport = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.analytics.UI.CCLI.Report.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.CCLI.Report} returns this
 */
proto.rv.analytics.UI.CCLI.Report.prototype.clearExport = function() {
  return this.setExport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.CCLI.Report.prototype.hasExport = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Report report = 1;
 * @return {?proto.rv.analytics.UI.CCLI.Report}
 */
proto.rv.analytics.UI.CCLI.prototype.getReport = function() {
  return /** @type{?proto.rv.analytics.UI.CCLI.Report} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.CCLI.Report, 1));
};


/**
 * @param {?proto.rv.analytics.UI.CCLI.Report|undefined} value
 * @return {!proto.rv.analytics.UI.CCLI} returns this
*/
proto.rv.analytics.UI.CCLI.prototype.setReport = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.CCLI} returns this
 */
proto.rv.analytics.UI.CCLI.prototype.clearReport = function() {
  return this.setReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.CCLI.prototype.hasReport = function() {
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
proto.rv.analytics.UI.Capture.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.Capture.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1
};

/**
 * @return {proto.rv.analytics.UI.Capture.ComponentCase}
 */
proto.rv.analytics.UI.Capture.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.Capture.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.Capture.oneofGroups_[0]));
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
proto.rv.analytics.UI.Capture.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.Capture.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.Capture} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Capture.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.Capture.Shown.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.Capture}
 */
proto.rv.analytics.UI.Capture.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.Capture;
  return proto.rv.analytics.UI.Capture.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.Capture} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.Capture}
 */
proto.rv.analytics.UI.Capture.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.Capture.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.Capture.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
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
proto.rv.analytics.UI.Capture.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.Capture.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.Capture} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Capture.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.Capture.Shown.serializeBinaryToWriter
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
proto.rv.analytics.UI.Capture.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.Capture.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.Capture.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Capture.Shown.toObject = function(includeInstance, msg) {
  var f, obj = {
source: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.Capture.Shown}
 */
proto.rv.analytics.UI.Capture.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.Capture.Shown;
  return proto.rv.analytics.UI.Capture.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.Capture.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.Capture.Shown}
 */
proto.rv.analytics.UI.Capture.Shown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.Capture.Shown.Source} */ (reader.readEnum());
      msg.setSource(value);
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
proto.rv.analytics.UI.Capture.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.Capture.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.Capture.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Capture.Shown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
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
proto.rv.analytics.UI.Capture.Shown.Source = {
  SOURCE_UNKNOWN: 0,
  SOURCE_TOOLBAR: 1,
  SOURCE_ACTION_POPOVER: 2,
  SOURCE_ACTION_CONTEXTUAL_MENU: 3,
  SOURCE_CALENDAR: 4,
  SOURCE_PREFERENCES_RESI: 5,
  SOURCE_MAIN_MENU: 6
};

/**
 * optional Source source = 1;
 * @return {!proto.rv.analytics.UI.Capture.Shown.Source}
 */
proto.rv.analytics.UI.Capture.Shown.prototype.getSource = function() {
  return /** @type {!proto.rv.analytics.UI.Capture.Shown.Source} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.Capture.Shown.Source} value
 * @return {!proto.rv.analytics.UI.Capture.Shown} returns this
 */
proto.rv.analytics.UI.Capture.Shown.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.Capture.Shown}
 */
proto.rv.analytics.UI.Capture.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.Capture.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.Capture.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.Capture.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.Capture} returns this
*/
proto.rv.analytics.UI.Capture.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.Capture.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.Capture} returns this
 */
proto.rv.analytics.UI.Capture.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.Capture.prototype.hasShown = function() {
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
proto.rv.analytics.UI.WelcomeToProPresenter.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1,
  MIGRATION: 2,
  SCREEN_CONFIGURATION_HELP: 3,
  DOWNLOAD_SAMPLE_CONTENT: 4,
  USER_GROUP: 5,
  TUTORIALS: 6,
  KNOWLEDGE_BASE: 7,
  BLOG: 8,
  INSTAGRAM: 9,
  FACEBOOK: 10
};

/**
 * @return {proto.rv.analytics.UI.WelcomeToProPresenter.ComponentCase}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.WelcomeToProPresenter.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.WelcomeToProPresenter.oneofGroups_[0]));
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
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.WelcomeToProPresenter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WelcomeToProPresenter.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.WelcomeToProPresenter.Shown.toObject(includeInstance, f),
migration: (f = msg.getMigration()) && proto.rv.analytics.UI.WelcomeToProPresenter.Migration.toObject(includeInstance, f),
screenConfigurationHelp: (f = msg.getScreenConfigurationHelp()) && proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp.toObject(includeInstance, f),
downloadSampleContent: (f = msg.getDownloadSampleContent()) && proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent.toObject(includeInstance, f),
userGroup: (f = msg.getUserGroup()) && proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup.toObject(includeInstance, f),
tutorials: (f = msg.getTutorials()) && proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials.toObject(includeInstance, f),
knowledgeBase: (f = msg.getKnowledgeBase()) && proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase.toObject(includeInstance, f),
blog: (f = msg.getBlog()) && proto.rv.analytics.UI.WelcomeToProPresenter.Blog.toObject(includeInstance, f),
instagram: (f = msg.getInstagram()) && proto.rv.analytics.UI.WelcomeToProPresenter.Instagram.toObject(includeInstance, f),
facebook: (f = msg.getFacebook()) && proto.rv.analytics.UI.WelcomeToProPresenter.Facebook.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.WelcomeToProPresenter;
  return proto.rv.analytics.UI.WelcomeToProPresenter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.WelcomeToProPresenter.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.WelcomeToProPresenter.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
      break;
    case 2:
      var value = new proto.rv.analytics.UI.WelcomeToProPresenter.Migration;
      reader.readMessage(value,proto.rv.analytics.UI.WelcomeToProPresenter.Migration.deserializeBinaryFromReader);
      msg.setMigration(value);
      break;
    case 3:
      var value = new proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp;
      reader.readMessage(value,proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp.deserializeBinaryFromReader);
      msg.setScreenConfigurationHelp(value);
      break;
    case 4:
      var value = new proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent;
      reader.readMessage(value,proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent.deserializeBinaryFromReader);
      msg.setDownloadSampleContent(value);
      break;
    case 5:
      var value = new proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup;
      reader.readMessage(value,proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup.deserializeBinaryFromReader);
      msg.setUserGroup(value);
      break;
    case 6:
      var value = new proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials;
      reader.readMessage(value,proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials.deserializeBinaryFromReader);
      msg.setTutorials(value);
      break;
    case 7:
      var value = new proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase;
      reader.readMessage(value,proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase.deserializeBinaryFromReader);
      msg.setKnowledgeBase(value);
      break;
    case 8:
      var value = new proto.rv.analytics.UI.WelcomeToProPresenter.Blog;
      reader.readMessage(value,proto.rv.analytics.UI.WelcomeToProPresenter.Blog.deserializeBinaryFromReader);
      msg.setBlog(value);
      break;
    case 9:
      var value = new proto.rv.analytics.UI.WelcomeToProPresenter.Instagram;
      reader.readMessage(value,proto.rv.analytics.UI.WelcomeToProPresenter.Instagram.deserializeBinaryFromReader);
      msg.setInstagram(value);
      break;
    case 10:
      var value = new proto.rv.analytics.UI.WelcomeToProPresenter.Facebook;
      reader.readMessage(value,proto.rv.analytics.UI.WelcomeToProPresenter.Facebook.deserializeBinaryFromReader);
      msg.setFacebook(value);
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
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.WelcomeToProPresenter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WelcomeToProPresenter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.WelcomeToProPresenter.Shown.serializeBinaryToWriter
    );
  }
  f = message.getMigration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rv.analytics.UI.WelcomeToProPresenter.Migration.serializeBinaryToWriter
    );
  }
  f = message.getScreenConfigurationHelp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp.serializeBinaryToWriter
    );
  }
  f = message.getDownloadSampleContent();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent.serializeBinaryToWriter
    );
  }
  f = message.getUserGroup();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup.serializeBinaryToWriter
    );
  }
  f = message.getTutorials();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials.serializeBinaryToWriter
    );
  }
  f = message.getKnowledgeBase();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase.serializeBinaryToWriter
    );
  }
  f = message.getBlog();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.rv.analytics.UI.WelcomeToProPresenter.Blog.serializeBinaryToWriter
    );
  }
  f = message.getInstagram();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.rv.analytics.UI.WelcomeToProPresenter.Instagram.serializeBinaryToWriter
    );
  }
  f = message.getFacebook();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.rv.analytics.UI.WelcomeToProPresenter.Facebook.serializeBinaryToWriter
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
proto.rv.analytics.UI.WelcomeToProPresenter.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.WelcomeToProPresenter.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Shown.toObject = function(includeInstance, msg) {
  var f, obj = {
source: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter.Shown}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.WelcomeToProPresenter.Shown;
  return proto.rv.analytics.UI.WelcomeToProPresenter.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter.Shown}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Shown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.WelcomeToProPresenter.Shown.Source} */ (reader.readEnum());
      msg.setSource(value);
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
proto.rv.analytics.UI.WelcomeToProPresenter.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.WelcomeToProPresenter.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Shown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
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
proto.rv.analytics.UI.WelcomeToProPresenter.Shown.Source = {
  SOURCE_FIRST_LAUNCH: 0,
  SOURCE_APPLICATION_MENU: 1
};

/**
 * optional Source source = 1;
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter.Shown.Source}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Shown.prototype.getSource = function() {
  return /** @type {!proto.rv.analytics.UI.WelcomeToProPresenter.Shown.Source} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.Shown.Source} value
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter.Shown} returns this
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Shown.prototype.setSource = function(value) {
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
proto.rv.analytics.UI.WelcomeToProPresenter.Migration.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.WelcomeToProPresenter.Migration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.Migration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Migration.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter.Migration}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Migration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.WelcomeToProPresenter.Migration;
  return proto.rv.analytics.UI.WelcomeToProPresenter.Migration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.Migration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter.Migration}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Migration.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.WelcomeToProPresenter.Migration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.WelcomeToProPresenter.Migration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.Migration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Migration.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp;
  return proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent;
  return proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup;
  return proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials;
  return proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase;
  return proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.WelcomeToProPresenter.Blog.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.WelcomeToProPresenter.Blog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.Blog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Blog.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter.Blog}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Blog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.WelcomeToProPresenter.Blog;
  return proto.rv.analytics.UI.WelcomeToProPresenter.Blog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.Blog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter.Blog}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Blog.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.WelcomeToProPresenter.Blog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.WelcomeToProPresenter.Blog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.Blog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Blog.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.WelcomeToProPresenter.Instagram.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.WelcomeToProPresenter.Instagram.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.Instagram} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Instagram.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter.Instagram}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Instagram.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.WelcomeToProPresenter.Instagram;
  return proto.rv.analytics.UI.WelcomeToProPresenter.Instagram.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.Instagram} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter.Instagram}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Instagram.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.WelcomeToProPresenter.Instagram.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.WelcomeToProPresenter.Instagram.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.Instagram} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Instagram.serializeBinaryToWriter = function(message, writer) {
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
proto.rv.analytics.UI.WelcomeToProPresenter.Facebook.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.WelcomeToProPresenter.Facebook.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.Facebook} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Facebook.toObject = function(includeInstance, msg) {
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
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter.Facebook}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Facebook.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.WelcomeToProPresenter.Facebook;
  return proto.rv.analytics.UI.WelcomeToProPresenter.Facebook.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.Facebook} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter.Facebook}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Facebook.deserializeBinaryFromReader = function(msg, reader) {
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
proto.rv.analytics.UI.WelcomeToProPresenter.Facebook.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.WelcomeToProPresenter.Facebook.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.WelcomeToProPresenter.Facebook} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.WelcomeToProPresenter.Facebook.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.WelcomeToProPresenter.Shown}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.WelcomeToProPresenter.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.WelcomeToProPresenter.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.WelcomeToProPresenter.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter} returns this
*/
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.WelcomeToProPresenter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter} returns this
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.hasShown = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Migration migration = 2;
 * @return {?proto.rv.analytics.UI.WelcomeToProPresenter.Migration}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.getMigration = function() {
  return /** @type{?proto.rv.analytics.UI.WelcomeToProPresenter.Migration} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.WelcomeToProPresenter.Migration, 2));
};


/**
 * @param {?proto.rv.analytics.UI.WelcomeToProPresenter.Migration|undefined} value
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter} returns this
*/
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.setMigration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.analytics.UI.WelcomeToProPresenter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter} returns this
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.clearMigration = function() {
  return this.setMigration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.hasMigration = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ScreenConfigurationHelp screen_configuration_help = 3;
 * @return {?proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.getScreenConfigurationHelp = function() {
  return /** @type{?proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp, 3));
};


/**
 * @param {?proto.rv.analytics.UI.WelcomeToProPresenter.ScreenConfigurationHelp|undefined} value
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter} returns this
*/
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.setScreenConfigurationHelp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.analytics.UI.WelcomeToProPresenter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter} returns this
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.clearScreenConfigurationHelp = function() {
  return this.setScreenConfigurationHelp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.hasScreenConfigurationHelp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DownloadSampleContent download_sample_content = 4;
 * @return {?proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.getDownloadSampleContent = function() {
  return /** @type{?proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent, 4));
};


/**
 * @param {?proto.rv.analytics.UI.WelcomeToProPresenter.DownloadSampleContent|undefined} value
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter} returns this
*/
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.setDownloadSampleContent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rv.analytics.UI.WelcomeToProPresenter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter} returns this
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.clearDownloadSampleContent = function() {
  return this.setDownloadSampleContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.hasDownloadSampleContent = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional UserGroup user_group = 5;
 * @return {?proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.getUserGroup = function() {
  return /** @type{?proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup, 5));
};


/**
 * @param {?proto.rv.analytics.UI.WelcomeToProPresenter.UserGroup|undefined} value
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter} returns this
*/
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.setUserGroup = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.rv.analytics.UI.WelcomeToProPresenter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter} returns this
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.clearUserGroup = function() {
  return this.setUserGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.hasUserGroup = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Tutorials tutorials = 6;
 * @return {?proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.getTutorials = function() {
  return /** @type{?proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials, 6));
};


/**
 * @param {?proto.rv.analytics.UI.WelcomeToProPresenter.Tutorials|undefined} value
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter} returns this
*/
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.setTutorials = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.rv.analytics.UI.WelcomeToProPresenter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter} returns this
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.clearTutorials = function() {
  return this.setTutorials(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.hasTutorials = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional KnowledgeBase knowledge_base = 7;
 * @return {?proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.getKnowledgeBase = function() {
  return /** @type{?proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase, 7));
};


/**
 * @param {?proto.rv.analytics.UI.WelcomeToProPresenter.KnowledgeBase|undefined} value
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter} returns this
*/
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.setKnowledgeBase = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.rv.analytics.UI.WelcomeToProPresenter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter} returns this
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.clearKnowledgeBase = function() {
  return this.setKnowledgeBase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.hasKnowledgeBase = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Blog blog = 8;
 * @return {?proto.rv.analytics.UI.WelcomeToProPresenter.Blog}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.getBlog = function() {
  return /** @type{?proto.rv.analytics.UI.WelcomeToProPresenter.Blog} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.WelcomeToProPresenter.Blog, 8));
};


/**
 * @param {?proto.rv.analytics.UI.WelcomeToProPresenter.Blog|undefined} value
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter} returns this
*/
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.setBlog = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.rv.analytics.UI.WelcomeToProPresenter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter} returns this
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.clearBlog = function() {
  return this.setBlog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.hasBlog = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Instagram instagram = 9;
 * @return {?proto.rv.analytics.UI.WelcomeToProPresenter.Instagram}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.getInstagram = function() {
  return /** @type{?proto.rv.analytics.UI.WelcomeToProPresenter.Instagram} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.WelcomeToProPresenter.Instagram, 9));
};


/**
 * @param {?proto.rv.analytics.UI.WelcomeToProPresenter.Instagram|undefined} value
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter} returns this
*/
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.setInstagram = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.rv.analytics.UI.WelcomeToProPresenter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter} returns this
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.clearInstagram = function() {
  return this.setInstagram(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.hasInstagram = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Facebook facebook = 10;
 * @return {?proto.rv.analytics.UI.WelcomeToProPresenter.Facebook}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.getFacebook = function() {
  return /** @type{?proto.rv.analytics.UI.WelcomeToProPresenter.Facebook} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.WelcomeToProPresenter.Facebook, 10));
};


/**
 * @param {?proto.rv.analytics.UI.WelcomeToProPresenter.Facebook|undefined} value
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter} returns this
*/
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.setFacebook = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.rv.analytics.UI.WelcomeToProPresenter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.WelcomeToProPresenter} returns this
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.clearFacebook = function() {
  return this.setFacebook(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.WelcomeToProPresenter.prototype.hasFacebook = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rv.analytics.UI.TestPattern.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.TestPattern.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  SHOWN: 1
};

/**
 * @return {proto.rv.analytics.UI.TestPattern.ComponentCase}
 */
proto.rv.analytics.UI.TestPattern.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.TestPattern.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.TestPattern.oneofGroups_[0]));
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
proto.rv.analytics.UI.TestPattern.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.TestPattern.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.TestPattern} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.TestPattern.toObject = function(includeInstance, msg) {
  var f, obj = {
shown: (f = msg.getShown()) && proto.rv.analytics.UI.TestPattern.Shown.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.TestPattern}
 */
proto.rv.analytics.UI.TestPattern.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.TestPattern;
  return proto.rv.analytics.UI.TestPattern.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.TestPattern} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.TestPattern}
 */
proto.rv.analytics.UI.TestPattern.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.TestPattern.Shown;
      reader.readMessage(value,proto.rv.analytics.UI.TestPattern.Shown.deserializeBinaryFromReader);
      msg.setShown(value);
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
proto.rv.analytics.UI.TestPattern.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.TestPattern.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.TestPattern} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.TestPattern.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.TestPattern.Shown.serializeBinaryToWriter
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
proto.rv.analytics.UI.TestPattern.Shown.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.TestPattern.Shown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.TestPattern.Shown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.TestPattern.Shown.toObject = function(includeInstance, msg) {
  var f, obj = {
source: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.rv.analytics.UI.TestPattern.Shown}
 */
proto.rv.analytics.UI.TestPattern.Shown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.TestPattern.Shown;
  return proto.rv.analytics.UI.TestPattern.Shown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.TestPattern.Shown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.TestPattern.Shown}
 */
proto.rv.analytics.UI.TestPattern.Shown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rv.analytics.UI.TestPattern.Shown.Source} */ (reader.readEnum());
      msg.setSource(value);
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
proto.rv.analytics.UI.TestPattern.Shown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.TestPattern.Shown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.TestPattern.Shown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.TestPattern.Shown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
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
proto.rv.analytics.UI.TestPattern.Shown.Source = {
  SOURCE_APPLICATION_MENU: 0,
  SOURCE_SCREEN_CONFIGURATION: 1
};

/**
 * optional Source source = 1;
 * @return {!proto.rv.analytics.UI.TestPattern.Shown.Source}
 */
proto.rv.analytics.UI.TestPattern.Shown.prototype.getSource = function() {
  return /** @type {!proto.rv.analytics.UI.TestPattern.Shown.Source} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rv.analytics.UI.TestPattern.Shown.Source} value
 * @return {!proto.rv.analytics.UI.TestPattern.Shown} returns this
 */
proto.rv.analytics.UI.TestPattern.Shown.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Shown shown = 1;
 * @return {?proto.rv.analytics.UI.TestPattern.Shown}
 */
proto.rv.analytics.UI.TestPattern.prototype.getShown = function() {
  return /** @type{?proto.rv.analytics.UI.TestPattern.Shown} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.TestPattern.Shown, 1));
};


/**
 * @param {?proto.rv.analytics.UI.TestPattern.Shown|undefined} value
 * @return {!proto.rv.analytics.UI.TestPattern} returns this
*/
proto.rv.analytics.UI.TestPattern.prototype.setShown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.TestPattern.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.TestPattern} returns this
 */
proto.rv.analytics.UI.TestPattern.prototype.clearShown = function() {
  return this.setShown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.TestPattern.prototype.hasShown = function() {
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
proto.rv.analytics.UI.Preferences.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.rv.analytics.UI.Preferences.ComponentCase = {
  COMPONENT_NOT_SET: 0,
  CUSTOM_LOGO: 1
};

/**
 * @return {proto.rv.analytics.UI.Preferences.ComponentCase}
 */
proto.rv.analytics.UI.Preferences.prototype.getComponentCase = function() {
  return /** @type {proto.rv.analytics.UI.Preferences.ComponentCase} */(jspb.Message.computeOneofCase(this, proto.rv.analytics.UI.Preferences.oneofGroups_[0]));
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
proto.rv.analytics.UI.Preferences.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.Preferences.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.Preferences} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Preferences.toObject = function(includeInstance, msg) {
  var f, obj = {
customLogo: (f = msg.getCustomLogo()) && proto.rv.analytics.UI.Preferences.CustomLogo.toObject(includeInstance, f)
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
 * @return {!proto.rv.analytics.UI.Preferences}
 */
proto.rv.analytics.UI.Preferences.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.Preferences;
  return proto.rv.analytics.UI.Preferences.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.Preferences} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.Preferences}
 */
proto.rv.analytics.UI.Preferences.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rv.analytics.UI.Preferences.CustomLogo;
      reader.readMessage(value,proto.rv.analytics.UI.Preferences.CustomLogo.deserializeBinaryFromReader);
      msg.setCustomLogo(value);
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
proto.rv.analytics.UI.Preferences.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.Preferences.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.Preferences} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Preferences.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomLogo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rv.analytics.UI.Preferences.CustomLogo.serializeBinaryToWriter
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
proto.rv.analytics.UI.Preferences.CustomLogo.prototype.toObject = function(opt_includeInstance) {
  return proto.rv.analytics.UI.Preferences.CustomLogo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rv.analytics.UI.Preferences.CustomLogo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Preferences.CustomLogo.toObject = function(includeInstance, msg) {
  var f, obj = {
hasLogo: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.rv.analytics.UI.Preferences.CustomLogo}
 */
proto.rv.analytics.UI.Preferences.CustomLogo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rv.analytics.UI.Preferences.CustomLogo;
  return proto.rv.analytics.UI.Preferences.CustomLogo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rv.analytics.UI.Preferences.CustomLogo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rv.analytics.UI.Preferences.CustomLogo}
 */
proto.rv.analytics.UI.Preferences.CustomLogo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasLogo(value);
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
proto.rv.analytics.UI.Preferences.CustomLogo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rv.analytics.UI.Preferences.CustomLogo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rv.analytics.UI.Preferences.CustomLogo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rv.analytics.UI.Preferences.CustomLogo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHasLogo();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool has_logo = 1;
 * @return {boolean}
 */
proto.rv.analytics.UI.Preferences.CustomLogo.prototype.getHasLogo = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rv.analytics.UI.Preferences.CustomLogo} returns this
 */
proto.rv.analytics.UI.Preferences.CustomLogo.prototype.setHasLogo = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional CustomLogo custom_logo = 1;
 * @return {?proto.rv.analytics.UI.Preferences.CustomLogo}
 */
proto.rv.analytics.UI.Preferences.prototype.getCustomLogo = function() {
  return /** @type{?proto.rv.analytics.UI.Preferences.CustomLogo} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.Preferences.CustomLogo, 1));
};


/**
 * @param {?proto.rv.analytics.UI.Preferences.CustomLogo|undefined} value
 * @return {!proto.rv.analytics.UI.Preferences} returns this
*/
proto.rv.analytics.UI.Preferences.prototype.setCustomLogo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.Preferences.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI.Preferences} returns this
 */
proto.rv.analytics.UI.Preferences.prototype.clearCustomLogo = function() {
  return this.setCustomLogo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.Preferences.prototype.hasCustomLogo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional QuickSearch quick_search = 1;
 * @return {?proto.rv.analytics.UI.QuickSearch}
 */
proto.rv.analytics.UI.prototype.getQuickSearch = function() {
  return /** @type{?proto.rv.analytics.UI.QuickSearch} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.QuickSearch, 1));
};


/**
 * @param {?proto.rv.analytics.UI.QuickSearch|undefined} value
 * @return {!proto.rv.analytics.UI} returns this
*/
proto.rv.analytics.UI.prototype.setQuickSearch = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rv.analytics.UI.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI} returns this
 */
proto.rv.analytics.UI.prototype.clearQuickSearch = function() {
  return this.setQuickSearch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.prototype.hasQuickSearch = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Toolbar toolbar = 2;
 * @return {?proto.rv.analytics.UI.Toolbar}
 */
proto.rv.analytics.UI.prototype.getToolbar = function() {
  return /** @type{?proto.rv.analytics.UI.Toolbar} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.Toolbar, 2));
};


/**
 * @param {?proto.rv.analytics.UI.Toolbar|undefined} value
 * @return {!proto.rv.analytics.UI} returns this
*/
proto.rv.analytics.UI.prototype.setToolbar = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rv.analytics.UI.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI} returns this
 */
proto.rv.analytics.UI.prototype.clearToolbar = function() {
  return this.setToolbar(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.prototype.hasToolbar = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MainView main_view = 3;
 * @return {?proto.rv.analytics.UI.MainView}
 */
proto.rv.analytics.UI.prototype.getMainView = function() {
  return /** @type{?proto.rv.analytics.UI.MainView} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.MainView, 3));
};


/**
 * @param {?proto.rv.analytics.UI.MainView|undefined} value
 * @return {!proto.rv.analytics.UI} returns this
*/
proto.rv.analytics.UI.prototype.setMainView = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rv.analytics.UI.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI} returns this
 */
proto.rv.analytics.UI.prototype.clearMainView = function() {
  return this.setMainView(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.prototype.hasMainView = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Looks looks = 4;
 * @return {?proto.rv.analytics.UI.Looks}
 */
proto.rv.analytics.UI.prototype.getLooks = function() {
  return /** @type{?proto.rv.analytics.UI.Looks} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.Looks, 4));
};


/**
 * @param {?proto.rv.analytics.UI.Looks|undefined} value
 * @return {!proto.rv.analytics.UI} returns this
*/
proto.rv.analytics.UI.prototype.setLooks = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rv.analytics.UI.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI} returns this
 */
proto.rv.analytics.UI.prototype.clearLooks = function() {
  return this.setLooks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.prototype.hasLooks = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ScreenConfiguration screen_configuration = 5;
 * @return {?proto.rv.analytics.UI.ScreenConfiguration}
 */
proto.rv.analytics.UI.prototype.getScreenConfiguration = function() {
  return /** @type{?proto.rv.analytics.UI.ScreenConfiguration} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.ScreenConfiguration, 5));
};


/**
 * @param {?proto.rv.analytics.UI.ScreenConfiguration|undefined} value
 * @return {!proto.rv.analytics.UI} returns this
*/
proto.rv.analytics.UI.prototype.setScreenConfiguration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.rv.analytics.UI.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI} returns this
 */
proto.rv.analytics.UI.prototype.clearScreenConfiguration = function() {
  return this.setScreenConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.prototype.hasScreenConfiguration = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional LowerRight lower_right = 6;
 * @return {?proto.rv.analytics.UI.LowerRight}
 */
proto.rv.analytics.UI.prototype.getLowerRight = function() {
  return /** @type{?proto.rv.analytics.UI.LowerRight} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.LowerRight, 6));
};


/**
 * @param {?proto.rv.analytics.UI.LowerRight|undefined} value
 * @return {!proto.rv.analytics.UI} returns this
*/
proto.rv.analytics.UI.prototype.setLowerRight = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.rv.analytics.UI.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI} returns this
 */
proto.rv.analytics.UI.prototype.clearLowerRight = function() {
  return this.setLowerRight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.prototype.hasLowerRight = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional TextInspector text_inspector = 7;
 * @return {?proto.rv.analytics.UI.TextInspector}
 */
proto.rv.analytics.UI.prototype.getTextInspector = function() {
  return /** @type{?proto.rv.analytics.UI.TextInspector} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.TextInspector, 7));
};


/**
 * @param {?proto.rv.analytics.UI.TextInspector|undefined} value
 * @return {!proto.rv.analytics.UI} returns this
*/
proto.rv.analytics.UI.prototype.setTextInspector = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.rv.analytics.UI.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI} returns this
 */
proto.rv.analytics.UI.prototype.clearTextInspector = function() {
  return this.setTextInspector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.prototype.hasTextInspector = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Show show = 8;
 * @return {?proto.rv.analytics.UI.Show}
 */
proto.rv.analytics.UI.prototype.getShow = function() {
  return /** @type{?proto.rv.analytics.UI.Show} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.Show, 8));
};


/**
 * @param {?proto.rv.analytics.UI.Show|undefined} value
 * @return {!proto.rv.analytics.UI} returns this
*/
proto.rv.analytics.UI.prototype.setShow = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.rv.analytics.UI.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI} returns this
 */
proto.rv.analytics.UI.prototype.clearShow = function() {
  return this.setShow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.prototype.hasShow = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional InAppStore in_app_store = 9;
 * @return {?proto.rv.analytics.UI.InAppStore}
 */
proto.rv.analytics.UI.prototype.getInAppStore = function() {
  return /** @type{?proto.rv.analytics.UI.InAppStore} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.InAppStore, 9));
};


/**
 * @param {?proto.rv.analytics.UI.InAppStore|undefined} value
 * @return {!proto.rv.analytics.UI} returns this
*/
proto.rv.analytics.UI.prototype.setInAppStore = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.rv.analytics.UI.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI} returns this
 */
proto.rv.analytics.UI.prototype.clearInAppStore = function() {
  return this.setInAppStore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.prototype.hasInAppStore = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Editor editor = 10;
 * @return {?proto.rv.analytics.UI.Editor}
 */
proto.rv.analytics.UI.prototype.getEditor = function() {
  return /** @type{?proto.rv.analytics.UI.Editor} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.Editor, 10));
};


/**
 * @param {?proto.rv.analytics.UI.Editor|undefined} value
 * @return {!proto.rv.analytics.UI} returns this
*/
proto.rv.analytics.UI.prototype.setEditor = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.rv.analytics.UI.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI} returns this
 */
proto.rv.analytics.UI.prototype.clearEditor = function() {
  return this.setEditor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.prototype.hasEditor = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional WhatsNew whats_new = 11;
 * @return {?proto.rv.analytics.UI.WhatsNew}
 */
proto.rv.analytics.UI.prototype.getWhatsNew = function() {
  return /** @type{?proto.rv.analytics.UI.WhatsNew} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.WhatsNew, 11));
};


/**
 * @param {?proto.rv.analytics.UI.WhatsNew|undefined} value
 * @return {!proto.rv.analytics.UI} returns this
*/
proto.rv.analytics.UI.prototype.setWhatsNew = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.rv.analytics.UI.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI} returns this
 */
proto.rv.analytics.UI.prototype.clearWhatsNew = function() {
  return this.setWhatsNew(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.prototype.hasWhatsNew = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ClearGroups clear_groups = 12;
 * @return {?proto.rv.analytics.UI.ClearGroups}
 */
proto.rv.analytics.UI.prototype.getClearGroups = function() {
  return /** @type{?proto.rv.analytics.UI.ClearGroups} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.ClearGroups, 12));
};


/**
 * @param {?proto.rv.analytics.UI.ClearGroups|undefined} value
 * @return {!proto.rv.analytics.UI} returns this
*/
proto.rv.analytics.UI.prototype.setClearGroups = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.rv.analytics.UI.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI} returns this
 */
proto.rv.analytics.UI.prototype.clearClearGroups = function() {
  return this.setClearGroups(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.prototype.hasClearGroups = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional PreviewArea preview_area = 13;
 * @return {?proto.rv.analytics.UI.PreviewArea}
 */
proto.rv.analytics.UI.prototype.getPreviewArea = function() {
  return /** @type{?proto.rv.analytics.UI.PreviewArea} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.PreviewArea, 13));
};


/**
 * @param {?proto.rv.analytics.UI.PreviewArea|undefined} value
 * @return {!proto.rv.analytics.UI} returns this
*/
proto.rv.analytics.UI.prototype.setPreviewArea = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.rv.analytics.UI.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI} returns this
 */
proto.rv.analytics.UI.prototype.clearPreviewArea = function() {
  return this.setPreviewArea(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.prototype.hasPreviewArea = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Placeholder placeholder = 14;
 * @return {?proto.rv.analytics.UI.Placeholder}
 */
proto.rv.analytics.UI.prototype.getPlaceholder = function() {
  return /** @type{?proto.rv.analytics.UI.Placeholder} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.Placeholder, 14));
};


/**
 * @param {?proto.rv.analytics.UI.Placeholder|undefined} value
 * @return {!proto.rv.analytics.UI} returns this
*/
proto.rv.analytics.UI.prototype.setPlaceholder = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.rv.analytics.UI.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI} returns this
 */
proto.rv.analytics.UI.prototype.clearPlaceholder = function() {
  return this.setPlaceholder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.prototype.hasPlaceholder = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional PlanningCenterLive planning_center_live = 15;
 * @return {?proto.rv.analytics.UI.PlanningCenterLive}
 */
proto.rv.analytics.UI.prototype.getPlanningCenterLive = function() {
  return /** @type{?proto.rv.analytics.UI.PlanningCenterLive} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.PlanningCenterLive, 15));
};


/**
 * @param {?proto.rv.analytics.UI.PlanningCenterLive|undefined} value
 * @return {!proto.rv.analytics.UI} returns this
*/
proto.rv.analytics.UI.prototype.setPlanningCenterLive = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.rv.analytics.UI.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI} returns this
 */
proto.rv.analytics.UI.prototype.clearPlanningCenterLive = function() {
  return this.setPlanningCenterLive(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.prototype.hasPlanningCenterLive = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional NetworkGroup network_group = 16;
 * @return {?proto.rv.analytics.UI.NetworkGroup}
 */
proto.rv.analytics.UI.prototype.getNetworkGroup = function() {
  return /** @type{?proto.rv.analytics.UI.NetworkGroup} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.NetworkGroup, 16));
};


/**
 * @param {?proto.rv.analytics.UI.NetworkGroup|undefined} value
 * @return {!proto.rv.analytics.UI} returns this
*/
proto.rv.analytics.UI.prototype.setNetworkGroup = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.rv.analytics.UI.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI} returns this
 */
proto.rv.analytics.UI.prototype.clearNetworkGroup = function() {
  return this.setNetworkGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.prototype.hasNetworkGroup = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional CCLI ccli = 17;
 * @return {?proto.rv.analytics.UI.CCLI}
 */
proto.rv.analytics.UI.prototype.getCcli = function() {
  return /** @type{?proto.rv.analytics.UI.CCLI} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.CCLI, 17));
};


/**
 * @param {?proto.rv.analytics.UI.CCLI|undefined} value
 * @return {!proto.rv.analytics.UI} returns this
*/
proto.rv.analytics.UI.prototype.setCcli = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.rv.analytics.UI.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI} returns this
 */
proto.rv.analytics.UI.prototype.clearCcli = function() {
  return this.setCcli(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.prototype.hasCcli = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional Capture capture = 18;
 * @return {?proto.rv.analytics.UI.Capture}
 */
proto.rv.analytics.UI.prototype.getCapture = function() {
  return /** @type{?proto.rv.analytics.UI.Capture} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.Capture, 18));
};


/**
 * @param {?proto.rv.analytics.UI.Capture|undefined} value
 * @return {!proto.rv.analytics.UI} returns this
*/
proto.rv.analytics.UI.prototype.setCapture = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.rv.analytics.UI.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI} returns this
 */
proto.rv.analytics.UI.prototype.clearCapture = function() {
  return this.setCapture(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.prototype.hasCapture = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional WelcomeToProPresenter welcomeToProPresenter = 19;
 * @return {?proto.rv.analytics.UI.WelcomeToProPresenter}
 */
proto.rv.analytics.UI.prototype.getWelcometopropresenter = function() {
  return /** @type{?proto.rv.analytics.UI.WelcomeToProPresenter} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.WelcomeToProPresenter, 19));
};


/**
 * @param {?proto.rv.analytics.UI.WelcomeToProPresenter|undefined} value
 * @return {!proto.rv.analytics.UI} returns this
*/
proto.rv.analytics.UI.prototype.setWelcometopropresenter = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.rv.analytics.UI.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI} returns this
 */
proto.rv.analytics.UI.prototype.clearWelcometopropresenter = function() {
  return this.setWelcometopropresenter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.prototype.hasWelcometopropresenter = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional TestPattern test_pattern = 20;
 * @return {?proto.rv.analytics.UI.TestPattern}
 */
proto.rv.analytics.UI.prototype.getTestPattern = function() {
  return /** @type{?proto.rv.analytics.UI.TestPattern} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.TestPattern, 20));
};


/**
 * @param {?proto.rv.analytics.UI.TestPattern|undefined} value
 * @return {!proto.rv.analytics.UI} returns this
*/
proto.rv.analytics.UI.prototype.setTestPattern = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.rv.analytics.UI.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI} returns this
 */
proto.rv.analytics.UI.prototype.clearTestPattern = function() {
  return this.setTestPattern(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.prototype.hasTestPattern = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional Preferences preferences = 21;
 * @return {?proto.rv.analytics.UI.Preferences}
 */
proto.rv.analytics.UI.prototype.getPreferences = function() {
  return /** @type{?proto.rv.analytics.UI.Preferences} */ (
    jspb.Message.getWrapperField(this, proto.rv.analytics.UI.Preferences, 21));
};


/**
 * @param {?proto.rv.analytics.UI.Preferences|undefined} value
 * @return {!proto.rv.analytics.UI} returns this
*/
proto.rv.analytics.UI.prototype.setPreferences = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.rv.analytics.UI.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rv.analytics.UI} returns this
 */
proto.rv.analytics.UI.prototype.clearPreferences = function() {
  return this.setPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rv.analytics.UI.prototype.hasPreferences = function() {
  return jspb.Message.getField(this, 21) != null;
};


