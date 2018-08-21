// business logic
function depositedBalance(name, deposit,initialDeposit) {
  this.depositAmount = deposit;
  this.initialAmount = initialDeposit;
  this.inputName = name;
}
 depositedBalance.prototype.outcomeBalance = function() {
   return this.inputName + "made a deposit of" + this.deposit;
 }

var deposit = function(addingMoney) {
  if (inputDeposit > 0) {
    var total = initialDeposit + inputDeposit;

    return total;
  } else if (inputWithdrawal > 0) {
    var total = initialDeposit - inputWithdrawal;

    return total;
  }
};

// user interface logic
$(document).ready(function() {
  $("form.newAccount").submit(function(event) {
    event.preventDefault();
    $(".newBalance").show();

    var inputName = $("input#nameInput").val();
    initialDeposit = parseFloat($("input#depositInput").val());

    $(".balanceAmount").text(initialDeposit);

    console.log(inputName, initialDeposit);

    $("form.depositAndWithdraw").submit(function(event) {
      event.preventDefault();

      inputDeposit = parseFloat($("input#depositAmount").val());
      console.log(inputDeposit);
      inputWithdrawal = parseFloat($("input#withdrawalAmount").val());

      var result = deposit(initialDeposit);
      console.log(result);

      $(".balanceAmount").text(result);
    })


  });
});
