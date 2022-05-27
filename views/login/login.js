async function signin(e){
    try {
        e.preventDefault();
    
        const form = new FormData(e.target);
    
        const loginDetail = {
            username : form.get('username'),
            password: form.get('password')
        }
        const user = await axios.post('http://localhost:4000/user/signup',loginDetail);
        if(user){
            alert(user.data.msg);
            // window.location.href = '../login/login.html';
        }
    } catch (error) {
        console.log(error);
    }
    }