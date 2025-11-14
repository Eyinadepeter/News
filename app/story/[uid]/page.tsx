// app/story/[uid]/page.js
import { createClient } from "@/lib/prismicio";
import { PrismicRichText } from "@prismicio/react";

interface StoryPageParams {
  params: {
    uid: string;
  };
}

export default async function StoryPage({ params }: StoryPageParams) {
  const client = createClient();
  const story = await client.getByUID("sport", params.uid);

  return (
    <article>
      <h1 className="text-9xl">{story.data.title}</h1>
      <p>
        <PrismicRichText field={story.data.description} />
      </p>
<p> <\p>
    </article>
  );
}
