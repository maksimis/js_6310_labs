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
    console.log('1.1 Объявите переменные разных типов ');
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
    if (typeof number !== 'number' || typeof lab !== 'number' || Number.isNaN(number) || Number.isNaN(lab)) return 'Неправильный ввод данных';
    return ((number + lab - 1) % 23) + 1;
}

function getVariant(number, variants) {
    // 2.2 Функция определяющая номер варианта, исходя из количества вариантов
    if (typeof number !== 'number' || typeof variants !== 'number' || Number.isNaN(number) || Number.isNaN(variants)) return 'Неправильный ввод данных';
    return ((number - 1) % variants) + 1;
}

function calculate(a, b, operation) {
    if (typeof a !== 'number' || typeof b !== 'number' || Number.isNaN(a) || Number.isNaN(b)) {
        return 'Аргументы не являются числами';
    }

    let result;

    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b === 0) return 'Нельзя делить на ноль';
            result = a / b;
            break;
        default:
            return 'Неизвестная операция';
    }

    if (!Number.isFinite(result)) {
        return 'Ошибка: переполнение';
    }

    return result;
}

function calculateArea(figure, ...params) {
    if (typeof figure !== 'string' || figure.trim() === '') {
        return 'Неправильный ввод фигуры';
    }

    if (params.length === 0) {
        return 'Неправильный ввод параметров';
    }
    if (!params.every((p) => typeof p === 'number' && !isNaN(p))) {
        return 'Неправильный ввод параметров';
    }
    if (!params.every((p) => p >= 0)) {
        return 'Неправильный ввод параметров';
    }

    switch (figure) {
        case 'circle':
            return params.length === 1 ? Math.PI * params[0] ** 2 : 'Неправильный ввод параметров';
        case 'rectangle':
            return params.length === 2 ? params[0] * params[1] : 'Неправильный ввод параметров';
        case 'triangle':
            return params.length === 2 ? (params[0] * params[1]) / 2 : 'Неправильный ввод параметров';
        default:
            return 'Неправильный ввод фигуры';
    }
}

// 2.5 Стрелочные функции
const reverseString = (str) => {
    // Функция возвращает перевернутую строку
    if (typeof str == 'string') return str.split('').reverse().join('');
    return 'Неправильный ввод строки';
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
        const values = Object.values(this.grades);
        if (values.length === 0) return 0;

        const sum = values.reduce((acc, grade) => acc + grade, 0);
        return sum / values.length;
    },

    // Метод для добавления новой оценки
    addGrade(subject, grade) {
        if (typeof subject !== 'string' || subject.trim() === '') {
            return 'Неправильный ввод предмета';
        }

        if (typeof grade !== 'number' || isNaN(grade) || grade < 0 || grade > 100) {
            return 'Неправильный ввод оценки';
        }

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
    console.log('4.1 Используйте forEach для вывода всех чисел больше 50');
    numbers.forEach((number) => {
        if (number > 50) {
            console.log(number);
        }
    });

    // 2. Используйте map для создания массива квадратов чисел
    console.log('4.2 Используйте map для создания массива квадратов чисел');
    const squares = numbers.map((number) => number ** 2);
    console.log(squares);

    // 3. Используйте filter для получения активных пользователей
    console.log('4.3 Используйте filter для получения активных пользователей');
    const activeUsers = users.filter((user) => user.isActive);
    console.log(activeUsers);

    // 4. Используйте find для поиска пользователя с именем "Виктория"
    console.log('4.4 Используйте find для поиска пользователя с именем "Виктория"');
    const victoria = users.find((user) => user.name === 'Виктория');
    console.log(victoria);

    // 5. Используйте reduce для подсчета суммы всех чисел
    console.log('4.5 Используйте reduce для подсчета суммы всех чисел');
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    console.log(sum);

    // 6. Используйте sort для сортировки пользователей по возрасту (по убыванию)
    console.log('4.6 Используйте sort для сортировки пользователей по возрасту (по убыванию)');
    const sortedByAge = users.sort((a, b) => b.age - a.age);
    console.log(sortedByAge);

    // 7. Используйте метод для проверки, все ли пользователи старше 18 лет
    console.log('4.7 Используйте метод для проверки, все ли пользователи старше 18 лет');
    const allAdults = users.every((user) => user.age > 18);
    console.log(allAdults);

    // 8. Создайте цепочку методов:
    //    - отфильтровать активных пользователей
    //    - преобразовать в массив имен
    //    - отсортировать по алфавиту
    console.log('4.8 Создайте цепочку методов: \n- отфильтровать активных пользователей \n- преобразовать в массив имен \n- отсортировать по алфавиту');
    const activeUserNames = users
        .filter((user) => user.isActive)
        .map((user) => user.name)
        .sort();

    console.log(activeUserNames);
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
        let newTask = { id: ++this.lastId, title, priority, completed: false };
        this.tasks.push(newTask);
        return newTask;
    },

    completeTask(taskId) {
        // 5.2 Отметка выполнения
        const task = this.tasks.find((task) => task.id === taskId);
        if (!task) return 'Задача не найдена';
        task.completed = true;
        return task;
    },

    // Удаление задачи
    deleteTask(taskId) {
        const index = this.tasks.findIndex((task) => task.id === taskId);
        if (index === -1) {
            return 'Задача не найдена';
        }

        const [deletedTask] = this.tasks.splice(index, 1);
        return deletedTask;
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

// ===== ТЕСТИРОВАНИЕ =====
function runTests() {
    console.log('=== ТЕСТИРОВАНИЕ ===');

    // Тест 0: simpleTask
    simpleTask();

    // Тест 1: getReviewerNumber
    console.assert(getReviewerNumber('9', '1') === 'Неправильный ввод данных', 'Тест получения ревьюера провален(не число)');
    console.assert(getReviewerNumber(4, NaN) === 'Неправильный ввод данных', 'Тест получения ревьюера провален(не число)');
    console.assert(getReviewerNumber(undefined, 10) === 'Неправильный ввод данных', 'Тест получения ревьюера провален(не число)');
    console.assert(getReviewerNumber([1, 2], 4) === 'Неправильный ввод данных', 'Тест получения ревьюера провален(не число)');
    console.assert(getReviewerNumber(4, { k: 'ad' }) === 'Неправильный ввод данных', 'Тест получения ревьюера провален(не число)');
    console.assert(getReviewerNumber(9, 1) === 10, 'Тест получения ревьюера провален');
    console.assert(getReviewerNumber(23, 1) === 1, 'Тест получения ревьюера (граничный случай) провален');
    console.assert(getReviewerNumber(22, 1) === 23, 'Тест получения ревьюера (граничный случай) провален');

    // Тест 2: getVariant
    console.assert(getReviewerNumber('9', '1') === 'Неправильный ввод данных', 'Тест получения ревьюера провален(не число)');
    console.assert(getReviewerNumber(4, NaN) === 'Неправильный ввод данных', 'Тест получения ревьюера провален(не число)');
    console.assert(getReviewerNumber(undefined, 10) === 'Неправильный ввод данных', 'Тест получения ревьюера провален(не число)');
    console.assert(getReviewerNumber([1, 2], 4) === 'Неправильный ввод данных', 'Тест получения ревьюера провален(не число)');
    console.assert(getReviewerNumber(4, { k: 'ad' }) === 'Неправильный ввод данных', 'Тест получения ревьюера провален(не число)');
    console.assert(getVariant(9, 4) === 1, 'Тест getVariant провален');
    console.assert(getVariant(8, 4) === 4, 'Тест getVariant (граничный случай) провален');

    // Тест 3: calculate
    console.assert(calculate(10, 5, '+') === 15, 'Тест калькулятора (+) провален');
    console.assert(calculate(10, 5, '-') === 5, 'Тест калькулятора (-) провален');
    console.assert(calculate(10, 5, '*') === 50, 'Тест калькулятора (*) провален');
    console.assert(calculate(10, 5, '/') === 2, 'Тест калькулятора (/) провален');
    console.assert(calculate(1e308, 1e308, '*') === 'Ошибка: переполнение', 'Тест переполнения провален');
    console.assert(calculate(Number.MAX_VALUE, Number.MAX_VALUE, '+') === 'Ошибка: переполнение', 'Тест переполнения провален');
    console.assert(calculate(2, 's', '-') === 'Аргументы не являются числами', 'Тест калькулятора (аргументы не числа) провален');
    console.assert(calculate('b', 2, '+') === 'Аргументы не являются числами', 'Тест калькулятора (аргументы не числа) провален');
    console.assert(calculate(10, 5, '^') === 'Неизвестная операция', 'Тест калькулятора (неверная операция) провален');
    console.assert(calculate(10, 0, '/') === 'Нельзя делить на ноль', 'Тест калькулятора (деление на ноль) провален');

    // Тест 4: calculateArea
    console.assert(calculateArea('circle', 2) > 0, 'Тест площади круга провален');
    console.assert(Math.abs(calculateArea('circle', 2) - Math.PI * 4) < 0.0001, 'Тест площади круга провален');
    console.assert(calculateArea('circle', 0) === 0, 'Тест площади круга провален');
    console.assert(calculateArea('rectangle', 2, 3) === 6, 'Тест площади прямоугольника провален');
    console.assert(calculateArea('triangle', 4, 6) === 12, 'Тест площади треугольника провален');

    console.assert(calculateArea('circle', '') === 'Неправильный ввод параметров', 'Тест площади круга провален');
    console.assert(calculateArea('circle', NaN) === 'Неправильный ввод параметров', 'Тест площади круга провален');
    console.assert(calculateArea('circle') === 'Неправильный ввод параметров', 'Тест площади круга провален');
    console.assert(calculateArea('circle', -8) === 'Неправильный ввод параметров', 'Тест площади круга провален');
    console.assert(calculateArea('circle', [2, 3, 2]) === 'Неправильный ввод параметров', 'Тест площади круга провален');
    console.assert(calculateArea('circle', 1, 4) === 'Неправильный ввод параметров', 'Тест площади круга провален');
    console.assert(calculateArea('circle', '1') === 'Неправильный ввод параметров', 'Тест площади круга провален');

    console.assert(calculateArea('rectangle', 1) === 'Неправильный ввод параметров', 'Тест площади прямоугольника провален');
    console.assert(calculateArea('rectangle', 'ssss') === 'Неправильный ввод параметров', 'Тест площади прямоугольника провален');
    console.assert(calculateArea('rectangle', [2, 3, 2]) === 'Неправильный ввод параметров', 'Тест площади прямоугольника провален');
    console.assert(calculateArea('rectangle', { e: 22 }) === 'Неправильный ввод параметров', 'Тест площади прямоугольника провален');
    console.assert(calculateArea('rectangle', NaN) === 'Неправильный ввод параметров', 'Тест площади прямоугольника провален');
    console.assert(calculateArea('rectangle', 2, 4, 5) === 'Неправильный ввод параметров', 'Тест площади прямоугольника провален');
    console.assert(calculateArea('rectangle', -2, 4, 5) === 'Неправильный ввод параметров', 'Тест площади прямоугольника провален');
    console.assert(calculateArea('rectangle', -2, -4, 5) === 'Неправильный ввод параметров', 'Тест площади прямоугольника провален');
    console.assert(calculateArea('rectangle', -2, -4) === 'Неправильный ввод параметров', 'Тест площади прямоугольника провален');
    console.assert(calculateArea('rectangle', '1', '7') === 'Неправильный ввод параметров', 'Тест площади прямоугольника провален');
    console.assert(calculateArea('rectangle', '1', 7) === 'Неправильный ввод параметров', 'Тест площади прямоугольника провален');
    console.assert(calculateArea('rectangle', 1, '7') === 'Неправильный ввод параметров', 'Тест площади прямоугольника провален');

    console.assert(calculateArea('triangle', 1) === 'Неправильный ввод параметров', 'Тест площади треугольника провален');
    console.assert(calculateArea('triangle', 'ssss') === 'Неправильный ввод параметров', 'Тест площади треугольника провален');
    console.assert(calculateArea('triangle', [2, 3, 2]) === 'Неправильный ввод параметров', 'Тест площади треугольника провален');
    console.assert(calculateArea('triangle', { e: 22 }) === 'Неправильный ввод параметров', 'Тест площади треугольника провален');
    console.assert(calculateArea('triangle', NaN) === 'Неправильный ввод параметров', 'Тест площади треугольника провален');
    console.assert(calculateArea('triangle', 2, 4, 5) === 'Неправильный ввод параметров', 'Тест площади треугольника провален');
    console.assert(calculateArea('triangle', -2, 4, 5) === 'Неправильный ввод параметров', 'Тест площади треугольника провален');
    console.assert(calculateArea('triangle', -2, -4, 5) === 'Неправильный ввод параметров', 'Тест площади треугольника провален');
    console.assert(calculateArea('triangle', -2, -4) === 'Неправильный ввод параметров', 'Тест площади треугольника провален');
    console.assert(calculateArea('triangle', '1', '7') === 'Неправильный ввод параметров', 'Тест площади треугольника провален');
    console.assert(calculateArea('triangle', '1', 7) === 'Неправильный ввод параметров', 'Тест площади треугольника провален');
    console.assert(calculateArea('triangle', 1, '7') === 'Неправильный ввод параметров', 'Тест площади треугольника провален');

    console.assert(calculateArea(123, 5) === 'Неправильный ввод фигуры', 'Тест площади провален(фигура, число)');
    console.assert(calculateArea(NaN, 5) === 'Неправильный ввод фигуры', 'Тест площади провален(фигура, NaN)');
    console.assert(calculateArea('asd', 5) === 'Неправильный ввод фигуры', 'Тест площади провален(фигура, строка)');
    console.assert(calculateArea() === 'Неправильный ввод фигуры', 'Тест площади провален(фигура, пустая строка)');

    // Тест 5: reverseString
    console.assert(reverseString('abc') === 'cba', 'Тест reverseString провален');
    console.assert(reverseString('Abc') === 'cbA', 'Тест reverseString провален');
    console.assert(reverseString('') === '', 'Тест reverseString провален');
    console.assert(reverseString('a') === 'a', 'Тест reverseString провален');
    console.assert(reverseString(' a') === 'a ', 'Тест reverseString провален');
    console.assert(reverseString(' ') === ' ', 'Тест reverseString провален');
    console.assert(reverseString('some text') === 'txet emos', 'Тест reverseString провален');
    console.assert(reverseString(699) === 'Неправильный ввод строки', 'Тест reverseString провален');
    console.assert(reverseString(NaN) === 'Неправильный ввод строки', 'Тест reverseString провален');
    console.assert(reverseString([2, 'sad']) === 'Неправильный ввод строки', 'Тест reverseString провален');
    console.assert(reverseString('') === '', 'Тест reverseString (пустая строка) провален');

    // Тест 6: getRandomNumber
    let rand = getRandomNumber(1, 10);
    let rand2 = getRandomNumber(10, 10);
    console.assert(typeof rand === 'number', 'Тест getRandomNumber провален');
    console.assert(rand >= 1 && rand <= 10, 'Тест getRandomNumber провален');
    console.assert(rand2 == 10, 'Тест getRandomNumber провален');

    // Тест 7: book

    // Проверяем корректность информации о книге
    const expectedInfo = 'The book title - Some author, Год выпуска: 1995, Количество страниц: 180, Доступность: true';
    console.assert(book.getInfo() === expectedInfo, `Тест book.getInfo провален`);

    const initialAvailability = book.availability;
    book.toggleAvailability();
    console.assert(book.availability === !initialAvailability, `Тест book.toggleAvailability провален`);

    // Тест 8: student
    let avg = student.getAverageGrade();
    console.assert(student.getAverageGrade() === 90, `Тест getAverageGrade провален`);
    student.addGrade('english', 100);
    console.assert(student.addGrade('sdd', 148) === 'Неправильный ввод оценки', 'Тест student.addGrade провален');
    console.assert(student.addGrade('sdd', -148) === 'Неправильный ввод оценки', 'Тест student.addGrade провален');
    console.assert(student.addGrade('sdd', [1, 3, 4]) === 'Неправильный ввод оценки', 'Тест student.addGrade провален');
    console.assert(student.addGrade('sdd', NaN) === 'Неправильный ввод оценки', 'Тест student.addGrade провален');
    console.assert(student.addGrade(46, 15) === 'Неправильный ввод предмета', 'Тест student.addGrade провален');
    console.assert(student.addGrade(NaN, 15) === 'Неправильный ввод предмета', 'Тест student.addGrade провален');
    console.assert(student.addGrade([1, 3, 5], 15) === 'Неправильный ввод предмета', 'Тест student.addGrade провален');
    console.assert(student.grades.english === 100, 'Тест student.addGrade провален');

    // Тест 9: processArrays
    processArrays();

    // Тест 10: taskManager
    let newTask = taskManager.addTask('Новая задача', 'low');
    console.assert(newTask.id === 4, 'Тест addTask провален');
    console.assert(newTask.title === 'Новая задача', 'Тест addTask провален');
    console.assert(newTask.priority === 'low', 'Тест addTask провален');
    console.assert(taskManager.tasks.length === 4, 'Тест addTask провален');

    const completedTask = taskManager.completeTask(1);
    console.assert(completedTask.completed === true, 'Тест completeTask провален');
    console.assert(taskManager.tasks[0].completed === true, 'Тест completeTask провален');

    const deletedTask = taskManager.deleteTask(3);
    console.assert(deletedTask.id === 3, 'Тест deleteTask провален');
    console.assert(taskManager.tasks.length === 3, 'Тест deleteTask провален(длина)');

    const deletedTaskNotExist = taskManager.deleteTask(34189);
    console.assert(deletedTaskNotExist === 'Задача не найдена', 'Тест deleteTask провален');

    let completedTasks = taskManager.getTasksByStatus(true);
    let pendingTasks = taskManager.getTasksByStatus(false);
    console.assert(Array.isArray(completedTasks) && Array.isArray(pendingTasks), 'Тест getTasksByStatus провален');
    console.assert(completedTasks.length == 2, 'Тест getTasksByStatus провален');
    console.assert(pendingTasks.length == 1, 'Тест getTasksByStatus провален');

    let stats = taskManager.getStats();
    console.assert(typeof stats.total === 'number' && typeof stats.completionRate === 'number', 'Тест getStats провален');
    console.assert(stats.total === 3, 'Тест getStats провален');
    console.assert(stats.completed === 2, 'Тест getStats провален');
    console.assert(stats.pending === 1, 'Тест getStats провален');

    // Тест 11: validateEmail
    // Вариант 1
    console.assert(validateEmail('test@email.com'), 'Тест validateEmail (корректный) провален');
    console.assert(validateEmail('_%+-@email.com'), 'Тест validateEmail (корректный) провален');
    console.assert(validateEmail('789456518799@email.com'), 'Тест validateEmail (корректный) провален');
    console.assert(validateEmail('789456-ssss@email.com'), 'Тест validateEmail (корректный) провален');
    console.assert(validateEmail('AAAAAAAAAAAAAVVV@email.com'), 'Тест validateEmail (корректный) провален');
    console.assert(validateEmail('_____@email.com'), 'Тест validateEmail (корректный) провален');
    console.assert(validateEmail('+++++@email.com'), 'Тест validateEmail (корректный) провален');
    console.assert(validateEmail('%%%%%@email.com'), 'Тест validateEmail (корректный) провален');
    console.assert(validateEmail('-----@email.com'), 'Тест validateEmail (корректный) провален');
    console.assert(validateEmail('-----@email-email.com'), 'Тест validateEmail (корректный) провален');

    console.assert(validateEmail('test.email+alex@email.com'), 'Тест validateEmail (корректный) провален');
    console.assert(!validateEmail('test.email@.com'), 'Тест validateEmail (некорректный) провален');
    console.assert(!validateEmail('some=@.com'), 'Тест validateEmail (некорректный) провален');
    console.assert(!validateEmail('some=@email.com'), 'Тест validateEmail (некорректный) провален');
    console.assert(!validateEmail('s&&@email.com'), 'Тест validateEmail (некорректный) провален');
    console.assert(!validateEmail('a@b.c'), 'Тест validateEmail (слишком короткий) провален');

    console.log('Все тесты пройдены! ✅');
}
// Запуск тестов
runTests();
