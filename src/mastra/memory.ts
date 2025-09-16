import { Memory } from "@mastra/memory";
import { fastembed } from "@mastra/fastembed";
import { PgVector, PostgresStore } from "@mastra/pg";

export const agentMemory = new Memory({
  embedder: fastembed,
  options: {
    lastMessages: 10,
    semanticRecall: true,
    threads: {
      generateTitle: true,
    },
  },
  storage: new PostgresStore({
    connectionString: process.env.DATABASE_URL!,
  }),
  vector: new PgVector({
    connectionString: process.env.DATABASE_URL!,
  }),
});

// export const agentMemory: Memory = new Memory({
//     embedder: fastembed,
//     options: {
//       lastMessages: 10,
//       semanticRecall: true,
//       threads: {
//         generateTitle: true,
//       },
//     },
//     storage: new PostgresStore({
//       connectionString: process.env.DATABASE_URL!,
//     }),
//     vector: createPgVectorConnection(),
//   });
