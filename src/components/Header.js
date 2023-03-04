import { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
export const Header = () => {
	const [burgerStatus, setBurgerStatus] = useState(false);
	return (
		<Container>
			<a href="/">
				<img src="/images/logo.svg" alt="logo" />
			</a>
			<Menu>
				<a href="/">Model S</a>
				<a href="/">Model 3</a>
				<a href="/">Model X</a>
				<a href="/">Model Y</a>
			</Menu>
			<RightMenu>
				<a href="/">Shop</a>
				<a href="/">Tesla account</a>
				<CustomMenu onClick={() => setBurgerStatus(true)} />
			</RightMenu>
			<BurgerNav show={burgerStatus}>
				<CloseWrapper>
					<CustomClose onClick={() => setBurgerStatus(false)} />
				</CloseWrapper>
				<li>
					<a href="/">Existing Inventory</a>
				</li>
				<li>
					<a href="/">Used Inventory</a>
				</li>
				<li>
					<a href="/">Trade-in</a>
				</li>
				<li>
					<a href="/">Cybertruck</a>
				</li>
				<li>
					<a href="/">Roadester</a>
				</li>
			</BurgerNav>
		</Container>
	);
};

const Container = styled.div`
	min-height: 60px;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1;
`;

const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	a {
		font-weight: 600;
		text-decoration: uppercase;
		padding: 0 10px;
		flex-wrap: nowrap;
	}
	@media (max-width: 768px) {
		display: none;
	}
`;

const RightMenu = styled.div`
	display: flex;
	align-items: center;
	a {
		font-weight: 600;
		text-decoration: uppercase;
		margin-right: 10px;
	}
`;

const CustomMenu = styled(MenuIcon)`
	cursor: pointer;
`;

const CustomClose = styled(CloseIcon)`
	cursor: pointer;
`;

const CloseWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;
const BurgerNav = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	background-color: white;
	width: 300px;
	z-index: 100;
	list-style-type: none;
	padding: 20px;
	transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
	transition: transform 0.2s;
	li {
		padding: 15px 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		a {
			font-weight: 600;
		}
	}
`;
