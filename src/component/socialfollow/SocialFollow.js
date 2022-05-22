import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  const colorIcon = "#d90200";
  const sizeIcon = "1x";
  return (
    <div>
      <a class="a-social social_icon" href='https://www.instagram.com/adavsede/'>
        <FontAwesomeIcon color={colorIcon} icon={faInstagram} size={sizeIcon} />
      </a>
      <a class="a-social social_icon" href='https://www.youtube.com/c/Abra%C3%A7andoVidas'>
        <FontAwesomeIcon color={colorIcon} icon={faYoutube} size={sizeIcon} />
      </a>
      <a class="a-social social_icon" href='https://www.facebook.com/adavsede'>
        <FontAwesomeIcon color={colorIcon} icon={faFacebook} size={sizeIcon} />
      </a>
    </div>
  );
}