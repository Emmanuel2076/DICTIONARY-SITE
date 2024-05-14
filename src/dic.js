function wordinput() {
  let inputElement = document.querySelector("input").value;
  console.log(inputElement);
  let MyResult
   = document.querySelector(".description").innerHTML;

  // if conditions

  if (inputElement == "") {
    alert("please input words");
    document.location.reload();
  } else if (inputElement == Number(inputElement)) {
    alert("please input words");
    document.location.reload();
  } else if (inputElement == String(inputElement)) {
    alert("Searching for word........");
  } else {
    alert("please input words");
    document.location.reload();
  }

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputElement}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let MyResult
       = (document.querySelector(
        ".description"
      ).innerHTML = `  <div 

      <div class="hero">
      <p class="WORD">${inputElement.toLowerCase()}</p>
      </div>
      <div class="hero">
      <i><p class="symbol">${data[0].phonetics[1].text}</p></i>
      <i><p class="symbol  part">/${data[0].meanings[0].partOfSpeech}/</p></i>
      </div>
      
      <p class="meaning">
      ${data[0].meanings[1].definitions[0].definition}
      </p>
      </div> 
`);
    })
    .catch(() => {
      let MyResult= document.querySelector(".description").innerHTML = `<h2 class="error"> we couldn't find definitions for the word.</h2>`;
      console.log(MyResult.innerHTML);
      console.log('Oh noooo!!');
    });
}
