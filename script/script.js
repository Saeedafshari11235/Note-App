let input = document.querySelector("input")
input.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        event.preventDefault()
        console.log(input.value)
        input.value=""
    }
})