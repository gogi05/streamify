const CardHeading = ({ children, className = "" }) => {
  return <div className={`card-header ${className}`}>{children}</div>;
};

export default CardHeading;
