import styled from 'styled-components';

const Button = styled.button`
    border: none;
	outline: none;
	background: ${(props) => props.bg ? props.bg : '#1d5693'};
	color: white;
	border-radius: 0.15rem;
	padding: ${(props) => props.padding ? props.padding : '0.8rem 1.5rem'};
	margin: 0.2rem;
	font-size: 0.9rem;
	font-family: Arial;
	font-weight: 500;
	letter-spacing: 0.1rem;
	text-transform: uppercase;
	cursor: pointer;
	&:hover {
		background: ${(props) => props.bg ? props.bg : '#1d5693'};
	}  
`;

export const ProceedButton = styled.button`
	border: none;
	outline: none;
	background: ${(props) => props.bg ? props.bg : '#029FAE'};
	color: white;
	border-radius: 0.35rem;
	padding: ${(props) => props.padding ? props.padding : '0.8rem 1.5rem'};
	margin: 0.2rem;
	font-size: 1rem;
	cursor: pointer;
	width: 100%;
	transition: all 0.3s ease;
	&:hover {
		background: ${(props) => props.bg ? props.bg : '#1d5693'};
}  
`;
export default Button;