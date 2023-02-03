
async function newUserSave(event) {
    event.preventDefault();
    const newID = event.target.newUserID.value;
    const mail = event.target.newEmail.value;
    const pw = event.target.newPW.value;

    const obj = {
        newID,
        mail,
        pw
    }
    try {
        await axios.post("http://18.117.184.26:3000/newUser/add", obj).then(response => {

            alert('Registered Successfully. Login!!');
        })
    }
    catch (err) {

        alert('Oopss! User exists Already!! Login Please');
    }

}
async function userLogin(event) {
    event.preventDefault();
    const mail = event.target.email.value;
    const pw = event.target.pw.value;
    const loginDetail = {
        mail,
        pw
    }
    try {
        await axios.post("http://18.117.184.26:3000/existingUser/login", loginDetail).then(response => {
            if (response.status === 200) {
                alert(response.data.message);
                localStorage.setItem('token', response.data.token);
                window.location.href = "walletGUI.html"
            }
            else {
                alert(response.data.message);
            }
        })
    }
    catch (err) {

        console.log('****Not login***', JSON.stringify(err));
        document.body.innerHTML += `<div style="color:red;"> ${err.message} <div>`
    }

}

function showforgetpasswordForm() {
    window.location.href = "forgotForm.html"

}
