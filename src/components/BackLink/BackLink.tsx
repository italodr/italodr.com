import { Link } from '../Link';

export const BackLink = ({ text = 'Volver al listado', ...props }) => (
  <Link href="/" {...props}>
    &larr; {text}
  </Link>
);
