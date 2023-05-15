let typed = new Typed(".multiple-text", {
    strings: ["инженер", "начинающий разработчик", "программист"],
    typeSpeed: 100, 
    backSpeed: 100,
    backDelay: 1000, 
    loop: true
})

let list = document.querySelectorAll('.nav li')
        function active(){
            list.forEach((i) => 
            i.classList.remove('active'));
            this.classList.add('active');
        }
        list.forEach((i) =>
        i.addEventListener('click', active));

        let menuToggle = document.querySelector('.menuToggle');
        let header = document.querySelector('header');
        menuToggle.onclick = function(){
            header.classList.toggle('active');
        }