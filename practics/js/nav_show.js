function ShowElement(show_btn_id, hide_btn_id, hideable_id)
{
    let show_btn = document.getElementById(show_btn_id);
    let hide_btn = document.getElementById(hide_btn_id);
    let hideable = document.getElementById(hideable_id);
    show_btn.style.display = "none";
    hide_btn.style.display = "inline-block";
    hideable.style.display = "block";
}

function HideElement(show_btn_id, hide_btn_id, hideable_id)
{
    let show_btn = document.getElementById(show_btn_id);
    let hide_btn = document.getElementById(hide_btn_id);
    let hideable = document.getElementById(hideable_id);
    show_btn.style.display = "inline-block";
    hide_btn.style.display = "none";
    hideable.style.display = "none";
}

function ShowNavigation()
{
    ShowElement("show_nav", "hide_nav", "nav_hideable");
}

function HideNavigation()
{
    HideElement("show_nav", "hide_nav", "nav_hideable");
}

function ShowContacts()
{
    ShowElement("show_contacts", "hide_contacts", "contacts_hideable");
}

function HideContacts()
{
    HideElement("show_contacts", "hide_contacts", "contacts_hideable");
}

function ShowMapImage()
{
    ShowElement("show_map", "hide_map", "map_hideable");
}

function HideMapImage()
{
    HideElement("show_map", "hide_map", "map_hideable");
}

function init()
{
    ShowNavigation();
    HideContacts();
    HideMapImage();
}