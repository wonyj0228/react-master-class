import styled from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.backgroundColor};
`;

function Theme() {
  return (
    <Wrapper>
      <Title>하이하이</Title>
    </Wrapper>
  );
}

export default Theme;
