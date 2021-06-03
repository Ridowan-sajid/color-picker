let color=['yellow','purple','green','blue','red','pink','orange'];
const btn=document.querySelector('.btn');
const Background=document.querySelector('.body');
const colorName=document.querySelector('.main .heading-4');

btn.addEventListener('click',()=>{
    let randomNumber=Math.floor(Math.random()*color.length);
    Background.style.backgroundColor=color[randomNumber];
    colorName.textContent=`color:${color[randomNumber]}`
});
