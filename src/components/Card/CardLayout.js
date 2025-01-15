const CardLayout = ({ children, className = "" }) => {
  return (
    <div
      className={`border-solid border-2 border-black hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default CardLayout;
