// ===== ЗАДАНИЕ 1: Базовые операции =====
function simpleTask() {
    // 1.1 Объявите переменные разных типов (не менне 5)
    let num = 5;
    let string ="qwerty";
    let bool = true;
    let unk = undefined; 
    let none = null;
    let array = [1, 2, 3];
    let person = {
        name: "Ilvina", 
        age:"20"
    };
    // 1.2 Выведите типы всех переменных
    console.log("ЗАДАНИЕ №1");
    console.log(typeof num );
    console.log(typeof string);
    console.log(typeof bool);
    console.log(typeof unk);
    console.log(typeof none);
    console.log(typeof array);
    console.log(typeof person);
}



// ===== ЗАДАНИЕ 2: Функции =====
function getReviewerNumber(number, lab) {
    // 2.1 Функция определяющая номер ревьюера для вашей группы по вашему номеру и номеру лабораторной работы
    if (typeof(number)  !== "number" ||typeof(lab)  !== "number") return "аргументы должны быть числами"
    if (number === 22){
        return 23
    }
    if (number >23 ){
        return "Число более 23"
    }

    return ((number + lab) % 23);
};

function getVariant(number, variants) {
    // 2.2 Функция определяющая номер варианта, исходя из количества вариантов
    if (typeof(number) !== "number"|| typeof(variants ) !== "number") return "аргументы должны быть числами"
    if (number % variants === 0) {
        return variants;
    } else {
        return number % variants;
    }
};
function calculate(a, b, operation) {

    // 2.3 Напишите функцию калькулятор, калькулятор обрабатывает следующие операции: +, -, *, /

    if( typeof a!=="number"|| typeof b !=="number"){
        return "Ошибка:введите число";
    }
    if (operation === "+"){
        return a + b;
    } else if (operation === "-"){
        return a-b;
    } else if (operation === "*"){
        return a*b;
    } else if (operation === "/"){
        if (b=== 0 ){
            return "не определено";
        }
        return a/b;
    } else {
        return "введите что-то другое"
    }

}

function calculateArea(figure, ...params) {
    // 2.4 Напишите функцию для определения площади фигур 'circle', 'rectangle', 'triangle'
    // Используйте switch.
    switch(figure){
        case "circle":
            if (params.length !== 1 || typeof(params[0]) !== "number" ||  params[0] <= 0 ) return "некорректные входные данные";
            return (Math.PI*params[0]*params[0]);
        case "rectangle":
            if (params.length !== 2 || typeof(params[0]) !== "number" || typeof(params[1]) !== "number"|| params[0] <= 0 || params[1] <= 0) return "некорректные входные данные";
            return params[0]* params[1];
        case "triangle":
            if (params.length !== 2 || typeof(params[0]) !== "number" || typeof(params[1]) !== "number" || params[0] <= 0 || params[1] <= 0 ) return "некорректные входные данные";
            return 0.5* params[0]*params[1]
        default:
            return "неизвестная фигура";
    }
}

// 2.5 Стрелочные функции
const reverseString = (str) => {
    str = String(str);
    return str.split('').reverse().join('') ; 
    // Функция возвращает перевернутую строку
};

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random()*(max-min+1))+ min
    // 2.6 Функция возвращает случайное число между min и max
};
// +min — сдвиг в нужный интервал

// ===== ЗАДАНИЕ 3: Объекты =====
const book = {
    // 3.1 Создайте объект "книга" с полями для хранения заголовка, автора, 
    // года выпуска, количества страниц, и доступности
    // объект должен иметь два метода getInfo возвращает одной строкой информацию о названии книги, аторе, годе выпуска, количестве страниц
    // метод toggleAvailability - который меняет значение доступности и возвращает его
    title: "искупление",
    author: "Канаэ",
    year:"2020",
    pages:"209",
    door:false,

    getInfo: function(){
        return `Название: ${this.title}, автор:${this.author},год:${this.year},страницы ${this.pages}`;
    },

    toggleAvailability: function(){
        this.door = !this.door;
        return this.door
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
        for (let subject in this.grades){
            sum+= this.grades[subject];
            count ++;

        }
        return sum/count;
    },
    
    // Метод для добавления новой оценки
    addGrade(subject, grade) {
        this.grades[subject] = grade;

    }
};


// ===== ЗАДАНИЕ 4: Массивы =====
console.log("Задание 4");
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
    
    // 1. Используйте forEach (сделать что-то с каждым элементом)для вывода всех чисел больше 50 

    console.log("Задание 4.1");
    console.log("Числа больше 50:");

    numbers.forEach(num =>{
        if (num > 50){
            console.log(num); 
        }
    });

    // 2. Используйте map для создания массива квадратов чисел
    const squares = numbers.map(num => num * num);
    console.log("Задание 4.2");
    console.log("массив квадратов чиселя:");
    console.log(squares);

    // 3. Используйте filter для получения активных пользователей
    const activeUsers = users.filter(user => user.isActive);
    console.log("Задание 4.3");
    console.log("получение активных пользователей");
    console.log(activeUsers)

    // 4. Используйте find для поиска пользователя с именем "Виктория"
    const victoria = users.find(user => {
        return user.name ==="Виктория";

    });
    console.log("Задание 4.4");
    console.log("поиска пользователя с именем Виктория",victoria);

    // 5. Используйте reduce для подсчета суммы всех чисел
    const sum = numbers.reduce((total,num) => total  + num,0);
    console.log("Задание 4.5");
    console.log("Сумма всех чисел:",sum);

    // 6. Используйте sort для сортировки пользователей по возрасту (по убыванию)
    const sortedByAge = users.sort((user1,user2) => user2.age - user1.age);
    console.log("Задание 4.6");
    console.log("после сортировки по возрасту:",sortedByAge);

    // 7. Используйте метод для проверки, все ли пользователи старше 18 лет
    const allAdults =  users.filter(user =>{
        return user.age > 18;
    });
    console.log("Задание 4.7");
    console.log("Все, кто старше 18",allAdults);

    console.log("Задание 4.8");
    // 8. Создайте цепочку методов: 
    //    - отфильтровать активных пользователей
    //    - преобразовать в массив имен
    //    - отсортировать по алфавиту
    const activeUserNames = users.filter(users => users.isActive).map(users => users.name).sort((a,b)=> a.localeCompare(b));
    console.log(activeUserNames);
}

// ===== ЗАДАНИЕ 5: Менеджер задач ===== тест не нужен

const taskManager = {
    tasks: [
        { id: 1, title: "Изучить JavaScript", completed: false, priority: "high" },
        { id: 2, title: "Сделать лабораторную работу", completed: true, priority: "high" },
        { id: 3, title: "Прочитать книгу", completed: false, priority: "medium" }
    ],
    
    addTask(title, priority = "medium") {

        // 5.1 Добавление задачи
        const lasttaskid = this.tasks.length + 1
        const Newtask ={
            id: lasttaskid,
            title:title,
            completed:false,
            priority:priority
        };
        this.tasks.push(Newtask);
        return Newtask;
    },

    
    completeTask(taskId) {
        // 5.2 Отметка выполнения
        const dela = this.tasks.find(task =>task.id === taskId);
        if (dela ){
            dela.completed = true;
            return true;// получилось выполнить 
        };
        return false;// не получилось выполнить
    },

    // 5.3 Удаление задачи
    deleteTask(taskId) {
        this.tasks = this.tasks.filter(t =>t.id !== taskId);
         return this.tasks;
    },

    // 5.4 Получение списка задач по статусу
    getTasksByStatus(completed) {
        return this.tasks.filter(tas=>tas.completed === completed)
    },
    
    getStats() {
        /* 5.5 Статистика возвращает объект:        
        total,- вссего задач
        completed,- выполненные задачи
        pending,- невыполненные задачи 
        completionRate процент выполнения 
        */
        const total = this.tasks.length;
        const completed  = this.getTasksByStatus(true).length;
        const pending = (total - completed);
        let completionRate;
        if (total === 0){
            completionRate = 0;
        } else {
            completionRate = Math.round((completed/ total) *100)

        }
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
2. Напишите тесты, покрывающие все различные варианты. Обратите внимание тесты должны обеспечивать полное покрытие, но не быть дублирующимися.
3. Если предложенное регулярное выражение некорректно, вы можете исправить его.

Вычисление своего варианта:
Номер варианта = 23 % 4 = 3 вариант
 */

function validatePhone(phone) {
    const phoneRegex = /^(\+7|8)(\s?\(?\d{3}\)?\s?|\d{3})\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;

    return phoneRegex.test(phone);
}

// ===== ТЕСТИРОВАНИЕ =====
function runTests() {
    console.log("=== ТЕСТИРОВАНИЕ ===");
    simpleTask();
    
    // Тест 1: getReviewerNumber
    console.log("Тест 1: getReviewerNumber ✅");
    console.assert(getReviewerNumber(5, 1) === 6, "Тест получения ревьюера провален");
    console.assert(getReviewerNumber(23, 1) === 1, "Тест получения ревьюера провален");
    console.assert(getReviewerNumber(22, 1) === 23, "Тест получения ревьюера провален");

    console.assert(getReviewerNumber("5", 1) ==="аргументы должны быть числами", "Тест получения ревьюера провален");
    console.assert(getReviewerNumber(5, "1") === "аргументы должны быть числами", "Тест получения ревьюера провален");
    console.assert(getReviewerNumber("5", "1") === "аргументы должны быть числами", "Тест получения ревьюера провален");
    console.assert(getReviewerNumber(100, 1) === "Число более 23", "Тест получения ревьюера провален");




    //Тест задания 2.2
    console.log("Тест 2.2 getVariant ✅");
    console.assert(getVariant(22,3) === 1, "Тест задания 2.2 провален");
    console.assert(getVariant(23,3) === 2, "Тест задания 2.2 провален");
    console.assert(getVariant(1, "3") === "аргументы должны быть числами", "Тест getVariant провален")
    console.assert(getVariant("1", "3") === "аргументы должны быть числами", "Тест getVariant провален")
    console.assert(getVariant("1", 3) === "аргументы должны быть числами", "Тест getVariant провален")



    // Тест 2.3: calculate
    console.log("Тест 2.3 calculate ✅");
    console.assert(calculate(1, 1, '+') === 2, "Тест калькулятора провален");
    console.assert(calculate(10, 2, '-') === 8, "Тест вычитания провален");
    console.assert(calculate(10, 2, '*') === 20, "Тест умножения провален");
    console.assert(calculate(-10, -5, '*') === 50, "Тест калькулятора 2.3 провален (умножение отрицательных)");
    console.assert(calculate(10, 2, '/') === 5, "Тест деления провален");
    console.assert(calculate(10, 0, '/') === "не определено", "Тест деления на ноль провален");
    console.assert(calculate(0, 10, '/') === 0, "Тест деления на ноль провален");
    console.assert(calculate(1, 5, '/') == 0.2, "Тест калькулятора 2.3 провален (деление с дробным результатом)");
    console.assert(calculate('b', 2, '+') === "Ошибка:введите число", "Тест на проверку аргумента-нечисла провален");
    console.assert(calculate(10, 'а', '+') === "Ошибка:введите число", "Тест проверки типов провален");
    console.assert(calculate("10", 'а', '+') === "Ошибка:введите число", "Тест проверки типов провален");
    console.assert(calculate(10, 2, '%') === "введите что-то другое", "Тест калькулятора провален");
    console.assert(calculate(-5, 3, "+") === -2, "Сложение отрицательных чисел");

    console.log("Дополнительная проверка 2.3 на переполнение:✅")
    console.assert(calculate(Number.MAX_VALUE, 1, '+') === Number.MAX_VALUE + 1, "Переполнение при сложении");
    console.assert(calculate(Number.MAX_VALUE, Number.MAX_VALUE, '+') === Infinity, "Переполнение при сложении двух больших чисел");
    console.assert(calculate(Number.MAX_VALUE, 2, '-') === Number.MAX_VALUE - 2, "Вычитание из максимального значения");
    console.assert(calculate(Number.MAX_VALUE, 1, '*') === Number.MAX_VALUE, "Умножение на 1");
    console.assert(calculate(1, Number.MAX_VALUE, '*') === Number.MAX_VALUE, "Умножение на 1 (обратное)");
    console.assert(calculate(Number.MAX_VALUE, 10, "*") === Infinity, "Переполнение при умножении");
    console.assert(calculate(Number.MAX_VALUE, 2, '/') === Number.MAX_VALUE / 2, "Деление максимального значения");
    
    // Тест 2.4: calculateArea
    console.log("Тест 2.4 calculateArea ✅");
    console.assert(calculateArea("circle", 5) === 78.53981633974483, "Тест calculateArea провален - не соответсвует площади круга");
    console.assert(calculateArea("rectangle", 5, 5) === 25, "Тест calculateArea провален - не соответсвует площадь прямоугольника");
    console.assert(calculateArea("triangle", 4, 5) === 10, "Тест calculateArea провален - не соответсвует площадь треугольника")
    console.assert(calculateArea("йцуке", 5, 5) === "неизвестная фигура", "Тест calculateArea провален)");
    console.assert(calculateArea("rectangle", "a", 'b') === "некорректные входные данные", "Тест 2.4 провален не числа");
    console.assert(calculateArea("rectangle", 5) === "некорректные входные данные", "Тест calculateArea провален (недостаточно параметров)");
    console.assert(calculateArea("circle", 1, 2, 3) === "некорректные входные данные", "Тест calculateArea провален - слишком много параметров");
    console.assert(calculateArea("circle") === "некорректные входные данные", "Тест 2.4 провален (нет параметров для круга)");
    console.assert(calculateArea("circle", 0) === "некорректные входные данные", "Круг с радиусом 0");
    console.assert(calculateArea("rectangle", 0, 10) === "некорректные входные данные", "Прямоугольник со стороной 0");
    console.assert(calculateArea("circle", -2) === "некорректные входные данные", "Круг с отрицательным радиусом");
    console.assert(calculateArea("triangle", -2, -4) === "некорректные входные данные", "Треугольник с отрицательной высотой и стороной");
    
    //Тест задания 2.5 - reverseString
    console.log("Тест 2.5 reverseString ✅");
    console.assert(reverseString("qwerty") === "ytrewq", "Тест reverseString провален");
    console.assert(reverseString("") === "", "Тест reverseString провален при проверке пуст");
    console.assert(reverseString("a") === "a", "Тест reverseString провален при проверке одного символа");
    console.assert(reverseString(123) === "321", "Тест reverseString провален при проверке не строки");
    
    //Тест задания 2.6 
    console.log("Тест 2.6 getRandomNumber ✅");
    console.assert(getRandomNumber(1, 10) >= 1 && getRandomNumber(1, 10) < 10, "Тест 2.6 провален");
    console.assert(getRandomNumber(12, 100) >= 12  && getRandomNumber(12, 100) < 100, "Тест 2.6 провален");
    const r = getRandomNumber(10, 100);
    console.assert(typeof r === "number", "Результат не число");



    console.log("Тест 3 ✅");
    console.log("Проверка задания №3.1 :Создание объект книга с полями для хранения заголовка, автора, "); 
    console.log(book.getInfo());
    console.assert(
    book.getInfo() === "Название: искупление, автор:Канаэ,год:2020,страницы 209","Тест 1 провален: getInfo возвращает неверную информацию");
    console.log("метод toggleAvailability - который меняет значение доступности и возвращает его ");
    console.log(book.toggleAvailability()); 
    console.log(book.toggleAvailability()); 

    console.log();

    console.log("Проверка задания №3.2"); 
    console.assert(student.getAverageGrade() === (90 + 95 + 85) / 3, "Средний балл вычислен неверно");
    console.log("Расчета среднего балла:",student.getAverageGrade());
    student.addGrade("qyw",29);
    console.assert(student.grades.qyw === 29,"Тест 6 провален: новая оценка не добавлена в объект grades");
    console.log("После добавления новой оценки",student.grades);
    
    // Тест задания 4
    processArrays();

    // Тест задания 5
    console.log();
    console.log("Задание №5.1");
    taskManager.addTask("погулять с собакой");
    console.log("После добавления погулять с собакой:",taskManager.tasks);
    console.log();
    console.log("Задание №5.2");
    taskManager.completeTask(3);
    console.log("После выполнения задачи 3:",taskManager.tasks);
    console.log();
    console.log("Задание №5.3");
    taskManager.deleteTask(3);
    console.log("после удаления 3",taskManager.tasks);
    console.log();
    console.log("Задание №5.4");
    console.log("задачи со статусом true:",taskManager.getTasksByStatus(true));
    console.log();
    console.log("Задание №5.5");
    console.log("Получаем статистику", taskManager.getStats());

    // Добавьте остальные тесты...
    /**
 * Вариант 3: Валидация номера телефона (российский формат)
 * Поддерживает форматы:
 * - +7 (999) 123-45-67
 * - 8 (999) 123-45-67  
 * - 89991234567
 * - +7(999)123-45-67
 * function validatePhone(phone) {
    const phoneRegex = /^(\+7|8)(\s?\(?\d{3}\)?\s?|\d{3})\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;

    return phoneRegex.test(phone);
}

 */
    // Тест для задания 6.3
    console.log("Тест задания 6.3 ✅");
    console.assert(validatePhone("+7 (999) 123-45-67") === true, "Тест провален: формат +7 (999) 123-45-67 должен проходить");
    console.assert(validatePhone("8 (999) 123-45-67") === true, "Тест провален: формат 8 (999) 123-45-67 должен проходить");
    console.assert(validatePhone("89991234567") === true, "Тест провален:  формат 89991234567 должен проходить");
    console.assert(validatePhone("+7(999)123-45-67") === true, "Тест провален: формат +7(999)123-45-67 должен проходить");

    console.log("Дополнительная проверка:✅")
    console.assert(validatePhone("+1 (999) 123-45-67") === false, "Тест провален:должно начинаться c 8\+7");
    console.assert(validatePhone("8737776") === false, "Тест проваален не соответсвие количеству цифр");
    console.assert(validatePhone("") === false,"Тест провален: пустая строка");
    console.assert(validatePhone("8 999 1234545") === true,"Тест провален: проверка на отсуствие скобок и -");

    console.assert(validatePhone("+7 999 123 45 67") === true, "Тест провален: формат только с пробелами должен проходить");
    console.assert(validatePhone("8-999-123-45-67") === false, "Тест провален: формат только с дефисами не должен проходить");
    console.assert(validatePhone("7 (999) 123-45-67") === false, "Тест провален: отсутствие + или 8 в начале");
    console.assert(validatePhone("abc +7 (999) 123-45-67") === false, "Тест провален: наличие символов ");
    console.assert(validatePhone("+7 (999) 123-45-67 def") === false, "Тест провален: посторонние символы в конце");
    console.assert(validatePhone("8 (999) abc-45-67") === false, "Тест провален: символы в номере");
    console.assert(validatePhone(" 8 (999) 123-45-67") === false, "Тест провален: пробел в начале");
    console.assert(validatePhone("8 (999) 123-45-67 ") === false, "Тест провален: пробел в конце");

    console.log("Все тесты пройдены! ✅");
}

// Запуск тестов
runTests();