import React from "react";
import { useLazyLoad } from "./useLazy";
const images = Array.from(
  { length: 20 },
  (_, i) => `https://picsum.photos/800?random=${i}`
);

export default function ImageComponent() {
  return (
    <div>
      <h1>Lazy Load Images Demo</h1>

      {images?.map((src, index) => {
        const [ref, isVisible] = useLazyLoad({
          rootMargin: "0px",
          triggerOnce: true,
          threshold: 1,
        });

        return (
          <div
            ref={ref}
            key={index}
            style={{
              minHeight: "400px",
              marginBottom: "20px",
              background: "#eee",
              border: "1px solid red",
            }}
          >
            {isVisible ? (
              <img
                src={src}
                alt={`Random ${index}`}
                style={{
                  width: "100%",
                  display: "block",
                  opacity: isVisible ? 1 : 0,
                  transition: "opacity 1s ease-in",
                }}
              />
            ) : (
              <p style={{ textAlign: "center", padding: "180px 0" }}>
                Loading...
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
