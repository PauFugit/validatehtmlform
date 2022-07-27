let form = document.querySelector('form');

form.addEventListener('submit', (evento)=>{
    evento.preventDefault();

    let errors=[];

    let card = document.querySelector('#card');
    let CVC = document.querySelector('#CVC');
    let amount = document.querySelector('#amount');
    let name = document.querySelector('#name');
    let lastname = document.querySelector('#lastname');
    let inputCity = document.querySelector('#inputCity');
    let inputState = document.querySelector('#inputState');
    let inputZip = document.querySelector('#inputZip');
    let message = document.querySelector('#message');
/* formatos */
    let empty = /^$/;
    let fNum = /^[0-9]+$/;
    let fText = /^[a-z A-Z]+$/;
    let fState = /^...$/;
    let fMsj = /^[\w\d\s\.\'\,\-\!\@\#\$\&\*\`\~\[\]\?\<\>\"\:\;\\\/\{\}\|\%\^\(\)\+\=]{4,500}$/; 

/* tarjeta */
    if (empty.test(card.value)){
        errors.push({item: 'card', message: 'Esto no puede estar vacío!', input: card })
    }else if (!fNum.test(card.value)){
        errors.push({item:'card', message: 'Este campo solo puede contener números', input: card})
    }else{
        card.classList.remove('is-invalid');
    }

/*CVC */

    if(empty.test(CVC.value)){
        errors.push({item:'CVC', message: 'Esto no puede estar vacío!', input: CVC})
    }else if (!fNum.test(CVC.value)){
        errors.push({item: 'CVC', message: 'Este campo solo puede contener números', input: CVC})
    }else{
        CVC.classList.remove('is-invalid');
    }

/*Amount */

    if (empty.test(amount.value)){
        errors.push({item: 'amount', message: 'Esto no puede estar vacío!', input: amount})
    }else if (!fNum.test(amount.value)){
        errors.push({item: 'amount', message: 'Este campo solo puede contener números', input: amount})
    }else{
        amount.classList.remove('is-invalid');
    }

/* name */

    if (empty.test(name.value)){
        errors.push({item:'name', message: 'Esto no puede estar vacío!', input: name})
    }else if(!fText.test(name.value)){
        errors.push({item:'name', message: 'Este campo solo puede contener letras', input: name})
    }else{
        name.classList.remove('is-invalid');
    }
    
/*lastname*/
    if ( empty.test(lastname.value)){
        errors.push({item: 'lastname', message: 'Esto no puede estar vacío!', input: lastname})
    }else if (!fText.test(lastname.value)){
        errors.push({item:'lastname', message: 'Este campo solo puede contener letras'})
    }else{
        lastname.classList.remove('is-invalid');
    }
/*city*/
    if (empty.test(inputCity.value)){
        errors.push({item:'inputCity', message: 'Esto no puede estar vacio!', input: inputCity})
    }else if(!fText.test(inputCity.value)){
        errors.push({item:'inputCity', message: 'Este campo solo puede contener letras', input: inputCity})
    }else{
        inputCity.classList.remove('is-invalid');
    }

/*state*/
    if(empty.test(inputState.value)){
        errors.push({item:'inputstate', message: 'Esto no puede estar vacío!', iput: inputState})
    }else if(!fState.test(inputState.value)){
        errors.push({item:'inputState', message: 'Debes ingresar una opción válida', input: inputState})
    }else{
        inputState.classList.remove('is-invalid');
    }

/*zip*/
    if(empty.test(inputZip.value)){
        errors.push({item:'inputZip', message: 'Esto no puede estar vacío!', input: inputZip})
    }else if (!fText.test(inputZip.value)){
        errors.push({item:'inputZip', message: 'Este campo solo puede contner letras', input: inputZip})
    }else{
        inputZip.classList.remove('is-invalid');
    }

    /*msj*/

    if(empty.test(message.value)){
        errors.push({item:'message', message: 'Esto no puede estar vacío!', input: message})
    }else if (!fMsj.test(message.value)){
        errors.push({item:'message', message: 'Debes insertar un mensaje válido', input: message})
    }else{ 
        message.classList.remove('is-invalid');
    }
    
/* mensaje general */

    

    console.log(errors);
    if (errors.length>0){
        errors.forEach(({item,message,input}) => {
            input.classList.add('is-invalid');
            document.querySelector('.${item}').innerHTML=message;
        });
    } else{
        form.submit();
    }




});