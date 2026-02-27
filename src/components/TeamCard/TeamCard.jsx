 function TeamCard() {
  return (
    <>
      <div className=" group teamCard h-2xl mt-7 bg-white w-max rounded border border-white">
        <div className="teamCardImg w-80 h-72 relative object-cover">
          <div className="teamCardFade opacity-0 group-hover:opacity-100 rounded-t-lg w-full h-full absolute bg-black/30 grid place-items-center">
            <div className="teamCardIcons flex">
              <div className="teamCardIcon m-1 w-10 h-10 grid place-items-center rounded-6xl cursor-pointer hover: ">
                <img src="src/assets/Images/icons/Vector.png" alt="" />
              </div>
              <div className="teamCardIcon m-1 w-10 h-10 grid place-items-center rounded-6xl cursor-pointer">
                <img src="src/assets/Images/icons/Vector (1).png" alt="" />
              </div>
              <div className="teamCardIcon m-1 w-10 h-10 grid place-items-center rounded-6xl cursor-pointer">
                <img src="src/assets/Images/icons/Vector (2).png" alt="" />
              </div>
              <div className="teamCardIcon m-1 w-10 h-10 grid place-items-center rounded-6xl cursor-pointer">
                <img src="src/assets/Images/icons/Vector (3).png" alt="" />
              </div>
            </div>
          </div>
           <img
            className="teamCardBg rounded-t-lg w-auto"
            src="src/assets/Images/Teams/a80883dc1ed057e28b4f1bee4e87ed572c7cf693.jpg"
            alt=""
          />
        </div>
        <div className="teamCardInfo mt-5 mb-5 ml-5">
          <h2 className="mt-1 mr-2.5 mb-1 ml-2.5 ">Jenny Wilson</h2>
          <p className="text-gray-500 mt-1 mr-2.5 mb-1 ml-2.5">Ceo & Founder</p>
        </div>
      </div>
    </>
  );
}

export default TeamCard;
