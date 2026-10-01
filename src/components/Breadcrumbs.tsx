import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 md:px-0 max-w-7xl mx-auto w-full">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-400">
        <li className="flex items-center">
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Startseite</span>
          </button>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-neutral-600" />
              {isLast || !item.href ? (
                <span className="text-neutral-200 font-medium truncate max-w-xs">{item.label}</span>
              ) : (
                <button
                  onClick={() => onNavigate(item.href!)}
                  className="hover:text-white transition-colors text-neutral-400"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
