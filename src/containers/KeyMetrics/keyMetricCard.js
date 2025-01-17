import { CardLayout, CardHeading } from "../../components/Card";

const KeyMetricCard = ({ name, value, icon }) => {
  return (
    <CardLayout>
      <div className="flex justify-between items-center">
        <CardHeading className="text-sm uppercase">{name}</CardHeading>
        {icon}
      </div>

      <div className="font-bold text-2xl 3">{value}</div>
    </CardLayout>
  );
};

export default KeyMetricCard;
