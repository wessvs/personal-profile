import Title from './Title'
import styles from './styles.module.css'
import ProfileSection from './ProfileSection'
import LinkButton from '../LinkButton'

export default function Profile({ avatar, name,bio, email, phone, 
                                    githubUrl,linkedinUrl, twitterUrl}) {
    return ( <>
    <div className={styles.container}>
        <img src={avatar} alt={name} className={styles.perfilImg} />
        <Title>
            {name}
            <button>follow</button> 
        </Title>
        <ProfileSection>{bio}</ProfileSection>
        <ProfileSection>{ phone }</ProfileSection> 
        <ProfileSection>{ email }</ProfileSection> 

        <ProfileSection>
            <div className={styles.containerBtn}>
                <LinkButton href={githubUrl}>Github 
                </LinkButton>
                <LinkButton href={ linkedinUrl }>Linkedin </LinkButton>
                <LinkButton href={ twitterUrl }>Twitter</LinkButton>
            </div>
        </ProfileSection>
    </div>

</>)
}