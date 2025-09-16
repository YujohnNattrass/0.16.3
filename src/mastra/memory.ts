import { Memory } from "@mastra/memory";
import { fastembed } from "@mastra/fastembed";

export const agentMemory = new Memory({
  embedder: fastembed,
  options: {
    lastMessages: 10,
    semanticRecall: true,
    threads: {
      generateTitle: true,
    },
  },
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
