const btnLetAppear = [...document.querySelectorAll('[type="button"]')];
const container = [...document.querySelectorAll('.container')];
console.log(btnLetAppear);
console.log(container);

for(let j = 0; j < btnLetAppear.length; j++) {
    btnLetAppear[j].id = 'letAppear'+j+'';
}

for(let k = 0; k < container.length; k++) {
    container[k].id = 'anim'+k+'';
}

for(let i = 0; i < btnLetAppear.length; i++) {
    btnLetAppear[i].addEventListener("click", function() {
        this.value = "      Arrêter      ";
        this.style.color = "red";
        this.style.transition = "color 0.8s";
        container[i].style.opacity = 1;
        container[i].style.transition = "opacity 0.8s ease";
        container[i].classList.add('object_anim1');
    })

    btnLetAppear[i].addEventListener("dblclick", function() {
        this.value = "Animation "+(i+1)+"";
        this.style.color = "black";
        this.style.transition = "color 0.8s";
        container[i].style.opacity = 0;
        container[i].style.transition = "opacity 0.8s ease";
        container[i].classList.remove('object_anim1');
    })

    btnLetAppear[i].addEventListener("mouseenter", function() {
        this.style.backgroundColor = "lightblue";
        this.style.transition = "background-color 0.8s";
    })

    btnLetAppear[i].addEventListener("mouseleave", function() {
        this.style.backgroundColor = "rgb(246, 231, 231)";
        this.style.transition = "background-color 0.8s";
    })
}


