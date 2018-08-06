// Code your solution in this file.
function lowerCaseDrivers(collection) {
  newCollection = collection.map(function(driver) { return driver.toLowerCase()})
  return newCollection
}

function nameToAttributes(collection) {

  newCollection = collection.map(function(driver) {
    let arr = driver.split(" ")
    return Object.assign({}, {firstName: arr[0]}, {lastName: arr[1]})})
  return newCollection
}

function attributesToPhrase(collection) {
  newCollection = collection.map(function(driver) { return `${driver.name} is from ${driver.hometown}`})
  return newCollection
}
