// /src/app/[lang]/[uid]/page.tsx

import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import CanvasWrapper from "@/components/rtf/atoms/CanvasWrapper";

export default async function Page(props) {
  const params = await props.params;
  const { lang, uid } = params;

  const client = createClient();
  const page = await client.getByUID("page", uid, { lang });

  return (
    <CanvasWrapper>
      <SliceZone slices={page.data.slices} components={components} />
    </CanvasWrapper>
  );
}
