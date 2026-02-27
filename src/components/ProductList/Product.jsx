function Product() {
  return (
    <>
      <div className="relative group flex m-5 w-max p-1 bg-white rounded border border-gray-300  hover:border-green-900 hover:shadow-xl/30">
        <div className="w-28 h-28">
          <img
            className="w-full"
            src="src/assets/Images/productImg/2099fb565ffbe623e9b927ae3be066c4f975d1fc.jpg"
            alt=""
          />
        </div>
        <div>
          <div className=" text-gray-600">
            <p className="mt-2.5 text-sm group-hover:text-green-800 ">
              Green Apple
            </p>
          </div>
          <div>
            <h4 className="mb-2.5">$14.99</h4>
          </div>
          <div className="flex">
            <img src="src/assets/Images/icons/Group.png" alt="" />
            <img src="src/assets/Images/icons/Group.png" alt="" />
            <img src="src/assets/Images/icons/Group.png" alt="" />
            <img src="src/assets/Images/icons/Group.png" alt="" />
            <img src="src/assets/Images/icons/Group (1).png" alt="" />
          </div>
        </div>
        <div className="absolute right-0 p-1">
          <div className="text-gray-600">
            <p className="mt-2.5 text-sm group-hover:text-green-800 ">
              Green Apple
            </p>
          </div>
          <div className="flex">
           <img src="src/assets/Images/icons/Rectangle.png" alt="" />
           <img src="src/assets/Images/icons/Vector (4).png" alt="" />
           <img src="src/assets/Images/icons/Heart (1).png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
