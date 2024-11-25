import React, { useEffect, useState, useRef } from "react";

function Package({
  itemHeight,
  occupied,
  itemsPerPage = Math.floor((window.innerHeight - occupied) / itemHeight) + 1,
  data,
  endReached,
  ItemComponent,
}) {
  const [visibleStart, setVisibleStart] = useState(0);
  const [visibleEnd, setVisibleEnd] = useState(0);
  const containerRef = useRef(null);

  const containerHeight = itemHeight * (itemsPerPage + 1);
  const visibleItemCount = Math.ceil(containerHeight / itemHeight);

  const handleScroll = (e) => {
    const target = e.target;
    const scrollBottom =
      target.scrollHeight - target.scrollTop === target.clientHeight;

    if (scrollBottom) {
      endReached();
    }

    const scrollTop = containerRef.current.scrollTop;
    const startIdx = Math.floor(scrollTop / itemHeight);
    const endIdx = startIdx + visibleItemCount;

    setVisibleStart(startIdx);
    setVisibleEnd(endIdx);
  };

  useEffect(() => {
    setVisibleEnd(visibleStart + visibleItemCount);
  }, [visibleStart, visibleItemCount]);

  return (
    <div
      style={{
        height: `${window.innerHeight - occupied}px`,
        overflowY: "scroll",
      }}
      onScroll={handleScroll}
      ref={containerRef}
    >
      <div style={{ position: "relative" }}>
        {data.slice(visibleStart, visibleEnd).map((item, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: `${(index + visibleStart) * itemHeight}px`,
              width: "100%",
              height: `${itemHeight}px`,
              overflow: "hidden",
            }}
          >
            <ItemComponent item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Package;
