interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function Card({ title, description, icon }: CardProps) {
  return (
    <div className="bg-white border-2 border-pepsi-blue rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      {icon && <div className="mb-4 text-pepsi-blue">{icon}</div>}
      <h3 className="text-xl font-bold text-pepsi-blue mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
