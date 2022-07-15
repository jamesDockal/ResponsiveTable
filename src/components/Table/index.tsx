import { Group, Table as MantineTable } from "@mantine/core";
import { ResponsiveCard } from "../ResponsiveCard";
import { Line } from "./styles";

type Row = {
  id: string | number;
  [key: string]: string | number | JSX.Element[];
};

type Props = {
  rows: Row[];
};

export const Table: React.FC<Props> = ({ rows }) => {
  const lines = rows.map((line: Partial<Row>) => {
    const { id } = line;
    delete line.id;

    const rowValues = Object.values(line);
    const row = rowValues.map((value) => {
      if (typeof value === "object") {
        return (
          <td>
            <ResponsiveCard elements={value} />
          </td>
        );
      }

      return (
        // eslint-disable-next-line react/jsx-key
        <td>{value}</td>
      );
    });

    return <Line key={id}>{row}</Line>;
  });

  const rowHeaders = Object.keys(rows[0]);
  const headers = rowHeaders.map((value) => (
    <th
      key={value}
      style={{
        color: "white",
      }}
    >
      {value}
    </th>
  ));

  return (
    <MantineTable color="red">
      <thead>
        <tr>{headers}</tr>
      </thead>

      <tbody
        style={{
          background: "var(--black-300)",
        }}
      >
        {lines}
      </tbody>
    </MantineTable>
  );
};
