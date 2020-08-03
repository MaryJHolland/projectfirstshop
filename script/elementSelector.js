function $(selector, all) {
    if (!all) {
        return document.querySelector(selector);
    } else {
        return document.querySelectorAll(selector);
    }
}