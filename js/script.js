var c = 1;
var z = 0;
var b = 1;
var d = 0;
var intervalId;
var x = -140;
var inpp1;
var inpp2;
var resetFlag = false;
var flag = true;
var flagStay = false;
var center = screen.width / 2 - 75;
var centerLeft = Math.round((screen.width / 2) / 2 - 75);
var centerRight = Math.round(((screen.width / 2) / 2 - 75) + screen.width / 2);
var goLeft = false;
var goRight = false;
var message = document.getElementById("message");
var textLeft = document.getElementById("textLeft");
var textRight = document.getElementById("textRight");
var btn = document.getElementById("btn");
var btn2 = document.getElementById("btn2");
btn2.hidden = true;
btn.hidden = true;
var person = document.getElementById("vas");


function findDota(i1, i2) {
    val = i1.value.toLowerCase();
    val2 = i2.value.toLowerCase();
    if (val.indexOf("dota") >= 0 || val.indexOf("дота") >= 0) {
        return val;
    }

    if (val2.indexOf("dota") >= 0 || val2.indexOf("дота") >= 0) {
        return val2;
    }
    return null;
}

function start() {
    inpp1 = document.getElementById("inp1");
    inpp2 = document.getElementById("inp2");
    if (inpp1.value == "" || inpp1.value == "") {
        alert("заполните поля")
    } else {
        clearInterval(intervalId)
        inpp1.hidden = true;
        inpp2.hidden = true;
        btn.hidden = true;
        textLeft.innerText = inpp1.value;
        textRight.innerText = inpp2.value;
        if (findDota(inpp1, inpp2) != null) {
            if (findDota(inpp1, inpp2) == inpp1) {
                goRightF();
            } else {
                goLeftF();

            }
        } else {
            var random = Math.random() < 0.5;
            if (random) {
                goLeftF();
            } else {
                goRightF();
            }
        }

    }

}

function m2(count) {
    if (count < 10) {
        return 1;
    }
    if (count < 20) {
        return 2;
    }
    if (count < 30) {
        return 3;
    }
    if (count < 40) {
        return 4;
    }
    if (count < 50) {
        return 5;
    }
    if (count < 60) {
        return 6;
    }
    if (count < 70) {
        return 7;
    }
    if (count < 80) {
        return 8;
    }
}

function m(count) {
    var count2 = count + 1;
    if (count2 == 80) {
        return 0;
    } else {
        return count2;
    }
}

function reset() {
    clearInterval(intervalId)
    btn2.hidden = true;
    message.innerText = "";
    inpp2.hidden = false;
    inpp1.hidden = false;
    inpp1.value = "";
    inpp2.value = "";
    textLeft.innerText = "";
    textRight.innerText = "";
    intervalId = setInterval(function () {
        z = m(z)
        c = m2(z);
        var run;
        if (x > center) {
            x -= 4;
            run = "left"
        } else {
            x += 4;
            run = "right"
        }
        person.setAttribute("src", "img/" + run + "/" + c + ".png")
        person.setAttribute("style", "margin-left: " + x + "px; margin-top: 24px;")
        if (run == "left"){
            if (x < center) {
                clearInterval(intervalId)
                btn.hidden = false;
                stay()
            }
        } else {
            if (x > center) {
                clearInterval(intervalId)
                btn.hidden = false;
                stay()
            }
        }



    }, 20);
}

function goLeftF() {
    intervalId = setInterval(function () {
        z = m(z)
        c = m2(z);
        x -= 4;
        person.setAttribute("src", "img/left/" + c + ".png")
        person.setAttribute("style", "margin-left: " + x + "px; margin-top: 24px;")
        if (x < centerLeft) {
            clearInterval(intervalId)
            stay()
            message.innerText = "Вася выбрал " + inpp1.value;
            btn2.hidden = false;
        }


    }, 20);
}

function goRightF() {
    intervalId = setInterval(function () {
        z = m(z)
        c = m2(z);
        x += 4;
        person.setAttribute("src", "img/right/" + c + ".png")
        person.setAttribute("style", "margin-left: " + x + "px; margin-top: 24px;")
        if (x > centerRight) {
            clearInterval(intervalId)
            stay()
            message.innerText = "Вася выбрал " + inpp2.value;
            btn2.hidden = false;

        }

    }, 20);
}

function begin() {
    intervalId = setInterval(function interval() {
        if (flag) {
            z = m(z)
            c = m2(z);
            x += 4;
            person.setAttribute("src", "img/right/" + c + ".png")
            person.setAttribute("style", "margin-left: " + x + "px; margin-top: 24px;")
            if (x > center) {
                btn.hidden = false;
                clearInterval(intervalId)
                stay();
            }
        }

    }, 20);
}

function stay() {
    intervalId = setInterval(function () {
        b = s(b)
        d = s2(b);
        person.setAttribute("src", "img/stay/" + d + ".png")
        person.setAttribute("style", "margin-left: " + x + "px; margin-top: 24px;")

    }, 20);
}


function s2(count) {
    if (count < 10) {
        return 1;
    }
    if (count < 20) {
        return 2;
    }
    if (count < 30) {
        return 3;
    }
    if (count < 40) {
        return 4;
    }
}

function s(count) {
    var count2 = count + 1;
    if (count2 == 40) {
        return 0;
    } else {
        return count2;
    }
}

begin();