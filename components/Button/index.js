import { BtnAction } from "./Button.styled";
import Image from "next/image";
import DownloadIcon from "../../public/assets/icons/downloadIcon.svg";
import PlayIcon from "../../public/assets/icons/playIcon.svg";
export default function Button({ primary, text }) {
  return (
    <BtnAction primary={primary}>
      <div>
        <Image alt="button-icon" src={primary ? DownloadIcon : PlayIcon} />
      </div>
      {text}
    </BtnAction>
  );
}
