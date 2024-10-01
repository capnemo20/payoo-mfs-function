document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
   //getInputFieldValueById()
  //  const addMoney = getInputFieldValueById();
  //  console.log("add money value", addMoney);

  const addMoney = getInputFieldValueById("input-add-money");
  const pinNumber = getInputFieldValueById("input-pin-number");
  console.log("add money with parameters", addMoney);
    console.log("Pin number", pinNumber);
  });
