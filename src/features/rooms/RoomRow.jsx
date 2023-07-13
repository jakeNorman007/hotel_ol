import { formatMoney } from "../../utilities/helpers";

function RoomRow({ room }) {

  const { name, maxCapacity, regularPrice, discount, image } = room;

  return (
    <div role="row" className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-x-[2.4rem] items-center px-[2.4rem]
       py-[1.4rem] border-t-2 border-blue-400">
      <img src={image} className="block w-[6.4rem] aspect-[3_/_2] object-cover object-center translate-x-[-7px]
        scale-150" />
      <p className="text-[1.6rem] font-semibold text-gray-600">{name}</p>
      <p className="font-semibold text-gray-600">Fits up to {maxCapacity} guests</p>
      <p className="font-semibold text-gray-600">{formatMoney(regularPrice)}</p>
      <p className="font-semibold text-green-600">{formatMoney(discount)}</p>
      <button className="bg-blue-400 rounded-md py-2 px-12">Delete</button>
    </div>
  );
}

export default RoomRow;
