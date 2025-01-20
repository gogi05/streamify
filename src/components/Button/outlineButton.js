import BaseButton from "./baseButton";

const OutlineButton = ({ children, onClick, className = "", ...props }) => {
  return (
    <BaseButton onClick={onClick} className={className} {...props}>
      {children}
    </BaseButton>
  );
};

export default OutlineButton;
