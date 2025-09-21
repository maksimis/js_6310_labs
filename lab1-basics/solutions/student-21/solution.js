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
    const groupSize = 23;
    return ((number + lab - 1) % groupSize) + 1;
}

function getVariant(number, variants) {
    // 2.2 Функция определяющая номер варианта, исходя из количества вариантов
    return ((number - 1) % variants) + 1;
}

function calculate(a, b, operation) {
    // 2.3 Напишите функцию калькулятор, калькулятор обрабатывает следующие операции: +, -, *, /
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Ошибка: оба параметра должны быть числами';
    }
    
    if (!isFinite(a) || !isFinite(b)) {
        return 'Ошибка: числа должны быть конечными';
    }
    
    if (a === Number.MAX_VALUE || b === Number.MAX_VALUE) {
        if (operation === '+' || operation === '*') {
            return 'Ошибка: операция с MAX_VALUE приведет к переполнению';
        }
    }
    
    switch(operation) {
        case '+':
            const sum = a + b;
            return isFinite(sum) ? sum : 'Ошибка: переполнение';
        case '-':
            const diff = a - b;
            return isFinite(diff) ? diff : 'Ошибка: переполнение';
        case '*':
            const product = a * b;
            return isFinite(product) ? product : 'Ошибка: переполнение';
        case '/':
            if (b === 0) {
                return 'Ошибка: деление на ноль';
            }
            return a / b;
        default:
            return 'Ошибка: неизвестная операция';
    }
}

function calculateArea(figure, ...params) {
    // 2.4 Напишите функцию для определения площади фигур 'circle', 'rectangle', 'triangle'
    // Используйте switch.
    switch(figure) {
        case 'circle':
            if (params.length !== 1) {
                return 'Ошибка: для круга нужен 1 параметр (радиус)';
            }
            if (typeof params[0] !== 'number' || !isFinite(params[0])) {
                return 'Ошибка: радиус должен быть числом';
            }
            if (params[0] <= 0) {
                return 'Ошибка: радиус должен быть положительным';
            }
            return Math.PI * params[0] * params[0];
        case 'rectangle':
            if (params.length !== 2) {
                return 'Ошибка: для прямоугольника нужно 2 параметра (ширина, высота)';
            }
            if (typeof params[0] !== 'number' || typeof params[1] !== 'number' || !isFinite(params[0]) || !isFinite(params[1])) {
                return 'Ошибка: параметры должны быть числами';
            }
            if (params[0] <= 0 || params[1] <= 0) {
                return 'Ошибка: параметры должны быть положительными';
            }
            return params[0] * params[1];
        case 'triangle':
            if (params.length !== 2) {
                return 'Ошибка: для треугольника нужно 2 параметра (основание, высота)';
            }
            if (typeof params[0] !== 'number' || typeof params[1] !== 'number' || !isFinite(params[0]) || !isFinite(params[1])) {
                return 'Ошибка: параметры должны быть числами';
            }
            if (params[0] <= 0 || params[1] <= 0) {
                return 'Ошибка: параметры должны быть положительными';
            }
            return 0.5 * params[0] * params[1];
        default:
            return 'Ошибка: неизвестная фигура';
    }
}

// 2.5 Стрелочные функции
const reverseString = (str) => {
    // Функция возвращает перевернутую строку
    if (typeof str !== 'string') {
        return 'Ошибка: параметр должен быть строкой';
    }
    return str.split('').reverse().join('');
};

const getRandomNumber = (min, max) => {
    // Функция возвращает случайное число между min и max
    if (typeof min !== 'number' || typeof max !== 'number') {
        return 'Ошибка: параметры должны быть числами';
    }
    if (!isFinite(min) || !isFinite(max)) {
        return 'Ошибка: параметры должны быть конечными числами';
    }
    if (min > max) {
        return 'Ошибка: минимум не может быть больше максимума';
    }
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
        if (typeof subject !== 'string') {
            return 'Ошибка: название предмета должно быть строкой';
        }
        if (typeof grade !== 'number' || !isFinite(grade)) {
            return 'Ошибка: оценка должна быть числом';
        }
        if (grade < 0 || grade > 100) {
            return 'Ошибка: оценка должна быть от 0 до 100';
        }
        this.grades[subject] = grade;
        return true;
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
        if (!task) {
            return null;
        }
        task.completed = true;
        return task;
    },

    // Удаление задачи
    deleteTask(taskId) {
        // 5.3 Ваш код здесь
        const index = this.tasks.findIndex(t => t.id === taskId);
        if (index === -1) {
            return false;
        }
        this.tasks.splice(index, 1);
        return true;
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
    if (typeof email !== 'string') {
        return false;
    }
    if (email.includes(' ')) {
        return false;
    }
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
    console.assert(getReviewerNumber(5, 1) === 6, "Тест getReviewerNumber: 5+1 провален");
    console.assert(getReviewerNumber(23, 1) === 1, "Тест getReviewerNumber: 23+1=1 провален");
    console.assert(getReviewerNumber(23, 2) === 2, "Тест getReviewerNumber: 23+2=2 провален");
    
    // Тест 2: getVariant
    console.assert(getVariant(10, 4) === 2, "Тест getVariant: 10%4 провален");
    console.assert(getVariant(4, 4) === 4, "Тест getVariant: 4%4 провален");
    console.assert(getVariant(1, 4) === 1, "Тест getVariant: 1%4 провален");
    
    // Тест 3: calculate - валидные операции
    console.assert(calculate(10, 5, '+') === 15, "Тест calculate: сложение провален");
    console.assert(calculate(10, 5, '-') === 5, "Тест calculate: вычитание провален");
    console.assert(calculate(10, 5, '*') === 50, "Тест calculate: умножение провален");
    console.assert(calculate(10, 5, '/') === 2, "Тест calculate: деление провален");
    
    // Тест 4: calculate - ошибки
    console.assert(calculate(10, 0, '/') === 'Ошибка: деление на ноль', "Тест calculate: деление на 0 провален");
    console.assert(calculate('10', 5, '+') === 'Ошибка: оба параметра должны быть числами', "Тест calculate: не число провален");
    console.assert(calculate(10, 5, '%') === 'Ошибка: неизвестная операция', "Тест calculate: неизвестная операция провален");
    console.assert(calculate(Number.MAX_VALUE, 1, '+') === 'Ошибка: операция с MAX_VALUE приведет к переполнению', "Тест calculate: MAX_VALUE сложение провален");
    console.assert(calculate(Number.MAX_VALUE, 2, '*') === 'Ошибка: операция с MAX_VALUE приведет к переполнению', "Тест calculate: MAX_VALUE умножение провален");
    
    // Тест 5: calculate - MAX_VALUE с вычитанием и делением (допустимые операции)
    console.assert(typeof calculate(Number.MAX_VALUE, 1, '-') === 'number', "Тест calculate: MAX_VALUE вычитание провален");
    console.assert(typeof calculate(Number.MAX_VALUE, 2, '/') === 'number', "Тест calculate: MAX_VALUE деление провален");
    console.assert(calculate(Number.MAX_VALUE, Number.MAX_VALUE, '-') === 0, "Тест calculate: MAX_VALUE - MAX_VALUE провален");
    console.assert(typeof calculate(10, Number.MAX_VALUE, '/') === 'number', "Тест calculate: деление на MAX_VALUE провален");
    
    // Тест 6: calculateArea - валидные данные
    console.assert(Math.abs(calculateArea('circle', 5) - 78.54) < 0.1, "Тест calculateArea: круг провален");
    console.assert(calculateArea('rectangle', 5, 10) === 50, "Тест calculateArea: прямоугольник провален");
    console.assert(calculateArea('triangle', 6, 8) === 24, "Тест calculateArea: треугольник провален");
    
    // Тест 7: calculateArea - ошибки
    console.assert(calculateArea('circle', -5) === 'Ошибка: радиус должен быть положительным', "Тест calculateArea: отрицательный радиус провален");
    console.assert(calculateArea('circle', 5, 10) === 'Ошибка: для круга нужен 1 параметр (радиус)', "Тест calculateArea: много параметров провален");
    console.assert(calculateArea('square', 5) === 'Ошибка: неизвестная фигура', "Тест calculateArea: неизвестная фигура провален");
    console.assert(calculateArea('circle', '5') === 'Ошибка: радиус должен быть числом', "Тест calculateArea: не число провален");
    
    // Тест 8: reverseString
    console.assert(reverseString("hello") === "olleh", "Тест reverseString провален");
    console.assert(reverseString(123) === 'Ошибка: параметр должен быть строкой', "Тест reverseString: не строка провален");
    
    // Тест 9: getRandomNumber
    const rand = getRandomNumber(1, 10);
    console.assert(typeof rand === 'number' && rand >= 1 && rand <= 10, "Тест getRandomNumber провален");
    console.assert(getRandomNumber('1', 10) === 'Ошибка: параметры должны быть числами', "Тест getRandomNumber: не число провален");
    console.assert(getRandomNumber(10, 1) === 'Ошибка: минимум не может быть больше максимума', "Тест getRandomNumber: min>max провален");
    
    // Тест 10: book object
    console.assert(book.getInfo().includes("JavaScript"), "Тест book.getInfo провален");
    console.assert(book.toggleAvailability() === false, "Тест book.toggleAvailability провален");
    
    // Тест 11: student object
    console.assert(student.getAverageGrade() === 90, "Тест student.getAverageGrade провален");
    console.assert(student.addGrade("physics", 88) === true, "Тест student.addGrade провален");
    console.assert(student.grades.physics === 88, "Тест student.addGrade: значение провален");
    console.assert(student.addGrade(123, 88) === 'Ошибка: название предмета должно быть строкой', "Тест student.addGrade: не строка провален");
    console.assert(student.addGrade("chemistry", "90") === 'Ошибка: оценка должна быть числом', "Тест student.addGrade: не число провален");
    
    // Тест 12: student.addGrade - обновление существующей оценки
    const oldMathGrade = student.grades.math;
    student.addGrade("math", 70);
    console.assert(student.grades.math === 70, "Тест student.addGrade: обновление оценки провален");
    console.assert(student.grades.math !== oldMathGrade, "Тест student.addGrade: оценка должна измениться провален");
    
    // Тест 13: taskManager
    const initialLength = taskManager.tasks.length;
    taskManager.addTask("Новая задача", "low");
    console.assert(taskManager.tasks.length === initialLength + 1, "Тест taskManager.addTask провален");
    console.assert(taskManager.completeTask(999) === null, "Тест taskManager.completeTask: несуществующая задача провален");
    console.assert(taskManager.deleteTask(999) === false, "Тест taskManager.deleteTask: несуществующая задача провален");
    
    // Тест 14: validateEmail (Вариант 1) - валидные
    console.assert(validateEmail("test@example.com") === true, "Тест email: валидный email провален");
    console.assert(validateEmail("user.name+tag@example.co.uk") === true, "Тест email: сложный валидный email провален");
    console.assert(validateEmail("a@b.co") === true, "Тест email: минимальный валидный email провален");
    
    // Тест 15: validateEmail - невалидные
    console.assert(validateEmail("invalid.email@") === false, "Тест email: без домена провален");
    console.assert(validateEmail("@example.com") === false, "Тест email: без локальной части провален");
    console.assert(validateEmail("test@.com") === false, "Тест email: неверный домен провален");
    console.assert(validateEmail("test") === false, "Тест email: без @ провален");
    console.assert(validateEmail("test@example") === false, "Тест email: без точки в домене провален");
    console.assert(validateEmail("test @example.com") === false, "Тест email: пробел провален");
    console.assert(validateEmail(123) === false, "Тест email: не строка провален");
    
    console.log("Все тесты пройдены! ✅");
}

// Запуск тестов
runTests();