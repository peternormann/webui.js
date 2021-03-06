/**
 * The mvc module contains the core implementation of mvc architecture.
 *
 * <caption>Class diagram</caption>
 * <img src="mvc/model.png">
 * @module mvc
 */
module.exports = Object.assign(
	require('./App.js'),
	require('./BaseProxy.js'),
	require('./BaseController.js'),
	require('./DetailController.js'),
	require('./ListController.js'),
	require('./CrudProxy.js'),
	require('./CurrentViewState.js'),
	require('./ElementValue.js'),
	require('./Event.js'),
	require('./Observer.js'),
	require('./RestStore.js'),
	require('./Repo.js'),
	require('./Rest.js'),
	require('./Router.js'),
	require('./Subject.js'),
	require('./Store.js'),
	require('./StateMachine.js'),
	require('./StaticProxy.js'),
	require('./Transition.js'),
);
