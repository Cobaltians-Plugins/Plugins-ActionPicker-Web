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
            this.send("getAction",option, callback);
         },
        send:function(action, data, callback){
        cobalt.send({ type : "plugin", name : this.name, action : action, data : data }, callback);
        }
    };
    cobalt.plugins.register(plugin);

})(cobalt || {});