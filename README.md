# mysql-tz

entire package is:
```ts
type MySqlTz = () => string;

const mysqlTz: MySqlTz = () =>
  new Date()
    .toString()
    .split(" ")
    .reduce((a, b) => a.includes("-") || a.includes("+") ? a : b);

export default mysqlTz;
```

I made this because I found myself copying & pasting this function in many projects because it has proved useful.

```ts
import mariadb, { PoolConnection } from "mariadb";
import mysqlTz from "mysql-tz";

const maria_pool = mariadb.createPool({
  database: "SomeDatabase",
  user: 'username',
  password: 'password',
  timezone: mysqlTz(),
  connectionLimit: 25
});
```
