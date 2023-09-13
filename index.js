const random = Math.floor(Math.random() * 4501);
const actualNumber = 500 + random;
document.getElementById("actual").innerText = actualNumber;
const inputNode = document.getElementById("predicted");

const listener = () => {
  const statusNode = document.getElementById("status");
  const predictedNumber = parseInt(inputNode.value);
  let text = "Success!!";
  let color = "green";

  if (isNaN(predictedNumber)) {
    text = "Enter a valid number";
    color = "red";
  }
  if (predictedNumber < 500 || predictedNumber > 5000) {
    text = "Enter a valid Range (500-5000)";
    color = "red";
  } else {
    if (predictedNumber > actualNumber) {
      text = "Too High! Try lower values";
      color = "red";
    }
    if (predictedNumber < actualNumber) {
      text = "Too Low! Try higher values";
      color = "red";
    }
  }

  statusNode.innerText = text;
  statusNode.style.color = color;
};

inputNode.addEventListener("input", listener);
