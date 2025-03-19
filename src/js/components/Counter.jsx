import React from "react";


//create your first component
const Counter = (props) => {
	return (
		<div className="text-center d-flex justify-content-center">
            <div className="hours">{Math.floor(props.seconds/3600)%60}</div>
            <div className="minutes px-2">{Math.floor(props.seconds/60)%60}</div>
            <div className="seconds px-2">{Math.floor(props.seconds%60)}</div>
		</div>
	);
};

export default Counter;