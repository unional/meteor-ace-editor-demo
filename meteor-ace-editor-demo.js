if (Meteor.isClient) {
    Template.editor.rendered = function() {
        var editor = ace.edit("editor");
        editor.session.setMode("ace/mode/un");
        editor.setTheme("ace/theme/un_default");
        editor.setOptions({
            enableLiveAutocompletion: [myCompleter]
        });
    };
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}
