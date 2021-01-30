import * as animationData from '../assets/404.json';
import Lottie from "react-lottie";

export default function Custom404() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData.default,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return <div className="h-screen flex flex-row">
        <div className="m-auto">
            <Lottie
                options={defaultOptions}
                height={600}
                width={600}
                isStopped={false}
                isPaused={false}
            />
        </div>

        <div className="flex justify-start font items-center w-full font-extrabold">404</div>

    </div>
}