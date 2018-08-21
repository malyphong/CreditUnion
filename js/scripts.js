$(document).ready(function() {
  $("form.newAccount").submit(function(event) {
    event.preventDefault();

    var inputName = $("input#nameInput").val();
    var initialDeposit = parseInt($("input#depositInput").val());

    $("form.depositAndWithdraw").submit(function(event) {
      event.preventDefault();

      var inputDeposit = parseInt($("input#depositAmount").val());
      var inputWithdrawal = parseInt($("input#withdrawalAmount").val());
    })
  });

});
