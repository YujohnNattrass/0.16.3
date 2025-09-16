import { PgVector } from '@mastra/pg';

let shared_pg_vector: PgVector;

export function createPgVectorConnection() {
  if (shared_pg_vector) {
    return shared_pg_vector;
  }
  shared_pg_vector = new PgVector({
    connectionString: process.env.DATABASE_URL!,
    pgPoolOptions: {
      max: 5, // Cloud SQL default limit is 100; keep a safety margin
      idleTimeoutMillis: 30_000, // close idle connections after 30 s
      connectionTimeoutMillis: 15_000, // wait up to 15 s before throwing the timeout error
      keepAlive: true, // keep the TCP connection alive (helps with some proxies)
    },
  });
  return shared_pg_vector;
}