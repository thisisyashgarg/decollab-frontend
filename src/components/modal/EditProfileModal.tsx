import React, { useContext, useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import BigButton from "../buttons/BigButton";
import LabelAndInput from "../labelAndInputBox/labelAndInput";
import { UserDataContext } from "@/context/userDataContext";
import { saveProfileDetails } from "@/auth/updateProfileDetails";
import getUserFromJWT from "@/auth/getUserIdFromJWT";

type EditProfileModalProps = {
  handleClose: Function;
  handleOpen: Function;
  isModalOpen: boolean;
};

const EditProfileModal = ({
  handleClose,
  isModalOpen,
}: EditProfileModalProps) => {
  const { userData, setUserData } = useContext(UserDataContext);
  const [updateProfileDetails, setUpdateProfileDetails] = useState({
    companyName: userData.companyName,
    logoUrl: userData.logoUrl,
    about: userData.about,
  });
  const [loading, setLoading] = useState(false);

  async function handleSaveProfileDetails(userId: string) {
    setLoading(true);
    await saveProfileDetails(updateProfileDetails, userId);
    console.log("post created succesfully");
    setLoading(false);
  }

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setUpdateProfileDetails({
      ...updateProfileDetails,
      [name]: value,
    });
  };

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
          <Box
            sx={style}
            className="rounded-md h-fit w-[70%] space-y-4 overflow-scroll"
          >
            <LabelAndInput
              label={"Company Name"}
              inputType={"text"}
              placeholder={"Company Name"}
              handleChange={handleInputChange}
              name={"companyName"}
              value={updateProfileDetails.companyName}
            />
            <LabelAndInput
              label={"About Us"}
              inputType={"text"}
              placeholder={"About Us"}
              handleChange={handleInputChange}
              name={"about"}
              value={updateProfileDetails.about!}
            />
            <LabelAndInput
              label={"Logo URL"}
              inputType={"text"}
              placeholder={"Logo URL"}
              handleChange={handleInputChange}
              name={"logoUrl"}
              value={updateProfileDetails.logoUrl!}
            />
            {/* <LabelAndInput
              label={"Tags"}
              inputType={"text"}
              placeholder={"Tags"}
              handleChange={handleInputChange}
              name={"tags"}
              value={updateProfileDetails.tags[0]}
            /> */}
            {/* <LabelAndInput
              label={"Funding Round Number"}
              inputType={"text"}
              placeholder={"Funding Round Number"}
              handleChange={handleInputChange}
              name={"fundings"}
              value={updateProfileDetails.fundings.round}
            />
            <LabelAndInput
              label={"Funding Round Amount"}
              inputType="number"
              placeholder={"Funding Round Amount"}
              handleChange={handleInputChange}
              name={"fundings"}
              value={`${updateProfileDetails.fundings.amount}`}
            />

            <LabelAndInput
              label={"Flex Post"}
              inputType={"text"}
              placeholder={"Flex Post"}
              handleChange={handleInputChange}
              name={"flexPosts"}
              value={updateProfileDetails.flexPosts[0]}
            />

            <LabelAndInput
              label={"Brand Collaborated"}
              inputType={"text"}
              placeholder={"Brand Collaborated"}
              handleChange={handleInputChange}
              name={"brandsCollaborated"}
              value={updateProfileDetails.brandsCollaborated[0]}
            /> */}

            <BigButton
              text={loading ? "Saving..." : "Save Details"}
              className="w-full p-3 text-xl"
              disabledLogic={loading}
              onClickLogic={() => handleSaveProfileDetails(userData._id)}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default EditProfileModal;
