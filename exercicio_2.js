/*
    ### Sistema de gastos familiar

    Crie um objeto que possuirá 2 propiedades, ambas do tipo array:
        * receitas: []
        * despesas: []
    
    Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar ums mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.
     
*/

let family = {
  incomes: [2000, 354, 3024.55, 120.25],
  expenses: [3500, 450, 1200, 150.32, 3871],
};

function sum(array) {
  let total = 0;

  for (let value of array) {
    total += value;
  }

  return total;
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes);
  const calculateExoenses = sum(family.expenses);

  const total = calculateIncomes - calculateExoenses;

  const itsOk = total >= 0;

  let balanceText = "negativo";

  if (itsOk) {
    balanceText = "positivo";
  }

  console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`);
}

calculateBalance();
