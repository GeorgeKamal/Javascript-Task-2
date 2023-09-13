const random = Math.floor(Math.random() * 4501); // +1 to have 5000 inclusive
const actualNumber = 500 + random;
document.getElementById("actual").innerText = actualNumber; // set the correct number for testing
const inputNode = document.getElementById("predicted");

const listener = () => {
  const statusNode = document.getElementById("status");
  const predictedNumber = parseInt(inputNode.value);
  let text = "Success!!";
  let color = "green";

  if (predictedNumber > actualNumber) {
    text = "Too High! Try lower values";
    color = "red";
  }
  if (predictedNumber < actualNumber) {
    text = "Too Low! Try higher values";
    color = "red";
  }

  statusNode.innerText = text;
  statusNode.style.color = color;
};

inputNode.addEventListener("input", listener);
