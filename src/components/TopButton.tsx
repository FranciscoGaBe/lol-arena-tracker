import { useLayoutEffect, useRef, useState } from 'react';

const TopButton = () => {
  const ref = useRef<HTMLDivElement>(null);
  const hasScrolledRef = useRef(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useLayoutEffect(() => {
    const listener = () => {
      const scrolled = window.scrollY !== 0;
      if (scrolled === hasScrolledRef.current) return;
      hasScrolledRef.current = scrolled;
      setHasScrolled(scrolled);
    };
    window.addEventListener('scroll', listener);
    listener();

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-x-2 bottom-2 flex justify-end"
    >
      <button
        className={`size-16 rounded-full bg-cyan-700 text-xl font-bold text-cyan-300 drop-shadow-sm transition-opacity duration-200 ${hasScrolled ? 'pointer-events-auto opacity-60' : 'opacity-0'}`}
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        Top
      </button>
    </div>
  );
};

export default TopButton;
