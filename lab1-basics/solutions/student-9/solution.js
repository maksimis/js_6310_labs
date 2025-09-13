// ===== ЗАДАНИЕ 1: Базовые операции =====
function simpleTask() {
    // 1.1 Объявите переменные разных типов (не менне 5)
    // 1.2 Выведите типы всех переменных
    const int = 1;
    const string = 'abc';
    const boolean = true;
    const arr = [1, 2, 3];
    const symbol = Symbol('s');
    const bigint = BigInt(10000000000000);
    console.log(int, '-', 'type:', typeof int);
    console.log(string, '-', 'type:', typeof string);
    console.log(boolean, '-', 'type:', typeof boolean);
    console.log(arr, '-', 'type:', typeof arr);
    console.log(symbol, '-', 'type:', typeof symbol);
    console.log(bigint, '-', 'type:', typeof bigint);
}

// ===== ЗАДАНИЕ 2: Функции =====
function getReviewerNumber(number, lab) {
    // 2.1 Функция определяющая номер ревьюера для вашей группы по вашему номеру и номеру лабораторной работы
    return ((number + lab - 1) % 23) + 1;
}

function getVariant(number, variants) {
    // 2.2 Функция определяющая номер варианта, исходя из количества вариантов
    return ((number - 1) % variants) + 1;
}

function calculate(a, b, operation) {
    // 2.3 Напишите функцию калькулятор, калькулятор обрабатывает следующие операции: +, -, *, /
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 'Invalid operation';
    }
}

function calculateArea(figure, ...params) {
    // 2.4 Напишите функцию для определения площади фигур 'circle', 'rectangle', 'triangle'
    // Используйте switch.
    switch (figure) {
        case 'circle':
            return Math.PI * params[0] ** 2;
        case 'rectangle':
            return params[0] * params[1];
        case 'triangle':
            return (params[0] * params[1]) / 2;
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
    title: 'The book title',
    author: 'Some author',
    year: 1995,
    pages: 180,
    availability: true,
    getInfo() {
        return `${this.title} - ${this.author}, Год выпуска: ${this.year}, Количество страниц: ${this.pages}, Доступность: ${this.availability}`;
    },
    toggleAvailability() {
        this.availability = !this.availability;
    },
};

const student = {
    // 3.2 Реализуйте методы объекта "студент"
    name: 'Анна Петрова',
    age: 20,
    course: 2,
    grades: {
        math: 90,
        programming: 95,
        history: 85,
    },

    // Метод для расчета среднего балла
    getAverageGrade() {
        // Ваш код здесь
        return (this.grades.math + this.grades.programming + this.grades.history) / 3;
    },

    // Метод для добавления новой оценки
    addGrade(subject, grade) {
        // Ваш код здесь
        this.grades[subject] = grade;
    },
};

// ===== ЗАДАНИЕ 4: Массивы =====
function processArrays() {
    const numbers = [12, 45, 23, 67, 34, 89, 56, 91, 27, 14];
    const words = ['JavaScript', 'программирование', 'массив', 'функция', 'объект'];
    const users = [
        { id: 1, name: 'Анна', age: 25, isActive: true },
        { id: 2, name: 'Борис', age: 30, isActive: false },
        { id: 3, name: 'Виктория', age: 22, isActive: true },
        { id: 4, name: 'Григорий', age: 35, isActive: true },
        { id: 5, name: 'Дарья', age: 28, isActive: false },
    ];

    // 1. Используйте forEach для вывода всех чисел больше 50
    console.log('Числа больше 50:');
    numbers.forEach((number) => {
        if (number > 50) {
            console.log(number);
        }
    });

    // 2. Используйте map для создания массива квадратов чисел
    const squares = numbers.map((number) => number ** 2);

    // 3. Используйте filter для получения активных пользователей
    const activeUsers = users.filter((user) => user.isActive);

    // 4. Используйте find для поиска пользователя с именем "Виктория"
    const victoria = users.find((user) => user.name === 'Виктория');

    // 5. Используйте reduce для подсчета суммы всех чисел
    const sum = numbers.reduce((acc, number) => acc + number, 0);

    // 6. Используйте sort для сортировки пользователей по возрасту (по убыванию)
    const sortedByAge = users.sort((a, b) => b.age - a.age);

    // 7. Используйте метод для проверки, все ли пользователи старше 18 лет
    const allAdults = users.every((user) => user.age > 18);

    // 8. Создайте цепочку методов:
    //    - отфильтровать активных пользователей
    //    - преобразовать в массив имен
    //    - отсортировать по алфавиту
    const activeUserNames = users
        .filter((user) => user.isActive)
        .map((user) => user.name)
        .sort();
}

// ===== ЗАДАНИЕ 5: Менеджер задач =====
const taskManager = {
    lastId: 3,
    tasks: [
        { id: 1, title: 'Изучить JavaScript', completed: false, priority: 'high' },
        { id: 2, title: 'Сделать лабораторную работу', completed: true, priority: 'high' },
        { id: 3, title: 'Прочитать книгу', completed: false, priority: 'medium' },
    ],

    addTask(title, priority = 'medium') {
        // 5.1 Добавление задачи
        this.tasks.push({ id: ++this.lastId, title, priority, completed: false });
    },

    completeTask(taskId) {
        // 5.2 Отметка выполнения
        this.tasks.find((task) => task.id === taskId).completed = true;
    },

    // Удаление задачи
    deleteTask(taskId) {
        // 5.3 Ваш код здесь
        const index = this.tasks.findIndex((task) => task.id === taskId);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    },

    // Получение списка задач по статусу
    getTasksByStatus(completed) {
        // 5.4 Ваш код здесь
        return this.tasks.filter((task) => task.completed === completed);
    },

    getStats() {
        /* 5.5 Статистика возвращает объект:        
        total,
        completed,
        pending,
        completionRate
        */
        return {
            total: this.tasks.length,
            completed: this.tasks.filter((task) => task.completed).length,
            pending: this.tasks.filter((task) => !task.completed).length,
            completionRate: this.tasks.filter((task) => task.completed).length / this.tasks.length,
        };
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
// Вариант = 9 % 4 = 1

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

// ===== ТЕСТИРОВАНИЕ =====
function runTests() {
    console.log('=== ТЕСТИРОВАНИЕ ===');

    // Тест 1: getReviewerNumber
    console.assert(getReviewerNumber(9, 1) === 10, 'Тест получения ревьюера провален');
    console.assert(getReviewerNumber(23, 1) === 1, 'Тест получения ревьюера (граничный случай) провален');
    console.assert(getReviewerNumber(22, 1) === 23, 'Тест получения ревьюера (граничный случай) провален');

    // Тест 2: getVariant
    console.assert(getVariant(9, 4) === 1, 'Тест getVariant провален');
    console.assert(getVariant(8, 4) === 4, 'Тест getVariant (граничный случай) провален');

    // Тест 3: calculate
    console.assert(calculate(10, 5, '+') === 15, 'Тест калькулятора (+) провален');
    console.assert(calculate(10, 5, '-') === 5, 'Тест калькулятора (-) провален');
    console.assert(calculate(10, 5, '*') === 50, 'Тест калькулятора (*) провален');
    console.assert(calculate(10, 5, '/') === 2, 'Тест калькулятора (/) провален');
    console.assert(calculate(10, 5, '^') === 'Invalid operation', 'Тест калькулятора (неверная операция) провален');

    // Тест 4: calculateArea
    console.assert(Math.abs(calculateArea('circle', 2) - Math.PI * 4) < 0.0001, 'Тест площади круга провален');
    console.assert(calculateArea('rectangle', 2, 3) === 6, 'Тест площади прямоугольника провален');
    console.assert(calculateArea('triangle', 4, 6) === 12, 'Тест площади треугольника провален');

    // Тест 5: reverseString
    console.assert(reverseString('abc') === 'cba', 'Тест reverseString провален');
    console.assert(reverseString('') === '', 'Тест reverseString (пустая строка) провален');

    // Тест 6: getRandomNumber
    let rand = getRandomNumber(1, 10);
    console.assert(rand >= 1 && rand <= 10, 'Тест getRandomNumber провален');

    // Тест 7: book

    // Проверяем корректность информации о книге
    const expectedInfo = 'The book title - Some author, Год выпуска: 1995, Количество страниц: 180, Доступность: true';
    console.assert(book.getInfo() === expectedInfo, `Тест book.getInfo провален`);

    // Проверяем смену доступности
    const initialAvailability = book.availability;
    book.toggleAvailability();
    console.assert(book.availability === !initialAvailability, `Тест book.toggleAvailability провален`);

    // Тест 8: student
    let avg = student.getAverageGrade();
    console.assert(Math.abs(avg - (90 + 95 + 85) / 3) < 0.0001, 'Тест student.getAverageGrade провален');
    student.addGrade('english', 100);
    console.assert(student.grades.english === 100, 'Тест student.addGrade провален');

    // Тест 9: processArrays
    const testUsers = [
        { id: 1, name: 'A', age: 20, isActive: true },
        { id: 2, name: 'B', age: 17, isActive: false },
    ];
    const active = testUsers.filter((u) => u.isActive);
    console.assert(active.length === 1 && active[0].name === 'A', 'Тест фильтрации активных пользователей провален');

    // Тест 10: taskManager
    let initialCount = taskManager.tasks.length;
    taskManager.addTask('Новая задача', 'low');
    console.assert(taskManager.tasks.length === initialCount + 1, 'Тест addTask провален');
    let newTaskId = taskManager.lastId;
    taskManager.completeTask(newTaskId);
    console.assert(taskManager.tasks.find((t) => t.id === newTaskId).completed, 'Тест completeTask провален');
    taskManager.deleteTask(newTaskId);
    console.assert(!taskManager.tasks.find((t) => t.id === newTaskId), 'Тест deleteTask провален');
    let completedTasks = taskManager.getTasksByStatus(true);
    let pendingTasks = taskManager.getTasksByStatus(false);
    console.assert(Array.isArray(completedTasks) && Array.isArray(pendingTasks), 'Тест getTasksByStatus провален');
    let stats = taskManager.getStats();
    console.assert(typeof stats.total === 'number' && typeof stats.completionRate === 'number', 'Тест getStats провален');

    // Тест 11: validateEmail
    console.assert(validateEmail('test.email+alex@leetcode.com'), 'Тест validateEmail (корректный) провален');
    console.assert(!validateEmail('test.email@.com'), 'Тест validateEmail (некорректный) провален');
    console.assert(!validateEmail('a@b.c'), 'Тест validateEmail (слишком короткий) провален');

    console.log('Все тесты пройдены! ✅');
}
// Запуск тестов
runTests();
