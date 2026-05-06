async function signup(event){
  event.preventDefault();

  let form = event.target;
  let fields = event.target.elements;
  
  let data = {
    username: fields['username'].value,
    email: fields['email'].value,
    password: fields['password'].value,
  }

  form.reset();

  let result = await sendRequest(`${server}/signup`, 'POST', data);
  
  if('detail' in result){
    toast("Register Failed: "+result['detail']);
  }else{
    toast("Register Successful");
    window.location.href= 'index.html';
  }
}

document.forms['signUpForm'].addEventListener('submit', signup);