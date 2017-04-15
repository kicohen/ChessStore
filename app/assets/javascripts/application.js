var overlay = document.getElementById('overlay');
var sidebar = document.getElementById('mySidebar');
var sidenav = document.getElementById('mySidenav');
var storemenu = document.getElementById('store-menu');
var carticon = document.getElementById('cart-icon');
var cartmenu = document.getElementById('cart-menu');

function closeMenus(){
  closeNav();
  closeCart();
  if (overlay.style.zIndex != "50"){
    hideOverlay();
  }
  $('#nav-icon').removeClass('open');
}

function showOverlay(){
  overlay.style.zIndex = "50";
  overlay.style.backgroundColor = "rgba(0,0,0,0.5)";  
}

function hideOverlay(){
  overlay.style.zIndex = "-1";
  overlay.style.backgroundColor = "rgba(0,0,0,0)";
}

function toggleOverlay(){
  if (overlay.style.zIndex != "50"){
    showOverlay();   
  } else {
    hideOverlay();
  }
}

function openNav() {
    toggleOverlay();
    sidenav.style.width = "300px";
    sidebar.style.backgroundColor = "#313945";
    carticon.style.color = 'white';
}

function closeNav() {
    if (storemenu.style.width != "0px"){
      toggleStoreMenu();
      setTimeout(function() {
          sidenav.style.width = "0";
          sidebar.style.backgroundColor = "white";
          carticon.style.color = 'black';
          toggleOverlay();
      }, 450); 
    } else {
      sidenav.style.width = "0";
      sidebar.style.backgroundColor = "white";
      carticon.style.color = 'black';
      toggleOverlay();
    }
}

function toggleNav(){
  if (sidenav.style.width != "300px") {
    openNav();
    $('#nav-icon').toggleClass('open');
  } else {
    closeNav();
    $('#nav-icon').toggleClass('open');
  }
}

function toggleStoreMenu() {
  if (storemenu.style.width == '0px'){
    storemenu.style.width = '300px';
  } else {
    storemenu.style.width = '0px';
  }
}

function openCart(){
  if (sidenav.style.width == "300px") {
    closeNav();
  }
  cartmenu.style.width = "300px";
  cartmenu.style.paddingRight = "20px";
  sidebar.style.zIndex = "1";
}

function closeCart(){
  cartmenu.style.width = "0";
  sidebar.style.zIndex = "100";
  cartmenu.style.paddingRight = "0px";
}

function toggleCart(){
  if (cartmenu.style.width == "300px"){
    closeCart();
    toggleOverlay();
  } else {
    openCart();
    toggleOverlay();
  }
}

$('#login-modal').on('shown.bs.modal', function () {
    window.setTimeout(function ()
    {
        document.getElementById('usernameInput').focus();
    }, 0);
})
