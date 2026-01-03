import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface Image {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	/** Array of images to be displayed in the parallax effect max 7 images */
	images: Image[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	const scale4 = useTransform(scrollYProgress, [0, 0.9], [1, 5]);
	const scale5 = useTransform(scrollYProgress, [0, 0.9], [1, 6]);
	const scale6 = useTransform(scrollYProgress, [0, 0.9], [1, 8]);
	const scale8 = useTransform(scrollYProgress, [0, 0.9], [1, 10]);
	const scale9 = useTransform(scrollYProgress, [0, 0.9], [1, 12]);

	const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

	return (
		<div ref={container} className="relative h-[250vh]">
			<div className="sticky top-0 h-screen overflow-hidden">
				{images.map(({ src, alt }, index) => {
					const scale = scales[index % scales.length];

					return (
						<motion.div
							key={index}
							style={{ scale }}
							className={`absolute top-0 flex h-full w-full items-center justify-center ${
								index === 1 ? '[&>div]:!-top-[35vh] [&>div]:!left-[10vw] [&>div]:!h-[40vh] [&>div]:!w-[40vw]' : ''
							} ${
								index === 2 ? '[&>div]:!-top-[15vh] [&>div]:!-left-[30vw] [&>div]:!h-[50vh] [&>div]:!w-[25vw]' : ''
							} ${
								index === 3 ? '[&>div]:!left-[35vw] [&>div]:!h-[35vh] [&>div]:!w-[30vw]' : ''
							} ${
								index === 4 ? '[&>div]:!top-[35vh] [&>div]:!left-[8vw] [&>div]:!h-[35vh] [&>div]:!w-[25vw]' : ''
							} ${
								index === 5 ? '[&>div]:!top-[35vh] [&>div]:!-left-[30vw] [&>div]:!h-[35vh] [&>div]:!w-[35vw]' : ''
							} ${
								index === 6 ? '[&>div]:!top-[25vh] [&>div]:!left-[30vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]' : ''
							} `}
						>
							<div className="relative h-[30vh] w-[30vw] overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-stone-100">
								<img
									src={src || 'https://images.unsplash.com/photo-1611085583191-a3b13b24424a?w=800&q=80'}
									alt={alt || `Parallax image ${index + 1}`}
									className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
									loading="lazy"
								/>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
