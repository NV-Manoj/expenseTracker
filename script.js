const formDetails = document.getElementById("expForm");
const addItems = document.getElementById("listOfExpenses");
const totalAmount = document.getElementById("totalAmount");
let finalAmount = 0;

formDetails.addEventListener("submit", function (event) {
  event.preventDefault();

  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (description && category && !isNaN(amount)) {
    let addRow = document.createElement("tr");
    addRow.innerHTML = `<td>${description}</td> <td>${category}</td> <td>${amount}</td>`;
    addItems.appendChild(addRow);

    finalAmount += amount;
    totalAmount.innerHTML = finalAmount;

    document.getElementById("description").value = "";
    document.getElementById("category").value = "";
    document.getElementById("amount").value = "";
  } else {
    alert("Please Ensure That Entered Details Are Correct");
  }
});
