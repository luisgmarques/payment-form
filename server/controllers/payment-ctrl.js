exports.makePayment = async (req, res) => {
  try {
    console.log(req.body);
    let isValid = validatePayment(req.body);
    res.status(201).json({ data: isValid });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

function validatePayment(paymentInfo) {
  const { cardName, cardNumber, cardDate, cardCvv } = paymentInfo;
  return validateNumberAndCvv(cardNumber, cardCvv) && validateDate(cardDate);
}

function validateDate(date) {
  const [year, month] = date.split("-");

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  if (Number(year) < currentYear) {
    return false;
  }

  if (Number(month) < currentMonth) {
    return false;
  }

  return true;
}

function validateNumberAndCvv(number, cvv) {
  number = String(number);
  cvv = String(cvv);
  if (number.length < 16 || number.length > 19) {
    return false;
  }
  const firstTwoDigits = number[0] + number[1];

  if (firstTwoDigits === "34" || firstTwoDigits === "37") {
    if (cvv.length !== 4) {
      return false;
    } else {
      return true;
    }
  }

  if (cvv.length !== 3) {
    return false;
  }

  return true;
}
