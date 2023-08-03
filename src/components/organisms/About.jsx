import React from 'react';
import styled from 'styled-components';
import * as colors from 'styles/colors';
import AboutImg from 'assets/img/about_profile.jpg';
import SecondaryBtn from 'components/atoms/SecondaryBtn';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${colors.bgDark};
	padding: 200px 5%;
	@media screen and (max-width:  768px) {
		padding: 80px 5%;
	}
`

const Title = styled.h2`
	font-size: 8vmin;
	color: ${colors.textColor};
	font-weight: 700;
	text-transform: uppercase;
	margin: 0;
	@media screen and (max-width:  768px) {
		font-size: 8vmin;
	}
`

const AboutText = styled.p`
	font-size: 2.4vmin;
	color: ${colors.textColor};
	opacity: .6;
	margin-bottom: 50px;
	@media screen and (max-width:  768px) {
		font-size: 1.5em;
	}
`

const ProfilePic = styled.img`
	width: 80%;
	height: auto;
	box-shadow: 0 5px 15px lightgrey;
	@media screen and (max-width: 1200px) {
		display: none;
	}
`

const About = () => {

	return (
		<Container id="about">
			<div>
				<ProfilePic src={AboutImg} alt="" />
			</div>
			<div>
				<Title>About me</Title>
				<AboutText>Hello there, my name is Jelmer and I am a creative front-end developer. My love and passion go out to developing beautiful, fast, responsive and intuitive websites and web applications. This passion has already led to some great projects and results!</AboutText>
				<SecondaryBtn text="My Code Projects" href="#projects" small={true} />
			</div>
		</Container>
		)
}

export default About;