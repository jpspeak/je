import { getArticlesCategories } from "@/sanity/query/article";
import Link from "next/link";

async function Categories() {
  const categories = await getArticlesCategories();

  return (
    <div className="border-t border-input pt-[30px] mt-[40px]">
      <h2 className="font-portlin text-[30px]">CATEGORIES</h2>
      <ul className="flex flex-col gap-4 text-muted-foreground text-sm lg:text-base mt-4 lg:mt-[28px]">
        {categories.map((category) => (
          <Link
            href={`/articles?category=${category.slug?.current}`}
            key={category._id}
          >
            <li>{category.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Categories;