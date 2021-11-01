function addButtonClickListener(id, fn) {
    return document.getElementById(id).addEventListener('click', fn);
}