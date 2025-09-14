// ===== ЗАДАНИЕ 1: Базовые операции =====
function simpleTask() {
    let num = 42;                  
    let str = "Привет";            
    let isTrue = true;             
    let obj = {a: 1, b: 2};        
    let arr = [1, 2, 3];           
    let undef;                     
    let big = 123n;                

    console.log(typeof num, typeof str, typeof isTrue, typeof obj, typeof arr, typeof undef, typeof big);
}

// ===== ЗАДАНИЕ 2: Функции =====
function getReviewerNumber(number, lab) {
    return number + lab;
}

function getVariant(number, variants) {
    return (number % variants) + 1;
}

function calculate(a, b, operation) {
    switch (operation) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : null;
        default: return null;
    }
}

function calculateArea(figure, ...params) {
    switch (figure) {
        case 'circle':
            const [r] = params;
            return Math.PI * r * r;
        case 'rectangle':
            const [w, h] = params;
            return w * h;
        case 'triangle':
            const [a, b, c] = params;
            const p = (a + b + c) / 2;
            return Math.sqrt(p * (p - a) * (p - b) * (p - c));
        default:
            return null;
    }
}

const reverseString = (str) => str.split("").reverse().join("");
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// ===== ЗАДАНИЕ 3: Объекты =====
const book = {
    title: "Преступление и наказание",
    author: "Ф. Достоевский",
    year: 1866,
    pages: 500,
    available: true,

    getInfo() {
        return `${this.title}, ${this.author}, ${this.year}, ${this.pages} стр.`;
    },

    toggleAvailability() {
        this.available = !this.available;
        return this.available;
    }
};

const student = {
    name: "Анна Петрова",
    age: 20,
    course: 2,
    grades: {
        math: 90,
        programming: 95,
        history: 85
    },

    getAverageGrade() {
        const values = Object.values(this.grades);
        return values.reduce((a, b) => a + b, 0) / values.length;
    },

    addGrade(subject, grade) {
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

    console.log("Числа больше 50:");
    numbers.forEach(n => { if (n > 50) console.log(n); });

    const squares = numbers.map(n => n * n);
    const activeUsers = users.filter(u => u.isActive);
    const victoria = users.find(u => u.name === "Виктория");
    const sum = numbers.reduce((a, b) => a + b, 0);
    const sortedByAge = [...users].sort((a, b) => b.age - a.age);
    const allAdults = users.every(u => u.age > 18);
    const activeUserNames = users
        .filter(u => u.isActive)
        .map(u => u.name)
        .sort();

    return { squares, activeUsers, victoria, sum, sortedByAge, allAdults, activeUserNames };
}

// ===== ЗАДАНИЕ 5: Менеджер задач =====
const taskManager = {
    tasks: [
        { id: 1, title: "Изучить JavaScript", completed: false, priority: "high" },
        { id: 2, title: "Сделать лабораторную работу", completed: true, priority: "high" },
        { id: 3, title: "Прочитать книгу", completed: false, priority: "medium" }
    ],

    addTask(title, priority = "medium") {
        const newId = this.tasks.length ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1;
        const task = { id: newId, title, completed: false, priority };
        this.tasks.push(task);
        return task;
    },

    completeTask(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) task.completed = true;
        return task;
    },

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(t => t.id !== taskId);
    },

    getTasksByStatus(completed) {
        return this.tasks.filter(t => t.completed === completed);
    },

    getStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.completed).length;
        const pending = total - completed;
        const completionRate = total ? (completed / total) * 100 : 0;
        return { total, completed, pending, completionRate };
    }
};

// ===== ЗАДАНИЕ 6: Регулярные выражения (Вариант 2 — пароль) =====
function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
    return passwordRegex.test(password);
}

function testValidatePassword() {
    console.log("=== ТЕСТИРОВАНИЕ validatePassword ===");

    console.assert(validatePassword("Abcdef1!") === true, "Тест 1 провален");
    console.assert(validatePassword("Qwerty9@") === true, "Тест 2 провален");
    console.assert(validatePassword("StrongPass1#") === true, "Тест 3 провален");

    console.assert(validatePassword("abcdef1!") === false, "Нет заглавной буквы");
    console.assert(validatePassword("ABCDEFG1!") === false, "Нет строчной буквы");
    console.assert(validatePassword("Abcdefgh!") === false, "Нет цифры");
    console.assert(validatePassword("Abcdefg1") === false, "Нет спецсимвола");
    console.assert(validatePassword("Ab1!") === false, "Слишком короткий");

    console.log("Все тесты validatePassword пройдены! ✅");
}

// ===== ТЕСТИРОВАНИЕ =====
function runTests() {
    console.log("=== ТЕСТИРОВАНИЕ ===");

    console.assert(getReviewerNumber(5, 1) === 6, "Тест получения ревьюера провален");
    console.assert(calculate(10, 5, '+') === 15, "Тест калькулятора сложение провален");
    console.assert(calculate(10, 5, '-') === 5, "Тест калькулятора вычитание провален");
    console.assert(reverseString("abc") === "cba", "Тест reverseString провален");
    console.assert(getVariant(7, 5) === 3, "Тест getVariant провален");
    console.assert(Math.round(calculateArea("circle", 2)) === 13, "Тест calculateArea(circle) провален");
    console.assert(book.toggleAvailability() === false, "Тест toggleAvailability провален");
    console.assert(student.getAverageGrade() === 90, "Тест среднего балла провален");

    console.log("Все тесты пройдены! ✅");

    // Запуск тестов Задания 6
    testValidatePassword();
}

// Запуск тестов
runTests();