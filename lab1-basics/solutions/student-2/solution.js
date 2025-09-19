// ===== ЗАДАНИЕ 1: Базовые операции =====
function simpleTask() {
    // 1.1 Объявите переменные разных типов (не менне 5)
    let numberVar = 123;
    let bigNumberVar = 9007199254740991n;
    let stringVar = "Hello world!";
    let boolVar = true;
    let arrayVar = [1, 2, 3];
    let undefVar;

    // 1.2 Выведите типы всех переменных
    console.log("Тип numberVar:", typeof numberVar);
    console.log("Тип bigNumberVar:", typeof bigNumberVar);
    console.log("Тип stringVar:", typeof stringVar);
    console.log("Тип boolVar:", typeof boolVar);
    console.log("Тип arrayVar:", typeof arrayVar);
    console.log("Тип undefVar:", typeof undefVar);

    return;
}
simpleTask();

// ===== ЗАДАНИЕ 2: Функции =====
function getReviewerNumber(number, lab) {
    // 2.1 Функция определяющая номер ревьюера для вашей группы по вашему номеру и номеру лабораторной работы
    let revNum = (number + lab - 1) % 23 + 1;
    return(revNum);
}
console.log("Номер ревьюера: ", getReviewerNumber(2,1));

function getVariant(number, variants) {
    // 2.2 Функция определяющая номер варианта, исходя из количества вариантов
    let variantNum = ((number - 1) % variants) + 1;
    return(variantNum);
}
console.log("Номер варианта: ", getVariant(16, 15));

function calculate(a, b, operation) {
    // 2.3 Напишите функцию калькулятор, калькулятор обрабатывает следующие операции: +, -, *, /
    if(typeof a !== 'number' || typeof b !== 'number')
    {
        throw new Error("Переменные должны являться числами");
    }
    switch(operation)
    {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) throw new Error("Деление на ноль не поддерживается");
            return a / b;
        default:
            throw new Error(`Операция '${operation}' не поддерживается`);
    }
}


function calculateArea(figure, ...params) {
    // 2.4 Напишите функцию для определения площади фигур 'circle', 'rectangle', 'triangle'
    // Используйте switch.
    switch(figure){
        case 'circle':
            if(params.length === 1 && typeof(params[0]) === "number"){
                return Math.PI*params[0]*params[0];
            }
            throw new Error("Некорректные параметры");
        case 'rectangle':
            if(params.length === 2 && typeof(params[0]) === "number" && typeof(params[1]) === "number"){
                return params[0] * params[1];
            }
            throw new Error("Некорректные параметры");
        case 'triangle':
            if(params.length === 2 && typeof(params[0]) === "number" && typeof(params[1]) === "number"){
                return params[0] * params[1] * 0.5;
            }
            throw new Error("Некорректные параметры");
        default:
            throw new Error("Фигура не поддерживается");
    }
}

// 2.5 Стрелочные функции
const reverseString = (str) => {
    // Функция возвращает перевернутую строку
    if (typeof str !== 'string') {
    throw new Error('Входной параметр должен быть строкой');
    }
    return str.split('').reverse().join('');
};
console.log(reverseString('ABCD'))

const getRandomNumber = (min, max) => {
    // Функция возвращает случайное число между min и max
    if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('Входные параметры должены быть числом');
    }
    if (max < min) {
        throw new Error('Первый параметр должен быть меньше второго');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(getRandomNumber(1, 5));
console.log(getRandomNumber(1, 1));

// ===== ЗАДАНИЕ 3: Объекты =====
const book = {
    // 3.1 Создайте объект "книга" с полями для хранения заголовка, автора, 
    // года выпуска, количества страниц, и доступности
    // объект должен иметь два метода getInfo возвращает одной строкой информацию о названии книги, аторе, годе выпуска, количестве страниц
    // метод toggleAvailability - который меняет значение доступности и возвращает его
    title: "Особенности спорных территорий",
    author: "Владислав Жмилевский",
    year: 2022,
    pages: 333,
    isAvailable: true,

    getInfo() {
        console.log(`${this.title} под авторством ${this.author}, ${this.year} год, ${this.pages} страниц`);
    },

    toggleAvailability()
    {
        return this.isAvailable = !this.isAvailable;
    }
};
book.getInfo();
console.log(book.toggleAvailability());

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
            sum += grades[i];
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
            return "Несуществующий предмет";
        }
        this.grades[subject] = grade;
    }
};
student.addGrade("PS", 100);
console.log(student.getAverageGrade());

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
    /*const squares =  ваш код */
    const squares = numbers.map(number => number*number);
    console.log(squares);
    // 3. Используйте filter для получения активных пользователей
    /*const activeUsers =  ваш код */
    const activeUsers =  users.filter(user => user.isActive).map(user => user.name);
    console.log(activeUsers);
    // 4. Используйте find для поиска пользователя с именем "Виктория"
    /*const victoria =  ваш код */
    const victoria =  users.find(user => user.name === "Виктория");
    console.log(victoria);
    // 5. Используйте reduce для подсчета суммы всех чисел
    /*const sum =  ваш код */
    const sum =  numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
    console.log(sum);
    // 6. Используйте sort для сортировки пользователей по возрасту (по убыванию)
    /*const sortedByAge =  ваш код */
    const sortedByAge =  users.sort((a,b) => b.age-a.age).map(user => user.name);
    console.log(sortedByAge);
    // 7. Используйте метод для проверки, все ли пользователи старше 18 лет
    /*const allAdults =  ваш код */
    const allAdults =  users.filter(user => user.age > 18).map(user => user.name);
    console.log(allAdults);
    // 8. Создайте цепочку методов: 
    //    - отфильтровать активных пользователей
    //    - преобразовать в массив имен
    //    - отсортировать по алфавиту
    /*const activeUserNames =  ваш код */
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
    
    addTask(title, priority = "medium") {
        // 5.1 Добавление задачи
        const newTask = {id: this.tasks.length+1, title: title, completed: false, priority: priority}
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
        const mas = this.tasks.filter(task => task.completed === completed);
         mas.forEach(element => {
            console.log(element);
        
    });
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
        console.log( stat = {total: total, 
        completed: completed,
        pending: pending,
        completitionRate: completitionRate
            
    });
    },

    showAllTasks(){
         this.tasks.forEach(element => {
            console.log(element);
        
    });
    } 
};
taskManager.addTask("Zmil'");
taskManager.completeTask(4);
taskManager.deleteTask(3);
taskManager.getTasksByStatus(true);
taskManager.getStats();

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
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
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
    const phoneRegex = /^(\+7|8)[\s(-]?\d{3}[\s)-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
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
    //Функция тестирования ошибок
    function testThrowsError(func, expectedMessage) {
    try {
        func();
        console.log(`Ожидалось исключение: "${expectedMessage}", но его не было`);
    } catch (e) {
        if (e.message !== expectedMessage) {
            console.log(`Ожидалось: "${expectedMessage}", но получено: "${e.message}"`);
        }
        return;
    }
}

    // Тест 1: getReviewerNumber
    console.log("Тест 1: getReviewerNumber");
    console.assert(getReviewerNumber(5, 1) === 6, "Тест получения ревьюера провален");
    console.assert(getReviewerNumber(1, 1) === 2, "Тест граничного значения (1, 1) провален");
    console.assert(getReviewerNumber(23, 1) === 1, "Тест граничного значения (23, 1) провален");
    console.log("Тест 1 пройден! ✅");
    
    //Тест 2: getVariant
    console.log("Тест 2: getVariant");
    console.assert(getVariant(1, 5) === 1, "Тест граничного значения (1, 5) провален");
    console.assert(getVariant(5, 5) === 5, "Тест граничного значения (5, 5) провален");
    console.assert(getVariant(5, 1) === 1, "Тест граничного значения (5, 1) провален");
    console.log("Тест 2 пройден! ✅");

    // Тест 3: calculate
    console.log("Тест 3: calculate");
    try {
    calculate("1", 2, "+");
    console.assert(false, "Тест на обработку исключений (невалидные входные данные) провален: ошибка не выведена");
    } catch (e) {
    console.assert(e.message === "Переменные должны являться числами", "Тест на обработку исключений (невалидные входные данные) провален: выведена неверная ошибка");
    }
    try {
    calculate(10, 0, "/");
    console.assert(false, "Тест на обработку исключений (деление на ноль) провален: ошибка не выведена");
    } catch (e) {
    console.assert(e.message === "Деление на ноль не поддерживается", "Тест на обработку исключений (деление на ноль) провален: выведена неверная ошибка");
    }
    try {
    calculate(1, 2, "%");
    console.assert(false, "Тест на обработку исключений (неизвестная операция) провален: ошибка не выведена");
    } catch (e) {
    console.assert(e.message === "Операция '%' не поддерживается", "Тест на обработку исключений (неизвестная операция) провален: выведена неверная ошибка");
    }
    console.assert(calculate(10, 5, '+') === 15, "Тест сложения провален");
    console.assert(calculate(10, 5, '-') === 5, "Тест вычитания провален");
    console.assert(calculate(10, 5, '*') === 50, "Тест умножения провален");
    console.assert(calculate(10, 5, '/') === 2, "Тест деления провален");
    console.log("Тест 3 пройден! ✅");

    // Тест 4: calculateArea
    console.log("Тест 4: calculateArea");
    try {
    calculateArea('square', 5);
    console.assert(false, "Тест на обработку исключений (неизвестная фигура) провален: ошибка не выведена");
    } catch (e) {
    console.assert(e.message === "Фигура не поддерживается", "Тест на обработку исключений (неизвестная фигура) провален: выведена неверная ошибка");
    }
    try {
    calculateArea('circle');
    console.assert(false, "Тест на обработку исключений (Некорректные параметры) провален: ошибка не выведена");
    } catch (e) {
    console.assert(e.message === "Некорректные параметры", "Тест на обработку исключений (Некорректные параметры) провален: выведена неверная ошибка");
    }
    console.assert(calculateArea('circle', 1) === Math.PI, "Тест круга провален");
    console.assert(calculateArea('rectangle', 1, 2) === 2, "Тест прямоугольника провален");
    console.assert(calculateArea('triangle', 6, 4) === 12, "Тест треугольник провален");
    console.log("Тест 4 пройден! ✅");
    
    // Тест 5: reverseString
    console.log("Тест 5: reverseString");
    try {
    reverseString(123);
    console.assert(false, 'Тест на обработку исключений (неверный тип данных) провален: ошибка не выведена');
        } catch (e) {
    console.assert(e.message === 'Входной параметр должен быть строкой', "Тест на обработку исключений (неверный тип данных) провален: выведена неверная ошибка");
    }   
    console.assert(reverseString('hello world') === 'dlrow olleh', 'Тест слова hello world провален');
    console.assert(reverseString('') === '', 'Тест пустой строки провален');
    console.assert(reverseString('a') === 'a', 'Тест одного символа провален');
    console.log("Тест 5 пройден! ✅");

    //Тест 6: getRandomNumber
    console.log("Тест 6: getRandomNumber");
    try {
    getRandomNumber(10, 'abc');
    console.assert(false, 'Тест на обработку исключений (неверный тип данных) провален: ошибка не выведена');
        } catch (e) {
    console.assert(e.message === 'Входные параметры должены быть числом', "Тест на обработку исключений (неверный тип данных) провален: выведена неверная ошибка");
    } 
    try {
    getRandomNumber(10, 1);
    console.assert(false, 'Тест на обработку исключений (неверный порядок параметров) провален: ошибка не выведена');
        } catch (e) {
    console.assert(e.message === 'Первый параметр должен быть меньше второго', "Тест на обработку исключений (неверный порядок параметров) провален: выведена неверная ошибка");
    } 
    console.assert(getRandomNumber(1, 1) === 1, "Тест на одинаковые параметры провален");
    //testThrowsError(getRandomNumber(), 'Входные параметры должены быть числом');
    //починить testThrowsError! Он, как будто, вызывает функцию до трая

    // Добавьте остальные тесты...
    // Тест: reg
    console.log("Тест reg");
    console.assert(validatePassword("Pas1337$"), "Тест пароля (валидный пароль) провален");
    console.assert(!validatePassword("short3$"), "Тест пароля (короткий пароль) провален");
    console.assert(!validatePassword("nouppercase3$"), "Тест пароля (нет заглавной) провален");
    console.assert(!validatePassword("NOLOWERCASE3$"), "Тест пароля (нет строчной) провален");
    console.assert(!validatePassword("NoNumber$"), "Тест пароля (нет цифры) провален");
    console.assert(!validatePassword("NoSpecial3"), "Тест пароля (нет спецсимвола) провален");
    console.log("Тест reg пройден! ✅");
    
    console.log("Все тесты пройдены! ✅");
}

// Запуск тестов
runTests();