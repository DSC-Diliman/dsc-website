import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.scss"
import cn from "classNames"

export default function Nav() {
  return (
    <nav className={cn(utilStyles.frosted, utilStyles.box_shadow)}>
      <Link href="/">
        <Image
          className={utilStyles.hover}
          src="/images/dsc-upd-logo.png"
          alt="Developer Student Clubs UP Diliman Logo"
          width={183}
          height={30}
          quality={100}
        />
      </Link>

      <div />

      <div>
        {[
          { page: "About", style: utilStyles.style1_blue },
          { page: "Team", style: utilStyles.style1_red },
          { page: "Events", style: utilStyles.style1_yellow },
          { page: "Projects", style: utilStyles.style1_green }].map(e => (
            <Link key={e.page.toLowerCase()} href={e.page.toLowerCase()}>
              <button className={e.style}>{e.page}</button>
            </Link>
          ))}
      </div>
    </nav>
  )
}