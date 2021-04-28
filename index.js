let lastNames = ["Mason", "Marcora", "Rico", "Neves", "Ivanov"]

userLastName = prompt(`Enter you last name to be entered into the array`)

lastNames.push(userLastName)

lastNames = lastNames.sort()

alert(`The names have now been sorted alphebetically : ${lastNames}`)

userLastNamePosition = lastNames.indexOf(userLastName)

alert(`Your last name is in the number ${userLastNamePosition} position`)

let upperCaseArray = []

for (const lastName of lastNames){
    upperCaseArray.push(lastName.toUpperCase())
}

console.log(lastNames)
console.log(upperCaseArray)