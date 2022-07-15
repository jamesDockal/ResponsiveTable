import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  gap: 8px;
  padding-right: 6px;

  border: 2px solid var(--pink-500);
  border-radius: 6px;

  margin: 4px 0;
`;

export const CardImageContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 3px;
  background-color: var(--pink-500);
`;

export const CardLink = styled.a`
  color: whitesmoke;
  font-size: 14px;
`;
