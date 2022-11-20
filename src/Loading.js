import spinner from "./Spinner.gif";

const Loading = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="Loading" />
    </div>
  );
};

export default Loading;
