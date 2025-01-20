import BaseButton from "./baseButton";

const TextButton = ({
  children,
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <BaseButton
      onClick={onClick}
      disabled={disabled}
      className={`text-[#c73e17] hover:text-[#9c2f11] disabled:text-gray-400 ${className}`}
    >
      {children}
    </BaseButton>
  );
};

export default TextButton;
