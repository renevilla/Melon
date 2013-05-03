// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require jquery.ui.core
//= require select2

$(document).ready(function() {

$("#post_tag_list").select2({
    placeholder: "When do you concentrate the best?",
    allowClear: true
});
});

function changeColor(curNumber){
    curNumber++;

    if(curNumber > 140) {
        // we are back at 1, animate removeClass instead
        curNumber = 1;

        // we don't need animation here since color5 is defined AFTER color1, (cascading)
        $('body').addClass('color' + curNumber);

        // we animate removeClass instead
        $('body').removeClass('color' + 140, 1000);
    } else {
        $('body').addClass('color' + curNumber, 800);
        // So previous classes get removed.
        $('body').attr('class', 'color' + curNumber);
    }
    console.log(curNumber);
    setTimeout(function(){changeColor(curNumber)}, 1000); } 

changeColor(0); 



