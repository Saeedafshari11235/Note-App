let input = document.querySelector("input")
let spans = document.querySelectorAll("span")
let container = document.querySelector(".container")
let plus = document.querySelector(".plus")
let erase = document.querySelector(".eraser")

input.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        event.preventDefault()
        adder();
    }
})

plus.addEventListener("click",adder)

erase.addEventListener("click",()=>{
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
})

spans.forEach((span)=>{
    span.addEventListener("click",()=>{
        console.log(span.classList.value)
        input.classList = []
        input.classList.add(span.classList.value)
    })
})
function adder(){
    if(input.value ==="")return
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