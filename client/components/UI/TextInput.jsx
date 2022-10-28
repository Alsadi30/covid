import styled from 'styled-components';

const TextInput = styled.input`
	width: 350px;
	border: ${(props) =>
		props.error ? '2px solid #ff0000' : '1px solid #efefef'};
	outline: none;
	padding: 0.85rem 0.5rem;
	background: transparent;
	font-size: 0.9rem;
	font-family: Arial;
    margin: 0.85rem 0.25rem;
	color: #333;
    box-sizing: border-box;
    border-radius: 7px;
    display: block;
	&:focus {
		border: 1px solid skyblue;
	}
`;

export default TextInput;