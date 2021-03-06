
const assert = require('assert');
const TestBrowser = require('./utils/TestBrowser.js').TestBrowser;
const TestView = require('./utils/TestView').TestView;

describe('View', function() {

	let view;
	let doc;

	beforeEach(function() {
		let browser = new TestBrowser();
		view = new TestView(browser.window,`<div id="defaultView"></div><div id="otherView" hidden></div>`);
		doc = browser.window.document;
	});

	it('Should show and hide otherView', function() {
		view.show();

		// Check default
		let elem = doc.getElementById('defaultView');
		assert.strictEqual(elem.hidden, false);

		elem = doc.getElementById('otherView');
		assert.strictEqual(elem.hidden, true);

		view.showElement('otherView');
		assert.strictEqual(elem.hidden, false);

		view.hideElement('otherView');
		assert.strictEqual(elem.hidden, true);
	});
});