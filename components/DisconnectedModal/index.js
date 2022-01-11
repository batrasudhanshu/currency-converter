import React from "react";
import ConnectedModal from "../ConnectedModal";
import DisconnectedWrapper from "./style.disconnected";
const connectedModal = () => {
  return <ConnectedModal />;
};
const DisconnectedModal = (props) => {
  return (
    <DisconnectedWrapper>
      <div className="disconnected">
        <h2>Wallet details</h2>
        <span>
          Wallet not connected. Please click the 'Connect' button below.
        </span>
        <div>
          <button onClick={props.connect}>Connect</button>
          <button onClick={props.close}>Cancel</button>
        </div>
      </div>
    </DisconnectedWrapper>
  );
};

export default DisconnectedModal;
