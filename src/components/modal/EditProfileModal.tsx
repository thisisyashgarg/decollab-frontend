import React, { FormEvent, useContext, useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import BigButton from "../buttons/BigButton";
import LabelAndInput from "../inputBoxes/LabelAndInput";
import { UserData, UserDataContext } from "@/context/userDataContext";
import { saveProfileDetails } from "@/auth/updateProfileDetails";
import TagInput from "../inputBoxes/TagInputBox";

import uploadImageToCloudinary from "@/auth/uploadImageToCloudinary";

type EditProfileModalProps = {
  handleClose: Function;
  handleOpen: Function;
  isModalOpen: boolean;
};
type Social = {
  name: string;
  url: string;
};

const EditProfileModal = ({
  handleClose,
  isModalOpen,
}: EditProfileModalProps) => {
  const { userData } = useContext(UserDataContext);
  const [tags, setTags] = useState<{ tagName: string; id: string }[]>(
    userData?.tags!
  );
  const [logoInputState, setLogoInputState] = useState("");
  const [previewSource, setPreviewSource] = useState<
    string | ArrayBuffer | null
  >();
  // const [socials, setSocials] = useState<Social[]>(userData?.socialLinks!);
  const [updateProfileDetails, setUpdateProfileDetails] = useState({
    companyName: userData?.companyName,
    logoUrl: userData?.logoUrl,
    about: userData?.about,
    tags: tags,
    // socialLinks: socials,
  });
  const [loading, setLoading] = useState(false);

  // console.log(logoInputState);
  console.log(updateProfileDetails);
  // console.log(socials);

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

  // function handleSocialUpdate() {
  //   const updatedItems = socials.map((social) => {
  //     if (social?.url.includes("twitter.com")) {
  //       return { name: "Twitter", url: social?.url };
  //     } else if (social?.url.includes("linkedin.com")) {
  //       return { name: "LinkedIn", url: social?.url };
  //     } else {
  //       return social;
  //     }
  //   });
  //   setSocials(updatedItems);
  // }

  // const handleSocailInputChange = (
  //   index: number,
  //   e: { target: { value: string } }
  // ) => {
  //   const { value } = e.target;
  //   const updatedItems = [...socials];
  //   updatedItems[index] = { name: "", url: value };
  //   setSocials(updatedItems);
  // };

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
    await uploadImageToCloudinary(previewSource, userData._id);
    console.log(previewSource);
  }

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

            {/* {socials?.map((social, index) => (
              <LabelAndInput
                key={index}
                className="w-full"
                label={"Upload Logo"}
                inputType={"text"}
                placeholder={""}
                handleChange={handleFileChange}
                name={"logoUrl"}
                value={social?.url}
              />
              // <div key={index}>
              //   <label>
              //     {social?.name ? social?.name + " URL" : "URL"}
              //     <input
              //       type="text"
              //       value={social?.url}
              //       onChange={(e) => handleSocailInputChange(index, e)}
              //     />
              //   </label>
              // </div>
            ))} */}

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
