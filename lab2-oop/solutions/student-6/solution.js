'use strict'

// ===== ЗАДАНИЕ 1: Базовый класс Vehicle =====
class Vehicle {
    static vehicleCount = 0;

    constructor(make, model, year) {
        this.make = make;
        this.model = model;

        const currentYear = new Date().getFullYear();
        if (year > currentYear) {
            throw new Error("Год выпуска не может быть больше текущего");
        }
        this._year = year;

        Vehicle.vehicleCount++;
    }

    displayInfo() {
        console.log(`Марка: ${this.make}, Модель: ${this.model}, Год: ${this._year}`);
    }

    get age() {
        return new Date().getFullYear() - this._year;
    }

    set year(newYear) {
        const currentYear = new Date().getFullYear();
        if (newYear > currentYear) {
            console.log("Ошибка: год выпуска не может быть больше текущего");
            return;
        }
        this._year = newYear;
    }

    get year() {
        return this._year;
    }

    static compareAge(vehicle1, vehicle2) {
        return Math.abs(vehicle1.age - vehicle2.age);
    }

    static getTotalVehicles() {
        return Vehicle.vehicleCount;
    }
}

// ===== ЗАДАНИЕ 2: Класс Car =====
class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year);
        this.numDoors = numDoors;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Количество дверей: ${this.numDoors}`);
    }

    honk() {
        console.log("Beep beep!");
        return "Beep beep!"; // для тестов
    }
}

// ===== ЗАДАНИЕ 3: Класс ElectricCar =====
class ElectricCar extends Car {
    constructor(make, model, year, numDoors, batteryCapacity) {
        super(make, model, year, numDoors);
        this.batteryCapacity = batteryCapacity;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Ёмкость батареи: ${this.batteryCapacity} кВт·ч`);
    }

    calculateRange() {
        return this.batteryCapacity * 6;
    }
}

// ===== ЗАДАНИЕ 4: Каррирование =====
const createVehicleFactory = (vehicleType) => (make, model, year) => {
    return new vehicleType(make, model, year);
};

// ===== ТЕСТЫ =====
function runTests() {
    console.log('=== Запуск тестов ===');

    const startCount = Vehicle.getTotalVehicles();

    // --- Vehicle ---
    const vehicle = new Vehicle('Toyota', 'Camry', 2015);
    console.assert(Vehicle.getTotalVehicles() === startCount + 1, '❌ vehicleCount не увеличился при создании Vehicle');
    console.assert(vehicle.make === 'Toyota', '❌ Vehicle make не совпадает');
    console.assert(vehicle.model === 'Camry', '❌ Vehicle model не совпадает');
    console.assert(vehicle.year === 2015, '❌ Vehicle year не совпадает');
    console.assert(vehicle.age === new Date().getFullYear() - 2015, '❌ Vehicle age некорректен');

    // Проверка сеттера (год в будущем)
    const futureYear = new Date().getFullYear() + 1;
    vehicle.year = futureYear; // не должно измениться
    console.assert(vehicle.year === 2015, '❌ Сеттер year пропустил некорректный год');

    // --- Car ---
    const car = new Car('Honda', 'Civic', 2018, 4);
    console.assert(Vehicle.getTotalVehicles() === startCount + 2, '❌ vehicleCount не увеличился при создании Car');
    console.assert(car instanceof Vehicle, '❌ Car не наследует Vehicle');
    console.assert(car.numDoors === 4, '❌ Количество дверей некорректно');
    console.assert(car.honk() === "Beep beep!", '❌ honk() работает неверно');

    // --- ElectricCar ---
    const electricCar = new ElectricCar('Tesla', 'Model 3', 2020, 4, 75);
    console.assert(Vehicle.getTotalVehicles() === startCount + 3, '❌ vehicleCount не увеличился при создании ElectricCar');
    console.assert(electricCar instanceof Car, '❌ ElectricCar не наследует Car');
    console.assert(electricCar.batteryCapacity === 75, '❌ BatteryCapacity некорректен');
    console.assert(electricCar.calculateRange() === 450, '❌ calculateRange() неверен');

    // --- compareAge ---
    const v1 = new Vehicle('Lada', '2101', 2000);
    const v2 = new Vehicle('Ford', 'Focus', 2010);
    console.assert(Vehicle.compareAge(v1, v2) === 10, '❌ compareAge неверен');

    // --- Фабрика (каррирование) ---
    const createCarFactory = createVehicleFactory(Car);
    const myNewCar = createCarFactory('BMW', 'X5', 2022);
    console.assert(myNewCar instanceof Car, '❌ Фабрика вернула не Car');
    console.assert(myNewCar.make === 'BMW', '❌ Фабрика присвоила неправильный make');

    // --- Статика ---
    console.assert(Vehicle.getTotalVehicles() === Vehicle.vehicleCount, '❌ getTotalVehicles неверен');
    console.log(`✅ vehicleCount сейчас: ${Vehicle.getTotalVehicles()}`);

    console.log('=== Все тесты пройдены! ✅ ===');
}

runTests();
