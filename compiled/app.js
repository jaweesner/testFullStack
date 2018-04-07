"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			todos: []
		};
		return _this;
	}

	_createClass(App, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this2 = this;

			$.get("http://127.0.0.1:8080/todos", function (res) {
				_this2.setState({ todos: JSON.parse(res) });
			});
		}
	}, {
		key: "addHandler",
		value: function addHandler(e) {}
	}, {
		key: "clickHandler",
		value: function clickHandler(e) {}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				"To Do List",
				React.createElement(AddItem, { addHandler: this.addHandler.bind(this) }),
				React.createElement(List, { todos: this.todos, clickHandler: this.addHandler.bind(this) })
			);
		}
	}]);

	return App;
}(React.Component);

var AddItem = function AddItem(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"input",
			{ type: "text" },
			" "
		),
		React.createElement(
			"button",
			{ type: "submit" },
			" Add "
		)
	);
};

var List = function List(props) {
	return React.createElement(
		"div",
		null,
		props.todos.map(function (todo) {
			return React.createElement(Item, { todo: todo, onClick: props.clickHandler });
		})
	);
};

var Item = function Item(props) {
	return React.createElement(
		"div",
		{ className: props.todo.priority + ", " + props.todo.done, onClick: function onClick() {
				return props.onClick(props.todo.id);
			} },
		props.todo.event,
		props.todo.due
	);
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=app.js.map