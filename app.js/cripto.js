function criptografar() {
  var inputText = document.getElementById("inputText").value;
  var outputText = "";

  for (var i = 0; i < inputText.length; i++) {
    var char = inputText.charAt(i);

    switch (char) {
      case "a":
        outputText += "ai";
        break;
      case "e":
        outputText += "enter";
        break;
      case "i":
        outputText += "imes";
        break;
      case "o":
        outputText += "ober";
        break;
      case "u":
        outputText += "ufat";
        break;
      default:
        outputText += char;
    }
  }

  // Armazenando o texto criptografado no armazenamento local do navegador
  localStorage.setItem("textoCriptografado", outputText);

  // Redirecionando para a página de resultado
  window.location.href = "cripto.html";
}