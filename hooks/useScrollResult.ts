import { useRef } from 'react';

export type UseScrollResult = [() => void, React.RefObject<HTMLDivElement>];

const useScroll = (): UseScrollResult => {
  const htmlElementRef = useRef<HTMLDivElement | null>(null);

  const executeScroll = () => {
    if (htmlElementRef && htmlElementRef.current) {
      const { offsetTop } = htmlElementRef.current;

      offsetTop && window.scrollTo(0, offsetTop - 32);
    }
  };

  return [executeScroll, htmlElementRef];
};

export { useScroll };