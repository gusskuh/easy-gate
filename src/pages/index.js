import React from 'react'

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



const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

const FeatureCard = ({ subHead, icon, text1, text2 }) => (
  <Box
    width={[1, 1/2, 1/3]}
    px={2}
    py={2}
  >
    <Card p={3} style={{minHeight: 263}}>
      <FontAwesomeIcon icon={icon} style={{fontSize: '30px', color: theme.colors.blue }}/>
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

const IndexPage = () => (
  <Layout>
    <Relative>
      <Absolute
        top={0} right={0} bottom={0} left={0} zIndex={-2}
        style={{height: '100%'}}>
        <Image
          src={coverPhoto}
          alt='שער בטיחות לילדים'
          width={1}
          style={{height: '100%', objectFit: 'cover'}}
        />
      </Absolute>
        <Container color={'white'} py={[3,6]}>
          <Flex flexWrap='wrap-reverse' style={{ alignItems: 'center' }}>
            <Box width={1}>
              <Heading  textAlign={'center'} color={'white'} fontSize={7}><EasyGate /></Heading>
              <Heading is='h1' fontSize={4} textAlign={'center'} color={'white'}>שער בטיחות לילדים - בהתקנה עצמית</Heading>
              <Flex py={10} alignItems='center' justifyContent={'center'}>
                <Button is={'a'} href={'#orderNow'} fontSize={3}>הזמן עכשיו</Button>
              </Flex>
            </Box>
          </Flex>
        </Container>
    </Relative>

    <Container py={5}>
      <Flex flexWrap='wrap' alignItems={'center'}>
        <Box px={2} py={2} width={[1, 4/7]}>
          <Heading style={{ direction: 'rtl' }} fontSize={5}>מה זה <EasyGate />?</Heading>
          <Text
            style={{ direction: 'rtl' }}
            lineHeight={2}
            fontSize={3}
          >
            שער בטיחות לילדים מעץ המתאים לפתחים במידה 70 עד 100 ס"מ.
            השער פותח עם פטנט יחודי קל להתקנה (מצריך קדיחה) ונוח לשימוש.
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 3/7]}>
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
        <Box px={2} py={2} width={[1, 1/3]}>
          <Image alt='שער בטיחות לילדים' src={stairsClosed}/>
        </Box>
        <Box px={2} py={2} width={[1, 2/3]}>
          <Heading style={{ direction: 'rtl' }} fontSize={5}>מה מיוחד ב<EasyGate />?</Heading>
          <Text
            style={{ direction: 'rtl' }}
            lineHeight={2}
            fontSize={3}
          >
            <EasyGate /> הוא שער בטיחות לילדים מקורי המציע פתרון קל ונוח לחסימת פתחים ופתרון יחודי לחסימת מדרגות.

            היוזמה לשער הבטיחות באה מהצורך לחסום מעבר בקרבת מדרגות, ביחוד בתחילת מהלך מדרגות עולה.

            שערי הבטיחות הקיימים במקרים רבים לא מתאימים.<br/> וכאן  <EasyGate />  נכנס לתמונה!
          </Text>
        </Box>
      </Flex>
    </Container>
    <Box bg={'gray'}>
      <Container>
        <Box py={3} id={'features'}>
          <Heading style={{ direction: 'rtl', textAlign: 'center' }} fontSize={5}> תכונות יחודיות לשער בטיחות לילדים</Heading>
          <Flex flexWrap='wrap' justifyContent={'center'} alignItems={'center'} style={{ direction: 'rtl', textAlign: 'center' }}>
            <FeatureCard
              subHead={'פתיחת שער בטיחות לילדים וסגירתו ביד אחת'}
              icon={faHandPointLeft}
              text1={'הפשטות והאמינות של מנגנון הנעילה מאפשר תיפעול שער הבטיחות, כלומר פתיחה וסגירה, ביד אחת בלבד.'}
              text2={'זו תכונה חשובה מאחר שבמקרים רבים רק יד אחת פנויה לתפעול השער כך שאין צורך לפנות את היד השניה שאינה פנויה באותו רגע.'}
            />
            <FeatureCard
              subHead={'מתאים להתקנה ליד מדרגות'}
              icon={faHome}
              text1={'המבנה המיוחד של שער הבטיחות לילדים מאפשר פתיחת שער בטיחות לילדים לכיוון מעלה המדרגות דבר שלא מתאפשר בסוגים אחרים של שערים.'}
              text2={'היכולת הזאת של פתיחה לכיוון מעלה המדרגות מאפשר גם הצמדת השער לקיר, כך שבמצב פתוח או בזמן ששער בטיחות לילדים לא בשימוש, שער הבטיחות צמוד לקיר ולא מפריע לעליה ולירידה במדרגות,\n' +
              '\n' +
              'וזה יתרון חשוב מאוד.'}
            />
            <FeatureCard
              subHead={'נפתח וננעל בקליק'}
              icon={faUnlock}
              text1={'מנגנון הנעילה הפשוט והאמין מאפשר פתיחה וסגירה קלה ומהירה של השער.'}
              text2={'זו תכונה חשובה ביותר כי בהרבה מיקרים יש צורך לעבור את שער בטיחות לילדים לעיתים תכופות ולהשאירו סגור.\n' +
              '                הקלות והמהירות של פתיחת שער בטיחות לילדים וסגירתו מקלים מאוד על המעברים התכופים.'}
            />
            <FeatureCard
              subHead={'רדיוס תפעול קטן'}
              icon={faCircleNotch}
              text1={'בשער רגיל בזמן פתיחה או סגירה יש לפנות את מלוא רדיוס הסיבוב של שער בטיחות דבר הגורם\n' +
              'לצעוד צעד אחד או יותר קדימה או אחורה ובחזרה.'}
              text2={'המבנה  המיוחד של שער בטיחות לילדים מקטין את רדיוס הסיבוב של שער הבטיחות דבר המאפשר פתיחה וסגירה ללא צעדים מיותרים.   עובדה זו הופכת את המעבר בשער הבטיחות לנוחה יותר ומהירה יותר.'}
            />
          </Flex>
          <Box  py={3} style={{textAlign: 'center'}}>
            <Button is={'a'} href={'#orderNow'} fontSize={3}>הזמן עכשיו</Button>
          </Box>
        </Box>
      </Container>
    </Box>

    <Box>
      <Container>
        <Flex justifyContent={'center'}>
          <Box py={3} width={[1, 1/2]}>
            <Heading style={{ direction: 'rtl', textAlign: 'center' }} fontSize={5}>גלרייה</Heading>
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
        <Heading style={{ direction: 'rtl', textAlign: 'center' }} fontSize={3}>כמה זה עולה?</Heading>
        <Heading style={{ direction: 'rtl', textAlign: 'center' }} fontSize={3}>מחיר יחידה - 399 ש"ח</Heading>
        <Subhead style={{ direction: 'rtl', textAlign: 'center' }} fontSize={2} p={2}>
          + דמי משלוח 50 ש"ח (יש אפשרות לאיסוף עצמי)
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
        <Heading style={{ direction: 'rtl', textAlign: 'center' }} fontSize={3}>צור קשר</Heading>
        <Subhead style={{ direction: 'rtl', textAlign: 'center' }} fontSize={2} p={2}>
          בטלפון: <span type='tel'><a href="tel:+972548085509">054-808-5509</a></span>
        </Subhead>
        <Subhead style={{ direction: 'rtl', textAlign: 'center' }} fontSize={2} p={2}>
          במייל: <a href="mailto:gmail@gmail.com">moshe5005@gmail.com</a>
        </Subhead>
        <Subhead style={{ direction: 'rtl', textAlign: 'center', marginBottom: '15px' }} fontSize={2} p={2}>
         כתובת: הבנים 22, הוד השרון.
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
         כל הזכויות שמורות ל &copy; easygate.co 
        </Subhead>
      </Container>
    </Box>

  </Layout>
)

export default IndexPage
