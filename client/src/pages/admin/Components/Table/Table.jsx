const Table = ({
  columns,
  children,
}) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      <table className="min-w-full">

        <thead className="bg-slate-100">

          <tr>

            {columns.map((column) => (
              <th
                key={column}
                className="px-6 py-4 text-left text-sm font-semibold text-slate-700"
              >
                {column}
              </th>
            ))}

          </tr>

        </thead>

        <tbody>

          {children}

        </tbody>

      </table>

    </div>
  );
};

export default Table;