const bod=document.querySelector('body')
const button=document.querySelectorAll('.button')
button.forEach((butt)=>{
  butt.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target.id);
    bod.style.backgroundColor=e.target.id;

  })
})
