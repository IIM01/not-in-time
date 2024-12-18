import Image from "next/image";
import logoBlack from "../../public/NTM_cher.png";
export default function Home() {
  return (
    <div className="py-10">
      <main className="flex flex-col items-center">
        <Image
          className="w-80 mb-10"
          src={logoBlack}
          alt="Логотип группы 'Не вовремя'"
        />
        <div className="flex h-full items-center justify-center">
          <iframe
            src="https://vk.com/video_ext.php?oid=-222493413&id=456239029&hd=2"
            width="363"
            height="714"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
