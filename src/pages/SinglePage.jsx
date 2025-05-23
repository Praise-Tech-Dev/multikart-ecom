import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ecomData from "../utils/ecomApi";
import { useNavigate, useParams } from "react-router-dom";
import Subsrcibe from "../components/Subsrcibe";
import FooterBottom from "../components/FooterBottom";


export default function SinglePage() {
  // console.log(ecomData, 'ecomdata');
  const [data, setData] = useState({});
  // const [size, setSize] = useState({})
  //   const navigate = useNavigate()
  const url_params = useParams();

  const getProduct = async () => {
    // console.log(url_params.id);
    // console.log(ecomData.topCollection);
    const dataItem = ecomData.topCollection;
    for (let i = 0; i < dataItem.length; i++) {
      // console.log(typeof(dataItem[i].id))
      // console.log(dataItem[i].id)

      if (url_params.id == dataItem[i].id) {
        //   console.log('the dataItem');
        // console.log(dataItem[i].id)
        console.log(dataItem[i], "dataItem details", typeof dataItem[i].size);

        // dataItem[i].size.map((dataItem)=>{
        //   console.log(dataItem);

        // })
        setData(dataItem[i]);
        break;
      }
    }

    // for (let j=0; j<data.length; j++){
    //   if (url_params.id == data[j].id){
    //     setSize(data[j].size)
    //   console.log(data[j].size)

    //   }
    // }

    // ecomData.topCollection.map((data, index)=> {
    //   if (url_params.id === data.id){
    //     break
    //   }
    //   console.log(data.id)
    // })
    // ecomData.topCollection.get(url_params.id);
  };

  // const getProduct = async () => {

  //   console.log(url_params.id)
  //   await getSingleProduct(data.id).then((Response)=>{
  //     console.log('Single data response', Response.data);
  //     setData(Response.data)
  //   })

  // }
  // const goto = () => {
  //   navigate(`/single/${data.id}`)
  // }
  useEffect(() => {
    getProduct();
  }, []);

  // const product = ecomData.topCollection[0];
  return (
    <div>
      <Header />
      <div>
        <div className="flex gap-3">
          <div>
            <div className="h-[67vh]">
              <img src={data.img1} className="h-full" />
            </div>
            <div className="flex gap-5 p-3">
              <div className="h-[20vh]">
                <img src={data.img1} className="h-full" />
              </div>
              <div className="h-[20vh]">
                <img src={data.img2} className="h-full" />
              </div>
              <div className="h-[20vh]">
                <img src={data.img3} className="h-full" />
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
                {
                  // console.log(typeof(data.size))
                  data.size
                }
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
