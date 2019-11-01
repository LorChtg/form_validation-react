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

    _this.handleValidation = function (fieldName, fieldValue) {
      var userNamePattern = new RegExp(/^[A-Za-z\u00C0-\u00FF]{1,30}$/, '');
      var mailPattern = new RegExp(/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+[\.]*[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@(gmail\.com)$/, '');
      var passwordPattern = new RegExp(/^(?=(?:[\u0000-\u007F\u0080-\u00FF]*[A-Z]){1})(?=(?:[\u0000-\u007F\u0080-\u00FF]*[a-z])+)(?=([\u0000-\u007F\u0080-\u00FF]*\d)+)(?=([\u0000-\u007F\u0080-\u00FF]*[\u0000-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007F\u0080-\u00FF])+)[\u0000-\u007F\u0080-\u00FF]{9,30}$/, '');
      switch (fieldName) {
        case 'user_name':
          _this.state.name_valid = userNamePattern.test(fieldValue);
          userNamePattern.test(fieldValue) ? _this.state.name_error = '' : _this.state.name_error = 'please, enter a username long of 1 to 30 letters';
          break;
        case 'user_email':
          _this.state.email_valid = mailPattern.test(fieldValue);
          mailPattern.test(fieldValue) ? _this.state.email_error = '' : _this.state.email_error = 'please, enter a valid gmail address';
          break;
        case 'user_password':
          _this.state.password_valid = passwordPattern.test(fieldValue);
          passwordPattern.test(fieldValue) ? _this.state.password_error = '' : _this.state.password_error = 'please, enter a valid password';
          break;
        default:
          break;
      }
    };

    _this.handleChange = function (e) {
      var name = e.target.name;
      var value = e.target.value;
      _this.setState(_defineProperty({}, name, value));
      _this.handleValidation(name, value);
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      _this.state.name_valid && _this.state.email_valid && _this.state.password_valid ? _this.state.form_valid = true : _this.state.form_valid = false;
      console.log(_this.state);
    };

    _this.state = {
      user_name: '',
      name_valid: 'false',
      name_error: '',
      user_email: '',
      email_valid: 'false',
      email_error: '',
      user_password: '',
      password_valid: 'false',
      password_error: '',
      form_valid: 'false'
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(RegisterForm, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

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
          React.createElement('input', { onChange: function onChange(e) {
              return _this2.handleChange(e);
            }, type: 'text', id: 'username', name: 'user_name' }),
          React.createElement(
            'span',
            { className: 'error', 'aria-live': 'polite' },
            this.state.name_error
          )
        ),
        React.createElement(
          'label',
          { htmlFor: 'mail', className: 'field' },
          React.createElement(
            'span',
            { className: 'label' },
            'Email address'
          ),
          React.createElement('input', { onChange: function onChange(e) {
              return _this2.handleChange(e);
            }, type: 'email', id: 'email', name: 'user_email' }),
          React.createElement(
            'span',
            { className: 'error', 'aria-live': 'polite' },
            this.state.email_error
          )
        ),
        React.createElement(
          'label',
          { htmlFor: 'password', className: 'field' },
          React.createElement(
            'span',
            { className: 'label' },
            'Password'
          ),
          React.createElement('input', { onChange: function onChange(e) {
              return _this2.handleChange(e);
            }, type: 'password', id: 'password', name: 'user_password' }),
          React.createElement(
            'span',
            { className: 'error', 'aria-live': 'polite' },
            this.state.password_error
          )
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