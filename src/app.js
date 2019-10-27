const Title = (props) => {
  return (
    <h1 className="title">{props.name}</h1>
  )
}

class RegisterForm extends React.Component {
  render() {
    return (
      <form className='form'>
        <label for="username"  class="field">
          <span class="label">Username</span>
          <input type="text" id="username" name="user_name" required pattern="[A-Za-z\u00C0-\u00FF]{1,30}" />
          <span class="error" aria-live="polite"></span>
        </label>
        <label for="mail" class="field">
          <span class="label">Email address</span>
          <input type="email" id="email" name="user_email" required pattern="^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+[\.]*[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@(gmail\.com)$" />
          <span class="error" aria-live="polite"></span>
        </label>
        <label for="password" class="field">
          <span class="label">Password</span>
          <input type="password" id="password" name="user_password" required pattern="^(?=(?:[\u0000-\u007F\u0080-\u00FF]*[A-Z]){1})(?=(?:[\u0000-\u007F\u0080-\u00FF]*[a-z])+)(?=([\u0000-\u007F\u0080-\u00FF]*\d)+)(?=([\u0000-\u007F\u0080-\u00FF]*[\u0000-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007F\u0080-\u00FF])+)[\u0000-\u007F\u0080-\u00FF]{9,30}$" />
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