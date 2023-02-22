let chave = "98f52ce815b64d708569087ff64314b2"

function colocarNaTela(dados) {
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + "%"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src="https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarCidade(cidade){
    
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" +
    chave + 
    "&lang=pt_br" + 
    "&units=metric")

    .then(resposta => resposta.json())
    console.log(dados)

    colocarNaTela(dados)

}



function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}
