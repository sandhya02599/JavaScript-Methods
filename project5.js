// Array method push():

let sports = ["Cricket", "football"]
sports.push("socker", 66, "sandhya")

document.write(sports + "<br>")
document.write(sports.length + "<br>")


// // Array method-pop():

let book = ["Maths", "Physics", "Social"];
book.pop()
document.write(book)


// Array method- shift():

let states = ["Delhi", "Mumbai", "Hyderbad"];

let newStates = states.shift()
document.write(states + "<br>")
document.write(states.length + "<br>")
document.write(newStates + "<br>")


// // Array method- Unshift():

let score = ["23", "56","88", "sandhya"];

score.unshift("chaithanya", "77")
document.write(scores + "<br>")


// concat():

let Scores = [22, 34, 54,66];
let players = ["amar", "suresh", "mahesh"]

let newPlayers = scores.concat(players)

document.write(newPlayers)



// Join():

var team = [10, 20, 34, "sunil", "anil", "madhav"];
var myTeam = team.join("****")
document.write(team + "<br>")
document.write(myTeam)


// Slice():

let Students = ["anil", "balu", "karthik", 10,30,70,30,88];
let myStudents = students. slice(0,5)

document.write(myStudents)


// splice():
// Removing, Replacing, and adding elements:

let mynumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let MyNewNumbers = myNumbers.splice(4, 1, "javascript")
document.write(myNumbers + "<br>")
document.write(myNewNumbers)


// // Adding the value:
let myNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let myNewNumbers = myNumbers.splice(3, 0, "Adding the value")
document.write(myNumbers + "<br>")
document.write(myNewNumbers)


// indexOf():

let students = ["sandhya", "lakshmi", "lalitha", "anusri", "divya"];
var newStudent = students.indexOf("chaithanya")
if(newStudent === -1){
    students.push("chathanya")
}

document.write(students)


// forEach() method:

let scores = [10, 20, 30, 40, 50, 60, 70];

let Teacher = ["sandhya", "lakshmi", "lalitha", "anusri", "divya"];

Teacher.forEach(function(item, index){
    document.write(index + 1 + "." + item + "<br>")
})

scores.forEach(function(apple){
    document.write(apple * 2 + '<br>')
})


