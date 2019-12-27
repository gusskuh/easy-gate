import React, { Component } from 'react'

import {
  Heading,
  Container,
  BackgroundImage,
  Divider,
  Card,
  Embed,
  Text,
  Box,
  Button,
  Absolute,
  Relative,
  Subhead,
  Image,
  Flex,
  theme,
} from 'rebass'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faHandPointLeft,
  faCircleNotch,
  faUnlock,
} from '@fortawesome/free-solid-svg-icons'

import SimpleMap from '../components/googleMap'



import Layout from '../components/layout'

// assets
import kitchenClosed from '../images/kitchen-closed.jpg';
import kitchenOpen from '../images/kitchen-open.jpg';
import kitchenOpenUp from '../images/kitchen-open-up.jpg';

import roomClosed from '../images/room-closed.jpg';
import roomOpen from '../images/room-open.jpg';
import roomOpenUp from '../images/room-open-up.jpg';

import stairsClosed from '../images/stairs-closed.jpg';
import stairsOpen from '../images/stairs-open.jpg';

import coverPhoto from '../images/cover-photo.jpg';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick';
import EasyGate from '../components/EasyGate';

import '../components/i18n.js'
import { withNamespaces } from 'react-i18next'
import i18n from '../components/i18n.js';





class IndexPage extends Component {

constructor() {
  super();
  this.state = {
    isLtr: false
  }
}
  
changeDirection = (bool) =>  {
    this.setState({
      isLtr: bool
    })
  }

componentDidMount() {
    let isDoSetRtl = i18n.language === 'en' ? true : false;
    this.setState({isLtr:isDoSetRtl})
  }

  render() {    
    console.log(i18n.language);
    
    const { t } = this.props;
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
    };
    
    const FeatureCard = ({ subHead, icon, text1, text2 }) => (
      <Box
        width={[1, 1 / 2, 1 / 3]}
        px={2}
        py={2}
      >
        <Card p={3} style={{ minHeight: 263 }}>
          <FontAwesomeIcon icon={icon} style={{ fontSize: '30px', color: theme.colors.blue }} />
          <Subhead fontSize={3} p={2}>
            {subHead}
          </Subhead>
          <Text>
            {text1}
          </Text>
          <Text mt={2}>
            {text2}
          </Text>
        </Card>
      </Box>
    )
    
    const ImageCard = ({ src }) => (
      <Box
        px={2}
        py={2}
      >
        <Card p={1} >
          <BackgroundImage
            ratio={1}
            src={src}
          />
        </Card>
      </Box>
    )

    return <Layout isLtr={this.state.isLtr} changeDirection={this.changeDirection}>
      <Relative>
        <Absolute
          top={0} right={0} bottom={0} left={0} zIndex={-2}
          style={{ height: '100%' }}>
          <Image
            src={coverPhoto}
            alt='שער בטיחות לילדים'
            width={1}
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </Absolute>
        <Container color={'white'} py={[3, 6]}>
          <Flex flexWrap='wrap-reverse' style={{ alignItems: 'center' }}>
            <Box width={1}>
              <Heading textAlign={'center'} color={'white'} fontSize={7}><EasyGate /></Heading>
              <Heading is='h1' fontSize={4} textAlign={'center'} color={'white'}>{t('headerTitle')}</Heading>
              <Flex py={10} alignItems='center' justifyContent={'center'}>
                <Button is={'a'} href={'#orderNow'} fontSize={3}>{t('orderNow')}</Button>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Relative>

      <Container py={5}>
        <Flex flexWrap='wrap' alignItems={'center'}>
          <Box px={2} py={2} width={[1, 4 / 7]}>
            <Heading style={{ direction: this.state.isLtr ? 'ltr' : 'rtl' }} fontSize={5}>{t('whatIs')} <EasyGate />?</Heading>
            <Text
              style={{ direction: this.state.isLtr ? 'ltr' : 'rtl' }}
              lineHeight={2}
              fontSize={3}
            >
            {t('headingText')}
          </Text>
          </Box>
          <Box px={2} py={2} width={[1, 3 / 7]}>
            <Embed>
              <iframe
                title={'Demo'}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/bHwRW5LLM1s?rel=0"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </Embed>
          </Box>
        </Flex>
      </Container>

      <Container>
        <Divider
          borderColor='gray'
        />
      </Container>

      <Container
        py={5}
      >
        <Flex flexWrap='wrap-reverse' alignItems={'center'}>
          <Box px={2} py={2} width={[1, 1 / 3]}>
            <Image alt='שער בטיחות לילדים' src={stairsClosed} />
          </Box>
          <Box px={2} py={2} width={[1, 2 / 3]}>
            <Heading style={{ direction: this.state.isLtr ? 'ltr' : 'rtl' }} fontSize={5}>{t('whatSpecial')} <EasyGate />?</Heading>
            <Text
              style={{ direction: this.state.isLtr ? 'ltr' : 'rtl' }}
              lineHeight={2}
              fontSize={3}
            >
              <EasyGate /> {t('whatSpecialText1')}

            {t('whatSpecialText2')}<br /> {t('andHere')}  <EasyGate />  {t('enters')}
          </Text>
          </Box>
        </Flex>
      </Container>
      <Box bg={'gray'}>
        <Container>
          <Box py={3} id={'features'}>
            <Heading style={{ direction: 'rtl', textAlign: 'center' }} fontSize={5}>{t('specialFeatures')}</Heading>
            <Flex flexWrap='wrap' justifyContent={'center'} alignItems={'center'} style={{ direction: 'rtl', textAlign: 'center' }}>
              <FeatureCard
                subHead={t('subHead1')}
                icon={faHandPointLeft}
                text1={t('subHead1Text1')}
                text2={t('subHead1Text2')}
              />
              <FeatureCard
                subHead={t('subHead2')}
                icon={faHome}
                text1={t('subHead2Text1')}
                text2={t('subHead2Text2')}
              />
              <FeatureCard
                subHead={t('subHead3')}
                icon={faUnlock}
                text1={t('subHead3Text1')}
                text2={t('subHead3Text2')}
              />
              <FeatureCard
                subHead={t('subHead4')}
                icon={faCircleNotch}
                text1={t('subHead4Text1')}
                text2={t('subHead4Text2')}
              />
            </Flex>
            <Box py={3} style={{ textAlign: 'center' }}>
              <Button is={'a'} href={'#orderNow'} fontSize={3}>{t('orderNow')}</Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box>
        <Container>
          <Flex justifyContent={'center'}>
            <Box py={3} width={[1, 1 / 2]}>
              <Heading style={{ direction: 'rtl', textAlign: 'center' }} fontSize={5}>{t('images')}</Heading>
              <Slider {...sliderSettings}>
                <ImageCard
                  alt='שער בטיחות חכם'
                  src={roomClosed}
                />
                <ImageCard
                  alt='שער בטיחות לילדים'
                  src={roomOpen}
                />
                <ImageCard
                  alt='השער הבטיחות החכם'
                  src={roomOpenUp}
                />

                <ImageCard
                  alt='שער הבטיחות החכם לילדים'
                  src={kitchenClosed}
                />
                <ImageCard
                  alt='שער בטיחות במצב פתוח'
                  src={kitchenOpen}
                />
                <ImageCard
                  alt='שער בטיחות לילדים מטבח פתוח'
                  src={kitchenOpenUp}
                />

                <ImageCard
                  alt='בגרם המדרגות שער בטיחות סגור'
                  src={stairsClosed}
                />
                <ImageCard
                  alt='בגרם המדרגות שער בטיחות לילדים פתוח'
                  src={stairsOpen}
                />
              </Slider>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box py={3} id="orderNow">
        <Container>
          <Divider
            borderColor='gray'
          />
          <Heading style={{ direction: 'rtl', textAlign: 'center' }} fontSize={3}>{t('howMuch')}</Heading>
          <Heading style={{ direction: 'rtl', textAlign: 'center' }} fontSize={3}>{t('cost')}</Heading>
          <Subhead style={{ direction: 'rtl', textAlign: 'center' }} fontSize={2} p={2}>
           {t('shipping')}
        </Subhead>

          <iframe
            title={'Order Now'}
            src="https://docs.google.com/forms/d/e/1FAIpQLSe3XqdI2-BFOr00GeW0xBsSL3ZlEysHDduSOIPZWmooFPR9lg/viewform?embedded=true"
            width="100%"
            height="900"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          />
        </Container>
      </Box>

      <Box py={3} id="contactUs" >
        <Container>
          <Divider
            borderColor='gray'
          />
          <Heading style={{ direction: 'rtl', textAlign: 'center' }} fontSize={3}>{t('contactUs')}</Heading>
          <Subhead style={{ direction: 'rtl', textAlign: 'center' }} fontSize={2} p={2}>
            {t('phone')}: <span type='tel'><a href="tel:+972548085509">054-808-5509</a></span>
          </Subhead>
          <Subhead style={{ direction: 'rtl', textAlign: 'center' }} fontSize={2} p={2}>
          {t('email')}: <a href="mailto:myeasygate@gmail.com">myeasygate@gmail.com</a>
          </Subhead>
          <Subhead style={{ direction: 'rtl', textAlign: 'center', marginBottom: '15px' }} fontSize={2} p={2}>
            {t('address')}
        </Subhead>
          <SimpleMap />
        </Container>
      </Box>

      <Box py={3} id="contactUs">
        <Container>
          <Divider
            borderColor='gray'
          />
          <Subhead style={{ direction: 'rtl', textAlign: 'center' }} fontSize={1} p={2}>
            {t('rights')} &copy; easygate.co
        </Subhead>
        </Container>
      </Box>

    </Layout>
  }
}


export default withNamespaces()(IndexPage)
