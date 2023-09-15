import React from "react";

const Result = ({ partnumber }) => {
    return (
        <div className="mt-5 col-12">
            {partnumber.length === 17
                    ? <h1>Your partnumber: {partnumber}</h1>
                    : <h1 className = "text-red">All parameters need to be chosen</h1>
                }
        </div>
    );
};

export default Result;
