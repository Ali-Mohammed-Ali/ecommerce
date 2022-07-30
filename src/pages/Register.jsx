import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.pexels.com/photos/54200/pexels-photo-54200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  border: 1px solid lightgray;
  padding: 10px;
`;
const Aggreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  cursor: pointer;
  background-color: teal;
  color: white;
`;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create An Acount</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="user name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Aggreement>
            By Creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Aggreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
