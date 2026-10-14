const startBtn = document.getElementById('startBtn')
const stopBtn = document.getElementById('stopBtn')
const counter = document.querySelector('#counter')


let count = 0;
let interValid = null;


startBtn.addEventListener('click',function(){
    if(interValid !== null){
        return
    }
    interValid = setInterval(function(){
        count++;
        counter.innerText = count
        console.log("Start Button Pressed!")
    },1000)
})


stopBtn.addEventListener('click',function(){
    clearInterval(interValid);
    interValid = null
})