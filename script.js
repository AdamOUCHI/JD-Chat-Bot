function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (message === "") return;

  displayMessage(message, 'user');

  const response = getBotResponse(message);
  if (response) {
    setTimeout(() => displayMessage(response, 'bot'), 300);
  }

  input.value = "";
}

function displayMessage(message, sender) {
  const chatBox = document.getElementById("chatBox");
  const msgDiv = document.createElement("div");
  msgDiv.className = `chat-message ${sender}`;
  msgDiv.textContent = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  input = input.toLowerCase();

  if (typeof faqData === "undefined" || !Array.isArray(faqData)) {
    return "Erreur : la FAQ n'est pas chargée.";
  }

  for (const item of faqData) {
    for (const keyword of item.keywords) {
      if (input.includes(keyword.toLowerCase())) {
        return item.response;
      }
    }
  }

  return "Désolé, je n’ai pas trouvé de réponse à votre question. Cliquez sur « Parler à un humain » pour obtenir de l’aide.";
}