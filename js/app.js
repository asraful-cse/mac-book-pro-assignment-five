// Total Calculation functional part.............
function totalCalculation(){
    let memoryCost = document.getElementById("memory_cost").innerText;
    let storageCost = document.getElementById("storage_cost").innerText;
    let deliveryCost = document.getElementById("delivery_cost").innerText;
    total = 1299 + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);
    document.getElementById("cost").innerText = total;
    document.getElementById("footer_final").innerText = total;
}
// Memory functional part.............
function memoryHandler(value){
    if(value == 1){
        document.getElementById("memory_cost").innerText = 0;
        totalCalculation();
    } else if(value == 2){
        document.getElementById("memory_cost").innerText = 180;
        totalCalculation();
    } else {
        alert("Something Went Wrong")
    }
}
// Storage functional part.............
function storageHandler(value){
    if(value == 1){
        document.getElementById("storage_cost").innerText = 0;
        totalCalculation();
    } else if(value == 2){
        document.getElementById("storage_cost").innerText = 100;
        totalCalculation();
    } else if(value == 3){
        document.getElementById("storage_cost").innerText = 180;
        totalCalculation();
    } else {
        alert("Something Went Wrong")
    }
}
// Delivery functional part.............
function  deliveryHandler(value){
    if(value == 1){
        document.getElementById("delivery_cost").innerText = 0;
        totalCalculation();
    } else if(value == 2){
        document.getElementById("delivery_cost").innerText = 20;
        totalCalculation();
    } else {
        alert("Something Went Wrong")
    }
}
// Promo Code functional part.............
function promoCodeHandler(){
    let promo = document.getElementById("input").value;
    if(promo == 'stevekaku'){
        let discount = document.getElementById("cost").innerText;
        let final = (20/100)*discount;
        discount = discount - final;
        document.getElementById("footer_final").innerText = discount;
    }
    document.getElementById("input").value = '';
}