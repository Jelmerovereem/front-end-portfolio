import React from 'react';
import styled from 'styled-components';
import * as colors from 'styles/colors';
import PrimaryBtn from 'components/atoms/PrimaryBtn';

const Container = styled.div`
	display: block;
	background: ${colors.bgDark};
	padding: 200px 5%;
`

const Title = styled.h2`
	font-size: 8vmin;
	font-weight: 400;
	margin: 0;
	text-align: center;	
`

const SubTitle = styled.p`
	font-size: 3vmin;
	font-weight: 500;
	text-align: center;
	margin: 0;
	opacity: .6;
	color: ${colors.textColor};
`

const EmailContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 50px;
	a {
		position: absolute;
		right: 20%;
	}
	@media screen and (max-width: 1000px) {
		flex-direction: column;
		input {
			margin-bottom: 50px;	
		}
		a {
			position: static;
		}
	}
	@media screen and (max-width: 768px) {
		margin: 50px 0 0 0;
	}
`

const EmailInput = styled.input`
	width: 50%;
	border: none;
	padding: 33px 0 33px 15px;
	font-size: 1em;
	box-shadow: 0 5px 15px lightgrey;
	border: 2px solid white;
	transition: border .3s ease;
	&:focus, &:hover {
		outline: none;
		outline-color: ${colors.btnPrimary};
		border: 2px solid ${colors.btnPrimary};
	}
	@media screen and (max-width: 768px) {
		width: 80%;
		padding: 20px 0 20px 15px;
	}
`

const Contact = () => {
	return (
		<Container id="contact">
			<Title>Let&apos;s work together</Title>
			<SubTitle>I will reach out to you asap</SubTitle>
			<EmailContainer>
				<EmailInput placeholder="Email" />
				<PrimaryBtn text="Contact me" />
			</EmailContainer>
		</Container>
		)
}

export default Contact;