import { useState } from "react";

const PaymentForm = () => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  return (
    <form
      className="paymentForm"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("fdf");
        console.log("dfdf");
        console.log(cardDate);
      }}
    >
      <label htmlFor="cardName">Name on Card</label>
      <input
        type="text"
        id="cardName"
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
      />
      <label htmlFor="cardNumber">Card Number</label>
      <input
        type="text"
        id="cardNumber"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
      <label htmlFor="cardDate">Card Date</label>
      <input
        type="month"
        id="cardDate"
        value={cardDate}
        onChange={(e) => setCardDate(e.target.value)}
      />
      <label htmlFor="cardCvv">Card Cvv</label>
      <input
        type="text"
        id="cardCvv"
        value={cardCvv}
        onChange={(e) => setCardCvv(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PaymentForm;
