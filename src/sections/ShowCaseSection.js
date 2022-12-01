import {Link} from 'react-router-dom';
import img1 from '../assets/images/img-1.svg';
import img2 from '../assets/images/img-1.svg';


const ShowCaseSection = () => {
    return (
      <section className="showcase">
        <img src={img1} alt="img1" />
        <div className="showcase-body">
            <h1>Sale Up </h1>
            <h1>To 50% Off</h1>
            <p>Online shopping free home delivery over $100</p>
            <Link to="/products" className="btn-theme">SHOP NOW</Link>
        </div>
        <img src={img2} alt="img2" />
        </section>
    )

}

export default ShowCaseSection