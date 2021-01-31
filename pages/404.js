import * as animationData from '../assets/404.json';
import Lottie from "react-lottie";
import styles from '../styles/Error.module.css';

export default function Custom404() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData.default,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return <div className={styles.errorContainer}>
        <Head>
            <title>Hashnode Blog Cards</title>
            <link rel="icon" href="/brand-icon.png" />
        </Head>
        <div className={styles.animationContainer}>
            <Lottie
                options={defaultOptions}
                height={300}
                width={300}
                isStopped={false}
                isPaused={false}
                isClickToPauseDisabled={true}
            />
        </div>

        <div className={styles.textContainer}>
            <div className={styles.headingText}>404</div>
            <div className={styles.subheadingText}>It looks like you're lost...</div>
            <a href="https://hashnode-blog-cards.souravdey777.vercel.app/" className={styles.link}>🚀 GO TO HOMEPAGE &rarr;</a>
        </div>

    </div>
}
