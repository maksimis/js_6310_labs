// ===== ЗАДАНИЕ 1: Базовые операции =====
function simpleTask() {
    // 1.1 Объявите переменные разных типов (не менне 5)

    let num = 73
    let str = "я горячий мексиканец, выходи со мной на танец"
    let bl = true
    let no = null
    let mas =[13, 73]
    let key = { 
        name: "kamil",
        age: 73
    };

    

    // 1.2 Выведите типы всех переменных
    console.log("type num:", typeof num)
    console.log("type str:", typeof str)
    console.log("type bl:", typeof bl)
    console.log("type no:", typeof no)
    console.log("type mas:", typeof mas)
    console.log("type key:", typeof key)
}
simpleTask()
    
// ===== ЗАДАНИЕ 2: Функции =====
function getReviewerNumber(number, lab) {
    // 2.1 Функция определяющая номер ревьюера для вашей группы по вашему номеру и номеру лабораторной работы
    if (typeof number !== "number" || typeof lab !== "number"){
        return "неправильный тип данных"
    } 
    if (number >= 24){
        return "неправильное количество людей"
    }
    if (number + lab === 23){
        let a = 23
        return a
    } else {
        let a = (number + lab) % 23
        return a
    }
    
}
//console.log("номер твоего ревьюера:", getReviewerNumber(21,2))
//console.log("номер твоего ревьюера:", getReviewerNumber(24,2))
//console.log("номерooooooooœ твоего ревьюера:", getReviewerNumber(23,1))



function getVariant(number, variants) {
    // 2.2 Функция определяющая номер варианта, исходя из количества вариантов
    if (typeof number !== "number" || typeof variants !== "number"){
        return "неправильный тип данных"
    } 
    if(number > variants){
        let a = number % variants
        return a
    } 
    if (number % variants === 0) {
        let a = number
        return a
    } 
    if(number < variants){
        let a = number % variants
        return a
    } 

}
//console.log("номер твоего варианта:", getVariant(23, "p") )




function calculate(a, b, operation) {
    // 2.3 Напишите функцию калькулятор, калькулятор обрабатывает следующие операции: +, -, *, /
    let c
    if (typeof a !== 'number' || typeof b !== 'number' || typeof operation !== 'string'){
        return 'неверный тип данных'
    }
    else if (operation === "+"){
        c = a + b
    }
    else if (operation === "-"){
        c = a - b
        
    }
    else if (operation === "*"){
        c = a * b
        
    }
    else if (operation === "/"){
        if (b === 0){
            return "/ zero"
        } else {
            c = a / b
        
        }
    } else {
        return 'неверные операции'
    }
    if (!isFinite(c)){
        return 'слишком большие данные'
    }
    return c

}
//console.log("ответ:", calculate (0, 1, "+") )





function calculateArea(figure, ...params) {
    // 2.4 Напишите функцию для определения площади фигур 'circle', 'rectangle', 'triangle'
    // Используйте switch.
    if (typeof figure !== "string"){
        return "ошибка в типах данных"
    }
    for (p of params){
        if (typeof p !== "number"){
            return "неправильный тип данных параметров"
        }
    }
    switch(figure) {
        case "circle":
            if (params.length === 1) {
                if (params[0] <= 0){
                    return " неверный радиус"
                }
                const r = params[0]
                return (Math.PI * r ** 2).toFixed(2)
            } 
            return " у круга может быть только один параметр"
        case "rectangle":
            if (params.length !== 2){
                return " у прямоугольника должно быть 2 параметра"
            } else {
                const [a,b] = params
                if (a > 0 && b > 0) {
                    let c = a * b
                    return c
                }
                return "параметры должны быть больше 0"
                
            }


        case "triangle":
            if (params.length === 3){
                const [a, b, c] = params
                if (a > 0 && b > 0 && c > 0) {
                    if ( ( a + b > c) && ( a + c > b) && ( c + b > a) ) {
                        const p = (a + b + c) / 2
                        return Math.sqrt (p * (p - a) * (p - b) * (p - c))
                    } else {
                        return " не удовлетворяет условию тругольника"
                    }
                } else {
                    return " сторона треугольника не может быть меньше 1"
                }
            } else {
                return "у трегольника должно быть 3 параметра "
            }  
        default:
            return "неправильное название фигуры"
    }

}
//console.log("площадЗЗЗЗЗЗЗЗЗЗЗь:", calculateArea("circle", 2))


// 2.5 Стрелочные функции
const reverseString = (str) => {
    // Функция возвращает перевернутую строку
    if (typeof str === 'number') {
        return "неправильный тип данных"
    }
    return str.split("").reverse().join("")
};
//console.log(reverseString("asdf"))

const getRandomNumber = (min, max) => {
    // Функция возвращает случайное число между min и max
    if (typeof min === 'string' || typeof max === 'string') {
        return "неправильный тип данных"
    }
    return Math.floor(Math.random() * (max - min + 1)) + min
};
//console.log(getRandomNumber(1, 3))


// ===== ЗАДАНИЕ 3: Объекты =====
const book = {
    // 3.1 Создайте объект "книга" с полями для хранения заголовка, автора, 
    // года выпуска, количества страниц, и доступности
    // объект должен иметь два метода getInfo возвращает одной строкой информацию о названии книги, аторе, годе выпуска, количестве страниц
    // метод toggleAvailability - который меняет значение доступности и возвращает его
    title: " капитанская дочка",
    avtor: "Пушкин",
    god: "1836",
    pages: "168",
    dostyp: true,
    getInfo() {
        return `${this.title} - ${this.avtor}, ${this.god}, ${this.pages}`
    },
    toggleAvailability(){
        this.dostyp= !this.dostyp
        return this.dostyp
    }
};  
//console.log(book.getInfo(), book.toggleAvailability() )



const student = {
    // 3.2 Реализуйте методы объекта "студент" 
    name: "Анна Петрова",
    age: 20,
    course: 2,
    grades: {
        math: 90,
        programming: 95,
        history: 8
    },
    
    // Метод для расчета среднего балла
    getAverageGrade() {
        // Ваш код здесь
        const b = Object.keys(this.grades).length
        const a = (this.grades.math + this.grades.programming + this.grades.history) / b
        return a
    },
    
    
    // Метод для добавления новой оценки
    addGrade(subject, grade) {
        // Ваш код здесь
        if (typeof grade === "string"){
            return " неправильный тип данных"
        }
        if (typeof subject === "number"){
            return " неправильный тип данных"
        }
        this.grades[subject] = grade
        return `"новый предмет и новая оценка:" ${subject}: ${grade}`
    }
};
//console.log(student.getAverageGrade());
//console.log(student.addGrade("hist", 10));




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
    const squares = numbers.map(number => number**2)
    console.log(squares)
    
    

    // 3. Используйте filter для получения активных пользователей
    /*const activeUsers =  ваш код */
    const t = user => user.isActive;
    const t2 = user => {
        user.isActive;
    }

    const activeUsers = users.filter(t)
    console.log(activeUsers)

    // 4. Используйте find для поиска пользователя с именем "Виктория"
    /*const victoria =  ваш код */
    const victoria = users.find(user => user.name === "Виктория")
    console.log(victoria)

    // 5. Используйте reduce для подсчета суммы всех чисел
    /*const sum =  ваш код */
    const sum = numbers.reduce(function(accumulator, currentValue){
        return accumulator + currentValue
    })
    console.log(sum)

    // 6. Используйте sort для сортировки пользователей по возрасту (по убыванию)
    /*const sortedByAge =  ваш код */
    const sortedByAge = users.sort((a, b) =>  b.age - a.age)
    console.log(sortedByAge)

    // 7. Используйте метод для проверки, все ли пользователи старше 18 лет
    /*const allAdults =  ваш код */
    const allAdults = users.filter(user => user.age > 18)
    console.log(allAdults)


    // 8. Создайте цепочку методов: 
    //    - отфильтровать активных пользователей
    //    - преобразовать в массив имен
    //    - отсортировать по алфавиту
    /*const activeUserNames =  ваш код */
    const activeUserNames =  users.filter(user => user.isActive).map(user => user.name).sort();
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
    
    addTask(title, priority = "medium") {
        // 5.1 Добавление задачи
        const newtask = {
            id: this.tasks.length + 1,
            title: title,
            completed: false,
            priority: priority
        }
        this.tasks.push(newtask)
        return this.tasks
    },
    

    completeTask(taskId) {
        // 5.2 Отметка выполнения
        const task = this.tasks.find(task => task.id === taskId);
        if (task){
            task.completed = true ;
            return task
        }
        return "такой задачи нет"
    },
    
    
    // Удаление задачи
    deleteTask(taskId) {
        // 5.3 Ваш код здесь
        const index = this.tasks.findIndex(task => task.id === taskId);
        if(index !== -1 ){
            return this.tasks.splice(index,1)[0];
        }
        return "такой задачи нет"

    },

    // Получение списка задач по статусу
    getTasksByStatus(completed) {
        // 5.4 Ваш код здесь
        return this.tasks.filter(task => task.completed === completed)
    },
    
    getStats() {
        /* 5.5 Статистика возвращает объект:        
        total,
        completed,
        pending,
        completionRate
        */
       const total = this.tasks.length
       const completed = this.tasks.filter(task => task.completed).length
       const pending = this.tasks.filter(task => task.completed === false).length
       const completionRate = completed / total * 100
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
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
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
    

    //тест 2.1 
    console.assert(getReviewerNumber(5,1) === 6, "тест исчисления номера ревьюера провален1")
    console.assert(getReviewerNumber(21,2) === 23, "тест исчисления номера ревьюера провален2")
    console.assert(getReviewerNumber(21,"i") === "неправильный тип данных", "тест исчисления номера ревьюера провален, неправильный тип данных")
    console.assert(getReviewerNumber("i",2) === "неправильный тип данных", "тест исчисления номера ревьюера провален, неправильный тип данных")
    console.assert(getReviewerNumber(25, 2) === "неправильное количество людей", "теест проверки номера ревьюера провален, неправильно количество людей")
    console.assert(getReviewerNumber(23, 1) === 1, "тест исчисления номера ревьюера провален3")


    //тест 2.2
    console.assert(getVariant(23,23) === 23, "тест исчисления номера варианта провален, числа одинаковые" )
    console.assert(getVariant(25,23) === 2, "тест исчисления номера варианта провален, номер больше варианта" )
    console.assert(getVariant(23,25) === 23, "тест исчисления номера варианта провален, номер меньше варианта" )
    console.assert(getVariant(23,"p") === "неправильный тип данных", "тест исчисления номера варианта провален, неверный тип данных" )
    console.assert(getVariant("p", 23) === "неправильный тип данных", "тест исчисления номера варианта провален, неверный тип данных" )

    // Тест 2: calculate
    console.assert(calculate(10, 5, '+') === 15, "Тест калькулятора провален");
    console.assert(calculate(10, 5, '-') === 5, "Тест калькулятора провален");
    console.assert(calculate(10, 5, '*') === 50, "Тест калькулятора провален");
    console.assert(calculate(10, 5, '/') === 2, "Тест калькулятора провален");
    console.assert(calculate(0, "[", "+" ) === 'неверный тип данных', "тест калькулятора провален, неверный тип данных")
    console.assert(calculate("u", 1, "+" ) === 'неверный тип данных', "тест калькулятора провален, неверный тип данных")
    console.assert(calculate(2, 1, 1 ) === 'неверный тип данных', "тест калькулятора провален, неверный тип данных")
    console.assert(calculate(0, 1, "--") === 'неверные операции', "тест калькулятора провален, неверная операция")
    console.assert(calculate(1, 0, "/") === '/ zero', "тест калькулятора провален, деления на ноль")
    console.assert(calculate(Infinity, 1, "*") === 'слишком большие данные', "тест калькулятора провален, переполнение")
    
    // Добавьте остальные тесты...
    //тест 2.4
    console.assert(calculateArea(1, 1, 2, 3) === "ошибка в типах данных", "тест площади фигур провален, неправильный тип данных в фигуре")
    console.assert(calculateArea("triangle", "p", 2, 3) === "неправильный тип данных параметров", "тест площади фигур провален, неправильный тип данных в параметрах")
    console.assert(calculateArea("triangle", 1, "p", 3) === "неправильный тип данных параметров", "тест площади фигур провален, неправильный тип данных в параметрах")
    console.assert(calculateArea("triangle", 1, 2, "p") === "неправильный тип данных параметров", "тест площади фигур провален, неправильный тип данных в параметрах")
    console.assert(calculateArea("circle", 1, 2, 3) === " у круга может быть только один параметр", "тест площади фигур провален, у круга может быть только один параметр")
    console.assert(calculateArea("circle", -1) === " неверный радиус", "тест площади фигур провален, радиус отрицательный")
    console.assert(calculateArea("cirккккcle", -1) === "неправильное название фигуры", "тест площади фигур провален, неправильное название фигуры")
    console.assert(calculateArea("rectangle", 1) === " у прямоугольника должно быть 2 параметра", "тест площади фигур провален, у прямоугольника должно быть 2 параметра")
    console.assert(calculateArea("rectangle", 1, -1) === "параметры должны быть больше 0", "тест площади фигур провален, параметры должны быть больше 0")
    console.assert(calculateArea("triangle", 1, 1, 5) === " не удовлетворяет условию тругольника", "тест площади фигур провален, не удовлетворяет условию тругольника")
    console.assert(calculateArea("triangle", 0, 1, 1) === " сторона треугольника не может быть меньше 1", "тест площади фигур провален, сторона треугольника не может быть меньше 0")
    console.assert(calculateArea("triangle", 1, 0, 1) === " сторона треугольника не может быть меньше 1", "тест площади фигур провален, сторона треугольника не может быть меньше 0")
    console.assert(calculateArea("triangle", 1, 1, 0) === " сторона треугольника не может быть меньше 1", "тест площади фигур провален, сторона треугольника не может быть меньше 0")
    console.assert(calculateArea("triangle", 0, 1) === "у трегольника должно быть 3 параметра ", "тест площади фигур провален, у трегольника должно быть 3 параметра ")
    console.assert(calculateArea("circle", 2) === "12.57" , "тест вычисления площади круга провален")
    console.assert(calculateArea("rectangle", 4, 5) === 20 , "тест вычисления площади ПРЯМОУГОЛЬНИКА провален")
    console.assert(calculateArea("triangle", 3, 4, 5) === 6, "тест вычисления площади ТРЕУГОЛЬНИКА провален")

    //тест 2.5
    console.assert(reverseString("asdf") === "fdsa", "тест в стрелочной функции провален, неверная перевернутая строка")
    console.assert(reverseString(1) === "неправильный тип данных", "тест в стрелочной функции провален, неправильный тип данных")
    console.assert(getRandomNumber("asdf" , 150) === "неправильный тип данных", "тест в случайного числа провален, неправильный тип данных")
    console.assert(getRandomNumber(150 , "asdf") === "неправильный тип данных", "тест в случайного числа провален, неправильный тип данных")
    console.assert(getRandomNumber(1 , 3) === 1 || 2 || 3, "тест в случайного числа провален")

    //тест 3.1
    console.log(book.getInfo())
    console.log(book.toggleAvailability())

    //тест 3.2
    console.log(student.getAverageGrade());
    console.assert(student.addGrade("hist", 10)=== `"новый предмет и новая оценка:" hist: 10`, "тест добавления новой оценки добавлен, неверно" )
    console.assert(student.addGrade(10, 10)=== " неправильный тип данных", "тест добавления новой оценки добавлен, неправильный тип данных" )
    console.assert(student.addGrade("hist", "hist")=== " неправильный тип данных", "тест добавления новой оценки добавлен, неправильный тип данных" )

    // тест 5
    console.log(taskManager.addTask("сделать js", "low")),
    console.log(taskManager.completeTask(3))
    console.log(taskManager.deleteTask(3))
    console.log(taskManager.getTasksByStatus(false))
    console.log(taskManager.getStats())

    // тест 6 
    console.assert(validateEmail("a@b.cd") === true , "Тест валидации email адреса провален")
    console.assert(validateEmail("a@bcd") === false, "Тест валидации email адреса провален, нет точки")
    console.assert(validateEmail("ab.cd") === false , "Тест валидации email адреса провален, нет @")
    console.assert(validateEmail("a{@b.cd") === false , "Тест валидации email адреса провален, не допустимый спецсимвол")
    console.assert(validateEmail("a@b{.cd") === false , "Тест валидации email адреса провален, не допустимый спецсимвол")
    console.assert(validateEmail("a@b.2cd") === false , "Тест валидации email адреса провален, цифра")
    console.assert(validateEmail("a@b.c") === false , "Тест валидации email адреса провален, меньше 2 символов в последней части")
    console.assert(validateEmail("a@.c") === false , "Тест валидации email адреса провален, минимальное количество ")
    console.assert(validateEmail("a@@b.cd") === false , "Тест валидации email адреса провален, два @ подряд")
    console.assert(validateEmail("a+@b.cd") === true , "Тест валидации email адреса провален, спецсимвол")
    console.assert(validateEmail("@b.cd") === false , "Тест валидации email адреса провален, до доменной части нет символов")
    console.assert(validateEmail("a ь@b.cd") === false , "Тест валидации email адреса провален, пробел ")
    console.assert(validateEmail("a@b..cd") === false , "Тест валидации email адреса провален, две точки подряд")

    console.log("Все тесты пройдены! ✅");
}

// Запуск тестов
runTests();
