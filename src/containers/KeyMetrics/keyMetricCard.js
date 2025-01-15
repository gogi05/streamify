import { CardLayout, CardHeading } from "../../components/Card";

const KeyMetricCard = ({ name, value, icon }) => {
  return (
    <CardLayout>
      <div className="flex justify-between">
        <CardHeading>{name}</CardHeading>
        {icon}
      </div>

      {value}
    </CardLayout>
  );
};

export default KeyMetricCard;
