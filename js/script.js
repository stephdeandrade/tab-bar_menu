    const menuItems = document.querySelectorAll('.menu_items');
    const body = document.body;
    const bodyBg = ["#d63030", "#b83eb8", "#e07d20", "#4bbd28", "#286ebd"];
    const slider = document.querySelector('.slide-top')
    const slideNumber = ["active-1", "active-2", "active-3", "active-4", "active-5"];
    let previousSelectedItem = menuItems[2];
    let previousSelectedSlide = slider;
    let SelectedSlide = slideNumber[2];

    menuItems.forEach((item, index) => {
        item.addEventListener('click', () => {

            previousSelectedItem?.classList.remove('active')
            previousSelectedSlide?.classList.remove(SelectedSlide)
            SelectedSlide = slideNumber[index];
            previousSelectedItem = item;
            slider.classList.add(SelectedSlide)
            item.classList.add('active')
            body.style.backgroundColor = bodyBg[index]
        });
    });