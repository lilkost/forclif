export const createSliderFn = () => {
        // массив всех слайдеров
    // для создания простых слайдеров без сложной логики
    const sliders = [
        // пример слайдера
        [
            document.querySelector(".recommendations__slider"),
            {
                direction: 'horizontal',
                loop: false,
                navigation: {
                    nextEl: '.recommendations__slider-btn-next',
                    prevEl: '.recommendations__slider-btn-prev',
                },
                slidesPerView: 4,
                spaceBetween: 20,
            }
        ],
        [
            document.querySelector(".about-photos__slider"),{
                spaceBetween: 20,
                direction: "horizontal",
                    slidesPerView: "auto",
                    centeredSlides: true,
                    loop: true,

                }
        ]

    ]
    // функция конструктор для создания сладеров
    const createSlider = (node, options) => {
        if(node && options) {
            const swiper = new Swiper(node, options);
        }
        else {
            console.error("Ошибка генерации слайдера");
        }
    }
    // вызов конструктора для слайдеров
    if(sliders && sliders.length) {
        sliders.forEach(slider=> {
            const sliderNode = slider[0];
            const sliderOptions = slider[1];

            if(sliderNode && sliderOptions) {
                createSlider(sliderNode, sliderOptions);
            }
            else {
                console.error(`Ошибка генерации, нету одной из двух частей слайдера: slider - ${sliderNode}, список опций - ${sliderOptions}`)
            }
        });
    }


    if(document.querySelector(".detail__min-slider")){
        if(document.querySelector(".detail__min-slider") && document.querySelector(".detail__big-slider")) {
            let swiper = new Swiper(document.querySelector(".detail__min-slider"), {
                spaceBetween: 10,
                slidesPerView: 3,
                freeMode: true,
                watchSlidesProgress: true,
            });
            var swiper2 = new Swiper(document.querySelector(".detail__big-slider"), {
                spaceBetween: 10,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                autoplay: {
                    delay: 5000,
                },
                pagination: {
                    el: ".detail__big-pagination",
                    type: 'bullets',
                    clickable: true
                },
                thumbs: {
                    swiper: swiper,
                },
            });
        }
    }
}