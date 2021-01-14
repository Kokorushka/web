import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const Contacts = () => {
  return (
    < div className = "contacts text-left mt-2" >
      <Container>
        <h2 className="text-center">Напишите нам!</h2>
        <Form className="w-75 mx-auto">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Адрес электронной почты:</Form.Label>
            <Form.Control type="email" placeholder="Введите email"/>
            <Form.Text>Мы не отправим адрес Вашей почты третьим лицам</Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>Ваши пожелания:</Form.Label>
            <Form.Control as="textarea" rows="3" placeholder="Введите текст"/>
          </Form.Group>
          <Form.Group controlId="formBasicCheckBox">
            <Form.Check type="checkbox" label="Подтверждаю согласие на обработку данных"/>
          </Form.Group>
          <Button>Отправить</Button>
        </Form>
      </Container>

    </div>
  )
}

export default Contacts;