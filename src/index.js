/**
 * function to set css vars of the scrollbar width 
 * (vars are used in the stylesheet to correctly depict mobile menu on dektop)
 * @param {Int} scrollbarWidth 
 */
function setScrollbarFixVars(scrollbarWidth) {
    document.documentElement.style.setProperty('--burger-menu-desktop-fix', scrollbarWidth + 'px');
    document.documentElement.style.setProperty('--burger-menu-desktop-pixel-fix', '1px');
}

/**
 * function to show the mobile menu links
 * @param {Boolean} checked 
 */
function showMobileMenuLinks(checked) {
    let links = document.getElementById('links'),
    btn1 = Array.prototype.slice.call(document.getElementsByClassName('btn1'));
    if (checked) {
        links.classList.add('links-mobile-menu-open');
        btn1.forEach(element => element.classList.add('btn1-mobile-menu-open'));
    } else {
        links.classList.remove('links-mobile-menu-open');
        btn1.forEach(element => element.classList.remove('btn1-mobile-menu-open'));
    }
}

/**
 * function to show the imprint
 */
function showImprint() {
    let imprintText = document.getElementById('imprint-text');
    if(imprintText.style.height === '0px'){
        imprintText.style.setProperty('height', imprintText.scrollHeight*2 + 'px');
        imprintText.classList.add('imprint-open');
    }
    else {
        imprintText.style.setProperty('height', '0px');
        imprintText.classList.remove('imprint-open');
    }
}

/**
 * Execute after dom is loaded
 */
window.onload = () => {

    //hack to set imprintText.style.height = 0px so the assertion in showImprint works 
    showImprint();

    //calculate scrollbar width to avoid y overflow of the mobile menu on desktop
    let scrollbarWidth = window.innerWidth - document.body.clientWidth;
    if(scrollbarWidth > 0){
        setScrollbarFixVars(scrollbarWidth);
    }

    //see if mobile menu is open and change positon of links accordingly
    let menuCheckbox = document.getElementById('burger-menu-checkbox');
    menuCheckbox.addEventListener('change', function() {
        showMobileMenuLinks(this.checked);
    });

    //check if media query is active and switch to dektop menu/mobile menu
    let mediaQuery = window.matchMedia('only screen and (max-aspect-ratio: 5/6)');
    mediaQuery.addEventListener('change', function() {
        this.matches ? showMobileMenuLinks(menuCheckbox.checked) : showMobileMenuLinks(false);
    });

    //listener to show imprint
    imprint.addEventListener('click', function() {
        showImprint();
    });

};



