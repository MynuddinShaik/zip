let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});



//form validation
function validation(){
    var neme =document.getElementById('exampleInput1').value;
    var email =document.getElementById('exampleInputEmail1').value;
    var number =document.getElementById('exampleInputNumber1').value;
    var password =document.getElementById('exampleInputPassword1').value;
    var cpassword =document.getElementById('exampleInputPassword2').value;

    var namecheck = /^[A-Za-z]{3,50}$/;
    var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var numbercheck = /^[6789][0-9]{9}$/;
    var passwordcheck = /^[A-Za-z0-9_!@#$%^&*]{8,16}$/;

    if(namecheck.test(name)){
        document.getElementById('nameerror').innerHTML="";

    }
    else{
        document.getElementById('nameerror').innerHTML="Please use only Alphabets";
        return false;
        
    }
    if(emailcheck.test(email)){
        document.getElementById('emailerror').innerHTML="";

    }
    else{
        document.getElementById('emailerror').innerHTML="Please enter valid email Ex:abc@xyz.com";
        return false;
        
    }

    if(numbercheck.test(number)){
        document.getElementById('numbererror').innerHTML="";

    }
    else{
        document.getElementById('numbererror').innerHTML="Please enter valid numbrer";
        return false;
        
    }

    if(passwordcheck.test(password)){
        document.getElementById('passworderror').innerHTML="";

    }
    else{
        document.getElementById('passworderror').innerHTML="Please use alphabet,numeric&specialcharacters";
        return false;
        
    }

    if(cpasswordcheck.match(password)){
        document.getElementById('cpassworderror').innerHTML="";

    }
    else{
        document.getElementById('cpassworderror').innerHTML="password is not matching";
        return false;
        
    }

    

}




