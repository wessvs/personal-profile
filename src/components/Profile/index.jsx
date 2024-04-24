import Title from '../Title'
import styles from './styles.module.css'

export default function Profile({ avatar, name,bio, email, phone, 
                                    githubUrl,linkedinUrl, twitterUrl}) {
    return ( <>
    <div className={styles.container}>
        <img src={avatar} alt={name} className={styles.perfilImg} />
        <Title text={name} />
        <p>{ bio } </p>
        <p>{ phone }</p>
        <p>{ email }</p>
        <div className={styles.containerBtn}>
            <a className={styles.btn} href={ githubUrl } target='_blank'>GitHub</a>
            <a className={styles.btn} href={ linkedinUrl } target='_blank'>Linkedin</a>
            <a className={styles.btn} href={ twitterUrl } target='_blank'>Twitter</a>
        </div>
    </div>

</>)
}