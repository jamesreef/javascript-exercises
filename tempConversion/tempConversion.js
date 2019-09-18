const ftoc = function(fTemp) {
  let fahCalc = (fTemp - 32) * (5/9);
  let rounded = Math.round(fahCalc * 10) / 10;
  return rounded;
}

const ctof = function(cTemp) {
  let celcCalc = cTemp * (9/5) + 32;
  let rounded = Math.round(celcCalc * 10) / 10;
  return rounded;
}

module.exports = {
  ftoc,
  ctof
}
