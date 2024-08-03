document.getElementById("nameInput").addEventListener("input", function () {
  const input = this.value.toLowerCase();
  const heart = document.getElementById("heart");
  const message = document.getElementById("message");

  if (input === "laiba") {
    heart.src = "./Assets/heartunlocked.png";
    heart.style.transform = "scale(1.3)";
    message.style.display = "block";
    message.textContent = "Danish Loves You So Much!";
  } else {
    heart.src = "./Assets/heartlocked.png";
    heart.style.transform = "scale(1)";
    message.style.display = "none";
  }
});
