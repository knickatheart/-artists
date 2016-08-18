const chai = require('chai'),
	  expect = chai.expect,
	  request = require('request'),
	  constants = require('./constants'),
	  sw = require('selenium-webdriver'),
	  chaiDriver = require('chai-webdriver-promised'),
	  driver = new sw.Builder().withCapabilities(sw.Capabilities.chrome()).build(),
	  By = sw.By,
	  until = sw.until,
	  timeout = 15000,
	  interval = 100;

chai.use(chaiDriver(driver, timeout, interval));

describe('Tests', () => {
	var server;

	before(() => server = require('../app'));

	after(() => server.close());
	
	describe('Server', () => {
		it('server is live', function(done) {
			request(constants['BASE_URL'], (err, res, body) => {
				expect(res.statusCode).to.equal(200);
				done();
			});
		});
	});

	describe('Client', () => {

		describe('Map', function() {
			this.timeout(15000);

			before(() => driver.get(constants['BASE_URL']));

			after((done) => done());

			it('loads a map', function() {
				this.timeout = 15000;
				chai.expect('#my-map').dom.to.be.visible();
			});
		});

		describe('Filters', function() {
			this.timeout(15000);

			it('filters results by age', function() {
				this.timeout = 15000;
				chai.expect('.age').dom.to.be.visible();
				return driver.findElement(By.css('.age')).click();
			});

			it('filters results by rate', function() {
				this.timeout = 15000;
				chai.expect('.rate').dom.to.be.visible();
				return driver.findElement(By.css('.rate')).click();
			});
		});

	});
});