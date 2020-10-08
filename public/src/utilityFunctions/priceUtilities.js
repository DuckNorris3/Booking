//PRICE CALCULATIONS
function calculateNights(checkInDate, checkOutDate) {
  if (checkOutDate) {
    let count = 0;
    let date = new Date(checkInDate.toString());
    let checkoutString = new Date(checkOutDate.toString());
    // while loop over check in date up to check out date
    while (date < checkoutString) {
      count += 1;
      date.setDate(date.getDate() + 1);
    }
    return count;
  } else {
    return 0;
  }
};

function calculateDiscount(priceRate, discountPercentage, checkInDate, checkOutDate) {
  if (discountPercentage && checkOutDate) {
    let amountOff = priceRate * discountPercentage;
    let weeknightCount = 0;
    let date = new Date(checkInDate.toString());
    let checkoutString = new Date(checkOutDate.toString());
    while (date < checkoutString) {
      let day = date.getDay();
      if (day !== 0 && day !== 6) {
        weeknightCount += 1;
      }
      date.setDate(date.getDate() + 1);
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