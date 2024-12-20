import Wrapper from "components/containers/layouts/Wrapper";
import Section from "components/containers/pagesections/Section";
import ImageCarousel from "components/utils/ImageCarousel";
import Screenshot from "components/utils/Screenshot";

import { SwiperSlide } from "swiper/react";
import image1 from '../../../public/images/gameplay/image1.jpg';
import image2 from '../../../public/images/gameplay/image2.jpg';
import image3 from '../../../public/images/gameplay/image3.jpg';
import image4 from '../../../public/images/gameplay/image4.jpg';
import image5 from '../../../public/images/gameplay/image5.jpg';
import image6 from '../../../public/images/gameplay/image6.jpg';
import image7 from '../../../public/images/gameplay/image7.jpg';
import image8 from '../../../public/images/gameplay/image8.jpg';

const Gameplay = () => {
  const imagePaths = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  return (
      <Section
          sectionId="gameplay"
          className="bg-[#2B152C] py-10 text-on-surface"
          padding={false}
      >
        <Wrapper>
          <ImageCarousel>
            {imagePaths.map((image, index) => (
                <SwiperSlide key={index}>
                  <Screenshot image={image} />
                </SwiperSlide>
            ))}
          </ImageCarousel>
        </Wrapper>
      </Section>
  );
};

export default Gameplay;
