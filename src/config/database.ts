import mysql from "mysql2/promise";

const getConnection = async () => {
  const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejsecommerce",
    port: 3306,
  });

  return connection;
};

export default getConnection;
