var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

    _this.submit = _this.submit.bind(_this);
    return _this;
  }

  _createClass(RegisterForm, [{
    key: 'submit',
    value: function submit(e) {
      var _refs = this.refs,
          _username = _refs._username,
          _email = _refs._email,
          _password = _refs._password;

      e.preventDefault();
      _username.value = '';
      _email.value = '';
      _password.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      var userNamePattern = '[A-Za-z\xC0-\xFF]{1,30}';
      var mailPattern = "^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+[\.]*[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@(gmail\.com)$";
      var passwordPattern = '^(?=(?:[\0-\x7F\x80-\xFF]*[A-Z]){1})(?=(?:[\0-\x7F\x80-\xFF]*[a-z])+)(?=([\0-\x7F\x80-\xFF]*d)+)(?=([\0-\x7F\x80-\xFF]*[\0-/:-@[-`{-\x7F\x80-\xFF])+)[\0-\x7F\x80-\xFF]{9,30}$';

      return React.createElement(
        'form',
        { className: 'form', onSubmit: this.submit },
        React.createElement(
          'label',
          { 'for': 'username', 'class': 'field' },
          React.createElement(
            'span',
            { 'class': 'label' },
            'Username'
          ),
          React.createElement('input', { ref: '_username', type: 'text', id: 'username', name: 'user_name', required: true, pattern: userNamePattern }),
          React.createElement('span', { 'class': 'error', 'aria-live': 'polite' })
        ),
        React.createElement(
          'label',
          { 'for': 'mail', 'class': 'field' },
          React.createElement(
            'span',
            { 'class': 'label' },
            'Email address'
          ),
          React.createElement('input', { ref: '_email', type: 'email', id: 'email', name: 'user_email', required: true, pattern: mailPattern }),
          React.createElement('span', { 'class': 'error', 'aria-live': 'polite' })
        ),
        React.createElement(
          'label',
          { 'for': 'password', 'class': 'field' },
          React.createElement(
            'span',
            { 'class': 'label' },
            'Password'
          ),
          React.createElement('input', { ref: '_password', type: 'password', id: 'password', name: 'user_password', required: true, pattern: passwordPattern }),
          React.createElement('span', { 'class': 'error', 'aria-live': 'polite' })
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