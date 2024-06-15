import { useState, ChangeEvent } from "react";
import editIcon from "./pen-to-square-regular.png";
import defaultProfilePic from "./defaultProfilePic.png";

const ChangePopover = ({
  value,
  setValue,
  onSubmit,
}: {
  value: string;
  setValue: (arg1: string) => void;
  onSubmit: (arg1: null) => void;
}) => {
  return (
    <>
      <input
        type="text"
        className="mt-4 text-center text-2xl"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
        }}
      />
      <button
        className="mt-4 border-2 border-solid p-2"
        onClick={() => {
          onSubmit(null);
        }}
      >
        confirm
      </button>
    </>
  );
};

const Profile = () => {
  const [name, setName] = useState<string>("test name");
  const [showPopover, setShowPopover] = useState<string | null>(null);
  const [imgUrl, setImgUrl] = useState<string>(defaultProfilePic);

  const maskedImgUrl = imgUrl === defaultProfilePic ? "" : imgUrl;

  return (
    <div className="min-h-52 basis-1/3 border-2 border-solid p-8 text-center">
      <h3 className="font-mono">// Y–O–U //</h3>
      {showPopover === "name" && (
        <ChangePopover
          value={name}
          onSubmit={setShowPopover}
          setValue={setName}
        />
      )}
      {showPopover === "image" && (
        <ChangePopover
          value={maskedImgUrl}
          onSubmit={setShowPopover}
          setValue={setImgUrl}
        />
      )}
      {!showPopover && (
        <>
          <div className="mt-4 inline-flex">
            <h4 className="text-4xl">{name}</h4>
            <button
              onClick={() => {
                setShowPopover("name");
              }}
            >
              <img src={editIcon} className="ml-4 w-5" />
            </button>
          </div>
          <div className="relative mt-4 inline-flex">
            <img src={imgUrl} className="max-h-64" />
            <button
              onClick={() => {
                setShowPopover("image");
              }}
            >
              <img
                src={editIcon}
                className="absolute bottom-0 left-0 ml-4 w-5"
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
