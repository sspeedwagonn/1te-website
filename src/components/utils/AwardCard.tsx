import Image from "next/image";
import { FunctionComponent } from "react";
import award from '../../../public/images/award.png';

interface Props {
    title: string;
    description: string;
}

const AwardCard: FunctionComponent<Props> = ({
                                                   title,
                                                   description,
                                               }) => {
    return (
        <div className="rounded bg-surface p-4 text-on-surface">
            <div className="flex justify-center mb-4">
                <Image src={award} alt={title} width={100} height={100} />
            </div>
            <h2 className="title-3 text-center">{title}</h2>
            <p className="text-center">{description}</p>
        </div>
    );
};

export default AwardCard;
