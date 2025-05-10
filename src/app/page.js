"use client";
import { IPhoneFrame } from "./components/IphoneFrame";
import { ScreenTwo } from "./components/ScreenTwo";
import { ScreenThree } from "./components/ScreenThree";
import { ScreenOne } from "./components/ScreenOne";
import { Fader } from "./components/Fader";
import { useAnimation } from "./hooks/useAnimation";
export default function Home() {
	const { animation, startFirstTimeline } = useAnimation();
	return (
		<div className="bg-black">
			<IPhoneFrame>
				<ScreenOne />
				{/* <Fader /> */}
				<ScreenTwo onClick={startFirstTimeline} />
				<ScreenThree />
			</IPhoneFrame>
		</div>
	);
}
