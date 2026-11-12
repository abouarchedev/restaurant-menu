interface Props {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = 'Rechercher...' }: Props) {
  return (
    <div
      className="flex items-center gap-3 rounded-full px-5 py-3 mx-4 mb-4"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      {/* Search icon */}
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="var(--color-muted)" strokeWidth={2}>
        <circle cx="11" cy="11" r="8" />
        <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-sm font-sans"
        style={{ color: 'var(--color-text)' }}
      />
    </div>
  );
}
