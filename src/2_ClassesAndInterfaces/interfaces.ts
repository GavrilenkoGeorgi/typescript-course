/* interfaces as function types
or custom function types */
// type sumFn = (a: number, b: number) => number
interface SumFn {
	(a: number, b: number): number
}

let sum: SumFn
sum = (n1: number, n2: number) => {
	return n1 + n2
}

/* (inheritance) extending interfaces */
interface Named {
	// properties can be readonly
	readonly name?: string
	// optional properties or methods
	// are marked with question mark '?'
	outputName?: string
	// someMethod?() {}
}

interface Greetable extends Named{
	greet(phrase: string): void
}

/* you can implement multiple interfaces
vs extend only one class
used to share functionality among different classes */

// class Person implements Greetable, Named {
class Person implements Greetable {
	name?: string
	age = 30

	constructor(n: string = 'NONAME') {
	// default value or
	// constructor(n?: string) {
		if (n) this.name = n
	}

	greet(phrase: string) {
		console.log(`${phrase} ${this.name}.`)
	}
}

let secondUser: Greetable
secondUser = new Person('Dale')
console.log(secondUser)

interface User {
	// or 'custom type' use to typecheck an object
	// we can (allows us to) define structure and have methods
	name?: string
	age: number

	greet(phrase: string): void
}

let firstUser: User

firstUser = {
	name: 'Bill',
	age: 30,

	greet(phrase: string) {
		console.log(`${phrase} ${this.name}.`)
	}
}

firstUser.greet('Hi there. I am')
