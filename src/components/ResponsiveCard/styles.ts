import styled, { css } from "styled-components";
import { BsChevronRight } from "react-icons/bs";

export const ChevronIcon = styled(BsChevronRight)`
  transition: 0.3s;
`;

type DocumentsContainerProps = {
  total: number;
};

export const DocumentsContainer = styled.div<DocumentsContainerProps>`
  ${({ total }) =>
    total > 4 &&
    css`
      height: 230px;
      overflow-y: scroll;
    `}

  display: flex;
  flex-direction: column;
  gap: 8px;

  background-color: var(--black-800);
`;
