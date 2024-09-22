document.addEventListener("DOMContentLoaded", function() {
    let title = document.querySelector(".title");
    title.setAttribute("data-text", title.textContent);

    const blocks = document.querySelectorAll('.block');
    let currentBlock = 0;

    function showBlock(index) {
        blocks.forEach((block, i) => {
            block.classList.remove('active', 'prev');
            if (i === index) {
                block.classList.add('active');
            } else if (i === index - 1) {
                block.classList.add('prev');
            }
        });
    }

    showBlock(currentBlock);

    document.querySelector('.btn-main').addEventListener('click', function(event) {
        event.preventDefault();
        if (currentBlock < blocks.length - 1) {
            currentBlock++;
            showBlock(currentBlock);
        }
    });

    document.getElementById('next-btn').addEventListener('click', function(event) {
        event.preventDefault();
        if (currentBlock < blocks.length - 1) {
            currentBlock++;
            showBlock(currentBlock);
        }
    });

    const finalBtn = document.querySelector('#block-3 .btn-main');
    finalBtn.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Thank you for exploring!');
    });

    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });



    const soundToggle = document.getElementById('sound-toggle');
    const soundOnIcon = document.getElementById('sound-on');
    const soundOffIcon = document.getElementById('sound-off');
    const audio = document.getElementById('audio');

    audio.muted = true;
    soundOnIcon.classList.add('sound__img--hidden');
    soundOffIcon.classList.remove('sound__img--hidden');

    soundToggle.addEventListener('click', () => {
        if (audio.muted) {
            audio.muted = false;
            soundOnIcon.classList.remove('sound__img--hidden');
            soundOffIcon.classList.add('sound__img--hidden');
            soundToggle.setAttribute('aria-label', 'Отключить звук');
            audio.play().catch(error => console.log('Ошибка воспроизведения:', error));
        } else {
            audio.muted = true;
            soundOffIcon.classList.remove('sound__img--hidden');
            soundOnIcon.classList.add('sound__img--hidden');
            soundToggle.setAttribute('aria-label', 'Включить звук');
        }
    });
});