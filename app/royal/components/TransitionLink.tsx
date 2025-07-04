// import { asLink, LinkField, PrismicDocument } from "@prismicio/client";
import { Link } from "next-view-transitions";

export type TransitionLinkProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  tabIndex?: number;
} & (
   
  | { field?: never; document?: never; href: string }
);

export const TransitionLink = ({
 
  href,
  children,
  className,
  onClick,
  tabIndex,
}: TransitionLinkProps) => {
  // const url = href ?? asLink(field ?? doc);
  const url = href  ;

  if (!url) {
    console.warn("TransitionLink: No URL Found");
    return null;
  }

  return (
    <Link
      href={url}
      className={className}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      {  children}
    </Link>
  );
};
