import { } from '@fortawesome/free-solid-svg-icons';

import { faAppStore, faChrome, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

import dormguide1 from './dormguide1.png';
import dormguide2 from './dormguide2.png';
import dormguide3 from './dormguide3.png';
import dormguide4 from './dormguide4.png';
import dormguide5 from './dormguide5.png';
import dormguide6 from './dormguide6.png';
import profile from './profile.png';

export const navigation = {
	name: "Wesley",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Wesley",
	description: "A Full Stack Developer passionate about learning and creating better user experinces",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1fmZelIvGI2SS8oAYQYTAXd44vl2vjPdy/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"The tech industry is quickly evolving which is great because I love learning new platforms and frameworks that enable better user or development experinces.",
		"I enjoy bringing the drive to make the best product possible to every team I am a part of.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Javascript",
			description: `"Any application that can be written in JavaScript, will eventually be written in JavaScript." - Jeff Atwood`,
			icons: null,
		},
		{
			title: "Mobile App Development",
			description: "I create pixel perfect iOS and Android apps using React Native.",
			icons: null,
		},
		{
			title: "Web Development",
			description: "I have lead an institute funded team in replacing outdated interfaces.",
			icons: null,
		},
		{
			title: "Full Stack Development",
			description: "I currently work at Presso in as a Full Stack Developer bringing our internal tools to the next level.",
			icons: null,
		},
		{
			title: "Java",
			description: "Java was my first programming language and I have used it for work, school, and projects over a decade.",
			icons: null,
		},

	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Working Dogs Endurance",
			description: "Collaboration between Georgia Institute of Technology and University of Pennsylvania measuring working dogs endurance levels with heart rate deflection point algorithms.",
			icons: [
			]
		},
		{
			title: "Dungeon Crawler",
			description: "A JavaFX dungeon crawler game. Featuring randomly generated levels, potions, items, and weapons.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/WDaven/dungeon-game",
				},
			]
		},
		{
			title: "Hiphop2020",
			description: "Virtual reality HipHop pedagogical archive. Headed by Dr. Jocelyn Wilson as a part of FourFourBeatProject. ",
			icons: [
				{
					icon: faChrome,
					link: "https://www.fourfourbeatproject.org/",
				},
			],
		},
		{
			title: "dormguide",
			description: "A react native app allowing Georgia Tech students to find the best dorms on campus.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/WDaven/public-dormguide",
				},
				{
					icon: faAppStore,
					link: "https://apps.apple.com/us/app/dormguide/id6443801396",
				},
				{
					icon: faGooglePlay,
					link: "https://play.google.com/store/apps/details?id=dorm.finder&hl=en_US&gl=US",
				},
			],
			images: [
				dormguide1.src,
				dormguide2.src,
				dormguide3.src,
				dormguide4.src,
				dormguide5.src,
				dormguide6.src,
			],
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Please do not hesitate to reach out directly by email at daven.wesley@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:daven.wesley@gmail.com",
			isPrimary: true,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Wesley Davenport | Computer Science | React Native | Java developer",
	description: "I create mobile apps, websites, and Java applications. I graduated from Georgia Institute of Technology (GT) in 2022 with a degree in Computer Science.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@Wesley Davenport",
	description: "Software Developer | React Native | Java | React.js",
	cards: [
		{
			title: "My website",
			link: "https://wesleydavenport.dev/",
		},
		{
			title: "dormguide",
			link: "https://apps.apple.com/us/app/dormguide/id6443801396",
		},
		{
			title: "My GitHub",
			link: "https://github.com/WDaven/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/wesley-davenport-94768a149/",
		},
	]
}