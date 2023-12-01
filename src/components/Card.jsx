import SubscriptionForm from "./SubscriptionForm";
import UpdateItem from "./UpdateItem";
import "./style.css";

export default function Card() {
  return (
    <>
      <div className="newsletter-card">
        <div className="newsletter-body">
          <div className="newsletter-body-info">
            <h1>Stay Updated!</h1>
            <h2>join 60,000+ product managers receiving monthly updates on:</h2>
            <ul>
              <li>
                <UpdateItem />
              </li>
              <li>
                <UpdateItem />
              </li>
              <li>
                <UpdateItem />
              </li>
            </ul>
          </div>
          <SubscriptionForm />
        </div>
        <div className="newsletter-img-wrapper">
          <img
            src="https://images.pexels.com/photos/4668525/pexels-photo-4668525.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="newsletter-img"
          ></img>
        </div>
      </div>
    </>
  );
}
