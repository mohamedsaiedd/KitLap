import React from 'react'
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

export default function LoaderUi ()  {

return(
                <div>
                    <ReactPlaceholder type='media' rows={17} ready={false} color='#E0E0E0'>

                    </ReactPlaceholder>
                </div>
)
                
}