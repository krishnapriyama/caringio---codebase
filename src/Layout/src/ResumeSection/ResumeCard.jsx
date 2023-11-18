"use client";
import * as React from "react";
import styled from "styled-components";

export function ResumeCard(props) {
  return (
    <Div>
      <Column>
        <Img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5752c725-70c0-4e85-bee9-9a3b9e259b1c?apiKey=403ee53417c24354b7838867449cd08a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5752c725-70c0-4e85-bee9-9a3b9e259b1c?apiKey=403ee53417c24354b7838867449cd08a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5752c725-70c0-4e85-bee9-9a3b9e259b1c?apiKey=403ee53417c24354b7838867449cd08a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5752c725-70c0-4e85-bee9-9a3b9e259b1c?apiKey=403ee53417c24354b7838867449cd08a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5752c725-70c0-4e85-bee9-9a3b9e259b1c?apiKey=403ee53417c24354b7838867449cd08a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5752c725-70c0-4e85-bee9-9a3b9e259b1c?apiKey=403ee53417c24354b7838867449cd08a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5752c725-70c0-4e85-bee9-9a3b9e259b1c?apiKey=403ee53417c24354b7838867449cd08a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5752c725-70c0-4e85-bee9-9a3b9e259b1c?apiKey=403ee53417c24354b7838867449cd08a&"
        />
      </Column>
      <Column2>
        <Div4>
          Approved training partner under the scheme for market led fee-based
          services implemented by NSDC
        </Div4>
      </Column2>
    </Div>
  );
}

const Div = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 22px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.15);
  background-color: var(--white-100, #fff);
  align-self: center;
  display: flex;
  width: 100%;
  max-width: 1122px;
  flex-direction: row;
  margin: 50px 0 100px;
  padding: 40px 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin: 40px 0;
    display: flex;
    padding: 16px 16px 40px 16px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    align-self: stretch;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: row;
  line-height: normal;
  width: 41%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Img = styled.img`
  aspect-ratio: 1.41;
  object-fit: cover;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: row;
  line-height: normal;
  width: 59%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div4 = styled.div`
  color: var(--black-primary, #28221e);
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 126.523%;
  letter-spacing: -0.56px;
  max-width: 577px;
  margin: auto 0;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;
