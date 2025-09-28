'use strict';

// ===== ЗАДАНИЕ 1: Базовый класс Vehicle =====
class Vehicle {
    // Создайте базовый класс Vehicle.
    // В конструкторе принимайте и сохраняйте в this свойства:
    // make (марка), model (модель), year (год выпуска).
    constructor(make, model, year) {
        if (typeof make !== 'string') throw new Error('Марка должна быть строкой');
        if (make.trim() === '') throw new Error('Марка не может быть пустой строкой');

        if (typeof model !== 'string') throw new Error('Модель должна быть строкой');
        if (model.trim() === '') throw new Error('Модель не может быть пустой строкой');

        this.make = make.trim();
        this.model = model.trim();
        this.year = year;

        Vehicle.vehicleCount++;
    }
    // Добавьте метод displayInfo(), который выводит в консоль информацию
    // о транспортном средстве в формате: "Марка: [make], Модель: [model], Год: [year]".
    displayInfo() {
        console.log(`Марка: ${this.make}, Модель: ${this.model}, Год: ${this.year}`);
    }
    // Добавьте геттер age, который возвращает возраст транспортного средства
    // (текущий год минус год выпуска). Используйте new Date().getFullYear().
    get age() {
        return new Date().getFullYear() - this.year;
    }
    // Добавьте сеттер для года выпуска с проверкой: год не может быть больше текущего.
    set year(newYear) {
        if (typeof newYear !== 'number' || Number.isNaN(newYear) || !Number.isInteger(newYear)) {
            throw new Error('Год должен быть целым числом');
        }
        if (newYear > new Date().getFullYear()) {
            throw new Error(`Год не может быть больше текущего`);
        }

        this._year = newYear;
    }

    get year() {
        return this._year;
    }
    // Добавьте статический метод compareAge(vehicle1, vehicle2),
    // который возвращает разницу в возрасте между двумя транспортными средствами.
    static compareAge(vehicle1, vehicle2) {
        if (!(vehicle1 instanceof Vehicle) || !(vehicle2 instanceof Vehicle)) {
            throw new Error('Аргументы compareAge должны быть экземплярами Vehicle');
        }
        return Math.abs(vehicle1.age - vehicle2.age);
    }
}

// ===== ЗАДАНИЕ 2: Класс Car (наследуется от Vehicle) =====
class Car extends Vehicle {
    // Создайте дочерний класс Car, который наследуется от Vehicle.
    // Добавьте новое свойство numDoors (количество дверей).
    constructor(make, model, year, numDoors) {
        if (typeof numDoors !== 'number' || Number.isNaN(numDoors) || !Number.isInteger(numDoors)) throw new Error('Количество дверей должно быть целым числом');
        if (numDoors < 1) throw new Error('Количество дверей не должно быть меньше 1');

        super(make, model, year);
        this.numDoors = numDoors;
    }
    // Переопределите метод displayInfo() так, чтобы он также выводил количество дверей.
    // Используйте super.displayInfo() для вызова метода родителя.
    displayInfo() {
        super.displayInfo();
        console.log(`Количество дверей: ${this.numDoors}`);
    }
    // Добавьте метод honk(), который выводит "Beep beep!".
    honk() {
        console.log('Beep beep!');
    }
}

// ===== ЗАДАНИЕ 3: Класс ElectricCar (наследуется от Car) =====
class ElectricCar extends Car {
    // Создайте дочерний класс ElectricCar, который наследуется от Car.
    // Добавьте новое свойство batteryCapacity (емкость батареи в кВт·ч).
    constructor(make, model, year, numDoors, batteryCapacity) {
        if (typeof batteryCapacity !== 'number' || Number.isNaN(batteryCapacity)) throw new Error('Емкость батареи должна быть числом');
        if (batteryCapacity <= 0) throw new Error('Емкость батареи должна быть положительным числом');

        super(make, model, year, numDoors);

        this.batteryCapacity = batteryCapacity;
    }
    // Переопределите метод displayInfo() для вывода дополнительной информации о батарее.
    displayInfo() {
        super.displayInfo();
        console.log(`Емкость батареи: ${this.batteryCapacity} кВт·ч`);
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
const createVehicleFactory =
    (VehicleType) =>
    (...args) =>
        new VehicleType(...args);

// ===== ЗАДАНИЕ 5: Статические методы и свойства =====

// Добавьте статическое свойство vehicleCount в класс Vehicle
// для подсчета количества созданных транспортных средств.
// Модифицируйте конструктор Vehicle для увеличения счетчика
// (добавьте в начало конструктора: Vehicle.vehicleCount++);
// Создайте статический метод getTotalVehicles(),
// который возвращает общее количество созданных транспортных средств.
Vehicle.vehicleCount = 0;
Vehicle.getTotalVehicles = () => Vehicle.vehicleCount;

// --- ТЕСТЫ ---
function runTests() {
    console.log('=== ЗАПУСК ТЕСТОВ ===');

    const created = [];
    // Набор удачных тестов
    const goodCases = [
        () => new Vehicle('Toyota', 'Camry', 2015),
        () => new Car('Honda', 'Civic', 2018, 4),
        () => new ElectricCar('Tesla', 'Model 3', 2020, 4, 75),
        () => new Vehicle('Test', 'Model', 2010),
        () => new Car('Lada', 'Granta', 2019, 4),
        () => new ElectricCar('Nissan', 'Leaf', 2019, 4, 40),
        () => createVehicleFactory(Car)('BMW', 'X5', 2022, 5),
    ];

    goodCases.forEach((constructor, idx) => {
        try {
            const obj = constructor();
            created.push(obj);
        } catch (e) {
            console.error(`ОШИБКА — провал при создании успешного кейса #${idx + 1}:`, e.message);
        }
    });

    // Проверка на instanceof
    console.assert(created[0] instanceof Vehicle, 'ОШИБКА: Vehicle должен быть экземпляром Vehicle');
    console.assert(created[1] instanceof Vehicle, 'ОШИБКА: Car должен быть экземпляром Vehicle');
    console.assert(created[1] instanceof Car, 'ОШИБКА: Car должен быть экземпляром Vehicle');
    console.assert(created[2] instanceof ElectricCar, 'ОШИБКА: ElectricCar должен быть экземпляром ElectricCar');
    console.assert(created[2] instanceof Car, 'ОШИБКА: ElectricCar должен быть экземпляром Car');
    console.assert(created[2] instanceof Vehicle, 'ОШИБКА: ElectricCar должен быть экземпляром Vehicle');

    // Проверка setter year
    created[0].year = 2021;
    console.assert(created[0].year === 2021, 'setter year наверно установил год 2021');
    let errorThrown = false;
    try {
        created[0].year = 5000;
    } catch (e) {
        errorThrown = true;
    }
    console.assert(errorThrown, 'ОШИБКА: ожидалось исключение при установке будущего года');
    errorThrown = false;
    try {
        v.year = 2015.5;
    } catch (e) {
        errorThrown = true;
    }
    console.assert(errorThrown, 'ОШИБКА: ожидалось исключение при установке нецелого года');
    errorThrown = false;
    try {
        v.year = '2020';
    } catch (e) {
        errorThrown = true;
    }
    console.assert(errorThrown, 'ОШИБКА: ожидалось исключение при установке года не числом');

    // Проверка calculateRange
    try {
        const electricCar = new ElectricCar('Tesla', 'E', 2021, 4, 50);
        console.assert(electricCar.calculateRange() === 300, 'calculateRange наверно рассчитывает для 50 кВт·ч');
        created.push(electricCar);
    } catch (e) {
        console.error('Ошибка при тесте calculateRange:', e.message);
    }

    // Проверка compareAge
    if (created.length >= 2) {
        const a = created[0];
        const b = created[1];
        const diff = Vehicle.compareAge(a, b);
        console.assert(diff === Math.abs(a.year - b.year), 'compareAge наверно рассчитывает разницу в возрасте');
    }

    // Набор негативных тестов
    const negativeTests = [
        // make/model неверные типы
        { name: 'make as array', ctor: () => new Vehicle(['Toyota'], 'Camry', 2015) },
        { name: 'make null', ctor: () => new Vehicle(null, 'Camry', 2015) },
        { name: 'make boolean', ctor: () => new Vehicle(true, 'Camry', 2015) },
        { name: 'make function', ctor: () => new Vehicle(() => {}, 'M', 2015) },
        { name: 'make empty string', ctor: () => new Vehicle('', 'Camry', 2015) },
        { name: 'model whitespace', ctor: () => new Vehicle('Toyota', '   ', 2015) },
        { name: 'model symbol', ctor: () => new Vehicle('Toyota', Symbol('m'), 2015) },
        { name: 'model undefined', ctor: () => new Vehicle('Toyota', undefined, 2015) },
        { name: 'model as object', ctor: () => new Vehicle('Toyota', { m: 'Camry' }, 2015) },

        // year
        { name: 'year as string', ctor: () => new Vehicle('Toyota', 'Camry', '2015') },
        { name: 'year NaN', ctor: () => new Vehicle('Toyota', 'Camry', NaN) },
        { name: 'year Infinity', ctor: () => new Vehicle('Toyota', 'Camry', Infinity) },
        { name: 'year as float', ctor: () => new Vehicle('Toyota', 'Camry', 2015.5) },
        { name: 'year in future', ctor: () => new Vehicle('Toyota', 'Camry', 3000) },

        // numDoors
        { name: 'numDoors as string', ctor: () => new Car('Honda', 'Civic', 2018, '4') },
        { name: 'numDoors as array', ctor: () => new Car('Honda', 'Civic', 2018, [4]) },
        { name: 'numDoors boolean', ctor: () => new Car('Honda', 'Civic', 2018, true) },
        { name: 'numDoors zero', ctor: () => new Car('Honda', 'Civic', 2018, 0) },
        { name: 'numDoors negative', ctor: () => new Car('Honda', 'Civic', 2018, -2) },
        { name: 'numDoors float', ctor: () => new Car('Honda', 'Civic', 2018, 2.5) },
        { name: 'numDoors NaN', ctor: () => new Car('Honda', 'Civic', 2018, NaN) },

        // batteryCapacity
        { name: 'battery as string', ctor: () => new ElectricCar('Tesla', 'S', 2020, 4, '75') },
        { name: 'battery as array', ctor: () => new ElectricCar('Tesla', 'S', 2020, 4, [75]) },
        { name: 'battery zero', ctor: () => new ElectricCar('Tesla', 'S', 2020, 4, 0) },
        { name: 'battery negative', ctor: () => new ElectricCar('Tesla', 'S', 2020, 4, -10) },
        { name: 'battery NaN', ctor: () => new ElectricCar('Tesla', 'S', 2020, 4, NaN) },
        { name: 'battery boolean', ctor: () => new ElectricCar('Tesla', 'S', 2020, 4, false) },

        // compareAge invalid args
        { name: 'compareAge non-vehicles', ctor: () => Vehicle.compareAge({}, {}) },
        { name: 'compareAge non-vehicles', ctor: () => Vehicle.compareAge('sad', 'sss') },
        { name: 'compareAge non-vehicles', ctor: () => Vehicle.compareAge(3, 3) },
        { name: 'compareAge non-vehicles', ctor: () => Vehicle.compareAge(NaN, NaN) },
        { name: 'compareAge non-vehicles', ctor: () => Vehicle.compareAge('sad', created[0]) },
        { name: 'compareAge non-vehicles', ctor: () => Vehicle.compareAge(3, created[0]) },
        { name: 'compareAge non-vehicles', ctor: () => Vehicle.compareAge(NaN, created[0]) },
    ];

    negativeTests.forEach((t) => {
        let thrown = false;
        try {
            t.ctor();
        } catch (e) {
            thrown = true;
        }
        console.assert(thrown, `ОШИБКА: Ожидалось, что тест "${t.name}" выбросит исключение`);
    });

    // Проверка количество созданных объектов
    console.assert(Vehicle.getTotalVehicles() === created.length, 'ОШИБКА: Неверное количество созданных объектов (getTotalVehicles)');
    console.log('\nВсе тесты пройдены! ✅');
}

runTests();
