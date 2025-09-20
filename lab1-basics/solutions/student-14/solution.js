// ===== ЗАДАНИЕ 1: Базовые операции =====
function simpleTask() {
    // 1.1 Объявите переменные разных типов (не менне 5)
    // 1.2 Выведите типы всех переменных

    let num = 12;
    let str = "hello";
    let arr = [1, 2, 3, 4];
    let bool = true;
    let obj = { fruit: "banana" };

    console.log(typeof num, num);
    console.log(typeof str, str);
    console.log(typeof arr, arr);
    console.log(typeof bool, bool);
    console.log(typeof obj, obj);
};
simpleTask();


// ===== ЗАДАНИЕ 2: Функции =====
function getReviewerNumber(number, lab) {
    // 2.1 Функция определяющая номер ревьюера для вашей группы по вашему номеру и номеру лабораторной работы
    // Номер ревьювера = (Ваш номер + Номер лабораторной) % Общее количество студентов
    // Пример: Студент №5, Лабораторная №1 → Ревьювер: (5 + 1) % 23 = 6

    if (number === undefined || lab === undefined) {
        return ("Ошибка: функция требует два аргумента");
    }
    if (typeof number !== 'number' || typeof lab !== 'number') {
        return("Ошибка: оба аргумента должны быть числами");
    }
    if (number < 0 || lab < 0) {
        return ("Ошибка: оба аргумента должны быть положительными числами");
    }
    if (!Number.isInteger(number) || !Number.isInteger(lab)) {
        return ("Ошибка: оба аргумента должны быть целыми числами");
    }

    let numberrev = (number + lab) % 23;
    return numberrev;
};

function getVariant(number, variants) {
    // 2.2 Функция определяющая номер варианта, исходя из количества вариантов

    if (number === undefined || variants === undefined) {
        return ("Ошибка: функция требует два аргумента");
    }
    if (typeof number !== 'number' || typeof variants !== 'number') {
        return ("Ошибка: оба аргумента должны быть числами!");
    }
    if (number < 0 || variants < 0) {
        return ("Ошибка: оба аргумента должны быть положительными числами");
    }
    if (!Number.isInteger(number) || !Number.isInteger(variants)) {
        return ("Ошибка: оба аргумента должны быть целыми числами");
    }
    if (variants === 0) {
        return ("Количество вариантов не может быть нулем!");
    }

    let result;
    if (number % variants === 0) {
        result = variants; // Если делится без остатка - последний вариант
    } else {
        result = number % variants;
    }
    return result;
};

function calculate(a, b, operation) {
    // 2.3 Напишите функцию калькулятор, калькулятор обрабатывает следующие операции: +, -, *, /
 
    if (arguments.length !== 3) {
        return ("Ошибка: необходимы 3 аргумента");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return ("Ошибка: первые два аргумента должны быть числами!");
    }

    if (typeof operation !== 'string') {
        return ("Ошибка: третий аргумент должен быть строкой!");
    }

    let result;
    if (operation === "+") {
        result = a + b;
    }
    else if (operation === "-") {
        result = a - b;
    }
    else if (operation === "*") {
        result = a * b;
        if (!isFinite(result)) {
            return ("Ошибка: переполнение при умножении");
        }
    }
    else if (operation === "/") {
        if (b === 0) {
            return ("Деление на ноль!");
        }
        result = a / b;
    }
    else {
        return ("Неизвестная операция. Доступные операции: +, -, *, /");
    }
    return result;
}             

function calculateArea(figure, ...params) {
    // 2.4 Напишите функцию для определения площади фигур 'circle', 'rectangle', 'triangle'
    // Используйте switch.

    if (typeof figure !== 'string') {
        return ("Ошибка: первый аргумент должен быть строкой (название фигуры)");
    }

    let area;
    const PI = 3.14;

    switch (figure) {
        case 'circle':
            if (params.length !== 1) {
                return ("Ошибка: для круга нужен 1 параметр - радиус");
            }
            const radius = params[0];
            if (typeof radius !== 'number' || radius <= 0) {
                return ("Ошибка: радиус должен быть положительным числом");
            }
            area = PI * radius ** 2;
            break;

        case 'rectangle':
            if (params.length !== 2) {
                return ("Ошибка: для прямоугольника необходимы 2 параметра - длина и ширина");
            }
            const length = params[0];
            const width = params[1];
            if (typeof length !== 'number' || typeof width !== 'number' || length <= 0 || width <= 0) {
                return ("Ошибка: длина и ширина должны быть положительными числами");
            }
            area = length * width;
            break;

        case 'triangle':
            if (params.length !== 2) {
                return ("Ошибка: для треугольника необходимы 2 параметра - основание и высота");
            }
            const base = params[0];
            const height = params[1];
            if (typeof base !== 'number' || typeof height !== 'number' || base <= 0 || height <= 0) {
                return ("Ошибка: основание и высота должны быть положительными числами");
            }
            area = (base * height) / 2;
            break;

        default:
            return ("Ошибка: неизвестная фигура. Доступные: circle, rectangle, triangle");
    }
    return area;
};


// 2.5 Стрелочные функции
const reverseString = (str) => {
    // Функция возвращает перевернутую строку

    if (typeof str !== 'string') {
        return ('Ошибка: аргумент должен быть строкой');
    }
    if (str.length === 0) {
        return ('Передана пустая строка');
    }

    let reversed = '';
    try {
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        if (reversed.length !== str.length) {
            return ('Ошибка: длина перевернутой строки не совпадает с оригиналом');
        }
        return reversed;

    } catch (error) {
        return ('Ошибка при перевороте строки:', error.message);
    }
};


const getRandomNumber = (min, max) => {
    // Функция возвращает случайное число между min и max

    if (min === undefined || max === undefined) {
        return ('Ошибка: функция требует два аргумента');
    }

    if (typeof min !== 'number' || typeof max !== 'number') {
        return ('Ошибка: аргументы должны быть числами');
    }

    if (min > max) {
        return ('Ошибка: min не может быть больше max');
    }

    try {
        const random = Math.floor(Math.random() * (max - min + 1) + min);

        if (random < min || random > max) {
            return ('Результат находится вне диапазона');
        }
        return random;

    } catch (error) {
        return (`Ошибка генерации случайного числа: ${ error.message }`);
    }
};
        

// ===== ЗАДАНИЕ 3: Объекты =====
const book = {
    // 3.1 Создайте объект "книга" с полями для хранения заголовка, автора, года выпуска, количества страниц, и доступности
    // объект должен иметь два метода - getInfo, который возвращает одной строкой информацию о названии книги, авторе, годе выпуска, количестве страниц
    // и метод toggleAvailability, который меняет значение доступности и возвращает его

    name: "Peaches for Monsieur le Curé",
    author: "Joanne Harris",
    year: 2024,
    numofpages: 576,
    access: "да",
};

function getInfo() {
    return `${book.name} ${book.author} ${book.year} ${book.numofpages}`;
}

function toggleAvailability() {
    this.access = "нет";
    return this.access;
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
        let sum = 0;
        let count = 0;
        for (let i in this.grades) {
            sum += this.grades[i];
            count++;
        }
        let average = sum / count;
        return average;
    },

    // Метод для добавления новой оценки
    addGrade(subject, grade) {
        try {
            if (subject === undefined || grade === undefined) {
                return ("Ошибка: предмет и оценка обязательны");
            }
            if (typeof subject !== 'string' || typeof grade !== 'number') {
                return ("Ошибка: первый аргумент должен быть строкой, второй - числом");
            }
            this.grades[subject] = grade;
            return `Добавлена новая оценка ${subject}: ${grade}`;
        } catch (error) {
            console.error(error.message);
            return null;
        }
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
    numbers.forEach(number => { if (number > 50) console.log(number) });
   
    // 2. Используйте map для создания массива квадратов чисел
    console.log("Квадраты чисел:");
    const squares = numbers.map(number => console.log(number ** 2));

    // 3. Используйте filter для получения активных пользователей
    const activeUsers = users.filter(user => user.isActive === true);
    console.log("Активные пользователи:");
    activeUsers.forEach(user => console.log(`- ${user.name} (id: ${user.id}, age: ${user.age})`));

    // 4. Используйте find для поиска пользователя с именем "Виктория"
    const victoria = users.find(user => user.name === "Виктория");
    console.log(`${victoria.name} - id: ${victoria.id}, age: ${victoria.age}, isActive: ${victoria.isActive}`);

    // 5. Используйте reduce для подсчета суммы всех чисел
    const sum = numbers.reduce((num, curnum) => num + curnum);
    console.log(sum);

    // 6. Используйте sort для сортировки пользователей по возрасту (по убыванию)
    const sortedByAge = users.sort((a, b) => b.age - a.age);
    console.log("Сортировка пользователей по возрасту (по убыванию):")
    sortedByAge.forEach(user => console.log(`${user.name} - ${user.age}`));

    // 7. Используйте метод для проверки, все ли пользователи старше 18 лет
    const allAdults = users.find(age => age.age <= 18);
    if (!allAdults) {
        console.log("Все пользователи старше 18 лет")
    }
    else {
        console.log("Есть пользователи младше 18 лет")
    }

    // 8. Создайте цепочку методов: 
    //    - отфильтровать активных пользователей
    //    - преобразовать в массив имен
    //    - отсортировать по алфавиту
    const activeUserNames = users.filter(user => user.isActive).map(user => user.name).sort((a, b) => a.localeCompare(b));
    console.log(activeUserNames);
};
processArrays();

// ===== ЗАДАНИЕ 5: Менеджер задач =====
const taskManager = {
    tasks: [
        { id: 1, title: "Изучить JavaScript", completed: false, priority: "high" },
        { id: 2, title: "Сделать лабораторную работу", completed: true, priority: "high" },
        { id: 3, title: "Прочитать книгу", completed: false, priority: "medium" }
    ],

    // 5.1 Добавление задачи
    addTask(title, priority = "medium") {
        if (title === undefined) {
            return ("Ошибка: введите аргумент(ы)");
        }
        if (typeof title !== "string" || typeof priority !== "string") {
            return ("Ошибка: аргументы должны быть строками");
        }
        const possiblepriority = ["high", "medium", "low"];
        if (!possiblepriority.includes(priority)) {
            return (`Приоритет должен быть одним из следующих вариантов: ${possiblepriority.join(", ")}`);
        }

        let newtask = {
            id: Math.max(... this.tasks.map(task => task.id), 0) + 1,
            title: title,
            completed: false,
            priority: priority,
        };
        this.tasks.push(newtask);
        return `Добавлена новая задача: ${newtask.title}`;
    },

    // 5.2 Отметка выполнения
    completeTask(taskId) {
        if (taskId === undefined) {
            return ("Ошибка: введите аргумент(ы)");
        }
        if (typeof taskId !== "number") {
            return ("Ошибка: аргумент должен быть числом");
        }
        if (taskId < 0) {
            return ("Ошибка: аргумент должен быть положительным числом");
        }
        if (!Number.isInteger(taskId)) {
            return ("ID задачи должен быть целым числом");
        }

        const task = this.tasks.find(task => task.id === taskId);
        if (!task) {
            return (`Задачи с ID ${taskId} не существует`);
        }
        if (task.completed) {
            return (`Задача ${task.title} уже выполнена`);
        }
        task.completed = true;
        return `Задача ${task.title} выполнена`
    },

    // 5.3 Удаление задачи
    deleteTask(taskId) {
        if (taskId === undefined) {
            return ("Ошибка: введите аргумент");
        }
        if (typeof taskId !== "number") {
            return ("Ошибка: аргумент должен быть числом");
        }
        if (taskId < 0) {
            return ("Ошибка: аргумент должен быть положительным числом");
        }
        if (!Number.isInteger(taskId)) {
            return ("ID задачи должен быть целым числом");
        }

        const initiallen = this.tasks.length;
        this.tasks = this.tasks.filter(task => task.id !== taskId);

        if (this.tasks.length < initiallen) {
            return `Задача №${taskId} удалена`;
        } else {
            return `Задачи №${taskId} в списке нет`;
        }
    },

    // 5.4 Получение списка задач по статусу
    getTasksByStatus(completed) {
        if (completed === undefined) {
            return ("Ошибка: введите аргумент");
        }
        if (typeof completed !== "boolean") {
            return ("Ошибка: аргумент должен быть булевым значением");
        }
        if (!Array.isArray(this.tasks)) {
            return ("Список задач не инициализирован");
        }

        const filteredtasks = this.tasks.filter(task => task.completed === completed);
        const tasktitles = filteredtasks.map(task => task.title).join(", ");

        if (filteredtasks.length === 0) {
            return completed ? "Нет выполненных задач" : "Все задачи выполнены";
        }
        else {
            return completed ? `Выполненные задачи: ${tasktitles}` : `Невыполненные задачи: ${tasktitles}`;
        }
    },

    // 5.5 Статистика возвращает объект:
    getStats() {
        if (this.tasks === null || this.tasks === undefined) {
            return ("Список задач отсутствует");
        }

        const total = this.tasks.length;
        const completed = this.tasks.filter(task => task.completed === true).length;
        const pending = total - completed;
        const completionRate = total > 0 ? (completed * 100) / total : 0;

        return {
            total: total,
            completed: completed,
            pending: pending,
            completionRate: completionRate,
        }
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
3. Если предложенное регулярное выражение некорректно, вы можете исправить его. */

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


function runTests() {
    console.log("=== ТЕСТИРОВАНИЕ ===");

    // Тест 1: getReviewerNumber
    console.assert(getReviewerNumber(5, 1) === 6, "Тест получения ревьюера провален");
    console.assert(getReviewerNumber(22, 2) === 1, "Тест получения ревьюера провален");
    console.assert(getReviewerNumber() === "Ошибка: функция требует два аргумента", "Тест получения ревьюера провален");
    console.assert(getReviewerNumber("q", 12) === "Ошибка: оба аргумента должны быть числами", "Тест получения ревьюера провален");
    console.assert(getReviewerNumber(-1, 12) === "Ошибка: оба аргумента должны быть положительными числами", "Тест получения ревьюера провален");
    console.assert(getReviewerNumber(14, 1.2) === "Ошибка: оба аргумента должны быть целыми числами", "Тест получения ревьюера провален");

    // Тест 2: getVariant
    console.assert(getVariant(14, 4) === 2, "Тест варианта провален");
    console.assert(getVariant(4, 2) === 2, "Тест варианта провален");
    console.assert(getVariant() === "Ошибка: функция требует два аргумента", "Тест получения ревьюера провален");
    console.assert(getVariant("t", 4) === "Ошибка: оба аргумента должны быть числами!", "Тест варианта провален");
    console.assert(getVariant(-4, 5) === "Ошибка: оба аргумента должны быть положительными числами", "Тест варианта провален");
    console.assert(getVariant(1.4, 12) === "Ошибка: оба аргумента должны быть целыми числами", "Тест варианта провален");
    console.assert(getVariant(2, 0) === "Количество вариантов не может быть нулем!", "Тест варианта провален");
    
    // Тест 3: calculate
    console.assert(calculate(10, 5, '+') === 15, "Тест калькулятора сложения провален");
    console.assert(calculate(10, 5, '*') === 50, "Тест калькулятора умножения провален");
    console.assert(calculate(10, 5, ) === "Ошибка: необходимы 3 аргумента", "Тест калькулятора сложения провален");
    console.assert(calculate(10, 0, '/') === "Деление на ноль!", "Тест калькулятора умножения провален");
    console.assert(calculate(10, 5, '&') === "Неизвестная операция. Доступные операции: +, -, *, /", "Тест калькулятора сложения провален");
    console.assert(calculate("10", 5, '*') === "Ошибка: первые два аргумента должны быть числами!", "Тест калькулятора умножения провален");
    console.assert(calculate(10, 5, 123) === "Ошибка: третий аргумент должен быть строкой!", "Тест проверки типа провален");

    // Тест 4: calculateArea
    console.assert(calculateArea('circle', 2) === 12.56, "Тест площади круга провален");
    console.assert(calculateArea('rectangle', 4, 5) === 20, "Тест площади прямоугольника провален");
    console.assert(calculateArea('triangle', 6, 8) === 24, "Тест площади треугольника провален");
    console.assert(calculateArea('circle', -2) === "Ошибка: радиус должен быть положительным числом", "Тест площади круга провален");
    console.assert(calculateArea('rectangle', 4) === "Ошибка: для прямоугольника необходимы 2 параметра - длина и ширина", "Тест площади прямоугольника провален");
    console.assert(calculateArea('triangle', 6) === "Ошибка: для треугольника необходимы 2 параметра - основание и высота", "Тест площади треугольника провален");
    console.assert(calculateArea('square', 2) === "Ошибка: неизвестная фигура. Доступные: circle, rectangle, triangle", "Тест площади провален");
    console.assert(calculateArea(4, 5) === "Ошибка: первый аргумент должен быть строкой (название фигуры)", "Тест площади провален");

    // Тест 5: reverseString
    console.assert(reverseString("qwerty") === "ytrewq", "Тест переворота строки провален1");
    console.assert(reverseString("") === "Передана пустая строка", "Тест переворота строки провален2");
    console.assert(reverseString(12) === "Ошибка: аргумент должен быть строкой", "Тест переворота строки провален3");

    // Тест 6: getRandomNumber 
    const random = getRandomNumber(5, 10);
    console.assert(random >= 5 && random <= 10, "Тест случайного числа провален");
    console.assert(getRandomNumber(1) === "Ошибка: функция требует два аргумента", "Тест случайного числа провален");
    console.assert(getRandomNumber("1", 10) === "Ошибка: аргументы должны быть числами", "Тест случайного числа провален");
    console.assert(getRandomNumber(50, 25) === "Ошибка: min не может быть больше max", "Тест случайного числа провален");

    // Тест 7: book
    console.assert(getInfo() === "Peaches for Monsieur le Curé Joanne Harris 2024 576", "Тест книги провален1");
    console.assert(toggleAvailability() === "нет", "Тест книги провален");

    // Тест 8: student
    console.assert(student.getAverageGrade() === 90, "Тест студента провален1");
    console.assert(student.addGrade("chemistry", 89) === "Добавлена новая оценка chemistry: 89", "Тест студента провален2");
    console.assert(student.addGrade("chemistry",) === "Ошибка: предмет и оценка обязательны", "Тест студента провален3");
    console.assert(student.addGrade("chemistry", "89") === "Ошибка: первый аргумент должен быть строкой, второй - числом", "Тест студента провален4");

    // Тест 9: taskManager
    console.assert(taskManager.addTask("Провести тренировку") === "Добавлена новая задача: Провести тренировку", "Тест добавления задачи провален1");
    console.assert(taskManager.addTask() === "Ошибка: введите аргумент(ы)", "Тест добавления задачи провален2");
    console.assert(taskManager.addTask(123) === "Ошибка: аргументы должны быть строками", "Тест добавления задачи провален");

    console.assert(taskManager.completeTask(3) === "Задача Прочитать книгу выполнена", "Тест выполнения задачи провален1");
    console.assert(taskManager.completeTask("3") === "Ошибка: аргумент должен быть числом", "Тест выполнения задачи провален");

    console.assert(taskManager.deleteTask(1) === "Задача №1 удалена", "Тест добавления задачи провален");
    console.assert(taskManager.deleteTask() === "Ошибка: введите аргумент", "Тест добавления задачи провален");

    console.assert(taskManager.getTasksByStatus(false) === "Невыполненные задачи: Провести тренировку", "Тест задачи по статусу провален1");
    console.assert(taskManager.getTasksByStatus("false") === "Ошибка: аргумент должен быть булевым значением", "Тест задачи по статусу провален");
    
    const stats = taskManager.getStats();
    console.assert(
        stats.total === 3 &&
        stats.completed === 2 &&
        stats.pending === 1 &&
        stats.completionRate === 66.66666666666667,
        "Тест статистики провален");

    // Тест 10: validatePassword
    console.assert(validatePassword("Hello123!") === true, "Тест валидации пароля провален");
    console.assert(validatePassword("Gjs5*hf4$") === true, "Тест валидации пароля провален");
    console.assert(validatePassword("Hello123-") === false, "Тест валидации пароля провален");
    console.assert(validatePassword("Hello1!") === false, "Тест валидации пароля провален");
    console.assert(validatePassword("hello123&") === false, "Тест валидации пароля провален");
    console.assert(validatePassword("helloNOnum*") === false, "Тест валидации пароля провален");
    console.assert(validatePassword("HELLO123$") === false, "Тест валидации пароля провален");
    console.assert(validatePassword("Hello12345") === false, "Тест валидации пароля провален");


    console.log("Все тесты пройдены! ✅");
}

// Запуск тестов
runTests();