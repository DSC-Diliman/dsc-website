import Image from "next/image"
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.scss"
import cn from "classnames"

export default function error404() {
  return (
    <Layout title="404">
      <div className={utilStyles.flexrow}>
        <div className={utilStyles.flexcol}>
          <p className={cn(utilStyles.font_bold, utilStyles.text_10xl, utilStyles.text_truewhite, utilStyles.text_shadow_xl)}>404</p>
          <p className={cn(utilStyles.font_bold, utilStyles.text_2xl)}>Oops!</p>
          <p className={utilStyles.text_base}>The page cannot be found</p>
        </div>
        <div>
          <Image
            src="/images/oops.png"
            alt="Oops!"
            width={509}
            height={509}
          />
        </div>
      </div>
    </Layout>
  )
}