import React from "react";

const FormInput = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
  textarea = false,
  rows = 4,
  className = "",
  disabled = false,
}) => {
  const baseClasses =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:text-gray-500";

  return (
    <div className={`mb-6 ${className}`}>
      <label className="block text-gray-700 text-sm font-semibold mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          rows={rows}
          disabled={disabled}
          className={baseClasses}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={baseClasses}
        />
      )}
    </div>
  );
};

export default FormInput;
