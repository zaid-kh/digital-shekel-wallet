import React, { useState } from "react";
import ScreenTitle from "../../components/texts/screenTitle.jsx";
import Subtitle from "../../components/texts/subtitle.jsx";
import DynamicButton from "../../components/buttons/DynamicButton.jsx";
import MainContainer from "../../components/containers/mainContainer.jsx";
import DynamicInput from "../../components/inputs/dynamicInput.jsx";

const WelcomePage = () => {
  const [walletId, setwalletId] = useState("");
  const [walletIdError, setwalletIdError] = useState("");

  const validatewalletId = () => {
    //! Validation logic could be expanded upon further inquries
    if (typeof walletId !== "string") {
      setwalletIdError("walletId must be a string");
    } else if (walletId.trim() === "") {
      setwalletIdError("walletId cannot be empty");
    } else {
      setwalletIdError("");
    }
  };
  return (
    <>
      <MainContainer>
        <ScreenTitle text="Welcome" />
        <Subtitle text="Digital Shekel Wallet" />
        <DynamicInput
          type="text"
          placeholder="Enter your wallet ID"
          value={walletId}
          onChange={(e) => setwalletId(e.target.value)}
          onBlur={validatewalletId}
          error={(!!walletIdError).toString()}
          errorMessage={walletIdError}
        />

        <DynamicButton
          text={"Open Existing Wallet"}
          bg={"#50924E"}
          hoverbg={"#396d37"}
          to={"/wallet"}
        ></DynamicButton>
        <DynamicButton
          text={"Create New Wallet"}
          hoverbg={"#2358DC"}
          bg={"#4F7AE3"}
        ></DynamicButton>
      </MainContainer>
    </>
  );
};

export default WelcomePage;
