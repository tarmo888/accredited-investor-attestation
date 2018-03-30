/*jslint node: true */
"use strict";
exports.port = null;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = false;
exports.bLight = false;

exports.storage = 'sqlite';

// TOR is recommended.  If you don't run TOR, please comment the next two lines
//exports.socksHost = '127.0.0.1';
//exports.socksPort = 9050;

exports.hub = 'byteball.org/bb';
exports.deviceName = 'Investors attestation bot';
exports.permanent_pairing_secret = '0000';
exports.control_addresses = [''];
exports.payout_address = 'WHERE THE MONEY CAN BE SENT TO';

exports.bIgnoreUnpairRequests = true;
exports.bSingleAddress = false;
exports.bStaticChangeAddress = true;
exports.KEYS_FILENAME = 'keys.json';

// email
exports.useSmtp = false;
exports.admin_email = '';
exports.from_email = '';

// witnessing
exports.bRunWitness = false;
exports.THRESHOLD_DISTANCE = 20;
exports.MIN_AVAILABLE_WITNESSINGS = 100;

// verifyinvestor.com service
exports.verifyInvestorUrl = 'https://verifyinvestor.com';
exports.verifyInvestorApiToken = '';
exports.verifyInvestorUserAuthorizationToken = '';

// finance
exports.priceInUSD = 8;
exports.rewardInUSD = 20;
exports.referralRewardInUSD = 20;

exports.PRICE_TIMEOUT = 3600; // in seconds

exports.bRequireRealName = true;
exports.arrRealNameAttestors = ['I2ADHGP4HL6J37NQAD73J7E5SKFIXJOT'];
exports.objMapRequiredVIPersonalDataWithProfile = { // match verify investor data with private profile data
	'first_name': {
		name: 'first name',
		path: ['first_name',0]
	},
	'last_name': {
		name: 'last name',
		path: ['last_name',0]
	}
};
exports.arrRequiredPersonalData = Object.keys(exports.objMapRequiredVIPersonalDataWithProfile);

// server
exports.webPort = 8080;

// set this in conf.json
exports.salt = null;