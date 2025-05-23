import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ecomData from "../utils/ecomApi";
import { useParams } from "react-router-dom";
import Subsrcibe from "../components/Subsrcibe";
import FooterBottom from "../components/FooterBottom";

export default function SinglePage() {
  const [data, setData] = useState(null);
  const url_params = useParams();

  useEffect(() => {
    const getProductById = () => {
      const product = ecomData.topCollection.find(
        (item) => String(item.id) === String(url_params.id)
      );
      setData(product || null);
    };
    getProductById();
  }, [url_params.id]);

  if (!data) {
    return (
      <div>
        <Header />
        <div className="p-10 text-center">Loading...</div>
        <Footer />
        <FooterBottom />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div>
        <div className="flex gap-3">
          <div>
            <div className="h-[67vh]">
              <img src={data.img1} className="h-full" alt={data.name} />
            </div>
            <div className="flex gap-5 p-3">
              <div className="h-[20vh]">
                <img src={data.img1} className="h-full" alt={data.name} />
              </div>
              <div className="h-[20vh]">
                <img src={data.img2} className="h-full" alt={data.name} />
              </div>
              <div className="h-[20vh]">
                <img src={data.img3} className="h-full" alt={data.name} />
              </div>
            </div>
          </div>

          <div>
            <h2 className="uppercase text-[25px] font-medium">{data.name}</h2>
            <div className="flex">
              <del>{data.discount}</del>
              <p className="text-[#ff4c3b] px-2">{data.off} Off</p>
            </div>
            <h2>{data.price}</h2>
            <div>colour</div>
            <div>
              <div>Select Size</div>
              <div className="border">
                {Array.isArray(data.size)
                  ? data.size.join(", ")
                  : data.size}
              </div>
            </div>
            <div>
              <p>Quantity</p>
              {data.quantity}
            </div>
            <div className="">
              <button className="uppercase text-white bg-[#ff4c3b] px-3 py-2 mr-2">add to cart</button>
              <button className="uppercase text-white bg-[#ff4c3b] px-3 py-2">buy now</button>
            </div>
            <div>
              <h4>Product Details</h4>
              <p className="w-[30vw] text-sm">{data.productDetails}</p>
            </div>
          </div>
        </div>
        <div className="p-5 text-sm">
          <h2 className="uppercase">description</h2>
          <p>{data.desc}</p>
        </div>
        
      </div>

      <Subsrcibe />
      <Footer />
      <FooterBottom />
    </div>
  );
}
