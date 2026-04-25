import axios from 'axios';
import { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
const initialValues = {
  fullName: '',
  email: '',
  departman: '',
  unvan: '',
  gorevler: '',
};
export default function FormContainer(props) {
  const { addUser } = props;
  const [formData, setFormData] = useState(initialValues);
  const handleChange = (event) => {
    const { name, value } = event.target;
    const newState = { ...formData, [name]: value };
    setFormData(newState);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://reqres.in/api/users', formData)
      .then((response) => {
        addUser(response.data);
        setFormData(initialValues);
      })
      .catch((Error) => {
        console.warn(error);
      });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="fullName">Ad Soyad:</Label>
        <Input
          id="fullName"
          name="fullName"
          placeholder="Çalışanın tam adı ve soyadı"
          type="text"
          onChange={handleChange}
          value={formData.fullName}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email:</Label>
        <Input
          id="email"
          name="email"
          placeholder="Kurumsal email adresi"
          type="email"
          onChange={handleChange}
          value={formData.email}
        />
      </FormGroup>
      <FormGroup>
        <Label for="departman">Departman:</Label>
        <Input
          id="departman"
          name="departman"
          placeholder="Çalıştığı departman"
          type="text"
          onChange={handleChange}
          value={formData.departman}
        />
      </FormGroup>
      <FormGroup>
        <Label for="unvan">Ad Soyad:</Label>
        <Input
          id="unvan"
          name="unvan"
          placeholder="Çalışanın ünvanı"
          type="text"
          onChange={handleChange}
          value={formData.unvan}
        />
      </FormGroup>
      <FormGroup>
        <Label for="gorevler">Takım içi görevleri:</Label>
        <Input
          id="gorevler"
          name="gorevler"
          placeholder="Çalışanın takım içerisindeki görev listesi"
          type="textarea"
          rows="8"
          onChange={handleChange}
          value={formData.gorevler}
        />
      </FormGroup>
      <FormGroup className="text-center">
        <Button>Kaydet</Button>
      </FormGroup>
    </Form>
  );
}
