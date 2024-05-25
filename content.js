function ensureDarkStyle() {
    const head = document.getElementsByTagName('head')[0];
    if (head && document.getElementById('darkstyle_css') == null) {
        const link = document.createElement('link');
        link.id = 'darkstyle_css';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = chrome.runtime.getURL('css_dark.css');
        link.media = 'all';
        head.appendChild(link);
    }
}

// Run when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', ensureDarkStyle);
    