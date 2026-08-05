import { Accordion } from "@/components/ui/Accordion";
import { CONTACT_FAQS } from "@/lib/contact-content";

export function ContactFaq() {
  return <Accordion items={CONTACT_FAQS} />;
}
