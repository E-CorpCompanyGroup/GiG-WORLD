SPLASHSCREEN=()=>{
    fetch(SPLASHSCREENLINK)
    .then((res)=>res.text())
    .then((data)=>{
        DIV.innerHTML=data
        setTimeout(() => {
            HOME()  
        }, 2000);
    })
    .catch((error)=>console.log(error))
}
