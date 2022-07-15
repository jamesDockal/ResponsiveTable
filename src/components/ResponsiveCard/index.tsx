import React, { useState } from "react";

import { Group, MediaQuery } from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import { BsChevronRight } from "react-icons/bs";

import { Modal } from "../Modal";
import { ChevronIcon, DocumentsContainer } from "./styles";

type Props = {
  elements: JSX.Element[];
};

export const ResponsiveCard: React.FC<Props> = ({ elements }) => {
  const { ref: documentsRef, width: documentsWidth } = useElementSize();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "#1F2029",
      }}
    >
      <MediaQuery
        query={`(max-width: ${elements.length * 300}px)`}
        styles={{
          display: "none",
        }}
      >
        <Group ref={documentsRef}>{elements}</Group>
      </MediaQuery>

      <MediaQuery
        query={`(min-width: ${elements.length * 300}px)`}
        styles={{
          display: "none",
        }}
      >
        <ChevronIcon
          style={{
            transform: `rotate(${isModalOpen ? "90deg" : "0deg"})`,
            color: "#D53F8C",
          }}
          size={24}
          cursor="pointer"
          onClick={() => setIsModalOpen(!isModalOpen)}
        />
      </MediaQuery>

      <Modal
        title="Documents"
        isOpened={isModalOpen}
        setOpened={setIsModalOpen}
      >
        <DocumentsContainer total={elements.length}>
          {elements}
        </DocumentsContainer>
      </Modal>
    </div>
  );
};
