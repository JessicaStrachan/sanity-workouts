import { Paytone_One } from 'next/font/google'

const paytone_one = Paytone_One({ subsets: ['latin'], weight: '400', })

import Link from 'next/link';
// import './button.css'
import styles from './button.module.css'


interface Props {
  text: string;
  href: string;
}

const Button = ({ text, href }: Props) => {
  return (
    <Link className={`${paytone_one.className} ${styles['button']}`} href={href}>{text}</Link>
  )
}

export default Button