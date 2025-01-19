import { clothes } from "../DummyData/data";

export default function Women() {
  return (
    <>
      <div className="pl-4 text-xl font-semibold md:pl-6 md:pt-4">
        Women Clothing
      </div>

      <div className="grid grid-cols-2 p-2 md:grid-cols-4">
        {clothes.map((data, index) => {
          return (
            <div className="max-w-sm overflow-hidden bg-white p-2" key={index}>
              <div className="relative">
                <img
                  src={data.image}
                  alt="Vanilla Dynamic Duo Deal"
                  className="w-full rounded md:h-60"
                />
                <span className="absolute left-2 top-2 rounded bg-black px-2 py-1 text-xs font-bold text-white">
                  Sale
                </span>
              </div>
              <div className=" md:p-4">
                <div className="text-sm text-gray-800 md:text-lg md:font-semibold">
                  {data.product}
                </div>
                <div className="flex items-center space-x-2 md:mt-2">
                  <span className="text-xs text-gray-400 line-through">
                    {data.former}
                  </span>
                  <span className="text-sm font-bold text-red-600 md:text-xl">
                    {data.new}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
