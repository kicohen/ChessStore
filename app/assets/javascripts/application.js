//= require jquery
//= require jquery_ujs

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

function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("overlay").style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("overlay").style.zIndex = "9998";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("overlay").style.backgroundColor = "";
    document.getElementById("overlay").style.zIndex = "-10";
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
/**
 * Placeholdem - Placeholder Caret Animation
 * v1.0.2 - MIT License
 * http://placeholdem.jackrugile.com - git://github.com/jackrugile/placeholdem.git
 * by Jack Rugile - @jackrugile
 */

// function Placeholdem(e){"use strict";!function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t){var n=(new Date).getTime(),a=Math.max(0,16-(n-e)),l=window.setTimeout(function(){t(n+a)},a);return e=n+a,l}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}();var t={};return t.customElems=["password"],t.defaultInputAttributeName="data-defaultinputtype",t.init=function(){if(t.elems=[],e&&e.length)for(var n=0;n<e.length;n++)t.hasPlaceholder(e[n])&&t.elems.push(new t.PlaceholdemElem(e[n]));else e&&t.hasPlaceholder(e)&&t.elems.push(new t.PlaceholdemElem(e))},t.hasPlaceholder=function(e){return"function"==typeof e.hasAttribute&&e.hasAttribute("placeholder")},t.PlaceholdemElem=function(e){var n=this;n.init=function(){n.elem=e,n.form=e.form,n.placeholder=n.elem.getAttribute("placeholder"),n.elem.removeAttribute("placeholder"),n.rAF=null,n.animating=0,n.defaultInputType=n.elem.getAttribute("type"),n.resetDefaultType(),n.elem.value||(n.elem.value=n.placeholder),n.on(n.elem,"focus",n.onFocus),n.on(n.elem,"blur",n.onBlur),n.on(n.elem,"keydown",n.onKeydown),n.form&&n.on(n.form,"reset",n.onReset)},n.on=function(e,t,n){e.addEventListener?e.addEventListener(t,n):e.attachEvent("on"+t,n)},n.onFocus=function(){(n.animating||n.elem.value===n.placeholder)&&(n.animating=1,window.cancelAnimationFrame(n.rAF),n.deletePlaceholder(),n.restoreDefaultType())},n.onBlur=function(){(n.animating||""===n.elem.value)&&(n.animating=1,window.cancelAnimationFrame(n.rAF),n.restorePlaceholder(),n.resetDefaultType())},n.onKeydown=function(){n.animating&&(n.animating=0,window.cancelAnimationFrame(n.rAF),n.elem.value="")},n.onReset=function(){setTimeout(function(){n.onBlur()})},n.deletePlaceholder=function(){n.elem.value.length>0?(n.elem.value=n.elem.value.slice(0,-1),n.rAF=window.requestAnimationFrame(n.deletePlaceholder)):n.animating=0},n.restorePlaceholder=function(){n.elem.value.length<n.placeholder.length?(n.elem.value+=n.placeholder[n.elem.value.length],n.rAF=window.requestAnimationFrame(n.restorePlaceholder)):n.animating=0},n.restoreDefaultType=function(){var e=n.elem.getAttribute(t.defaultInputAttributeName);e&&-1!=t.customElems.indexOf(e)&&e!=n.elem.getAttribute("type")&&n.elem.setAttribute("type",e)},n.resetDefaultType=function(){-1!=t.customElems.indexOf(n.defaultInputType)&&(n.elem.setAttribute(t.defaultInputAttributeName,n.defaultInputType),n.elem.setAttribute("type","text"))},n.init()},t.init(),t}


// Placeholdem( document.querySelectorAll( '[placeholder]' ) );