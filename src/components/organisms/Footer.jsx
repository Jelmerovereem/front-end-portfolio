import React from 'react';
import styled from 'styled-components';
import * as colors from 'styles/colors';

const Container = styled.div`
	background: ${colors.bgFooter};
	padding: 100px 5%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-content: center;
	align-items: center;
	grid-gap: 50px;
	grid-template-areas: 
		"info-text title footer-nav-links"
		;
	@media screen and (max-width:  768px) {
		grid-template-columns: repeat(1, 1fr);
		grid-template-areas: 
		"title"
		"info-text"
		"footer-nav-links"
		;
	}
`

const Title = styled.h2`
	font-size: 7vmin;
	font-weight: 400;
	opacity: .6;
	text-align: center;
	margin: 0;
	grid-area: title;
	@media screen and (max-width:  768px) {
		font-size: 3em;
	}
`

const InfoText = styled.p`
	margin: 0;
	opacity: .6;
	text-align: center;
`

const InfoLink = styled.a`
	margin: 0;
	opacity: .6;
	text-decoration: none;
	text-align: center;
	display: block;
`

const FooterNav = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: .6;
	grid-area: footer-nav-links;
`

const NavLink = styled.a`
	font-size: 2vmin;
	text-decoration: none;
	margin: 0 10px;
	color: ${colors.textColor};
	font-weight: 500;
	@media screen and (max-width: 768px) {
		font-size: 1em;
	}
`

const Footer = () => {
	return (
		<Container>
			<div style={{ gridArea: "info-text" }}>
				<InfoText>Netherlands / + 31 6 12125820</InfoText>
				<InfoLink href="mailto:jelmer_overeem@hotmail.com">Jelmer_overeem@hotmail.com</InfoLink>
				<div style={{ display: "flex", justifyContent: "center", whiteSpace: "pre-wrap"}}>
					<InfoLink href="https://www.linkedin.com/in/jelmer-overeem-a9a72a190/" target="_blank">LinkedIn</InfoLink><span style={{opacity: .6}}> | </span><InfoLink href="https://github.com/Jelmerovereem/">Github</InfoLink>
				</div>
			</div>
			<Title>Portfolio</Title>
			<FooterNav>
				<NavLink href="#about">About</NavLink>
				|
				<NavLink href="#projects">Portfolio</NavLink>
				|
				<NavLink href="#contact">Contact</NavLink>
			</FooterNav>
		</Container>
	)
}

export default Footer;