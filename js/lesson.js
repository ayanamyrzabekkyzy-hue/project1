//Phone checker

const phoneInput = document.querySelector ('#phone_input')
const phoneButton = document.querySelector ('#phone_button')
const phoneResult = document.querySelector ('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = "Phone number is valid"
        phoneResult.style.color = "green"
    } else {
        phoneResult.innerHTML = "Phone number is not valid"
        phoneResult.style.color = "red"
    }
}

const tabsParent = document.querySelector('.tab_content_items');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsContent = document.querySelectorAll('.tab_content_block');

const hideTabContent = () => {
    tabsContent.forEach((item) => {
        item.style.display = 'none';
    });
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active');
    });
};
const showTabContent = (i = 0) => {
    tabsContent[i].style.display = 'block';
    tabs[i].classList.add('tab_content_item_active');
};

hideTabContent();
showTabContent();

tabsParent.onclick = (event) => {
    const target = event.target;

    if (target.classList.contains('tab_content_item')) {
        tabs.forEach((item, index) => {
            if (target === item) {
                hideTabContent();
                showTabContent(index);
            }
        });
    }
};

let currentIndex = 0; 

const autoTabSlider = () => {
    setInterval(() => {
        currentIndex++;
        if (currentIndex >= tabs.length) {
            currentIndex = 0;
        }
        hideTabContent();
        showTabContent(currentIndex);
    }, 3000);
};
autoTabSlider();