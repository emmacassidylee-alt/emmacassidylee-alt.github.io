interface CaseStudySectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

export function CaseStudySection({ title, children, id }: CaseStudySectionProps) {
  return (
    <section className="mb-32">
      <div className="mb-16 pb-8 border-b border-[#EDEDED]">
        <h2 className="opacity-60" id={id}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

interface CaseStudyArticleProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function CaseStudyArticle({ id, title, children }: CaseStudyArticleProps) {
  return (
    <article id={id} className="mb-24 scroll-mt-24">
      <h3 className="mb-8">{title}</h3>
      {children}
    </article>
  );
}
