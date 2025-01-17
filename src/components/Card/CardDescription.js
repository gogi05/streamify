const CardDescription = ({ children, className = "" }) => {
  return <p className={`card-description text-sm ${className}`}>{children}</p>;
};

export default CardDescription;
