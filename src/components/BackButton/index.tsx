
import Link from 'next/link';

import styles from './backButton.module.css'

interface Props {
  url: string;
}

const BackButton = ({url}: Props) => {
  return (
    <Link className={styles['backButton']} href={url}>← Back</Link>
  )
}

export default BackButton