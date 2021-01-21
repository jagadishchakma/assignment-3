
/*
Convert Kilometer to Meter
*/

function kilometerToMeter(kilometer = 0){

    // kilometer value check
    if(kilometer < 1 || typeof kilometer != "number"){
        return "Sorry distance must be 1 kilo or further more";
    }
    //calculate kilometer to meter
    var meter = 0;
    meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(6);
console.log(result);





/*
budgets calculation
*/

function budgetCalculator(watch = 0, phones = 0, laptop = 0){
    // input budgets check validation
    if(typeof watch !== "number" || typeof phones !== "number" || typeof laptop !== "number"){
        return "Sorry, budgets is not the number";
    }
    //total budgets count
    var total = 0;
    total = watch + phones + laptop;
    return total;
}
var budgets = budgetCalculator(50, 100*3, 500);
console.log(budgets);





/*
calculate total hotel days cost
*/

function hotelCost(days = 0){
    //check days validatoin
    if(typeof days !== "number"){
        return "Sorry your days is invalid";
    }

    //calculate cost of days
    var cost = 0;
    if(days <= 10){
        cost = days * 100;
    }else{
        var tenDaysCost = 10 * 100;
        var remainDays = days - 10;
        var remainDaysCost = remainDays * 80;
        cost = tenDaysCost + remainDaysCost;
    }
    return cost;
}
var days = hotelCost(21);
console.log(days);





/*
get  most of the long name from mega friends
*/

function megaFriend(friends){
    // store long name
    var longNameLetter = 0;
    var longName = "";

    for(var i = 0; i < friends.length; i++){
        var currentName = friends[i];
        var nameLetterTotal = 0;
        //  spaceing check, validation and letter count
        for(var r = 0; r < currentName.length; r++){
            var nameLetter = currentName[r];
            if(nameLetter == " " && currentName[r-1] !== " "){
                    nameLetterTotal++;
            }
        }
        // set current long name
        if(longNameLetter < nameLetterTotal){
            longNameLetter = nameLetterTotal;
            longName = currentName;
        }
    }
    return longName;
}
var friends = ['Jagadish Chakma', 'Jotis Moni Chakma', 'Surjo   Moni      Chakma', 'Namita Chakma'];
var longName = megaFriend(friends);
console.log(longName);