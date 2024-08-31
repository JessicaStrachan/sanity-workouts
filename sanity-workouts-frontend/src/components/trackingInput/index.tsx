import { Paytone_One } from 'next/font/google'
 
const paytone_one = Paytone_One({ subsets: ['latin'], weight: '400', })

import './trackingInput.css'

interface Props {
  value: number;
  copy: string;
  placeholder: string;
}

const trackingInput = ({ value, copy, placeholder }: Props) => {
  return (
    <div className="trackingInput">
      <label className="trackingInput__label" htmlFor="tracking-input">{copy}</label>
      <input className="trackingInput__input" type="number" value={value} placeholder={placeholder}/>
    </div>
  )
}

export default trackingInput