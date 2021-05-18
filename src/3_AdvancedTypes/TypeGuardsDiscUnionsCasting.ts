// 'instanceof' typeguard
class Car {
	drive() {
		console.log('Driving...')
	}
}

class Truck {
	drive() {
		console.log('Driving a truck...')
	}

	loadCargo(amount: number) {
		console.log('Loading ', amount)
	}
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
	vehicle.drive()
	if (vehicle instanceof Truck) {
		vehicle.loadCargo(1000)
	}
}

useVehicle(v1)
useVehicle(v2)

/*
	discriminated unions
*/
interface Bird {
	type: 'bird'
	flyingSpeed: number
}

interface Horse {
	type: 'horse'
	runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
	let speed
	switch (animal.type) {
		case 'bird':
			speed = animal.flyingSpeed
			break
		case 'horse':
			speed = animal.runningSpeed
			break
	}
		console.log('Moving with speed: ' + speed)
}

moveAnimal({ type: 'bird', flyingSpeed: 1000 })

/*
	type casting
*/
// HTMLParagraphElement
const paragraph = document.querySelector('p')

// HTMLElement
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement

// or without exclamation mark
const userInputElement = document.getElementById('user-input')

if (userInputElement) {
	(userInputElement as HTMLInputElement).value = 'input'
}
