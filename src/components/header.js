import React from 'react'
import { Toolbar, NavLink, theme } from 'rebass'

const Header = ({ siteTitle }) => (
  <Toolbar bg={theme.colors.blue} color={'white'}>
    <NavLink>
      Easy Gate
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
