import getConnection from "../config/database";

async function checkConnection() {
  try {
    const pool = await getConnection(); // lấy pool
    const connection = await pool.getConnection();

    await connection.ping(); // kiểm tra kết nối
    console.log("✅ MySQL connected successfully!");

    connection.release();
  } catch (error) {
    console.error("❌ MySQL connection failed:", error);
  }
}

checkConnection();
