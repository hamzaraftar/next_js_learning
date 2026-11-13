import Link from "next/link";

async function Article({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;
  return (
    <div>
      <h1>News article {articleId}</h1>
      <p>Reading in {lang} </p>
      <br />
      <Link href={`/articles/${articleId}?lang=en`}>English</Link>
      <br />
      <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
      <br />
      <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
    </div>
  );
}

export default Article;
