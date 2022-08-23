// Code your solution in this file!
const returnFirstTwoDrivers = function(arrayDrivers){
    return (arrayDrivers.slice(0,2));
}
const returnLastTwoDrivers = function(arrayDrivers){
    return (arrayDrivers.slice(-2));
}
const createFareMultiplier = function(numberOfTickets){
    return function(fare){
        return numberOfTickets * fare
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function selectDifferentDrivers(arrayDrivers, fn){
  return fn(arrayDrivers);
}