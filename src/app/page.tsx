import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 space-y-24">

      {/* Welcome Section */}
       {/* LEFT */}
       <div className="text-left">
        <Link
          href="/About-Us"
          className="block text-[80px] font-bold text-yellow-400 hover:text-yellow-300 transition underline"
        >
          About-Us
        </Link>
      <div className="text-left">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to Angel's Hair!
        </h1>
        <p className="max-w-xl">
          We offer a range of hair and accessories for all your styling needs.
          Whether you are looking for a sleek and elegant look or a more
          voluminous style, we have the perfect products for you.
        </p>
      </div>

     

        
      </div>

      {/* RIGHT */}
      <div className="text-right">
        <Link
          href="/Bundles"
          className="block text-[80px] font-bold text-yellow-400 hover:text-yellow-300 transition underline"
        >
          Bundles
        </Link>

        <p className="mt-4 max-w-xl ml-auto">
          Explore our premium hair bundles for every style and occasion.
        </p>
      </div>

      {/* LEFT */}
      <div className="text-left">
        <Link
          href="/Human-Hairs"
          className="block text-[80px] font-bold text-yellow-400 hover:text-yellow-300 transition underline"
        >
          Human-Hairs
        </Link>

        <p className="mt-4 max-w-xl">
          Discover our high-quality human hair collection.
        </p>
      </div>

      {/* RIGHT */}
      <div className="text-right">
        <Link
          href="/Hair-Products"
          className="block text-[80px] font-bold text-yellow-400 hover:text-yellow-300 transition underline"
        >
          Hair-Products
        </Link>

        <p className="mt-4 max-w-xl ml-auto">
          Shop styling products that enhance and protect your look.
        </p>
      </div>

      {/* LEFT */}
      <div className="text-left">
        <Link
          href="/Hair-Accessories"
          className="block text-[80px] font-bold text-yellow-400 hover:text-yellow-300 transition underline"
        >
          Hair-Accessories
        </Link>

        <p className="mt-4 max-w-xl">
          Complete your style with our beautiful accessories.
        </p>
      </div>

    </main>
  );
}
