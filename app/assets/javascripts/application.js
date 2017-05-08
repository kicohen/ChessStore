//= require jquery
//= require jquery_ujs

document.addEventListener("click", toggleMenu);
var menu = document.getElementById('menu');
var search = document.getElementById('search');
var searchInput = document.getElementById('searchInput');
var displayMenu = false;
var shftIsPressed = false;

function showMenu(position){
  menu.style.left = position.clientX - 150 + 'px';
  menu.style.top = position.clientY - 150 + 'px';
    menu.classList = 'shown';
}

function hideMenu(){
    menu.classList = '';
}

function showSearch(){
  search.classList = '';
  searchInput.focus();
  searchInput.value = '';
}

function hideSearch(){
  search.classList = 'hide';
}

function toggleSearch(){
  if (search.classList == ''){
    hideSearch();
  } else {
    showSearch();
  }
}

$(document).keydown(function(event){
    if(event.which=="16")
        shftIsPressed = true;
    if (event.which=="32"&&shftIsPressed){
      event.preventDefault();
      toggleSearch();
    }
});

$(document).keyup(function(){
    shftIsPressed = false;
});

function toggleMenu(position) {
  if (displayMenu) {
    hideMenu();
  } else if (shftIsPressed) {
    showMenu(position);
  }
  hideSearch();
  displayMenu = !displayMenu;
}

// JAVASCRIPT (jQuery)

// Trigger action when the contexmenu is about to be shown
$(document).bind("contextmenu", function (event) {
    
    // Avoid the real one
    event.preventDefault();
    
    // Show contextmenu
    $(".custom-menu").finish().toggle(100).
    
    // In the right position (the mouse)
    css({
        top: event.pageY + "px",
        left: event.pageX + "px"
    });
});

// If the document is clicked somewhere
$(document).bind("mousedown", function (e) {
    
    // If the clicked element is not the menu
    if (!$(e.target).parents(".custom-menu").length > 0) {
        
        // Hide it
        $(".custom-menu").hide(100);
    }
});

// If the menu element is clicked
$(".custom-menu li").click(function(){
    
    // This is the triggered action name
    switch($(this).attr("data-action")) {
        
        // A case for each action. Your actions here
        case "first": alert("first"); break;
        case "second": alert("second"); break;
        case "third": alert("third"); break;
    }
  
    // Hide it AFTER the action was triggered
    $(".custom-menu").hide(100);
  });

function changeType(){
  console.log("changing type");
  for (var i=0; i< passwords.length; i++){
  if (passwords[0].type == "text"){
    passwords[0].type = "password";
  } else {
    passwords[0].type = 'text';
  }
}
}


var passwords = document.getElementsByClassName('password-field-hack');
console.log(passwords);
if (passwords.length > 0){
  for (var i=0; i< passwords.length; i++){
  passwords[i].addEventListener("onfocus", changeType, false);
  passwords[i].addEventListener("onfocusout", changeType, false);
}
}

/**
 * Placeholdem - Placeholder Caret Animation
 * v1.0.2 - MIT License
 * http://placeholdem.jackrugile.com - git://github.com/jackrugile/placeholdem.git
 * by Jack Rugile - @jackrugile
 */

function Placeholdem(e){"use strict";!function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t){var n=(new Date).getTime(),a=Math.max(0,16-(n-e)),l=window.setTimeout(function(){t(n+a)},a);return e=n+a,l}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}();var t={};return t.customElems=["password"],t.defaultInputAttributeName="data-defaultinputtype",t.init=function(){if(t.elems=[],e&&e.length)for(var n=0;n<e.length;n++)t.hasPlaceholder(e[n])&&t.elems.push(new t.PlaceholdemElem(e[n]));else e&&t.hasPlaceholder(e)&&t.elems.push(new t.PlaceholdemElem(e))},t.hasPlaceholder=function(e){return"function"==typeof e.hasAttribute&&e.hasAttribute("placeholder")},t.PlaceholdemElem=function(e){var n=this;n.init=function(){n.elem=e,n.form=e.form,n.placeholder=n.elem.getAttribute("placeholder"),n.elem.removeAttribute("placeholder"),n.rAF=null,n.animating=0,n.defaultInputType=n.elem.getAttribute("type"),n.resetDefaultType(),n.elem.value||(n.elem.value=n.placeholder),n.on(n.elem,"focus",n.onFocus),n.on(n.elem,"blur",n.onBlur),n.on(n.elem,"keydown",n.onKeydown),n.form&&n.on(n.form,"reset",n.onReset)},n.on=function(e,t,n){e.addEventListener?e.addEventListener(t,n):e.attachEvent("on"+t,n)},n.onFocus=function(){(n.animating||n.elem.value===n.placeholder)&&(n.animating=1,window.cancelAnimationFrame(n.rAF),n.deletePlaceholder(),n.restoreDefaultType())},n.onBlur=function(){(n.animating||""===n.elem.value)&&(n.animating=1,window.cancelAnimationFrame(n.rAF),n.restorePlaceholder(),n.resetDefaultType())},n.onKeydown=function(){n.animating&&(n.animating=0,window.cancelAnimationFrame(n.rAF),n.elem.value="")},n.onReset=function(){setTimeout(function(){n.onBlur()})},n.deletePlaceholder=function(){n.elem.value.length>0?(n.elem.value=n.elem.value.slice(0,-1),n.rAF=window.requestAnimationFrame(n.deletePlaceholder)):n.animating=0},n.restorePlaceholder=function(){n.elem.value.length<n.placeholder.length?(n.elem.value+=n.placeholder[n.elem.value.length],n.rAF=window.requestAnimationFrame(n.restorePlaceholder)):n.animating=0},n.restoreDefaultType=function(){var e=n.elem.getAttribute(t.defaultInputAttributeName);e&&-1!=t.customElems.indexOf(e)&&e!=n.elem.getAttribute("type")&&n.elem.setAttribute("type",e)},n.resetDefaultType=function(){-1!=t.customElems.indexOf(n.defaultInputType)&&(n.elem.setAttribute(t.defaultInputAttributeName,n.defaultInputType),n.elem.setAttribute("type","text"))},n.init()},t.init(),t}


Placeholdem( document.querySelectorAll( '[placeholder]' ) );