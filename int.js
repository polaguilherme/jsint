let btn = document.getElementById('button')

btn.addEventListener('click', () => {
 let sort = document.getElementById('sort').value
 if (sort == 0) {
        let modal = document.getElementById('content')
        modal.style.display = "block" 
        let error = document.getElementById('close')
        error.addEventListener('click', () => {
           let modal = document.getElementById('content')
           modal.style.display = "none"
        })
     
 }else{
   let luck = Math.round(Math.random() * sort)
   document.getElementById('luck').innerHTML = luck 
   
   }
});