// ===== ЗАДАНИЕ 1: Базовые операции =====
function simpleTask() {
    // 1.1 Объявите переменные разных типов (не менне 5)
    // 1.2 Выведите типы всех переменных
const num = 5
const arr = [1, 2, 3];
const str = "tiyfvgvig"
const bool = true
let u
const obj = {
    name: "alice",
    age: 22
}
console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof u);
console.log(typeof obj);
console.log(typeof arr);
}
simpleTask()

// ===== ЗАДАНИЕ 2: Функции =====
function getReviewerNumber(number, lab) {
    // 2.1 Функция определяющая номер ревьюера для вашей группы по вашему номеру и номеру лабораторной работы
let res = (number + lab) % 23;
    return res;
}
     console.log(getReviewerNumber(19, 1));
     

function getVariant(number, variants) {
    // 2.2 Функция определяющая номер варианта, исходя из количества вариантов
    const variant = ((number - 1) % variants) + 1;
    return variant;
}
console.log(getVariant(19, 23)); 

function calculate(a, b, operation) {
    // 2.3 Напишите функцию калькулятор, калькулятор обрабатывает следующие операции: +, -, *, /
if(typeof(a) !== "number" || typeof(b) !== "number"){
        return "Аргументы функции должны быть числами"
    }
    if(operation == "+"){
        return a + b;
    }
    else if(operation == "-"){
        return a - b;
    }
    else if(operation == "*"){
        return a * b;
    }
    else if(operation == "/"){
        if(b == 0){
            return NaN;
        }
        return a / b;
    }
    else{
        return "Неизвестная операция";
    }
}
console.log(calculate(100000006666666, 500000000, '/')); 


function calculateArea(figure, ...params) {
    // 2.4 Напишите функцию для определения площади фигур 'circle', 'rectangle', 'triangle'
    // Используйте switch.
 switch (figure) {
        case 'circle':
            // Площадь круга: π * r²
            const radius = params[0];
            return Math.PI * radius * radius;
            
        case 'rectangle':
            // Площадь прямоугольника: a * b
            const a = params[0];
            const b = params[1];
            return a * b;
            
        case 'triangle':
            // Площадь треугольника: (a * h) / 2
            const base = params[0];
            const height = params[1];
            return (base * height) / 2;
            
        default:
            return 'Неизвестная фигура';
    }
}
console.log(calculateArea('circle', 5));
console.log(calculateArea('rectangle', 3, 4));
console.log(calculateArea('triangle', 6, 8));



// 2.5 Стрелочные функции
const reverseString = (str) => {
    // Функция возвращает перевернутую строку
let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
};
console.log(reverseString("ALICCE"));


const getRandomNumber = (min, max) => {
    // Функция возвращает случайное число между min и max
    return Math.random() * (max - min) + min;
};
    console.log(getRandomNumber(10 , 20));
    


// ===== ЗАДАНИЕ 3: Объекты =====
const book = {
    // 3.1 Создайте объект "книга" с полями для хранения заголовка, автора, 
    // года выпуска, количества страниц, и доступности
    // объект должен иметь два метода getInfo возвращает одной строкой информацию о названии книги, аторе, годе выпуска, количестве страниц
    // метод toggleAvailability - который меняет значение доступности и возвращает его
title: '1984',
    author: 'Дж.Оруэлл',
    year: 1947,
    pages: 200,
    available: true,
    getInfo: function() {
        return this.title + ', ' + this.author + ', ' + this.year + ', ' + this.pages + ' стр.';
    },
    toggleAvailability: function() {
        this.available = !this.available;
        return this.available;
    }
};
console.log(book.getInfo());
console.log(book.available);
console.log(book.toggleAvailability());


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
         let sum = 0;
        let count = 0;
        
        for (let subject in this.grades) {
            sum += this.grades[subject];
            count++;
        }
        
        return sum / count;
    },
    
    // Метод для добавления новой оценки
    addGrade(subject, grade) {
        // Ваш код здесь
        this.grades[subject] = grade;
    
    }
};

console.log(student.getAverageGrade()); 
student.addGrade('math', 90);
console.log(student.grades.programming); 
console.log(student.getAverageGrade()); 


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
    numbers.forEach(function(number) {
        if (number > 50) {
            console.log(number);
        }
    });
    // 2. Используйте map для создания массива квадратов чисел
    /*const squares =  ваш код */
    const squares = numbers.map(function(number) {
        return number * number;
    });
console.log(squares);

    // 3. Используйте filter для получения активных пользователей
    /*const activeUsers =  ваш код */
    const activeUsers = users.filter(function(user) {
        return user.isActive === true;
    });
    console.log(activeUsers);

    // 4. Используйте find для поиска пользователя с именем "Виктория"
    /*const victoria =  ваш код */
const victoria = users.find(function(user) {
        return user.name === "Виктория";
    });
    console.log(victoria);
    // 5. Используйте reduce для подсчета суммы всех чисел
    /*const sum =  ваш код */
    const sum = numbers.reduce(function(total, number) {
        return total + number;
    }, 0);
    console.log(sum);

    // 6. Используйте sort для сортировки пользователей по возрасту (по убыванию)
    /*const sortedByAge =  ваш код */
const sortedByAge = users.sort(function(a, b) {
    return b.age - a.age;
});
console.log(sortedByAge);

    // 7. Используйте метод для проверки, все ли пользователи старше 18 лет
    /*const allAdults =  ваш код */
    const allAdults = users.every(function(user) {
    return user.age > 18;
});
console.log(allAdults);

    // 8. Создайте цепочку методов: 
    //    - отфильтровать активных пользователей
    //    - преобразовать в массив имен
    //    - отсортировать по алфавиту
    /*const activeUserNames =  ваш код */
    const activeUserNames = users
    .filter(user => user.isActive)
    .map(user => user.name)
    .sort();
    console.log(activeUserNames);  
    console.log();
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
        const newTask = {
            id: this.tasks.length + 1,
            title: title,
            completed: false,
            priority: priority
        };
        this.tasks.push(newTask);
        
    },
   

    completeTask(taskId) {
        // 5.2 Отметка выполнения
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = true;
        }
    },

    // Удаление задачи
    deleteTask(taskId) {
        // 5.3 Ваш код здесь
        this.tasks = this.tasks.filter(task => task.id !== taskId);
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
    const completed = this.tasks.filter(task => task.completed).length;
    const pending = total - completed;
    const completionRate = total > 0 ? (completed / total) * 100 : 0;
    
    return {
        total: total,
        completed: completed,
        pending: pending,
        completionRate: completionRate
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


console.assert(validatePhone("89991234567") === true, "Тест 1 провален: 89991234567");
console.assert(validatePhone("+7(999)123-45-67") === true, "Тест 2 провален: +7(999)123-45-67");
console.assert(validatePhone("8(999)1234567") === true, "Тест 3 провален: 8(999)1234567");
console.assert(validatePhone("+7(999)1234567") === true, "Тест 4 провален: +7(999)1234567");

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
    
    // Добавьте остальные тесты...
    
    console.log("Все тесты пройдены! ✅");
}

// Запуск тестов
function runTests() {
//Тест задания 2.1
console.assert(getReviewerNumber(19, 1) === 20, "Тест получения ревьюера провален");
//Тест задания 2.2
console.assert(getVariant(1, 23) === 1, "Тест: номер 1, вариантов 23 -> вариант 1");
console.assert(getVariant(23, 23) === 23, "Тест: номер 23, вариантов 23 -> вариант 23");
console.assert(getVariant(24, 23) === 1, "Тест: номер 24, вариантов 23 -> вариант 1");
console.assert(getVariant(46, 23) === 23, "Тест: номер 46, вариантов 23 -> вариант 23");
console.assert(getVariant(19, 23) === 19, "Тест: номер 19, вариантов 23 -> вариант 19");
//Тест задания 2.3
console.assert(calculate(10, 5, '+') === 15, "Тест провален: 10 + 5 = 15");
console.assert(calculate(10, 5, '-') === 5, "Тест провален: 10 - 5 = 5");
console.assert(calculate(10, 5, '*') === 50, "Тест провален: 10 * 5 = 50");
console.assert(calculate(10, 5, '/') === 2, "Тест провален: 10 / 5 = 2");
console.assert(calculate(100000006666666, 500000000, '/') === 200000.013333332, "Тест провален: деление больших чисел");
//Тест задания 2.4
const circleArea = calculateArea('circle', 5);
console.assert(Math.abs(circleArea - 78.53981633974483) < 0.0001, "Тест провален: площадь круга с радиусом 5");
const rectangleArea = calculateArea('rectangle', 3, 4);
console.assert(rectangleArea === 12, "Тест провален: площадь прямоугольника 3x4 = 12");
const triangleArea = calculateArea('triangle', 6, 8);
console.assert(triangleArea === 24, "Тест провален: площадь треугольника с основанием 6 и высотой 8 = 24");
const unknownArea = calculateArea('hexagon', 5);
console.assert(unknownArea === 'Неизвестная фигура', "Тест провален: неизвестная фигура должна возвращать сообщение об ошибке");
console.assert(calculateArea('circle', 10) === Math.PI * 100, "Тест провален: площадь круга с радиусом 10");
console.assert(calculateArea('rectangle', 10, 5) === 50, "Тест провален: площадь прямоугольника 10x5 = 50");
console.assert(calculateArea('triangle', 10, 5) === 25, "Тест провален: площадь треугольника с основанием 10 и высотой 5 = 25");
console.assert(calculateArea('circle', 0) === 0, "Тест провален: площадь круга с радиусом 0 = 0");
console.assert(calculateArea('rectangle', 0, 5) === 0, "Тест провален: площадь прямоугольника с нулевой стороной = 0");
//Тест задания 2.5
console.assert(reverseString("hello") === "olleh", "Тест провален: 'hello' -> 'olleh'");
console.assert(reverseString("12345") === "54321", "Тест провален: '12345' -> '54321'");
console.assert(reverseString("a b c") === "c b a", "Тест провален: 'a b c' -> 'c b a'");
console.assert(reverseString("!@#$") === "$#@!", "Тест провален: '!@#$' -> '$#@!'");
console.assert(reverseString("") === "", "Тест провален: пустая строка -> пустая строка");
console.assert(reverseString("a") === "a", "Тест провален: 'a' -> 'a'");
console.assert(reverseString("ab") === "ba", "Тест провален: 'ab' -> 'ba'");
console.assert(reverseString("привет") === "тевирп", "Тест провален: 'привет' -> 'тевирп'");
//Тест задания 2.6
console.assert(typeof(getRandomNumber(10, 20)) === "number", "Тест провален (результат не число");
console.assert(getRandomNumber(10, 20) >= 10 && getRandomNumber(10, 20) < 20, "Тест провален(результат не в границах");
//Тест задания 3.1
console.assert(book.title === '1984', "Тест 1 провален: название книги");
console.assert(book.author === 'Дж.Оруэлл', "Тест 2 провален: автор книги");
console.assert(book.year === 1947, "Тест 3 провален: год выпуска");
console.assert(book.pages === 200, "Тест 4 провален: количество страниц");
console.assert(book.available === true, "Тест 5 провален: доступность книги");
//Тест задания 3.2
console.assert(student.name === "Анна Петрова", "Тест провален: имя студента");
console.assert(student.age === 20, "Тест провален: возраст студента");
console.assert(student.course === 2, "Тест провален: курс студента");
console.assert(student.grades.math === 90, "Тест провален: оценка по математике");
console.assert(student.grades.programming === 95, "Тест провален: оценка по программированию");
console.assert(student.grades.history === 85, "Тест провален: оценка по истории");
const average = student.getAverageGrade();
console.assert(average === 90, "Тест провален: средний балл");
student.addGrade('physics', 100);
console.assert(student.grades.physics === 100, "Тест провален: добавление новой оценки");
student.addGrade('math', 100);
console.assert(student.grades.math === 100, "Тест провален: изменение существующей оценки");
const newAverage = student.getAverageGrade();
console.assert(newAverage === 95, "Тест провален: новый средний балл");
//Тест задания 4
processArrays();
//Тест задания 5
console.log("(добавление задачи в список):");
    taskManager.addTask("выучить python");
    console.log(taskManager.tasks);
    console.log();

     console.log("(выполнение задания):");
    taskManager.completeTask(3);
    console.log(taskManager.tasks);
    console.log();

    console.log("(удаление задачи):");
    taskManager.deleteTask(2);
    console.log(taskManager.tasks);
    console.log();

    console.log("(статус задачи):");
    console.log(taskManager.getTasksByStatus(true));
    console.log();

    console.log("(возвращение объекта):");
    console.log(taskManager.getStats());
    console.log();
}
runTests();
