//PRICE CALCULATIONS
function calculateNights(checkOutDate, checkInDate) {
  console.log(typeof checkOutDate, "checkout", checkInDate, "checkin")
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
  }
};

export { calculateNights }