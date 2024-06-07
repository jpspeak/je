import { getArticle } from "@/sanity/query/article";
import PortableText from "react-portable-text";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import Header from "@/app/(shared)/components/Header";
import Footer from "@/app/(shared)/components/Footer";

async function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const article = await getArticle({ slug });
  return (
    <>
      <Header />
      <div className="border-[1px] border-muted shadow-sm" />
      <main className="container max-w-[900px] pb-[100px] lg:pb-[152px] pt-[40px] lg:pt-[80px]">
        <SectionOne article={article} />
        <SectionTwo article={article} />
        <SectionThree article={article} />
        <SectionFour article={article} />
      </main>
    </>
  );
}

export default ArticlePage;