import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
    <div className="row mt-5">
    <div className="col-md-6 m-auto">
      <div className="card card-body">
        <h1 className="text-center mb-3">
          <i className="fas fa-user-plus"></i> Register
        </h1>
        {/*  TODO: Not sure if I want this form action here. */}
        <form action="/users/register" method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              value = {name}
              onChange = {e => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value = {email}
              onChange = {e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Create Password"
              value = {password}
              onChange = {e => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              id="password2"
              name="password2"
              className="form-control"
              placeholder="Confirm Password"
              value = {confirmPassword}
              onChange = {e => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Register
          </button>
        </form>
        <p className="lead mt-4">Have An Account? <a href="./">Login</a></p>
      </div>
    </div>
  </div>
    </>
  )
}


function App() {
  return(<Register/>);
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
);
