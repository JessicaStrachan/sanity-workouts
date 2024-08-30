
import styles from './banner.module.css'
import Link from 'next/link';

import './backButton.css'

interface Props {
  url: string;
}

const BackButton = ({url}: Props) => {
  return (
    <Link className="backButton" href={url}>← Back</Link>
  )
}

export default BackButton