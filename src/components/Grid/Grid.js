import "./Grid.css";
import uuid from "react-uuid";
import { Button, Table } from "reactstrap";

function Grid({ data: { header = [], values = [], actions = [] } }) {
  return (
    <Table bordered>
      <thead>
        <tr>
          {header.map((colName) => (
            <th key={uuid()}>{colName.col}</th>
          ))}
          {!!actions.length && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {values.map((row) => (
          <tr key={uuid()}>
            {header.map((colName) => {
              const value = colName.formatter
                ? colName.formatter(row[colName.col])
                : row[colName.col];
              const isNan = Number.isNaN(+value);
              return (
                <td className={!isNan ? "is-number" : ""} key={uuid()}>
                  {value}
                </td>
              );
            })}
            {!!actions.length && (
              <td key={uuid()} className="gridActions">
                {actions.map(({ label, action }) => (
                  <div key={uuid()}>
                    <Button color="primary" onClick={() => action(row)}>
                      {label}
                    </Button>
                  </div>
                ))}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Grid;
