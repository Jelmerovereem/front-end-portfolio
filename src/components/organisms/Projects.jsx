import React from 'react';
import styled from 'styled-components';
import * as colors from 'styles/colors';
import PrimaryBtn from 'components/atoms/PrimaryBtn';
import Fade from 'react-reveal/Fade';
import LechaimImg from 'assets/img/projects/lechaim.jpg';
import WeatherAppImg from 'assets/img/projects/progressive_weather_app.png';
import AudioBookImg from 'assets/img/projects/audioBook.jpg';

const Container = styled.div`
	background: ${colors.bgLight};
	padding: 50px 5%;
`

const Title = styled.h2`
	font-size: 8vmin;
	color: ${colors.textColor};
	font-weight: 700;
	text-transform: uppercase;
	margin: 0;
	text-align: center;
	@media screen and (max-width:  768px) {
		font-size: 8vmin;
	}
`

const SubTitle = styled.p`
	font-size: 2.4vmin;
	color: ${colors.textColor};
	opacity: .6;
	margin-top: 0;
	margin-bottom: 50px;
	text-align: center;
	@media screen and (max-width:  768px) {
		font-size: 1.5em;
	}
`

const ProjectContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 250px 0;
	:nth-child(even) {
		flex-direction: row-reverse;
	}
	div {
		width: 80%;
		:nth-child(2) {
			text-align: center;
		}
	}
	@media screen and (max-width: 768px) {
		margin: 100px 0;
		flex-direction: column-reverse !important;
		div {
			width: 95%;
		}
	}
`

const ProjectTitle = styled.h3`
	font-size: 8vmin;
	margin: 0;
	text-transform: uppercase;
`

const ProjectDesc = styled.p`
	font-size: 2.4vmin;
	color: ${colors.textColor};
	opacity: .6;
	margin-top: 0;
	margin-bottom: 50px;
	@media screen and (max-width:  768px) {
		font-size: 1.5em;
	}
`

const ProjectImg = styled.img`
	width: 80%;
	height: 350px;
	object-fit: cover;
	box-shadow: 0 5px 15px lightgrey;
	@media screen and (max-width:  768px) {
		width: 100%;
		margin-bottom: 25px;
	}
`

const Projects = () => {

	const projects = [
	{
		title: "Lechaim",
		description: "Lechaim Official is a clothing company I started with a friend. I've built the whole webshop on my own. It has a admin dashboard, payment options(through Stripe), shipment integration, and other cool features that come with a webshop.",
		img: LechaimImg,
		link: "https://www.lechaimofficial.com/"
	},
	{
		title: "Progressive Weather app",
		description: "I've built an weather app based on a interactive map. The special thing about this app, is that it's a progressive webapp. It has: static building, Manifest file, Service worker for caching files and many more.",
		img: WeatherAppImg,
		link: "https://progressive-weatherapp.herokuapp.com/"
	},
	{
		title: "AudioBook",
		description: "AudioBook is a website made for a man with vision disorder(macular degeneration). This project involves 4 weeks of concepting, testing & prototyping. At the end of the project I've made an website where the navigation is based on speech, key presses or mouse clicks. The website responds with colors and my own voice(I've recorded everything myself!).",
		img: AudioBookImg,
		link: "https://jelmerovereem.github.io/human-centered-design-2021/prototype/index.html"
	}
	]
	return (
		<Container id="projects">
			<Title>Portfolio</Title>
			<SubTitle>My front-end projects</SubTitle>
			{
				projects.map((project, index) => {
					return <Fade left={index%2 === 0} right={index%2 !== 0} key={index}>
						<ProjectContainer>
							<div>
								<ProjectTitle>{project.title}</ProjectTitle>
								<ProjectDesc>{project.description}</ProjectDesc>
								<PrimaryBtn text="Visit Website" href={project.link} newTab={true} small={true} />
							</div>
							<div>
								<ProjectImg src={project.img} alt="" />
							</div>
						</ProjectContainer>
					</Fade>
				})
			}
		</Container>
		)
}

export default Projects;