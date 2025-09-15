// ===== ЗАДАНИЕ 1: Базовые операции =====
function simpleTask() {
    let undef;
    let string = "A";
    let Number = 123;
    let bool = true;
    let obj = {name: "1", notname: 2}

    console.log(typeof(undef), typeof(string), typeof(Number), typeof(bool), typeof(obj))
    
    // 1.1 Объявите переменные разных типов (не менне 5)
    // 1.2 Выведите типы всех переменных
}



// ===== ЗАДАНИЕ 2: Функции =====
function getReviewerNumber(number, lab) {
    return (number + lab) % 23;

    // 2.1 Функция определяющая номер ревьюера для вашей группы по вашему номеру и номеру лабораторной работы
}

function getVariant(number, variants) {
    return ((number - 1) % variants) + 1;

    // 2.2 Функция определяющая номер варианта, исходя из количества вариантов
}



function calculate(a, b, operation) {
    if (typeof(a) !== "number" || typeof(b) !== "number")
        return "Аргументы не являются числами!";
    if (operation == "+") {
        return a + b;
    }
    else if (operation == "-") {
        return a - b;
    }
    else if (operation == "*") {
        return a * b;
    }
    else if (operation == "/") {
        if (b == 0){
            return "Нельзя делить на ноль"
        }
        return a / b;
    }
    else {return "Неизвестная операция"}

    // 2.3 Напишите функцию калькулятор, калькулятор обрабатывает следующие операции: +, -, *, /
}



function calculateArea(figure, ...params) {
    switch(figure) {
        case 'circle':
            if (params.length === 1 && typeof(params[0]) === "number" && params[0] >= 0){
                return Math.PI * params[0] * params[0];
            }
            break;
        case 'rectangle':
            if (params.length === 2 && typeof(params[0]) === "number" && typeof(params[1]) === "number" && params[0] >= 0 && params[1] >= 0){
                return params[0] * params[1];
            }
            break;
        case 'triangle':
            if (params.length === 2 && typeof(params[0]) === "number" && typeof(params[1]) === "number" && params[0] >= 0 && params[1] >= 0){
                return 0.5 * params[0] * params[1];
            }
            break;
        default:
            return "Неправильный ввод фигуры";
        }
    return "Неправильный ввод параметров"
        
    // 2.4 Напишите функцию для определения площади фигур 'circle', 'rectangle', 'triangle'
    // Используйте switch.
}


// 2.5 Стрелочные функции
const reverseString = (str) => {
    return typeof(str) == "string" ? [...str].reverse().join("") : "Аргумент не является строкой";
    // Функция возвращает перевернутую строку
};



const getRandomNumber = (min, max) => {
    return min + Math.random() * (max - min);
    // Функция возвращает случайное число между min и max
};


// ===== ЗАДАНИЕ 3: Объекты =====
const book = {
    name: "1984",
    author: "George Orwell",
    year: 1949,
    pages: 400,
    isAvailable: true,

    getInfo(){
        return `Название: ${this.name}, Автор: ${this.author}, Год выпуска: ${this.year}, Количество страниц: ${this.pages}`
    },
    toggleAvailability(){
        this.isAvailable = !this.isAvailable
        return this.isAvailable
    },
    // 3.1 Создайте объект "книга" с полями для хранения заголовка, автора, 
    // года выпуска, количества страниц, и доступности
    // объект должен иметь два метода getInfo возвращает одной строкой информацию о названии книги, аторе, годе выпуска, количестве страниц
    // метод toggleAvailability - который меняет значение доступности и возвращает его
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
        const Grades = Object.values(this.grades);
        if (Grades.length === 0) return 0;
        let sum = 0;
        for(let i = 0; i < Grades.length; i++){
            sum += Grades[i];
        }
        return sum / Grades.length;
        // Ваш код здесь
    },
    
    // Метод для добавления новой оценки
    addGrade(subject, grade) {
        if (typeof grade !== 'number' || grade > 100 || grade < 0) {
            return "Неправильный ввод оценки";
        };
        if (typeof subject !== "string" || subject.trim() === '') {
            return "Неправильный ввод предмета";
        };
        this.grades[subject] = grade;
        // Ваш код здесь
    }
};


// ===== ЗАДАНИЕ 4: Массивы =====
function processArrays() {
    console.log("Тестирование processArrays")
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
    console.log("Числа больше 50:")
    numbers.forEach(element => {
        if(element > 50){
            console.log(element)
        }
    });

    // 2. Используйте map для создания массива квадратов чисел
    const squares = numbers.map(number => number*number);
    console.log(squares)

    // 3. Используйте filter для получения активных пользователей
    const activeUsers = users.filter(user => user.isActive).map(user => user.name);
    console.log(activeUsers)

    // 4. Используйте find для поиска пользователя с именем "Виктория"
    const victoria = users.find(user => user.name === "Виктория");
    console.log(victoria)

    // 5. Используйте reduce для подсчета суммы всех чисел
    const sum = numbers.reduce((accumulator, currentnumber) => accumulator + currentnumber, 0);
    console.log(sum)

    // 6. Используйте sort для сортировки пользователей по возрасту (по убыванию)
    const sortedByAge = users.sort((a,b) => b.age - a.age).map(user => user.name);
    console.log(sortedByAge)

    // 7. Используйте метод для проверки, все ли пользователи старше 18 лет
    const allAdults =  users.every(user => user.age > 18);
    console.log(allAdults)

    // 8. Создайте цепочку методов: 
    //    - отфильтровать активных пользователей
    //    - преобразовать в массив имен
    //    - отсортировать по алфавиту
    const activeUserNames = users.filter(user => user.isActive).map(user => user.name).sort();
    console.log(activeUserNames)
}



// ===== ЗАДАНИЕ 5: Менеджер задач =====
const taskManager = {
    tasks: [
        { id: 1, title: "Изучить JavaScript", completed: false, priority: "high" },
        { id: 2, title: "Сделать лабораторную работу", completed: true, priority: "high" },
        { id: 3, title: "Прочитать книгу", completed: false, priority: "medium" }
    ],
    
    addTask(title, priority = "medium") {
        const newTask = {id: this.tasks.length+1, title, completed: false, priority}
        this.tasks.push(newTask)
        return newTask;
        // 5.1 Добавление задачи
    },
    
    completeTask(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (!task) return "Задача не найдена";
        task.completed = true;
        return task;

        // 5.2 Отметка выполнения
    },

    // Удаление задачи
    deleteTask(taskId) {
        const initialLength = this.tasks.length;
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        return initialLength !== this.tasks.length;

        // 5.3 Ваш код здесь
    },

    // Получение списка задач по статусу
    getTasksByStatus(completed) {
        return this.tasks.filter(task => task.completed === completed);

        // 5.4 Ваш код здесь
    },
    
    getStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(task => task.completed).length;
        const pending = total - completed;
        const completitionRate = Math.round(completed / total * 100);
        return {total, completed, pending, completitionRate}
        /* 5.5 Статистика возвращает объект:        
        total,
        completed,
        pending,
        completionRate
        */
    },

    showAllTasks(){
        this.tasks.forEach(element => {
            console.log(element);
        })
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

// 3 ВАРИАНТ

Номер варианта = Ваш номер % Общее количество вариантов

/**
 * Вариант 1: Валидация email адреса
 * Правила:
 * - Латиница, цифры, спецсимволы: ._%+-
 * - Обязательный символ @
 * - Доменная часть: латиница, цифры, точка
 * - Минимальная длина 5 символов
 */
// function validateEmail(email) {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailRegex.test(email);
// }

/**
 * Вариант 2: Валидация пароля
 * Правила:
 * - Минимум 8 символов
 * - Хотя бы одна заглавная буква
 * - Хотя бы одна строчная буква  
 * - Хотя бы одна цифра
 * - Хотя бы один специальный символ: !@#$%^&*()
 */
// function validatePassword(password) {
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
//     return passwordRegex.test(password);
// }

/**
 * Вариант 3: Валидация номера телефона (российский формат)
 * Поддерживает форматы:
 * - +7 (999) 123-45-67
 * - 8 (999) 123-45-67  
 * - 89991234567
 * - +7(999)123-45-67
 */
function validatePhone(phone) {
    const phoneRegex = /^(\+7|8)(\s?\(?\d{3}\)?\s?\d{3}[\s-]?\d{2}[\s-]?\d{2}|\d{10})$/;
    return phoneRegex.test(phone);
}

/**
 * Вариант 4: Валидация даты в формате DD.MM.YYYY
 * Правила:
 * - День: 01-31
 * - Месяц: 01-12
 * - Год: 1900-2099
 */
// function validateDate(date) {
//     const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/;
//     return dateRegex.test(date);
// }

// Бонус: выполните все остальные варианты. Выполнение бонуса не учитывается в итоговой оценке.


// ===== ТЕСТИРОВАНИЕ =====
function runTests() {
    console.log("=== ТЕСТИРОВАНИЕ ===");
    
    // Тест 1: getReviewerNumber
    console.assert(getReviewerNumber(5, 1) === 6, "Тест получения ревьюера провален");
    console.assert(getReviewerNumber(23, 1) === 1, "Тест получения ревьювера провален");
    
    // Тест 2: getVariant
    console.assert(getVariant(22, 4) === 2, "Тест getVariant провален")
    console.assert(getVariant(21, 21) === 21, "Тест getVariant провален")

    // Тест 3: calculate
    console.assert(calculate(10, 5, '+') === 15, "Тест калькулятора провален");
    console.assert(calculate(10, 5, '-') === 5, "Тест калькулятора провален");
    console.assert(calculate(10, 5, '*') === 50, "Тест калькулятора провален");
    console.assert(calculate(10, 5, '/') === 2, "Тест калькулятора провален");
    console.assert(calculate(10, 0, '/') === "Нельзя делить на ноль", "Тест калькулятора провален");
    console.assert(calculate(10, 5, '%') === "Неизвестная операция", "Тест калькулятора провален");
    console.assert(calculate('w', 2, "-") === "Аргументы не являются числами!", "Тест калькулятора провален");
    console.assert(calculate("", "", "-") === "Аргументы не являются числами!", "Тест калькулятора провален");
    console.assert(calculate(10, "3", '-') === "Аргументы не являются числами!", "Тест калькулятора провален");

    console.assert(calculate(Number.MAX_VALUE, 1, '+') === Number.MAX_VALUE+1, "Тест калькулятора провален (переполнение)");
    console.assert(calculate(Number.MAX_VALUE, Number.MAX_VALUE, '+') === Infinity, "Тест калькулятора провален (переполнение)");
    console.assert(calculate(Number.MAX_VALUE, 2, '-') === Number.MAX_VALUE - 2, "Тест калькулятора провален (переполнение)");
    console.assert(calculate(Number.MAX_VALUE, 1, '*') === Number.MAX_VALUE, "Тест калькулятора провален (переполнение)");
    console.assert(calculate(1, Number.MAX_VALUE, '*') === Number.MAX_VALUE, "Тест калькулятора провален (переполнение)");
    console.assert(calculate(Number.MAX_VALUE, 10, "*") === Infinity, "Тест калькулятора провален (переполнение)");
    console.assert(calculate(Number.MAX_VALUE, 2, '/') === Number.MAX_VALUE / 2, "Тест калькулятора провален (переполнение)");
    
    // Тест 4: CalculateArea
    console.assert(calculateArea('circle', 5) === Math.PI * 25,  "Тест калькулятора площади провален");
    console.assert(calculateArea('circle', 0) === 0, "Тест калькулятора площади провален");
    console.assert(calculateArea('circle', -5) === "Неправильный ввод параметров", "Тест калькулятора площади провален");
    console.assert(calculateArea('circle', 5, 10) === "Неправильный ввод параметров", "Тест калькулятора площади провален");
    console.assert(calculateArea('circle', "5") === "Неправильный ввод параметров", "Тест калькулятора площади провален");

    console.assert(calculateArea('rectangle', 4, 6) === 24, "Тест калькулятора площади провален");
    console.assert(calculateArea('rectangle', 10, 5) === 50, "Тест калькулятора площади провален");
    console.assert(calculateArea('rectangle', 0, 5) === 0, "Тест калькулятора площади провален");
    console.assert(calculateArea('rectangle', -4, 6) === "Неправильный ввод параметров", "Тест калькулятора площади провален");
    console.assert(calculateArea('rectangle', -4, -6) === "Неправильный ввод параметров", "Тест калькулятора площади провален");
    console.assert(calculateArea('rectangle', 4) === "Неправильный ввод параметров", "Тест калькулятора площади провален");
    console.assert(calculateArea('rectangle', 4, 6, 8) === "Неправильный ввод параметров", "Тест калькулятора площади провален");
    console.assert(calculateArea('rectangle', "4", 6) === "Неправильный ввод параметров", "Тест калькулятора площади провален");
    console.assert(calculateArea('rectangle', "4", "3") === "Неправильный ввод параметров", "Тест калькулятора площади провален");

    console.assert(calculateArea('triangle', 8, 4) === 16, "Тест калькулятора площади провален");
    console.assert(calculateArea('triangle', 12, 7) === 42, "Тест калькулятора площади провален");
    console.assert(calculateArea('triangle', 0, 5) === 0, "Тест калькулятора площади провален");
    console.assert(calculateArea('triangle', -8, 4) === "Неправильный ввод параметров", "Тест калькулятора площади провален");
    console.assert(calculateArea('triangle', -8, -4) === "Неправильный ввод параметров", "Тест калькулятора площади провален");
    console.assert(calculateArea('triangle', 8) === "Неправильный ввод параметров", "Тест калькулятора площади провален");
    console.assert(calculateArea('triangle', 8, 4, 5) === "Неправильный ввод параметров", "Тест калькулятора площади провален");
    console.assert(calculateArea('triangle', 8, "4") === "Неправильный ввод параметров", "Тест калькулятора площади провален");
    console.assert(calculateArea('triangle', "8", "4") === "Неправильный ввод параметров", "Тест калькулятора площади провален");

    console.assert(calculateArea('square', 5) === "Неправильный ввод фигуры", "Неправильная фигура 'square' должна возвращать ошибку");
    console.assert(calculateArea('', 5) === "Неправильный ввод фигуры", "Тест калькулятора площади провален");
    console.assert(calculateArea(123, 5) === "Неправильный ввод фигуры", "Тест калькулятора площади провален");
    console.assert(calculateArea() === "Неправильный ввод фигуры", "Тест калькулятора площади провален");

    console.assert(calculateArea('circle', 2.5) === Math.PI * 6.25, "Тест калькулятора площади провален");
    console.assert(calculateArea('rectangle', 3.5, 2.5) === 8.75, "Тест калькулятора площади провален");
    console.assert(calculateArea('triangle', 5.5, 4.5) === 12.375, "Тест калькулятора площади провален");

    // тест 5: reverseString
    console.assert(reverseString("hello") === "olleh", "Тест reverseString провален");
    console.assert(reverseString("JavaScript") === "tpircSavaJ", "Тест reverseString провален");
    console.assert(reverseString("12345") === "54321", "Тест reverseString провален");
    console.assert(reverseString("") === "", "Тест reverseString провален");
    console.assert(reverseString("a") === "a", "Тест reverseString провален");
    console.assert(reverseString(" ") === " ", "Тест reverseString провален");
    console.assert(reverseString("12 3") === "3 21", "Тест reverseString провален");
    console.assert(reverseString(111) === "Аргумент не является строкой", "Тест reverseString провален");

    // тест 6: getRandomNumber
    console.assert(typeof(getRandomNumber(10, 50)) === "number", "Тест getRandomNumber провален");
    const randNum1 = getRandomNumber(1, 5);
    const randNum2 = getRandomNumber(1, 1);
    console.assert(randNum1 >= 1 && randNum1 <= 5, "Тест getRandomNumber провален");
    console.assert(randNum2 === 1, "Тест getRandomNumber провален");

    // тест 7: book
    console.assert(book.getInfo().includes(book.name) && book.getInfo().includes(book.author), "Тест book.getInfo провален");
    const originalAvailability = book.isAvailable;
    const newAvailability = book.toggleAvailability();
    console.assert(newAvailability !== originalAvailability, "Тест book.toggleAvailability провален");

    // тест 8: student
    console.assert(student.getAverageGrade() === 90, `Тест getAverageGrade провален`);
    student.addGrade("physics", 68)
    console.assert(student.grades.physics === 68, "Тест addGrade провален")
    console.assert(student.addGrade("chemistry", 150) === "Неправильный ввод оценки", "Тест addGrade провален");
    console.assert(student.addGrade("biology", -5) === "Неправильный ввод оценки", "Тест addGrade провален");
    console.assert(student.addGrade("geography", "95") === "Неправильный ввод оценки", "Тест addGrade провален");
    console.assert(student.addGrade(123, 95) === "Неправильный ввод предмета", "Тест addGrade провален");
    console.assert(student.addGrade("", 95) === "Неправильный ввод предмета", "Тест addGrade провален");
    student.addGrade("math", 10)
    console.assert(student.grades.math === 10, "Тест addGrade провален")

    // тест 9: Arrays
    
    processArrays()

    // тест 10: taskManager
    
    const newTask = taskManager.addTask("Новая задача", "low");
    console.assert(newTask.id === 4, "Тест addTask провален");
    console.assert(newTask.title === "Новая задача", "Тест addTask провален");
    console.assert(newTask.priority === "low", "Тест addTask провален");
    console.assert(taskManager.tasks.length === 4, "Тест addTask провален");

    const completedTask = taskManager.completeTask(1);
    console.assert(completedTask.completed === true, "Тест completeTask провален");
    console.assert(taskManager.tasks[0].completed === true, "Тест completeTask провален");

    const nonExistentTask = taskManager.completeTask(999);
    console.assert(nonExistentTask === "Задача не найдена", "Тест completeTask провален");

    const completedTasks = taskManager.getTasksByStatus(true);
    console.assert(completedTasks.length === 2, "тест getTasksByStatus провален");

    const stats = taskManager.getStats();
    console.assert(stats.total === 4, "Тест getStats провален");
    console.assert(stats.completed === 2, "Тест getStats провален");

    const deleteResult = taskManager.deleteTask(2);
    console.assert(deleteResult === true, "Тест deleteTask провален");
    console.assert(taskManager.tasks.length === 3, "Тест deleteTask провален");
    console.assert(taskManager.tasks.find(t => t.id === 2) === undefined, "Тест deleteTask провален");

    const deleteNotExistent = taskManager.deleteTask(999);
    console.assert(deleteNotExistent === false, "Тест deleteTask провален");

    // тест 11: Регулярные выражения 3 вариант
    console.assert(validatePhone('+7 (999) 123-45-67'), "Тест validatePhone с +7 провален");
    console.assert(validatePhone('8 (999) 123-45-67'), "Тест validatePhone с 8 провален");
    console.assert(validatePhone('89991234567'), "Тест validatePhone без пробелов провален");
    console.assert(validatePhone('+7(999)123-45-67'), "Тест validatePhone без пробелов с +7 провален");
    console.assert(validatePhone('1234567890') === false, "Тест validatePhone с неправильным номером провален");
    console.assert(validatePhone('+1 (999) 123-45-67') === false, "Тест validatePhone с неправильным кодом провален");
    console.assert(validatePhone('+7 (999) 123-45-7') === false, "Тест validatePhone с неправильным кодом провален");
    console.assert(validatePhone('+8 (999) 123-45-67') === false, "Тест validatePhone с неправильным кодом провален");
    console.assert(validatePhone('+7-999-123-45-67') === false, "Тест validatePhone с неправильным кодом провален");
    console.assert(validatePhone("") === false, "Тест validatePhone с пустой строкой провален")
    console.assert(validatePhone(" ") === false, "Тест validatePhone с пробелом провален")
    console.assert(validatePhone("kekdhas") === false, "Тест validatePhone с неправильной строкой провален")
    console.assert(validatePhone(111) === false, "Тест validatePhone с числами вместо строки провален")



    
    console.log("Все тесты пройдены! ✅");
}

// Запуск тестов
runTests();