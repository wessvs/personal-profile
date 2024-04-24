import styles from './styles.module.css'

export default function Profile({ avatar, name,bio, email, phone, 
                                    githubUrl,linkedinUrl, twitterUrl}) {
    return ( <>
    <div className={styles.container}>
        <img src={avatar} alt={name} className={styles.perfilImg} />
        <h1 className={styles.title}>{ name }</h1>
        <p>{ bio } </p>
        <p>{ phone }</p>
        <p>{ email }</p>
        <div className={styles.containerBtn}>
            <a className={styles.btn} href={ githubUrl }>GitHub</a>
            <a className={styles.btn} href={ linkedinUrl }>Linkedin</a>
            <a className={styles.btn} href={ twitterUrl }>Twitter</a>
        </div>
    </div>

</>)
}