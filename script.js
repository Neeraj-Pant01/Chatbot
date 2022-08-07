let text = document.getElementById('text');
let btn = document.getElementById('btn');
let container = document.getElementById('cont');
const messege1 = ["cool buddy and you ?", "iam absolutely awesome", "doing great what about you"]
const messege2 = ["iam your chat buddy", "iam bot your freind", "iam your freind"]


btn.addEventListener('click',()=>{
    let textValue = text.value;
    let msg = document.createElement('div');
    msg.classList.add('sentMesseges');
    msg.innerHTML = textValue;
    container.appendChild(msg);
    setTimeout(() => {
        reply();
    }, 1000);

});

const reply = () =>{
    let textValue = text.value;
    if(textValue.includes('your name')){
        let replydiv = document.createElement('div');
        replydiv.classList.add('replydiv')
        replydiv.innerHTML = "my name is bot! what is yours ?"
        container.appendChild(replydiv);
    }
    else if(textValue.includes("how are you")){
        let replydiv = document.createElement('div');
        replydiv.classList.add('replydiv')
        replydiv.innerHTML = messege1[Math.floor(Math.random() * messege1.length)]
        container.appendChild(replydiv);      
    }
    else if(textValue.includes("hii")){
        let replydiv = document.createElement('div');
        replydiv.classList.add('replydiv')
        replydiv.innerHTML = "hello !"
        container.appendChild(replydiv);
}
else if(textValue.includes("who are you")){
    let replydiv = document.createElement('div');
    replydiv.classList.add('replydiv')
    replydiv.innerHTML = messege2[Math.floor(Math.random() * messege2.length)]
    container.appendChild(replydiv);
}

}
