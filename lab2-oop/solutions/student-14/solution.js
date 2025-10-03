'use strict'

// ===== ЗАДАНИЕ 1: Базовый класс Vehicle =====
class Vehicle {
    // Создайте базовый класс Vehicle.
    // В конструкторе принимайте и сохраняйте в this свойства: 
    // make (марка), model (модель), year (год выпуска).
    static vehicleCount = 0;                                                // статистическое свойство - принадлежит самому классу, а не его объектам (экземплярам)
    constructor(make, model, year) {                                        // к нему необходимо обращаться через имя класса
        Vehicle.vehicleCount++;
        if (!make || !model || year === undefined){
            throw new Error("Ошибка: make, model, year обязательные параметры");
        }
        if (typeof make !== "string" || typeof model !== "string") {
            throw new Error("Ошибка: марка и модель должны быть непустыми строками");
        }
        if (typeof year !== "number" || !Number.isInteger(year)) {
            throw new Error("Ошибка: год выпуска должен быть целым числом");
        }
        if (year < 1886) {
            throw new Error("Ошибка: год выпуска не может быть раньше 1886 года");
        }

        this.make = make;
        this.model = model;
        this.years = year;
    }

    // Добавьте метод displayInfo(), который выводит в консоль информацию 
    // о транспортном средстве в формате: "Марка: [make], Модель: [model], Год: [year]".
    displayInfo() {
        return `Марка: ${this.make}, Модель: ${this.model}, Год: ${this.years}`;
    }

    // Добавьте геттер age, который возвращает возраст транспортного средства 
    // (текущий год минус год выпуска). Используйте new Date().getFullYear().
    get age() {                                                                                // метод get возврашает значение свойства
        const currentyear = new Date().getFullYear();
        return currentyear - this.years;
    }

    // Добавьте сеттер для года выпуска с проверкой: год не может быть больше текущего.
    set year(newYear) {                                                                        // метод set присваивает значение свойству
        if (typeof newYear !== "number" || !Number.isInteger(newYear)) {
            throw new Error("Ошибка: год выпуска должен быть целым положительным числом")
        }
        if (newYear < 1886) {
            throw new Error(`Ошибка: год выпуска не может быть раньше 1886 года и позже ${new Date().getFullYear()}`);        }

        const currentyear = new Date().getFullYear();
        if (newYear > currentyear) {
            throw new Error("Ошибка: год выпуска не может быть больше текущего года")
        }
        this.years = newYear;
    }

    get year() {                                                                               // после проверки с set возвращает значение свойства
        return this.years

    }

    // Добавьте статический метод compareAge(vehicle1, vehicle2), 
    // который возвращает разницу в возрасте между двумя транспортными средствами.
    static compareAge(vehicle1, vehicle2) {
        return Math.abs(vehicle1.age - vehicle2.age);                                          // math.abs - втроенная функция, возвращающая модуль числа
    }

    static getTotalVehicles() {
        return Vehicle.vehicleCount;
    }
}


// ===== ЗАДАНИЕ 2: Класс Car (наследуется от Vehicle) =====
class Car extends Vehicle {                                                               // extends - наследование от родителя (дочерний класс)
    // Создайте дочерний класс Car, который наследуется от Vehicle.
    // Добавьте новое свойство numDoors (количество дверей).
    constructor(make, model, year, numDoors = 4) {
        if (typeof numDoors !== "number" || !Number.isInteger(numDoors) || numDoors <= 0 || numDoors >= 7) {
            throw new Error("Ошибка: количество дверей должно быть целым положительным числом от 1 до 7");
        }
        super(make, model, year);
        this.numDoors = numDoors;
    }

    // Переопределите метод displayInfo() так, чтобы он также выводил количество дверей. 
    // Используйте super.displayInfo() для вызова метода родителя.
    displayInfo() {
        const parentinfo = super.displayInfo();
        return `${parentinfo}, Количество дверей: ${this.numDoors}`;
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
    constructor(make, model, year, numDoors = 4, batteryCapacity) {
        if (batteryCapacity === undefined) {
            throw new Error("Ошибка: емкость батареи должна быть указана");
        } 
        if (typeof batteryCapacity !== "number" || !Number.isInteger(batteryCapacity) || batteryCapacity <= 0) {
            throw new Error("Ошибка: емкость батареи автомобиля должна быть целым положительным числом");
        } 
        super(make, model, year, numDoors);
        this.batteryCapacity = batteryCapacity;
    }

    // Переопределите метод displayInfo() для вывода дополнительной информации о батарее.
    displayInfo() {
        const parentinfo = super.displayInfo();
        return `${parentinfo}, Емкость батареи: ${this.batteryCapacity}`;
    }

    // Добавьте метод calculateRange(), который рассчитывает примерный запас хода 
    // (предположим, что 1 кВт·ч = 6 км).
    calculateRange() {
        const reserve = 6;
        return this.batteryCapacity * reserve;
    }
}

// ===== ЗАДАНИЕ 4: Каррирование =====

// Создайте функцию createVehicleFactory, которая возвращает функцию                                     // каррирование - преобразование функции с множеством аргументов 
// для создания транспортных средств определенного типа (каррирование).                                  // в набор (вложенных) функций с одним аргументом
const createVehicleFactory = (vehicleType) => (...args) => {                   
    try{
        return new vehicleType(...args); // Замените {} на варажение
    }
    catch(error){
        throw new Error("Ошибка создания ${vehicleType.name}: ${error.message}");
    }
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
    
    // Тест Vehicle
    const vehicleToyota = new Vehicle('Toyota', 'Camry', 2015);
    console.log(vehicleToyota.displayInfo());
    try{
        const vehicleError = new Vehicle(Toyota, 'Camry', 2015)
    }
    catch{
        console.error("Ошибка: марка и модель должны быть непустыми строками");
    }
    console.assert(vehicleToyota.make === 'Toyota', "Тест make провален");
    console.assert(vehicleToyota.model === 'Camry', "Тест model провален");
    console.assert(vehicleToyota.year === 2015, "Тест year провален");

    // Тест возраста
    console.assert(vehicleToyota.age === new Date().getFullYear() - 2015, "Тест возраста провален");
    
    // Тест сеттера
    try{
    const nextyear = new Date().getFullYear() + 1;
    vehicleToyota.year = nextyear;
    }
    catch{
        console.error("Ошибка: год выпуска не может быть больше текущего года");
    }
    
    // Тест Car
    const carHonda = new Car('Honda', 'Civic', 2018, 4);
    console.log(carHonda.displayInfo());
    try{
        const carError = new Car('Honda', 'Civic', 2018, 8);
    }
    catch{
        console.error("Ошибка: количество дверей должно быть целым положительным числом от 1 до 7");
    }
    console.assert(carHonda instanceof Vehicle, "Тест наследования провален");
    console.assert(carHonda.numDoors === 4, "Тест количества дверей провален");
    console.assert(carHonda.honk() === "Beep beep!", "Тест honk провален");

    // Тест compareAge
    console.assert(Vehicle.compareAge(vehicleToyota, carHonda) === 3, "Тест compareAge провален");

    // Тест ElectricCar
    const electricTesla = new ElectricCar('Tesla', 'Model 3', 2020, 4, 75);
    console.log(electricTesla.displayInfo());
    try{
        const electricError = new ElectricCar('Tesla', 'Model 3', 2020, 4, undefined);
    }
    catch{
        console.error("Ошибка: емкость батареи должна быть указана");
    }
    console.assert(electricTesla.batteryCapacity === 75, "Тест емкости батареи провален");
    console.assert(electricTesla.calculateRange() == 450, "Тест calculateRange провален");

    // Тест createVehicleFactory 
    const createCarFactory = createVehicleFactory(Car);
    const myNewCar = createCarFactory('BMW', 'X5', 2022);
    console.log(myNewCar.displayInfo());
    console.assert(myNewCar instanceof Car, "Тест наследования в createVehicleFactory провален");

    // Тест увеличения счетчика количества автомобилей
    const before = Vehicle.getTotalVehicles();
    const plusOneVehicle = new Vehicle("mark", "model", 2005);
    console.log(plusOneVehicle.displayInfo());
    const after = Vehicle.getTotalVehicles();
    console.assert(before == after - 1, "Тест увеличения счетчика количества автомобилей провален");

    // Тест getTotalVehicles
    console.assert(Vehicle.getTotalVehicles() === Vehicle.vehicleCount, "Тест количества автомобилей провален");

    console.log('Все тесты пройдены! ✅');
}
runTests();