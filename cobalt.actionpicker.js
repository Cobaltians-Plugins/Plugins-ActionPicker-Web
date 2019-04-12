(function(cobalt){
    var plugin={
        name:"actionpicker",

        init:function(){
            //create shortcuts
            cobalt.actionPicker=this.getAction.bind(this);

        },
        handleEvent:function(json){
            cobalt.log(this.name, ' plugin : unknown event received :', json)
        },
        getAction:function(option,callback){
            cobalt.plugins.send(this, "getAction", option, callback);
        }
	};
    cobalt.plugins.register(plugin);

})(cobalt || {});