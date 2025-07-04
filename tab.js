const tabList = document.querySelector('[role="tab-list"]');
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
    }

    if (e.keyCode === keydownLeft) {
        tabFocus--;
    }
});