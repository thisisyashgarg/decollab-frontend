import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import SmallInputBox from "../inputBoxes/SmallInputBox";
import BigButton from "../buttons/BigButton";

type CollabRequestModalProps = {
  handleClose: Function;
  handleOpen: Function;
  isModalOpen: boolean;
};

const CollabRequestModal = ({
  handleClose,
  isModalOpen,
}: CollabRequestModalProps) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",

    p: 4,
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isModalOpen}
        onClose={() => handleClose()}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isModalOpen}>
          <Box sx={style} className="rounded-md h-fit w-96 space-y-4">
            <div className="flex flex-col space-y-2">
              <h2 className="text-2xl">Subject</h2>
              <SmallInputBox type={"text"} placeholder="Subject" />
            </div>
            <div className="flex flex-col space-y-2">
              <h2 className="text-2xl">Explain your request</h2>
              <SmallInputBox type={"text"} placeholder="Explanation" />
            </div>
            <BigButton text="Send" className="w-full p-3 text-xl" />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default CollabRequestModal;
