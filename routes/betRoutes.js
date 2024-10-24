const express = require("express");
const router = express.Router();
// Definir rota GET que estava no server.js
// router.get("/", (req, res) => {
//   res.send("Hello World from routes!");
// });

function genRandomNumbers(n, min, max) {
  let numeros = [];
  while (numeros.length < n) {
    let numero = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!numeros.includes(numero)) {
      numeros.push(numero);
    }
  }

  return numeros;
}

router.get("/getBets", (req, res) => {
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

  //return JSONBet;
  res.send(JSONBet);
});

router.post("/adicionarBet", (req, res) => {
  const betData = req.body;
  //let JSON1 = JSON.parse(betData);
  console.log(req.body + "etste");
  //   let numbers = [];
  //   //const JSON1 =
  //   numbers.push(betData.numbers);

  //console.log(numbers);

  res.status(201).json({
    message: "Aposta recebida com sucesso!",
    bet: betData, // Retornar os dados da aposta recebidos
  });
});

module.exports = router;
