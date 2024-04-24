import styles from './styles.module.css'

export default function Title({text}) {
    return (<h1 className={styles.wrapper}>{text}</h1>)
}