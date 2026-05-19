import mysql from 'mysql2/promise';

const connectionString = process.env.DATABASE_URL || 
  'mysql://root:eSLFCCmVlFtJRQShHQYCVArHjVAoiaKW@switchyard.proxy.rlwy.net:54671/railway';

let pool: mysql.Pool | null = null;

function parseConnectionString(uri: string) {
  const url = new URL(uri);
  return {
    host: url.hostname,
    port: parseInt(url.port),
    user: url.username,
    password: url.password,
    database: url.pathname.slice(1), // Remove leading '/'
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  };
}

export function getPool(): mysql.Pool {
  if (!pool) {
    const config = parseConnectionString(connectionString);
    pool = mysql.createPool(config);
  }
  
  return pool;
}

export async function query(sql: string, params?: unknown[]) {
  const pool = getPool();
  const [results] = await pool.execute(sql, params || []);
  return results;
}

