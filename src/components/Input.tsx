import React from 'react';
import { TextInput } from '../styles/CoreStyles'

interface InputProps {
  value: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <TextInput
      type="text"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default React.memo(Input);
