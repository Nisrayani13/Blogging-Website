import React from "react";

interface InputFieldProps{
  label:string, 
  placeholder:string
}

export default function InputField({ label, placeholder } :InputFieldProps) {
  const id = label.replace(/\s+/g, "_").toLowerCase();
  return (
    <div className="mt-3.5">
      <label htmlFor={id} className="block font-semibold mb-1 text-lg"> {label} </label>
      <input id={id} type="text" placeholder={placeholder} className="p-2 w-full block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded"></input>
    </div>
  );
}
