// Bai 1
my_arr = [0, 5, 4, 2, 8]

const sum = my_arr.reduce((acc, cur) => acc + cur, 0)
console.log(sum)

// Bai 2
const people = [
	{ name: 'John', age: 24 },
	{ name: 'Pete', age: 25 },
	{ name: 'Mary', age: 28 }
]

const new_people = people.map(person => person.name)
console.log(new_people)

// Bai 3
arr1 = ['John', 'Pete', 'Mary']
arr2 = ['Mary', 'Henry', 'Harry']

new_arr = [...arr1, ...arr2]
unique_arr = []

new_arr.map(element => {
    if (!unique_arr.includes(element)) 
        unique_arr.push(element)
})

console.log(unique_arr)