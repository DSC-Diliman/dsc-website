import Image from "next/image"
import utilStyles from "../styles/utils.module.scss"

export default function Footer() {
  return (
    <footer>
      <Image
        className={utilStyles.hover}
        src="/dsc-upd-logo.png"
        alt="Developer Student Clubs UP Diliman Logo"
        width={183}
        height={30}
      />
      <p className={utilStyles.my_sm}><small>2020 Developer Student Clubs UP Diliman. All Rights Reserved.</small></p>
    </footer>
  )
}
