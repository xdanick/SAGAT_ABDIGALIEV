const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.information .item');

let currentIndex = 0;
const totalItems = items.length;

// Функция для показа элемента по индексу
function showItem(index) {
    items.forEach((item, i) => {
        item.style.display = (i === index) ? 'block' : 'none'; // Скрываем все, кроме выбранного элемента
    });
}

// Инициализация отображения
showItem(currentIndex);

// Обработчики для кнопок
prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Переход к предыдущему элементу
    showItem(currentIndex);
});

nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalItems; // Переход к следующему элементу
    showItem(currentIndex);
});

// Добавление обработчиков событий для кнопок
document.querySelectorAll(".information .item button").forEach((button, index) => {
    button.onclick = function() {
        handleButtonClick(index); // Передаём индекс кнопки
    };
});

// Функция для обработки клика по кнопке
function handleButtonClick(index) {
    localStorage.setItem("selectedButton", `section${index + 1}`);
    window.location.href = "study.html"; // Переход на другую страницу
}
