import { InputHTMLAttributes } from 'react';
import { TextInput } from '@city-civics/design-system';

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <TextInput {...props} />;
}
