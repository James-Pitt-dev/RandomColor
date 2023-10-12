
// const btn = document.querySelector('.btn');
// const enter = document.querySelector('#enter');
// const circle = document.querySelector('.circle');
// const btn3 = document.querySelector('.btn3');
//
// btn3.addEventListener('click', () => {
//    btn3.style.backgroundColor = 'red';
// //   start a 3 sec timer
//     setTimeout(() => {
//         btn3.style.backgroundColor = 'blue';
//     } , 3000);
// }, {once: true});
//
// enter.onmouseenter = () => {
//    let r = Math.floor(Math.random() * 255);
//    let g = Math.floor(Math.random() * 255);
//    let b = Math.floor(Math.random() * 255);
//    let newbtn = document.createElement('button');
//    newbtn.innerText = 'NEW';
//    enter.style.backgroundColor = `rgb(${r},${g},${b})`;
//    document.body.appendChild(newbtn);
// }
//
// // Add an event listener to track mouse movement
// document.addEventListener('mousemove', (event) => {
//    const mouseX = event.clientX;
//    const mouseY = event.clientY;
//
//    // Update the circle's position based on mouse coordinates
//    circle.style.left = `${mouseX}px`;
//    circle.style.top = `${mouseY}px`;
// });


const btnColor = document.querySelector('#btnColor');
const rgbPrint = document.querySelector('#rgbPrint');
const bgColor = document.querySelector('body');
const colorDisplay = document.querySelector('.colorDisplay');

    bgColor.style.backgroundColor = `rgb(255,255,255)`;
    rgbPrint.innerText = `RGB: \nrgb(255,255,255)\n
                     Hex: \n#FFFFFF\n
                     Name: \nWhite`

function randomColors(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    // rgbPrint.innerText = `RGB(${r}, ${g}, ${b})`
    bgColor.style.backgroundColor = rgb;
    colorDisplay.style.color = rgb;
    fetchName(rgb);
}

const fetchName = (rgb) => {
    const URL = `https://www.thecolorapi.com/id?rgb=${rgb}`;
        fetch(URL)
            .then(res => res.json())
            .then(data =>
                rgbPrint.innerText =
                    `RGB: \n${data.rgb.value}\n
                     Hex: \n${data.hex.value}\n
                     Name: \n${data.name.value}`)
            .catch(error => console.log(error));
}
btnColor.addEventListener('click', randomColors);

/// https://www.thecolorapi.com/id?rgb=rgb(22,71,171)