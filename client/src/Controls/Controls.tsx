import React from 'react';

const Controls = ({setQuoteCount, setShowLinks, showLinks, visible}:{setQuoteCount:Function, setShowLinks:Function, showLinks:boolean, visible:boolean}) => {

    // ------------------------------------------- event handlers
    const onLinksChange = (e:any) => {
        setShowLinks(!showLinks);
    };

    const onCountChange = (e:any) => {
        setQuoteCount(Number(e.target.value));
    };        

    return (
        <div className="mb-4" style={{display: (visible ? 'block' : 'none')}}>
            <div>
                <div className="pb-1">Enter the number of quotes to retrieve:</div>
                <div>
                    <select id="mnuQuoteCount" 
                        className="bg-sky-600 hover:bg-sky-500 text-white py-2 px-3 rounded mb-3" 
                        defaultValue="3" onChange={onCountChange}>
                        <option value="1">1 quotes</option>
                        <option value="3">3 quotes</option>
                        <option value="5">5 quotes</option>
                        <option value="10">10 quotes</option>
                    </select>
                </div> 
            </div>
            
            <div>
                <div className="pb-1">Quote links:</div>
                <div>
                    <input id="chkLinks" type="checkbox" defaultChecked onChange={onLinksChange} className="mr-2 accent-sky-600 hover:accent-sky-500" />

                    <label htmlFor="chkLinks">
                        {showLinks ? "Showing the links..." : "Hiding the links..."}
                    </label>
                </div>
            </div>
        </div>
    );
}
  
export default Controls;