import { getReviewsPageSetting } from "@/sanity/query/reviewsPage";
import Header from "./components/Header";
import SectionOne from "./components/SectionOne";

export const revalidate = 60;

async function ReviewsPage() {
  const reviewsPageSetting = await getReviewsPageSetting();
  return (
    <main>
      <Header articleLink={reviewsPageSetting?.articleLink || ""} />
      <SectionOne />
    </main>
  );
}

export default ReviewsPage;
