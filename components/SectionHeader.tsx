interface Props {
  title: string;
  action?: string;
  onAction?: () => void;
}

export default function SectionHeader({ title, action, onAction }: Props) {
  return (
    <div className="flex items-center justify-between px-4 mb-3">
      <h2 className="font-bold text-base" style={{ color: 'var(--color-text)' }}>
        {title}
      </h2>
      {action && (
        <button
          onClick={onAction}
          className="text-sm font-semibold"
          style={{ color: 'var(--color-primary)' }}
        >
          {action}
        </button>
      )}
    </div>
  );
}
