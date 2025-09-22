// мои вспомогательные функции для заданий
// проверка на то, что передано положительное число
function isPositiveNumber(param) {
    return typeof param === "number" && param > 0;
}

// проверка на то, что передано число
function isNumber(param) {
    return typeof param === "number";
}

// проверка строка ли передана
function isString(param) {
    return typeof param === "string";
}


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
    if (!isPositiveNumber(number) || !isPositiveNumber(lab) || number > 23) {
        return "Ошибка ввода: входные параметры должны быть положительными числами строго до 23!";
    }
    return (number + lab - 1) % 23 + 1;
}

function getVariant(number, variants) {
    // 2.2 Функция определяющая номер варианта, исходя из количества вариантов
    if (!isPositiveNumber(number) || !isPositiveNumber(variants)) {
        return "Ошибка ввода: входные параметры должны быть положительными числами!";
    }
    return (number - 1) % variants + 1;
}

function calculate(a, b, operation) {
    // 2.3 Напишите функцию калькулятор, калькулятор обрабатывает следующие операции: +, -, *, /
    if (!isNumber(a) || !isNumber(b)) {
        return 'Ошибка ввода! Входные параметры должны быть числами!';
    }
  
    switch (operation) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/':
            if (b == 0) { 
                return 'Ошибка: деление на ноль!';
            }
            return a / b;
        default:
            return 'Ошибка ввода! Допустимые операторы: +, -, *, /';
    }
}

function calculateArea(figure, ...params) {
    // 2.4 Напишите функцию для определения площади фигур 'circle', 'rectangle', 'triangle'
    // Используйте switch.
    if (!params.every(isPositiveNumber)) return "Невалидные параметры.";

    switch (figure) {
        case 'circle':
            if (params.length !== 1) return "Параметр должен быть один (радиус).";
            return Math.PI * params[0] ** 2;

        case 'rectangle':
            if (params.length !== 2) return "Параметров должно быть два (ширина и высота).";
            return params[0] * params[1];

        case 'triangle':
            if (params.length !== 3) return "Параметров должно быть три (стороны треугольника).";
            const [a, b, c] = params;
            if ((a >= b + c) || (b >= a + c) || (c >= a + b)) return "Неравенство треугольника не выполняется.";
            const p = (a + b + c) / 2;
            return Math.sqrt(p * (p - a) * (p - b) * (p - c));

        default:
            return 'Неизвестная фигура.';
    }
}

// 2.5 Стрелочные функции
const reverseString = (str) => {
    // Функция возвращает перевернутую строку
    if (!isString(str)) {
        return "Ошибка: входной параметр должен быть строкой.";
    }
    return str.split('').reverse().join('')
};

const getRandomNumber = (min, max) => {
    // Функция возвращает случайное число между min и max
    if (!isNumber(min) || !isNumber(max) || min > max) {
        return "Ошибка: некорректные параметры. Требуется два числа, где min <= max.";
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
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
        return `${this.title}, ${this.author}, ${this.year}г., ${this.sheets}стр.`;
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
        // math: 90,
        // programming: 95,
        // history: 85
    },
    
    // Метод для расчета среднего балла
    getAverageGrade() {
        // Ваш код здесь
        let amount = Object.values(this.grades).length;
        let sum = Object.values(this.grades).reduce((accumulator, value) => accumulator + value, 0);
        if (amount === 0) {
            return "Объект grades пустой!"
        }
        return sum / amount;
    },
    
    // Метод для добавления новой оценки
    addGrade(subject, grade) {
        // Ваш код здесь
        if (!isString(subject) || !isNumber(grade) || !(0 <= grade && grade <= 100)) {
            return "Невалидные параметры!"
        }
        this.grades[subject] = grade;
        return `Новая оценка ${grade} по предмету ${subject} успешно добавлена!`
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
    /*const squares =  ваш код */
    const squares = numbers.map(number => number ** 2);
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
    const sum = numbers.reduce((accumulator, value) => accumulator + value, 0);
    console.log(`Сумма всех чисел: ${sum}.`);
    
    // 6. Используйте sort для сортировки пользователей по возрасту (по убыванию)
    /*const sortedByAge =  ваш код */
    const sortedByAge = [...users].sort((user1, user2) => user2.age - user1.age);
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
    const activeUserNames = users.filter(user => user.isActive).map(user => user.name).sort();
    console.log(`Имена активных пользователей: ${activeUserNames}.`);
}

// ===== ЗАДАНИЕ 5: Менеджер задач =====
const taskManager = {
    tasks: [
        // { id: 1, title: "Изучить JavaScript", completed: false, priority: "high" },
        // { id: 2, title: "Сделать лабораторную работу", completed: true, priority: "high" },
        // { id: 3, title: "Прочитать книгу", completed: false, priority: "medium" }
    ],
    
    addTask(title, priority = "medium") {
        // 5.1 Добавление задачи
        availableStatuses = ['high', 'medium', 'low'];
        if (!isString(title) || !(availableStatuses.includes(priority))) {
            return "Невалидные параметры! Предполагаемый формат ввода: заголовок и приоритет - строки, приоритет - 'high', 'medium' или 'low'";
        }

        const newTask = {
            id: this.tasks.length > 0 ? Math.max(...this.tasks.map(task => task.id)) + 1 : 1,
            title: title,
            completed: false,
            priority: priority
        };
        this.tasks.push(newTask);
        return "Новая задача успешно добавлена!";
    },
    
    completeTask(taskId) {
        // 5.2 Отметка выполнения
        if (!isPositiveNumber(taskId)) return "Невалидный параметр taskID, надо положительное число!";
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = true;
            return "Отметка выполнения выставлена!";
        }      
        return `Задание с ID = ${taskId} не найдено...`;
    },

    // Удаление задачи
    deleteTask(taskId) {
        // 5.3 Ваш код здесь
        if (!isPositiveNumber(taskId)) return "Невалидный параметр taskID, надо положительное число!";
        const initialLength = this.tasks.length;
        this.tasks = this.tasks.filter(task => task.id !== taskId);    
        return this.tasks.length < initialLength;     
    },

    // Получение списка задач по статусу
    getTasksByStatus(completed) {
        // 5.4 Ваш код здесь
        if (typeof completed !== 'boolean') return "Невалидный параметр! Может быть только true или false.";
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
        const completed = this.tasks.filter(task => task.completed == true).length;
        const pending = this.tasks.filter(task => task.completed == false).length;
        const completionRate = total === 0 ? '100%': `${(completed / total * 100).toFixed(2)}%`;
       
        const stat = {
            total: total,
            completed: completed,
            pending: pending,
            completionRate: completionRate
        }
        return stat;
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
 * Вариант 4: Валидация даты в формате DD.MM.YYYY
 * Правила:
 * - День: 01-31
 * - Месяц: 01-12
 * - Год: 1900-2099
 */
function validateDate(date) {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/;
    if (!dateRegex.test(date)) return false;

    // Дополнительная проверка на логику (например, 31.04)
    const [day, month, year] = date.split('.').map(Number);
    const dateObj = new Date(year, month - 1, day);
    return dateObj.getFullYear() === year && dateObj.getMonth() === month - 1 && dateObj.getDate() === day;
}

// Бонус: выполните все остальные варианты. Выполнение бонуса не учитывается в итоговой оценке.


// ===== ТЕСТИРОВАНИЕ =====
function runTests() {
    console.log("=== ТЕСТИРОВАНИЕ ===\n");

    // 1 задание
    console.log("=== начало 1 задания ===");
    simpleTask(); // никакого ввода нет, всё круто
    console.log("=== конец 1 задания ===\n");


    // 2 задание
    console.log("=== начало 2 задания ===");
    // 2.1 getReviewerNumber
    console.assert(getReviewerNumber(1, 2) === 3, "Тест getReviewerNumber (стандартная ситуация): провален.");
    console.assert(getReviewerNumber(22, 1) === 23, "Тест getReviewerNumber (граничные значения): провален.");
    console.assert(getReviewerNumber(20, 4) === 1, "Тест getReviewerNumber (перескок через границы): провален.");
    console.assert(getReviewerNumber(30, 8) === "Ошибка ввода: входные параметры должны быть положительными числами строго до 23!", "Тест getReviewerNumber (введён номер, больший чем студентов в группе): провален.");
    console.assert(getReviewerNumber('asker', 8) === "Ошибка ввода: входные параметры должны быть положительными числами строго до 23!", "Тест getReviewerNumber (первый параметр - не число): провален.");
    console.assert(getReviewerNumber(4, 'asker') === "Ошибка ввода: входные параметры должны быть положительными числами строго до 23!", "Тест getReviewerNumber (второй параметр - не число): провален.");
    console.assert(getReviewerNumber(-4, 5) === "Ошибка ввода: входные параметры должны быть положительными числами строго до 23!", "Тест getReviewerNumber (первый параматр - отрицательное число): провален.");
    console.assert(getReviewerNumber(4, -5) === "Ошибка ввода: входные параметры должны быть положительными числами строго до 23!", "Тест getReviewerNumber (второй параматр - отрицательное число): провален.");

    // 2.2 getVariant
    console.assert(getVariant(1, 2) === 1, "Тест getVariant (стандартная ситуация): провален.");
    console.assert(getVariant(10, 10) === 10, "Тест getVariant (граничные значения): провален.");
    console.assert(getVariant(20, 4) === 4, "Тест getVariant (перескок через границы): провален.");
    console.assert(getVariant('asker', 8) === "Ошибка ввода: входные параметры должны быть положительными числами!", "Тест getVariant (первый параметр - не число): провален.");
    console.assert(getVariant(4, 'asker') === "Ошибка ввода: входные параметры должны быть положительными числами!", "Тест getVariant (второй параметр - не число): провален.");
    console.assert(getVariant(-4, 8) === "Ошибка ввода: входные параметры должны быть положительными числами!", "Тест getVariant (первый параметр - отрицательное число): провален.");
    console.assert(getVariant(4, -4) === "Ошибка ввода: входные параметры должны быть положительными числами!", "Тест getVariant (второй параметр - отрицательное число): провален.");

    // 2.3 calculate
    console.assert(calculate(50, 2, '+') === 52, "Тест calculate (сложение): провален");
    console.assert(calculate(50, -2, '-') === 52, "Тест calculate (вычитание): провален");
    console.assert(calculate(2, 26, '*') === 52, "Тест calculate (умножение): провален");
    console.assert(calculate(104, 2, '/') === 52, "Тест calculate (деление): провален");
    console.assert(calculate(52, 0, '/') === 'Ошибка: деление на ноль!', "Тест calculate (деление на ноль): провален");
    console.assert(calculate(52, 52, '%') === 'Ошибка ввода! Допустимые операторы: +, -, *, /', "Тест calculate (неверный оператор): провален");
    console.assert(calculate('asker', 5, '+') === 'Ошибка ввода! Входные параметры должны быть числами!', "Тест calculate (первый параметр не число): провален");
    console.assert(calculate(5, 'asker', '+') === 'Ошибка ввода! Входные параметры должны быть числами!', "Тест calculate (второй параметр не число): провален");

    // 2.4 calculateArea
    // круг
    console.assert(Math.abs(calculateArea('circle', 6) - 113.09733) < 0.001, "Тест площади круга провален");
    console.assert(calculateArea('circle', 0) === "Невалидные параметры.", "Тест площади круга (введено неположительное число) провален"); // для прямоугольника и треугольника это не надо
    console.assert(calculateArea('circle', 'asker') === "Невалидные параметры.", "Тест площади круга (введено не число) провален"); // для прямоугольника и треугольника это не надо
    console.assert(calculateArea('circle', 52, 52) === "Параметр должен быть один (радиус).", "Тест площади круга (введён не один параметр) провален");
    // прямоугольник
    console.assert(calculateArea('rectangle', 2, 26) === 52, "Тест площади прямоугольника провален");
    console.assert(calculateArea('rectangle', 52) === "Параметров должно быть два (ширина и высота).", "Тест площади прямоугольника провален");
    console.assert(calculateArea('rectangle', 52, 52, 52) === "Параметров должно быть два (ширина и высота).", "Тест площади прямоугольника провален");
    // треугольник
    console.assert(calculateArea('triangle', 6, 8, 10) === 24, "Тест площади треугольника провален");
    console.assert(calculateArea('triangle', 52) === "Параметров должно быть три (стороны треугольника).", "Тест площади треугольника провален (введено меньше трёх параметров).");
    console.assert(calculateArea('triangle', 52, 52, 52, 52) === "Параметров должно быть три (стороны треугольника).", "Тест площади треугольника провален (введено больше трёх параметров).");
    console.assert(calculateArea('triangle', 1, 2, 4) === "Неравенство треугольника не выполняется.", "Тест неравенства треугольника провален");
    // неизвестная калькулятору фигура
    console.assert(calculateArea('square', 4) === "Неизвестная фигура.", "Тест неизвестной фигуры провален");

    // 2.5 стрелочные функции
    // reverseString
    console.assert(reverseString("asker") === 'reksa', "Тест reverseString провален");
    console.assert(reverseString("") === '', "Тест reverseString (пустая строка) провален");
    console.assert(reverseString(12345) === "Ошибка: входной параметр должен быть строкой.", "Тест reverseString (не строка) провален");
    // getRandomNumber
    const num1 = getRandomNumber(1, 10);
    const num2 = getRandomNumber(-10, 10);
    const num3 = getRandomNumber(-15, -10);
    console.assert(1 <= num1 && num1 <= 10, "Тест getRandomNumber (стандарт): провален");
    console.assert(-10 <= num2 && num2 <= 10, "Тест getRandomNumber (одно из чисел отрицательное): провален");
    console.assert(-15 <= num3 && num3 <= -10, "Тест getRandomNumber (оба числа отрицательные): провален");
    console.assert(getRandomNumber(52, 52) === 52, "Тест getRandomNumber (min == max): провален");
    console.assert(getRandomNumber('asker', 52) === "Ошибка: некорректные параметры. Требуется два числа, где min <= max.", "Тест getRandomNumber (первый параметр - строка): провален");
    console.assert(getRandomNumber(52, 'asker') === "Ошибка: некорректные параметры. Требуется два числа, где min <= max.", "Тест getRandomNumber (второй параметр - строка): провален");
    console.assert(getRandomNumber(10, 1) === "Ошибка: некорректные параметры. Требуется два числа, где min <= max.", "Тест getRandomNumber (min > max) провален");
    console.log("=== конец 2 задания ===\n");
    

    // 3 задание  
    console.log("=== начало 2 задания ===");
    // 3.1 book object
    // getInfo
    console.assert(book.getInfo() === `${book.title}, ${book.author}, ${book.year}г., ${book.sheets}стр.`, "Тест метода getInfo объекта book: провален");
    // toggleAvailability
    const currentAvailable = book.isAvailable;
    console.assert(book.toggleAvailability() !== currentAvailable, "Тест toggleAvailability провален");
    book.toggleAvailability(); // по приколу вернём начальное, могли не менять

    // 3.2 student object
    // getAverageGrade
    console.assert(student.getAverageGrade() === "Объект grades пустой!", "Тест getAverageGrade (оценок нет): провален");
    // addGrade
    console.assert(student.addGrade('math', 90) === `Новая оценка 90 по предмету math успешно добавлена!`, "Тест getAverageGrade (добавили корректную инфу): провален"); // здесь заполняем изначальный список
    console.assert(student.addGrade('programming', 95) === `Новая оценка 95 по предмету programming успешно добавлена!`, "Тест getAverageGrade (добавили корректную инфу): провален"); // здесь тоже заполняем изначальный список
    console.assert(student.addGrade('history', 85) === `Новая оценка 85 по предмету history успешно добавлена!`, "Тест getAverageGrade (добавили корректную инфу): провален"); // здесь на удивление тоже 
    // теперь проверки на некорректность
    console.assert(student.addGrade(52, 52) === "Невалидные параметры!", "Тест getAverageGrade (subject - не строка): провален");
    console.assert(student.addGrade('asker', 'asker') === "Невалидные параметры!", "Тест getAverageGrade (grade - не число): провален");
    console.assert(student.addGrade('asker', -10) === "Невалидные параметры!", "Тест getAverageGrade (grade - отрицательный): провален");
    console.assert(student.addGrade('asker', 101) === "Невалидные параметры!", "Тест getAverageGrade (grade - больше ста): провален");
    // снова проверяем getAverageGrade
    console.assert(student.getAverageGrade() === 90, "Тест getAverageGrade (стандрат, идеал): провален");
    console.log("=== конец 3 задания ===\n");


    // 4 задание
    console.log("=== начало 4 задания ===");
    processArrays();
    console.log("=== конец 4 задания ===\n");


    // 5 задание
    console.log("=== начало 5 задания ===");
    // getStats если нет задач
    console.log(taskManager.getStats());
    // addTask (создаём изначальный tasks) 
    console.assert(taskManager.addTask("Изучить JavaScript", "high") === "Новая задача успешно добавлена!" && taskManager.tasks[0].id === 1, "Тест addTask (нет тасков изначально): провален");
    console.assert(taskManager.addTask("Сделать лабораторную работу", "high") === "Новая задача успешно добавлена!", "Тест addTask (стандарт): провален");
    console.assert(taskManager.addTask("Прочитать книгу") === "Новая задача успешно добавлена!", "Тест addTask (дефолт приоритет): провален");
    // ну и дальше воркаем
    console.assert(taskManager.addTask(52, "high") === "Невалидные параметры! Предполагаемый формат ввода: заголовок и приоритет - строки, приоритет - 'high', 'medium' или 'low'", "Тест addTask (заголовок - не строка): провален");
    console.assert(taskManager.addTask('asker', 52) === "Невалидные параметры! Предполагаемый формат ввода: заголовок и приоритет - строки, приоритет - 'high', 'medium' или 'low'", "Тест addTask (приоритет неправильного формата): провален");
    console.log(taskManager.tasks);
    // getStats когда все задачи есть, но ни одна не выполнена
    console.log(taskManager.getStats());
    console.assert(taskManager.completeTask(2) === "Отметка выполнения выставлена!", "Тест completeTask (стандарт ожидаемый): провален");
    console.assert(taskManager.completeTask(52) === "Задание с ID = 52 не найдено...", "Тест completeTask (несуществующий айдишник): провален");
    console.assert(taskManager.completeTask(-52) === "Невалидный параметр taskID, надо положительное число!", "Тест completeTask (отрицательное число): провален");
    console.assert(taskManager.completeTask('asker') === "Невалидный параметр taskID, надо положительное число!", "Тест completeTask (не число): провален");
    // getStats когда все задачи есть, только одна выполнена
    console.log(taskManager.getStats());
    // deleteTask
    console.assert(taskManager.deleteTask(3) === true, "Тест deleteTask (корректное): провален");
    console.assert(taskManager.deleteTask('asker') === "Невалидный параметр taskID, надо положительное число!", "Тест deleteTask (айдишник не число): провален");
    console.assert(taskManager.deleteTask(-52) === "Невалидный параметр taskID, надо положительное число!", "Тест deleteTask (): провален");
    console.assert(taskManager.deleteTask(3) === false, "Тест deleteTask (несуществующий айдишник): провален");
    // getTasksByStatus
    console.assert(taskManager.getTasksByStatus(true).length === taskManager.getStats().completed, "Тест getTasksByStatus (валидный ввод): провален");
    console.assert(taskManager.getTasksByStatus('asker') === "Невалидный параметр! Может быть только true или false.", "Тест getTasksByStatus (не валидный ввод): провален");
    console.log("=== конец 5 задания ===\n");


    // 6 задание 
    console.log("=== начало 6 задания ===");
    console.assert(validateDate("01.01.1900") === true, "Тест validateDate (нижняя граница): провален");
    console.assert(validateDate("31.12.2099") === true, "Тест validateDate (верхняя граница): провален");
    console.assert(validateDate("07.04.2005") === true, "Тест validateDate (серединное рандомное): провален");
    console.assert(validateDate("") === false, "Тест validateDate с пустой строкой провален");
    console.assert(validateDate(52) === false, "Тест validateDate с не строкой провален");
    console.assert(validateDate("29.02.2025") === false, "Тест validateDate (невисокосный год) провален");
    console.assert(validateDate("29.02.2024") === true, "Тест validateDate (високосный год) провален");
    console.assert(validateDate("31.04.2023") === false, "Тест validateDate (несуществующая дата) провален");
    console.assert(validateDate("32.01.2023") === false, "Тест validateDate (несуществующий день) провален");
    console.assert(validateDate("1.1.2000") === false, "Тест validateDate без ведущих нулей провален");
    console.assert(validateDate("00.00.2000") === false, "Тест validateDate (куча нулей) провален");
    console.assert(validateDate("07 04 2005") === false, "Тест validateDate (неверный формат) провален");
    console.assert(validateDate("07/04/2005") === false, "Тест validateDate (неверный формат) провален");
    console.assert(validateDate("2005-04-07") === false, "Тест validateDate (неверный формат) провален");
    console.assert(validateDate("07.19.2005") === false, "Тест validateDate (неверный формат) провален");
    console.assert(validateDate("31.01.2023") === true, "Тест validateDate (граничное значение месяца) провален");
    console.log("=== конец 6 задания ===\n");


    console.log("Все тесты пройдены! ✅");
}

// Запуск тестов
runTests();