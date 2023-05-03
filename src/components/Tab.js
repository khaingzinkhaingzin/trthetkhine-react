import React from "react";
import "./Tab.css";
import { useState } from "react";

function TabHeader({ header, index, changeTab, active }) {
    let className = "tab-header";
    if (active)
    {
        className += " active";
    }
	return <span className={className} onClick={() => changeTab(index)}>{header}</span>;
}

const Tab = ({ headers, children }) => {
	const [activeTab, setActiveTab] = useState(0);
    const changeTab = (tabIndex) => {
        setActiveTab(tabIndex);
    }

	return (
		<div className="tab-container">
			<div>
				{headers.map((header, index) => (
					<TabHeader 
                        key={index} 
                        header={header}
                        index={index}
                        changeTab={changeTab}
                        active={activeTab==index}
                    />
				))}
			</div>
			<div className="tab-body">
                {children[activeTab]}
            </div>
		</div>
	);
};

export default Tab;
