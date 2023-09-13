import React from 'react';

const MultiSelect = () => {
    return (
        // <h1>Multi Select Field</h1>
        <form className="mt-10">
            <div className='row mt-10'>
                <div className='col-2 text-center'>
                    {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className='col-2 text-center'>
                        {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        {/* <div id="emailHelp" className="form-text">Описание параметра</div> */}
                </div>
                <div className='col-2 text-center'>
                        {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        {/* <div id="emailHelp" className="form-text">Описание параметра</div> */}
                </div>
                <div className='col-2 text-center'>
                        {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        {/* <div id="emailHelp" className="form-text">Описание параметра</div> */}
                </div>
                <div className='col-2 text-center'>
                        {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        {/* <div id="emailHelp" className="form-text">Описание параметра</div> */}
                </div>
                <button type="submit" className="btn btn-primary col-2">Submit</button>
            </div>
        </form>
    );
};

export default MultiSelect;
