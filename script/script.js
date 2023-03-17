let input = document.querySelector("input")
let spans = document.querySelectorAll("span")
input.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        event.preventDefault()
        console.log(input.value)
        input.value=""
    }
})
spans.forEach((span)=>{
    span.addEventListener("click",()=>{
        console.log(span.classList.value)
        input.classList = []
        input.classList.add(span.classList.value)
    })
})