import { CSSProperties,   ReactNode } from "react";
import clsx from "clsx";

type BoundedProps = {
 
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export function Bounded({
  
  className,
  children,
  // ...restProps
}: BoundedProps) {
  return (
    <article
      className={clsx(
        "px-6 ~py-10/16 [.header+&]:pt-44 [.header+&]:md:pt-32",
        className
      )}
      // {...(typeof Comp === 'string' ? {} : (restProps as any))}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </article>
  );
}
