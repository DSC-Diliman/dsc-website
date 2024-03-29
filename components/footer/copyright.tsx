import Image from "next/image";
import { useRouter } from "next/router";

export default function Copyright() {
  const { pathname } = useRouter();
  return (
    <div className="text-xs md:mt-12 md:text-sm">
      <div className="mb-5 flex flex-initial flex-col items-center">
        <Image
          src="/images/dsc-upd-logo.png"
          alt="Google Developer Student Clubs UP Diliman Stacked Logo"
          height={50}
          width={327.46}
        />
      </div>
      <p>
        Ⓒ 2023 Google Developer Student Clubs UP Diliman. All Rights Reserved.
      </p>
      {pathname === "/" && (
        <p className="mt-1 italic">Oblation photo by Mila D. Aguilar.</p>
      )}
    </div>
  );
}
