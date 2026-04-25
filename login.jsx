import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get('https://6540a96145bedb25bfc247b4.mockapi.io/api/login')
      .then((response) => {
        const user = response.data.find(
          (item) => item.email === email && item.password === password
        );

        if (user) {
          setMessage('/main');
          history.push('/main');
        } else {
          setMessage('/error');
          history.push('/error');
        }
      })
      .catch(() => {
        setMessage('/error');
        history.push('/error');
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handleChange}
          />
        </FormGroup>

        <Button color="primary" type="submit">
          Sign In
        </Button>
      </Form>

      <div>{message}</div>
    </>
  );
}
