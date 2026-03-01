import React from 'react';

interface InputFieldProps {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  icon: React.ReactNode;
  autoComplete?: string;
}

const InputField: React.FC<InputFieldProps> = ({ 
  id, 
  type, 
  placeholder, 
  value, 
  onChange, 
  label, 
  icon,
  autoComplete = 'on' 
}) => (
  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor={id}>
      {label}
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </div>
      <input
        id={id}
        name={id}
        type={type}
        required
        autoComplete={autoComplete}
        className="appearance-none bg-gray-50 border border-gray-300 text-gray-950 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-3 transition-colors duration-200"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

export default InputField;