function generatePaymentLink() {
    var totalAmount = document.getElementById("resultContainer");
    if (totalAmount){
        var options = {
            "key": "rzp_live_vOhX6O54BcIx6X",
            "amount": 700,
            "currency": "INR",
            "name": "Printer Shop IITM",
            "description": "payment for printouts",
            "handler": function (response){
                console.log("payment successful:", response);
            },
            "prefill": {
                "email": "customer@example.com" // Pre-fill customer email
            },
            "notes": {
                "address": "your address"
            },
            "theme": {
                "color": "F37254"
            }

        };

        var rzp = new Razorpay(options);
        rzp.open();     
    }
    else{
        console.log("An Error occured, please try again");
    }
}
