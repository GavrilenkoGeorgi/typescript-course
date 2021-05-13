function addNumbers(n1: number, n2: number) {
	return n1 + n2
}

function printRes(num: number): void {
	console.log('Result: ' + num)
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	const result = n1 + n2
	cb(result)
}

printRes(addNumbers(5, 12))

let combinedValues: (a: number, b: number) => number

combinedValues = addNumbers
// combinedValues = printResult
// combinedValues = 5

console.log(combinedValues(8, 8))

addAndHandle(10, 20, (result) => {
	console.log(result)
})
