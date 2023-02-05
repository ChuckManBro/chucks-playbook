let dateStandard = []; // an array made up of: year, month, day
let dateIndex;

// CONVERT STANDARD TO INDEX

function standardToIndex(yyyy, mm, dd) {
  dateIndex = 0; //reset date index number
  dateIndex += Math.floor(yyyy * 365.25); //calculates day index of the years
  let monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30]; //Days in each month Jan thru Nov
  if (yyyy % 4 === 0) {
    monthLengths[1] = 29; // If Leap Year, this line adds leap day to February
    dateIndex -= 1; // This removes the leap day that was already added when year index was calculated
  }
  for (let i = 0; i < mm - 1; i++) {
    dateIndex += monthLengths[i];
  }
  dateIndex += dd;
  return dateIndex;
}

// CONVERT INDEX TO STANDARD

function indexToStandard(dateIndex) {
  let yyyy = Math.floor(dateIndex / 365.25);
  let remainder = dateIndex - Math.floor(yyyy * 365.25);
  let monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30]; //Days in each month Jan thru Nov
  if (yyyy % 4 === 0) {
    remainder += 1; // removes leap day in case date is before Feb 29
    monthLengths[1] = 29; // adds leap day to February
  }
  let mm = 0;
  let dd = remainder;
  for (let i = 0; remainder > 0; i++) {
    remainder -= monthLengths[i];
    mm++;
    if (remainder > 0) {
      dd = remainder;
    }
  }
  dateStandard = [yyyy, mm, dd];
  return dateStandard;
}
