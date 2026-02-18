import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return(
    <div className="p-8"> 
    <main> 
    <Link 
         href="/About-Us" 
         className="mt-10 block text-[80px] 
                    font-bold  text-yellow-400 
                    hover:text-yellow-300
                    transition-colors duration-300 underline">
              About-Us
      </Link>
    <h1 className="text-3xl font-bold mb-4">
      Welcome to our Angel's hair! 
    </h1>
      <p className="mb-6 whitespace-pre-line">
         We offer a range of hair and accessories<br />
         for all your styling needs. Whether you <br />
         are looking for a sleek and elegant look<br />
         or a more voluminous style, we have the <br />
         perfect products for you.Browse our <br />
         collection and find the perfect pieces<br />
         to enhance your beauty. 
      </p>

      
      </main> 
      </div> 
      );
    }
