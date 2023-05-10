import KUTE from "kute.js";
import { useEffect } from "react";
import styles from "./BlobAnimation.module.scss";

export default function BlobAnimation() {
  useEffect(() => {
    const tween = KUTE.fromTo(
      "#blob1",
      { path: "#blob1" },
      { path: "#blob2" },
      { repeat: 999, duration: 3000, yoyo: true }
    );
    tween.start();
  }, []);

  return (
    <div className={styles.blob}>
      <svg
        id="visual"
        viewBox="0 0 960 540"
        width="960"
        height="540"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <g transform="translate(505.35171400821196 267.00712466345615)">
          <path
            id="blob1"
            d="M116.1 -114.4C140.3 -91.9 142.6 -46 136.1 -6.5C129.7 33 114.3 66 90.2 108C66 150 33 201 -15.3 216.3C-63.6 231.6 -127.3 211.3 -159.1 169.3C-190.9 127.3 -191 63.6 -189.4 1.5C-187.9 -60.6 -184.8 -121.2 -153 -143.7C-121.2 -166.2 -60.6 -150.6 -7.3 -143.3C46 -136 91.9 -136.9 116.1 -114.4"
            fill="#BB004B"
          ></path>
        </g>
        <g transform="translate(484.01466950861266 304.89315302592854)">
          <path
            id="blob2"
            d="M133.3 -128.6C177.4 -89.1 221.2 -44.5 214.9 -6.4C208.5 31.8 152 63.6 107.8 91.6C63.6 119.6 31.8 143.8 -1.2 145C-34.2 146.2 -68.4 124.4 -110.9 96.4C-153.4 68.4 -204.2 34.2 -218.9 -14.7C-233.6 -63.6 -212.3 -127.3 -169.8 -166.8C-127.3 -206.3 -63.6 -221.6 -9.5 -212.1C44.5 -202.5 89.1 -168.1 133.3 -128.6"
            fill="#BB004B"
          ></path>
        </g>
      </svg>
    </div>
  );
}
