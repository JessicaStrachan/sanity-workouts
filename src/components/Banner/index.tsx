import { Paytone_One } from 'next/font/google'
// import './banner.css'
import styles from './banner.module.css'

const paytone_one = Paytone_One({ subsets: ['latin'], weight: '400', })

interface Props {
  heading?: string;
  subHeading?: string;
  size?: string;
}

// const bannerModifierClass = (size?: string) => {
//  return size ? `banner--${size}` : ''
// }

// className={` ${`banner`} ${bannerModifierClass(size)} 
const Banner = ({heading, subHeading, size}: Props) => {
  return (
    <section  className={styles['banner']}>
      <div  className={styles['banner__container']}>
        <h1 className={`${paytone_one.className} ${`banner__heading`}`}>{heading}</h1>
        {subHeading ? (<p  className={styles['banner__copy']}>{subHeading}</p>) : null}
      </div>
    </section>
  )
}

export default Banner