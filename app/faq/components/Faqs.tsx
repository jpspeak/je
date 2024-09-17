import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/(shared)/components/ui/accordion";
import { getFaqs } from "@/sanity/query/faq";
import React from "react";
import PortableText from "react-portable-text";

async function Faqs({ faqCategory }: { faqCategory: any }) {
  const faqs = await getFaqs({
    categoryId: faqCategory._id,
  });
  return (
    <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[100px]">
      <div className="lg:max-w-[172px]">
        <h2 className="font-portlin text-[30px] lg:text-[40px] leading-none">
          {faqCategory.title}
        </h2>
        <p className="mt-3 lg:mt-[18px] text-xs lg:text-sm text-muted-foreground">
          {faqCategory.description}
        </p>
      </div>
      <div className="border border-input rounded self-start w-full">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq._id} value={faq._id}>
              <AccordionTrigger className="text-xs lg:text-lg !no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="p-3 lg:p-0">
                {faq.answer && (
                  <PortableText
                    content={faq.answer}
                    className="text-sm lg:text-lg leading-normal [&_*_a]:underline"
                  />
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Faqs;