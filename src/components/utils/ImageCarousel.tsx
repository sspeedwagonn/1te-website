import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { Swiper } from "swiper/react";
import { Keyboard, Pagination } from "swiper/modules";

interface Props {
  children: ReactNode;
}

const ImageCarousel: FunctionComponent<Props> = ({ children }) => {
  const [slideCount, setSlideCount] = useState(3);

  useEffect(() => {
    function updateVisibleSlides() {
      if (window.innerWidth >= 1024) {
        setSlideCount(3);
      } else if (window.innerWidth >= 640) {
        setSlideCount(2);
      } else {
        setSlideCount(1);
      }
    }

    window.addEventListener("resize", updateVisibleSlides);
    updateVisibleSlides();

    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  return (
      <Swiper
          modules={[Keyboard, Pagination]}
          spaceBetween={30}
          slidesPerView={slideCount}
          loop={true}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
      >
        {children}
      </Swiper>
  );
};

export default ImageCarousel;
