import React from "react";
import styled from "styled-components";

function ContactInfo() {
  return (
    <Container>
      <ContactContainer>
        <ContactColumn>
          <CompanyName>Caringio Tech Private Limited</CompanyName>
          <Address>
            9th Floor, Greenland
            <br />
            Alpha Street, Opposite to ABS Hospital
            <br />
            Place, Delhi
          </Address>
          <ContactDetails>
            <ContactItem>
              <ContactLabel>Phone:</ContactLabel>
              <ContactValue>+91 99999 99999</ContactValue>
            </ContactItem>
            <ContactItem>
              <ContactLabel>Mail:</ContactLabel>
              <ContactValue>info@caringia.com</ContactValue>
            </ContactItem>
          </ContactDetails>
        </ContactColumn>
        <ContactImage srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/242399a2-5747-458f-8df2-10610a4c1515?apiKey=403ee53417c24354b7838867449cd08a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/242399a2-5747-458f-8df2-10610a4c1515?apiKey=403ee53417c24354b7838867449cd08a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/242399a2-5747-458f-8df2-10610a4c1515?apiKey=403ee53417c24354b7838867449cd08a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/242399a2-5747-458f-8df2-10610a4c1515?apiKey=403ee53417c24354b7838867449cd08a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/242399a2-5747-458f-8df2-10610a4c1515?apiKey=403ee53417c24354b7838867449cd08a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/242399a2-5747-458f-8df2-10610a4c1515?apiKey=403ee53417c24354b7838867449cd08a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/242399a2-5747-458f-8df2-10610a4c1515?apiKey=403ee53417c24354b7838867449cd08a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/242399a2-5747-458f-8df2-10610a4c1515?apiKey=403ee53417c24354b7838867449cd08a&"/>
      </ContactContainer>
    </Container>
  );
}

const Container = styled.div`
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--white-100, #fff);
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const ContactContainer = styled.div`
  align-self: center;
  width: 100%;
  max-width: 1576px;
  margin: 50px 0;

  @media (max-width: 991px) {
    max-width: 100%;
    margin: 40px 0;
  }
`;

const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 41%;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const CompanyName = styled.div`
  color: var(--primary-dark, #271101);
  font-family: Inter, sans-serif;
  font-size: 46px;
  font-weight: 600;
  letter-spacing: -0.92px;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const Address = styled.div`
  color: rgba(39, 17, 1, 1);
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 128.2%;
  letter-spacing: -0.48px;
  margin-top: 30px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ContactLabel = styled.span`
  color: rgba(39, 17, 1, 1);
  margin-right: 5px;
`;

const ContactValue = styled.span`
  color: rgba(0, 71, 255, 1);
`;

const ContactImage = styled.img`
  aspect-ratio: 1.72;
  object-fit: cover;
  object-position: center;
  width: 100%;
  align-self: stretch;
  overflow: hidden;
  flex-grow: 1;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export default ContactInfo;