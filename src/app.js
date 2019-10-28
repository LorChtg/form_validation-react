const Title = (props) => {
  return (
    <h1 className="title">{props.name}</h1>
  )
}

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit(e) {
    const {_username, _email, _password} = this.refs
    e.preventDefault()
    _username.value = ''
    _email.value = ''
    _password.value = ''
  }

  render() {
    const userNamePattern = "[A-Za-z\u00C0-\u00FF]{1,30}"
    const mailPattern = "^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+[\.]*[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@(gmail\.com)$"
    const passwordPattern = "^(?=(?:[\u0000-\u007F\u0080-\u00FF]*[A-Z]){1})(?=(?:[\u0000-\u007F\u0080-\u00FF]*[a-z])+)(?=([\u0000-\u007F\u0080-\u00FF]*\d)+)(?=([\u0000-\u007F\u0080-\u00FF]*[\u0000-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007F\u0080-\u00FF])+)[\u0000-\u007F\u0080-\u00FF]{9,30}$"
    
    return (
      <form className="form" onSubmit={this.submit}>
        <label for="username"  class="field">
          <span class="label">Username</span>
          <input ref="_username" type="text" id="username" name="user_name" required pattern={userNamePattern} />
          <span class="error" aria-live="polite"></span>
        </label>
        <label for="mail" class="field">
          <span class="label">Email address</span>
          <input ref="_email" type="email" id="email" name="user_email" required pattern={mailPattern} />
          <span class="error" aria-live="polite"></span>
        </label>
        <label for="password" class="field">
          <span class="label">Password</span>
          <input ref="_password" type="password" id="password" name="user_password" required pattern={passwordPattern} />
          <span class="error" aria-live="polite"></span>
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