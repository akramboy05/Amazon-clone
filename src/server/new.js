
const phoneMes =()=>{
    let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha")
    firebase
    .auth()
    .signInWithNumber(phone, recaptcha)
    .then((e)=>{
        let parol = prompt("parolni kiriting")
        e.confirm(parol).then(user => console.log(user))
    })
    .catch(err = console.log(err))

}