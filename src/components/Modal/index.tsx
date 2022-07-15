import React from "react";

import { Modal as ModalComponent } from "@mantine/core";

type Props = {
  isOpened: boolean;
  setOpened: (value: boolean) => void;
  children: JSX.Element;
  title: string;
};

export const Modal: React.FC<Props> = ({
  title,
  isOpened,
  setOpened,
  children,
}) => {
  return (
    <ModalComponent
      opened={isOpened}
      onClose={() => setOpened(false)}
      title={title}
      styles={{
        modal: { backgroundColor: "var(--black-800)", color: "white" },
        close: { color: "white" },
      }}
    >
      {children}
    </ModalComponent>
  );
};
