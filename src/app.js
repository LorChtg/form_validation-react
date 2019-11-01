const Title = (props) => {
  return (
    <h1 className="title">{props.name}</h1>
  )
}

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_name: '',
      name_valid: 'false',
      name_error: '',
      user_email: '',
      email_valid: 'false',
      email_error: '',
      user_password: '',
      password_valid: 'false',
      password_error: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleValidation = (fieldName, fieldValue) => {
    const userNamePattern = new RegExp(/^[A-Za-z\u00C0-\u00FF]{1,30}$/, '')
    const mailPattern = new RegExp(/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+[\.]*[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@(gmail\.com)$/, '')
    const passwordPattern = new RegExp(/^(?=(?:[\u0000-\u007F\u0080-\u00FF]*[A-Z]){1})(?=(?:[\u0000-\u007F\u0080-\u00FF]*[a-z])+)(?=([\u0000-\u007F\u0080-\u00FF]*\d)+)(?=([\u0000-\u007F\u0080-\u00FF]*[\u0000-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007F\u0080-\u00FF])+)[\u0000-\u007F\u0080-\u00FF]{9,30}$/, '')
    switch(fieldName) {
      case 'user_name':
        userNamePattern.test(fieldValue) ? this.state.name_error = '' : this.state.name_error = 'please, enter a username long of 1 to 30 letters'
        break;
      case 'user_email':
        mailPattern.test(fieldValue) ? this.state.email_error = '' : this.state.email_error = 'please, enter a valid gmail address'
        break;
      case 'user_password':
          passwordPattern.test(fieldValue) ? this.state.password_error = '' : this.state.password_error = 'please, enter a valid password'
        break;
      default:
        break;
    }
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
    this.handleValidation(name, value)
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    
    return (
      <form className="form" onSubmit={this.handleSubmit} noValidate>
        <label htmlFor="username"  className="field">
          <span className="label">Username</span>
          <input onChange={e => this.handleChange(e)} type="text" id="username" name="user_name" />
          <span className="error" aria-live="polite">{this.state.name_error}</span>
        </label>
        <label htmlFor="mail" className="field">
          <span className="label">Email address</span>
          <input onChange={e => this.handleChange(e)} type="email" id="email" name="user_email" />
          <span className="error" aria-live="polite">{this.state.email_error}</span>
        </label>
        <label htmlFor="password" className="field">
          <span className="label">Password</span>
          <input onChange={e => this.handleChange(e)} type="text" id="password" name="user_password" />
          <span className="error" aria-live="polite">{this.state.password_error}</span>
        </label>
        <button>Submit</button>

      </form>
    )
  }
}

const App = () => {
  return (
    <section>
      <Title name="Simple form with js validation" />
      <RegisterForm />
    </section>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)