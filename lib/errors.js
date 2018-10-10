'use strict';

var spec = {
  name: 'PaymentProtocol',
  message: 'Internal Error on fcash-payment-protocol Module: {0}'
};

module.exports = require('fcash-lib').errors.extend(spec);
