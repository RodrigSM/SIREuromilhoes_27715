document.addEventListener("DOMContentLoaded", (e) => {
    button = document.getElementById("genBtn");
  
    button.addEventListener("click", (e) => {
      //alert("You Clicked Me");
    });
  
    button.addEventListener("click", function (e) {
      console.log("same event, a nother handle");
    });
  
    button.addEventListener("click", addtext);
  });
  
  function addtext() {
    listofnumbers = document.getElementById("olMain");
    listofnumbers.innerHTML = "";
  
    newli = document.createElement("li");
    newli.innerText = "99";
  
    listofnumbers.appendChild(newli);
  }


// Math.random() 0..1;
// Math.floor() turn a real into an integer

// arrays
// indexOf() to check if an object exist in the array
