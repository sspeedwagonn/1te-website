import ImageSection from "components/containers/pagesections/ImageSection";
import hero from '../../../public/images/hero.png';

const Hero = () => {
    return (
        <ImageSection
            image={hero}
            height="h-screen"
            sectionId="home"
        />
    );
};

export default Hero;
