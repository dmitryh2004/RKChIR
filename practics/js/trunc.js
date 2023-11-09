let maxLen = 120;

function trunc(str, maxLength) {
    if (str.length <= maxLength)
        return str;
    else
        return str.substring(0, maxLength) + "...";
}

function truncate(elem_id) {
    let elem = document.getElementById(elem_id);
    elem.innerHTML = trunc(elem.innerHTML, maxLen);
}