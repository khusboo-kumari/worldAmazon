import "./categoryFilter.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function CategoryFilters({openSidebar}) {
  return (
    <ul className="category-list">
      <li className="category-item" onClick={openSidebar}>
        <FontAwesomeIcon icon={faBars} />
        <h5 className="all-menu">All</h5>
      </li>
      {item.map((item) => (
        <li className="category-item" key={item}>{item}</li>
       
      ))}
    </ul>
  );
}

const item = [
  "Fresh",
  "MX Player",
  "Sell",
  "Gift Cards",
  "Amazon Pay",
  "Buy Again",
  "AmazonBasics",
  "Gift Ideas",
  "Today's Deals",
  "Browsing History",
  "Customer Service",
  "Home Improvement",
  "Dytto's Amazon.in",
  "Health, Household & Personal Care",
  "Kindle eBooks",
  "Mobiles",
  "Books",
  "New Releases",
  "Best Sellers",
  "Beauty & Personal Care",
  "Electronics",
  "Subscribe & Save",
  "Sports, Fitness & Outdoors",
  "Prime",
  "Home & Kitchen",
  "Fashion",
  "Computers",
  "Toys & Games",
  "Car & Motorbike",
  "Baby",
  "Pet Supplies",
  "Video Games",
  "Previous slide",
];
