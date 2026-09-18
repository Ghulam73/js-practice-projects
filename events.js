const buttons = document.getElementById('ShowMessage')
const box = document.querySelector('.box')
const inputValue = document.getElementById('keyInput')
const Output = document.querySelector('#output');
const nameInput = document.getElementById('nameInput')
const preview = document.querySelector('#preview')
const submit = document.getElementById('submitButton')

// buttons.addEventListener('click', function(event){
//     if(event)
//    buttons.textContent = 'Button Clicked'
// })

// box.addEventListener('mouseover', function(event){
//     if(event){
//         alert('Mouse Entered the Box')
//     }
// }, false)

// box.addEventListener('mouseout', function(event){
//     if(event){
//         alert('Mouse Exited the Box')
//     }
// }, false)


// inputValue.addEventListener('keydown', function(event){
//     event.preventDefault();
//     if(event.key === 'x'){
//         Output.textContent = 'You Pressed X'
//     }
//     alert("You Pressed X")
// }, false)

nameInput.addEventListener('input', function(event){
    const value = nameInput.value.trim();
     preview.textContent = 'Preview: ' + (value || '...');
},false)