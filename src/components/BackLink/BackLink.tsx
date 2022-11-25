import { Link, LinkProps } from '../Link';

interface BackLinkProps extends LinkProps {
  text?: string;
}

export const BackLink = ({ text = 'Volver al listado', ...props }: BackLinkProps) => (
  <Link href="/" {...props}>
    &larr; {text}
  </Link>
);
