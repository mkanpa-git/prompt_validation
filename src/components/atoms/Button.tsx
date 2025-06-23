import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
export default function Button({ className, type = 'button', ...rest }: Props) {
  const classes = ['btn', className].filter(Boolean).join(' ');
  return <button className={classes} type={type} {...rest} />;
}
