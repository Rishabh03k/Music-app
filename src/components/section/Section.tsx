import React, { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SectionProps {
  title: string;
  subtitle?: string;
  seeAllLink?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ 
  title, 
  subtitle,
  seeAllLink,
  children 
}) => {
  return (
    <section className="mb-8 animate-slide-up">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          {subtitle && <p className="text-neutral-400 text-sm">{subtitle}</p>}
        </div>
        
        {seeAllLink && (
          <Link 
            to={seeAllLink} 
            className="text-sm font-medium text-neutral-400 hover:text-white flex items-center gap-1"
          >
            See all
            <ChevronRight size={16} />
          </Link>
        )}
      </div>
      
      {children}
    </section>
  );
};

export default Section;