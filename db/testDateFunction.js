const makeDates = function(start, end) {
  let arr = [];
  for (let dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {

    arr.push(new Date(dt));
  }
  return arr;
};

var dates = makeDates(new Date("2020-09-23"), new Date("2021-09-23"));
console.log(dates);