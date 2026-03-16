import React from 'react';

interface SectionHeaderProps {
  title: string;
}

interface ExperienceData {
  company: string;
  role: string;
  period: string;
  logo: string;
  url: string;
}

interface Role {
  title: string;
  period: string;
}

interface LeadershipData {
  organization: string;
  logo: string;
  url: string;
  type?: "grouped" | "single";
  role?: string;
  period?: string;
  roles?: Role[];
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => (
  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 border-b border-gray-50 pb-2 mb-7">
    {title}
  </h2>
);

export const ExperienceItem: React.FC<{ item: ExperienceData }> = ({ item }) => (
  <a 
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center p-5 -mx-2 md:p-3.5 md:-mx-3.5 rounded-xl hover:bg-black/[0.04] transition-all duration-300"
  >
    <div className="flex items-center gap-4 w-full">
      <div className="w-[38px] h-[38px] shrink-0 flex items-center justify-center overflow-hidden">
        <img 
          src={item.logo} 
          alt={item.company} 
          className="w-full h-full object-contain mix-blend-multiply"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { 
            const target = e.target as HTMLImageElement;
            target.src = `https://ui-avatars.com/api/?name=${item.company}&background=f3f4f6&color=9ca3af`; 
          }}
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-baseline justify-between w-full gap-1">
        <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-2.5">
          <h3 className="font-bold text-[16px] group-hover:text-black transition-colors leading-tight">
            {item.company}
          </h3>
          <p className="text-[14.5px] text-gray-500 font-medium leading-tight">
            {item.role}
          </p>
        </div>
        <span className="text-[11.5px] text-gray-400 tabular-nums font-semibold uppercase tracking-tight whitespace-nowrap">
          {item.period}
        </span>
      </div>
    </div>
  </a>
);

export const LeadershipItem: React.FC<{ item: LeadershipData }> = ({ item }) => {
  const isGrouped = item.type === "grouped";

  return (
    <div className="group p-5 -mx-2 md:p-3.5 md:-mx-3.5 rounded-xl transition-all duration-300 hover:bg-black/[0.04]">
      <div className={isGrouped ? "space-y-4" : ""}>
        <a 
          href={item.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-4 w-full"
        >
          <div className="w-[38px] h-[38px] shrink-0 flex items-center justify-center overflow-hidden">
            <img 
              src={item.logo} 
              alt={item.organization} 
              className="w-full h-full object-contain mix-blend-multiply" 
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-baseline justify-between w-full gap-1">
            <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-2.5">
              <h3 className="font-bold text-[16px] group-hover:text-black leading-tight">
                {item.organization}
              </h3>
              {!isGrouped && item.role && (
                <p className="text-[14.5px] text-gray-500 font-medium leading-tight">
                  {item.role}
                </p>
              )}
            </div>
            {!isGrouped && item.period && (
              <span className="text-[11.5px] text-gray-400 tabular-nums font-semibold uppercase tracking-tight whitespace-nowrap">
                {item.period}
              </span>
            )}
          </div>
        </a>

        {isGrouped && item.roles && (
          <div className="relative ml-[18px] pl-9 border-l border-gray-100 space-y-5 my-2">
            {item.roles.map((role, rIdx) => (
              <div key={rIdx} className="relative py-1">
                <div className="absolute -left-[40.5px] top-[11px] w-2 h-2 rounded-full bg-gray-200 border-2 border-white shadow-sm" />
                <div className="flex flex-col md:flex-row md:items-baseline justify-between w-full gap-1">
                  <p className="text-[14.5px] text-gray-500 font-medium leading-tight">
                    {role.title}
                  </p>
                  <span className="text-[11.5px] text-gray-400 tabular-nums font-semibold uppercase tracking-tight whitespace-nowrap">
                    {role.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};