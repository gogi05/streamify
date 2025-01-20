import BaseButton from "./baseButton";

const OutlineButton = ({ children, onClick, className = "", ...props }) => {
  return (
    <BaseButton
      onClick={onClick}
      className={`border border-primary text-primary hover:border-primaryHover hover:text-primaryHover transition-colors ${className}`}
      {...props}
    >
      {children}
    </BaseButton>
  );
};

export default OutlineButton;
