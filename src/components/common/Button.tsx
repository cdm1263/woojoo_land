import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

interface IButtonProps {
  [rest: string]: any;
}

function Button({ ...rest }: IButtonProps) {
  return <StyledButton {...rest} />;
}

const StyledButton = styled.button<{
  active?: boolean;
  middleWidth?: boolean;
  fullWidth?: boolean;
  login?: boolean;
  register?: boolean;
  orange?: boolean;
  reverse?: boolean;
  adminlogout?: boolean;
  admin?: boolean;
  admindel?: boolean;
  adminedit?: boolean;
  adminadd?: boolean;
}>`
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  background: #707070;
  color: #fff;
  &:disabled {
    background: #ccc;
    color: #707070;
    cursor: not-allowed;
    opacity: 0.5;
  }
  ${(rest) =>
    rest.active &&
    css`
      padding: 0.5rem 1rem;
      background: #333;
      color: #fff;
    `}
  ${(rest) =>
    rest.middleWidth &&
    css`
      width: 160px;
      height: 2.5rem;
    `}
  ${(rest) =>
    rest.fullWidth &&
    css`
      padding: 0.75rem 0;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${(rest) =>
    rest.login &&
    css`
      background: ${theme.colors.orange.main};
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 700;
    `}
  ${(rest) =>
    rest.register &&
    css`
      background: ${theme.colors.orange.main};
      width: 100%;
    `}
  ${(rest) =>
    rest.orange &&
    css`
      background: ${theme.colors.orange.main};
    `}
  ${(rest) =>
    rest.reverse &&
    css`
      background: ${theme.colors.white};
      color: ${theme.colors.orange.main};
      border: 1px solid ${theme.colors.orange.main};
    `}
  ${(rest) =>
    rest.adminlogout &&
    css`
      width: 120px;
      font-size: 1rem;
      transition: 0.1s;
      transition: 0.3s;
      background: none;
      border-radius: 1.25rem;
      color: ${theme.colors.orange.main};
      border: 1px solid ${theme.colors.orange.main};
      &:hover {
        transform: scale(1.04);
        color: ${theme.colors.white};
        background: ${theme.colors.orange.main};
      }
    `}
  ${(rest) =>
    rest.admin &&
    css`
      width: 134px;
      height: 40px;
      font-size: 1rem;
      transition: 0.1s;
      border-radius: 5px;
      color: ${theme.colors.white};
      background-color: ${theme.colors.orange.main};
      &:hover {
        transform: scale(1.04);
        color: ${theme.colors.white};
        background: ${theme.colors.orange.hover};
      }
    `}
  ${(rest) =>
    rest.admindel &&
    css`
      width: 60px;
      height: 40px;
      font-size: 1rem;
      transition: 0.1s;
      border-radius: 5px;
      color: ${theme.colors.white};
      background-color: ${theme.colors.orange.main};
      &:hover {
        transform: scale(1.04);
        color: ${theme.colors.white};
        background: ${theme.colors.orange.hover};
      }
    `}
  ${(rest) =>
    rest.adminedit &&
    css`
      width: 60px;
      height: 40px;
      font-size: 1rem;
      background: none;
      transition: 0.1s;
      border-radius: 5px;
      color: ${theme.colors.orange.main};
      border: 1px solid ${theme.colors.orange.main};
      &:hover {
        transform: scale(1.04);
        color: ${theme.colors.white};
        background: ${theme.colors.orange.main};
      }
    `}
  ${(rest) =>
    rest.adminadd &&
    css`
      width: 100%;
      height: 40px;
      font-size: 1rem;
      transition: 0.3s;
      border-radius: 5px;
      color: ${theme.colors.white};
      background-color: ${theme.colors.orange.main};
      &:hover {
        color: ${theme.colors.white};
        background: ${theme.colors.orange.hover};
      }
    `}
`;

export default Button;
