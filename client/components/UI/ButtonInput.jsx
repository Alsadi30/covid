import styled from 'styled-components';

const ButtonInput = styled.input`
	width: 350px;
	border: ${(props) =>
		props.error ? '2px solid #ff0000' : '1px solid #efefef'};
	outline: none;
	padding: 0.85rem 0.5rem;
	background: #029FAE;;
	font-size: 0.9rem;
	font-family: Arial;
    margin: 0.25rem;
	color: #333;
    box-sizing: border-box;
    border-radius: 7px;
    color: white;
    cursor: pointer;
	&:focus {
		border: 1px solid skyblue;
	}
`;

export default ButtonInput;