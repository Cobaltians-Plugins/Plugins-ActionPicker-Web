(function(cobalt){
    var plugin={
        classes:{
			ios: "ActionPickerPlugin",
            android: "io.kristal.actionpicker.ActionPicker"
        },
        init:function(){
            cobalt.actionPicker=this.getAction.bind(this);
        },
        getAction:function(option,callback){
            cobalt.plugins.send(this, "getAction", option, callback);
        }
	};
    cobalt.plugins.register(plugin);

})(cobalt || {});