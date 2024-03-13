import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css'

function Login() {
  return (

    <div className=" login-body">

    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button className='btn1 mt-4'>submit</Button>
    </Form>
    </div>
  );
}

export default Login;