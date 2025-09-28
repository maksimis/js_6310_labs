'use strict'

// мои вспомогательные функции для заданий
// проверка на то, что передано положительное число
function isPositiveNumber(param) {
    return typeof param === "number" && param > 0;
}

// проверка строка ли передана и не пустая ли она
function isNonEmptyString(param) {
    return typeof param === "string" && param.trim() !== "";
}


// ===== ЗАДАНИЕ 1: Базовый класс Vehicle =====
class Vehicle {
    // пятое задание
    static vehicleCount = 0;

    static getTotalVehicles() {
        return `Всего создано транспортных средств: ${Vehicle.vehicleCount}`;
    }

    // Создайте базовый класс Vehicle.
    // В конструкторе принимайте и сохраняйте в this свойства: 
    // make (марка), model (модель), year (год выпуска).
    constructor(make, model, year) {
        if (!isNonEmptyString(make) || !isNonEmptyString(model)) {
            throw new Error("Невалидные параметры для класса Vehicle: марка и модель - не пустые строки");
        } else if (!isPositiveNumber(year) || year > new Date().getFullYear() || !Number.isInteger(year)) {
            throw new Error("Невалидные параметры для класса Vehicle: год выпуска - положительное целое число не из будущего");
        }

        this.make = make;
        this.model = model;
        this.year = year;
        Vehicle.vehicleCount++;
    }

    // Добавьте метод displayInfo(), который выводит в консоль информацию 
    // о транспортном средстве в формате: "Марка: [make], Модель: [model], Год: [year]".
    displayInfo() {
        return `Марка: ${this.make}, Модель: ${this.model}, Год: ${this.year}`;
    }

    // Добавьте геттер age, который возвращает возраст транспортного средства 
    // (текущий год минус год выпуска). Используйте new Date().getFullYear().
    get age() {
        return new Date().getFullYear() - this.year;
    }

    // Добавьте сеттер для года выпуска с проверкой: год не может быть больше текущего.
    set year(newYear) {
        if (!isPositiveNumber(newYear) || newYear > new Date().getFullYear() || !Number.isInteger(newYear)) {
            throw new Error("Невалидные параметры для класса Vehicle: год выпуска - положительное целое число не из будущего");
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
            throw new Error("Оба транспортных средства должны принадлежать классу Vehicle");
        }
        return Math.abs(vehicle1.age - vehicle2.age);
    }
}

// ===== ЗАДАНИЕ 2: Класс Car (наследуется от Vehicle) =====
class Car extends Vehicle {
    // Создайте дочерний класс Car, который наследуется от Vehicle.
    // Добавьте новое свойство numDoors (количество дверей).
    constructor(make, model, year, numDoors) {
        if (!isPositiveNumber(numDoors) || !Number.isInteger(numDoors)) {
            throw new Error("Количество дверей должно быть положительным целым числом");
        }
        super(make, model, year);
        this.numDoors = numDoors;
    }

    // Переопределите метод displayInfo() так, чтобы он также выводил количество дверей. 
    // Используйте super.displayInfo() для вызова метода родителя.
    displayInfo() {
        return `${super.displayInfo()}, Количество дверей: ${this.numDoors}`;
    }

    // Добавьте метод honk(), который выводит "Beep beep!".
    honk() {
        console.log("Beep beep!");
    }
}

// ===== ЗАДАНИЕ 3: Класс ElectricCar (наследуется от Car) =====
class ElectricCar extends Car {
    // Создайте дочерний класс ElectricCar, который наследуется от Car.
    // Добавьте новое свойство batteryCapacity (емкость батареи в кВт·ч).
    constructor(make, model, year, numDoors, batteryCapacity) {
        if (!isPositiveNumber(batteryCapacity)) {
            throw new Error("Ёмкость батареи должна быть положительным числом");
        }
        super(make, model, year, numDoors);
        this.batteryCapacity = batteryCapacity;
    }

    // Переопределите метод displayInfo() для вывода дополнительной информации о батарее.
    displayInfo() {
        return `${super.displayInfo()}, Ёмкость батареи: ${this.batteryCapacity}кВт·ч`;
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
function createVehicleFactory(vehicleType) {
    if (typeof vehicleType !== 'function') {
        throw new Error("Параметр vehicleType должен быть классом");
    } else if (vehicleType !== Vehicle && !(vehicleType.prototype instanceof Vehicle)) {
        throw new Error("Класс должен наследоваться от Vehicle или быть Vehicle");
    }
    return function(make) {
        return function(model) {
            return function(year) {
                return function(...additionalParams) {
                    return new vehicleType(make, model, year, ...additionalParams);
                };
            };
        };
    };
}


// ===== ЗАДАНИЕ 5: Статические методы и свойства =====

// Добавьте статическое свойство vehicleCount в класс Vehicle 
// для подсчета количества созданных транспортных средств.
// Модифицируйте конструктор Vehicle для увеличения счетчика
// (добавьте в начало конструктора: Vehicle.vehicleCount++);
// Создайте статический метод getTotalVehicles(), 
// который возвращает общее количество созданных транспортных средств.
// РЕАЛИЗОВАНО ВЫШЕ


// Автоматические тесты
function runTests() {
    console.log("        ===== 1 задание: тестируем класс Vehicle =====        ");

    // constructor
    console.log("   === корректный ввод:");
    try {
        const vehicle_1 = new Vehicle("Koenigsegg", "Agera", 2010);
        console.log("Транспорное средство успешно создано!");
        
        // displayInfo
        console.log(`Применение метода displayInfo для vehicle_1: ${vehicle_1.displayInfo()}`);

        // age
        console.log(`Возраст vehicle_1: ${vehicle_1.age}`)

        console.log("       === пытаемся изменить свойство year (позитивный опыт)")
        // set year (обработаем один позитивный случай и четыре негативных)
        // позитивный
        try {
            const current_year = vehicle_1.year;
            vehicle_1.year = 2018;
            console.log(`\tГод выпуска успешно изменён с ${current_year} на ${vehicle_1.year}`);
        } catch (error) {
            console.log(`Произошла ошибка изменения свойста year: ${error.message}`)
        }
        console.log("       === пытаемся изменить свойство year (негативный опыт)")
        // четыре нагативных
        try { // отрицательное
            vehicle_1.year = -2018;
        } catch (error) {
            console.log(`\tПроизошла ошибка изменения свойста year: ${error.message}`)
        }

        try { // строка
            vehicle_1.year = "2018";
        } catch (error) {
            console.log(`\tПроизошла ошибка изменения свойста year: ${error.message}`)
        }

        try { // не целое
            vehicle_1.year = 2018.5;
        } catch (error) {
            console.log(`\tПроизошла ошибка изменения свойста year: ${error.message}`)
        }

        try { // из будущего
            vehicle_1.year = 2100;
        } catch (error) {
            console.log(`\tПроизошла ошибка изменения свойста year: ${error.message}`)
        }

        // get year
        console.log(`Год выпуска vehicle_1 (изменённый): ${vehicle_1.year}`);


        console.log("Создадим второй vehicle_2 и wrong_object для проверки compareAge");
        const vehicle_2 = new Vehicle("Koenigsegg", "Regera", 2017);
        console.log(`Информация о vehicle_2: ${vehicle_2.displayInfo()}`);
        const wrong_object = 52;

        console.log("       === сравнение валидных параметров")
        try { // валидные параметры
            Vehicle.compareAge(vehicle_1, vehicle_2);
            console.log(`\tРазница (в годах) между годами выпуска vehicle_1 и vehicle_2: ${Vehicle.compareAge(vehicle_1, vehicle_2)}`);
        } catch (error) {
            console.log(`Произошла ошибка: ${error.message}`);
        }

        console.log("       === сравнение невалидных параметров")
        try { // первый параметр невалидный
            Vehicle.compareAge(wrong_object, vehicle_2);
            console.log(`Разница (в годах) между годами выпуска wrong_object и vehicle_2: ${Vehicle.compareAge(wrong_object, vehicle_2)}`);
        } catch (error) {
            console.log(`\tПроизошла ошибка: ${error.message}`);
        }

        try { // второй параметр невалидный
            Vehicle.compareAge(vehicle_1, wrong_object);
            console.log(`Разница (в годах) между годами выпуска vehicle_1 и wrong_object: ${Vehicle.compareAge(vehicle_1, wrong_object)}`);
        } catch (error) {
            console.log(`\tПроизошла ошибка: ${error.message}\n`);
        }


    } catch (error) {
        console.log(`Произошла ошибка: ${error.message}`);
    }

    console.log("   === некорректный ввод марки (два случая):");
    try { // пустая строка
        const vehicle_wrong = new Vehicle("", "Agera", 2010);
        console.log("Транспорное средство успешно создано!");
    } catch (error) {
        console.log(`Произошла ошибка: ${error.message}`);
    }
    try { // не строка
        const vehicle_wrong = new Vehicle(2018, "Agera", 2010);
        console.log("Транспорное средство успешно создано!");
    } catch (error) {
        console.log(`Произошла ошибка: ${error.message}\n`);
    }

    console.log("   === некорректный ввод модели (два случая):");
    try { // пустая строка
        const vehicle_wrong = new Vehicle("Koenigsegg", "", 2010);
        console.log("Транспорное средство успешно создано!");
    } catch (error) {
        console.log(`Произошла ошибка: ${error.message}`);
    }
    try { // не строка
        const vehicle_wrong = new Vehicle("Koenigsegg", 2018, 2010);
        console.log("Транспорное средство успешно создано!");
    } catch (error) {
        console.log(`Произошла ошибка: ${error.message}\n`);
    }

    console.log("   === некорректный ввод года (четыре случая)");
    try { // не число
        const vehicle_wrong = new Vehicle("Koenigsegg", "Agera", "Koenigsegg");
        console.log("Транспорное средство успешно создано!");
    } catch (error) {
        console.log(`Произошла ошибка: ${error.message}`);
    }

    try { // отрицательное число
        const vehicle_wrong = new Vehicle("Koenigsegg", "Agera", -2010);
        console.log("Транспорное средство успешно создано!");
    } catch (error) {
        console.log(`Произошла ошибка: ${error.message}`);
    }

    try { // не целое число
        const vehicle_wrong = new Vehicle("Koenigsegg", "Agera", 2010.7);
        console.log("Транспорное средство успешно создано!");
    } catch (error) {
        console.log(`Произошла ошибка: ${error.message}`);
    }

    try { // год из будущего
        const vehicle_wrong = new Vehicle("Koenigsegg", "Agera", 2100);
        console.log("Транспорное средство успешно создано!");
    } catch (error) {
        console.log(`Произошла ошибка: ${error.message}\n\n`);
    }

    console.log("        ===== 2 задание: тестируем класс Car =====        ");
    // проверяем constructor, но только валидность numDoors (остальные проверены в родительском классе Vehicle)
    console.log("   === корректный ввод:");
    try { // валидный
        const car_1 = new Car("Koenigsegg", "Agera", 2010, 2);
        console.log("Машина успешно создана!");

        // displayInfo
        console.log(`Применение метода displayInfo для car_1: ${car_1.displayInfo()}`);

        // honk
        car_1.honk();

    } catch (error) {
        console.log(`Произошла ошибка: ${error.message}`);
    }
    
    console.log("\n   === некорректный ввод числа дверей (три случая):");
    try { // отрицательное количество дверей
        const car_wrong = new Car("Koenigsegg", "Agera", 2010, -2);
        console.log("Машина успешно создана!");
    } catch (error) {
        console.log(`Произошла ошибка: ${error.message}`);
    }

    try { // не целое число дверей
        const car_wrong = new Car("Koenigsegg", "Agera", 2010, 2.5);
        console.log("Машина успешно создана!");
    } catch (error) {
        console.log(`Произошла ошибка: ${error.message}`);
    }

    try { // не число
        const car_wrong = new Car("Koenigsegg", "Agera", 2010, "двери");
        console.log("Машина успешно создана!");
    } catch (error) {
        console.log(`Произошла ошибка: ${error.message}\n\n`);
    }


    console.log("        ===== 3 задание: тестируем класс ElectricCar =====        ");
    // проверяем constructor, но только валидность batteryCapacity (остальные проверены в родительском классе Car)
    console.log("   === корректный ввод:");
    try { // валидный
        const electricCar_1 = new ElectricCar("Москвич", "3е", 2022, 5, 65.7);
        console.log("Электрокар успешно создан!");

        // displayInfo
        console.log(`Применение метода displayInfo для electricCar_1: ${electricCar_1.displayInfo()}`);

        // calculateRange
        console.log(`Примерный запас хода у electricCar_1: ${electricCar_1.calculateRange()}км`);

    } catch (error) {
        console.log(`Произошла ошибка: ${error.message}`);
    }
    
    console.log("\n   === некорректный ввод числа дверей (два случая):");
    try { // отрицательная ёмкость батареи
        const electricCar_wrong = new ElectricCar("Москвич", "3е", 2022, 5, -65.7);
        console.log("Машина успешно создана!");
    } catch (error) {
        console.log(`Произошла ошибка: ${error.message}`);
    }


    try { // не число
        const car_wrong = new ElectricCar("Москвич", "3е", 2022, 5, "ёмкость");
        console.log("Машина успешно создана!");
    } catch (error) {
        console.log(`Произошла ошибка: ${error.message}\n\n`);
    }


    console.log("        ===== 4 задание: тестируем createVehicleFactory =====        ");
    console.log("   === позитивные тесты (корректное использование):");
    try { // Создание Vehicle через фабрику
        const vehicleFact = createVehicleFactory(Vehicle)("Koenigsegg")("Jesko")(2019)();
        console.log("Объект vehicleFact успешно создан через фабрику");
        console.log(`Информация о vehicleFact: ${vehicleFact.displayInfo()}`);
    } catch (error) {
        console.log(`Произошла ошибка: ${error.message}`);
    }

    try { // Создание Car через фабрику с дополнительным параметром
        const carFact = createVehicleFactory(Car)("Koenigsegg")("Jesko")(2019)(2);
        console.log("\nОбъект carFact успешно создан через фабрику");
        console.log(`Информация о carFact: ${carFact.displayInfo()}`);
        carFact.honk()
    } catch (error) {
        console.log(`Произошла ошибка: ${error.message}`);
    }

    try { // Создание ElectricCar через фабрику с двумя дополнительными параметрами
        const electricCarFact = createVehicleFactory(ElectricCar)("Tesla")("Model 3")(2022)(4, 75);
        console.log("\nОбъект electricCarFact успешно создан через фабрику");
        console.log(`Информация о electricCarFact: ${electricCarFact.displayInfo()}`);
        console.log(`Запас хода: ${electricCarFact.calculateRange()}км`);
    } catch (error) {
        console.log(`Произошла ошибка: ${error.message}`);
    }
    
    try { // Частичное применение (каррирование)
        const teslaFactory = createVehicleFactory(ElectricCar)("Tesla");
        const modelSFactory = teslaFactory("Model S");
        const model2023Factory = modelSFactory(2023);
        const finalCar = model2023Factory(4, 100);
        console.log("\nОбъект класса ElectricCar создан с применением частичного карртирования: Частичное применение работает корректно");
        console.log(`Информация об объекте класса ElectricCar, созданного с применением частичного карртирования: ${finalCar.displayInfo()}`);
    } catch (error) {
        console.log(`Произошла ошибка: ${error.message}`);
    }

    console.log("\n   === негативные тесты (проверка ошибок):");
    try { // не функция в качестве vehicleType
        const result = createVehicleFactory("NotAClass");
        console.log("Ожидалась ошибка для не-функции");
    } catch (error) {
        console.log(`Произошла ошибка: ${error.message}`);
    }

    try { // класс, но не транспортного средства в качестве vehicleType
        class NotAVehicle {
            constructor() {}
        }
        const result = createVehicleFactory(NotAVehicle);
        console.log("Ожидалась ошибка для неподходящего класса");
    } catch (error) {
        console.log(`Произошла ошибка: ${error.message}`);
    }


    // напоследок проверяем getTotalVehicles
    console.log("\n\n        ===== 5 задание: тестируем статическое свойство vehicleCount и метод getTotalVehicles() из класса Vehicle =====        ");
    console.log(`Значение vehicleCount после всех предыдущих тестов: ${Vehicle.vehicleCount}`)
    console.log(`Вывод getTotalVehicles(): ${Vehicle.getTotalVehicles()}`);
}

runTests();