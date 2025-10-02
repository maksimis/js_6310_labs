console.log("🎨 KAI Spring Style loaded");

// Функция для применения стилей
function applySpringStyles() {
    const style = document.createElement('style');
    style.id = 'spring-styles';
    style.textContent = `
        /* 1. Фон страницы */
        body {
            background-color: #f8fdf8 !important;
        }
        
        /* 2. Цвет текста */
        body {
            color: #2d5016 !important;
        }
        
        /* 3. Шапка сайта */
        header, .header, #header {
            background-color: #e8f5e9 !important;
            border-bottom: 2px solid #a5d6a7 !important;
        }
        
        /* 4. Ссылки - основной цвет */
        a {
            color: #388e3c !important;
        }
        
        /* 5. Ссылки - цвет при наведении */
        a:hover {
            color: #ff4081 !important;
        }
        
        /* 6. Кнопки */
        button, .button, input[type="submit"] {
            background-color: #4caf50 !important;
            border-radius: 6px !important;
        }
        
        /* 7. Карточки и блоки */
        .card, .panel, .block {
            background-color: white !important;
            border: 1px solid #e8f5e9 !important;
        }
        
        /* 8. Таблицы */
        table {
            border: 1px solid #c8e6c9 !important;
        }
        
        /* 9. Заголовки */
        h1, h2, h3 {
            color: #1b5e20 !important;
        }
        
        /* 10. Футер */
        footer, .footer {
            background-color: #e8f5e9 !important;
        }
    `;
    document.head.appendChild(style);
}

// Функция для удаления стилей
function removeSpringStyles() {
    const style = document.getElementById('spring-styles');
    if (style) style.remove();
}

// Создаем кнопку переключения
function createToggleButton() {
    const button = document.createElement('button');
    button.id = 'spring-toggle';
    button.innerHTML = '🌱 Включить весенний стиль';
    
    // Стили кнопки
    Object.assign(button.style, {
        position: 'fixed',
        top: '15px',
        right: '15px',
        zIndex: '10000',
        background: '#4caf50',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        padding: '10px 16px',
        fontSize: '14px',
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
    });
    
    // Обработчик клика
    button.onclick = function() {
        const isEnabled = localStorage.getItem('springStyle') === 'true';
        
        if (isEnabled) {
            removeSpringStyles();
            localStorage.setItem('springStyle', 'false');
            button.innerHTML = '🌱 Включить весенний стиль';
            button.style.background = '#4caf50';
        } else {
            applySpringStyles();
            localStorage.setItem('springStyle', 'true');
            button.innerHTML = '🍃 Выключить стиль';
            button.style.background = '#757575';
        }
    };
    
    document.body.appendChild(button);
}

// Демонстрация DOM методов
function showDOMUsage() {
    // getElementById
    const header = document.getElementById('header');
    
    // querySelector с сложным селектором
    const mainContent = document.querySelector('main.container');
    
    // querySelectorAll
    const links = document.querySelectorAll('a');
    
    // parentElement
    if (mainContent) {
        const parent = mainContent.parentElement;
    }
    
    // children
    if (header) {
        const headerChildren = header.children;
    }
}

// Запуск
function init() {
    createToggleButton();
    showDOMUsage();
    
    // Включаем стили если были активны
    if (localStorage.getItem('springStyle') === 'true') {
        applySpringStyles();
        const btn = document.getElementById('spring-toggle');
        btn.innerHTML = '🍃 Выключить стиль';
        btn.style.background = '#757575';
    }
}

// Запускаем когда страница загружена
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}