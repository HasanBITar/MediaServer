import { useEffect, useState, useRef } from "react";

const HomeSection = ({ title, children }) => {
  const scrollContainerRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("right");
  const [isMouseOver, setMouseOver] = useState(false);

  useEffect(() => {
    let scrollInterval;
    let scrollContainer = scrollContainerRef.current;

    const stepScroll = () => {
      if (!scrollContainer || isMouseOver) return
      const cardWidth = scrollContainer.firstChild.offsetWidth;
      const scrollDistance = cardWidth + 36;
      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      if (scrollDirection === "right") {
        scrollContainer.scrollBy({
          left: scrollDistance,
          behavior: "smooth",
        });
        if (scrollContainer.scrollLeft + scrollDistance >= maxScrollLeft) {
          setScrollDirection("left");
        }
      } else {
        scrollContainer.scrollBy({
          left: -scrollDistance,
          behavior: "smooth",
        });
        if (scrollContainer.scrollLeft <= scrollDistance) {
          setScrollDirection("right");
        }
      }
    };

    scrollInterval = setInterval(stepScroll, 3000);

    return () => { clearInterval(scrollInterval) };
  }, [scrollDirection, isMouseOver]);

  useEffect(() => {
    let scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("mouseenter", () => { setMouseOver(true); });
      scrollContainer.addEventListener("mouseleave", () => { setMouseOver(false); });
    }
  }, [isMouseOver])


  return (
    <div className="flex flex-col m-auto rounded bg-gray-800 p-5 lg:p-8 mb-2">
      <h1 className="flex pb-5 font-bold text-4xl text-white">{title}</h1>
      <div
        className="flex overflow-x-scroll hide-scroll-bar"
        ref={scrollContainerRef}
      >
        <div className="flex flex-nowrap space-x-7">{children}</div>
      </div>
    </div>
  );
};

export default HomeSection;
