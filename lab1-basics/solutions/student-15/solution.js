
// ===== ЗАДАНИЕ 1: Базовые операции =====
function simpleTask() {
    // 1.1 Объявите переменные разных типов (не менне 5)
    // 1.2 Выведите типы всех переменных
    let int = 123;
    let str = "labubu";
    let arr = [12, 32, -100];
    let bool = true;
    let undef;
    console.log(typeof(int));
    console.log(typeof(str));
    console.log(typeof(arr));
    console.log(typeof(bool));
    console.log(typeof(undef));
    
}

// ===== ЗАДАНИЕ 2: Функции =====
function getReviewerNumber(number, lab) {
    // 2.1 Функция определяющая номер ревьюера для вашей группы по вашему номеру и номеру лабораторной работы
    if(typeof number !== "number" || typeof lab !== "number"){
        return "Введено не число!";
    }
    if(number <= 0 || lab <= 0){
        return "Число не может быть отрицательным!";
    }
    return ((number + lab) % 23);
}


function getVariant(number, variants) {
    // 2.2 Функция определяющая номер варианта, исходя из количества вариантов
    if(typeof number !== "number" || typeof variants !== "number"){
        return "Введено не число!";
    }
    if(number <= 0 || variants <= 0){
        return "Число не может быть отрицательным!";
    }
    return ((number - 1) % variants + 1);
}


function calculate(a, b, operation) {
    // 2.3 Напишите функцию калькулятор, калькулятор обрабатывает следующие операции: +, -, *, /
    
    if(typeof a !== "number" || typeof b  !== "number"){
        return "Введено не число!";
    }
    if(operation === "+"){
        return a + b;
    } else if(operation === "-"){
        return a - b;
    } else if(operation === "*"){
        return a * b;
    } else if(operation === "/"){
        if(b === 0){
            return "Нельзя делить на 0!";
        }
        return a / b;
    } else{
        return "Неправильный символ!";
    }
    
}



function calculateArea(figure, ...params) {
    // 2.4 Напишите функцию для определения площади фигур 'circle', 'rectangle', 'triangle'
    // Используйте switch.
    switch(figure){
        case "circle":
            if(params.length == 1 && typeof(params[0]) === "number" && params[0] > 0){
                 return params[0] * params[0] * Math.PI;
            }
            return "Неверные данные";
        case "rectangle":
            if(params.length == 2 && typeof(params[0]) === "number" && typeof(params[1]) === "number" && params[0] > 0 && params[1] > 0){
                return params[0] * params[1];
            }
             return "Неверные данные";
        case "triangle":
            if (params.length == 2 && typeof(params[0]) === "number" && typeof(params[1]) === "number"  && params[0] > 0 && params[1] > 0){
                return 0.5 * params[0] * params[1];
            }
             return "Неверные данные";
        default: 
            return "Ни одна из фигур не найдена";
    }
}




// 2.5 Стрелочные функции
const reverseString = (str) => {
    // Функция возвращает перевернутую строку
    if(typeof(str) !== "string"){
        return "Введён неверный тип данных";
    }
    return str.split('').reverse().join('');
};


const getRandomNumber = (min, max) => {
    // Функция возвращает случайное число между min и max
    if(typeof min !== "number" || typeof max  !== "number"){
        return "Введён неверный тип данных";
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// ===== ЗАДАНИЕ 3: Объекты =====
const book = {
    // 3.1 Создайте объект "книга" с полями для хранения заголовка, автора, 
    // года выпуска, количества страниц, и доступности
    // объект должен иметь два метода getInfo возвращает одной строкой информацию о названии книги, аторе, годе выпуска, количестве страниц
    // метод toggleAvailability - который меняет значение доступности и возвращает его
    title: "Z",
    author: "Zhmil'",
    year: 1984, 
    pages: 222, 
    avalibility: true,
    getInfo(){
        return `title: ${this.title}, author: ${this.author}, year: ${this.year}, pages: ${this.pages}`
    },
    toggleAvailability(){
        return this.avalibility = !this.avalibility
    }


};



const student = {
    // 3.2 Реализуйте методы объекта "студент" 
    name: "Анна Петрова",
    age: 20,
    course: 2,
    grades: {
        math: 90,
        programming: 95,
        history: 85
    },
    
    // Метод для расчета среднего балла
    getAverageGrade() {
        // Ваш код здесь
        let sum = 0;
        let grades = Object.values(this.grades);
        for(let i = 0; i < grades.length; i++){
            sum+= grades[i];
        }
        return sum / grades.length;
    },
    
    // Метод для добавления новой оценки
    addGrade(subject, grade) {
        // Ваш код здесь
        if(grade > 100 || grade < 0){
            return "Неверная оценка";
        }
        if(typeof subject !== "string"){
            return "Неверный тип данных";
        }
        this.grades[subject] = grade;
    }
};


// ===== ЗАДАНИЕ 4: Массивы =====
function processArrays() {
    const numbers = [12, 45, 23, 67, 34, 89, 56, 91, 27, 14];
    const words = ["JavaScript", "программирование", "массив", "функция", "объект"];
    const users = [
        { id: 1, name: "Анна", age: 25, isActive: true },
        { id: 2, name: "Борис", age: 30, isActive: false },
        { id: 3, name: "Виктория", age: 22, isActive: true },
        { id: 4, name: "Григорий", age: 35, isActive: true },
        { id: 5, name: "Дарья", age: 28, isActive: false }
    ];
    
    // 1. Используйте forEach для вывода всех чисел больше 50
    let mas = [];
    console.log("Числа больше 50:");
    numbers.forEach(element => {
        if(element > 50){
            mas.push(element);
        }
        
    });
    console.log(mas);
    // 2. Используйте map для создания массива квадратов чисел
    const squares = numbers.map(number => number*number);
    console.log(squares);

    // 3. Используйте filter для получения активных пользователей
    const activeUsers =  users.filter(user => user.isActive).map(user => user.name);
    console.log(activeUsers);
    // 4. Используйте find для поиска пользователя с именем "Виктория"
    const victoria =  users.find(user => user.name === "Виктория");
    console.log(victoria);

    // 5. Используйте reduce для подсчета суммы всех чисел
    const sum =  numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
    console.log(sum);

    // 6. Используйте sort для сортировки пользователей по возрасту (по убыванию)
    const sortedByAge =  users.sort((a,b) => b.age-a.age).map(user => user.name);
    console.log(sortedByAge);
    // 7. Используйте метод для проверки, все ли пользователи старше 18 лет
    const allAdults =  users.filter(user => user.age > 18).map(user => user.name);
    console.log(allAdults);
    // 8. Создайте цепочку методов: 
    //    - отфильтровать активных пользователей
    //    - преобразовать в массив имен
    //    - отсортировать по алфавиту
    const activeUserNames =  users.filter(user => user.isActive).map(user => user.name).sort();
    console.log(activeUserNames);
}


// ===== ЗАДАНИЕ 5: Менеджер задач =====
const taskManager = {
    tasks: [
        { id: 1, title: "Изучить JavaScript", completed: false, priority: "high" },
        { id: 2, title: "Сделать лабораторную работу", completed: true, priority: "high" },
        { id: 3, title: "Прочитать книгу", completed: false, priority: "medium" }
    ],
    newID: 4,
    addTask(title, priority = "medium") {
        // 5.1 Добавление задачи
        const newTask = {id: this.newID++, title: title, completed: false, priority: priority}
        this.tasks.push(newTask);
    },
    
    completeTask(taskId) {
        // 5.2 Отметка выполнения
        const task = this.tasks.find(task => task.id === taskId);
        task.completed = true;
    },

    // Удаление задачи
    deleteTask(taskId) {
        // 5.3 Ваш код здесь
        this.tasks = this.tasks.filter(task => task.id !== taskId); 

        
    },

    // Получение списка задач по статусу
    getTasksByStatus(completed) {
        // 5.4 Ваш код здесь
    return this.tasks.filter(task => task.completed === completed).map(task => `id: ${task.id}, title: ${task.title}, priority: ${task.priority}`).join("\n");


    },
    
    getStats() {
        /* 5.5 Статистика возвращает объект:        
        total,
        completed,
        pending,
        completionRate
        */
        const total = this.tasks.length;
        const completed =  this.tasks.filter(task => task.completed).length;
        const pending = total - completed;
        const completitionRate = Math.round(completed / total * 100);

        return {total: total, 
        completed: completed,
        pending: pending,
        completitionRate: completitionRate};
        


    

    },
                        
};




// ===== ЗАДАНИЕ 6: Регулярные выражения =====
/*
Дополнительные материалы:
https://regex101.com/ - интерактивный тестер regex
MDN Regular Expressions - https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_expressions
Learn Regex - https://github.com/ziishaned/learn-regex - учебник по regex
 
Задание (по вариантам):
1. Изучите функции с регулярными выражениями по своему варианту
На защите вы должны суметь объяснить структуру регулярного выражения.
2. Напишите тесты, покрывающие все различные варианты. Обратите внимание тесты должны обеспечивать полное покрытие, но не быть дублирующимися.
3. Если предложенное регулярное выражение некорректно, вы можете исправить его.

Вычисление своего варианта:
Номер варианта = Ваш номер % Общее количество вариантов
 */

/**
 * Вариант 1: Валидация email адреса
 * Правила:
 * - Латиница, цифры, спецсимволы: ._%+-
 * - Обязательный символ @
 * - Доменная часть: латиница, цифры, точка
 * - Минимальная длина 5 символов
 */
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,}$/;
    // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}


/**
 * Вариант 2: Валидация пароля
 * Правила:
 * - Минимум 8 символов
 * - Хотя бы одна заглавная буква
 * - Хотя бы одна строчная буква  
 * - Хотя бы одна цифра
 * - Хотя бы один специальный символ: !@#$%^&*()
 */
function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
    return passwordRegex.test(password);
}

/**
 * Вариант 3: Валидация номера телефона (российский формат)
 * Поддерживает форматы:
 * - +7 (999) 123-45-67
 * - 8 (999) 123-45-67  
 * - 89991234567
 * - +7(999)123-45-67
 */
function validatePhone(phone) {
    const phoneRegex = /^(\+7|8)[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
    return phoneRegex.test(phone);
}


/**
 * Вариант 4: Валидация даты в формате DD.MM.YYYY
 * Правила:
 * - День: 01-31
 * - Месяц: 01-12
 * - Год: 1900-2099
 */
function validateDate(date) {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/;
    return dateRegex.test(date);
}

// Бонус: выполните все остальные варианты. Выполнение бонуса не учитывается в итоговой оценке.


// ===== ТЕСТИРОВАНИЕ =====
function runTests() {
    console.log("=== ТЕСТИРОВАНИЕ ===");
    
    // Тест 1: getReviewerNumber
    console.assert(getReviewerNumber(5, "1") === "Введено не число!", "Тест провален, т.к. введено не число");
    console.assert(getReviewerNumber("5", 1) === "Введено не число!", "Тест провален, т.к. введено не число");
    console.assert(getReviewerNumber("5", "1") === "Введено не число!", "Тест провален, т.к. введено не число");
    console.assert(getReviewerNumber(5, -1) === "Число не может быть отрицательным!", "Тест провален, т.к. введено отрицательное число");
    console.assert(getReviewerNumber(5, 1) === 6, "Тест получения ревьюера провален");
    // Тест 2: calculate
    console.assert(calculate(10, 5, '+') === 15, "Тест калькулятора провален");
    console.assert(calculate("f", 4, "/") === "Введено не число!", "Тест провален, т.к. введено не число");
    console.assert(calculate(8, "4", "/") === "Введено не число!", "Тест провален, т.к. введено не число");
    console.assert(calculate("f", "4", "/") === "Введено не число!", "Тест провален, т.к. введено не число");
    console.assert(calculate(8, 4, "%") === "Неправильный символ!", "Тест провален, т.к. введена неизвестная операция");
    console.assert(calculate(8, 4, "-") === 4, "Тест провален, т.к. неверное значение при вычитании");
    console.assert(calculate(8, 4, "*") === 32, "Тест провален, т.к. неверное значение при умножении");
    console.assert(calculate(8, 4, "/") === 2, "Тест провален, т.к. неверное значение при делении");
    console.assert(calculate(8, 0, "/") === "Нельзя делить на 0!", "Тест провален, т.к. поделено на ноль");
    console.assert(calculate(Number.MAX_VALUE, 1, '+') === Number.MAX_VALUE+1, "Тест провален, т.к. неверное значение при переполнении");
    console.assert(calculate(Number.MAX_VALUE, Number.MAX_VALUE, '+') === Infinity, "Тест провален, т.к. неверное значение при переполнении");
    console.assert(calculate(Number.MAX_VALUE, 1, '-') === Number.MAX_VALUE - 1, "Тест провален, т.к. неверное значение при переполнении");
    console.assert(calculate(Number.MAX_VALUE, 1, '*') === Number.MAX_VALUE, "Тест провален, т.к. неверное значение при переполнении");
    console.assert(calculate(Number.MAX_VALUE, 2, "*") === Infinity, "Тест провален, т.к. неверное значение при переполнении");
    console.assert(calculate(Number.MAX_VALUE, 3, '/') === Number.MAX_VALUE / 3, "Тест провален, т.к. неверное значение при переполнении");
    
    // Добавьте остальные тесты...

    console.log("Задание 1.1");
    simpleTask();
    console.log(" ");




    //Тест задания 2.2
    console.assert(getVariant(2, 4) === 2, "Тест провален, т.к. неверный вариант при значении 2 и 4");
    console.assert(getVariant(4, 4) === 4, "Тест провален, т.к. неверный вариант при пограничном значении 4 и 4");
    console.assert(getVariant("2", "4") === "Введено не число!", "Тест провален, т.к. введего не число");
    console.assert(getVariant("2", 4) === "Введено не число!", "Тест провален, т.к. введено не число");
    console.assert(getVariant(2, "4") === "Введено не число!", "Тест провален, т.к. введено не число");
    console.assert(getVariant(-1, 4) === "Число не может быть отрицательным!", "Тест провален, т.к. введно не число");


    //Тест задания 2.4
 
    console.assert(calculateArea("circle", 2) - 12.56637 < 0.0001, "Тест провален, т.к. площадь круга неверная");
    console.assert(calculateArea("rectangle", 4, 8) === 32, "Тест провален, т.к. площадь прямоугольника неверная");
    console.assert(calculateArea("triangle", 4, 8) === 16, "Тест провален, т.к. площадь треугольника неверная");
    console.assert(calculateArea("square", 4, 8) === "Ни одна из фигур не найдена", "Тест провален, т.к. неизвестная фигура");
    console.assert(calculateArea("triangle", 4) === "Неверные данные", "Тест провален, т.к. неверное число аргументов");
    console.assert(calculateArea("rectangle", 4, 7, 5) === "Неверные данные", "Тест провален, т.к. неверное число аргументов");
    console.assert(calculateArea("circle", ) === "Неверные данные", "Тест провален, т.к. неверное число аргументов");
    console.assert(calculateArea("circle", -1) === "Неверные данные", "Тест провален, т.к. площадь не может быть отрицательной");
    console.assert(calculateArea("triangle", 3, -6) === "Неверные данные", "Тест провален, т.к. площадь не может быть отрицательной");
    console.assert(calculateArea("rectangle", -1, 8) === "Неверные данные", "Тест провален, т.к. площадь не может быть отрицательной");
    console.assert(calculateArea("rectangle", 4, "v") === "Неверные данные", "Тест провален, т.к. неизвестный аргумент");
    console.assert(calculateArea("rectangle", 4, 0) === "Неверные данные", "Тест провален, т.к. сторона не может быть нулем");

    //Тест задания 2.5
    console.assert(reverseString("Маша") === "ашаМ", "Тест провален, т.к. неверная перевернутая строка");
    console.assert(reverseString("") === "", "Тест провален, т.к. неверная перевернутая строка");
    console.assert(reverseString("а") === "а", "Тест провален, т.к. неверная перевернутая строка");
    console.assert(reverseString(12) === "Введён неверный тип данных", "Тест провален, т.к. неверный тип данных");
    

    console.assert(getRandomNumber("f", 4) === "Введён неверный тип данных", "Тест провален, т.к. неверный тип данных");
    console.assert(getRandomNumber(-2, 1) >= -2 || getRandomNumber(-2, 1) <= 1, "Тест провален, т.к. рандомное число вышло из диапозона");
    console.assert(getRandomNumber(5, 5) === 5, "Тест провален, т.к. рандомное число вышло из диапозона");

    //Тест задания 3.1
    console.log("Задание 3.1");
    console.log("Полная информация о книге: ", book.getInfo()); //Вывод всех данных
    console.log("false === ", book.toggleAvailability());
    console.log("true === ", book.toggleAvailability());
    console.log(" ");

    //Тест задания 3.2
    console.log("Задание 3.2");
    console.log("90 === ", student.getAverageGrade());
    console.assert(student.addGrade(34, 95) === "Неверный тип данных", "Тест провален, т.к. введён неверный тип данных");
    console.assert(student.addGrade("PE", 101) === "Неверная оценка", "Тест провален, т.к. оценка вышла из диапозона");
    console.assert(student.addGrade("PE", -1) === "Неверная оценка", "Тест провален, т.к. оценка вышла из диапозона");
    student.addGrade("PE", 100); // добавляем новый предмет
    console.log("92.5 === ", student.getAverageGrade()); // при добавлении нового предмета
    console.log(" ");

    //Задание 4
    console.log("Задание 4: ");
    processArrays();
    console.log(" ");

    //Тест задания 5
    console.log("Задание 5:")
    Object.entries(taskManager.tasks).forEach(([key, value]) => {
    console.log(value); //изначальный
    });
    console.log(" ");
    taskManager.addTask("Zmil'"); //5.1
    taskManager.completeTask(1);  //5.2
    taskManager.deleteTask(3); //5.3
    console.log(" ");
    Object.entries(taskManager.tasks).forEach(([key, value]) => {
    console.log(value); //конечный
    });
    console.log(" ");
    console.log("5.4: ");
    console.log(taskManager.getTasksByStatus(true)); //5.4
    console.log(" ");
    console.log("5.5: ");
    console.log(taskManager.getStats()); //5.5
    console.log(" ");

    //Тест 3 варианта регулярных выражений
console.assert(validatePhone("+7 (999) 123-45-67"), "Тест c +7 и пробелом провален");
console.assert(validatePhone('8 (999) 123-45-67'), "Тест c 8 и пробелом провален");
console.assert(validatePhone('+7(999)123-45-67'), "Тест c +7 и без пробелов провален");
console.assert(validatePhone('8(999)123-45-67'), "Тест c 8 и без пробелов провален");
console.assert(validatePhone('+7 999 123-45-67'), "Тест c +7 и пробелами без скобок провален");
console.assert(validatePhone('8 999 123-45-67'), "Тест c 8 и пробелами без скобок провален");
console.assert(validatePhone('+79991234567'), "Тест c +7 без форматирования провален");
console.assert(validatePhone('89991234567'), "Тест c 8 без форматирования провален");
console.assert(validatePhone('+7 999 123 45 67'), "Тест c +7 и пробелами вместо дефисов провален");
console.assert(validatePhone('8 999 123 45 67'), "Тест c 8 и пробелами вместо дефисов провален");
console.assert(validatePhone('+7-999-123-45-67'), "Тест c +7 и дефисами провален");
console.assert(validatePhone('8-999-123-45-67'), "Тест c 8 и дефисами провален");


console.assert(!validatePhone('+1 (999) 123-45-67'), "Тест провален, т.к. неверная первая цифра в формате +7");
console.assert(!validatePhone('1 (999) 123-45-67'), "Тест провален, т.к. неверная первая цифра в формате 8");
console.assert(!validatePhone('+7 (999) 123-45-678'), "Тест провален, т.к. слишком длинный номер");
console.assert(!validatePhone('+7 (99) 123-45-67'), "Тест провален, т.к. слишком короткий код оператора");
console.assert(!validatePhone('+7 (999) 123-45-6'), "Тест провален, т.к. неполный номер");
console.assert(!validatePhone('abc +7 (999) 123-45-67'), "Тест провален, т.к. есть лишние символы в начале");
console.assert(!validatePhone('+7 (999) 123-45-67 def'), "Тест провален, т.к. есть лишние символы в конце");
console.assert(!validatePhone(''), "Тест провален, т.к. пустая строка");
console.assert(!validatePhone('+7 (999) 123-45-6a'), "Тест провален, т.к. есть буква в номере");
console.assert(!validatePhone('+7 (999) 123-45'), "Тест провален, т.к. неполный номер");
console.assert(!validatePhone('9 (999) 123-45-67'), "Тест провален, т.к. начинается с 9");
console.assert(!validatePhone('+78 (999) 123-45-67'), "Тест провален, т.к. +78 невалиден");
console.assert(!validatePhone('+7 (9991) 123-45-67'), "Тест провален, т.к. код оператора из 4 цифр");
console.assert(!validatePhone('+7 (999) 123-45'), "Тест провален, т.к. неполный номер");
console.assert(!validatePhone('+7 (999) 123-4-67'), "Тест провален, т.к. неверный формат");
console.assert(!validatePhone('+7 (999) 12-45-67'), "Тест провален, т.к. неверный формат");
console.assert(!validatePhone('+7 (999) 123--45-67'), "Тест провален, т.к. двойной дефис");
console.assert(!validatePhone('+7  (999) 123-45-67'), "Тест провален, т.к. двойной пробел");
console.assert(!validatePhone('+7(999 )123-45-67'), "Тест провален, т.к. пробел после скобки");
console.assert(!validatePhone('+7 (999)123 -45-67'), "Тест провален, т.к. пробел в неправильном месте");





    console.log("Все тесты пройдены! ✅");
}

// Запуск тестов
runTests();