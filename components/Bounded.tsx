import clsx from "clsx";
import { ElementType, forwardRef, ReactNode } from "react";

type BoundedProps<T extends ElementType = "section"> = {
  as?: T;
  className?: string;
  children: ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export const Bounded =  forwardRef<HTMLElement, BoundedProps>(
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
  return (
    <Comp
    ref={ref}
      className={clsx("px-4 first:pt-10 md:px-6", className)}
      {...restProps}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {children}
      </div>
    </Comp>
  );
});
Bounded.displayName = "Bounded";