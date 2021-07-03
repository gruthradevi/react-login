
import React from 'react';

export const LoadImages: React.FunctionComponent<LoadImagesProps> = ({ apiData }) => {
return (
    <div>
     { apiData.length !== 0  && <div>
        
        <label>Total search result count : { apiData.results.length}</label><br/>

            {
                apiData.results.map((img,index) => {
                return  <img key={index} src={apiData.results[index].urls.small} alt="" />
                })
            }
            </div>
        
     }
     </div>
    ) 
};

export default LoadImages;
  