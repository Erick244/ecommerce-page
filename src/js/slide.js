// Slide mobile home

let nextId = 0;

document.querySelector('.next').onclick = () => {
    nextId++;
    slide();
}

document.querySelector('.prev').onclick = () => {
    nextId--;
    slide();
}

function slide() {
    const current = document.querySelector('.current');

    if (nextId > 3) {
        nextId = 0;
    } else if (nextId < 0) {
        nextId = 3;
    }
    
    current.classList.add('hide');
    current.classList.remove('current');

    const nextImage = document.getElementById(nextId);
    
    nextImage.classList.remove('hide');
    nextImage.classList.add('current');
}

// remover classe hide para quando for desktop

addEventListener('load', () => {
    removeHideInSlide();
})

addEventListener('resize', () => {
    removeHideInSlide();
})


function removeHideInSlide() {
    const containerImages = document.querySelectorAll('.images > div');
    const currentIMG = document.querySelector('.current');
    if (window.innerWidth >= 768) {
        containerImages.forEach(img => {
            img.classList.remove('hide');
        })
    } else {
        containerImages.forEach(img => {
            if (img != currentIMG) {
                img.classList.add('hide');
            }
        })
    }
}

// Slide desktop home

const currentDesktopIMG = document.querySelector('.currentDesktop > img');
document.querySelectorAll('.images > div > img').forEach(img => {
    img.onclick = () => {
        const imgClickSrc = img.src;
        currentDesktopIMG.src = imgClickSrc;
    
        const containerActive = document.querySelector('.activeImage');
        containerActive.classList.remove('activeImage');
        img.parentNode.classList.add('activeImage');

        const imgActive = document.querySelector('.opacity30');
        imgActive.classList.remove('opacity30');
        img.classList.add('opacity30');
    }
})
