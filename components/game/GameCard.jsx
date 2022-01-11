const GameCard = () => {
  return (
    <div className="bg-purple-500 group rounded-lg w-72  p-2 justify-center drop-shadow-lg hover:drop-shadow-xl">
      <div className="h-auto bg-purple-400 rounded-md group-hover:drop-shadow-lg">
        {/* Card Rarity Highlighter */}
        <div className="flex p-2 justify-between">
          <span className="font-bold text-lg">Birdface</span>
          <span className="">23</span>
        </div>
      </div>
      <div className="px-4 m-2 flex flex-row-reverse ">
        <span className="">1</span>
      </div>
      <div className="h-64 my-2 bg-cyan-200 rounded-lg drop-shadow-lg"></div>
      <div className=" h-auto mt-2 p-2 bg-gray-100 rounded-lg flex flex-col">
        <span className="font-bold text-gray-800"> [Rock/Effect]</span>
        <span className="min-h-16 text-gray-400 text-xs">
          Here comes some description of the card
        </span>
      </div>
      <div></div>
    </div>
  );
};

export default GameCard;
