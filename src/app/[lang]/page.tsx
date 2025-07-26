// /src/app/[lang]/page.tsx

import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function Page({ params }) {
  const client = createClient();

  const page = await client.getByUID("page", "home", {
    lang: params.lang,
  });

  return (
    <main>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}
