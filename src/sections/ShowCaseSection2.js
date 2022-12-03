import {Link} from 'react-router-dom';
import img1 from '../assets/images/img-1.svg';
import img2 from '../assets/images/img-2.svg';

const ShowCaseSection2 = () => {
    return (
      <section className="showcase">
        <img className="img-left" src="img-1.svg" alt="product1" />
        <div className="showcase-body">
            <h1>Sale Up </h1>
            <h1>To 50% Off</h1>
            <p>Online shopping free home delivery over $100</p>
        </div>
        <img className="img-right" src="img-2.svg" alt="product2" />
        </section>
    )

}

export default ShowCaseSection2