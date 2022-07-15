import Image from "next/image";
import Link from "next/link";
import React from "react";

import { CardImageContainer, CardLink, Container } from "./styles";

type Props = {
  imgSrc: string;
  href: {
    link: string;
    title: string;
  };
};

export const Card: React.FC<Props> = ({ href, imgSrc }) => {
  return (
    <Container>
      <CardImageContainer>
        <Image src={imgSrc} width={40} height={40} alt="card-image" />
      </CardImageContainer>
      <Link href={href.link} target="_blank">
        <CardLink>{href.title}</CardLink>
      </Link>
    </Container>
  );
};
