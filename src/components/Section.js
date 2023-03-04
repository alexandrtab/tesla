import styled from "styled-components";
import Fade from "react-reveal/Fade";
export const Section = ({
	title,
	description,
	leftBtnText,
	rightBtnText,
	backgroundImg,
}) => {
	return (
		<Wrap bgImage={backgroundImg}>
			<Fade bottom>
				<ItemText>
					<Title>{title}</Title>
					<p>{description}</p>
				</ItemText>
			</Fade>
			<Buttons>
				<Fade bottom>
					<ButtonGroup>
						<LeftButton>{leftBtnText}</LeftButton>
						{rightBtnText && <RightButton>{rightBtnText}</RightButton>}
					</ButtonGroup>
				</Fade>
				<DownArrow src="/images/down-arrow.svg" />
			</Buttons>
		</Wrap>
	);
};

const Wrap = styled.div`
	width: 100vw;
	height: 100vh;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-image: ${(props) => `url("/images/${props.bgImage}")`};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const ItemText = styled.div`
	padding-top: 16vh;
	text-align: center;
`;
const Title = styled.h1`
	font-weight: 500;
	font-size: 40pt;
`;

const ButtonGroup = styled.div`
	display: flex;
	margin-bottom: 20px;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
const LeftButton = styled.div`
	background-color: rgba(23, 26, 32, 0.8);
	height: 45px;
	width: 300px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	opacity: 0.9;
	text-transform: uppercase;
	font-size: 16px;
	font-weight: 500;
	cursor: pointer;
	margin: 8px;
`;

const RightButton = styled(LeftButton)`
	background-color: white;
	opacity: 0.9;
	color: black;
`;
const DownArrow = styled.img`
	margin-top: 20px;
	height: 40px;
	animation: animateDown infinite 1.5s;
	cursor: pointer;
`;
const Buttons = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
