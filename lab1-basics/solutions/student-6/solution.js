// ===== ЗАДАНИЕ 1: Базовые операции =====
function simpleTask() {
    // 1.1 Объявите переменные разных типов (не менне 5)
    // 1.2 Выведите типы всех переменных
    
    // Переменная age, которая приняла возраст, как число (изменяемое)
    let age = 20;
    age = 21;

    // Постоянная name, которая принимает имя, как строку (неизменяемое)
    const name = "Марсель";
    
    // Булевая переменная, принимает правду или ложь
    let bool = false;

    // Переменная spec, приняла пустоту null
    let spec = null;

    // Переменная un, приняла неопределенность
    let un = undefined;

    // Выводим типы всех переменных
    console.log(typeof age, typeof name, typeof bool, typeof spec, typeof un);
}

// ===== ЗАДАНИЕ 2: Функции =====
function getReviewerNumber(number, lab) {
    // 2.1 Функция определяющая номер ревьюера для вашей группы по вашему номеру и номеру лабораторной работы
    // Номер ревьюера = (Ваш номер + Номер лабораторной) % Общее количество студентов
    // Прим.: используем константу группы на момент выполнения
    const students = 23;

    // Жёстко не переопределяем входы — используем переданные аргументы
    const my_number = Number(number);
    const number_of_lab = Number(lab);

    // Валидация входа
    if (!Number.isInteger(my_number) || !Number.isInteger(number_of_lab) || my_number < 0 || number_of_lab < 0) {
        console.log("нужны неотрицательные целые числа (ваш номер, номер лабы)");
        return null;
    }

    const number_of_reviewer = (my_number + number_of_lab) % students;
    return number_of_reviewer;
}

function getVariant(number, variants) {
    // 2.2 Функция определяющая номер варианта, исходя из количества вариантов
    // используем -1, так как в JS деление по остатку начинается с 0, а 0-го варианта нет
    if (!Number.isInteger(number) || !Number.isInteger(variants) || variants <= 0) {
        console.log("проверьте входные данные: number и variants — положительные целые");
        return null;
    }
    let number_var = ((number - 1) % variants + variants) % variants + 1; // аккуратная мод-арифметика
    return number_var;
}

function calculate(a, b, operation) {
    // 2.3 Напишите функцию калькулятор, калькулятор обрабатывает операции: +, -, *, /
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("a и b должны быть числами");
        return null;
    }

    if (operation === "+") {
        return a + b;
    }
    if (operation === "-") {
        return a - b;
    }
    if (operation === "*") {
        return a * b;
    }
    if (operation === "/") {
        if (b === 0) {
            console.log("делить на 0 нельзя");
            return null;
        }
        return a / b;
    }

    console.log("неподдерживаемая операция (используйте +, -, *, /)");
    return null;
}

function calculateArea(figure, ...params) {
    // 2.4 Напишите функцию для определения площади фигур 'circle', 'rectangle', 'triangle'
    // Используем switch.
    switch (figure) {
        case "circle":
            // нужен один положительный параметр (радиус)
            if (params.length !== 1 || typeof params[0] !== "number" || params[0] <= 0) {
                console.log("нужен один положительный параметр (radius)");
                return null;
            }
            return Math.PI * params[0] * params[0]; // πr^2

        case "rectangle":
            // нужны два положительных параметра (длина, ширина)
            if (params.length !== 2 || params.some(p => typeof p !== "number" || p <= 0)) {
                console.log("нужно два положительных параметра (length, width)");
                return null;
            }
            return params[0] * params[1];

        case "triangle":
            // нужны два положительных параметра (основание, высота)
            if (params.length !== 2 || params.some(p => typeof p !== "number" || p <= 0)) {
                console.log("нужно два положительных параметра (base, height)");
                return null;
            }
            return 0.5 * params[0] * params[1]; // 1/2 * b * h

        default:
            console.log("неверные параметры или не та фигура (triangle, circle, rectangle)");
            return null;
    }
}

// 2.5 Стрелочные функции
const reverseString = (str) => {
    // Функция возвращает перевернутую строку
    if (typeof str !== "string") return "";
    return str.split("").reverse().join("");
};

const getRandomNumber = (min, max) => {
    // Функция возвращает случайное целое число между min и max включительно
    const a = Number(min);
    const b = Number(max);
    if (!Number.isFinite(a) || !Number.isFinite(b) || a > b) {
        console.log("некорректные границы диапазона");
        return null;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
};

// ===== ЗАДАНИЕ 3: Объекты =====
const book = {
    // 3.1 Объект "книга"
    zagolovok: "War and Peace", // заголовок
    author: "Tolstoy L.N",      // автор
    year_of_create: 1869,       // год выпуска (реалистичное значение)
    quantity_of_pages: 1225,    // кол-во страниц (пример)
    is_access: true,            // доступна

    // Возвращает одной строкой информацию о книге
    getInfo: function () {
        const info = `Zagolovok: ${this.zagolovok}, author: ${this.author}, year of create: ${this.year_of_create}, quantity of pages: ${this.quantity_of_pages}, доступна: ${this.is_access ? "Да" : "Нет"}`;
        console.log(info);
        return info; // чтобы можно было тестировать
    },

    // Меняет значение доступности и возвращает его
    toggleAvailability: function () {
        this.is_access = !this.is_access; // меняем на противоположное значение
        return this.is_access; // возвращаем новое значение
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
        let sum = 0;
        let count = 0;
        
        for (const subject in this.grades) {
            sum += this.grades[subject];
            count++; 
        }

        if (count === 0) {
            return 0;
        }
        // Возвращаем среднее арифметическое
        return sum / count;
    },
    
    // Метод для добавления новой оценки (или обновления имеющейся)
    addGrade(subject, grade) {
        // Валидация предмета и оценки
        if (typeof subject !== "string" || subject.trim() === "") {
            console.log("некорректное название предмета");
            return false;
        }
        if (typeof grade !== "number" || grade < 0 || grade > 100) {
            console.log("оценка должна быть числом от 0 до 100");
            return false;
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
    numbers.forEach(number => {
        if (number > 50) {
            console.log(number);
        }
    });

    // 2. Используйте map для создания массива квадратов чисел
    const squares = numbers.map(number => number * number);

    // 3. Используйте filter для получения активных пользователей
    const activeUsers = users.filter(user => user.isActive);

    // 4. Используйте find для поиска пользователя с именем "Виктория"
    const victoria = users.find(user => user.name === "Виктория");

    // 5. Используйте reduce для подсчета суммы всех чисел
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // 6. Используйте sort для сортировки пользователей по возрасту (по убыванию)
    const sortedByAge = [...users].sort((a, b) => b.age - a.age);

    // 7. Используйте метод для проверки, все ли пользователи старше 18 лет
    const allAdults = users.every(user => user.age >= 18);

    // 8. Цепочка: отфильтровать активных -> в массив имён -> отсортировать по алфавиту
    const activeUserNames = users
        .filter(user => user.isActive) // Фильтруем активных
        .map(user => user.name)        // Преобразуем в имена
        .sort((a, b) => a.localeCompare(b)); // Сортируем по алфавиту

    // Возвращаем результаты, чтобы можно было тестировать
    return {
        squares,
        activeUsers,
        victoria,
        sum,
        sortedByAge,
        allAdults,
        activeUserNames,
        words // оставим words как есть для возможных задач
    };
}

// ===== ЗАДАНИЕ 5: Менеджер задач =====
const taskManager = {
    tasks: [
        { id: 1, title: "Изучить JavaScript", completed: false, priority: "high" },
        { id: 2, title: "Сделать лабораторную работу", completed: true, priority: "high" },
        { id: 3, title: "Прочитать книгу", completed: false, priority: "medium" }
    ],

    // Генерация уникального ID (макс+1)
    generateId() {
        if (this.tasks.length === 0) return 1;
        return Math.max(...this.tasks.map(t => t.id)) + 1;
    },
    
    addTask(title, priority = "medium") {
        // 5.1 Добавление задачи
        // Проверяем валидность приоритета
        const validPriorities = ["low", "medium", "high"];
        if (!validPriorities.includes(priority)) {
            console.log(`Ошибка: приоритет "${priority}" недопустим. Используйте: low, medium, high`);
            return null;
        }
        if (typeof title !== "string" || title.trim() === "") {
            console.log("Ошибка: пустой заголовок задачи");
            return null;
        }
        
        // Создаем новую задачу
        const newTask = {
            id: this.generateId(), // Генерируем уникальный ID
            title: title.trim(),
            completed: false,
            priority: priority
        };
        
        // Добавляем задачу в массив
        this.tasks.push(newTask);
        console.log(`✅ Задача добавлена: "${newTask.title}" (приоритет: ${priority})`);
        
        return newTask;
    },
    
    completeTask(taskId) {
        // 5.2 Отметка выполнения
        const task = this.tasks.find(t => t.id === taskId);
        if (!task) {
            console.log(`Задача с id=${taskId} не найдена`);
            return false;
        }
        if (task.completed) {
            // уже выполнена — повторная отметка не меняет состояние
            return true;
        }
        task.completed = true;
        return true;
    },

    // Удаление задачи
    deleteTask(taskId) {
        // 5.3 Удаление по id; возвращаем true/false
        const idx = this.tasks.findIndex(t => t.id === taskId);
        if (idx === -1) {
            console.log(`Задача с id=${taskId} не найдена`);
            return false;
        }
        this.tasks.splice(idx, 1);
        return true;
    },

    // Получение списка задач по статусу
    getTasksByStatus(completed) {
        // 5.4 completed: true — выполненные, false — невыполненные
        if (typeof completed !== "boolean") {
            console.log("нужно передать completed: true или false");
            return [];
        }
        return this.tasks.filter(t => t.completed === completed);
    },
    
    getStats() {
        /* 5.5 Статистика возвращает объект:        
           total,
           completed,
           pending,
           completionRate (0..1)
        */
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.completed).length;
        const pending = total - completed;
        const completionRate = total === 0 ? 0 : completed / total;
        return { total, completed, pending, completionRate };
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
2. Напишите тесты, покрывающие все различные варианты. Обратите внимание: тесты должны обеспечивать полное покрытие, но не быть дублирующимися.
3. Если предложенное регулярное выражение некорректно, можно исправить его.

Вычисление своего варианта:
Номер варианта = Ваш номер % Общее количество вариантов

Требование: сделать ВАРИАНТ 2 (валидация пароля).
*/

/**
 * Вариант 1: Валидация email адреса
 * Правила:
 * - Латиница, цифры, спецсимволы: ._%+-
 * - Обязательный символ @
 * - Доменная часть: латиница, цифры, точка/дефис
 * - Минимальная длина 5 символов
 */
function validateEmail(email) {
    if (typeof email !== "string" || email.length < 5) return false;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
}

/**
 * Вариант 2 (ОБЯЗАТЕЛЬНО): Валидация пароля
 * Правила:
 * - Минимум 8 символов
 * - Хотя бы одна заглавная буква
 * - Хотя бы одна строчная буква  
 * - Хотя бы одна цифра
 * - Хотя бы один специальный символ: !@#$%^&*()
 */
function validatePassword(password) {
    if (typeof password !== "string") return false;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
    return passwordRegex.test(password);
}

/**
 * Вариант 3: Валидация номера телефона (российский формат)
 */
function validatePhone(phone) {
    if (typeof phone !== "string") return false;
    const phoneRegex = /^(\+7|8)[\s( -]?\d{3}[\s) -]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
    return phoneRegex.test(phone);
}

/**
 * Вариант 4: Валидация даты в формате DD.MM.YYYY
 */
function validateDate(date) {
    if (typeof date !== "string") return false;
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/;
    return dateRegex.test(date);
}

// ===== ТЕСТИРОВАНИЕ =====
function runTests() {
    console.log("=== ТЕСТИРОВАНИЕ ===");

    // --- Задание 1: нет явных возвращаемых значений, просто проверяем, что не падает
    simpleTask();

    // --- Задание 2.1: getReviewerNumber
    console.assert(getReviewerNumber(5, 1) === 6, "getReviewerNumber: базовый кейс провален");
    console.assert(getReviewerNumber(22, 5) === (22 + 5) % 23, "getReviewerNumber: проверка модуля провалена");
    console.assert(getReviewerNumber(-1, 1) === null, "getReviewerNumber: должна вернуть null на отрицательных входах");

    // --- Задание 2.2: getVariant (границы и корректность мод-арифметики)
    console.assert(getVariant(1, 5) === 1, "getVariant: 1 из 5 должно быть 1");
    console.assert(getVariant(5, 5) === 5, "getVariant: 5 из 5 должно быть 5");
    console.assert(getVariant(6, 5) === 1, "getVariant: 6 из 5 должно быть 1");
    console.assert(getVariant(0, 5) === 5, "getVariant: 0 из 5 должно быть 5");
    console.assert(getVariant(10, 0) === null, "getVariant: variants=0 -> null");

    // --- Задание 2.3: calculate (все операции и ветка деления на 0)
    console.assert(calculate(10, 5, "+") === 15, "calculate '+': провал");
    console.assert(calculate(10, 5, "-") === 5, "calculate '-': провал");
    console.assert(calculate(10, 5, "*") === 50, "calculate '*': провал");
    console.assert(calculate(10, 5, "/") === 2, "calculate '/': провал");
    console.assert(calculate(10, 0, "/") === null, "calculate '/': деление на 0 должно вернуть null");
    console.assert(calculate(10, 5, "%") === null, "calculate: неподдерживаемая операция -> null");

    // --- Задание 2.4: calculateArea (все ветки switch + ошибки)
    console.assert(calculateArea("circle", 2) > 12.56 && calculateArea("circle", 2) < 12.57, "circle: πr^2 ошибочно");
    console.assert(calculateArea("rectangle", 3, 4) === 12, "rectangle: ошибка");
    console.assert(calculateArea("triangle", 10, 2) === 10, "triangle: ошибка");
    console.assert(calculateArea("circle", -1) === null, "circle: отрицательный радиус -> null");
    console.assert(calculateArea("rectangle", 3) === null, "rectangle: недостаточно параметров -> null");
    console.assert(calculateArea("hexagon", 1) === null, "default ветка: должна вернуть null");

    // --- Задание 2.5: стрелочные функции
    console.assert(reverseString("абв") === "вба", "reverseString: базовый кейс провален");
    console.assert(reverseString("") === "", "reverseString: пустая строка");
    const rand = getRandomNumber(1, 3);
    console.assert([1, 2, 3].includes(rand), "getRandomNumber: число вне диапазона 1..3");
    console.assert(getRandomNumber(5, 4) === null, "getRandomNumber: min>max -> null");

    // --- Задание 3: объекты book / student
    const before = book.is_access;
    const after = book.toggleAvailability();
    console.assert(after === !before, "book.toggleAvailability: не изменило доступность");
    const info = book.getInfo();
    console.assert(typeof info === "string" && info.includes(book.author), "book.getInfo: должна вернуть строку с автором");
    console.assert(student.getAverageGrade() === (90 + 95 + 85) / 3, "student.getAverageGrade: неверный расчёт");
    console.assert(student.addGrade("physics", 100) === true && student.grades.physics === 100, "student.addGrade: не добавила/обновила оценку");
    console.assert(student.addGrade("", 50) === false, "student.addGrade: пустой предмет должен дать false");
    console.assert(student.addGrade("chem", 200) === false, "student.addGrade: оценка вне диапазона должна дать false");

    // --- Задание 4: массивы
    const arrRes = processArrays();
    console.assert(Array.isArray(arrRes.squares) && arrRes.squares.length === 10, "processArrays: squares");
    console.assert(arrRes.activeUsers.every(u => u.isActive), "processArrays: activeUsers");
    console.assert(arrRes.victoria && arrRes.victoria.name === "Виктория", "processArrays: find Виктория");
    console.assert(arrRes.sum === 12 + 45 + 23 + 67 + 34 + 89 + 56 + 91 + 27 + 14, "processArrays: сумма чисел");
    console.assert(arrRes.sortedByAge[0].age >= arrRes.sortedByAge[1].age, "processArrays: сортировка по убыванию возраста");
    console.assert(arrRes.allAdults === true, "processArrays: allAdults");
    const namesSorted = [...arrRes.activeUserNames].sort((a,b)=>a.localeCompare(b));
    console.assert(JSON.stringify(arrRes.activeUserNames) === JSON.stringify(namesSorted), "processArrays: алфавитный порядок имён активных");

    // --- Задание 5: taskManager
    const newTask = taskManager.addTask("Сделать тесты", "low");
    console.assert(newTask && newTask.id > 0 && newTask.priority === "low", "taskManager.addTask: базовый кейс");
    console.assert(taskManager.addTask("Неверный приоритет", "urgent") === null, "taskManager.addTask: должен отвергнуть плохой приоритет");
    const done = taskManager.completeTask(newTask.id);
    console.assert(done === true && taskManager.getTasksByStatus(true).some(t => t.id === newTask.id), "taskManager.completeTask: не отметил выполненной");
    const stats = taskManager.getStats();
    console.assert(typeof stats.total === "number" && typeof stats.completionRate === "number", "taskManager.getStats: формат");
    const removed = taskManager.deleteTask(newTask.id);
    console.assert(removed === true && !taskManager.tasks.some(t => t.id === newTask.id), "taskManager.deleteTask: не удалило задачу");

    // --- Задание 6: Регулярные выражения — Вариант 2 (ПАРОЛЬ)
    // Позитивные примеры (должны пройти)
    console.assert(validatePassword("Aa1!aaaa"), "validatePassword: валидный пароль отклонён");
    console.assert(validatePassword("Zz9)zzzzzz"), "validatePassword: валидный пароль с ) отклонён");

    // Негативные примеры (проверяем каждое правило)
    console.assert(!validatePassword("short!1A"), "validatePassword: длина <8 — должен быть false");
    console.assert(!validatePassword("noupper1!"), "validatePassword: нет заглавной — должен быть false");
    console.assert(!validatePassword("NOLOWER1!"), "validatePassword: нет строчной — должен быть false");
    console.assert(!validatePassword("NoDigits!!"), "validatePassword: нет цифры — должен быть false");
    console.assert(!validatePassword("NoSpec1aa"), "validatePassword: нет спецсимвола — должен быть false");
    console.assert(!validatePassword("Рус1!Русский"), "validatePassword: посторонние символы (кириллица) — false");

    // Для полноты — короткие smoke-тесты остальных валидаторов (не обязательны, но полезны)
    console.assert(validateEmail("user.name+tag@mail-domain.com") === true, "validateEmail: валидный email");
    console.assert(validateEmail("bad@com") === false, "validateEmail: домен без TLD — false");
    console.assert(validatePhone("+7 (999) 123-45-67") === true, "validatePhone: формат с пробелами");
    console.assert(validatePhone("89991234567") === true, "validatePhone: слитно");
    console.assert(validatePhone("79991234567") === false, "validatePhone: должен начинаться с +7 или 8");
    console.assert(validateDate("31.12.1999") === true, "validateDate: валидная дата");
    console.assert(validateDate("32.13.1999") === false, "validateDate: неверный день/месяц");

    console.log("Все тесты пройдены! ✅");
}

// Запуск тестов
runTests();
