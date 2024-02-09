function calculateAmount(){
    console.log("func working");
    const bwpp = 0.5;
    const cpp = 1;
    var dups = document.getElementById("duplicates").value;
    var low = document.getElementById("low_range").value;
    var high = document.getElementById("upper_range").value;
    var colorOption = document.getElementById("color").value;

    if (colorOption === "colored"){
        var totalAmount = (high - low + 1)*cpp
    }
    else if (colorOption === "bw"){
        var totalAmount = (high - low + 1)*bwpp;
    }

    var resultContainer = document.getElementById('resultContainer');
    var amount = '<p><u>Total Amount</u>: $' + '<b>' + totalAmount + '</b>' + '</p>';
    resultContainer.innerHTML = amount;
} 