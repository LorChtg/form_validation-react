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
      user_email: '',
      user_password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    },)
    console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    const userNamePattern = "[A-Za-z\u00C0-\u00FF]{1,30}"
    const mailPattern = "^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+[\.]*[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@(gmail\.com)$"
    const passwordPattern = "[\u0000-\u007F\u0080-\u00FF]{9,30}$"
    
    return (
      <form className="form" onSubmit={this.handleSubmit} noValidate>
        <label htmlFor="username"  className="field">
          <span className="label">Username</span>
          <input onChange={this.handleChange} type="text" id="username" name="user_name" required pattern={userNamePattern} />
          <span className="error" aria-live="polite"></span>
        </label>
        <label htmlFor="mail" className="field">
          <span className="label">Email address</span>
          <input onChange={this.handleChange} type="email" id="email" name="user_email" required pattern={mailPattern} />
          <span className="error" aria-live="polite"></span>
        </label>
        <label htmlFor="password" className="field">
          <span className="label">Password</span>
          <input onChange={this.handleChange} type="text" id="password" name="user_password" required pattern={passwordPattern} />
          <span className="error" aria-live="polite"></span>
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