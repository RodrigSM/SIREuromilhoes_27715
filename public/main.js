document.addEventListener("DOMContentLoaded", (e) => {
  button = document.getElementById("genBtn");

  button.addEventListener("click", (e) => {
    //alert("You Clicked Me");
    genNewBet();
    //genJSONBet();
  });

  // button.addEventListener("click", function (e) {
  //   console.log("same event, a nother handle");
  // });

  // button.addEventListener("click", addtext);
});

function genRandomNumbers(n, min, max) {
  let numeros = [];

  // let setOfNumbers = new Set();
  // while (setOfNumbers.size < n) {
  //   newNumber = Math.floor(Math.random() * (max - min) + min);
  //   setOfNumbers.add(newNumber);
  // }

  // return (...setOfNumbers).sort((a, b) => a - b);

  while (numeros.length < n) {
    let numero = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!numeros.includes(numero)) {
      numeros.push(numero);
    }
  }

  return numeros;
}

function genJSONBet() {
  numbers = genRandomNumbers(5, 1, 50);
  stars = genRandomNumbers(2, 1, 12);

  let newBet = {
    timestamp: new Date(),
    numbers: numbers,
    stars: stars,
  };

  console.log(newBet);

  JSONBet = JSON.stringify(newBet);
  console.log(JSONBet);

  return JSONBet;
}

async function genNewBet() {
  //numbers = genRandomNumbers(5, 1, 50);
  //stars = genRandomNumbers(2, 1, 12);

  try {
    let JSONBet;
    let bet;
    await fetch("http://localhost:3000/bets/getBets")
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        JSONBet = data;
      })
      .catch((error) => {
        console.error("Erro ao buscar dados do servidor:", error);
      });

    //let JSONBet1 = genJSONBet();
    // let bet = JSON.parse(JSONBet);
    console.log(JSONBet);
    bet = JSON.parse(JSONBet);

    console.log(bet);

    theOlNumbers = document.getElementById("olMain");
    theOlNumbers.innerHTML = "";

    theOlStars = document.getElementById("olStars");
    theOlStars.innerHTML = "";

    bet.numbers.forEach((number) => {
      newLi = document.createElement("li");
      newLi.innerHTML = number;
      theOlNumbers.appendChild(newLi);
    });

    bet.stars.forEach((star) => {
      newlis = document.createElement("li");
      newlis.innerHTML = star;
      theOlStars.appendChild(newlis);
    });

    // const response = await fetch("http://localhost:3000/bets/adicionarBet", {
    //   method: "POST",

    //   body: "boas", // Converte o objeto JavaScript para JSON
    // });

    // const result = await response.json();
    // console.log("Resposta do servidor:", result);
  } catch {}

  //fazer atualizar o li para os numeros e para as stars
}

// function addtext() {
//   listofnumbers = document.getElementById("olMain");
//   listofnumbers.innerHTML = "";

//   newli = document.createElement("li");
//   newli.innerText = "99";

//   listofnumbers.appendChild(newli);
// }

/////
// Codigo abaixo foi feito em casa nao na aula
//////

// function gerarNumerosAleatorios(qtdNumeros, min, max) {
//   let numeros = [];
//   while (numeros.length < qtdNumeros) {
//     let numero = Math.floor(Math.random() * (max - min + 1)) + min;
//     if (!numeros.includes(numero)) {
//       numeros.push(numero);
//     }
//   }
//   return numeros;
// }

// function gerarChaveEuroMilhoes() {
//   const numerosPrincipais = gerarNumerosAleatorios(5, 1, 50);

//   const estrelas = gerarNumerosAleatorios(2, 1, 12);

//   numerosPrincipais.sort((a, b) => a - b);
//   estrelas.sort((a, b) => a - b);

//   return {
//     numerosPrincipais,
//     estrelas,
//   };
// }

// function atualizarUI(chave) {
//   const olMain = document.getElementById("olMain");
//   const olStars = document.getElementById("olStars");
//   const allKeysDiv = document.getElementById("allKeys");

//   olMain.innerHTML = "";
//   olStars.innerHTML = "";

//   chave.numerosPrincipais.forEach((numero) => {
//     const li = document.createElement("li");
//     li.textContent = numero;
//     olMain.appendChild(li);
//   });

//   chave.estrelas.forEach((estrela) => {
//     const li = document.createElement("li");
//     li.textContent = estrela;
//     olStars.appendChild(li);
//   });

//   const chaveDiv = document.createElement("div");
//   chaveDiv.classList.add("chave");
//   chaveDiv.textContent = `Números: ${chave.numerosPrincipais.join(
//     ", "
//   )} | Estrelas: ${chave.estrelas.join(", ")}`;

//   allKeysDiv.appendChild(chaveDiv);
// }

// document.getElementById("genBtn").addEventListener("click", () => {
//   const chave = gerarChaveEuroMilhoes();
//   atualizarUI(chave);
// });

//Math.random() 0..1;
//Math.floor() turn a real number into an integer

//Arrays
//indexOf() to check if an object exists in the array
