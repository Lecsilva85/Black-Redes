function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const buttonHome = document.querySelector('.button-home');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');

            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const targetPosition = targetElement.offsetTop;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }

            const navigation = document.querySelector('.navigation');
            const menuToggle = document.querySelector('.toggle');
            if (navigation.classList.contains('active')) {
                navigation.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });

    if (buttonHome) {
        buttonHome.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToTop();
        });
    }
});