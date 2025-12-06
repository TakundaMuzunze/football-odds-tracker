import { useState } from 'react';
import { SIDEBAR_GROUPS } from '../../../constants/sidebarItems';
import { Icon } from '../../ui/icons/Icon';

export function SidebarPanel() {
  const [openGroups, setOpenGroups] = useState<string[]>(() => SIDEBAR_GROUPS.filter((g) => g.title && g.title !== 'Overview').map((g) => g.title!));

  const toggleGroup = (title?: string) => {
    if (!title || title === 'Overview') return;

    setOpenGroups((prev) => (prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]));
  };

  return (
    <aside className="bg-surface flex h-screen w-52 shrink-0 flex-col items-center justify-center gap-6 px-4 py-10">
      <nav className="flex h-full w-full flex-col gap-6">
        {SIDEBAR_GROUPS.map((group, groupIndex) => {
          const isOverview = group.title === 'Overview';
          const isOpen = isOverview || openGroups.includes(group.title ?? '');

          return (
            <div key={groupIndex} className="flex flex-col gap-2">
              {group.title && (
                <button
                  data-testid="sidebar-heading-btn"
                  onClick={() => toggleGroup(group.title)}
                  className={`flex flex-row items-center justify-between px-4 text-xs font-semibold tracking-wider text-gray-400 uppercase transition-colors ${
                    isOverview ? 'cursor-default' : 'cursor-pointer'
                  }`}
                >
                  <span>{group.title}</span>
                  {group.title !== 'Overview' && (
                    <Icon
                      name="chevronDown"
                      className={`size-6 stroke-3 text-gray-400 transition-transform duration-200 ${!isOpen ? '' : 'rotate-180'}`}
                    />
                  )}
                </button>
              )}

              <div
                className={`flex flex-col gap-1 transition-all duration-300 ${
                  isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 overflow-hidden opacity-0'
                }`}
              >
                {group.items.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="text-primary-text flex cursor-pointer items-center gap-3 rounded-md px-4 py-2 transition-colors hover:bg-gray-700/50 hover:text-white"
                  >
                    {item.icon && <Icon name={item.icon} className="size-5 stroke-2 text-white" />}
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

