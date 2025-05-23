import Banner from '@/components/banner';
import Member from '@/components/member';
import Section from '@/components/section';
import Image from 'next/image';
import boys from '../../public/boys.jpg';
import gear from '../../public/gear.jpg';
import costumes from '../../public/costumes.jpg';
import ale from '../../public/ale.jpg';
import alex from '../../public/alex.jpg';
import tilda from '../../public/tilda.jpg';
import yarost from '../../public/yarost.jpg';
import mark from '../../public/mark.jpg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Vk, Telegram } from '@/components/svg';

export default function Home() {
  return (
    <>
      <Banner />
      <Section id="about" title="О нас">
        <div className="flex flex-col gap-5 mb-5 sm:mb-0 sm:gap-0 sm:flex-row sm:items-stretch">
          <p
            className={cn(
              'text-sm flex justify-center items-center',
              'sm:text-base sm:w-1/2',
              'lg:text-3xl'
            )}
          >
            <span className="w-full sm:w-3/4">
              Молодые и талантливые исполнители уже два года восполняют Ваши
              запасы позитивных эмоций на свадьбах, корпоративах, вечеринках и
              просто посиделках вечером в приятном заведении.
            </span>
          </p>

          <Image
            src={boys}
            alt="Группа"
            className={cn(
              'max-w-[480px] w-full mx-auto',
              'sm:w-1/2 max-w-auto'
            )}
          />
        </div>
        <div className="flex flex-col-reverse gap-5 mb-5 sm:mb-0 sm:gap-0 sm:flex-row sm:items-stretch">
          <Image
            src={gear}
            alt="Оборудование"
            className={cn(
              'max-w-[480px] w-full mx-auto',
              'sm:w-1/2 max-w-auto'
            )}
          />
          <p
            className={cn(
              'text-sm flex justify-center items-center',
              'sm:text-base sm:w-1/2',
              'lg:text-3xl'
            )}
          >
            <span className="w-full sm:w-3/4">
              Имеем своё оборудование, что обеспечивает качественное звучание,
              которое задает настроение мероприятию. Если коротко - две
              электрогитары, бас гитара, барабаны, микрофоны.
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-5 mb-5 sm:mb-0 sm:gap-0 sm:flex-row sm:items-stretch">
          <p
            className={cn(
              'text-sm flex justify-center items-center',
              'sm:text-base sm:w-1/2',
              'lg:text-3xl'
            )}
          >
            <span className="w-full sm:w-3/4">
              У нас есть свой стиль, однако на праздники мы можем подготовить
              особые костюмы по запросу, зная, что слушатель любит не только
              ушами :) Подберём реквизит и костюмы под Вашу тематику.
            </span>
          </p>
          <Image
            src={costumes}
            alt="Стиль"
            className={cn(
              'max-w-[480px] w-full mx-auto',
              'sm:w-1/2 max-w-auto'
            )}
          />
        </div>
      </Section>
      {/* {<Section id="promo" title="Промо">
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
      </Section>} */}
      <Section title="Состав группы">
        <div className="flex justify-between flex-wrap gap-y-5">
          <Member
            name="Ярослав"
            instrument="Гитара, вокал"
            imageUrl={yarost}
            className={cn('basis-full', 'md:basis-1/2', 'lg:basis-auto')}
          />
          <Member
            name="Ильдар"
            instrument="Гитара"
            imageUrl={tilda}
            className={cn('basis-full', 'md:basis-1/2', 'lg:basis-auto')}
          />
          <Member
            name="Александр"
            imageUrl={alex}
            instrument="Барабаны"
            className={cn('basis-full', 'md:basis-1/2', 'lg:basis-auto')}
          />
          <Member
            name="Марк"
            imageUrl={mark}
            instrument="Бас-гитара"
            className={cn('basis-full', 'md:basis-1/2', 'lg:basis-auto')}
          />
        </div>
      </Section>
      {/* {<Section id="repertoire" title="Репертуар">
        <div className="flex justify-center items-center flex-col md:flex-row gap-5 md:items-stretch">
          <div className="max-w-xl">
            <p className={cn('text-base', 'sm:text-lg', 'md:text-xl')}>
              Здесь что-нибудь напишем про репертуар, можно как у ДРУГИХ ГРУПП
              но своими словами
            </p>
            <p className="font-bold">
              Нажмите на Александра, чтобы он поделился с вами репертуаром
              (сделаю позже)
            </p>
          </div>
          <Image src={sanich} alt="группа" className={cn('w-40')} />
        </div>
      </Section>} */}
      <Section id="faq" title="Часто задаваемые вопросы">
        <Accordion
          type="single"
          collapsible
          className="w-full md:w-1/2 md:mx-auto"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">
              <p>Сколько стоит выступление?</p>
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-xl">
              <p>
                Стандартный концерт в г. Челябинск - 30000₽ за 4 блока по 6
                песен каждый.
              </p>
              <p>В остальных случаях - цена договорная.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl">
              <p>Вы выезжаете в другие города или места за пределом города?</p>
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-xl">
              <p>Да</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl">
              <p>Сколько времени занимает выступление?</p>
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-xl">
              <p>
                Стандартно мы предлагаем 4 блока по 6 песен, что занимает
                примерно 2-3 часа вместе с перерывами.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl">
              <p>Имеется ли у вас оборудование?</p>
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-xl">
              <p>
                У нас есть основное оборудование, нам нужны лишь колонки.
                Вопросом их предоставления может заняться организатор или мы
                можем арендовать их сами. Возможно, колонки уже присутствуют на
                площадке.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>
      <Section id="contacts" title="Где с нами можно связаться">
        <Image
          src={ale}
          alt="Контакты"
          className="max-w-[320px] w-full mx-auto mb-5"
        />
        <div className={cn('flex gap-5 justify-center flex-wrap')}>
          <Link
            className="bg-white p-2 rounded-full"
            href="https://vk.com/notintime74?from=groups"
          >
            <Vk className="w-10 h-10" />
          </Link>
          <Link
            className="bg-white p-2 rounded-full"
            href="https://t.me/chupapimuniani"
          >
            <Telegram className="w-10 h-10" />
          </Link>
        </div>
      </Section>
    </>
  );
}
