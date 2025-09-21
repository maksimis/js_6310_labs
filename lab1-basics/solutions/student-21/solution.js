// ===== ЗАДАНИЕ 1: Базовые операции =====
function simpleTask() {
    // 1.1 Объявите переменные разных типов (не менне 5)
    const stringVar = "Hello, JavaScript!";
    const numberVar = 42;
    const booleanVar = true;
    const arrayVar = [1, 2, 3, 4, 5];
    const objectVar = { name: "Shamil", age: 20 };
    const nullVar = null;
    const undefinedVar = undefined;
    
    // 1.2 Выведите типы всех переменных
    console.log(typeof stringVar);
    console.log(typeof numberVar);
    console.log(typeof booleanVar);
    console.log(typeof arrayVar);
    console.log(typeof objectVar);
    console.log(typeof nullVar);
    console.log(typeof undefinedVar);
}

// ===== ЗАДАНИЕ 2: Функции =====
function getReviewerNumber(number, lab) {
    // 2.1 Функция определяющая номер ревьюера для вашей группы по вашему номеру и номеру лабораторной работы
    return number + lab;
}

function getVariant(number, variants) {
    // 2.2 Функция определяющая номер варианта, исходя из количества вариантов
    return number % variants;
}

function calculate(a, b, operation) {
    // 2.3 Напишите функцию калькулятор, калькулятор обрабатывает следующие операции: +, -, *, /
    switch(operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return null;
    }
}

function calculateArea(figure, ...params) {
    // 2.4 Напишите функцию для определения площади фигур 'circle', 'rectangle', 'triangle'
    // Используйте switch.
    switch(figure) {
        case 'circle':
            return Math.PI * params[0] * params[0];
        case 'rectangle':
            return params[0] * params[1];
        case 'triangle':
            return 0.5 * params[0] * params[1];
        default:
            return null;
    }
}

// 2.5 Стрелочные функции
const reverseString = (str) => {
    // Функция возвращает перевернутую строку
    return str.split('').reverse().join('');
};

const getRandomNumber = (min, max) => {
    // Функция возвращает случайное число между min и max
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// ===== ЗАДАНИЕ 3: Объекты =====
const book = {
    // 3.1 Создайте объект "книга" с полями для хранения заголовка, автора, 
    // года выпуска, количества страниц, и доступности
    // объект должен иметь два метода getInfo возвращает одной строкой информацию о названии книги, аторе, годе выпуска, количестве страниц
    // метод toggleAvailability - который меняет значение доступности и возвращает его
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008,
    pages: 176,
    isAvailable: true,
    
    getInfo() {
        return `${this.title} by ${this.author}, ${this.year}, ${this.pages} pages`;
    },
    
    toggleAvailability() {
        this.isAvailable = !this.isAvailable;
        return this.isAvailable;
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
        const values = Object.values(this.grades);
        const sum = values.reduce((acc, grade) => acc + grade, 0);
        return sum / values.length;
    },
    
    // Метод для добавления новой оценки
    addGrade(subject, grade) {
        // Ваш код здесь
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
    console.log("Числа больше 50:");
    numbers.forEach(num => {
        if (num > 50) {
            console.log(num);
        }
    });

    // 2. Используйте map для создания массива квадратов чисел
    const squares = numbers.map(num => num * num);

    // 3. Используйте filter для получения активных пользователей
    const activeUsers = users.filter(user => user.isActive);

    // 4. Используйте find для поиска пользователя с именем "Виктория"
    const victoria = users.find(user => user.name === "Виктория");

    // 5. Используйте reduce для подсчета суммы всех чисел
    const sum = numbers.reduce((acc, num) => acc + num, 0);

    // 6. Используйте sort для сортировки пользователей по возрасту (по убыванию)
    const sortedByAge = [...users].sort((a, b) => b.age - a.age);

    // 7. Используйте метод для проверки, все ли пользователи старше 18 лет
    const allAdults = users.every(user => user.age > 18);

    // 8. Создайте цепочку методов: 
    //    - отфильтровать активных пользователей
    //    - преобразовать в массив имен
    //    - отсортировать по алфавиту
    const activeUserNames = users
        .filter(user => user.isActive)
        .map(user => user.name)
        .sort();
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
        const newId = this.tasks.length > 0 ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1;
        const newTask = {
            id: newId,
            title: title,
            completed: false,
            priority: priority
        };
        this.tasks.push(newTask);
        return newTask;
    },
    
    completeTask(taskId) {
        // 5.2 Отметка выполнения
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = true;
        }
        return task;
    },

    // Удаление задачи
    deleteTask(taskId) {
        // 5.3 Ваш код здесь
        const index = this.tasks.findIndex(t => t.id === taskId);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return true;
        }
        return false;
    },

    // Получение списка задач по статусу
    getTasksByStatus(completed) {
        // 5.4 Ваш код здесь
        return this.tasks.filter(task => task.completed === completed);
    },
    
    getStats() {
        /* 5.5 Статистика возвращает объект:        
        total,
        completed,
        pending,
        completionRate
        */
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.completed).length;
        const pending = total - completed;
        const completionRate = total > 0 ? (completed / total) * 100 : 0;
        
        return {
            total,
            completed,
            pending,
            completionRate
        };
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
    
    // Тест 3: getVariant
    console.assert(getVariant(10, 4) === 2, "Тест getVariant провален");
    
    // Тест 4: calculateArea
    console.assert(Math.abs(calculateArea('circle', 5) - 78.54) < 0.1, "Тест площади круга провален");
    console.assert(calculateArea('rectangle', 5, 10) === 50, "Тест площади прямоугольника провален");
    console.assert(calculateArea('triangle', 6, 8) === 24, "Тест площади треугольника провален");
    
    // Тест 5: reverseString
    console.assert(reverseString("hello") === "olleh", "Тест reverseString провален");
    
    // Тест 6: book object
    console.assert(book.getInfo().includes("JavaScript"), "Тест book.getInfo провален");
    console.assert(book.toggleAvailability() === false, "Тест book.toggleAvailability провален");
    
    // Тест 7: student object
    console.assert(student.getAverageGrade() === 90, "Тест student.getAverageGrade провален");
    student.addGrade("physics", 88);
    console.assert(student.grades.physics === 88, "Тест student.addGrade провален");
    
    // Тест 8: taskManager
    const initialLength = taskManager.tasks.length;
    taskManager.addTask("Новая задача", "low");
    console.assert(taskManager.tasks.length === initialLength + 1, "Тест taskManager.addTask провален");
    
    // Тест 9: validateEmail (Вариант 1)
    console.assert(validateEmail("test@example.com") === true, "Тест email: валидный email провален");
    console.assert(validateEmail("user.name+tag@example.co.uk") === true, "Тест email: сложный валидный email провален");
    console.assert(validateEmail("invalid.email@") === false, "Тест email: без домена провален");
    console.assert(validateEmail("@example.com") === false, "Тест email: без локальной части провален");
    console.assert(validateEmail("test@.com") === false, "Тест email: неверный домен провален");
    console.assert(validateEmail("test") === false, "Тест email: без @ провален");
    console.assert(validateEmail("test@example") === false, "Тест email: без точки в домене провален");
    console.assert(validateEmail("a@b.co") === true, "Тест email: минимальный валидный email провален");
    
    console.log("Все тесты пройдены! ✅");
}

// Запуск тестов
runTests();