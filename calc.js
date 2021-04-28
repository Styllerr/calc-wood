function calc() {
    var ArrPol = [0, 0.720, 0.840, 0.570, 0.660, 0.840, 0.720, 0.840, 0.720, 0.840]; //площа однієї штуки доски для підлоги
    // var pricePol = [0, 330, 430, 430, 430, 480, 600, 600, 370, 370]; //ціни на підлогу

    var ArrPotolok = [0, 0.200, 0.259, 0.288, 0.384, 0.576, 0.230, 0.288, 0.288, 0.576, 0.840, 0.840, 0.840, 1.140, 1.140, 1.140, 0.840, 0.840, 1.140, 0.660, 0.840, 0.720]; //площа однієї штуки доски для потолка
    // var pricePotoloc = [0, 230, 230, 210, 230, 230, 130, 270, 270, 300, 280, 330, 330, 430, 180, 180, 430, 480, 270, 270, 330]; //ціни на потолок

    var ArrStena = [0, 0.200, 0.259, 0.288, 0.384, 0.576, 0.230, 0.288, 0.288, 0.576, 0.840, 0.840, 0.840, 1.14, 1.140, 1.14, 0.840, 0.840,  1.14, 0.660, 0.840, 0.720]; //площа однієї штуки доски для стіни
    // var priceStena = [0, 230, 230, 210, 230, 230, 130, 270, 270, 300, 280, 330, 330, 430, 180, 180, 430, 480, 270, 270, 330]; //ціни на стіни

    var a, b, c, wc, ww, wh, mat_ceiling, mat_floor, mat_wall;

    a = parseFloat(document.getElementById("dim_a").value.replace(",", ".")); //а - довжина
    b = parseFloat(document.getElementById("dim_b").value.replace(",", ".")); //b - ширина
    c = parseFloat(document.getElementById("dim_c").value.replace(",", ".")); //c - висота
    wc = parseFloat(document.getElementById("wcount").value.replace(",", ".")); //wc - площа вікон
    dc = parseFloat(document.getElementById("dcount").value.replace(",", ".")); //dc - площа дверей

    if ((a < 0) || (b< 0) || (c<0) || (wc < 0) || (dc < 0)) {
        document.getElementById("square_floor").innerHTML = "Ошибка: введено отрицательное значение";
        document.getElementById("square_ceil").innerHTML = "";
        document.getElementById("square_wall").innerHTML = "";
        return false;
    }

    var delta = wc + dc; //вікна + двері
    var SquareFloor = a * b; //Площа підлоги
    var SquareCeil = a * b; //Площа стелі
    var SquareWall = 2 * (a * c + b * c) - delta; //Площа стіни

    if (SquareFloor) {
        document.getElementById("square_floor").innerHTML = "Площадь пола: " + SquareFloor.toFixed(2) + " м<sup>2</sup>";
        document.getElementById("itogo").innerHTML = "<h2>  </h2>";

    } else {
        document.getElementById("square_floor").innerHTML = "";
    }

    if (SquareCeil) {
        document.getElementById("square_ceil").innerHTML = "Площадь потолка: " + SquareCeil.toFixed(2) + " м<sup>2</sup>";

    } else {
        document.getElementById("square_ceil").innerHTML = "";
    }

    if (SquareWall) {
        document.getElementById("square_wall").innerHTML = "Площадь стен: " + SquareWall.toFixed(2) + " м<sup>2</sup>";

    } else {
        document.getElementById("square_wall").innerHTML = "";
    }


    mat_ceiling = document.getElementById("potolok").value; //потолок
    mat_floor = document.getElementById("polovaya").value; //пол
    mat_wall = document.getElementById("stena").value; //стіна


    var select_wall_value = document.getElementById("stena").options[document.getElementById('stena').selectedIndex].text;
    var select_floor_value = document.getElementById("polovaya").options[document.getElementById('polovaya').selectedIndex].text;
    var select_ceiling_value = document.getElementById("potolok").options[document.getElementById('potolok').selectedIndex].text;


    var CountFloor = SquareFloor / ArrPol[mat_floor]; //рахує підлогу
    var CountPriceFloor = mat_floor;

    var CountCeil = SquareCeil / ArrPotolok[mat_ceiling]; //рахує стелю
    var CountPriceCeil = mat_ceiling;

    var CountWall = SquareWall / ArrStena[mat_wall]; //рахує стіну
    var CountPriceStena = mat_wall;



    //Стеля
    //if (CountCeil) {
        if (CountPriceCeil > 0) {
            document.getElementById("count_ceiling").innerHTML = "<b>Потолок:</b> " + select_ceiling_value + " <br> " + SquareCeil.toFixed(1) + "м<sup>2</sup>" + "x" + CountPriceCeil + " руб" + " = " + SquareCeil.toFixed(1) * CountPriceCeil + " руб.";
        } else if (CountPriceCeil === 0) {
            document.getElementById("count_ceiling").innerHTML = "";
        } else {
            document.getElementById("count_ceiling").innerHTML = "";
        }

    //}


    //Стіна

   // if (CountWall) {
        if (CountPriceStena > 0) {
            document.getElementById("count_wall").innerHTML = "<b>Стены:</b> " + select_wall_value + " <br> " + SquareWall.toFixed(1) + "м<sup>2</sup>" + "x" + CountPriceStena + " руб" + " = " + SquareWall.toFixed(1) * CountPriceStena + " руб.";
        } else if (CountPriceStena === 0) {
            document.getElementById("count_wall").innerHTML = "";
        } else {
            document.getElementById("count_wall").innerHTML = "";
        }
  //  }

    //Підлога

    //if (CountFloor) {
        if (CountPriceFloor > 0) {
            document.getElementById("count_floor").innerHTML = "<b>Пол:</b> " + select_floor_value + " <br> " + SquareFloor.toFixed(1) + "м<sup>2</sup>" + "x" + CountPriceFloor + " руб" + " = " + SquareFloor.toFixed(1) * CountPriceFloor + " руб.";
        } else if (CountPriceFloor === 0) {
            document.getElementById("count_floor").innerHTML = "";
        } else {
            document.getElementById("count_floor").innerHTML = "";
        }
    //}

    var summ1 = SquareFloor.toFixed(3) * Math.round(CountPriceCeil); //стеля
    var summ2 = SquareCeil.toFixed(3) * Math.round(CountPriceFloor); //підлга
    var summ3 = SquareWall.toFixed(3) * Math.round(CountPriceStena); //стіна
    var summ = summ1 + summ2 + summ3;
    if (summ > 0) {
        document.getElementById("summ").innerHTML = "Сумма заказа: " + summ + " руб";
    } else {
        document.getElementById("summ").innerHTML = " ";
    }
}
