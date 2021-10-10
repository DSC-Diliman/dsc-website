import Image from "next/image"

export default function Footer({ children }) {
  return (
    <footer className="flex flex-col content-center space-y-2 py-6 md:py-10 text-xs md:text-sm text-center">
      <div className="flex-initial flex flex-col items-center pb-2">
        <Image
          src="/images/dsc-upd-logo-stacked-small.png"
          alt="Google Developer Student Clubs UP Diliman Stacked Logo"
          height="69px"
          width="200px"
        />
      </div>
      <p className="text-xs">2021 Google Developer Student Clubs UP Diliman.</p>
      <p className="text-xs"> All Rights Reserved.</p>
      {children}
    </footer>
  )
}
