const header = document.querySelector('.header');


window.onscroll = function () { scrollFunction() };

function openModal() {
    document.body.classList.add('open-modal');
}
function closeModal() {
    document.body.classList.remove('open-modal');
}

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add('header-mini');
    } else {
        header.classList.remove('header-mini');
    }
}

const burgerCheckBox = document.getElementById('burger-checkbox');
function clickMobMenu() {
    burgerCheckBox.checked = false;
}

function scroolLink(id) {
    document.getElementById(id).scrollIntoView({ block: "start", behavior: "smooth" });
    clickMobMenu();
}

const popupSignIn = document.querySelector('.form-sign-in'); 

popupSignIn.addEventListener('click' , (e)=> {
    const withinBoundaries = e.composedPath().includes(popupSignIn.querySelector('.form-container'));
    console.log(withinBoundaries)
    if ( ! withinBoundaries ) {
		closePopUpSignIn()
	}
    
});
popupSignIn.querySelector('form').addEventListener('submit', function(evt) {
    evt.preventDefault();
    closePopUpSignIn()
});
function openPopUpSignIn() {
    popupSignIn.classList.remove('hidden');
    openModal()
    
};

function closePopUpSignIn() {
    popupSignIn.classList.add('hidden');
    popupSignIn.querySelectorAll('input').forEach((input)=> {input.value =''});
    closeModal()
};

const popupSignUp = document.querySelector('.form-sign-up'); 

popupSignUp.addEventListener('click' , (e)=> {
    const withinBoundaries = e.composedPath().includes(popupSignUp.querySelector('.form-container'));
    console.log(withinBoundaries)
    if ( ! withinBoundaries ) {
		closePopUpSignUp()
	}
    
});
popupSignUp.querySelector('form').addEventListener('submit', function(evt) {
    evt.preventDefault();
    closePopUpSignUp();
    
});
function openPopUpSignUp() {
    popupSignUp.classList.remove('hidden');
    openModal()
};

function closePopUpSignUp() {
    popupSignUp.classList.add('hidden');
    popupSignUp.querySelectorAll('input').forEach((input)=> {input.value =''})
    closeModal()
};

const popupPolicy = document.querySelector('.policy'); 


function openPopUpPolicy() {
    popupPolicy.classList.remove('hidden');
    openModal()
    
};

function closePopUpPolicy() {
    popupPolicy.classList.add('hidden');
    closeModal()
};