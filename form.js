document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var amount = document.getElementById('amount').value;
    
    console.log('Payment Details:', {name, email, amount});
    alert('Payment for ' + amount + ' USD submitted for ' + name + ' (' + email + ').');
});