import React from "react";
import { useContext, createContext } from "react";

const TableContext = createContext();

function Table({ children, columns }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="border border-slate-300 rounded-md overflow-hidden">
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <header
      className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-x-[2.4rem] items-center px-[2.4rem]
        py-[1.4rem] bg-gray-700 font-semibold text-xl text-white"
      role="row"
      columns={columns}
      as="header"
    >
      {children}
    </header>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <div role="row" columns={columns}
      className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-x-[2.4rem] items-center px-[2.4rem]
        py-[1.4rem] border-t-2 border-slate-400 text-white">
      {children}
    </div>
  );
}

function Body({ data, render }) {
  if (!data.length) return <p>There is no data present at this time.</p>;

  return (
    <div className="bg-gray-700">
      {data.map(render)}
    </div>
  );
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;

export default Table;
