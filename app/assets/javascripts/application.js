//= require jquery
//= require jquery_ujs
//= require tether
//= require bootstrap-sprockets

// Search functionality

var search = document.getElementById('search');
var searchInput = document.getElementById('searchInput');
var displayMenu = false;
var shftIsPressed = false;

function showSearch(){
  search.classList = '';
  searchInput.focus();
  searchInput.value = '';
}

function hideSearch(){
  search.classList = 'hide';
  document.getElementById("search_results").classList = 'hide';
}

function toggleSearch(){
  if (search.classList == ''){
    hideSearch();
  } else {
    showSearch();
  }
}

$(document).keydown(function(event){
    if (event.which == "16"){
      shftIsPressed = true;
    }
    if (event.which == "27"){
      hideSearch();
    }
    if (event.which=="32"&&shftIsPressed){
      event.preventDefault();
      toggleSearch();
    }
});


$(document).keyup(function(){
    shftIsPressed = false;
});

$(document).ready(function(){
   $('#searchInput').on('input',function(e){
       console.log("searching");
       $('#search_form_submit_button').click();
    });
});

// Right Click Functionality

$(document).bind("contextmenu", function (event) {
    event.preventDefault();    
    $(".custom-menu").finish().toggle(100).
    css({
        top: event.pageY + "px",
        left: event.pageX + "px"
    });
});

$(document).bind("mousedown", function (e) {    
    if (!$(e.target).parents(".custom-menu").length > 0) {
        $(".custom-menu").hide(100);
    }
});

function changeType(){
  for (var i=0; i< passwords.length; i++){
  if (passwords[0].type == "text"){
    passwords[0].type = "password";
  } else {
    passwords[0].type = 'text';
  }
}
}

var passwords = document.getElementsByClassName('password-field-hack');
if (passwords.length > 0){
  for (var i=0; i< passwords.length; i++){
  passwords[i].addEventListener("onfocus", changeType, false);
  passwords[i].addEventListener("onfocusout", changeType, false);
}
}

$(window).scroll(function() {
   var wH = $(window).height();
   var wS = $(this).scrollTop();
   var aR = $(document.getElementById('about_right')).height();
   var sR = $(document.getElementById('store_right')).height();
   var about_left = document.getElementById('about_left');
   var about_right = document.getElementById('about_right');
   var store_left = document.getElementById('store_left');
   var store_right = document.getElementById('store_right');
   if (wS > wH && wS < aR){
       about_left.classList.add('about_left_fixed');
       about_right.classList.add('about_right_fixed');
       about_left.style.top = "";
       store_left.classList.remove('store_left_fixed');
   }
   else if (wS < wH){
       about_left.classList.remove('about_left_fixed');
       about_right.classList.remove('about_right_fixed');
       about_left.style.top = "";
       store_left.classList.remove('store_left_fixed');
   } 
   else if (wS > aR && wS < aR+wH+80) {
     about_left.classList.remove('about_left_fixed');
       about_right.classList.remove('about_right_fixed'); 
       about_left.style.top = (aR - wH).toString() + 'px';
       store_left.classList.remove('store_left_fixed');
   }
   else if (wS > aR+wH+80){
       store_left.classList.add('store_left_fixed');
   }
});
$("#about_button").click(function() {
  $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
});
$("#store_button").click(function() {
  $('html,body').animate({
        scrollTop: $("#store").offset().top},
        'slow');
});

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    $("#toggle-span").toggleClass("fa-angle-left");
    $("#toggle-span").toggleClass("fa-angle-right");
});

function openNav() {
    document.getElementById("mySidenav").style.width = "550px";
    document.getElementById("overlay").style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("overlay").style.zIndex = "9998";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("overlay").style.backgroundColor = "";
    document.getElementById("overlay").style.zIndex = "-10";
}