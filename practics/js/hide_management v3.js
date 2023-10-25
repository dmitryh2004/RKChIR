function ShowElement(show_btn_id, hide_btn_id, hideable_id, flex)
{
    let show_btn = document.getElementById(show_btn_id);
    let hide_btn = document.getElementById(hide_btn_id);
    let hideable = document.getElementById(hideable_id);
    show_btn.style.display = "none";
    hide_btn.style.display = "inline-block";
    if (flex == true)
    {
        hideable.style.display = "flex";
    }
    else {
        hideable.style.display = "block";
    }
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

function ShowContacts()
{
    ShowElement("show_contacts", "hide_contacts", "contacts_hideable", false);
}

function HideContacts()
{
    HideElement("show_contacts", "hide_contacts", "contacts_hideable");
}

function ShowMapImage()
{
    ShowElement("show_map_image", "hide_map_image", "map_image_hideable", false);
}

function HideMapImage()
{
    HideElement("show_map_image", "hide_map_image", "map_image_hideable");
}

function ShowMap()
{
    ShowElement("show_map", "hide_map", "map_hideable", false);
}

function HideMap()
{
    HideElement("show_map", "hide_map", "map_hideable");
}

function ShowForm()
{
    ShowElement("show_form", "hide_form", "form_hideable", false);
}

function HideForm()
{
    HideElement("show_form", "hide_form", "form_hideable");
}

function ShowImages()
{
    let elements = document.getElementsByClassName("image_container_img hideable");
    let show_btn = document.getElementById("show_images");
    let hide_btn = document.getElementById("hide_images");
    show_btn.style.display = "none";
    hide_btn.style.display = "inline-block";
    for (var i = 0, max = elements.length; i < max; i++)
    {
        elements[i].style.display = "block";
    }
}

function HideImages()
{
    let elements = document.getElementsByClassName("image_container_img hideable");
    let show_btn = document.getElementById("show_images");
    let hide_btn = document.getElementById("hide_images");
    show_btn.style.display = "inline-block";
    hide_btn.style.display = "none";
    for (var i = 0, max = elements.length; i < max; i++)
    {
        elements[i].style.display = "none";
    }
}

function init()
{
    let loading_div = document.getElementById("loading");
    loading_div.style.display = "none";
}