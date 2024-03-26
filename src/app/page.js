import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const domain = "https://learn.artfactory.org.in"
  const res = await fetch("https://learn.artfactory.org.in/get_all.php", { next: { revalidate: 1 } })
  const data = await res.json();

  return (
    <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 ">
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {data.map(item => {

          return (
            <Link href={`/tutorial/${item.id}`} className="group cursor-pointer" key={item.id}>
              <div className="relative overflow-hidden rounded-md bg-white transition-all hover:scale-105">
                <img src={domain + item.featured_image} alt={item.title} className="w-full aspect-square object-contain rounded-md p-4" />
                <div className="absolute top-0 right-0 mt-2 mr-2 bg-red-500 text-white px-4 py-[0.1] text-sm rounded-full z-10">Easy</div>
              </div>
              <div className="text-lg  font-medium tracking-normal text-black mt-2">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <div className="flex justify-between">
                  <p className="text-gray-600 mb-2 text-sm">{JSON.parse(item.category).category_main}</p>

                  <p className="text-gray-600 mb-2 text-sm">{item.total_steps} Steps</p>
                </div>
              </div>
            </Link>
          );
        })}

      </div>
    </div >
  );
}
