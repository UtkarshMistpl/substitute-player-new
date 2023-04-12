import {
	AppBar,
	Toolbar,
	Tab,
	Tabs,
	Typography,
	useMediaQuery,
	useTheme,
	Box,
} from "@mui/material";
import Face6Icon from "@mui/icons-material/Face6";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { useState } from "react";
import DrawerComp from "./drawer";
import { useLogout } from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";
// import { Tab } from "@chakra-ui/react";
const MainNav = (props) => {
	const [value, setValue] = useState(props.value);
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
	const Pages = ["Home", "Register Player", "Register Club", "Players", "Club"];
	const { logout } = useLogout();
	const navigate = useNavigate();

	const changeRoute = (value) => {
		switch (value) {
			case 0:
				return "/Home";
			case 1:
				return "/PlayerForm";
			case 2:
				return "/SportCenter";
			case 3:
				return "/admin/players";
			case 4:
				return "/admin/sportcenters";
			default:
				return "/Home";
		}
	};

	return (
		<>
			<Box sx={{ boxShadow: 3 }}>
				<AppBar sx={{ background: "#319795" }}>
					<Toolbar>
						<Typography>Substitute Player</Typography>

						{isMatch && <DrawerComp />}
						{!isMatch && (
							<Tabs
								textColor="inherit"
								value={value}
								sx={{
									"& .MuiTabs-indicator": { backgroundColor: "#54e1d9" },
								}}
								onChange={(e, value) => {
									setValue(value);
									const Path = changeRoute(value);
									navigate(Path);
								}}
							>
								{Pages.map((page, index) => (
									<Tab key={index} label={page} />
								))}
							</Tabs>
						)}

						<Typography
							sx={{
								marginLeft: "auto",
								marginRight: "0.5rem",
								cursor: "pointer",
							}}
							onClick={() => {
								logout();
							}}
						>
							Logout <LogoutRoundedIcon />
						</Typography>

						<Face6Icon />
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};

export default MainNav;
