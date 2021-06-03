let color=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const btn=document.querySelector('.btn');
const Background=document.querySelector('.body');
const colorName=document.querySelector('.main .heading-4');

btn.addEventListener('click',()=>{

    
    let hex='#';
    for(let i=0;i<6;i++){
     let randomNumber=Math.floor(Math.random()*color.length);
      hex+=`${color[randomNumber]}`;
    }
    Background.style.backgroundColor=hex;
    colorName.textContent=`color:${hex}`
});
