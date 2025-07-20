import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";
import type { Route } from "@prismicio/client";
import type { ClientConfig } from "@prismicio/client";

//Replace this with your actual repo name from prismic.io/dashboard
export const repositoryName = process.env.PRISMIC_REPOSITORY_NAME!;

const routes: Route[] = [
  {
    type: "page",
    path: "/:uid",
  },
];

export function createClient(config: ClientConfig = {}) {
  const client = prismic.createClient(repositoryName, {
    routes,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    ...config,
  });

  enableAutoPreviews({ client });

  return client;
}
