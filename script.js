const lang = document.querySelector(".lang"),
headerTitle = document.querySelector(".header__title"),
headerText = document.querySelector(".header__text"),
aboutTitle = document.querySelector(".about__title"),
aboutText = document.querySelector(".about__text"),
skillTitle = document.querySelector(".skill__title"),
projectTitle = document.querySelector(".project__title"),
contactTitle = document.querySelector(".contact__title"),
footer = document.querySelector(".footer");
console.log(lang);
lang.addEventListener("click",()=>{
    if (lang.innerHTML == "RU") {
        lang.innerHTML = "ENG"
        headerTitle.innerHTML = "Hello I'm Murad"
        headerText.innerHTML = "Web Developer | Frontend |"
        aboutTitle.innerHTML = "About Me"
        aboutText.innerHTML = "I'm a programmer passionate about creating modern websites. I love clean code, minimalism, and continuous improvement. I work with HTML, CSS, JavaScript, Git & GitHub."
        skillTitle.innerHTML = "Skills"
        projectTitle.innerHTML = "Projects"
        contactTitle.innerHTML = "Contacts"
        footer.innerHTML = "© 2025 Murad. All rights reserved."
    }
    else if (lang.innerHTML == "ENG") {
        lang.innerHTML = "UZ"
        headerTitle.innerHTML = "Salom, men Murodman"
        headerText.innerHTML = "Veb dasturchi | Frontend |"
        aboutTitle.innerHTML = "Men haqimda"
        aboutText.innerHTML = "Men zamonaviy veb-saytlar yaratishga qiziqqan dasturchiman. Toza kod, minimalizm va doimiy rivojlanishni yaxshi ko‘raman. HTML, CSS, JavaScript, Git va GitHub bilan ishlayman."
        skillTitle.innerHTML = "Ko'nikmalar"
        projectTitle.innerHTML = "Loyihalar"
        contactTitle.innerHTML = "Aloqalar"
        footer.innerHTML = "© 2025 Murad. Barcha huquqlar himoyalangan."
    }
    else {
        lang.innerHTML = "RU"
        headerTitle.innerHTML = "Привет, я Мурад"
        headerText.innerHTML = "Веб-разработчик | Frontend |"
        aboutTitle.innerHTML = "Обо мне"
        aboutText.innerHTML = "Я программист, увлечённый созданием современных веб-сайтов. Люблю чистый код, минимализм и постоянное развитие. Работаю с HTML, CSS, JavaScript, Git & GitHub"
        skillTitle.innerHTML = "Навыки"
        projectTitle.innerHTML = "Проекты"
        contactTitle.innerHTML = "Контакты"
        footer.innerHTML = " © 2025 Мурад. Все права защищены."
    }
})
