import { X } from "lucide-react";

export function PreferenceTagInput({ label, values, onChange, placeholder }: { label: string; values: string[]; onChange: (values: string[]) => void; placeholder: string }) {
  return (
    <label className="tag-input">{label}
      <input
        placeholder={placeholder}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            const value = event.currentTarget.value.trim();
            if (value) onChange(Array.from(new Set([...values, value])));
            event.currentTarget.value = "";
          }
        }}
      />
      <span className="tag-list">
        {values.map((value) => (
          <button key={value} type="button" onClick={() => onChange(values.filter((item) => item !== value))}>{value}<X size={12} /></button>
        ))}
      </span>
    </label>
  );
}
