import { Input as MuiInput, InputProps } from '@mui/material';
import { FC } from 'react';

interface IInputProps extends InputProps {}

export const Input: FC<IInputProps> = ({ ...props }) => {
  return <MuiInput {...props}></MuiInput>;
};
