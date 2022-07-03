import { Button as MuiButton, ButtonProps } from '@mui/material';
import { FC } from 'react';

interface IButtonProps extends ButtonProps {}

export const Button: FC<IButtonProps> = ({ ...props }) => {
  return <MuiButton {...props}>BUTTON</MuiButton>;
};
