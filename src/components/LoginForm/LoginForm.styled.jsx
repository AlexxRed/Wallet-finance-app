import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {Form, Field} from 'formik'

export const FormContainer = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction:column;
    align-items: center;
    width: 280px;
    height: 568px;
    z-index: 10;
    background: var(--white-color);
  }
  @media screen and (min-width: 768px) {
    width: 533px;
    height: 468px;
    border-radius: 20px;
  }
`;
export const Logo = styled.svg`
  @media screen and (min-width: 320px) {
    width: 120px;
    height: 30px;
    margin-top: 107px
  }
  @media screen and (min-width: 768px) {
    width: 181px;
    height: 40px;
    margin: 40px 176px 0px 176px;
  }
`;
export const Input = styled(Field)`
  &:focus {
    background-color: #dfedea;
    outline: none;
  }
  ::placeholder {
    font-size: 18px;
    font-family: Circe;
  }
  @media screen and (min-width: 320px) {
    width: 243px;
    border: none;
    margin-left: 20px;
    height: 32px;
  }
  @media screen and (min-width: 768px) {
    width: 373px;
  }
`;
export const RegistrationForm = styled(Form)`
 width: max-content;
  `;

export const Btn = styled.button`
  &:disabled{
    background-color: #1a8f75;
  }
  &:hover,
  &:focus {
    background-color: #1a8f75;
  }
  @media screen and (min-width: 320px) {
    width: 280px;
    height: 50px;
    margin-top: 40px;
    background-color: var(--light-green-color);
    border: none;
    border-radius: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 50px;
    margin: 20px 114px 0px 119px;
  }
`;
export const BtnTitle = styled.span`
  color: var(--white-color);
  margin: 0;
`;
export const Link = styled(NavLink)`
  &:hover,
  &:focus {
    background-color: #dfedea;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  @media screen and (min-width: 320px) {
    width: 280px;
    height: 50px;
    margin: 20px 0 36px 0;
    border-radius: 20px;
    border: 1px solid var(--blue-color);
  }
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 50px;
    margin: 20px 114px 66px 119px;
  }
`;
export const LinkTitle = styled.span`
  color: var(--blue-color);
  margin: 0;
`;
export const FormIcon = styled.svg`
  width: 24px;
  height: 24px;
  margin-left: 10px;
  margin-bottom: 4px;
`;
export const EmailIcon = styled.img`
  width: 24px;
`;
export const Progress = styled.progress`
  @media screen and (min-width: 320px) {
    width: 280px;
    margin-left: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 410px;
    margin-left: 65px;
  }
`;
export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  &:hover {
    border-bottom: 1px solid #1a8f75;
  }
  @media screen and (min-width: 320px) {
    width: 280px;
    height: 32px;
    border: white;
    border-bottom: 1px solid #e0e0e0;
    margin-top: 40px 
  }
  @media screen and (min-width: 768px) {
    width: 410px;
    border: var(--white-color);
    border-bottom: 1px solid #e0e0e0;
    margin-left: 65px;
  }
`;
export const Error = styled.p`
  position: absolute;
  font-size: 12px;
  color: red;
  top: -24px;
`;

