import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const BagSummary = () => {
  const items = useSelector((store) => store.items);
  const bagItems = useSelector((store) => store.bag);
  const finalItmes = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  let totalMRP = 0;
  const CONVENIENCE_FEES = 99;
  let totalDiscount = 0;

  finalItmes.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({bagItems.length} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        {bagItems.length > 0 && (
          <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">₹99</span>
          </div>
        )}
        <hr />
        {bagItems.length > 0 && (
          <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">₹{finalPayment}</span>
          </div>
        )}
      </div>
      {bagItems.length > 0 ? (
        <button className="btn-place-order">
          <div className="css-xjhrni">PLACE ORDER</div>
        </button>
      ): <Link to="/" ><button className="btn-place-order">
      <div className="css-xjhrni">SHOP ITEMS</div>
    </button></Link>}
    </>
  );
};

export default BagSummary;
