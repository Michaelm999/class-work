function diameter(r) {
  return r * 2
}

function circumference(r) {
  return Math.PI * diameter(r)
}

function area(r) {
  return Math.PI * Math.pow(r, 2)
}

var circle = {
  diameter: diameter,
  circumference: circumference,
  area: area
}

module.exports = {
  diameter: diameter,
  circumference: circumference,
  area: area
}
