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
//= require selectjs
//= require masonry

$(document).ready(function() {

$("#post_tag_list").select2({
    placeholder: "Listening To Classical Music",
    allowClear: true
});



//$('.tag_name').hide();
// $('.item').click(function(){
 //      $(this).next(".tag_name").slideToggle("display");
   //     $(this).toggleClass('opened');
        
     //     });



$(".item").click(function(){
      $(".tag_name").hide("fast");
      $(this).prev(".tag_name").slideToggle("display");
});





   // $('.item').click(function(){
        // get the clicked on id and convert it to shortened form
   //     var id = this.id.replace(/\-.*$/, "");
  //  var item = $("#" + id);
        // toggle others that are open and toggle the current one
  //      $(".tag_name").not(".display").add(item).animate({"height": "toggle", "opacity": "toggle"}, "slow").toggleClass("display"); 
 //   });



//if ($("#select2-drop").is(':visible')){
  //      $(".tester").addClass("about_highlight"); 
   // } else {
//}

 $('#add_new').click(function(){
        $('#new_form').slideToggle("slow");
        $(this).toggleClass('open');
    });

});






  //  $('html').click(function() {
            
    //        $('#new_form').removeClass('slow');
      //  });
 





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






