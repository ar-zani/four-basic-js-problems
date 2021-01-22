// https://github.com/ar-zani/four-basic-js-problems

/*........Problem NO.-1.......*/
/*===========================*/

function kilometerToMeter(kilometer){
    
    if(typeof(kilometer) === 'string') {
        return "Error!!! You have entered a string value in kilometerToMeter.";   //if the inserted value is a string.
    }
    if(typeof(kilometer) === 'number') {
        if(kilometer < 0) {
            return "Error!!! You have entered a negative number in kilometerToMeter.";  //if the inserted value is negative.
        }
        return kilometer*1000;
    }
    else {
        return "Error!!! You have not entered a number type value in kilometerToMeter.";  //if inserted value is neither a string nor a number.
    }
}



/*........Problem NO.-2.......*/
/*===========================*/

function budgetCalculator(watch, phone, laptop){
    
    if(typeof(watch) === 'string' || typeof(phone) === 'string' || typeof(laptop) === 'string') {
        return "Error!!! You have entered string value in budgetCalculator.";   //if the inserted values are string.
    }
    if(typeof(watch) === 'number' && typeof(phone) === 'number' && typeof(laptop) === 'number') {
        if(watch<0 || phone<0 || laptop<0) {
            return "Error!!! You have entered negative value in budgetCalculator.";  //if the inserted values are negative.
        }
        if(watch != Math.round(watch) || phone != Math.round(phone) || laptop != Math.round(laptop)) {
            return "Error!!! You have entered desimal number in budgetCalculator.";  //if the inserted values are desimal.
        }
        var budgetResult = (watch*50) + (phone*100) + (laptop*500); 
        return budgetResult;
    }
    else {
        return "Error!!! You havn't entered a number type value in hotelCost."; //if inserted value is neither a string nor a number.
    }
}



/*........Problem NO.-3.......*/
/*===========================*/


function hotelCost(days) {
    
    if(typeof(days) === 'string') {
        return "Error!!! You have entered a string value in hotelCost.";   //if the inserted value is a string.
    }
    if(days < 0) {
        return "Error!!! You have entered a negative number in hotelCost.";  //if the inserted value is negative.
    }
    if(typeof(days) === 'number') {
        if(days != Math.round(days)) {
            return "Error!!! You have entered desimal number in hotelCost.";   //if the inserted values are desimal.
        }
        var costResult = days*100;
        if(days>10) {
            costResult = costResult - (days-10)*20;
        }
        if(days>20) {
            costResult = costResult - (days-20)*30;
        }
        return costResult;
    }
    else {
        return "Error!!! You have not entered a number type value in hotelCost.";  //if inserted value is neither a string nor a number.
    }
}



/*........Problem NO.-4.......*/
/*===========================*/

function megaFriend(friendList) {
    if(friendList.length == 0) {
        return "Error!!! You have entered an empty array.You have no friend in megaFriend";  //if array is empty.
    }
    var bigName = "";
    for(var i=0; i< friendList.length; i++){
        if(typeof(friendList[i]) === 'string'){
            if(bigName.length < friendList[i].length){
                bigName = friendList[i];
            }
        }
    }
    if(bigName === ""){
        return "Error!!! You haven't entered any string type name of your friends.";  //if the array is full of numbers.
    }
    else{
        return bigName; //if inserted value is neither a string nor a number.
    }
}
