const CardLayout = ({ children, className = "" }) => {
  return (
    <div
      className={`border-solid border-1 border-black bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default CardLayout;
