import { FC } from 'react';

interface SolutionCardProps {
  title: string;
  description: string;
  benefits: string[];
}

const SolutionCard: FC<SolutionCardProps> = ({ title, description, benefits }) => {
  return (
    <div className="p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 border-opacity-20">
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div>
        <h4 className="font-semibold mb-2 text-gray-200">Key Benefits:</h4>
        <ul className="list-disc pl-5 text-gray-300">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SolutionCard;
