import { Category } from '../content/clients/default/categories';

interface Props {
  categories: Category[];
  active: string;        // 'all' or category id
  onSelect: (id: string) => void;
}

export default function CategoryTabs({ categories, active, onSelect }: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto px-4 pb-1 mb-4 scrollbar-hide">
      {/* "Toutes" pill */}
      <button
        onClick={() => onSelect('all')}
        className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all"
        style={
          active === 'all'
            ? { backgroundColor: 'var(--color-primary)', color: 'var(--color-primary-fg)' }
            : { backgroundColor: 'var(--color-surface)', color: 'var(--color-text)' }
        }
      >
        Toutes
      </button>

      {categories
        .sort((a, b) => a.order - b.order)
        .map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all"
            style={
              active === cat.id
                ? { backgroundColor: 'var(--color-primary)', color: 'var(--color-primary-fg)' }
                : { backgroundColor: 'var(--color-surface)', color: 'var(--color-text)' }
            }
          >
            {cat.name}
          </button>
        ))}
    </div>
  );
}
