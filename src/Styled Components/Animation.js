import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 애니메이션 활용 = keyframes. css와 동일하게 사용

const rotation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  } 50% {
    transform: rotate(360deg);
    border-radius: 100px;
  } 100%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${rotation} 2s linear infinite;

  /* 모든 컴포넌트를 styled로 설정할 필요는 없음 */
  /* Box 내부의 컴포넌트를 타겟으로 내부에서 스타일 설정가능 */
  span {
    font-size: 36px;
    /* & == span과 같은 의미 */
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0;
    }
  }

  /* 이렇게 사용도 가능 but, 위처럼 쓰는게 더 좋아보임 */
  span:hover {
    font-size: 50px;
  }
`;

function Animation() {
  return (
    <Wrapper>
      <Box>
        <span>😘</span>
      </Box>
    </Wrapper>
  );
}

export default Animation;
