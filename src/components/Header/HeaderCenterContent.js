import React from 'react';
import ListItem  from '../../components/List/ListItem'

export default function HeaderCenterContent({data}){

        
        return (
            <div>
                <ul >
                    <ListItem data={data || []} className="null"></ListItem>
                </ul>
            </div>
        );
    
}
