
type MySqlTz = () => string;

const mysqlTz: MySqlTz = () =>
  new Date()
    .toString()
    .split(" ")
    .reduce((a, b) => a.includes("-") || a.includes("+") ? a : b);

export default mysqlTz;
