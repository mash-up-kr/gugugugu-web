import styled from "styled-components";

interface Props {
  Icon: React.ReactNode;
  label: string;
}

const TabItem = (props: Props) => {
  const { Icon, label } = props;
  return (
    <Wrapper>
      {Icon}
      {label}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  height: 100%;
  width: 100%;
  background-color: grey;
`;

export default TabItem;
