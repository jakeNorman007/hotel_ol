import React from "react";
import { useContext, createContext } from "react";

const TableContext = createContext();

function Table({ children, columns }) {
  return <TableContext.Provider value={{ columns }}>{children}</TableContext.Provider>;
}

function Header({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <header role="row" columns={columns} as="header">
      {children}
    </header>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <div role="row" columns={columns}>
      {children}
    </div>
  );
}

function Body({ data, render }) {
  if (!data.length) return <p>There is no data present at this time.</p>;

  return <div>{data.map(render)}</div>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;

export default Table;
