const message = `I've cherished all the memories we had, and the sound of this university wouldn't be the same without you.\n Through the hallways of PUP, your laugh, your shadows, and your footsteps linger.\n I vividly remember how these pavement witnessed all of your hardships, perseverance and courage.\n If these bricks could talk, they will praise you for the woman you've become. \n I know we didn't get to catch up often, but let my silent prayer wish you well. And through faith, I thank god for crossing our paths.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}






