import Wrapper from "components/containers/layouts/Wrapper";
import ImageSection from "components/containers/pagesections/ImageSection";
import hero from '../../../public/images/hero.png';
import Link from "next/link";
const CTA = () => {
  return (

    <ImageSection
      image={hero}
      className="bg-black backdrop-blur-[2px] bg-opacity-70"
      height="h-[500px]"
      sectionId="sign-up"
    >
      <div className="absolute top-[50%] w-full translate-y-[-50%]">
        <Wrapper className="h-full space-y-20 text-center text-white">
          <div className="space-y-5">
            <h1 className="title-page mb-5 mx-auto max-w-4xl">
              What are you waiting for?
            </h1>
            <Link href="https://store.steampowered.com/app/2149630/1_Trait_Escape/" target="_blank">
              <button className="btn-primary text-xl py-8 px-12">BUY NOW</button>
            </Link>
          </div>
        </Wrapper>
      </div>
    </ImageSection>
  );
};

export default CTA;
