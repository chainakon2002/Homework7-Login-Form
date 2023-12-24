const loginForm = document.querySelector(".login-form");

const changeColor = (selector) => {
    const el = document.querySelector(selector);
    console.log(el)
    if (el) {
        el.style.border = '1px solid red';
        el.style.bordercolor = 'red';
    }
}

const validateInput = (inobj) => {
    console.log(inobj);
    const username = inobj.username;
    const password = inobj.password;
    const role = inobj.role;

    if (username.trim() === '' || password.trim() === '' || role.trim() === '') {
        alert('กรุณากรอกข้อมูล');
        return false;
    }

    const Use_name = username.trim();
    if (Use_name.length <= 3 || Use_name.includes(' ')) {
        alert('กรุณากรอก username ให้มีความยาวมากกว่า 3 ตัวอักษร');
        changeColor('#username');
        return false;
    }
    if ((password.length) < 4 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
        alert('กรุณากรอก Password ให้มีความยาวมากกว่า 4 ตัว และต้องมีทั้งตัวเลขและตัวอักษร');
        changeColor('#password');
        return false;
    }

    puraCheckUseLog(username, password);
    return true;
};

const puraCheckUseLog = (username, password) => {
    console.log(username);
    console.log(password);

    alert('Login Success');
    window.location.assign('https://www.example.com');
}

const hdlLogin = (e) => {
    e.preventDefault();
    let inobj = {};
    for (let el of loginForm.elements) {
        inobj[el.id] = el.value;
    }
    validateInput(inobj);
};

loginForm.addEventListener("submit", hdlLogin);





// document.addEventListener("DOMContentLoaded", function () {
//     const loginForm = document.querySelector(".login-form");

//     const fadeInForm = () => {
//         loginForm.classList.add("show");
//     };

//     // Set a delay before applying the "show" class
//     setTimeout(fadeInForm, 300);
// });
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");

    const fadeInForm = () => {
        loginForm.classList.add("show");
    };

    // Set a delay before applying the "show" class
    setTimeout(fadeInForm, 300);
});