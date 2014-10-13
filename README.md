ripple-send
===

Command-lnie utilities for preparing, signing and broadcasting Ripple transactions.

Installation
---

`npm install -g ripple-send`

Usage
---

### prepare

Prepare a transaction for offline signing:

```
ripple-prepare --account gFrom --destination gTo --amount 1000000
```

If the amount is XRP, then specify as drops (multiply by 1 million)

### sign

Sign a prepare transaction:

```
ripple-sign --secret sAccountSecret --tx '{tx:"json"}'
```

### broadcast

Broadcast a signed transaction:

```
echo TRANSACTIONHEX | ripple-broadcast
```

### send a payment

```
ripple-payment --account aAccount --secret sSecret --amount 1234
```

License
---

ISC
