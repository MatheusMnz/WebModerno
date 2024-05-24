const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const getChinese = (func) => func.pais === "China";
const woman = (func) => func.genero === "F";
const lessSalary = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual;
};

axios.get(url).then((response) => {
  const funcionarios = response.data;
  //console.log(funcionarios);

  const funcFilter = funcionarios
    .filter(getChinese)
    .filter(woman)
    .reduce(lessSalary);

  console.log(funcFilter);
});
