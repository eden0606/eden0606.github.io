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
                <p className={styles.about}>hi! i'm eden. my zest for life lies in 4 main tiers: my cats, good food, traveling, and coding. full stack development is where i'm headed, but i would be remiss to not say that frontend development is my bread and butter of coding!</p>
                <p className={styles.emoticon}>(⺣◡⺣)</p>
            </div>
        </div>
    );
}

export default AboutMe;