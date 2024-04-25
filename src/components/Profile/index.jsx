import Title from './Title'
import styles from './styles.module.css'
import ProfileSection from './ProfileSection'
import LinkButton from '../LinkButton'
import { useState } from 'react'


export default function Profile({ avatar, name,bio, email, phone, githubUrl,linkedinUrl, twitterUrl}) {
    const [followText, setFollowText] = useState('Follow')
    
    function HandleClick(ev) {
        alert('Agora você está seguindo')
        setFollowText("Following")
    }    
                                        
    return ( <>
    <div className={styles.container}>
        <img src={avatar} alt={name} className={styles.perfilImg} />
        <Title>
            {name}
            <button
            className={styles.followButton}
                onClick={HandleClick}        
            >{followText}</button> 
        </Title>
        <ProfileSection>{bio}</ProfileSection>
        <ProfileSection>{ phone }</ProfileSection> 
        <ProfileSection>{ email }</ProfileSection> 

        <ProfileSection 
            className={styles.containerBtn}
            id="links-section"
            data-test="some value"
            arial-label = 'social links'
        >
                <LinkButton href={githubUrl}>Github 
                </LinkButton>
                <LinkButton href={ linkedinUrl }>Linkedin </LinkButton>
                <LinkButton href={ twitterUrl }>Twitter</LinkButton>

        </ProfileSection>
    </div>

</>)
}