let popup = document.getElementById("popup");
let openBtn = document.getElementById("btn_open");
let closeBtn = document.getElementById("btn_close");

openBtn.addEventListener('click' , function() {
    popup.classList.add("open_pop")
});

closeBtn.addEventListener('click' , function(){
    popup.classList.remove("open_pop")
})