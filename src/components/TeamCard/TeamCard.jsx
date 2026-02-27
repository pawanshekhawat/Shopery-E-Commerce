 function TeamCard() {
  return (
    <div className="group mt-7 bg-white w-max rounded border border-white overflow-hidden">

      <div className="relative w-80 h-72">

        <img
          src="src/assets/Images/Teams/a80883dc1ed057e28b4f1bee4e87ed572c7cf693.jpg"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30 opacity-0 
                        group-hover:opacity-100
                        transition-opacity duration-300
                        flex items-center justify-center">
          <div className="flex gap-2">

            <div className="w-10 h-10 grid place-items-center rounded-full cursor-pointer hover:bg-green-500 transition">
              <img src="src/assets/Images/icons/Vector.png" alt="" />
            </div>

            <div className="w-10 h-10 grid place-items-center rounded-full cursor-pointer hover:bg-green-500 transition">
              <img src="src/assets/Images/icons/Vector (1).png" alt="" />
            </div>

            <div className="w-10 h-10 grid place-items-center rounded-full cursor-pointer hover:bg-green-500 transition">
              <img src="src/assets/Images/icons/Vector (2).png" alt="" />
            </div>

            <div className="w-10 h-10 grid place-items-center rounded-full cursor-pointer hover:bg-green-500 transition">
              <img src="src/assets/Images/icons/Vector (3).png" alt="" />
            </div>

          </div>
        </div>
      </div>

      <div className="my-5 ml-5">
        <h2 className="mb-1">Jenny Wilson</h2>
        <p className="text-gray-500">Ceo & Founder</p>
      </div>
    </div>
  );
}

export default TeamCard;