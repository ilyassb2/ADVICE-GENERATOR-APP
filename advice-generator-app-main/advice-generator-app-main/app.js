const adviceId = document.querySelector(".advice-id");
const generatedAdvice = document.querySelector(".advice");
const btnGenerate = document.querySelector(".btn-Generate");
const apiUrl = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  /*Handling an error*/
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  /*Extracting data and saving it to variables */
  const adviceIdText = `Advice #${data.slip.id}`;
  const adviceString = `"${data.slip.advice}"`;

  /*DOM manipulating */
  adviceId.textContent = adviceIdText;
  generatedAdvice.textContent = adviceString;
}

btnGenerate.addEventListener("click", function () {
  getAdvice();
});
