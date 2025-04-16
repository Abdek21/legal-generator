'use client';
import { InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

type Props = {
  icon: IconType;
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export default function FormField({ icon: Icon, label, name, placeholder, value, onChange }: Props) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-gray-700 dark:text-gray-200 font-medium mb-1">
        {label}
      </label>
      <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-800">
        <Icon className="text-gray-500 dark:text-gray-400 mr-2" />
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-gray-800 dark:text-white"
        />
      </div>
    </div>
  );
}