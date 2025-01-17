const CardHeading = ({ children, className = "" }) => {
  return (
    <h3 className={`card-header font-semibold  ${className}`}>{children}</h3>
  );
};

export default CardHeading;
