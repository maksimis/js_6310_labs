// ===== ЗАДАНИЕ 1: Базовые операции =====
function simpleTask() {
    // 1.1 Объявите переменные разных типов (не менне 5)
    let numberVar = 123;
    let stringVar = "Hello world!";
    let boolVar = true;
    let arrayVar = [1, 2, 3];
    let objectVar = {username: "Admin", id: 1234}
    let nullVar = null;
    let undefVar;

    // 1.2 Выведите типы всех переменных
    console.log("Тип numberVar:", typeof numberVar);
    console.log("Тип stringVar:", typeof stringVar);
    console.log("Тип boolVar:", typeof boolVar);
    console.log("Тип arrayVar:", typeof arrayVar);
    console.log("Тип objectVar:", typeof objectVar);
    console.log("Тип nullVar:", typeof nullVar);
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
        return "Переменные должны являться числами";
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
            if (b == 0) return "Деление на ноль не поддерживается";
            return a / b;
        default:
            return "Операция не поддерживается";
    }
}
console.log("5 + 3 =", calculate(5, 3, '+'));
console.log("10 - 4 =", calculate(10, 4, '-'));
console.log("7 * 6 =", calculate(7, 6, '*'));
console.log("15 / 3 =", calculate(15, 3, '/'));
console.log("8 / 0 =", calculate(8, 0, '/'));
console.log("5 % 2 =", calculate(5, 2, '%'));
console.log("а % 2 =", calculate('a', 2, '%'));
console.log("5 % b =", calculate(5, 'b', '%'));


function calculateArea(figure, ...params) {
    // 2.4 Напишите функцию для определения площади фигур 'circle', 'rectangle', 'triangle'
    // Используйте switch.
    switch(figure){
        case 'circle':
            if(params.length === 1 && typeof(params[0]) === "number"){
                return Math.PI*params[0]*params[0];
            }
            return "Некорректные параметры";
        case 'rectangle':
            if(params.length === 2 && typeof(params[0]) === "number" && typeof(params[1]) === "number"){
                return params[0] * params[1];
            }
            return "Некорректные параметры";
        case 'triangle':
            if(params.length === 2 && typeof(params[0]) === "number" && typeof(params[1]) === "number"){
                return params[0] * params[1] * 0.5;
            }
            return "Некорректные параметры";
        default:
            return "Фигура не поддерживается";
    }
}
console.log(calculateArea('circle', 5));

// 2.5 Стрелочные функции
const reverseString = (str) => {
    // Функция возвращает перевернутую строку
    return str.split('').reverse().join('');
};
console.log(reverseString('ABCD'))

const getRandomNumber = (min, max) => {
    // Функция возвращает случайное число между min и max
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(getRandomNumber(2, 50));

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
    }
};

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
    console.log("Числа больше 50:");

    // 2. Используйте map для создания массива квадратов чисел
    /*const squares =  ваш код */

    // 3. Используйте filter для получения активных пользователей
    /*const activeUsers =  ваш код */

    // 4. Используйте find для поиска пользователя с именем "Виктория"
    /*const victoria =  ваш код */

    // 5. Используйте reduce для подсчета суммы всех чисел
    /*const sum =  ваш код */

    // 6. Используйте sort для сортировки пользователей по возрасту (по убыванию)
    /*const sortedByAge =  ваш код */

    // 7. Используйте метод для проверки, все ли пользователи старше 18 лет
    /*const allAdults =  ваш код */

    // 8. Создайте цепочку методов: 
    //    - отфильтровать активных пользователей
    //    - преобразовать в массив имен
    //    - отсортировать по алфавиту
    /*const activeUserNames =  ваш код */
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
    },
    
    completeTask(taskId) {
        // 5.2 Отметка выполнения
    },

    // Удаление задачи
    deleteTask(taskId) {
        // 5.3 Ваш код здесь
    },

    // Получение списка задач по статусу
    getTasksByStatus(completed) {
        // 5.4 Ваш код здесь
    },
    
    getStats() {
        /* 5.5 Статистика возвращает объект:        
        total,
        completed,
        pending,
        completionRate
        */
    }
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
    
    // Тест 1: getReviewerNumber
    console.assert(getReviewerNumber(5, 1) === 6, "Тест получения ревьюера провален");
    
    // Тест 2: calculate
    console.assert(calculate(10, 5, '+') === 15, "Тест калькулятора провален");
    
    // Добавьте остальные тесты...
    
    console.log("Все тесты пройдены! ✅");
}

// Запуск тестов
runTests();