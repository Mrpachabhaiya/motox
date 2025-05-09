import Image from "next/image";
import { IPhoneFrame } from "./components/IphoneFrame";
import { ScreenTwo } from "./components/ScreenTwo";
import { ScreenThree } from "./components/ScreenThree";
import { ScreenOne } from "./components/ScreenOne";
import { Fader } from "./components/Fader";
export default function Home() {
  return (
    <div className="bg-black">
      <IPhoneFrame>
        {/* <ScreenOne /> */}
        {/* <Fader /> */}
        <ScreenTwo />
        <ScreenThree />
      </IPhoneFrame>
    </div>
  );
}
