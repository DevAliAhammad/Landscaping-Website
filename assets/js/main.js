window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('py-4');
                header.classList.remove('py-0');
            } else {
                header.classList.add('py-0');
                header.classList.remove('py-4');
            }
        });
window.FontAwesomeConfig = {
          autoReplaceSvg: 'nest'
        };
