//calculate scrollbar width to avoid y overflow of the mobile menu on desktop
let scrollbarWidth = window.innerWidth - document.body.clientWidth;
if(scrollbarWidth > 0){
    document.documentElement.style.setProperty('--burger-menu-desktop-fix', scrollbarWidth + 'px');
    document.documentElement.style.setProperty('--burger-menu-dektop-pixel-fix', '1px');
}

