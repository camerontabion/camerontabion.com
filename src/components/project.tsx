import Image from "next/image";

interface Props {
  name: string;
  description: string;
  image: string;
  links: {
    name: string;
    href: string;
  }[];
}

export default function Project({ name, description, image, links }: Props) {
  return (
    <article className="flex flex-col overflow-hidden text-black bg-white border-2 border-white rounded-md w-[24rem] h-[26rem]">
      <div className="relative h-48">
        <Image className="object-cover" src={image} alt={image} fill sizes="100vw" />
      </div>
      <div className="flex flex-col justify-between gap-4 p-4 grow">
        <div className="flex flex-col gap-4">
          <h4 className="font-bold">{name}</h4>
          <p>{description}</p>
        </div>
        <div className="flex gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              className="px-4 py-2 text-white rounded-md bg-primary"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
