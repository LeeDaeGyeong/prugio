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
        "service_wfv0sa8",
        "template_0urvv7o",
        templateParams,
        "lV9HSzGpAIoyeUbx_"
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
      <Image src={registrationImg} alt="registrationImg" />
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff;
  padding: 20px;

  @media ${({ theme }) => theme.DEVICE.tablet} {
    padding: 10px;
  }

  @media ${({ theme }) => theme.DEVICE.mobile} {
    padding: 5px;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;

  @media ${({ theme }) => theme.DEVICE.mobile} {
    margin-bottom: 10px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 20px;
  background-color: #f0f0f0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media ${({ theme }) => theme.DEVICE.tablet} {
    width: 90%;
    padding: 15px;
  }

  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: 100%;
    padding: 10px;
  }
`;

const Label = styled.label`
  margin-bottom: 15px;
  color: #555;

  @media ${({ theme }) => theme.DEVICE.mobile} {
    margin-bottom: 10px;
  }
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  @media ${({ theme }) => theme.DEVICE.tablet} {
    font-size: 14px;
  }

  @media ${({ theme }) => theme.DEVICE.mobile} {
    font-size: 12px;
  }
`;

const Textarea = styled.textarea`
  width: calc(100% - 20px);
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;

  @media ${({ theme }) => theme.DEVICE.tablet} {
    font-size: 14px;
  }

  @media ${({ theme }) => theme.DEVICE.mobile} {
    font-size: 12px;
  }
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

  @media ${({ theme }) => theme.DEVICE.tablet} {
    font-size: 14px;
  }

  @media ${({ theme }) => theme.DEVICE.mobile} {
    font-size: 12px;
    padding: 8px;
  }
`;
