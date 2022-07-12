import { Table as MantineTable } from "@mantine/core";

type Rows = {
  [key: string]: string | number;
};

type Props = {
  rows: Rows[];
};

export const Table: React.FC<Props> = ({ rows }) => {
  const lines = rows.map((element) => {
    const rowValues = Object.values(element);
    const row = rowValues.map((value) => <td key={value}>{value}</td>);

    return <tr key={JSON.stringify(rowValues)}>{row}</tr>;
  });

  const rowHeaders = Object.keys(rows[0]);
  const headers = rowHeaders.map((value) => (
    <th key={JSON.stringify(rowHeaders)}>{value}</th>
  ));

  return (
    <MantineTable>
      <thead>
        <tr>{headers}</tr>
      </thead>

      <tbody>{lines}</tbody>
    </MantineTable>
  );
};
