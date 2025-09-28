'use strict'

// ===== ЗАДАНИЕ 1: Базовый класс Vehicle =====
class Vehicle {
    // Создайте базовый класс Vehicle.
    // В конструкторе принимайте и сохраняйте в this свойства: 
    // make (марка), model (модель), year (год выпуска).
    static vehicleCount = 0

    constructor(make, model, year) {
        // ..
        
        if (typeof make !== 'string'){
            throw new Error("Неправильный тип данных для марки")
        }
        this.make = make

        if (typeof model !== 'string'){
            throw new Error("Неправильный тип данных для модели")
        }
        this.model = model;

        if (typeof year !== 'number'){ 
            throw new Error("Неправильный тип данных для года")
        }
        if (new Date().getFullYear() < year){
            throw new Error("Неправильный год машины")
        }
        this.year = year;
        Vehicle.vehicleCount += 1
    }
    
    

    // Добавьте метод displayInfo(), который выводит в консоль информацию 
    // о транспортном средстве в формате: "Марка: [make], Модель: [model], Год: [year]".
    displayInfo() {
        // ..
        console.log(`марка машины ${this.make} , модель машины ${this.model}, год выпуска машины ${this.year}`)
    }

    // Добавьте геттер age, который возвращает возраст транспортного средства 
    // (текущий год минус год выпуска). Используйте new Date().getFullYear().
    get age() {
        // ..
        return new Date().getFullYear() - this.year
    }

    // Добавьте сеттер для года выпуска с проверкой: год не может быть больше текущего.
    set year(newYear) {
        // ..
        if (typeof newYear !== 'number'){
            throw new Error("Неправильный тип данных года машины")
        }

        if (newYear <= new Date().getFullYear()){
            this._year = newYear
        } else {
            throw new Error (" дата выпуска машины должна быть меньше текущей даты")
        }
    }

    get year() {
        return this._year;
    }

    // Добавьте статический метод compareAge(vehicle1, vehicle2), 
    // который возвращает разницу в возрасте между двумя транспортными средствами.
    static compareAge(vehicle1, vehicle2) {
        // ..
        return Math.abs(vehicle1.age - vehicle2.age)
    }
    static getTotalVehicles(){
        return Vehicle.vehicleCount 
    }
}









// ===== ЗАДАНИЕ 2: Класс Car (наследуется от Vehicle) =====
class Car extends Vehicle {
    // Создайте дочерний класс Car, который наследуется от Vehicle.
    // Добавьте новое свойство numDoors (количество дверей).
    constructor(make, model, year, numDoors) {
        // ..
        super(make, model, year)
        if (typeof numDoors !== 'number'){
            Vehicle.vehicleCount -= 1
            throw new Error("Неправильный тип данных для количества дверей")
        }
        if (numDoors <= 0 ){
            Vehicle.vehicleCount -= 1
            throw new Error("количество дверей не может быть меньше или равно нулю")
        }
        
        this.numDoors = numDoors
    }

    // Переопределите метод displayInfo() так, чтобы он также выводил количество дверей. 
    // Используйте super.displayInfo() для вызова метода родителя.
    displayInfo() {
        // ..
        super.displayInfo()
        console.log(`количество дверей ${this.numDoors}`)
    }

    // Добавьте метод honk(), который выводит "Beep beep!".
    honk() {
        // ..
        console.log("Beep beep!")
    }
}




// ===== ЗАДАНИЕ 3: Класс ElectricCar (наследуется от Car) =====
class ElectricCar extends Car {
    // Создайте дочерний класс ElectricCar, который наследуется от Car.
    // Добавьте новое свойство batteryCapacity (емкость батареи в кВт·ч).
    constructor(make, model, year, numDoors, batteryCapacity) {
        // ..
        super(make, model, year, numDoors)
        if (typeof batteryCapacity !== 'number'){
            Vehicle.vehicleCount -= 1
            throw new Error("Неправильный тип данных для кВт")
        }
        if (batteryCapacity <= 0 ){
            Vehicle.vehicleCount -= 1
            throw new Error("кВт не может быть меньше или равно нулю")
        }
        this.batteryCapacity = batteryCapacity
    }

    // Переопределите метод displayInfo() для вывода дополнительной информации о батарее.
    displayInfo() {
        // ..
        super.displayInfo()
        console.log(`количество кВт ${this.batteryCapacity}`)
    }

    // Добавьте метод calculateRange(), который рассчитывает примерный запас хода 
    // (предположим, что 1 кВт·ч = 6 км).
    calculateRange() {
        // ..
        return this.batteryCapacity * 6
    }
}


// ===== ЗАДАНИЕ 4: Каррирование =====

// Создайте функцию createVehicleFactory, которая возвращает функцию 
// для создания транспортных средств определенного типа (каррирование).
const createVehicleFactory = (vehicleType) => (make, model, year, numDoors, batteryCapacity) => {
    // Замените {} на варажение
     if (typeof vehicleType !== 'string') {
        throw new Error('Неправильный тип данных');
    }
    switch (vehicleType) {
        case 'Vehicle':
            return new Vehicle(make, model, year);
        case 'Car':
            return new Car(make, model, year, numDoors);
        case 'ElectricCar':
            return new ElectricCar(make, model, year, numDoors, batteryCapacity);
        default:
            throw new Error (`Непонятный тип транспортного средства: ${vehicleType}`);
    }
};


/*// ===== ЗАДАНИЕ 5: Статические методы и свойства =====

// Добавьте статическое свойство vehicleCount в класс Vehicle 
// для подсчета количества созданных транспортных средств.
// Модифицируйте конструктор Vehicle для увеличения счетчика
// (добавьте в начало конструктора: Vehicle.vehicleCount++);
// Создайте статический метод getTotalVehicles(), 
// который возвращает общее количество созданных транспортных средств.*/



// Автоматические тесты
function runTests() {
    console.log('Запуск тестов...');

    // Расширьте тесты для полного покрытия задания.
    
    // Проверка наследования
    const vehicle = new Vehicle('Toyota', 'Camry', 2015);
    vehicle.displayInfo();
    console.log(`Возраст: ${vehicle.age} лет`);

    let vehicle1
    let vehicle2 
    let vehicle3 
    let vehicle4
    
    
    try{
        vehicle2 = new Vehicle (0, "Prado", 2015)
    } catch(error){
        console.assert(error.message === "Неправильный тип данных для марки", "тест марки машины провален")
    }

    try{
        vehicle3 = new Vehicle ("Toyota", 0, 2015)
    } catch(error){
        console.assert(error.message === "Неправильный тип данных для модели", "тест модели машины провален")
    }

    try{
        vehicle4 = new Vehicle ("Toyota", "Prado", "Prado")
    } catch(error){
        console.assert(error.message === "Неправильный тип данных для года", "тест года машины провален")
    }

    try{
        vehicle1 = new Vehicle("Toyota", "Prado", 2055)
    } catch(error){
        console.assert(error.message === "Неправильный год машины", "тест года машины провален1")
    }
    
    vehicle.year = 2023;
    console.log(`новый год машины: ${vehicle.year}`)
    console.log(`новый возраст машины: ${vehicle.age}`)
    try{
        vehicle.year = ("rrr")
    } catch(error){
        console.assert(error.message === "Неправильный тип данных года машины", "тест нового года машины провален, неправильный тип данных")
    }

    try{
        vehicle.year = (2055)
    } catch(error){
        console.assert(error.message === " дата выпуска машины должна быть меньше текущей даты", "тест нового года машины провален, год больше текущего")
    }


    const vehicl1 = new Vehicle('Toyota', 'Camry', 2010);
    const vehicl2 = new Vehicle('Toyota', 'Camry', 2019);
    console.log("разница:" , Vehicle.compareAge(vehicl1, vehicl2))



    const car = new Car('Honda', 'Civic', 2018, 4);
    car.displayInfo();
    car.honk();


    let car1
    let car2
    try{
       car1 = new Car ('Honda', 'Civic', 2018, "ttt")
    } catch(error){
        console.assert(error.message === "Неправильный тип данных для количества дверей", " тест типа данных провален, неправильныц тип данных")
    }

    try{
       car2 = new Car ('Honda', 'Civic', 2018, 0)
    } catch(error){
        console.assert(error.message === "количество дверей не может быть меньше или равно нулю", " тест количества дверей провален, неверное количество ")
    }
    

    const electricCar = new ElectricCar('Tesla', 'Model 3', 2020, 4, 75);
    electricCar.displayInfo();
    console.log(`Запас хода: ${electricCar.calculateRange()} км`);

    let electricCar1
    let electricCar2
    try{
       electricCar1 = new ElectricCar('Tesla', 'Model 3', 2020, 4, "ooo")
    } catch(error){
        console.assert(error.message === "Неправильный тип данных для кВт", " тест типа данных провален, неправильный тип данных")
    }

    try{
       electricCar2 = new ElectricCar('Tesla', 'Model 3', 2020, 4, 0)
    } catch(error){
        console.assert(error.message === "кВт не может быть меньше или равно нулю", " тест количества кВт, неверное количество ")
    }


    
    // Проверка возраста
    const testVehicle = new Vehicle('Test', 'Model', 2010);
    console.assert(testVehicle.age === (new Date().getFullYear() - 2010), 'Тест возраста провален');
    
    const createCarFactory = createVehicleFactory("Car");
    const myNewCar = createCarFactory('BMW', 'X5', 2022, 5);
    console.log('Создан новый автомобиль:');
    myNewCar.displayInfo();
    
    const createVehicleFactory1 = createVehicleFactory("Vehicle");
    const myNewVehicle = createVehicleFactory1('BMW', 'X5', 2022);
    console.log('Создан новый автомобиль:');
    myNewVehicle.displayInfo();

    const createElectricCarFactory1 = createVehicleFactory("ElectricCar");
    const myNewElectricCar = createElectricCarFactory1 ('BMW', 'X5', 2022, 5, 600);
    console.log('Создан новый автомобиль:');
    myNewElectricCar.displayInfo();

    try {
        const createkamazFactory = createVehicleFactory('kamaz')
    } catch (error) {
        console.assert(error.message === `Непонятный тип транспортного средства: ${vehicleType}`, 'Тест провален')

    }

    try {
        const createkamazFactory = createVehicleFactory(34)
    } catch (error) {
        console.assert(error.message === 'Неправильный тип данных', 'Тест создания фабрики ElectricCar провален')
    }


    console.log('Всего создано транспортных средств:', Vehicle.getTotalVehicles());
    
    console.log('Все тесты пройдены! ✅');
}

runTests();
