function ShowNavigation()
{
    let show_btn = document.getElementById("show_nav");
    let hide_btn = document.getElementById("hide_nav");
    let hideable = document.getElementById("nav_hideable");

    show_btn.style.display = "none";
    hide_btn.style.display = "inline-block";
    hideable.style.display = "block";
}

function HideNavigation()
{
    let show_btn = document.getElementById("show_nav");
    let hide_btn = document.getElementById("hide_nav");
    let hideable = document.getElementById("nav_hideable");

    show_btn.style.display = "inline-block";
    hide_btn.style.display = "none";
    hideable.style.display = "none";
}