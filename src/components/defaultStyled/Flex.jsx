import styled from 'styled-components';

const FlexItem = styled.div`
	display: flex;
	justify-content: ${props => props.hAlign ? props.hAlign : "initial"};
	align-items: ${props => props.vAlign ? props.vAlign : "initial"};
	.marginBtn {
		margin: 20px;
	}
`

export default FlexItem;