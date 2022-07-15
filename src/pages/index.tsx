import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import { Table } from "../components/Table";

const Home: NextPage = () => {
  const elements = [
    {
      position: 6,
      mass: 12.011,
      symbol: <strong>Symbol</strong>,
      name: "Carbon",
    },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    {
      position: 58,
      mass: 140.12,
      symbol: "Ce",
      name: (
        <>
          <div>ppppppppppppppppppppp</div>
          <div>ppppppppppppppppppppp</div>
          <div>ppppppppppppppppppppp</div>
          <div>ppppppppppppppppppppp</div>
        </>
      ),
    },
  ];
  return (
    <div>
      <Table rows={elements} />
    </div>
  );
};

export default Home;
