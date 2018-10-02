import React from 'react'
import { Toolbar, NavLink, theme } from 'rebass'
import EasyGate from '../components/EasyGate'

const Header = ({ siteTitle }) => (
  <Toolbar bg={theme.colors.blue} color={'white'}>
    <NavLink>
      <EasyGate />
    </NavLink>
    <NavLink href={'#orderNow'} ml='auto'>
      הזמן עכשיו
    </NavLink>
    <NavLink href={'#features'}>
      פרטים
    </NavLink>
    <NavLink href={'mailto:myeasygate@gmail.com'}>
      צרו קשר
    </NavLink>
  </Toolbar>
)

export default Header
