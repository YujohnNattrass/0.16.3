
import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { LibSQLStore } from '@mastra/libsql';
import * as agents from './agents';
import { PostgresStore } from '@mastra/pg';

export const mastra = new Mastra({
  agents: { ...agents },
  storage: new PostgresStore({
    connectionString: process.env.DATABASE_URL!,
  }),
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'info',
  }),
  // bundler: {
  //   externals: ['@mastra/fastembed']
  // }
});
