import React from "react";
import Digit from "./Digit";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const styleContainer = {
	backgroundColor: "black",
	marginTop: 5,
	marginLeft: 5,
	marginRight: 5
};

const icon = <i className="fa-solid fa-clock px-1 text-white"></i>;

//create your first component
const Home = (props) => {
	const secondsString = String(props.seconds).padStart(6, "0");
	const secondsArray = secondsString.split("");


	return (
		<>
			<div className="d-flex justify-content-between px-4" style={styleContainer}>
				<Digit content={icon} />
				{secondsArray.map((digit, index) => (
					<Digit key={index} content={<p className="px-2 text-white">{digit}</p>} />
				))}
			</div>
		</>
	);
};

export default Home;