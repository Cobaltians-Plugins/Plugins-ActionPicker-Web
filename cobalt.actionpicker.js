(function(cobalt) {
  var plugin = {
    name: 'CobaltActionPickerPlugin',
    classes: {
      ios: "ActionPickerPlugin",
      android: "io.kristal.actionpicker.ActionPicker"
    },
    init: function() {
      cobalt.actionPicker = this.getAction.bind(this);
    },
    getAction: function(option, callback) {
      cobalt.plugins.send(this, "getAction", option, function(result) {
        callback(result.index);
      });
    }
  };
  cobalt.plugins.register(plugin);

})(cobalt || {});
