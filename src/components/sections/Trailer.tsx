import Wrapper from "components/containers/layouts/Wrapper";
import Section from "components/containers/pagesections/Section";

const Trailer = () => {
  return (
    <Section sectionId="trailer" className="bg-[#2B152C] py-10 text-on-surface">
      <Wrapper className="text-center ">
        <h1 className="title-1">TRAILER</h1>
        <div className="">
          <iframe
            src="https://www.youtube.com/embed/6A2xV6D51b4"
            title="Trailer video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="aspect-video w-full shadow-md md:mb-14"
          />
        </div>
      </Wrapper>
    </Section>
  );
};

export default Trailer;
