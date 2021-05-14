abstract class Department {
	static fiscalYear = 2020
	// private readonly id: string
	// private name: string

	/* Protected vs private
		Protected makes it unaccessible from outside,
		but accessible from the classes that extend the
		base class. */
	protected employees: string [] = []

	constructor(protected readonly id: string, public name: string) {
		// this.id = id
		// this.name = n

		// class name gives access to static properties from inside the class
		console.log(Department.fiscalYear)
	}

	static createEmployee(name: string) {
		return {
			name: name
		}
	}

	// abstract so that inheriting will need to
	// provide their own implementation

	abstract describe(this: Department): void
	/* {
		console.log(`Department (${this.id}): ${this.name}`)
	} */

	addEmployee(employee: string) {
		// validation etc
		this.employees.push(employee)
	}

	printEmployeeInformation() {
		console.log(this.employees)
	}
}

class ITDepartment extends Department {
	admins: string[]
	constructor(id: string, admins: string[]) {
		super(id, 'IT')
		this.admins = admins
	}

	describe() {
		console.log(`IT Department (${this.id}): ${this.name}`)
	}
}

class AccountingDepartment extends Department {
	private lastReport: string
	private static instance: AccountingDepartment

	get mostRecentReport() {
		if (this.lastReport)
			return this.lastReport
		throw new Error('No report found.')
	}

	set mostRecentReport(value: string) {
		if (!value) {
			throw new Error('Please pass in a valid value.')
		}
		this.addReport(value)
	}

	// singeltons and private constructors
	private constructor(id: string, private reports: string[]) {
		super(id, 'Acccounting')
		this.lastReport = reports[0]
	}

	static getInstance() {
		// if (this.instance) {
		// or
		if (AccountingDepartment.instance) {
			// return this.instance
			// or 
			return AccountingDepartment.instance
		}
		this.instance = new AccountingDepartment('id_2', [])
		return this.instance
	}

	describe() {
		console.log('Accounting department - ID: ' + this.id)
	}

	addEmployee(name: string) {
		if (name === 'Bill') {
			return
		}
		this.employees.push(name)
	}

	addReport(text: string) {
		this.reports.push(text)
		this.lastReport = text
	}

	printReports() {
		console.log(this.reports)
	}
}

// const accounting = new AccountingDepartment('id_0', [])

// singleton (only one instance can exist)
const accounting = AccountingDepartment.getInstance()

// getters
accounting.addReport('Something went wrong...')
// setters
accounting.mostRecentReport = 'Report set.'
console.log(accounting.mostRecentReport)

accounting.printReports()
accounting.addEmployee('Bill')
accounting.addEmployee('Hank')
accounting.describe()
accounting.printEmployeeInformation()
console.log(accounting)

// static methods are called directly on the class
const employee = Department.createEmployee('Bill')
console.log(employee, Department.fiscalYear)

const itDep = new ITDepartment('id_1', ['Bill'])
itDep.addEmployee('Bill')
itDep.addEmployee('Hank')
itDep.describe()
itDep.printEmployeeInformation()
console.log(itDep)

// const accountingCopy = { name: 'Accounting copy', describe: accounting.describe }
// accountingCopy.describe()
