import React, { FC } from 'react';

export interface ButtonProps {
  callback?: () => void;
  text: string;
}

export const Button: FC<ButtonProps> = ({ callback, text }) => {
  return (
    <div>
      <button className="button" onClick={callback}>
        {text}
      </button>
    </div>
  );
};
