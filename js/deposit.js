// Deposti
//step - 1
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step- 2
   const depositField = document.getElementById('input-deposit');
   const newDepositAmountString = depositField.value;
   const newDepositAmount =parseFloat(newDepositAmountString);

   //step-3 get the curent deposit total
   //for non-input (element other than input, textarea) use innerText to get the text.
   const depositTotalElement = document.getElementById('deposit-total');
   const previousDepositTotalString = depositTotalElement.innerText;
   const previousDepositTotal = parseFloat(previousDepositTotalString);

   //step-4
   const currentDepositTotal = previousDepositTotal + newDepositAmount;
   depositTotalElement.innerText = currentDepositTotal;
   
   // step-5: get ballance current total

   const balanceTotalElement =document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);

   // step -6 : calculate current total

   const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
//    set the balance total
   balanceTotalElement.innerText = currentBalanceTotal;


   depositField.value = '';
})