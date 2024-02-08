// Obtendo o texto criptografado do armazenamento local do navegador
var textoCriptografado = localStorage.getItem("textoCriptografado");

// Exibindo o texto criptografado na página de resultado
document.getElementById("outputText").textContent = textoCriptografado;

// Limpando o texto criptografado do armazenamento local do navegador
localStorage.removeItem("textoCriptografado");
// Para copiar para a area transferencia

function copiarTexto() {
    var campoOrigem = document.getElementById("outputText");
    var texto = campoOrigem.textContent;

    navigator.clipboard.writeText(texto)
        .then(function () {

            campoOrigem.textContent = ""; // limpar o campo de origem
            // alert("Texto copiado para a área de transferência!");
        })

        .catch(function (error) {
            console.error("Erro ao copiar o texto: ", error);
        });
}

function colarTexto() {
    navigator.clipboard.readText()
        .then(function (texto) {
            var campoDestino = document.getElementById("campoDestino");
            campoDestino.textContent = texto;
            // alert("Texto colado com sucesso!");

            var botaoColar = document.getElementById("botaoColar");
            botaoColar.remove(); // remover o botão após ser clicado

        })

        .catch(function (error) {
            console.error("Erro ao colar o texto: ", error);
        });
}
// descriptografando
function descriptografarTexto() {
    var campoDestino = document.getElementById("campoDestino");
    var textoCriptografado = campoDestino.value;

    var textoDescriptografado = descriptografar(textoCriptografado);

    var elementoTextoDescriptografado = document.getElementById("textoDescriptografado");
    elementoTextoDescriptografado.innerText = textoDescriptografado;

    campoDestino.value = ""; // Limpar o campo de destino

}

function descriptografar(textoCriptografado) {
    var outputText = "";

    for (var i = 0; i < textoCriptografado.length; i++) {
        var char = textoCriptografado.charAt(i);

        switch (char) {
            case "a":
                if (textoCriptografado.charAt(i + 1) === "i") {
                    outputText += "a";
                    i++;
                } else {
                    outputText += char;
                }
                break;
            case "e":
                if (textoCriptografado.substr(i, 5) === "enter") {
                    outputText += "e";
                    i += 4;
                } else {
                    outputText += char;
                }
                break;
            case "i":
                if (textoCriptografado.substr(i, 4) === "imes") {
                    outputText += "i";
                    i += 3;
                } else {
                    outputText += char;
                }
                break;
            case "o":
                if (textoCriptografado.substr(i, 4) === "ober") {
                    outputText += "o";
                    i += 3;
                } else {
                    outputText += char;
                }
                break;
            case "u":
                if (textoCriptografado.substr(i, 4) === "ufat") {
                    outputText += "u";
                    i += 3;
                } else {
                    outputText += char;
                }
                break;
            default:
                outputText += char;
        }
    }

    return outputText;

}