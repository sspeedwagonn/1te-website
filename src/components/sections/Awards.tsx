import Wrapper from "components/containers/layouts/Wrapper";
import Section from "components/containers/pagesections/Section";
import AwardCard from "components/utils/AwardCard";

const features = [
  {
    title: "IGN",
    description: "Game of the Year 2024/2025",
  },
  {
    title: "Pitchfork",
    description: "Best Music in a Video Game",
  },
  {
    title: "Time",
    description: "12/10",
  },
  {
    title: "The Game Awards",
    description: "2026 Game of the Year",
  },
  {
    title: "Forbes",
    description: '"Worth investing entire portfolio in"',
  },
  {
    title: "Polygon",
    description: '"Video games reimagined."',
  },
];

const Awards = () => {
  return (
      <Section sectionId="awards">
        <Wrapper className="text-center text-white">
          <h1 className="title-1 mb-8">Awards</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {features.map(({ title, description }) => (
                <AwardCard
                    key={title}
                    title={title}
                    description={description}
                />
            ))}
          </div>
        </Wrapper>
      </Section>
  );
};

export default Awards;
