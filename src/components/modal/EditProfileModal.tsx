import React, { useContext, useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import BigButton from "../buttons/BigButton";
import LabelAndInput from "../inputBoxes/LabelAndInput";
import { UserDataContext } from "@/context/userDataContext";
import { saveProfileDetails } from "@/auth/updateProfileDetails";
import TagInput from "../inputBoxes/TagInputBox";
import { log } from "console";
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
  const [tags, setTags] = useState<{ tagName: string; id: string }[]>(
    userData?.tags!
  );
  // const [socials, setSocials] = useState<string[]>([]);
  const [updateProfileDetails, setUpdateProfileDetails] = useState({
    companyName: userData?.companyName,
    logoUrl: userData?.logoUrl,
    about: userData?.about,
    tags: tags,
    // socialLinks: socials,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setUpdateProfileDetails({
      ...updateProfileDetails,
      tags: tags,
      // socialLinks: socials,
    });
  }, [tags]);

  async function handleSaveProfileDetails(userId: string) {
    setLoading(true);
    const user = await saveProfileDetails(updateProfileDetails, userId);
    if (user._id) {
      console.log(user);
      console.log("profile updated succesfully");
    } else {
      console.log("error updating profile");
    }
    setLoading(false);
  }

  async function getUser() {
    const user = await getUserFromJWT();
    setUserData(user[0]);
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
            <h2 className="text-2xl">Tags</h2>
            <TagInput tags={tags} setTags={setTags} className="py-3" />

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
