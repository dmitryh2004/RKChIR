function captureSymbols() {
    var chars = "ABCDEFGHKLMNOPQRSTUVWXYZabcdefghklmnopqrstuvwxyz";
    var right_input = "";
    for (var i = 0; i < 5; i++)
    {
        right_input += chars[Math.floor(Math.random() * chars.length)];
    }
    console.log(right_input);
    input = prompt("Докажите, что вы не робот.\n\nВведите эти символы: " + right_input);
    if (input == right_input)
        return true;
    else
        return false;
}

function captureNumbers() {
    var a = Math.floor(Math.random() * 100);
    var b = Math.floor(Math.random() * 100);
    input = prompt("Хорошо, может быть, та капча была слишком сложной, допускаю\n\nВведите сумму этих чисел: " + a + ", " + b);
    if (Number(input) == Number(a) + Number(b))
        return true;
    else
        return false;
}

function capture() {
    var notRobot = captureSymbols();
    if (notRobot == false)
    {
        notRobot = captureNumbers();
        if (notRobot == false)
        {
            alert("Проверка не пройдена. Вы робот.");
            return;
        }
    }
    alert("Все ок, вы человек (наверно).");
    document.getElementById("submit_form_hide").style.display = "block";
}