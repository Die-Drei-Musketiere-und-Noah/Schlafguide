window.fillerHeight = 0;

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
 * toggles the dark mode
 */
function toggleDarkMode() {
    if(document.getElementById('dark-mode-checkbox').checked){
        document.cookie = "darkMode=true; path=/";
        setDarkModeProperty('--btn1-hover-bg-color', 'rgb(157, 177, 180)'); 
        setDarkModeProperty('--btn1-hover-color', 'black'); 
        setDarkModeProperty('--background', 'black'); 
        setDarkModeProperty('--nav-bg-color', 'rgb(51, 57, 58)'); 
        setDarkModeProperty('--tab-background', 'rgb(98, 110, 112)');
        setDarkModeProperty('--color', 'white'); 
    }
    else {
        document.cookie = "darkMode=false; path=/";
        setDarkModeProperty('--btn1-hover-bg-color', 'rgb(49, 55, 56)'); 
        setDarkModeProperty('--btn1-hover-color', 'white'); 
        setDarkModeProperty('--background', 'rgb(255, 250, 240)'); 
        setDarkModeProperty('--nav-bg-color', 'rgb(157, 177, 180)'); 
        setDarkModeProperty('--tab-background', 'rgb(210, 236, 240)');
        setDarkModeProperty('--color', 'black'); 
    }
}

function setDarkModeProperty(property, value) {
    document.documentElement.style.setProperty(property, value);
}

/**
 * from: https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript
 * @param {String} name 
 * @returns cookieValue
 */
const getCookieValue = (name) => (
    document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
)

function checkDarkMode() {
    if(getCookieValue('darkMode') === 'true'){
        document.getElementById('dark-mode-checkbox').checked = true;
        toggleDarkMode();
    }
}

/**
 * Execute after dom is loaded
 */
window.addEventListener('load', function() {

    
    //check for darkmode
    checkDarkMode();

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
    let mediaQuery = window.matchMedia('only screen and (max-aspect-ratio: 4/3)');
    mediaQuery.addEventListener('change', function() {
        this.matches ? showMobileMenuLinks(menuCheckbox.checked) : showMobileMenuLinks(false);
    });

    //listener to toggle darkmode
    let darkModeToggle = document.getElementById('dark-mode-checkbox');
    darkModeToggle.addEventListener('change', function() {
        toggleDarkMode();
    });
});


