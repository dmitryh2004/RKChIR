let basketList = undefined;
let basketTotalCost = undefined;
let filtered = undefined;

let shopList = []

function Samokat() {
    this.number = Math.trunc(Math.random() * 899999) + 100000;
    this.cost = Math.trunc(Math.random() * 99) + 1;
}

function init() {
    basketList = document.getElementById("basketEditable");
    basketTotalCost = document.getElementById("totalEditable");
    filtered = document.getElementById("filteredEditable");
}

function addNew() {
    var newSamokat = new Samokat();
    shopList.push(newSamokat);
}

function removeRandom() {
    shopList.splice(Math.trunc(Math.random() * shopList.length), 1);
}

function clearBasket() {
    for (var i = shopList.length; i > 0; i--)
    {
        removeRandom();
    }
}

function filter(a, b) {
    filteredList = []
    for (var i = 0; i < shopList.length; i++) {
        if ((shopList[i].cost >= a) && (shopList[i].cost <= b))
        {
            filteredList.push(shopList[i]);
        }
    }
    return filteredList;
}

function sort(direction)
{
    for (var i = 0; i < shopList.length; i++)
    {
        for (var j = 0; j < shopList.length; j++)
        {
            if (direction) { //increase
                if (shopList[i].cost < shopList[j].cost)
                {
                    temp = shopList[i];
                    shopList[i] = shopList[j];
                    shopList[j] = temp;
                }
            }
            else { //decrease
                if (shopList[i].cost > shopList[j].cost)
                {
                    temp = shopList[i];
                    shopList[i] = shopList[j];
                    shopList[j] = temp;
                }
            }
        }
    }
}

function updateBasket() {
    var totalCost = 0;
    var basketText = "";
    for (var i = 0; i < shopList.length; i++) {
        totalCost += shopList[i].cost;
        basketText += "Самокат №" + shopList[i].number + ", цена: " + shopList[i].cost + "<br>";
    }
    if (basketText == "")
    {
        basketText = "Товаров нет";
    }
    basketTotalCost.innerHTML = String(totalCost);
    basketList.innerHTML = String(basketText);
}

function updateFiltered(res) {
    var filteredText = "";
    for (var i = 0; i < res.length; i++) {
        filteredText += "Самокат №" + res[i].number + ", цена: " + res[i].cost + "<br>";
    }
    if (filteredText == "")
    {
        filteredText = "Товаров нет";
    }
    filtered.innerHTML = String(filteredText);
}

//вызов функций фильтра и сортировки
function startFilter() {
    var a = 0;
    var b = 0;
    var elemMin = document.getElementById("filter_min");
    var elemMax = document.getElementById("filter_max");
    a = elemMin.value;
    b = elemMax.value;
    if ((String(Number(a)) === a) && (String(Number(b)) === b))
    {
        if (Number(a) > Number(b))
        {
            alert("Ошибка: минимальное значение больше максимального");
        }
        else
        {
            updateFiltered(filter(a, b));
        }
    }
    else {
        alert("Ошибка при вводе границ диапазона.");
    }
}

function startSort() {
    var radios = document.getElementsByName("sortDirection");
    var selected = Array.from(radios).find(radio => radio.checked);
    if (selected != undefined)
    {
        var direction = (selected.getAttribute('id') == "decrease") ? false : true;
        sort(direction);
        updateBasket();
    }
    else {
        alert("Ошибка при сортировке. Не выбрано направление");
    }
}