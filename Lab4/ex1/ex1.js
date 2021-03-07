var ih=window.innerHeight;
var iw=window.innerWidth;
var oh=window.outerHeight;
var ow=window.outerWidth;
var isf=document.fullscreen;
var wl=window.location;
var wm=window.menubar.visible;
var ws=window.scrollbars.visible;
var wst=window.statusbar.visible;


function windowDetails(){
    console.log("window innerHeight: "+ih);
    console.log("window innerWidth: "+iw);
    console.log("window outerHeight: "+oh);
    console.log("window outerWidth: "+ow);
    console.log("window isFullscreen: "+isf);
    console.log("window location: "+wl);
    console.log("window menubar visible: "+wm);
    console.log("window scrollbar visible: "+ws);
    console.log("window statusbar visible: "+wst);
    console.log(window.history);
}

window.windowDetails();

