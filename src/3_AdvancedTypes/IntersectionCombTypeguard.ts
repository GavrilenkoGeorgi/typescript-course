// console.log('Hi TS! Everything is in the chapter folders.')

// intersection types
type Admin = {
	name: string,
	privileges: string[]
}

type Employee = {
	name: string,
	startDate: Date
}

type ElevatedEmployee = Admin & Employee

const firstEmployee: ElevatedEmployee = {
	name: 'Bill',
	privileges: ['create-server'],
	startDate: new Date()
}

console.log(firstEmployee)

// interface inheritance
interface iAdmin {
	name: string,
	privileges: string[]
}

interface iEmployee {
	name: string,
	startDate: Date
}

interface iElevatedEmployee extends Employee, Admin {}

const secondEmployee: iElevatedEmployee = {
	name: 'Dale',
	privileges: ['do-things'],
	startDate: new Date()
}

console.log(secondEmployee)

// combinables
// intersection of the union types
type Comb = string | number
type Numeric = number | boolean

type Universal = Comb & Numeric

// typeguards
function combineTypes(a: Comb, b: Comb) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString()
	}
	return a + b
}

type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp: UnknownEmployee) {
	console.log('Name: ' + emp.name)
	if ('privileges' in emp) {
		console.log('Privileges: ' + emp.privileges)
	}
	if ('startDate' in emp) {
		console.log('Start date: ', emp.startDate)
	}
}

printEmployeeInformation({ name: 'Hank', startDate: new Date() })
