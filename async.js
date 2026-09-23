// const form = document.querySelector('#myForm')
// const statusMessage = document.querySelector('#statusMessage')

// form.addEventListener('submit', function(e){
//     e.preventDefault()

//     statusMessage.textContent = "Processing your request..."
//     statusMessage.className = "processing"

//     const showSuccess = function(){
//         statusMessage.textContent = "Request submitted successfully!"
//         statusMessage.className = "success"
//     }

//     setTimeout(showSuccess, 3000)
// })


// const notification = document.querySelector('#notification')

// setTimeout(function(){
//     notification.className = 'hidden'
//     console.log("Notification Disappeared!")
// },5000)


// const logoutBtn = document.getElementById('logoutBtn')
// const cancelBtn = document.getElementById('cancelBtn')
// const logoutMessage = document.querySelector('#logoutMessage')

// let logoutTimer

// logoutBtn.addEventListener('click', function(){
//     logoutMessage.innerText = 'You will be logged out in 5 seconds...'

//     logoutTimer = setTimeout(function(){
//         logoutMessage.innerText = 'You have been logged out.'
//     }, 5000)
// })

// cancelBtn.addEventListener('click', function(){
//     clearTimeout(logoutTimer)
//     logoutMessage.innerText = 'Logout cancelled.'
// })



// const order = document.getElementById('placeOrderBtn')

// const cancelOrder = document.getElementById('cancelOrderBtn')

// const orderMessage = document.querySelector('#orderMessage')

// const orderId = (Math.random()*1000+1).toFixed(0);


// let cancelTimer;

// order.addEventListener('click',function(){
//     orderMessage.innerText = 'Processing your order...'

//     cancelTimer = setTimeout(function(){
//         orderMessage.innerHTML = `Order # ${orderId} confirmed `
//     },5000)
// })

// cancelOrder.addEventListener('click',function(){
//     clearTimeout(cancelTimer)
//     orderMessage.innerText = 'Order cancelled.'
// })


const sendButton = document.getElementById('sendProposalBtn')

const cancelButton = document.getElementById('cancelBtn')

const message = document.querySelector('#proposalMessage')

let cancelTimer;

sendButton.addEventListener('click', function(){
    message.innerText = 'Sending proposal...'   

    cancelTimer = setTimeout(function(){
        message.innerText = 'Proposal sent successfully!'
        sendButton.disabled = true
    },3000)

   
})

cancelButton.addEventListener('click',function(){
    clearTimeout(cancelTimer);
    message.innerText = 'Proposal cancelled.'
})