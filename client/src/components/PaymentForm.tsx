import { useState } from "react";
import api from "../services/api";

const PaymentForm = () => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [success, setSuccess] = useState(false);
  const [display, setDisplay] = useState("none");

  function sendPaymentInfo() {
    api
      .post("/payment", {
        cardName: cardName,
        cardNumber: cardNumber,
        cardDate: cardDate,
        cardCvv: cardCvv,
      })
      .then((res) => {
        setDisplay("block");
        setSuccess(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <form
        className="paymentForm"
        onSubmit={(e) => {
          e.preventDefault();
          sendPaymentInfo();
          setCardCvv("");
          setCardName("");
          setCardNumber("");
          setCardDate("");
        }}
      >
        <label htmlFor="cardName">Name on Card</label>
        <input
          type="text"
          id="cardName"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          required
        />
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="number"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
        <label htmlFor="cardDate">Card Date</label>
        <input
          type="month"
          id="cardDate"
          value={cardDate}
          onChange={(e) => setCardDate(e.target.value)}
          required
        />
        <label htmlFor="cardCvv">Card Cvv</label>
        <input
          type="number"
          id="cardCvv"
          value={cardCvv}
          onChange={(e) => setCardCvv(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div style={{ display: display }}>
        {success ? (
          <p style={{ backgroundColor: "green" }}>PAYMENT VALID</p>
        ) : (
          <p style={{ backgroundColor: "red" }}>PAYMENT INVALID</p>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
