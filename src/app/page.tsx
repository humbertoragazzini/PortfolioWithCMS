import { PrismicRichText, SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Home() {
  const client = createClient();

  // 1. Fetch the page with UID "home"
  const page = await client.getByUID("page", "home");

  // 2. Render the page content
  return (
    <main>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}
