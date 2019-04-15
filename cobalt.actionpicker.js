(function(cobalt) {
  var plugin = {
    classes: {
      ios: "ActionPickerPlugin",
      android: "io.kristal.actionpicker.ActionPicker"
    },
    init: function() {
      cobalt.actionPicker = this.getAction.bind(this);
    },
    getAction: function(option, callback) {
      this.onActionPickerResult = callback;
      cobalt.plugins.send(this, "getAction", option);
    },
    handleEvent: function(json) {
      if (typeof this.onActionPickerResult === 'function') {
        this.onActionPickerResult(json.index)
      }
    }
  };
  cobalt.plugins.register(plugin);

})(cobalt || {});