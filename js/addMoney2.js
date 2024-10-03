document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById("input-add-money");
    const pinNumber = getInputFieldValueById("input-pin-number");
    // console.log("add money inside addMoney2.js", addMoney, pinNumber);

    if(isNaN(addMoney)){
      alert("can't add money");
      return;
    }

    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("account-balance");
      const newBalance = balance + addMoney;
      //show in the UI
      document.getElementById("account-balance").innerText = newBalance;
      //add to transaction history
      const p = document.createElement("p");
      p.innerText = `added ${addMoney}tk. New Balance: ${newBalance}`;
      // console.log(p);
      //should be a common function
      document.getElementById("transaction-container").appendChild(p);


    } else {
      alert("failed to add money");
    }
  });
