// 1.
const people = ["Greg", "Mary", "Devon", "James"];
people.shift()
console.log(people)
// 2.
people.pop()
console.log(people)
// 3.
people.unshift('Matt')
console.log(people)
// 4.
people.splice(5,0,'Eyal')
console.log(people)
// 5.
const newArray = people.slice(2)
console.log(newArray)
// 6.
people.indexOf("Mary")
console.log(people)
// 7.
people.indexOf("Foo")
console.log(people)
// 8.
const people1 = ["Greg", "Mary", "Devon", "James"];
people1.splice(2,1,"Elizabeth", "Artie")
console.log(people1)
// 9.
const people2 = ["Greg", "Mary", "Devon", "James"];
const peoplewithBob = people2.concat("Bob")
console.log(peoplewithBob)