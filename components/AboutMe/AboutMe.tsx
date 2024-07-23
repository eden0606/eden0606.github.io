import { FunctionComponent } from 'react';
import styles from './AboutMe.module.scss';
import Image from 'next/image';

const AboutMe: FunctionComponent = () => {
    return (
        <div className={styles.root}>
            {/* <div className={styles.imgWrapper}> */}
            <Image
                src='/images/about/me.png'
                alt='a picture of me'
                width={150}
                height={150}
                className={styles.img}
            />
            {/* </div> */}
            <div className={styles.content}>
                <div className={styles.about}>
                    <h2>hello, i'm eden!</h2>
                    <p>my zest for life lies in 4 main tiers: my cats, good food, traveling, and coding. full stack development is where i'm headed, but i would be remiss to not say that frontend development is my bread and butter of coding!</p></div>
                <p className={styles.emoticon}>(⺣◡⺣)</p>
                <div className={styles.contact}>
                    <h3>get in touch!</h3>
                    <div className={styles.icons}>
                        <a href='https://www.linkedin.com/in/edenchou' target='_blank'>
                            <Image
                                src='/images/icons/linkedin.png'
                                alt='linkedin logo'
                                width={20}
                                height={20} />
                        </a>
                        <a href='mailto:eden.chou0606@gmail.com' target="_blank">
                            <Image
                                src='/images/icons/mail.png'
                                alt='email icon'
                                width={20}
                                height={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;