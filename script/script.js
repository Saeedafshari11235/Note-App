let input = document.querySelector("input")
let spans = document.querySelectorAll("span")
let container = document.querySelector(".container")
let note = document.createElement("div")
input.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        event.preventDefault()
        console.log(input.value)
        note.innerHTML = input.value
        container.append(note)

        //////////////////////////////////
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