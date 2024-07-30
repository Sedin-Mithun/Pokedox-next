import { initTRPC } from '@trpc/server';
import { appRouter } from '../trpcRouter';
import { createNextApiHandler } from '@trpc/server/adapters/next';

const t = initTRPC.create();

export default createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});