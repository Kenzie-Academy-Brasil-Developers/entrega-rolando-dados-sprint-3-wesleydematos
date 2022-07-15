let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let button = document.querySelector("button")

button.addEventListener("click", function () {
    let typedText = document.getElementById("input").value;
    geraNumeros(typedText)
})

function geraNumeros(numero){
    for(let i = 0; i < numero; i++){
        let dado1 = Math.floor(Math.random() * (6 - 1 + 1) + 1)
        let dado2 = Math.floor(Math.random() * (6 - 1 + 1) + 1)
        let resultadoDados = dado1 + dado2

        incrementaCount(count, resultadoDados)
    }
    listandoDivs()
}

function incrementaCount(array, numeroResDados){
    for(let i = 0; i < array.length; i++){
        if(numeroResDados == i+2){
            array[i]++
        }
    }
}

function listandoDivs(){
    let div1 = document.getElementById("div1")
    let div2 = document.getElementById("div2")
    let div3 = document.getElementById("div3")
    let div4 = document.getElementById("div4")
    let div5 = document.getElementById("div5")
    let div6 = document.getElementById("div6")
    let div7 = document.getElementById("div7")
    let div8 = document.getElementById("div8")
    let div9 = document.getElementById("div9")
    let div10 = document.getElementById("div10")
    let div11 = document.getElementById("div11")

    div1.innerText = `2: ${count[0]} vezes`
    div2.innerText = `3: ${count[1]} vezes`
    div3.innerText = `4: ${count[2]} vezes`
    div4.innerText = `5: ${count[3]} vezes`
    div5.innerText = `6: ${count[4]} vezes`
    div6.innerText = `7: ${count[5]} vezes`
    div7.innerText = `8: ${count[6]} vezes`
    div8.innerText = `9: ${count[7]} vezes`
    div9.innerText = `10: ${count[8]} vezes`
    div10.innerText = `11: ${count[9]} vezes`
    div11.innerText = `12: ${count[10]} vezes`

    let widthDiv1 = count[0] + 60
    let widthDiv2 = count[1] + 60
    let widthDiv3 = count[2] + 60
    let widthDiv4 = count[3] + 60
    let widthDiv5 = count[4] + 60
    let widthDiv6 = count[5] + 60
    let widthDiv7 = count[6] + 60
    let widthDiv8 = count[7] + 60
    let widthDiv9 = count[8] + 60
    let widthDiv10 = count[9] + 60
    let widthDiv11 = count[10] + 60

    div1.style.width = `${widthDiv1}px`
    div2.style.width = `${widthDiv2}px`
    div3.style.width = `${widthDiv3}px`
    div4.style.width = `${widthDiv4}px`
    div5.style.width = `${widthDiv5}px`
    div6.style.width = `${widthDiv6}px`
    div7.style.width = `${widthDiv7}px`
    div8.style.width = `${widthDiv8}px`
    div9.style.width = `${widthDiv9}px`
    div10.style.width = `${widthDiv10}px`
    div11.style.width = `${widthDiv11}px`
}

