# Project1

## This is a simple js project

[link to project demo](https://bgcolorpicker2004wtythc-fb4e--8080--24eaa195.local-credentialless.webcontainer.io)

[link to code]()

# Solution code

```javascript
const bod=document.querySelector('body')
const button=document.querySelectorAll('.button')
button.forEach((butt)=>{
  butt.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target.id);
    bod.style.backgroundColor=e.target.id;

  })
})

```