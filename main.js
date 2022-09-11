document.getElementById("inputNumOfPpl").onblur = function() {

    let numberofPpl = document.getElementById("inputNumOfPpl").value; //number of people
    let bill = document.getElementById("bill").value; //Bill Value

    //validation check
    if (numberofPpl <= 0) {
        document.getElementById("inputNumOfPpl").classList.add("inputNumOfPpl");
        document.querySelector(".inputNumOfPplError").classList.remove("d-none");
    } else {
        document.getElementById("inputNumOfPpl").classList.remove("inputNumOfPpl");
        document.querySelector(".inputNumOfPplError").classList.add("d-none");
    }

    let tip = document.getElementById("tip");
    let num1 = (bill * amountOfDiscount / numberofPpl).toPrecision(3);
    tip.textContent = `$${num1}`;

    let total = document.getElementById("total");
    let num2 = (bill * (1 + amountOfDiscount) / numberofPpl).toPrecision(4)
    total.textContent = `$${num2}`;

}
var amountOfDiscount;
let buttons = document.querySelectorAll(".discount");
for (let i = 0; i < 5; i++) {
    buttons[i].onclick = function() {
        buttons.forEach(b => {
            b.classList.remove("active");
        })
        buttons[i].classList.add("active");
        if (i == 0) {
            amountOfDiscount = 0.05;
        }
        if (i == 1) {
            amountOfDiscount = 0.1;
        }
        if (i == 2) {
            amountOfDiscount = 0.15;
        }
        if (i == 3) {
            amountOfDiscount = 0.25;
        }
        if (i == 4) {
            amountOfDiscount = 0.5;
        }

    }
}
document.querySelector(".customTip").onclick = function() {

    buttons.forEach(b => {
        b.classList.remove("active");
    })

}
document.querySelector(".customTip").onblur = function() {
    amountOfDiscount = document.querySelector(".customTip").value / 100;
    console.log(amountOfDiscount);
}
document.querySelector(".reset").onclick = function() {
    window.location.reload();

}