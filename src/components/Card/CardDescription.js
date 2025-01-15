const CardDescription = ({ children, className = "" }) => {
  return <div className={`card-description ${className}`}>{children}</div>;
};

export default CardDescription;
