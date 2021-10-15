var initialPrice = document.querySelector("#initial-price");
var quantityStocks = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var btnCheck = document.querySelector("#btn-check");
var outputDiv = document.querySelector("#output-div");

function clickHandler() {
  hideMessage();
  if(Number(initialPrice.value)>0 && Number(initialPrice.value)!==""){
    if(Number(quantityStocks.value)>0 && Number(quantityStocks.value)!==""){
      if(Number(currentPrice.value)>0 && Number(currentPrice.value)!==""){
        calculateProfitAndLoss(Number(currentPrice.value),Number(initialPrice.value),Number(quantityStocks.value));
      } else {
        alert("Please check your current price");
      }
    } else {
      alert("Please check the quantity of stocks");
    }
  } else {
    alert("Please check your initial price");
  }
}

function hideMessage() {
  outputDiv.style.display = "none";
}

function showMessage(msg) {
  outputDiv.style.display = "block";
  outputDiv.innerText = msg;
}

function calculateProfitAndLoss(currentP, initialP,quantity){
  var profit = (currentP-initialP)*quantity;
  var pf = profit.toFixed(2);
  var profitPercent = (profit/initialP)*100;
  var pfPer = profitPercent.toFixed(2);
  var loss = (initialP-currentP)*quantity;
  var ls = loss.toFixed(2);
  var lossPercent = (loss/initialP)*100;
  var lsPer = lossPercent.toFixed(2);

  if(currentP>initialP){
    outputDiv.style.color = 'green';
    showMessage(`Hey, the profit is ${pf} and the percent is ${pfPer}`);
  } else if(currentP===initialP){
    outputDiv.style.color = 'black';
    showMessage("No pain no gain and no gain no pain");
  } else{
    outputDiv.style.color = 'red';
    showMessage(`Hey, the loss is ${ls} and the percent is ${lsPer}`);
  }
}

btnCheck.addEventListener("click",clickHandler);