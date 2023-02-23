//Step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step-2: get the deposit amount from the deposit field
    const inputDeposit=document.getElementById('input-deposit');
    const newDepositAmount=inputDeposit.value;
    //step-3: get the current deposit total
    const depositTotalElement=document.getElementById('deposit-total');
    const previousDepositTotal=depositTotalElement.innerText;
    const currentDepositTotal=parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);
    depositTotalElement.innerText=currentDepositTotal;

    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotal=balanceTotalElement.innerText;
    const currentBalanceTotal=parseFloat(previousBalanceTotal)+parseFloat(newDepositAmount);
    balanceTotalElement.innerText=currentBalanceTotal;

    //step-4: clear the input box
    inputDeposit.value=''
})