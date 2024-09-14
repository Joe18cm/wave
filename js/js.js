let tabsBtn = document.querySelectorAll('.ac-text');
let tabsItem = document.querySelectorAll('.guests__rightbox');
tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function (btn) { btn.classList.remove('ac-text--active') });
        e.currentTarget.classList.add('ac-text--active');
        tabsItem.forEach(function (element) { element.classList.remove('guests__rightbox--active') });
        document.querySelector(`[data-target="${path}"]`).classList.add('guests__rightbox--active');
    });
});

/*Swiper */

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: true,
    // пагинация
    pagination: {
        el: '.swiper-pagination',
    },
    // навигация
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 17
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 28
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 22
        },

        1280: {
            slidesPerView: 4,
            spaceBetween: 24
        },

    }
});



/* Валидация формы */

const validation = new JustValidate('.js-form');

validation
    .addField('#name', [
        {
            rule: 'required',
            errorMessage: 'Ошибка',
        },
        {
            rule: 'minLength',
            value: 3,
        },

        {
            rule: 'customRegexp',
            value: '^[A-zА-яЁё]+$',
            errorMessage: 'Ошибка',
        },

        {

            rule: 'maxLength',
            value: 30,
        },
    ])
    .addField('#comment', [
        {
            rule: 'required',
            errorMessage: 'Ошибка',
        },

    ])
    .addField('#politic', [
        {
            rule: 'required',
            errorMessage: 'Поставьте галочку',
        }
    ])

    .addField('#email', [
        {
            rule: 'required',
            errorMessage: 'Ошибка',
        },
        {
            rule: 'email',
            errorMessage: 'Ошибка',
        },
    ]);


/* Валидация входа */
const val_Enter = new JustValidate('.modal-window__form');

val_Enter
    .addField('#username', [
        {
            rule: 'required',
            errorMessage: 'Ошибка',
        }
    ])
    .addField('#password', [
        {
            rule: 'required',
            errorMessage: 'Ошибка',
        }
    ]);


/*Поиск*/

document.querySelector(".form-container__btn__open").addEventListener("click", function () {
    document.querySelector(".form").classList.add("form__active");
    this.classList.add("active");
});
document.querySelector(".form-close").addEventListener("click", function () {
    let form = document.querySelector(".form");
    form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".form-container__btn__open").classList.remove("active")
});

document.addEventListener("click", function (e) {
    let target = e.target;
    let form = document.querySelector(".form");
    if (!target.closest(".form-container")) {
        form.classList.remove("form__active");
        form.querySelector("input").value = "";
        document.querySelector(".form-container__btn__open").classList.remove("active")
    }
});


/*ВХод*/
document.querySelector(".header-btn-enter").addEventListener("click", function () {
    document.querySelector(".container-enter").classList.add("container-enter-visible");
});

document.querySelector(".enter-360").addEventListener("click", function () {
    document.querySelector(".container-enter").classList.add("container-enter-visible");
});

document.querySelector(".modal-window__exit").addEventListener("click", function () {
    document.querySelector(".container-enter").classList.remove("container-enter-visible");
});

/* Бургер */


document.querySelector(".header-burger__svg").addEventListener("click", function () {
    document.querySelector(".burger-menu").classList.add("burger-menu__visible");
});

document.querySelector(".burger-menu__exit").addEventListener("click", function () {
    burger_close();
});


function burger_close() {
    document.querySelector(".burger-menu").classList.remove("burger-menu__visible");
};

document.querySelector("body").addEventListener("click", function where_is_click(e) {
    if (e.target.closest(".burger-menu")) { return };
    if (e.target.closest(".header-burger")) { return };
    burger_close();
});

/* Что в эфире */

document.querySelector(".what").addEventListener("click", function () {
    document.querySelector(".radio-navradio").classList.toggle("radio-navradio-visible");
});


/* Больше подкастов */

const btnMore = document.querySelector('.more-podcasts-btn');
const articlesItem = document.querySelectorAll('.podcasts-ul__link');

btnMore.addEventListener('click', () => {
    articlesItem.forEach(el => { el.classList.add('podcasts-ul__link-visible') })
    btnMore.closest('.more-podcasts-btn').classList.add('more-podcasts-btn--hidden');
});

/* Play btn */


document.querySelectorAll(".podcasts-ul__link__info-div").forEach(play => play.addEventListener('click', e=>{
    const bu = e.currentTarget;

    document.querySelectorAll(".podcasts-ul__link__info-div").forEach(pause => bu !==pause && pause.classList.remove('play-btn__pause'));
    bu.classList.toggle('play-btn__pause');
    console.log(bu)
}));

