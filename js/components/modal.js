export const modal = () => {
    // массив всех модалок на странице
    // 1. Кнопка/Кнопки открытия
    // 2. Модальное окно
    // 3. Кнопка скрытия
    // 4. Активный класс
    // Кнопку/Кнопки открытия задавать через querySelectorAll
    const node = [
        [
            document.querySelectorAll('.btn-detail'), 
            document.querySelector(".modal-detail"), 
            document.querySelector(".modal-detail .modal__btn-close"), 
            "is-open",
        ],
        [
            document.querySelectorAll('.btn-phone'), 
            document.querySelector(".modal-back-phone"), 
            document.querySelector(".modal-back-phone .modal__btn-close"), 
            "is-open",
        ],
        [
            document.querySelectorAll('.btn-set-order'), 
            document.querySelector(".modal-order"), 
            document.querySelector(".modal-order .modal__btn-close"), 
            "is-open",
        ],
    ]

    // функция открытия модального окна
    const openModal = (modal, toggleClass) => {
        modal.classList.add(toggleClass);
    }
    // функция закрытия модального окна
    const closeModal = (modal, toggleClass) => {
        modal.classList.add("is-back-animate");

        setTimeout(()=>{
            modal.classList.remove(toggleClass);
            modal.classList.remove("is-back-animate");
        }, 600);
    }

    // функция для создания событий у элементов модального окна
    const changeStateModal = (arr, isHidden = true) => {
        // деструктуризация входного массива
        // ===========
        // 1. Кнопка/Кнопки открытия
        // 2. Модальное окно
        // 3. Кнопка скрытия
        // 4. Активный класс
        // 5. Не обязательный параметр
        // ===========
        const [btnOpen, modal, btnClose, activeClass] = arr;

        // открытие окна
        if(btnOpen) {
            btnOpen.forEach(btn=> {
                btn.addEventListener("click", ()=>openModal(modal, activeClass));
            });
        }
        // закрытие окна
        if(btnClose) {
            btnClose.addEventListener("click", ()=>closeModal(modal,activeClass));
        }
        
        // проверка параметра для выполнения функционала скрытия модального окна при клике вне него, и при нажатии кнопки ESC
        if(!isHidden) return;
        // скрытие при клике вне блока
        window.addEventListener("click", (event)=> {
            // проверка при клике в любое место на странице
            // если корневой эл. или тот по которому было нажатие соответсвует классу аккордеона
            // тогда оставлять класс, в противном случае класс удаляется
            if (event?.target?.classList?.value?.includes('modal-parent') && modal) closeModal(modal, activeClass);
        });
        // скрытие блока по нажатию на кнопку ESC
        window.addEventListener("keydown", (event)=> {
            if(event.code === "Escape" || event.keyCode === 27 || event.key === "Escape") {
                modal.classList.remove(activeClass);
            }
        });
    }

    // вызов функции для навешивания событий на элементы модального окна
    node.forEach(arr=> changeStateModal(arr));
}