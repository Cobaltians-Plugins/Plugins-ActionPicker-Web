(function(cobalt) {
  var plugin = {
    classes: {
      ios: "ActionPickerPlugin",
      android: "io.kristal.actionpicker.ActionPicker"
    },
    init: function() {
      cobalt.actionPicker = this.getAction.bind(this);
    },
    callbacks: {},
    randomId : function(){
      return Math.random().toString(36).substr(2, 10);
    },
    getAction: function(option, callback) {
      option.callback = this.randomId();
      this.callbacks[option.callback] = callback;
      cobalt.plugins.send(this, "getAction", option);
    },
    handleEvent: function(json) {
      if (json.callback && typeof this.callbacks[json.callback] === 'function') {
        this.callbacks[json.callback](json.index);
      }
    }
  };
  cobalt.plugins.register(plugin);

})(cobalt || {});