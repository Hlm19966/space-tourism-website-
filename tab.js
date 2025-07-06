const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');

let tabFocus = 0;


tabList.addEventListener('keydown', (e)=> {
    const keydownLeft = 37;
    const keydownright = 39;

    if (e.keyCode === keydownLeft || e.keyCode === keydownright) {
        tabs[tabFocus].setAttribute("tabindex", -1);
    }

    if (e.keyCode === keydownright) {
        tabFocus++;
        if (tabFocus >= tabs.length) {
            tabFocus = 0
        }
    }

    if (e.keyCode === keydownLeft) {
        tabFocus--;
        if (tabFocus < 0) {
            tabFocus = tabs.length -1;
        }
    }
    
    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();

    tabs.forEach(tab =>
        tab.setAttribute("aria-selected", "false"));
        tabs[tabFocus].setAttribute("aria-selected", "true");

});