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