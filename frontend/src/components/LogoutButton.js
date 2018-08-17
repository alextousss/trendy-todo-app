import React from 'react';

import { Button } from 'semantic-ui-react'
const LogoutButton = ({onClick, authenticated}) => {
    if (!authenticated) {
        return null
    }
    else { 
        return(
            <Button 
                fluid
                negative
                content="Log Out" 
                onClick={onClick} 
            />
        )
    }
}

export default LogoutButton
