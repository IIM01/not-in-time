import Banner from "@/components/banner";
import Member from "@/components/member";
import Section from "@/components/section";
import Image from "next/image";
import sanich from "../../public/sanichplotniy.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Vk } from "@/components/svg";

export default function Home() {
  return (
    <>
      <Banner />
      <Section id="about" title="О нас">
        <div className="flex justify-center items-center flex-col md:flex-row gap-5 md:items-stretch">
          <p className={cn("text-base max-w-xl", "sm:text-lg", "md:text-xl")}>
            Здесь напишем что-нибудь хорошее про нас, какие молодцы и подающие
            надежды,а еще может и картиночку квадратную забубеню какую-нибудь
          </p>

          <Image src={sanich} alt="группа" className={cn("w-40")} />
        </div>
      </Section>
      <Section id="promo" title="Промо">
        <div className="flex justify-center gap-5 flex-wrap">
          <iframe
            width="460"
            height="280"
            src="https://www.youtube.com/embed/a3JSbOt7CLo?si=V5e8HAu3N4X-LdHx"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            width="460"
            height="280"
            src="https://www.youtube.com/embed/_XI1DD_vJuY?si=EcCDS6za6d3ZAuIR"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </Section>
      <Section title="Состав группы">
        <div className="flex justify-between flex-wrap gap-y-5">
          <Member
            name="Ярослав"
            instrument="Гитара, вокал"
            className={cn("basis-full", "md:basis-1/2", "lg:basis-auto")}
          />
          <Member
            name="Ильдар"
            instrument="Гитара"
            className={cn("basis-full", "md:basis-1/2", "lg:basis-auto")}
          />
          <Member
            name="Александр"
            instrument="Барабаны"
            className={cn("basis-full", "md:basis-1/2", "lg:basis-auto")}
          />
          <Member
            name="Марк"
            instrument="Бас-гитара"
            className={cn("basis-full", "md:basis-1/2", "lg:basis-auto")}
          />
        </div>
      </Section>
      <Section id="repertoire" title="Репертуар">
        <div className="flex justify-center items-center flex-col md:flex-row gap-5 md:items-stretch">
          <div className="max-w-xl">
            <p className={cn("text-base", "sm:text-lg", "md:text-xl")}>
              Здесь что-нибудь напишем про репертуар, можно как у ДРУГИХ ГРУПП
              но своими словами
            </p>
            <p className="font-bold">
              Нажмите на Александра, чтобы он поделился с вами репертуаром
              (сделаю позже)
            </p>
          </div>
          <Image src={sanich} alt="группа" className={cn("w-40")} />
        </div>
      </Section>
      <Section title="Часто задаваемые вопросы">
        <Accordion
          type="single"
          collapsible
          className="w-full md:w-1/2 md:mx-auto"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">
              Что нужно сделать?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-xl">
              Составить список часто задаваемых вопросов от пишущих нам людей а
              потом добавить в этот аккордеон
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl">
              Is it styled?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-xl">
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl">
              Is it animated?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-xl">
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>
      <Section id="contacts" title="Где с нами можно связаться">
        <div className={cn("flex gap-5 justify-center flex-wrap")}>
          <Link className="bg-white p-1" href="/">
            <Vk className="w-10 h-10 md:w-20 md:h-20" />
          </Link>
          <Link className="bg-white p-1" href="/">
            <Vk className="w-10 h-10 md:w-20 md:h-20" />
          </Link>
          <Link className="bg-white p-1" href="/">
            <Vk className="w-10 h-10 md:w-20 md:h-20" />
          </Link>
          <Link className="bg-white p-1" href="/">
            <Vk className="w-10 h-10 md:w-20 md:h-20" />
          </Link>
        </div>
      </Section>
    </>
  );
}
