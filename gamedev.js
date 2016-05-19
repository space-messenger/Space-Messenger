$( document ).ready(function() {

//Your jquery + js goes here
$(function() {
  var copyText= [
   'this is the first line',
   'Simply put, the second line',
   'impressed by the third line.'
  ];
  $("#submitmessage").click(function () {
     $("#thetext").text(copyText[1]);
  });

});
});