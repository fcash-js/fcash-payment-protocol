Fcash Payment Protocol
=======

[![NPM Package](https://img.shields.io/npm/v/fcash-payment-protocol.svg?style=flat-square)](https://www.npmjs.org/package/fcash-payment-protocol)
[![Build Status](https://img.shields.io/travis/fcash-project/fcash-payment-protocol.svg?branch=master&style=flat-square)](https://travis-ci.org/fcash-project/fcash-payment-protocol)
[![Coverage Status](https://img.shields.io/coveralls/fcash-project/fcash-payment-protocol.svg?style=flat-square)](https://coveralls.io/r/fcash-project/fcash-payment-protocol)

A module for [fcash](https://github.com/fcash-project/fcash) that implements [Payment Protocol](https://github.com/bitcoin/bips/blob/master/bip-0070.mediawiki) and other related BIPs.

## Getting Started

This library is distributed in both the npm and bower packaging systems.

```sh
npm install fcash-lib
npm install fcash-payment-protocol
```

```sh
bower install fcash-lib
bower install fcash-payment-protocol
```

There are many examples of how to use it on the developer guide [section for payment protocol](https://fcash.io/api/paypro). For example, the following code would verify a payment request:

```javascript
var PaymentProtocol = require('fcash-payment-protocol');

var body = PaymentProtocol.PaymentRequest.decode(rawbody);
var request = new PaymentProtocol().makePaymentRequest(body);

var version = pr.get('payment_details_version');
var pki_type = pr.get('pki_type');
var pki_data = pr.get('pki_data');
var serializedDetails = pr.get('serialized_payment_details');
var signature = pr.get('signature');

// Verify the signature
var verified = request.verify();
```

## Contributing

See [CONTRIBUTING.md](https://github.com/fcash-project/fcash-core/blob/master/CONTRIBUTING.md) on the main fcash repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/fcash-project/fcash-core/blob/master/LICENSE).

Copyright 2013-2015 Fcash, Inc. Fcash is a trademark maintained by Fcash, Inc.
