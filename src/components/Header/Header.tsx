import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  margin: 0;
  height: 56px;
  width: 100%;
`;

const ColorBoxHeaderContainer = styled.div`
  height: 75%;
  display: flex;
`;
const ColorBoxFooterContainer = styled.div`
  height: 25%;
  display: flex;
`;

const HeaderColorBox = styled.div<{
  color: string;
}>`
  width: 100%;
  height: 100%;
  background-color: ${props => props.color};
`;

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <ColorBoxHeaderContainer>
        <HeaderColorBox color="#32468D" />
        <HeaderColorBox color="#FF686D" />
        <HeaderColorBox color="#FFC36D" />
        <HeaderColorBox color="#54BDE8" />
        <HeaderColorBox color="#52ACAD" />
      </ColorBoxHeaderContainer>
      <ColorBoxFooterContainer>
        <HeaderColorBox color="#23B7FE" />
      </ColorBoxFooterContainer>
    </Wrapper>
  );
};
