import React from "react";
import Counter from "./Counter";

var seconds = 0
//create your first component
const Home = () => {
	seconds++
	return (
		<div className="text-center">
            <Counter seconds ={seconds}/>
		</div>
	);
};

export default Home;