import { ChangeEvent } from "react";

interface InputFieldProps{
  label:string, 
  placeholder:string
  type?:string
  onChange: (event: ChangeEvent<HTMLInputElement>)=> void 
}

export default function InputField({ label, placeholder, type, onChange } :InputFieldProps) {
  const id = label.replace(/\s+/g, "_").toLowerCase();
  if(!type) type="text";
  return (
    <div className="mt-3.5">
      <label htmlFor={id} className="block font-semibold mb-1 text-lg"> {label} </label>
      <input id={id} type={type} placeholder={placeholder} onChange={onChange} className="p-2 w-full block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"></input>
    </div>
  );
}
