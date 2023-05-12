
var arry = ['yellow', 'Green', 'orange', 'Red', 'Pink', 'White', 'Brown', 'Blue', 'Black', 'skyblue', 'Grey', 'Aqua'];
var colorBox = document.getElementById("color-box"); 
var colorBtn = document.getElementById("button"); 
var colorName = document.getElementById("Selected-color");

colorBtn.addEventListener("click", checkButton);

function checkButton() { 
  var num = Math.floor(Math.random() * arry.length); 
  var selectedColor = arry[num];
  colorBox.style.backgroundColor = selectedColor;
  colorName.style.color = selectedColor;
  colorName.textContent = selectedColor;
}

