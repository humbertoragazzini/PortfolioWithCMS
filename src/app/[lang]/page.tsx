// /src/app/[lang]/page.tsx

import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function Page({ params }) {
  console.log(params);
  const client = createClient();

  const page = await client.getByUID("page", "home", {
    lang: "en-us",
  });

  console.log(page);

  return (
    <main>
      <h1>{page.data.title}</h1>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}
