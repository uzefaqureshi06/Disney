import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHome, FaFilm, FaRegEye, FaTv, FaStar } from 'react-icons/fa';

const Hero = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLoginForm = () => {
    setShowLogin(!showLogin);
  };

  return (

    <Navbar>
      <Logo
        src='https://raw.githubusercontent.com/CleverProgrammers/cp-disney-plus-clone/64f94469c32e9d788a4af86200a333031c6bb835/public/images/logo.svg'
        alt="Logo"
      />
      <NavLinks>
        <NavLink href="/">
          <FaHome />
          <span>HOME</span>
        </NavLink>
        <NavLink href="/movies">
          <FaFilm />
          <span>MOVIES</span>
        </NavLink>
        <NavLink href="/papa">
          <FaRegEye />
          <span>Search</span>
        </NavLink>
        <NavLink href="/pan">
          <FaTv />
          <span>CARTOONS</span>
        </NavLink>
        <NavLink href="/por">
          <FaTv />
          <span>Tv</span>
        </NavLink>

      </NavLinks>
      <LoginButton onClick={toggleLoginForm}>Login</LoginButton>
      {showLogin && <LoginForm />}
    </Navbar>
  );
};

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <SubmitButton type="submit">Login</SubmitButton>
        <SignUpLink href="#">Create an account</SignUpLink>
      </Form>
    </FormContainer>
  );
};

const Navbar = styled.div`
 font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;
  position: relative;
`;

const Logo = styled.img`
  height: 60px;
  margin-right: 40px;
  margin-top: -12px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  margin-right: 80px;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 0 10px;
  position: relative;
  
  svg {
    font-size: 24px;
    margin-right: 8px;
  }
  
  span {
    font-size: 14px;
  }
  
  &:hover::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 35%;
    width: 60%;
    height: 2px;
    background-color: white;
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
`;

const LoginButton = styled.button`
 font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  background-color: white;
  color: black;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  margin-left: auto;
  transition: background-color 0.3s ease;
  position: relative;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const FormContainer = styled.div`
  position: absolute;
  top: 100px; /* Adjust based on your layout */
  right: 20px; /* Adjust based on your layout */
  background-color: black;
  color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  width: 300px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  background: #333;
  border: 1px solid #444;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  padding: 12px;
  margin-bottom: 15px;
  
  &::placeholder {
    color: #888;
  }
`;

const SubmitButton = styled.button`
  background: #0063e5;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 18px;
  padding: 12px;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #004bb4;
  }
`;

const SignUpLink = styled.a`
  color: #888;
  text-align: center;
  display: block;
  margin-top: 10px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default Hero;
