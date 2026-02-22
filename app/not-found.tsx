import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import Image from "next/image";
import NextLink from "next/link";

const NotFound = () => {
    return ( 
      <div className="flex items-center justify-center h-screen">
        <div className="border p-8 pt-12 pb-12 rounded-lg shadow-md text-center border-gray-200">
        <div className="flex flex-col items-center gap-4">
          <Image src="/images/logo.svg" alt='Prostore Logo' width={64} height={64} />
          <h1 className="text-4xl font-bold ">Not Found</h1>
            <p className="text-red-500">The page you are looking for does not exist.</p>
            
            
              <NextLink href="/">
            <Button variant="default" className="mt-4">
                  <Link size={20} /> Back to Home
            </Button>
              </NextLink>
        </div>
        </div>
      </div>  
     );
}
 
export default NotFound;