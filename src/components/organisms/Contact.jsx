import React, { useState } from "react";
import styled, { css } from "styled-components";
import * as colors from "styles/colors";
import * as defaults from "styles/defaults";

const Container = styled.div`
  display: block;
  background: ${colors.bgDark};
  padding: 200px 5%;
`;

const Title = styled.h2`
  font-size: 8vmin;
  font-weight: 400;
  margin: 0;
  text-align: center;
`;

const SubTitle = styled.p`
  font-size: 3vmin;
  font-weight: 500;
  text-align: center;
  margin: 0;
  opacity: 0.6;
  color: ${colors.textColor};
`;

const EmailContainer = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  button {
    position: absolute;
    right: -10%;
    top: 0;
    bottom: 0;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    input {
      margin-bottom: 50px;
    }
    button {
      position: static;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 50px 0 0 0;
  }
`;

const EmailInput = styled.input`
  width: 100%;
  border: none;
  padding: 33px 0 33px 15px;
  font-size: 1em;
  border: 3px solid white;
  transition: border 0.3s ease;
  box-shadow: 0 5px 15px lightgrey;
  &:focus,
  &:hover {
    outline: none;
    outline-color: ${colors.btnPrimary};
    border-color: ${colors.btnPrimary};
  }

  ${(props) =>
    !props.$isEmpty &&
    css`
      &:valid {
        border-color: green;
      }
    `}

  &:invalid {
    border-color: red;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    padding: 20px 0 20px 15px;
  }
`;

const SubmitBtn = styled.button`
  box-shadow: 0 5px 15px lightgrey;
  font-family: "poppins";
  font-size: 1.3em;
  cursor: pointer;
  text-decoration: none;
  color: white;
  background: ${colors.btnPrimary};
  padding: ${defaults.buttonPadding};
  border-radius: 50px;
  transition: background-color 0.3s ease;
  border: none;
  @media screen and (max-width: 768px) {
    font-size: 1.5em;
  }
  @media screen and (max-width: 480px) {
    font-size: 1em;
  }
  &:hover:not(:disabled) {
    background: ${colors.btnHover};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const Contact = () => {
  const [contactEmail, setContactEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);

  const onChangeEmailInput = (event) => {
    setContactEmail(event.target.value);

    if (event.target.value) {
      if (event.target.value.length > 0) {
        if (event.target.validity.valid) {
          setEmailIsValid(true);
        } else {
          setEmailIsValid(false);
        }
      } else {
        setEmailIsValid(false);
      }
    } else {
      setEmailIsValid(false);
    }
  };

  return (
    <Container id="contact">
      <Title>Let&apos;s work together</Title>
      <SubTitle>I will reach out to you asap</SubTitle>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <EmailContainer>
          <EmailInput
            onChange={onChangeEmailInput}
            value={contactEmail}
            $isEmpty={!contactEmail}
            placeholder="Email"
            type="email"
            name="email"
          />
          <SubmitBtn
            $isDisabled={!emailIsValid}
            disabled={!contactEmail}
            type="submit"
          >
            Contact me
          </SubmitBtn>
        </EmailContainer>
      </form>
    </Container>
  );
};

export default Contact;
