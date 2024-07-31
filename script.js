const btns=document.querySelectorAll(".button");
const body=document.querySelector("body");

btns.forEach(function(button)  {
    console.log(button)
    button.addEventListener('click',function(e){
          console.log(e);
          console.log(e.target);
          if(e.target.id=='grey'){
            body.style.backgroundColor=e.target.id;
          }
          if(e.target.id=='orange'){
            body.style.backgroundColor=e.target.id;
          }
          if(e.target.id=='green'){
            body.style.backgroundColor=e.target.id;
          }
          if(e.target.id=='brown'){
            body.style.backgroundColor=e.target.id;
          }
    })
});