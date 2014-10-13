var RippleClient = require('ripple-client')
var argv = require('optimist')
.demand('account')
.demand('secret')
.demand('destination')
.demand('amount')
.argv
var secrets = {}
secrets[argv.account] = argv.secret
var client = new RippleClient({
	secrets: secrets
})
var tx = {
	Amount: argv.amount.toString(),
	Destination: argv.destination,
	Account: argv.account,
	TransactionType: 'Payment'
}

client.on('open', function() {
	client.submit(tx, function(err, hash) {
		if (err) return console.error(err)
		console.log(hash)
		process.exit()
	})
})
