import styled from "styled-components";

const StyledInput = styled.input`
  display: initial;
  border: 2px solid black;
  border-radius: 30px;
  box-shadow: none;
  float: none;
  background-repeat: no-repeat;
  background-size: 0 2px, 100% 1px;
  padding: 20px;
  transition: background 0s ease-out 0s;
  color: black;
  min-height: 35px;
  width: 100%;
  font-size: 15px;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const Login = () => {
  return (
    <StyledWrapper>
      <StyledInput placeholder="Username" />
      <StyledInput placeholder="Password" />
    </StyledWrapper>
  );
};
