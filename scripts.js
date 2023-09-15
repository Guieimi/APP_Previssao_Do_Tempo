const key = "b118aa2c740030cfc7ab524484e63929"


function colocarNaTela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarCidade(cidade) {
    let dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br`).then( resposta => resposta.json())
     console.log(dados)
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


   // "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave +"lang=pt_br" +"&units=metric").then(resposta => resposta.json())

    colocarNaTela(dados)
}


function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}

