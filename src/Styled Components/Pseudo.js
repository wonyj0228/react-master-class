import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  justify-content: center;
  align-items: center;
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;

  display: flex;
  justify-content: center;
  align-items: center;

  /* 모든 컴포넌트를 styled로 설정할 필요는 없음 */
  /* Box 내부의 컴포넌트를 타겟으로 내부에서 스타일 설정가능 */
  /* Emoji라는 컴포넌트 자체를 지목할 수 있다. html태그 아니어도 가능 */
  ${Emoji} {
    /* & == span과 같은 의미 */
    &:hover {
      font-size: 10px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function Pseudo() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="p">😘</Emoji>
      </Box>
      <Emoji>😘</Emoji>
    </Wrapper>
  );
}

export default Pseudo;
