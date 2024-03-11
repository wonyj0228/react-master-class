import styled from 'styled-components';

// styled.html태그 => 백틱 내에 css처럼 작성 가능
const Father = styled.div`
  display: flex;
`;

// props를 받아서 사용가능. 객체로 넘어옴
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

// styled(Components) => 컴포넌트를 상속받아서 사용한다고 생각하면 됨
const Circle = styled(Box)`
  border-radius: 50px;
`;

// 스타일은 동일하지만 html 태그를 바꾸고 싶을 때 => as
// 컴포넌트 props로 as => 태그를 작성
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

// html 태그의 속성을 styled components에서 줄 수 있다.
// styled.태그.attrs({key:value, key:value})
const Input = styled.input.attrs({ required: true, value: 'hi' })`
  background-color: tomato;
`;

function Basic() {
  return (
    <>
      <Father>
        <Box bgColor="teal" />
        <Box bgColor="tomato" />
        <Circle bgColor="red" />
      </Father>
      <Btn>Log in</Btn>
      <Btn as="a">Log in</Btn>
      <Input />
      <Input />
    </>
  );
}

export default Basic;
