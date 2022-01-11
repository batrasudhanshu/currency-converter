import { Box, Container, Modal, Paper, TextField } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import React, { useState } from "react";
import ConnectedModal from "../ConnectedModal";
import DisconnectedModal from "../DisconnectedModal";
import { injected } from "../wallet/connectors";
import ConverterWrapper from "./style.convert";
const ConverterPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [state, setState] = useState({
    value_nep: "",
    value_busd: "",
  });
  const tryConvert = (temperature, convert) => {
    if (Number.isNaN(temperature)) {
      return "";
    }
    const output = convert(temperature);
    const rounded = Math.round(output * 100) / 100;
    return rounded.toString();
  };
  const toNep = (busd) => {
    return busd * 3;
  };

  const toBusd = (nep) => {
    return nep / 3;
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const { active, account, library, connector, activate, deactivate, chainId } =
    useWeb3React();
  async function connect() {
    try {
      await activate(injected);
    } catch (err) {
      console.log(err);
    }
    setOpen(true);
  }
  const HandleChange = (e) => {
    console.log(e.target.name);
    const target = e.target;
    const name = target.name;
    if (name === "value_nep") {
      const value = tryConvert(target.value, toBusd);
      setState({ [name]: value, value_busd: target.value });
    } else {
      const value = tryConvert(target.value, toNep);
      setState({ [name]: value, value_nep: target.value });
    }
  };

  return (
    <ConverterWrapper>
      <Container maxWidth="md">
        <div className="container-outer">
          <Paper elevation={3}>
            <div className="paper-inner">
              <h2>Crypto Converter</h2>
              <TextField
                id="outlined"
                label="NEP"
                type="text"
                name="value_busd"
                value={state.value_nep}
                onChange={HandleChange}
              />
              <TextField
                id="outlined-helperText"
                label="BUSD"
                type="text"
                name="value_nep"
                value={state.value_busd}
                onChange={HandleChange}
              />
              <button href="!#" onClick={connect}>
                Check Wallet Details
              </button>
            </div>
          </Paper>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div>
              {active ? (
                <ConnectedModal
                  account={account}
                  disconnect={deactivate}
                  chainId={chainId}
                  close={handleClose}
                />
              ) : (
                <DisconnectedModal close={handleClose} connect={connect} />
              )}
            </div>
          </Box>
        </Modal>
      </Container>
    </ConverterWrapper>
  );
};

export default ConverterPage;
