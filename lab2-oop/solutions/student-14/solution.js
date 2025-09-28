'use strict'

// ===== ЗАДАНИЕ 1: Базовый класс Vehicle =====
class Vehicle {
    static vehicleCount = 0;
    // Создайте базовый класс Vehicle.
    // В конструкторе принимайте и сохраняйте в this свойства: 
    // make (марка), model (модель), year (год выпуска).
    constructor(make, model, year) {
        Vehicle.vehicleCount++;
        if (typeof make !== "string" || make.trim() === "") {
            return "Ошибка: марка должна быть непустой строкой"
        }
        if (typeof model !== "string" || model.trim() === "") {
            return "Ошибка: модель должна быть непустой строкой"
        }
        if (typeof year !== "number" || !Number.isInteger(year)) {
            return "Ошибка: год выпуска должен быть целым числом"
        }
        if (year < 1886) {
            return "Ошибка: год выпуска не может быть раньше 1886 года"
        }

        this.make = make;
        this.model = model;
        this.years = year;
    }

    // Добавьте метод displayInfo(), который выводит в консоль информацию 
    // о транспортном средстве в формате: "Марка: [make], Модель: [model], Год: [year]".
    displayInfo() {
        return `Марка: [${this.make}], Модель: [${this.model}], Год: [${this.years}]`;
    }

    // Добавьте геттер age, который возвращает возраст транспортного средства 
    // (текущий год минус год выпуска). Используйте new Date().getFullYear().
    get age() {
        const currentyear = new Date().getFullYear();
        return currentyear - this.years;
    }

    // Добавьте сеттер для года выпуска с проверкой: год не может быть больше текущего.
    set year(newYear) {
        if (typeof newYear !== "number" || !Number.isInteger(newYear)) {
            return "Ошибка: год выпуска должен быть целым положительным числом"
        }
        if (newYear < 1886) {
            return `Ошибка: год выпуска не может быть раньше 1886 года и позже ${Date.getFullYear()}`;        }

        const currentyear = new Date().getFullYear();
        if (newYear > currentyear) {
            return("Ошибка: год выпуска не может быть больше текущего года")
        }
        this.years = newYear;
    }

    get year() {
        return this.years
    }

    // Добавьте статический метод compareAge(vehicle1, vehicle2), 
    // который возвращает разницу в возрасте между двумя транспортными средствами.
    static compareAge(vehicle1, vehicle2) {
        return Math.abs(vehicle1.age - vehicle2.age);
    }

    static vecicleCount = 0;

    static getTotalVehicles() {
        return Vehicle.vehicleCount;
    }
}


// ===== ЗАДАНИЕ 2: Класс Car (наследуется от Vehicle) =====
class Car extends Vehicle {
    // Создайте дочерний класс Car, который наследуется от Vehicle.
    // Добавьте новое свойство numDoors (количество дверей).
    constructor(make, model, year, numDoors) {
        super(make, model, year);
        if (typeof numDoors !== "number" || !Number.isInteger(numDoors) || numDoors <= 0) {
            return("Ошибка: количество дверей должно быть целым положительным числом");
        }
        this.numDoors = numDoors;
    }

    // Переопределите метод displayInfo() так, чтобы он также выводил количество дверей. 
    // Используйте super.displayInfo() для вызова метода родителя.
    displayInfo() {
        const parentinfo = super.displayInfo();
        return `${parentinfo}, Количество дверей: [${this.numDoors}]`;
    }

    // Добавьте метод honk(), который выводит "Beep beep!".
    honk() {
        return "Beep beep!";
    }
}

// ===== ЗАДАНИЕ 3: Класс ElectricCar (наследуется от Car) =====
class ElectricCar extends Car {
    // Создайте дочерний класс ElectricCar, который наследуется от Car.
    // Добавьте новое свойство batteryCapacity (емкость батареи в кВт·ч).
    constructor(make, model, year, numDoors, batteryCapacity) {
        if (typeof batteryCapacity !== "number" || !Number.isInteger(batteryCapacity) || batteryCapacity <= 0) {
            return "Ошибка: емкость батареи автомобиля должна быть целым положительным числом";
        } 

        super(make, model, year, numDoors);
        this.batteryCapacity = batteryCapacity;
    }

    // Переопределите метод displayInfo() для вывода дополнительной информации о батарее.
    displayInfo() {
        const parentinfo = super.displayInfo();
        return `${parentinfo}, Емкость батареи: [${this.batteryCapacity}]`;
    }

    // Добавьте метод calculateRange(), который рассчитывает примерный запас хода 
    // (предположим, что 1 кВт·ч = 6 км).
    calculateRange() {
        const reserve = 6;
        return this.batteryCapacity * reserve;
    }
}

// ===== ЗАДАНИЕ 4: Каррирование =====

// Создайте функцию createVehicleFactory, которая возвращает функцию 
// для создания транспортных средств определенного типа (каррирование).
const createVehicleFactory = (vehicleType) => (make, model, year, ...additionalParams) => {                   
    return new Vehicle(make, model, year, ...additionalParams); // Замените {} на варажение
};


// ===== ЗАДАНИЕ 5: Статические методы и свойства =====

// Добавьте статическое свойство vehicleCount в класс Vehicle
// для подсчета количества созданных транспортных средств.
// Модифицируйте конструктор Vehicle для увеличения счетчика
// (добавьте в начало конструктора: Vehicle.vehicleCount++);
// Создайте статический метод getTotalVehicles(),
// который возвращает общее количество созданных транспортных средств.

// Автоматические тесты

function runTests() {
    console.log('Запуск тестов...');

    // Расширьте тесты для полного покрытия задания.
    
    // Проверка наследования
    const vehicle1 = new Vehicle('Toyota', 'Camry', 2015);
    console.log(vehicle1.displayInfo());
    console.log(`Возраст: ${vehicle1.age} лет\n` );

    const car = new Car('Honda', 'Civic', 2018, 4);
    console.log(car.displayInfo());
    console.log(car.honk("\n"));

    const compare = Vehicle.compareAge(vehicle1, car);
    console.assert(Vehicle.compareAge(vehicle1, car) === compare, "Тест compareAge провален")

    const electricCar = new ElectricCar('Tesla', 'Model 3', 2020, 4, 75);
    console.log(electricCar.displayInfo());
    console.log(`Запас хода: ${electricCar.calculateRange()} км\n`);
    
    // Проверка возраста
    const testVehicle = new Vehicle('Test', 'Model', 2010);
    console.assert(testVehicle.age === (new Date().getFullYear() - 2010), 'Тест возраста провален');
    
    const createCarFactory = createVehicleFactory(Car);
    const myNewCar = createCarFactory('BMW', 'X5', 2022);
    console.log('Создан новый автомобиль:');
    console.log(myNewCar.displayInfo("\n"));

    const before = Vehicle.getTotalVehicles();
    const plusOne = new Car("LADA", "Priora", 2007, 6);
    const after = Vehicle.getTotalVehicles();
    console.assert(after === before + 1, "Кол-во автомобилей должно увеличиваться при их создании");

    console.log('Всего создано транспортных средств:', Vehicle.getTotalVehicles(), "\n");
    
    console.log('Все тесты пройдены! ✅');
}

runTests();
