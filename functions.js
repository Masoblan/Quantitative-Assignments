function addPaintAndSupplies(totalCost, callback) {

    let cost = prompt("Enter the cost for the paint and supplies :");
    cost = parseFloat(cost);

    if (cost > 100)
        cost *= 1.1;
    // 

    let paintArea = document.querySelector(".paint");
    paintArea.innerHTML = `Paint $ ${cost.toFixed(2)}`;
    callback(totalCost + cost);
    return (totalCost + cost);

}

//2//
function addPaintAndSupplies(totalCost, callback) {
    let cost = prompt("Enter the cost for the Floor Coverings :");
    cost = parseFloat(cost);

    if (cost < 500)
        cost *= 1.1;

    let FloorArea = document.querySelector(".floorCoverings");
    FloorArea.innerHTML = `Floor Coverings $ ${cost.toFixed(2)}`;
    callback(totalCost + cost);
    return (totalCost + cost);

}
//3//
function addPaintAndSupplies(totalCost, callback) {
    let cost = prompt("Enter the cost for the furniture :");
    cost = parseFloat(cost);

    if (cost < 500)
        cost /= 1.1;

    let FurnitureArea = document.querySelector(".furniture");
    FurnitureArea.innerHTML = `Furniture $ ${cost.toFixed(2)}`;
    callback(totalCost + cost);
    return (totalCost + cost);

}
//CallBack//
const updateTotals = (cost) => {
    
    let totalsArea = document.querySelector(".totalCost");
    totalsArea.innerHTML = `Total $ ${cost.toFixed(2)}`;

}

let totalCost = 0;
totalCost = addPaintAndSupplies(totalCost, updateTotals);

// ....