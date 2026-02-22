import Image from "next/image";
import loader from "@/assets/loader.gif"
const LoadingPage = () => {
    return (<div className="flex items-center justify-center h-screen">
        <Image src={loader} alt="Loading..." width={128} height={128} />
    </div> );
}
 
export default LoadingPage;