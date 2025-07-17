This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Starting with the installation of NextJS >> in this case we use 14.2 better for now on RTF
```
npx create-next-app@latest prismic-next-app
```
### Now we install all prismic packages
```
npm install @prismicio/client @prismicio/react @prismicio/next
```
- @prismicio/client: lets you fetch documents from your Prismic repo.

- @prismicio/react: gives you components like <PrismicText /> and <SliceZone />.

- @prismicio/next: adds Next.js-specific support (previews, caching, etc).

### Set up the Prismic client

**This step does two main things:**

- Connects your code to your Prismic repository.

- Defines how URLs should be resolved for Prismic documents.

**Create a file called prismicio.ts in your src/ folder:**
```
touch src/prismicio.ts
```
**Then paste the following into src/prismicio.ts:**

```
import * as prismic from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next';
import type { Route } from '@prismicio/client';
import type { ClientConfig } from '@prismicio/client';

//Replace this with your actual repo name from prismic.io/dashboard
export const repositoryName = 'your-repo-name';

const routes: Route[] = [
  {
    type: 'page',   // Your custom type name in Prismic
    path: '/:uid',  // e.g., "about-us" will resolve to /about-us
  },
];

export function createClient(config: ClientConfig = {}) {
  const client = prismic.createClient(repositoryName, {
    routes,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN, // optional
    ...config,
  });

  enableAutoPreviews({ client });

  return client;
}
```

**Important: Replace this line with your actual Prismic repo name:**
```
export const repositoryName = 'your-repo-name';
```