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

/**
 * Function overloads
 */
function combineTypes(a: number, b: number): number;
function combineTypes(a: string, b: string): string;
function combineTypes(a: number, b: string): string;

// typeguards
function combineTypes(a: Comb, b: Comb) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString()
	}
	return a + b
}

const result = combineTypes(2, ' 2')
result.split(' ')

// optional chaining
const fetchedUserData = {
	id: 'u1',
	name: 'Max',
	job: { title: 'CEO', description: 'My own company' }
}

console.log(fetchedUserData.job && fetchedUserData.job.title)
console.log(fetchedUserData?.job?.title)

// nullish Coalescing
const inputValue = null
// only if null or undefined then the default value is used
const storedData = inputValue ?? 'DEFAULT'

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
