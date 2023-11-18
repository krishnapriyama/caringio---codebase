import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <Container>
      <LogoContainer>
        <Logo
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c02d16a2-c85c-4fe4-9549-3cc5356f1789?apiKey=403ee53417c24354b7838867449cd08a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c02d16a2-c85c-4fe4-9549-3cc5356f1789?apiKey=403ee53417c24354b7838867449cd08a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c02d16a2-c85c-4fe4-9549-3cc5356f1789?apiKey=403ee53417c24354b7838867449cd08a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c02d16a2-c85c-4fe4-9549-3cc5356f1789?apiKey=403ee53417c24354b7838867449cd08a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c02d16a2-c85c-4fe4-9549-3cc5356f1789?apiKey=403ee53417c24354b7838867449cd08a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c02d16a2-c85c-4fe4-9549-3cc5356f1789?apiKey=403ee53417c24354b7838867449cd08a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c02d16a2-c85c-4fe4-9549-3cc5356f1789?apiKey=403ee53417c24354b7838867449cd08a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c02d16a2-c85c-4fe4-9549-3cc5356f1789?apiKey=403ee53417c24354b7838867449cd08a&"
        />
        <LogoText>Caringio</LogoText>
      </LogoContainer>
      <MenuContainer>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Careers</MenuItem>
        <MenuItem>Contact us</MenuItem>
      </MenuContainer>
    </Container>
  );
}

const Container = styled.div`
  justify-content: center;
  align-items: center;
  background-color: var(
    --accent-gradient-2,
    linear-gradient(90deg, #e87409 0%, #e85409 60.94%)
  );
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const LogoContainer = styled.div`
  align-self: center;
  display: flex;
  width: 100%;
  max-width: 1390px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin: 18px 0 17px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const LogoText = styled.div`
  color: var(--white-100, #fff);
  font-family: Baloo 2, sans-serif;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.11px;
  text-transform: uppercase;
  align-self: stretch;
  white-space: nowrap;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Logo = styled.img`
  aspect-ratio: 1.42;
  object-fit: cover;
  object-position: center;
  width: 34px;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
  margin: auto 0;
`;

const MenuContainer = styled.div`
  justify-content: space-between;
  align-items: flex-start;
  align-self: center;
  display: flex;
  width: 354px;
  max-width: 100%;
  gap: 20px;
  margin: auto 0;

  @media (max-width: 991px) {
    justify-content: center;
  }
`;

const MenuItem = styled.div`
  color: var(--white-100, #fff);
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 135.714%;
  letter-spacing: -0.14px;
  align-self: stretch;
  white-space: nowrap;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export default Navbar;
