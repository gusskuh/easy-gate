import React, { Component } from 'react'
import i18n from './i18n';
import { Toolbar, NavLink, theme } from 'rebass'
import EasyGate from '../components/EasyGate'
import { withNamespaces } from 'react-i18next'

class Header extends Component {
  render() {
    const { t } = this.props;
    const { changeDirection } = this.props;
    let { isLtr } = this.props

    
    const changeLanguage = (lng, isLtr) => {
      i18n.changeLanguage(lng);
      changeDirection(isLtr);
    }
    return <Toolbar bg={theme.colors.blue} color={'white'}>
      <NavLink>
        <EasyGate />
      </NavLink>
      <NavLink className="orderNow" href={'#orderNow'} ml='auto'>
        {t('orderNow')}
    </NavLink>
      <NavLink href={'#features'}>
        {t('details')}
    </NavLink>
      <NavLink href={'mailto:myeasygate@gmail.com'}>
        {t('contactUs')}
      </NavLink>
      <NavLink>
        <span style={{color: isLtr ? 'white' : 'yellow'}} onClick={() => {changeLanguage('heb', false)}}>HE</span> -
        <span style={{color: isLtr ? 'yellow' : 'white'}} onClick={() => {changeLanguage('en', true)}}>EN</span>
      </NavLink> 
    <div>
  </div>
    </Toolbar>
  }
}

export default withNamespaces()(Header);
