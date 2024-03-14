import styled from 'styled-components';

// 인터페이스란?
// Object 객체의 shape을 확인할 수 있도록 도와줌.
// 객체의 설계도와 같은 것.
// 인터페이스 명은 대문자로 짓기
interface CircleProps {
  bgColor: string;
  // ?: optional props
  borderColor?: string;
  text?: string;
}

// 스타일 컴포넌트에 props type 설정방법 <>
const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  border: 1px solid ${(props) => props.borderColor};
`;

//  같은 방법

// function Circle(props: CircleProps) {
// return <Container bgColor={props.bgColor} />
// }

function Circle({ bgColor, borderColor, text = 'default text' }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
