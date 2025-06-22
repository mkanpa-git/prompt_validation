import { ButtonHTMLAttributes } from 'react';
import { Button as DSButton } from '@city-civics/design-system';

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <DSButton {...props} />;
}
