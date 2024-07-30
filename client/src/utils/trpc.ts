import { AppRouter } from '../pages/api/trpcRouter';
import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';

function getBaseUrl() {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  if (process.env.RENDER_INTERNAL_HOSTNAME) {
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;
  }

  return `http://localhost:${process.env.PORT ?? 4000}`;
}

export const trpc = createTRPCNext<AppRouter>({
  config(opts) {
    return {
      links: [
        httpBatchLink({
          url: "https://pokedex-api-wheat.vercel.app/trpc",
        }),
      ],
    };
  },
  ssr: false,
});
