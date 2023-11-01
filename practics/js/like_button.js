let like = false;

function ToogleLike() {
    like = (like) ? false : true;
    let btn = document.getElementById("like");
    let btn_img = document.getElementById("like_img");
    if (like)
    {
        btn.style.backgroundColor = "#fcc";
        btn_img.src = "media/like_alternate.png";
    }
    else {
        btn.style.backgroundColor = "#ccc";
        btn_img.src = "media/like.png";
        document.getElementById("like_button_amogus").replaceChildren();
    }
}

function CreateNewLike(event) {
    if (like)
    {
        event = event || window.event;
        var rect = document.getElementById("like_button_amogus").getBoundingClientRect();
        var offsetX = rect.left;
        var offsetY = rect.top;
        var posX = event.clientX - offsetX;
        var posY = event.clientY - offsetY;
        if (posX < 0 || posX > 500 || posY < 0 || posY > 250) return;
        posX -= 20;
        posY -= 20;
        console.log(posX + " " + posY);
        var child = document.createElement("img");
        child.src = "media/like.png";
        child.style.position = "absolute";
        child.style.left = posX + "px";
        child.style.top = posY + "px";
        document.getElementById("like_button_amogus").appendChild(child);
    }
}