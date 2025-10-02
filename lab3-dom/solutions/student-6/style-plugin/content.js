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
        
        /* Дополнительные стили для навигации */
        nav, .navigation, .menu {
            background-color: #f1f8e9 !important;
            border-radius: 8px !important;
            padding: 10px !important;
        }
    `;
    document.head.appendChild(style);
}

function removeSpringStyles() {
    const style = document.getElementById('spring-styles');
    if (style) style.remove();
}

function createToggleButton() {
    const button = document.createElement('button');
    button.id = 'spring-toggle';
    button.innerHTML = '🌱 Включить весенний стиль';
    
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
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        transition: 'all 0.2s ease'
    });
    
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

function demonstrateDOMUsage() {
    console.log("🔧 Demonstrating DOM methods:");
    
    // getElementById
    const header = document.getElementById('header');
    if (header) {
        console.log("✅ getElementById: header found");
    }
    
    // querySelector с сложным селектором (два класса)
    const mainContent = document.querySelector('main.container');
    if (mainContent) {
        console.log("✅ querySelector (complex): main.container found");
        
        // parentElement
        const parent = mainContent.parentElement;
        if (parent) {
            console.log("✅ parentElement: parent found");
        }
        
        // children
        const children = mainContent.children;
        console.log(`✅ children: ${children.length} child elements found`);
    }
    
    // querySelectorAll
    const links = document.querySelectorAll('a');
    console.log(`✅ querySelectorAll: ${links.length} links found`);
}

// Основная функция инициализации
function init() {
    console.log("🚀 Initializing KAI Spring Style extension");
    
    createToggleButton();
    demonstrateDOMUsage();
    
    // Применяем стили если они были включены
    const isEnabled = localStorage.getItem('springStyle') === 'true';
    if (isEnabled) {
        applySpringStyles();
        const btn = document.getElementById('spring-toggle');
        btn.innerHTML = '🍃 Выключить стиль';
        btn.style.background = '#757575';
    }
    
    console.log("✅ Extension initialization complete");
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}