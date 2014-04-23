if (Meteor.isClient) {
  Template.editor.rendered = function () {
    var editor = ace.edit("editor");
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
