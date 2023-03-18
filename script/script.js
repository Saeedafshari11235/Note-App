let input = document.querySelector("input")
let spans = document.querySelectorAll("span")
let container = document.querySelector(".container")
input.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        event.preventDefault()
        console.log(input.value)
        let note = document.createElement("div")
        note.innerHTML = input.value
        note.classList.add(input.classList.value)
        container.append(note)
        note.addEventListener("click",()=>{
            note.remove()
        })
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