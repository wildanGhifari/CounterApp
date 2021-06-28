let count = 0;
let countEl = document.getElementById("count-el");
let prevOrder = document.getElementById("prev-order");

function countNewUser() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countOrder = count + " - ";
    prevOrder.textContent += countOrder;
}