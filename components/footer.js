import Image from "next/image"

export default function Footer() {
  return (
    <footer className="flex flex-col content-center space-y-2 py-10">
      <div className="flex-initial flex flex-col items-center">
        <Image
          src="/images/dsc-upd-logo.png"
          alt="Developer Student Clubs UP Diliman Logo"
          width={183}
          height={30}
        />
      </div>
      <p className="text-sm text-center">2020 Developer Student Clubs UP Diliman. All Rights Reserved.</p>
    </footer>
  )
}
