document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOut = getInputFieldValueById("input-cash-out");
    const pinNumber = getInputFieldValueById("input-cash-out-pin");
    // console.log("cash out money", cashOut, pinNumber);
    if(isNaN(cashOut)){
      alert("can't withdraw money");
      return;
    }
    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("account-balance");
      if(cashOut>balance){
        alert("You can't withdraw money");
        return;
      }
      
      console.log("balance here", balance);
      const newBalance = balance - cashOut;
      document.getElementById("account-balance").innerText = newBalance;
      //add to transaction history
      const div = document.createElement("div");
      div.classList.add("bg-yellow-300");
      div.innerHTML = `
      <h4 class="text-2xl font-bold">cash Out</h4>
      <p>${cashOut} withdraw. New Balance ${newBalance}</p>
      `
      document.getElementById("transaction-container").appendChild(div);
    }
    
    
    else {
      alert("No money for you....DGM");
    }
  });
