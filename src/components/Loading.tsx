import Spinner from "react-bootstrap/Spinner";

const Loading = (props: LoadingProps) => {

  return (
    <div className='loading-container'>
      <h2>Workin' it... </h2>
      <Spinner animation="border" />
    </div>
  );
};

export default Loading;

export interface LoadingProps {

};