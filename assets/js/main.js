document.addEventListener("DOMContentLoaded", function() {
    const scrollDownIcon = document.querySelector('.scroll-down-icon');
    const targetSection = document.querySelector('#about'); // Defina aqui a seção para onde deseja rolar

    scrollDownIcon.addEventListener('click', function() {
        smoothScroll(targetSection);
    });

    function smoothScroll(target) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1500; // Duração da animação em milissegundos
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const ease = easeInOutCubic(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, ease);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }

        requestAnimationFrame(animation);
    }
}); 

document.addEventListener("DOMContentLoaded", function() {
    const scrollDownIcon = document.querySelector('.ability');
    const targetSection = document.querySelector('#skills'); // Defina aqui a seção para onde deseja rolar

    scrollDownIcon.addEventListener('click', function() {
        smoothScroll(targetSection);
    });

    function smoothScroll(target) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1500; // Duração da animação em milissegundos
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const ease = easeInOutCubic(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, ease);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }

        requestAnimationFrame(animation);
    }
});

