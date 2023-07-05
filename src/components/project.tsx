import Image from "next/image";

interface Props {
  name: string;
  description: string;
  image: string;
  links: {
    name: string;
    href: string;
    icon?: React.ReactNode;
  }[];
}

export default function Project({ name, description, image, links }: Props) {
  return (
    <article className="grid grid-rows-2 overflow-hidden text-black bg-white rounded-md w-[24rem] h-[26rem] group">
      <div className="relative">
        <Image className="object-cover" src={image} alt={image} fill sizes="100vw" />
        {links.length > 0 && (
          <div className="absolute items-center justify-center hidden w-full h-full gap-4 text-white bg-black group-hover:flex bg-opacity-60">
            {links.map((link) => (
              <a
                key={link.name}
                title={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between gap-4 p-4">
        <div className="flex flex-col gap-2">
          <h4 className="font-bold">{name}</h4>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
}
