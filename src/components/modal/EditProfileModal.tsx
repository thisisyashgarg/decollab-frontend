import React, { useContext, useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import BigButton from "../buttons/BigButton";
import LabelAndInput from "../inputBoxes/LabelAndInput";
import { UserDataContext } from "@/context/userDataContext";
import { saveProfileDetails } from "@/lib/profile/updateProfileDetails";
import TagInput from "../inputBoxes/TagInputBox";
import uploadImageToCloudinary from "@/lib/cloudinary/uploadImageToCloudinary";
import { EDIT_PROFILE_MODAL_STYLE } from "@/constants";

type EditProfileModalProps = {
  handleClose: Function;
  handleOpen: Function;
  isModalOpen: boolean;
};

const EditProfileModal = ({
  handleClose,
  isModalOpen,
}: EditProfileModalProps) => {
  const { userData } = useContext(UserDataContext);
  const [tags, setTags] = useState<{ tagName: string; id: string }[]>(
    userData?.tags!
  );
  const [updateProfileDetails, setUpdateProfileDetails] = useState({
    companyName: userData?.companyName,
    logoUrl: userData?.logoUrl,
    about: userData?.about,
    tags: tags,
    // socialLinks: socials,
  });
  const [loading, setLoading] = useState(false);
  const [logoInputState, setLogoInputState] = useState("");
  const [previewSource, setPreviewSource] = useState<
    string | ArrayBuffer | null
  >();

  useEffect(() => {
    setUpdateProfileDetails({
      ...updateProfileDetails,
      tags: tags,
      // socialLinks: socials,
    });
  }, [
    tags,
    // socials
  ]);

  async function handleSaveProfileDetails(userId: string) {
    setLoading(true);
    // handleSocialUpdate();
    const user = await saveProfileDetails(updateProfileDetails, userId);
    if (user._id) {
      console.log(user);
      console.log("profile updated succesfully");
    } else {
      console.log("error updating profile");
    }
    setLoading(false);
  }

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setUpdateProfileDetails({
      ...updateProfileDetails,
      [name]: value,
    });
  };

  const handleFileChange = (e: {
    target: { name: any; value: any; files?: any };
  }) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  async function previewFile(file: any) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  }

  async function handleUploadLogoFileToCloudinary() {
    if (!previewSource) return;
    console.log(previewSource);
    const url = await uploadImageToCloudinary(previewSource, userData._id);
    console.log(url);
  }

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
            sx={EDIT_PROFILE_MODAL_STYLE}
            className="rounded-md h-fit w-[70%] space-y-4 overflow-scroll"
          >
            <LabelAndInput
              className="w-full"
              label={"Company Name"}
              inputType={"text"}
              placeholder={"Company Name"}
              handleChange={handleInputChange}
              name={"companyName"}
              value={updateProfileDetails.companyName}
            />
            <LabelAndInput
              className="w-full"
              label={"About Us"}
              inputType={"text"}
              placeholder={"About Us"}
              handleChange={handleInputChange}
              name={"about"}
              value={updateProfileDetails.about!}
            />
            <LabelAndInput
              className="w-full"
              label={"Upload Logo"}
              inputType={"file"}
              placeholder={""}
              handleChange={handleFileChange}
              name={"logoUrl"}
              value={logoInputState}
            />
            {previewSource && (
              <img src={previewSource} width={40} height={40} alt="logo" />
            )}
            <button onClick={handleUploadLogoFileToCloudinary}>
              check upload
            </button>
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
