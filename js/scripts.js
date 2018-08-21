// business logic
function Total(inputDeposit, initialDeposit, inputWithdrawal) {
  this.depositAmount = inputDeposit;
  this.initialAmount = initialDeposit;
  this.withdrawalAmount = inputWithdrawal;

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
function resetFields() {
  $("input#nameInput").val("");
  $("input#depositInput").val("");
  $("input#depositAmount").val("");
  $("input#withdrawalAmount").val("");
}


$(document).ready(function() {
  $("form.newAccount").submit(function(event) {
    event.preventDefault();
    $(".newBalance").show();
    $(".depositAndWithdraw").show();

    var inputName = $("input#nameInput").val();
    initialDeposit = parseFloat($("input#depositInput").val());

    $(".balanceAmount").text(initialDeposit);

    $("form.depositAndWithdraw").submit(function(event) {
      event.preventDefault();
      $(".newTransaction").show();

      inputDeposit = parseFloat($("input#depositAmount").val());
      inputWithdrawal = parseFloat($("input#withdrawalAmount").val());

      // var newTotal = new Total(inputDeposit, initialDeposit, inputWithdrawal);


      var result = deposit(initialDeposit);

      $(".balanceAmount").text(result);

      $(".newTransaction").click(function(event) {
        event.preventDefault();
        resetFields()

        initialDeposit = result;

        $(".balanceAmount").text(result);
      })
    })

  });
});
