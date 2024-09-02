import React, { useState } from "react";
import MainContainer from "../../components/containers/mainContainer";
import ScreenTitle from "../../components/texts/screenTitle";
import DynamicInput from "../../components/inputs/dynamicInput";
import DynamicButton from "../../components/buttons/DynamicButton";

const FundPage = () => {
  const [amount, setAmount] = useState("");
  const [amountError, setAmountError] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");

  const validateAmount = () => {
    //! Validation logic could be expanded upon further inquries
    if (typeof amount !== "number") {
      setAmountError("Amount must be a number");
    } else if (amount.trim() === "") {
      setAmountError("Amount cannot be empty");
    } else {
      setAmountError("");
    }
  };

  const validateCardNumber = () => {
    //! Validation logic could be expanded upon further inquries
    if (typeof cardNumber !== "number") {
      setCardNumberError("Card Number must be a number");
    } else if (cardNumber.trim() === "") {
      setCardNumberError("Card Number cannot be empty");
    } else {
      setCardNumberError("");
    }
  };

  return (
    <MainContainer>
      <ScreenTitle text={"Fund Screen"} />
      <DynamicInput
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        onBlur={validateAmount}
        error={(!!amountError).toString()}
        errorMessage={amountError}
      />
      <DynamicInput
        type="text"
        placeholder="Card Number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        onBlur={validateCardNumber}
        error={(!!cardNumberError).toString()}
        errorMessage={cardNumberError}
      />
      <DynamicButton
        text={"Buy Digital Shekel"}
        bg={"#50924E"}
        hoverbg={"#396d37"}
      />
    </MainContainer>
  );
};

export default FundPage;
