import Spinner from "react-bootstrap/Spinner";
import '../styles/Loading.scss';

const Loading = () => {

  return (
    <div className='loading-container'>
      <h2>Подготовка... </h2>
      <Spinner animation="border" />
    </div>
  );
};

export default Loading;
