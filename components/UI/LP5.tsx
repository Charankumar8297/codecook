import Image, { StaticImageData } from "next/image";

type MentorProps = {
  name: string;
  role: string;
  img: StaticImageData | string;
};

export default function LP5({ name, role, img }: MentorProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center rounded-full overflow-hidden w-72 h-72 mx-auto">
        <Image
          src={img}
          alt={name}
          width={428}
          height={428}
          className="rounded-full object-cover"
        />
      </div>

      <h3 className="mt-6 text-xl font-semibold">{name}</h3>
      <p className="mt-2 text-gray-500 text-sm leading-relaxed">{role}</p>
    </div>
  );
}
