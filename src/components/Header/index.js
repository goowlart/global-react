import React from 'react';
import HeaderRightButton from './HeaderRightButton'

import HeaderLeftButton from './HeaderLeftButton'
import { Container } from './styles'

export default function Header ({data}) {
    
        return (
            <Container>
            <HeaderLeftButton></HeaderLeftButton>
            <HeaderRightButton></HeaderRightButton>
            </Container>
        );
}

