"use client";

import { useAnimation } from "@/hooks/useAnimation";
import { ScreenOne } from "@/components/ScreenOne";
import { ScreenTwo } from "@/components/ScreenTwo";
import { ScreenThree } from "@/components/ScreenThree";
import { IPhoneFrame } from "@/components/IphoneFrame";

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
