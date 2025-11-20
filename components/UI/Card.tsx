import Image from "next/image";
import profilePic from '../../public/landingImg/cardpic.png';

export default function Card({propes}: {propes?: string}) {
  return (
    <div className="max-w-sm rounded-2xl  p-6 shadow-sm bg-white">
      <p className="text-lg text-black mb-6">
       {propes}
      </p>

      <div className="flex items-center gap-3">
        <Image
          src={profilePic}          
          alt="Profile"
          width={48}
          height={48}
          className="rounded-full"
        />

        <div>
          <h3 className="font-medium text-black">Nani</h3>
          <p className="text-gray-500 text-sm">Description</p>
        </div>
      </div>
    </div>
  );
}
