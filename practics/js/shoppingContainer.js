function ShoppingContainer(startValue)
{
    this.value = startValue;
    this.read = function() {
        input = prompt("Введите число, которое нужно прибавить: ");
        if (String(Number(input)) == input)
        {
            this.value += Number(input);
            alert("Число успешно добавлено.");
        }
        else
        {
            alert("Ошибка.");
        }
    };
    this.show = function() {
        alert("Текущее значение: " + this.value);
    };
}

let shoppingContainer = new ShoppingContainer(10);