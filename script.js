
function curiosidade() {
    document.getElementById("curiosidade").innerText =
        "Patrick Jane já foi um famoso médium de televisão antes de trabalhar como consultor para o CBI!";
}

function resposta1() {
    document.getElementById("resposta").innerText =
        "Correto! 🎉 O inimigo de Patrick Jane é Red John.";
    document.getElementById("resposta").style.color = "green";
}

function resposta2() {
    document.getElementById("resposta").innerText =
        "Ops! Não é Sherlock. A resposta correta é Red John!";
    document.getElementById("resposta").style.color = "red";
}
