import { useEffect, useState, useRef } from "react";

// eslint-disable-next-line react/prop-types
const HomeSection = ({ title, children }) => {
  const scrollContainerRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("right");
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollInterval;

    const stepScroll = () => {
      if (scrollContainer) {
        const cardWidth = scrollContainer.firstChild.offsetWidth;
        const scrollDistance = cardWidth + 36;
        const maxScrollLeft =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;

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
          if (scrollContainer.scrollLeft <= 0) {
            setScrollDirection("right");
          }
        }
      }
    };

    if (isHovering) {
      scrollInterval = setInterval(stepScroll, 1000);
    } else {
      clearInterval(scrollInterval);
    }

    return () => {
      clearInterval(scrollInterval);
    };
  }, [scrollDirection, isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="flex flex-col m-auto rounded bg-gray-800 p-5 lg:p-8 mb-2">
      <h1 className="flex pb-5 font-bold text-4xl text-white">{title}</h1>
      <div
        className="flex overflow-x-scroll hide-scroll-bar"
        ref={scrollContainerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ overflowX: "auto", whiteSpace: "nowrap" }}
      >
        <div className="flex flex-nowrap space-x-7">{children}</div>
      </div>
    </div>
  );
};

export default HomeSection;
