// ===== ЗАДАНИЕ 1: Базовые операции =====
function simpleTask() {
    // 1.1 Объявите переменные разных типов (не менее 5)
    let var1 = "asker";
    let var2 = 2025;
    let var3 = 2025n;
    let var4 = true;
    let var5;
    let var6 = null;
    let var7 = Symbol("asker");
    let var8 = {"asker": 2025};

    // 1.2 Выведите типы всех переменных
    console.log(typeof var1);
    console.log(typeof var2);
    console.log(typeof var3);
    console.log(typeof var4);
    console.log(typeof var5);
    console.log(typeof var6);
    console.log(typeof var7);
    console.log(typeof var8);
}


// ===== ЗАДАНИЕ 2: Функции =====
function getReviewerNumber(number, lab) {
    // 2.1 Функция определяющая номер ревьюера для вашей группы по вашему номеру и номеру лабораторной работы
    if (typeof number !== 'number' || typeof lab !== 'number')
        return "Ошибка ввода: входные параметры должны быть числами!"
    return (number + lab) % 23
}

function getVariant(number, variants) {
    // 2.2 Функция определяющая номер варианта, исходя из количества вариантов
    if (typeof number !== 'number' || typeof variants != 'number')
        return "Ошибка ввода: входные параметры должны быть числами!"
    return number % variants || variants
}

function calculate(a, b, operation) {
    // 2.3 Напишите функцию калькулятор, калькулятор обрабатывает следующие операции: +, -, *, /
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Ошибка ввода! Входные параметры должны быть числами!'
    }
  
    switch (operation) {
        case '+': return a + b
        case '-': return a - b
        case '*': return a * b
        case '/':
            if (b == 0) { return 'Ошибка: деление на ноль!' };
            return a / b;
        default:
            return 'Ошибка ввода! Допустимые операторы: +, -, *, /';
    }
}

function calculateArea(figure, ...params) {
    // 2.4 Напишите функцию для определения площади фигур 'circle', 'rectangle', 'triangle'
    // Используйте switch.
    switch (figure) {
        case 'circle':
            if (params.length !== 1) return "Параметр должен быть один (радиус).";
            if (!isValid(params[0])) return "Невалидный параметр."
            return Math.PI * params[0] ** 2;

        case 'rectangle':
            if (params.length !== 2) return "Параметров должно быть два (ширина и высота).";
            if (!params.every(isValid)) return "Невалидные параметры."
            return params[0] * params[1];

        case 'triangle':
            if (params.length !== 3) return "Параметров должно быть три (стороны треугольника).";
            if (!params.every(isValid)) return "Невалидные параметры."
            const [a, b, c] = params
            if ((a >= b + c) || (b >= a + c) || (c >= a + b)) return "Неравенство треугольника не выполняется."
            const p = (a + b + c) / 2;
            return Math.sqrt(p * (p - a) * (p - b) * (p - c));

        default:
            return 'Неизвестная фигура.'
    }
    
    // вспомогательная функция
    function isValid(param) {
        return typeof param === "number" && param > 0 && !isNaN(param)
    }
}

// 2.5 Стрелочные функции
const reverseString = (str) => {
    // Функция возвращает перевернутую строку
    return str.split('').reverse().join('')
};

const getRandomNumber = (min, max) => {
    // Функция возвращает случайное число между min и max
    return Math.floor(Math.random() * (max - min + 1) + min)
};

// ===== ЗАДАНИЕ 3: Объекты =====
const book = {
    // 3.1 Создайте объект "книга" с полями для хранения заголовка, автора, 
    // года выпуска, количества страниц, и доступности
    // объект должен иметь два метода getInfo возвращает одной строкой информацию о названии книги, авторе, годе выпуска, количестве страниц
    // метод toggleAvailability - который меняет значение доступности и возвращает его
    title: "Унесённые ветром",
    author: "Маргарет Митчелл",
    year: 1936,
    sheets: 1468,
    isAvailable: true,

    getInfo() {
        return `${this.title}, ${this.author}, ${this.year}г., ${this.sheets}стр.`
    },

    toggleAvailability() {
        this.isAvailable = !this.isAvailable
        return this.isAvailable
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
        let amount = Object.keys(this.grades).length
        let sum = Object.values(this.grades).reduce((accumulator, value) => accumulator + value, 0)
        return sum / amount
    },
    
    // Метод для добавления новой оценки
    addGrade(subject, grade) {
        // Ваш код здесь
        this.grades[subject] = grade
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
    console.log("Числа больше 50:");
    numbers.forEach(element => { 
        if (element > 50) { 
            console.log(element); 
        }
    });

    // 2. Используйте map для создания массива квадратов чисел
    /*const squares =  ваш код */5
    const squares = numbers.map(number => number ** 2)
    console.log(`Квадраты чисел исходного массива: ${squares}.`);

    // 3. Используйте filter для получения активных пользователей
    /*const activeUsers =  ваш код */
    const activeUsers = users.filter(user => user.isActive);
    console.log('Активные пользователи:');
    console.log(activeUsers);

    // 4. Используйте find для поиска пользователя с именем "Виктория"
    /*const victoria =  ваш код */
    const victoria = users.find(user => user.name == "Виктория");
    console.log('Пользователь с именем "Виктория":');
    console.log(victoria);

    // 5. Используйте reduce для подсчета суммы всех чисел
    /*const sum =  ваш код */
    const sum = numbers.reduce((accumulator, value) => accumulator + value, 0)
    console.log(`Сумма всех чисел: ${sum}.`);
    
    // 6. Используйте sort для сортировки пользователей по возрасту (по убыванию)
    /*const sortedByAge =  ваш код */
    const sortedByAge = [...users].sort((user1, user2) => user2.age - user1.age)
    console.log("Отсортированные по возрасту пользователи:");
    console.log(sortedByAge);

    // 7. Используйте метод для проверки, все ли пользователи старше 18 лет
    /*const allAdults =  ваш код */
    const allAdults = users.every(user => user.age > 18);
    console.log(`Все ли взрослые? Ответ: ${allAdults}.`);

    // 8. Создайте цепочку методов: 
    //    - отфильтровать активных пользователей
    //    - преобразовать в массив имен
    //    - отсортировать по алфавиту
    /*const activeUserNames =  ваш код */
    const activeUserNames = users.filter(user => user.isActive).map(user => user.name).sort()
    console.log(`Имена активных пользователей: ${activeUserNames}.`);
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
        const newTask = {
            id: this.tasks.length + 1,
            title: title,
            completed: false,
            priority: priority
        }
        this.tasks.push(newTask)
        return newTask
    },
    
    completeTask(taskId) {
        // 5.2 Отметка выполнения
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = true;
        }      
    },

    // Удаление задачи
    deleteTask(taskId) {
        // 5.3 Ваш код здесь
        this.tasks = this.tasks.filter(task => task.id != taskId);         
    },

    // Получение списка задач по статусу
    getTasksByStatus(completed) {
        // 5.4 Ваш код здесь
        return this.tasks.filter(task => task.completed == completed);
    },
    
    getStats() {
        /* 5.5 Статистика возвращает объект:        
        total,
        completed,
        pending,
        completionRate
        */
        const total = this.tasks.length;
        const completed = this.tasks.filter(task => task.completed == true).length;
        const pending = this.tasks.filter(task => task.completed == false).length;
        const completionRate = total === 0 ? '100%': `${(completed / total * 100).toFixed(1)}%`;
       
        const stat = {
            total: total,
            completed: completed,
            pending: pending,
            completionRate: completionRate
        }
       return stat
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
    // 2 задание
    // 2.1 getReviewerNumber
    console.assert(getReviewerNumber(20, 1) === 21, "Тест getReviewerNumber провален.");
    console.assert(getReviewerNumber(20, 8) === 5, "Тест getReviewerNumber провален.");

    // 2.2 getVariant
    console.assert(getVariant(20, 4) === 4, "Тест getVariant провален");
    console.assert(getVariant(1, 4) === 1, "Тест getVariant провален");

    // 2.3 calculate
    console.assert(calculate(30, 22, '+') === 52, "Тест calculate провален");
    console.assert(calculate(62, 10, '-') === 52, "Тест calculate провален");
    console.assert(calculate(26, 2, '*') === 52, "Тест calculate провален");
    console.assert(calculate(52, 0, '/') === 'Ошибка: деление на ноль!', "Тест calculate провален");
    console.assert(calculate(52, 52, '/') === 1, "Тест calculate провален");

    // 2.4 calculateArea
    console.assert(calculateArea('circle', 6) === 113.09733552923255, "Тест calculateArea провален");
    console.assert(calculateArea('rectangle', 2, 26) === 52, "Тест calculateArea провален");
    console.assert(calculateArea('triangle', 6, 8, 10) === 24, "Тест calculateArea провален");

    // 2.5 стрелочные функции
    // reverseString
    console.assert(reverseString("asker") === 'reksa', "Тест reverseString провален");

    // getRandomNumber
    console.assert(1 <= getRandomNumber(1, 10) <= 10, "Тест getRandomNumber провален");
    console.assert(getRandomNumber(7, 7) === 7, "Тест getRandomNumber провален");


    // 3 задание    
    // 3.1 book object
    console.assert(book.getInfo() === 'Унесённые ветром, Маргарет Митчелл, 1936г., 1468стр.', "Тест getInfo провален");
    const currentAvailable = book.isAvailable
    console.assert(book.toggleAvailability() !== currentAvailable, "Тест toggleAvailability провален");

    // 3.2 student object
    console.assert(student.getAverageGrade() === 90, "Тест getAverageGrade провален");
    console.assert(student.addGrade()); // как проверить???????????


    // 4 задание
    // 4. processArrays
    processArrays()


    // 5 задание
    // 5.1 addTask

    // 5.2 completeTask

    // 5.3 deleteTask

    // 5.4 getTasksByStatus

    // 5.5 getStats


    // 6 задание
    // 6. validateDate

    
    console.log("Все тесты пройдены! ✅");
}

// Запуск тестов
runTests();