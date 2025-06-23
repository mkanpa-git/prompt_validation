import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
export default function Input({ className, ...rest }: Props) {
  const classes = ['input', className].filter(Boolean).join(' ');
  return <input className={classes} {...rest} />;
}
