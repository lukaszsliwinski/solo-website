import Image from "next/image";

type PolaroidProps = {
  photo: string;
  photoClass?: string;
}

export default function Polaroid({ photo, photoClass }: PolaroidProps) {
  return (
    <div className="p-3 pb-12 bg-white shadow">
      <Image
        src={photo}
        width={240}
        height={240}
        alt="photo"
        className={photoClass}
      />
    </div>
  );
}