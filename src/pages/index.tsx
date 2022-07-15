import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import { Card } from "../components/Card";
import { Modal } from "../components/Modal";
import { Table } from "../components/Table";

const Home: NextPage = () => {
  const elements = [
    {
      id: 1,
      name: "James",
      email: "james@email.com",
      salary: "$80,000",
      Documents: [
        <Card
          key={10}
          imgSrc="/images/Text.jpg"
          href={{
            link: "#",
            title: "Offer.pdf",
          }}
        />,
        <Card
          key={11}
          imgSrc="/images/Text.jpg"
          href={{
            link: "#",
            title: "Employment.pdf",
          }}
        />,
        <Card
          key={12}
          imgSrc="/images/Text.jpg"
          href={{
            link: "#",
            title: "Assigment.pdf",
          }}
        />,
      ],
    },
    {
      id: 2,
      name: "Person1",
      email: "email@email.com",
      salary: "$00,000",
      Documents: [
        <Card
          key={1}
          imgSrc="/images/Text.jpg"
          href={{
            link: "#",
            title: "Offer.pdf",
          }}
        />,
      ],
    },
    {
      id: 3,
      name: "Person2",
      email: "email@email.com",
      salary: "$00,000",
      Documents: [
        <Card
          key={2}
          imgSrc="/images/Text.jpg"
          href={{
            link: "#",
            title: "Offer.pdf",
          }}
        />,
        <Card
          key={3}
          imgSrc="/images/Text.jpg"
          href={{
            link: "#",
            title: "Offer.pdf",
          }}
        />,
      ],
    },
    {
      id: 4,
      name: "Person3",
      email: "email@email.com",
      salary: "$00,000",
      Documents: [
        <Card
          key={4}
          imgSrc="/images/Text.jpg"
          href={{
            link: "#",
            title: "Offer.pdf",
          }}
        />,
        <Card
          key={5}
          imgSrc="/images/Text.jpg"
          href={{
            link: "#",
            title: "Employment.pdf",
          }}
        />,
        <Card
          key={6}
          imgSrc="/images/Text.jpg"
          href={{
            link: "#",
            title: "Assigment.pdf",
          }}
        />,
        <Card
          key={7}
          imgSrc="/images/Text.jpg"
          href={{
            link: "#",
            title: "Employment.pdf",
          }}
        />,
        <Card
          key={8}
          imgSrc="/images/Text.jpg"
          href={{
            link: "#",
            title: "Assigment.pdf",
          }}
        />,
      ],
    },
  ];

  return (
    <div>
      <Table rows={elements} />
    </div>
  );
};

export default Home;
