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
      ).innerHTML = `  <div class="description" class="px-4 py-5 my-5 text-center">
      <div class="px-4 pt-5 my-5 text-center border-bottom">
        <h1 class="display-4 fw-bold text-body-emphasis">${inputElement.toLowerCase()}</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4"> ${data[0].meanings[1].definitions[0].definition}</p>
        </div>
`);
    })
    .catch(() => {
      let MyResult= document.querySelector(".description").innerHTML = `<h2 class="error"> we couldn't find definitions for the word.</h2>`;
      console.log(MyResult.innerHTML);
      console.log('Oh noooo!!');
    });
}
