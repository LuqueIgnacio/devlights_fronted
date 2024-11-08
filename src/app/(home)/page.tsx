import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import productServices from "@/services/ProductsServices";
import categoriesServices from "@/services/CategoriesServices";
import Link from "next/link";

export default async function Home() {
  const products = await productServices.getProducts("limit=5")
  const categories = await categoriesServices.getCategories()
  return (
    <main>
      <ul className="flex justify-center gap-6 py-2 bg-rose text-white">
        {categories?.map(c =>{
          return <Link key={c._id} href={`/store?category=${c._id}`}>{c.name}</Link>
        })}
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
        {products?.map(p =>{
          return <ProductCard key={p._id} product={p}/>
        })}
      </div>
    </main>
  );
}
