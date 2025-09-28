'use strict'

// ===== ЗАДАНИЕ 1: Базовый класс Vehicle =====
class Vehicle {
    static vehicleCount = 0;
    // Создайте базовый класс Vehicle.
    // В конструкторе принимайте и сохраняйте в this свойства: 
    // make (марка), model (модель), year (год выпуска).
    constructor(make, model, year) {
        this._validateMake(make);
        this._validateModel(model);
        this._validateYear(year);

        Vehicle.vehicleCount++;
        this.make = make;
        this.model = model;
        this._year = year;
    }

    // Валидация марки
    _validateMake(make) {
        if (typeof make !== 'string') {
            throw new Error('Марка (make) должна быть строкой')
        }
        if (make.trim().length === 0) {
            throw new Error('Марка (make) не может быть пустой строкой')
        }
    }

    // Валидация модели
    _validateModel(model) {
        if (typeof model !== 'string') {
            throw new Error('Модель (model) должна быть строкой')
        }
        if (model.trim().length === 0) {
            throw new Error('Модель (model) не может быть пустой строкой')
        }
    }

    // Валидация года
    _validateYear(year) {
        if (typeof year !== 'number' || isNaN(year)) {
            throw new Error('Год (year) должен быть числом')
        }
        if (!Number.isInteger(year)) {
            throw new Error('Год (year) должен быть целым числом')
        }
        const currentYear = new Date().getFullYear();
        if (year > currentYear) {
            throw new Error(`Год (year) не может быть больше текущего (${currentYear})`)
        }
        if (year < 1886) {
            throw new Error('Год (year) не может быть меньше 1886')
        }
    }

    // Добавьте метод displayInfo(), который выводит в консоль информацию 
    // о транспортном средстве в формате: "Марка: [make], Модель: [model], Год: [year]".
    displayInfo() {
        console.log(`Марка: ${this.make}, Модель: ${this.model}, Год: ${this.year}`);
    }

    // Добавьте геттер age, который возвращает возраст транспортного средства 
    // (текущий год минус год выпуска). Используйте new Date().getFullYear().
    get age() {
        return new Date().getFullYear() - this._year;
    }

    // Добавьте сеттер для года выпуска с проверкой: год не может быть больше текущего.
    set year(newYear) {
        this._validateYear(newYear);
        this._year = newYear;
    }

    get year() {
        return this._year;
    }

    // Добавьте статический метод compareAge(vehicle1, vehicle2), 
    // который возвращает разницу в возрасте между двумя транспортными средствами.
    static compareAge(vehicle1, vehicle2) {
        return Math.abs(vehicle1.age - vehicle2.age);
    }

    static getTotalVehicles() {
        return Vehicle.vehicleCount;
    }
}

// ===== ЗАДАНИЕ 2: Класс Car (наследуется от Vehicle) =====
class Car extends Vehicle {
    // Создайте дочерний класс Car, который наследуется от Vehicle.
    // Добавьте новое свойство numDoors (количество дверей).
    constructor(make, model, year, numDoors) {
        Car._validateNumDoors(numDoors);

        super(make, model, year);
        this.numDoors = numDoors;
    }

    static _validateNumDoors(numDoors) {
        if (typeof numDoors !== 'number' || isNaN(numDoors)) {
            throw new Error('Количество дверей (numDoors) должно быть числом')
        }
        if (!Number.isInteger(numDoors)) {
            throw new Error('Количество дверей (numDoors) должно быть целым числом')
        }
        if (numDoors < 1) {
            throw new Error('Количество дверей (numDoors) должно быть от 1')
        }
    }

    // Переопределите метод displayInfo() так, чтобы он также выводил количество дверей. 
    // Используйте super.displayInfo() для вызова метода родителя.
    displayInfo() {
        super.displayInfo();
        console.log(`Количество дверей: ${this.numDoors}`)
    }

    // Добавьте метод honk(), который выводит "Beep beep!".
    honk() {
        console.log("Beep beep!")
    }
}

// ===== ЗАДАНИЕ 3: Класс ElectricCar (наследуется от Car) =====
class ElectricCar extends Car {
    // Создайте дочерний класс ElectricCar, который наследуется от Car.
    // Добавьте новое свойство batteryCapacity (емкость батареи в кВт·ч).
    constructor(make, model, year, numDoors, batteryCapacity) {
        ElectricCar._validateBatteryCapacity(batteryCapacity);
        super(make, model, year, numDoors);
        this.batteryCapacity = batteryCapacity;
    }

    static _validateBatteryCapacity(batteryCapacity) {
        if (typeof batteryCapacity !== 'number' || isNaN(batteryCapacity)) {
            throw new Error('Емкость батареи (batteryCapacity) должна быть числом')
        }
        if (batteryCapacity <= 0) {
            throw new Error('Емкость батареи (batteryCapacity) должна быть положительным числом')
        }
        return true;
    }

    // Переопределите метод displayInfo() для вывода дополнительной информации о батарее.
    displayInfo() {
        super.displayInfo();
        console.log(`Ёмкость батареи: ${this.batteryCapacity} кВт·ч`);
    }

    // Добавьте метод calculateRange(), который рассчитывает примерный запас хода 
    // (предположим, что 1 кВт·ч = 6 км).
    calculateRange() {
        return this.batteryCapacity * 6;
    }
}


// ===== ЗАДАНИЕ 4: Каррирование =====

// Создайте функцию createVehicleFactory, которая возвращает функцию 
// для создания транспортных средств определенного типа (каррирование).
const createVehicleFactory = (vehicleType) => (make, model, year, ...args) => {
    return new vehicleType(make, model, year, ...args); // Замените {} на варажение
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

    Vehicle.vehicleCount = 0;

    // Расширьте тесты для полного покрытия задания.

    // Проверка наследования
    const vehicle = new Vehicle('Toyota', 'Camry', 2015); // 1 транспорт
    vehicle.displayInfo();
    console.log(`Возраст: ${vehicle.age} лет`);

    const car = new Car('Honda', 'Civic', 2018, 4); // 2 транспорт
    car.displayInfo();
    car.honk();

    const electricCar = new ElectricCar('Tesla', 'Model 3', 2020, 4, 75); // 3 транспорт
    electricCar.displayInfo();
    console.log(`Запас хода: ${electricCar.calculateRange()} км`);
    console.assert(electricCar.calculateRange() === 450, 'Тест вычисления запаса хода провален')

    // Проверка возраста
    const testVehicle = new Vehicle('Test', 'Model', 2010); // 4 транспорт
    console.assert(testVehicle.age === (new Date().getFullYear() - 2010), 'Тест возраста провален');

    // Проверка сеттера года
    const currentYear = new Date().getFullYear();
    testVehicle.year = currentYear - 1;
    console.assert(testVehicle.year === currentYear - 1, 'Тест сеттера года провален');
    testVehicle.displayInfo()

    // Проверка установки граничных годов у машины
    testVehicle.year = 1886;
    testVehicle.displayInfo()
    testVehicle.year = currentYear;
    testVehicle.displayInfo()

    // Проверка сеттера года у подкласса
    electricCar.year = currentYear - 1;
    console.assert(electricCar.year === currentYear - 1, 'Тест сеттера года провален')

    // Попытка установить будущий год
    try {
        testVehicle.year = currentYear + 1;
        console.assert(testVehicle.year === currentYear - 1, 'Тест валидации года провален');
    } catch (e) {
        console.log('Ошибка перехвачена:', e.message);
    }
    testVehicle.displayInfo();

    // Проверка сравнения возраста
    const vehicle1 = new Vehicle('1', '2', 2000) // 5 транспорт
    const vehicle2 = new Car('3', '4', 2010, 4) // 6 транспорт
    const ageDiff = Vehicle.compareAge(vehicle1, vehicle2);
    console.assert(ageDiff === 10, 'Тест сравнения возраста провален')

    // Проверка каррирования
    const createCarFactory = createVehicleFactory(Car);
    const myNewCar = createCarFactory('BMW', 'X5', 2022, 4); // 7 транспорт
    console.log('Создан новый автомобиль:');
    myNewCar.displayInfo();
    console.assert(myNewCar instanceof Car, 'Тест каррирования провален')
    console.assert(myNewCar.make === 'BMW', 'Тест каррирования провален')

    const createElectricFactory = createVehicleFactory(ElectricCar);
    const myNewElectric = createElectricFactory('Evolut', 'Super', 2024, 4, 300) // 8 транспорт
    console.log('Создан новый электромобиль:');
    myNewElectric.displayInfo()
    console.assert(myNewElectric.calculateRange() === 1800, 'Тест каррирования провален')
    console.assert(myNewElectric instanceof ElectricCar, 'Тест каррирования провален')

    // Проверки на неправильный ввод параметров в классе Vehicle. Каждая ошибка выводится в консоль
    const wrongTests = [
        () => new Vehicle(1, 'Aqua', 2020),
        () => new Vehicle('Make', undefined, 2021),
        () => new Vehicle('make', '', 2020),
        () => new Vehicle('', 'eee', 2020),
        () => new Vehicle('Make', 'Aqua', "2030"),
        () => new Vehicle('Make', 'Aqua', 2030),
        () => new Vehicle('Make', 'Aqua', 1200),
        () => new Vehicle('Make', 'Aqua', 2030.20),
        () => new Vehicle()
    ];

    wrongTests.forEach((test, index) => {
        try {
            test();
            console.assert(false, `Тест wrongVehicle${index + 1} провален - ошибка не была выброшена`);
        } catch (e) {
            console.log(`Ошибка wrongVehicle${index + 1} перехвачена:`, e.message);
        }
    });

    // Проверки на неправильный ввод параметров в классе Car. Каждая ошибка выводится в консоль
    const wrongCarTests = [
        () => new Car('Make', 'Model', 2019, 0),
        () => new Car('Make', 'Model', 2019),
        () => new Car('Make', 'Model', 2019, '3'),
        () => new Car('Make', 'Model', 2019, 2.4),
        () => new Car(46, 'Model', 2019, 2)  // проверка на то, что работает обработка ошибок из класса Vehicle
    ];

    wrongCarTests.forEach((test, index) => {
        try {
            test();
            console.assert(false, `Тест wrongCar${index + 1} провален - ошибка не была выброшена`);
        } catch (e) {
            console.log(`Ошибка wrongCar${index + 1} перехвачена:`, e.message);
        }
    });

    // Проверки на неправильный ввод параметров в классе ElectricCar. Каждая ошибка выводится в консоль
    const wrongElectricTests = [
        () => new ElectricCar('Make', 23, 2012, 2, 200), // проверка на то, что работает обработка ошибок из класса Vehicle
        () => new ElectricCar('Make', 'Model', 2012, -1, 200), // проверка на то, что работает обработка ошибок из класса Car
        () => new ElectricCar('Make', 'Model', 2012, 4, 0),
        () => new ElectricCar('Make', 'Model', 2012, 4, "22"),
        () => new ElectricCar('Make', 'Model', 2012, 4)
    ];

    wrongElectricTests.forEach((test, index) => {
        try {
            test();
            console.assert(false, `Тест wrongElectric${index + 1} провален - ошибка не была выброшена`);
        } catch (e) {
            console.log(`Ошибка wrongElectric${index + 1} перехвачена:`, e.message);
        }
    });

    // Проверка счётчика транспортных средств
    console.log('Всего создано транспортных средств:', Vehicle.getTotalVehicles());
    console.assert(Vehicle.getTotalVehicles() === 8, "Тест счетчика провален")

    console.log('Все тесты пройдены! ✅');
}

runTests();
