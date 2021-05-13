enum Role { ADMIN, READ_ONLY, AUTHOR }

const person = {
	name: 'Bill',
	age: 30,
	hobbies: ['sports', 'cooking'],
	role: Role.ADMIN
}

let favoriteActivities: string[]
favoriteActivities = ['sports']

console.log(person.name)

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase())
}

if (person.role === Role.ADMIN) {
	console.log('is ADMIN')
}
