import Wrapper from "components/containers/layouts/Wrapper";
import Section from "components/containers/pagesections/Section";

const gridItems = [
  {
    title: "Amass Power",
    content:
        "As Stoney struggles to survive on Mars, he must gather strength and resources. Every step forward makes him more powerful, bringing him closer to the ultimate goal: escaping back to Earth.",
  },
  {
    title: "Conquer Enemies",
    content:
        "Mars is full of dangerous foes, from feudal Martian soldiers to ruthless creatures. To survive, Stoney must face these enemies, outsmarting them to continue his journey home.",
  },
  {
    title: "Defeat Bosses",
    content:
        "The way to Earth is blocked by powerful Martian overlords. Stoney and Trait must defeat these bosses, each one guarding secrets that could be key to their escape from this medieval world.",
  },
  {
    title: "Escape to Earth",
    content:
        "Trapped on Mars with a trillionaire antagonist bent on controlling the planet, Stoney and Trait’s only hope lies in outwitting their captors and finding a way to return to Earth before it’s too late.",
  },
];



const Story = () => {
  return (
      <Section sectionId="story">
        <Wrapper className="text-center text-white">
          <h1 className="title-1">Story</h1>
          <p className="mx-auto max-w-lg">
            Stoney and Trait have been booked to fly to London but mistakenly board a rocket ship where they crash-land on Mars. But this is no normal Mars. This Mars has been terraformed and colonized by a trillionaire antagonist with a vision to restart feudalism on a new planet to be a true king.
          </p>
          <div className="grid gap-10 py-10 md:grid-cols-2">
            {gridItems.map(({ title, content }) => (
                <div key={title} className="space-y-2">
                  <h2 className="title-2">{title}</h2>
                  <p className="mx-auto max-w-lg">{content}</p>
                </div>
            ))}
          </div>
        </Wrapper>
      </Section>
  );
};

export default Story;
