# How to create an intersectional observer

threshold is for when it observes
rootMargin is for before or after it observes

```ts
export function LazyYouTubePlayer({ youTubeID }: VideoProps) {
    
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentContainerRef = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0, rootMargin: "1500px" } //rootMargin: "1500px": 1500px before seeing that its in view!
    );

    if (currentContainerRef) {
      observer.observe(currentContainerRef);
    }

    return () => {
      if (currentContainerRef) {
        observer.unobserve(currentContainerRef);
      }
    };
  });

  return (
    <div className="relative h-full w-full" ref={containerRef}>
      {isInView && (
        <iframe
          //..
        />
      )}
    </div>
  );
}

```
