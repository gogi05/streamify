import { ReactComponent as ErrorIcon } from "../../assets/error.svg";

const Error = ({ message }) => {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full text-center">
      <div className="flex flex-col items-center justify-center space-y-2">
        <ErrorIcon className="h-12 w-12" />
        <h3 className="text-lg font-semibold">{message}</h3>
      </div>
    </div>
  );
};

export default Error;
