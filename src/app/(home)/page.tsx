import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <ul className="flex justify-center gap-6 py-2 bg-rose text-white">
        <a>Guitarras</a>
        <a>Violines</a>
        <a>Pianos</a>
        <a>Tambores</a>
      </ul>
      <div>
        <Image
          src={"/guitarras.jpg"}
          width={1920}
          height={508}
          alt="guitars"
          className="w-full h-[30rem]"
        />
      </div>

      <div className="flex justify-center gap-4 my-8">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </main>
  );
}
