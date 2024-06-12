import { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import registrationImg from "../../images/registrationImg.jpg";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onRegistration = (e) => {
    e.preventDefault();

    console.log("Form data submitted:", formData);
    const templateParams = {
      name: formData.name,
      contact: formData.contact,
      message: formData.message,
    };

    emailjs
      .send(
        "service_4d8xtot",
        "template_4xbexs7",
        templateParams,
        "Cz4HN7E9Ygfqpynmx"
      )
      .then(() => {
        alert("등록이 완료되었습니다!");
      })
      .catch(() => {
        alert("등록에 실패했습니다. 다시 시도해주세요.");
      });

    setFormData({
      name: "",
      contact: "",
      message: "",
    });
  };

  return (
    <Wrapper>
      <img src={registrationImg} alt="registrationImg" />
      <Form onSubmit={onRegistration}>
        <Label>
          이름
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Label>
        <Label>
          연락처
          <Input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </Label>
        <Label>
          문의내용
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </Label>
        <Button type="submit">등록</Button>
      </Form>
    </Wrapper>
  );
};

export default RegistrationPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 20px;
  background-color: #f0f0f0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Label = styled.label`
  margin-bottom: 15px;
  color: #555;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  width: calc(100% - 20px);
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.primary.basic};
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.COLORS.primary.deep};
  }
`;
