import gsap from "gsap";
import { useRef, useEffect } from "react";
export const useAnimation = () => {
	const timeline = useRef(null);
	const firstTimeline = useRef(null);

	useEffect(() => {
		// No need to set the screen two's opacity to 0 cause we want its black background
		// Only setting the contents of screen two with 0 opacity and small updwards displacement
		// gsap.set(".screen-two", { opacity: 0 });
		gsap.set(".fader", { opacity: 0 });

		// "screen-two-target-container" yelai target garera yes vitra ko div access gardna sakiyo euta euta select garnu vanda to make our initial animation when loader fades down
		gsap.set(".screen-two-target-container > div", { y: -100, opacity: 0 });
		// gsap.set(".screen-three", { opacity: 0 });

		timeline.current = gsap.timeline();

		timeline.current

			// "div div yesari element select garnu hudaina,consufsion create vayo ani yedi aru developer ayera layout change gardiyo vani entire animation will break out"
			.to(".screen-one div div", {
				opacity: 1,
				duration: 0.5,
				stagger: 0.2,
				ease: "power2.out",
			})
			.to(".screen-one img", {
				scale: 1.1,
				duration: 0.5,
				ease: "elastic.out(1, 0.5)",
			})

			//yo kam lagena because we are alredy controling animation based on previous tween
			// screen 1 ra screen 2 ko background farak xa teivayra sidhai screen 1 lai tala jharda background transition animation dekhinxa
			// fader ko kam scrren 1 ko dark black background transition le garyo

			// .to(".screen-one", {
			// 	duration: 1,
			// 	onComplete: () => {
			// 		gsap.to(".screen-one", {
			// 			opacity: 0,
			// 			y: 1000,
			// 			duration: 0.5,
			// 		});
			// 	},
			// })
			// .to(".fader", {
			// 	opacity: 1,
			// 	duration: 0.5,
			// 	ease: "power2.in",
			// })
			.to(".screen-one", {
				y: 1000,
				duration: 1.5,
				ease: "power2.inOut",
			})
			// .to(".fader", {
			// 	y: 1000,
			// 	duration: 1.5,
			// 	ease: "power2.inOut",
			// 	delay: -1.5,
			// })

			.to(".screen-two-target-container > div", {
				opacity: 1,
				y: 0,
				stagger: 0.2,
				duration: 0.5,
				delay: -1.5,
			});

		// always remember to clenup the timelines when component unmounts because timeline sidhai memory ma basxa ra yedi yo component feri mount vayo vani paile kai state bta continue hunxa which can break the animation
		// animation ma delay xaina vani testo farak pardena(but garnu best practice ho), delay xa vanni always kill and reset the timeline ref
		return () => {
			if (timeline.current) {
				timeline.current.kill();
				timeline.current = null;
			}
		};
	}, []);

	//  second and third screen animations
	useEffect(() => {
		// screen three lai ni hatauna parena,but we need to keep it at the top by overlapping everything(scrren 3 ko css ma change gardeko xu hernu)
		// just yesko indivisual element lai initially fade out gare vayo,this seems good
		// gsap.set(".screen-three", { opacity: 0, y: 100 });
		gsap.set(".bike-image", { y: -200, opacity: 0 });
		gsap.set(".icon-power", { y: 100, opacity: 0 });
		gsap.set(".timerbox", { y: 100, opacity: 0 });
		gsap.set(".timerboxa", { y: 50, opacity: 0 });
		gsap.set(".charginbox", { x: -100, opacity: 0 });
		gsap.set(".members", { x: 100, opacity: 0 });
		gsap.set(".temperaturebox", { y: 50, opacity: 0 });

		firstTimeline.current = gsap.timeline({ paused: true });

		firstTimeline.current
			.to(".herocontent", {
				x: -100,
				opacity: 0,
				duration: 0.5,
				ease: "power2.in",
			})
			// .to(
			// 	".herocontent h2",
			// 	{
			// 		x: -100,
			// 		opacity: 0,
			// 		duration: 0.5,
			// 		ease: "power2.in",
			// 	},
			// 	"-=0.3"
			// )
			// .to(
			// 	".herocontent p",
			// 	{
			// 		x: -100,
			// 		opacity: 0,
			// 		duration: 0.5,
			// 		ease: "power2.in",
			// 	},
			// 	"-=0.3"
			// )
			.to(".motocycle", {
				y: -340,
				delay: -0.5,
				scale: 0.9,

				duration: 1,
				ease: "power2.out",
			})
			.to(
				".btn",
				{
					y: 100,
					opacity: 0,
					duration: 0.5,
					ease: "power2.in",
				},
				"-=1"
			)
			// .to(
			// 	".screen-two",
			// 	{
			// 		opacity: 0,
			// 		duration: 0.3,
			// 	},
			// 	"-=0.2"
			// )
			// .to(
			// 	".screen-three",
			// 	{
			// 		opacity: 1,
			// 		y: 0,
			// 		duration: 0.5,
			// 	},
			// 	"-=0.1"
			// )

			.to(
				".icon-power",
				{
					y: 0,
					opacity: 1,
					duration: 0.5,
					ease: "back.out(1.7)",
				},
				"-=0.9"
			)
			.to(
				".timerbox",
				{
					y: 0,
					opacity: 1,
					duration: 0.5,
					ease: "back.out(1.7)",
				},
				"<"
			)
			.to(
				".timerboxa",
				{
					y: 0,
					opacity: 1,
					duration: 0.5,
					ease: "back.out(1.7)",
				},
				"<"
			)
			.to(
				".charginbox",
				{
					x: 0,
					opacity: 1,
					duration: 0.5,
					ease: "back.out(1.7)",
				},
				"<"
			)
			.to(
				".members",
				{
					x: 0,
					opacity: 1,
					duration: 0.5,
					ease: "back.out(1.7)",
				},
				"<"
			)
			.to(
				".temperaturebox",
				{
					y: 0,
					opacity: 1,
					duration: 0.5,
					ease: "back.out(1.7)",
				},
				"<"
			);

		return () => {
			if (firstTimeline.current) {
				firstTimeline.current.kill();
				firstTimeline.current = null;
			}
		};
	}, []);

	const startFirstTimeline = () => {
		console.log("button clicked");
		if (firstTimeline.current) {
			firstTimeline.current.play();
		}
	};
	return { timeline, startFirstTimeline };
};
