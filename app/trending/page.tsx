import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";


export default async function TrendingPage() {
  const client = createClient();

  const documents = await client.getAllByType("sport");
  console.log("Fetched documents:", documents);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold">Trending</h1>
      <div className="max-w-2xl w-full space-y-6">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-2 text-black">
              {doc.data.title}
            </h2>
            <PrismicRichText field={doc.data.description} />
            {doc.data.published}
            <PrismicNextImage field={doc.data.featured_image} />
          </div>
        ))}
      </div>
      <footer className="text-sm text-gray-500">Footer content here</footer>
    </div>
  );
}
