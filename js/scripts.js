/*This file is for your custom js.  All yours*/

// Calls input from form-input.html

$(function () {
  $("#nav-toggle").click(function () {
    $("#nav-toggle span").toggleClass("glyphicon-remove")
    $("#nav-toggle span").toggleClass("glyphicon-menu-hamburger")
    $("#nav-toggle span").toggleClass("active")
  })
})
