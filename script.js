let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').oneclick = () =>{
    navbar.classList.toggle('active');
}

window.onescroll =() =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
    inputNumber.oninput = () =>{
        if(inputNumber.Value.length > inputNumber.maxlength) inputNumber.value
        = inputNumber.value.slice(0, inputNumber.maxlength);
    };
});

