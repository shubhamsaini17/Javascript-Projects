let text = document.querySelector('#input-box');

const button = document.querySelector('#btn');
const myQR = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
const reset = document.querySelector('#reset');
let QrImage ="" 

button.addEventListener('click',function(){
    QrImage = myQR + text.value;
fetch(`${QrImage}`)
.then((response)=>{
    return response.blob()
})
.then(blob => {
    const imageUrl = URL.createObjectURL(blob);
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    const container = document.getElementById("qr-image");
    container.appendChild(imageElement);

    reset.addEventListener('click',function(){
        document.querySelector('#reset').style.animation= 'rotate 1s infinite';
    setTimeout((text)=>{
        document.querySelector('#input-box').value = "";
        imageElement.remove();
        document.querySelector('#reset').style.animation ="";
    },2000)
})

}).catch(error => console.error(error));

})


