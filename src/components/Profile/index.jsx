import styles from './styles.module.css'

export default function Profile({ avatar, name,bio, email, phone, 
                                    githubUrl,linkedinUrl, twitterUrl}) {
    return ( <>
    <div className={styles.container}>
        <img src={avatar} alt={name} />
        <h1>{ name }</h1>
        <p>{ bio } </p>
        <p>{ phone }</p>
        <p>{ email }</p>
        <a href={ githubUrl }>GitHub</a>
        <a href={ linkedinUrl }>Linkedin</a>
        <a href={ twitterUrl }>Twitter</a>
    </div>

</>)
}