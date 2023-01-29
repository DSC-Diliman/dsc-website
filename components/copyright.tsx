import Image from "next/image";

export default function Copyright() {
  return (
    <div className="text-xs">
      <div className="flex-initial flex flex-col items-center pb-5">
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
    </div>
  );
}
