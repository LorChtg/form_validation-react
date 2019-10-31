var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = function Title(props) {
  return React.createElement(
    'h1',
    { className: 'title' },
    props.name
  );
};

var RegisterForm = function (_React$Component) {
  _inherits(RegisterForm, _React$Component);

  function RegisterForm(props) {
    _classCallCheck(this, RegisterForm);

    var _this = _possibleConstructorReturn(this, (RegisterForm.__proto__ || Object.getPrototypeOf(RegisterForm)).call(this, props));

    _this.handleChange = function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
      console.log(_this.state);
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      console.log(_this.state);
    };

    _this.state = {
      user_name: '',
      user_email: '',
      user_password: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(RegisterForm, [{
    key: 'render',
    value: function render() {
      var userNamePattern = '[A-Za-z\xC0-\xFF]{1,30}';
      var mailPattern = "^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+[\.]*[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@(gmail\.com)$";
      var passwordPattern = '[\0-\x7F\x80-\xFF]{9,30}$';

      return React.createElement(
        'form',
        { className: 'form', onSubmit: this.handleSubmit, noValidate: true },
        React.createElement(
          'label',
          { htmlFor: 'username', className: 'field' },
          React.createElement(
            'span',
            { className: 'label' },
            'Username'
          ),
          React.createElement('input', { onChange: this.handleChange, type: 'text', id: 'username', name: 'user_name', required: true, pattern: userNamePattern }),
          React.createElement('span', { className: 'error', 'aria-live': 'polite' })
        ),
        React.createElement(
          'label',
          { htmlFor: 'mail', className: 'field' },
          React.createElement(
            'span',
            { className: 'label' },
            'Email address'
          ),
          React.createElement('input', { onChange: this.handleChange, type: 'email', id: 'email', name: 'user_email', required: true, pattern: mailPattern }),
          React.createElement('span', { className: 'error', 'aria-live': 'polite' })
        ),
        React.createElement(
          'label',
          { htmlFor: 'password', className: 'field' },
          React.createElement(
            'span',
            { className: 'label' },
            'Password'
          ),
          React.createElement('input', { onChange: this.handleChange, type: 'text', id: 'password', name: 'user_password', required: true, pattern: passwordPattern }),
          React.createElement('span', { className: 'error', 'aria-live': 'polite' })
        ),
        React.createElement(
          'button',
          null,
          'Submit'
        )
      );
    }
  }]);

  return RegisterForm;
}(React.Component);

var App = function App() {
  return React.createElement(
    'section',
    null,
    React.createElement(Title, { name: 'Simple form with js validation' }),
    React.createElement(RegisterForm, null)
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));