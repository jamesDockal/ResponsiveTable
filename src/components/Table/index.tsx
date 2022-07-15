import { Group, Table as MantineTable } from "@mantine/core";

type Rows = {
  [key: string]: string | number | JSX.Element;
};

type Props = {
  rows: Rows[];
};

export const Table: React.FC<Props> = ({ rows }) => {
  const lines = rows.map((element) => {
    const rowValues = Object.values(element);
    const row = rowValues.map((value) => {
      console.log("  typeof value", typeof value);
      return (
        <td key={value.toString()}>
          <Group>{value}</Group>
        </td>
      );
    });

    return <tr key={"asd"}>{row}</tr>;
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
