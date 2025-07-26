// /src/app/[lang]/[uid]/page.tsx

import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function Page({ params }) {
  const { lang, uid } = params;

  const client = createClient();
  const page = await client.getByUID("page", uid, { lang });

  return (
    <main>
      <h1>{page.data.title}</h1>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}
