import styled from '@emotion/styled';

export const ButtonLoad = styled.button`
  width: 160px;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 30px;
  margin-left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: black;
  background-color: gainsboro;

  &:hover,
  &:focus {
    color: black;
    background-color: rgba(255, 255, 126, 1);
  }
`;
