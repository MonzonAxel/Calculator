const buttons = document.querySelectorAll(".buttons")
const button = document.querySelector(".button")
const screen = document.querySelector(".screen")

buttons.forEach(element =>{
    element.addEventListener("click", (e) =>{
        const current = e.target.attributes.data.textContent

        if(current === "C") return screen.textContent = "0"

        if(current === "←"){
            if(screen.textContent.length === 1 || screen.textContent === "¡Error!"){
                return screen.textContent = "0"
            }
            return screen.textContent = screen.textContent.slice(0,-1);
        }

        if(current === "="){
            try{
                screen.textContent = eval(screen.textContent)
            } catch {
                screen.textContent = "¡Error!"
            } 
            return
        }

        if(screen.textContent === "0" || screen.textContent === "¡Error!"){
        screen.textContent = current
        }else{
            screen.textContent = screen.textContent + current
        }

    })
})