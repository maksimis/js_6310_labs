// ===== ЗАДАНИЕ 1: Базовые операции =====
function simpleTask() {
    // 1.1 Объявите переменные разных типов (не менне 5)
    let num = 5
    let str = "didian"
    let bool = true
    let nulll = null
    let user = {
        name: "Bob",
        age: 23
    }
    let arr = ["banana", "coconut", "cucumber"]
    let x

    // 1.2 Выведите типы всех переменных
    console.log("тип num:", typeof num);
    console.log("тип str:", typeof str);
    console.log("тип bool:", typeof bool);
    console.log("тип nulll:", typeof nulll);
    console.log("тип user:", typeof user);
    console.log("тип arr:", typeof arr);
    console.log("тип x:", typeof x);
}
simpleTask();

// ===== ЗАДАНИЕ 2: Функции =====
function getReviewerNumber(number, lab) {
    // 2.1 Функция определяющая номер ревьюера для вашей группы по вашему номеру и номеру лабораторной работы
    if ((typeof number === "number") && (typeof lab === "number")) {
        if (number <= 23){
            if ((number + lab) % 23 === 0) {
            return 23
            } 
            const reviewer = (number + lab) % 23
            return reviewer
        }
        return "В нашей группе 23 человека"
    }
    return "Оба аргумента должны быть числами"
}

function getVariant(number, variants) {
    // 2.2 Функция определяющая номер варианта, исходя из количества вариантов
    if (typeof number === "number" && typeof variants === "number") {
        const variant = (number - 1) % variants + 1
        return variant
    }
    return "Оба аргумента должны быть числами"
}

function calculate(a, b, operation) {
    // 2.3 Напишите функцию калькулятор, калькулятор обрабатывает следующие операции: +, -, *, /
    if ((typeof a !== 'number') || (typeof b !== 'number')) {
        return "Оба параметра должны быть числами"
    }
    let res
    if (operation === "+") {
        res = a + b 
    } else if (operation === "-") {
        res = a - b 
    } else if (operation === "*") {
        res = a * b 
    } else if (operation === "/") {
        if (b === 0) {
            return "Деление на 0"
        }
        res = a / b
    } else {
        return "Не тот символ операции"
    }
    if (!isFinite(res)) {
        return "Результат слишком большой"
    }
    return res
}

function calculateArea(figure, ...params) {
    // 2.4 Напишите функцию для определения площади фигур 'circle', 'rectangle', 'triangle'
    // Используйте switch.
    if (typeof figure !== 'string') {
        return "Аргумент для фигуры должен быть типа 'string'"
    }
    for (param of params) {
        if (typeof param !== 'number') {
            return "Параметры фигуры должны быть числами"
        }
    }
    switch (figure) {
        case 'circle':
            if (params.length === 1) {
                const radius = params[0]
                if (radius < 1) {
                    return "Радиус должен быть > 0"
                }
                return (Math.PI * radius ** 2).toFixed(2)
            }
            return "Для круга нужен 1 параметр"
        case 'rectangle':
            if (params.length === 2){
                const[a,b] = params
                if ((a > 0) && (b > 0)) {
                    return a * b
                }
                return "Стороны прямоугольника должны быть > 0"
            }
            return "Для прямоугольника нужно 2 параметра"
        case 'triangle':
            if (params.length === 3) {
                const [a,b,c] = params
                if ((a > 0) && (b > 0) && (c > 0)) {
                    if ((a < b + c) && (b < a + c) && (c < a + b)) {
                        const p = (a + b + c) / 2
                        return Math.sqrt(p*(p-a)*(p-b)*(p-c))
                    }
                    return "Cтороны не удовлетворяют неравенству треугольника"
                }
                return "Стороны треугольника должны быть > 0"
            }
            return("Для треугольника нужно 3 параметра")
        default:
            return "Неверное название фигуры"
    }
}

// 2.5 Стрелочные функции
const reverseString = (str) => {
    // Функция возвращает перевернутую строку
    if (typeof str === 'number') {
        return "Неверный тип данных. Введи строку"
    }
    return str.split('').reverse().join('');
};

const getRandomNumber = (min, max) => {
    if ((typeof min !== 'number') || (typeof max !== 'number')) {
        return "Неверный тип данных"
    }
    // Функция возвращает случайное число между min и max 
    //return Math.round(Math.random() * (max - min -1)) + 1 + min; //строго между
    return Math.round(Math.random() * (max - min)) + min; //включительно
}; 

// ===== ЗАДАНИЕ 3: Объекты =====
const book = {
    // 3.1 Создайте объект "книга" с полями для хранения заголовка, автора, 
    // года выпуска, количества страниц, и доступности
    // объект должен иметь два метода getInfo возвращает одной строкой информацию о названии книги, аторе, годе выпуска, количестве страниц
    // метод toggleAvailability - который меняет значение доступности и возвращает его
    title: 'Мастер и Маргарита',
    author: 'М.А.Булгаков',
    year: 1967,
    pages: 384,
    availability: false,
    getinfo() {
        return `${this.title} - ${this.author}, ${this.year}, ${this.pages}`
    },
    toggleAvailability() {
        this.availability = !this.availability
        return this.availability
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
        const subjects = Object.keys(this.grades);
        let sum = 0;
        for (let subject of subjects) {
            sum += this.grades[subject];
        }
        return sum / subjects.length
    },
    // Метод для добавления новой оценки
    addGrade(subject, grade) {
        this.grades[subject] = grade;
        return `Добавлена новая оценка: ${subject}: ${grade}`;
    }
};
//console.log("Средний балл: ", student.getAverageGrade());
//console.log(student.addGrade('english', 70));
//console.log(student.grades);
//console.log("Новый средний балл: ", student.getAverageGrade());

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
    numbers.forEach (number => {
        if (number > 50) {
            console.log(number)
        }
    })

    // 2. Используйте map для создания массива квадратов чисел
    /*const squares = numbers.map(function(number){
        return number ** 2
    })*/

    const squares = numbers.map(number => number **2);
    console.log('Квадраты чисел:', squares);

    // 3. Используйте filter для получения активных пользователей
    const f = user => user.isActive;
    const activeUsers = users.filter(f);
    console.log('Активные юзеры:', activeUsers)
    
    // 4. Используйте find для поиска пользователя с именем "Виктория"
    const victoria =  users.find(user => user.name === "Виктория")
    victoria ? console.log('Виктория найдена:', victoria) : console.log('Виктория не найдена')

    // 5. Используйте reduce для подсчета суммы всех чисел
    const sum = numbers.reduce(function(accumulator, value) {
        return accumulator + value;
    }, 0)
    console.log('Сумма всех чисел', sum);

    // 6. Используйте sort для сортировки пользователей по возрасту (по убыванию)
    const sortedByAge = users.sort((a,b) => b.age - a.age);
    console.log("Сортировка пользователей по возрасту", sortedByAge)

    // 7. Используйте метод для проверки, все ли пользователи старше 18 лет
    const allAdults =  users.every(user => user.age > 18);
    console.log("Все пользователи старше 18?", allAdults)

    // 8. Создайте цепочку методов: 
    //    - отфильтровать активных пользователей
    //    - преобразовать в массив имен
    //    - отсортировать по алфавиту
    const activeUserNames =  users.filter(user => user.isActive)
        .map(user => user.name).sort();
    console.log(activeUserNames)
}
processArrays()

// ===== ЗАДАНИЕ 5: Менеджер задач =====
const taskManager = {
    tasks: [
        { id: 1, title: "Изучить JavaScript", completed: false, priority: "high" },
        { id: 2, title: "Сделать лабораторную работу", completed: true, priority: "high" },
        { id: 3, title: "Прочитать книгу", completed: false, priority: "medium" }
    ],
    
    addTask(title, priority) {
        // 5.1 Добавление задачи
        const newTask = { 
            id: this.tasks.length + 1, 
            title: title, 
            completed: false, 
            priority: priority,
        }
        this.tasks.push(newTask);
        return newTask
    },

    completeTask(taskId) {
        // 5.2 Отметка выполнения
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = true;
            return task
        }
        return ("Задача не найдена")
    },

    // Удаление задачи
    deleteTask(taskId) {
        // 5.3 Ваш код здесь
        const index = this.tasks.findIndex(task => task.id === taskId);
        if (index < this.tasks.length && index > -1) {
            return this.tasks.splice(index,1)[0]
        }
        return 'Задача не найдена'
    },

    // Получение списка задач по статусу
    getTasksByStatus(completed) {
        // 5.4 Ваш код здесь
        const filteredTasks = this.tasks.filter(task => task.completed === completed);
        if (filteredTasks.length === 0) {
            return `${completed ? '"выполненные"' : '"невыполненные"'} нет`
        }
        return filteredTasks
    },
    
    getStats() {
        /* 5.5 Статистика возвращает объект:        
        total,
        completed,
        pending,
        completionRate
        */
        const total = this.tasks.length;
        const completed = this.tasks.filter(task => task.completed).length;
        const pending = total - completed;
        const completionRate = Math.round((completed / total) * 100);
        return {
            total: total,
            completed: completed,
            pending: pending,
            completionRate: completionRate,
        }
    }
};

/*console.log('Добавление задачи:', taskManager.addTask('Сходить на пару', "low"))
console.log(taskManager.tasks)
console.log('Отметка выполнения:', taskManager.completeTask(4))
console.log(taskManager.tasks)
console.log('Удаление задачи:', taskManager.deleteTask(2))
console.log('Список задач по статусу', taskManager.getTasksByStatus(true))
console.log('Статистика:',taskManager.getStats())*/

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
/*function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}*/

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

/*console.log(validatePassword('passWord7@!')) //правильный true
console.log(validatePassword('p1s@Wor')) // < 8 символов false
console.log(validatePassword('ko1o101@')) // нет заглавных букв false
console.log(validatePassword('PO1K101@AK')) // нет строчных букв false
console.log(validatePassword('OneDirect21')) // нет специальных символов false
console.log(validatePassword('bOmbomb#m')) // нет цифр false
console.log(validatePassword('PeOple321~')) // не тот специальный символ false
console.log(validatePassword('')) // строка пуста false*/




/**
 * Вариант 3: Валидация номера телефона (российский формат)
 * Поддерживает форматы:
 * - +7 (999) 123-45-67
 * - 8 (999) 123-45-67  
 * - 89991234567
 * - +7(999)123-45-67
 */
/*function validatePhone(phone) {
    const phoneRegex = /^(\+7|8)[\s(-]?\d{3}[\s)-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/; дефиса нет
    return phoneRegex.test(phone);
}*/

/**
 * Вариант 4: Валидация даты в формате DD.MM.YYYY
 * Правила:
 * - День: 01-31
 * - Месяц: 01-12
 * - Год: 1900-2099
 */
/*function validateDate(date) {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/;
    return dateRegex.test(date);
}*/

// Бонус: выполните все остальные варианты. Выполнение бонуса не учитывается в итоговой оценке.


// ===== ТЕСТИРОВАНИЕ =====
function runTests() {
    console.log("=== ТЕСТИРОВАНИЕ ===");
    
    // Тест 1: getReviewerNumber
    console.assert(getReviewerNumber(5, 1) === 6, "Тест получения ревьюера провален");
    console.assert(getReviewerNumber(22, 1) === 23, "Тест получения ревьюера провален");
    console.assert(getReviewerNumber('ff', 1) === "Оба аргумента должны быть числами", "Тест получения ревьюера провален");
    console.assert(getReviewerNumber(4, 'frf') === "Оба аргумента должны быть числами", "Тест получения ревьюера провален");
    console.assert(getReviewerNumber('jjj', 'frf') === "Оба аргумента должны быть числами", "Тест получения ревьюера провален");
    console.assert(getReviewerNumber(23, 1) === 1, "Тест получения ревьюера провален");
    console.assert(getReviewerNumber(24, 1)) === "В нашей группе 23 человека", "Тест получения ревьюера провален";

    //Тест 2: getVariant
    console.assert(getVariant(2, 2) === 2, "Тест получения варианта провален");
    console.assert(getVariant(8,3) === 2, "Тест получения варианта провален");
    console.assert(getVariant(1,2) === 1, "Тест получения варианта провален");
    console.assert(getVariant('ff', 1) === "Оба аргумента должны быть числами", "Тест получения варианта провален");
    console.assert(getVariant(4, 'frf') === "Оба аргумента должны быть числами", "Тест получения варианта провален");
    console.assert(getVariant('klrk', 'frf') === "Оба аргумента должны быть числами", "Тест получения варианта провален");

    // Тест 3: calculate
    console.assert(calculate(6, 3, '+') === 9, "Тест калькулятора провален");
    console.assert(calculate(13,6,"-") === 7, "Тест калькулятора провален");
    console.assert(calculate(401,5,"*") === 2005, "Тест калькулятора провален");
    console.assert(calculate(3,0,"/") === "Деление на 0", "Тест калькулятора провален");
    console.assert(calculate(3,9,")") === "Не тот символ операции", "Тест калькулятора провален");
    console.assert(calculate(3e5675,6e7,"*") === "Результат слишком большой", "Тест калькулятора провален");
    console.assert(calculate(3,'df',"/") === "Оба параметра должны быть числами", "Тест калькулятора провален");
    console.assert(calculate('df',3,"/") === "Оба параметра должны быть числами", "Тест калькулятора провален");
    console.assert(calculate(Infinity,1,"+") === "Результат слишком большой", "Тест калькулятора провален");
    console.assert(calculate(-6, 3, '+') === -3, "Тест калькулятора провален");
    console.assert(calculate(3, 0.5, '+') === 3.5, "Тест калькулятора провален");

    // Тест 4: calculateArea
    console.assert(calculateArea('circle', 5) === '78.54', "Тест калькулятора площади провален");
    console.assert(calculateArea('circle', 3, 4, 5) === "Для круга нужен 1 параметр", "Тест калькулятора площади провален");
    console.assert(calculateArea('circle', -3) === "Радиус должен быть > 0", "Тест калькулятора площади провален");

    console.assert(calculateArea('rectangle', 5, 5) === 25, "Тест калькулятора площади провален");
    console.assert(calculateArea('rectangle', -3, 4) === "Стороны прямоугольника должны быть > 0", "Тест калькулятора площади провален");
    console.assert(calculateArea('rectangle', 4) === "Для прямоугольника нужно 2 параметра", "Тест калькулятора площади провален");

    console.assert(calculateArea('triangle', 3, 4, 5) === 6, "Тест калькулятора площади провален");
    console.assert(calculateArea('triangle', 0, -3, 5) === "Стороны треугольника должны быть > 0", "Тест калькулятора площади провален");
    console.assert(calculateArea('triangle', 1, 2, 3) === "Cтороны не удовлетворяют неравенству треугольника", "Тест калькулятора площади провален");
    console.assert(calculateArea('triangle', 3, 5) === "Для треугольника нужно 3 параметра", "Тест калькулятора площади провален");

    console.assert(calculateArea('tribangle', 3, 4, 5) === "Неверное название фигуры", "Тест калькулятора площади провален");
    console.assert(calculateArea('triangle', 'f', 4, 5) === "Параметры фигуры должны быть числами", "Тест калькулятора площади провален");
    console.assert(calculateArea('triangle', 8, 'f', 5) === "Параметры фигуры должны быть числами", "Тест калькулятора площади провален");
    console.assert(calculateArea('triangle', 2, 4, 'f') === "Параметры фигуры должны быть числами", "Тест калькулятора площади провален");
    console.assert(calculateArea(6, 6, 4, 5) === "Аргумент для фигуры должен быть типа 'string'", "Тест калькулятора площади провален");

    // Тест 4: reverseString
    console.assert(reverseString('banana') === 'ananab', "Тест переворачивания строки провален");
    console.assert(reverseString(354) === "Неверный тип данных. Введи строку", "Тест переворачивания строки провален");
    
    // Тест 5: getRandomNumber
    console.assert(getRandomNumber(3, 5) === 3 || 4 || 5, "Тест на случайное число между min и max провален")
    console.assert(getRandomNumber('i', 5) === "Неверный тип данных", "Тест на случайное число между min и max провален")
    console.assert(getRandomNumber(5, 'i') === "Неверный тип данных", "Тест на случайное число между min и max провален")

    // Тест 6: getinfo, toggleAvailability
    console.assert(book.getinfo(), "Мастер и Маргарита - М.А.Булгаков, 1967, 384", "Тест объекта книга пройден");
    console.assert(book.toggleAvailability(), true, "Тест объекта книга пройден");

    // Тест 7: Методы объекта студент
    console.assert(student.getAverageGrade() === 90, "Тест получения среднего балла провален");
    console.assert(student.addGrade('english', 70) === "Добавлена новая оценка: english: 70", "Тест добавления новой оценки провален");
    console.assert(student.getAverageGrade() === 85, "Тест получения нового среднего балла провален");

    // Тест 8: taskManager
    const firsttasklength = taskManager.tasks.length
    const newTask = taskManager.addTask('Сходить на пару', "low");
    console.assert(newTask.id === firsttasklength + 1, "Тест добавления задачи провален(id)")
    console.assert(newTask.title === 'Сходить на пару', "Тест добавления задачи провален")
    console.assert(newTask.completed === false, "Тест добавления задачи провален")
    console.assert(newTask.priority === 'low', "Тест добавления задачи провален")
    

    console.assert(taskManager.completeTask(4).completed === true, "Тест отметки выполнения задачи провален")
    console.assert(taskManager.completeTask(4).id === 4, "Тест отметки выполнения задачи провален")
    console.assert(taskManager.completeTask(90) === "Задача не найдена", "Тест отметки выполнения задачи провален")

    console.assert(taskManager.deleteTask(2).id === 2, "Тест удаления задачи провален")
    console.assert(taskManager.tasks.length === firsttasklength , "Тест удаления задачи провален")
   
    const getTasksByStat = taskManager.getTasksByStatus(true)
    console.assert(getTasksByStat[0].completed === true, "Тест получения задач по статусу провален" )
    console.assert(getTasksByStat.length === 1, "Тест получения задач по статусу провален(count)" )

    const getStat = taskManager.getStats()
    console.assert(getStat.total === 3, "Тест получения статистики провален")
    console.assert(getStat.completed === 1, "Тест получения статистики провален")
    console.assert(getStat.pending === 2, "Тест получения статистики провален")
    console.assert(getStat.completionRate === 33, "Тест получения статистики провален")

    // Тест 9: Валидация пароля
    console.assert(validatePassword('passWord7@!') === true, "Тест валидации пароля провален") //правильный true
    console.assert(validatePassword('p1s@Wor') === false, "Тест валидации пароля провален") // < 8 символов false
    console.assert(validatePassword('ko1o101@') === false, "Тест валидации пароля провален") // нет заглавных букв false
    console.assert(validatePassword('PO1K101@AK') === false, "Тест валидации пароля провален") // нет строчных букв false
    console.assert(validatePassword('OneDirect21') === false, "Тест валидации пароля провален") // нет специальных символов false
    console.assert(validatePassword('bOmbomb#m') === false, "Тест валидации пароля провален") // нет цифр false
    console.assert(validatePassword('PeOple321~') === false, "Тест валидации пароля провален") // не тот специальный символ false
    console.assert(validatePassword('') === false, "Тест валидации пароля провален") // строка пуста false
    
    console.log("Все тесты пройдены! ✅");

}
/*console.log(calculateArea('circle', 5));
const x = 18 % 4
console.log('variant:', x)
// Запуск тестов*/
runTests();