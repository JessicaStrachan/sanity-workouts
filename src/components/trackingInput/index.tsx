import { Paytone_One } from 'next/font/google'
 
const paytone_one = Paytone_One({ subsets: ['latin'], weight: '400', })

import styles from './trackingInput.module.css'

interface Props {
  value: number;
  copy: string;
  placeholder: string;
}

const trackingInput = ({ value, copy, placeholder }: Props) => {
  return (
    <div className="trackingInput">
      <label className={styles['trackingInput__label']} htmlFor="tracking-input">{copy}</label>
      <input className={styles['trackingInput__input']} type="number" value={value} placeholder={placeholder}/>
    </div>
  )
}

export default trackingInput