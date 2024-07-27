import { FunctionComponent, useEffect, useState } from 'react';
import styles from './IntroModal.module.scss';
import { deleteTypewriter, typewriter } from '@/util/animations';

const IntroModal: FunctionComponent = () => {
    const [isModalVisible, setIsModalVisible] = useState(true);
    const introStrs = ['hello i\'m eden!', 'passionate programmer', 'cat lover', 'foodie', 'welcome!']

    let currentMessageIndex = 0;

    const startTypewriter = () => {
        if (currentMessageIndex < introStrs.length) {
            const currentMessage = introStrs[currentMessageIndex];

            typewriter(currentMessage, 85, 'intro-modal-headline', 0);

            setTimeout(() => {
                deleteTypewriter(60, 'intro-modal-headline');
                currentMessageIndex++;
                setTimeout(startTypewriter, currentMessage.length * 85 + 500);
            }, currentMessage.length * 85 + 500);

            if (currentMessage.includes('welcome')) {
                setTimeout(() => {
                    const cursor = document.getElementById('blinking-cursor');
                    if (cursor) {
                        cursor.style.display = 'none';
                    }

                    setIsModalVisible(false);
                }, 825)
            }
        }
    }

    useEffect(() => {
        if (document.getElementById('intro-modal-headline')) {
            startTypewriter();
        }

        if (document.getElementsByTagName('body')) {
            document.body.addEventListener('click', () => {
                setIsModalVisible(false);
            });
        }
    }, [])

    return (
        // should be section? or article? 
        <div className={isModalVisible ? styles.root : styles.fade} >
            <div className={styles.contentWrapper}>
                {/* {isButtonVisible && (<button className={styles.exitButton}
                    onClick={() => setIsModalVisible(false)}>x
                </button>)} */}
                <div className={styles.intro}>
                    <h1 id='intro-modal-headline' />
                    <span id='blinking-cursor' className={styles.blinkingCursor}></span>
                </div>
            </div>
        </div >
    );
};

export default IntroModal;