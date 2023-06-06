//FETCH HOME DATA
HOME=()=>{
    fetch('../PAGES/home.txt')
    .then((res)=>res.text())
    .then((data)=>{
        DIV.innerHTML=data
    })
    .catch((error)=>console.log(error))
}