import React from "react";
import styled from "styled-components";
const StyledHeader = styled.header`
  background-color: orangered;
  padding: 3.2rem 2.4rem;
  border-bottom: 1p solid var(--color-grey-100);
`;
export default function Header() {
  return (
    <div>
      <StyledHeader>Header</StyledHeader>
    </div>
  );
}
