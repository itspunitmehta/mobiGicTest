async function signup(e){
try {
    e.preventDefault();

    const form = new FormData(e.target);

    const signupDetail = {
        username : form.get('username'),
        password: form.get('password')
    }
    const user = axios.post('http://localhost:4000/user/signup',signupDetail)
    if(user){
        alert(user.data.msg);
        window.location.href = '../login/login.html';
    }
} catch (error) {
    console.log(error)
}
}