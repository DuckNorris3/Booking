//PRICE CALCULATIONS
function calculateNights(checkInDate, checkOutDate) {
  if (checkOutDate) {
    let checkInDateObject = new Date(checkInDate);
    let checkOutDateObject = new Date(checkOutDate);
    let msBetween = checkOutDateObject.getTime() - checkInDateObject.getTime();
    let totalNights = msBetween/(1000*60*60*24);
    return totalNights;
  } else {
    return 0;
  }
};

function calculateDiscount(priceRate, discountPercentage, checkInDate, checkOutDate) {
  if (discountPercentage && checkOutDate) {
    let amountOff = priceRate * discountPercentage;
    let weeknightCount = 0;
    let dateToCheck = new Date(checkInDate);
    let checkOutDateObject = new Date(checkOutDate);
    while (dateToCheck < checkOutDateObject) {
      let dayOfWeek = dateToCheck.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        weeknightCount += 1;
      }
      dateToCheck.setDate(dateToCheck.getDate() + 1);
    }
    let totalSaved = amountOff * weeknightCount;
    return totalSaved;
  } else {
    return 0;
  }
};

function calculateTotal(nightCount, price, discountTotal) {

  if (nightCount) {
    let subTotal = price * nightCount;
    return subTotal - discountTotal;
  } else {
    return 0;
  }
}

export {
  calculateNights,
  calculateDiscount,
  calculateTotal
 }