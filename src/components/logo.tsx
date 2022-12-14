import Image from 'next/image'
import styles from '../../styles/Logo.module.css'

export default function Logo() {
    return (
        <h1 className={styles.title}>
            <Image
                src="/img/logo.png"
                alt="favelog"
                layout="responsive"
                width="300"
                height="200"
            />
        </h1>
    )
}