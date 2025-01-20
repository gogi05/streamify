const BaseButton = ({
  children,
  onClick,
  className = "",
  disabled = false,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`font-semibold px-4 py-2 rounded transition duration-150 ease-in-out ${className} ${
        disabled ? "disabled:cursor-not-allowed disabled:opacity-50" : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default BaseButton;
