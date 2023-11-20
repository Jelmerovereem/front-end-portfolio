// @ts-check

import React, { useEffect, useState } from "react";
import styled from "styled-components";

import * as colors from "../../styles/colors.js";

const Wrapper = styled.div`
  position: fixed;
  bottom: 40px;
  left: 50%;
  width: 80%;
  transform: translateX(-50%);
  padding: 5px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.bgLight};
  border-radius: 5px;
  border: 2px solid ${colors.primary};
  gap: 20px;
`;

const CloseBtn = styled.button`
  height: 20px;
  background-color: #777;
  border: none;
  color: white;
  border-radius: 2px;
  cursor: pointer;
`;

const CookieBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookieSeen") != "shown") {
      setShow(true);
      localStorage.setItem("cookieSeen", "shown");
    }
  }, []);

  return (
    <Wrapper style={show ? {} : { display: "none" }}>
      <p>
        Door het gebruik van deze website stem je in met het gebruik van cookies
        voor het verzamelen van anonieme gegevens via Google Analytics. Deze
        gegevens helpen ons de website-ervaring te verbeteren en inzicht te
        krijgen in het gebruik van de site.
      </p>
      <CloseBtn onClick={() => setShow(false)}>&times;</CloseBtn>
    </Wrapper>
  );
};

export default CookieBar;
