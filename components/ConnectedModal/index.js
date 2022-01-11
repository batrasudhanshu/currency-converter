import React from "react";
import ConnectedWrapper from "./style.connected";
import CloseIcon from "@mui/icons-material/Close";
const ConnectedModal = (props) => {
  return (
    <ConnectedWrapper>
      <div className="connected">
        <div className="header">
          <h2>Wallet details</h2>

          <CloseIcon onClick={props.close} />
        </div>
        <div className="details">
          <div>
            <span>KEY</span>
            <span>VALUE</span>
          </div>
          <div>
            <span>Account ID</span>
            <span>
              {props.account
                .slice(0, 3)
                .concat("...")
                .concat(
                  props.account.substring(
                    props.account.length - 3,
                    props.account.length
                  )
                )}
            </span>
          </div>
          <div>
            <span>Chain ID</span>
            <span>{props.chainId}</span>
          </div>
          <div>
            <span>Balance</span>
            <span>1.0</span>
          </div>
        </div>
        <div className="button-outer">
          <button onClick={props.disconnect}>Disconnect</button>
        </div>
      </div>
    </ConnectedWrapper>
  );
};

export default ConnectedModal;
