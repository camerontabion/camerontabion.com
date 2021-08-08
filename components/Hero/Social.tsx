import { ReactNode } from 'react';

export const Social = ({ href, icon }: Props) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

interface Props {
  href: string;
  icon: ReactNode;
}
