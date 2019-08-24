const axios = require('axios');

function tesBayar() {
    axios.post('http://localhost:4000/rtes/bayar', {
            "BILLINGCODE": "1111"
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
}

tesBayar();
tesBayar();