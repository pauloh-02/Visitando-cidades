const nome = prompt("Qual é o seu nome?")

let localnasc, cidadeVisitada, cidadesVisitadas, resposta, contagem
contagem = 0
cidadesVisitadas = ""

localnasc = prompt("Em que cidade você nasceu?")
cidadesVisitadas = localnasc
resposta = prompt("Você já viajou para alguma cidade diferente? (S/N)")

while(resposta === "S"){
    cidadeVisitada = prompt("Qual cidade você já visitou?")
    resposta = prompt("Já visitou mais alguma? (S/N)")
    cidadesVisitadas = cidadesVisitadas + ", " + cidadeVisitada
    contagem += 1
}
alert(
    "Cidades visitadas: " + cidadesVisitadas +
    "\nNúmero de cidades visitadas: " + contagem
)
