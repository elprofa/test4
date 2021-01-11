import logo from './logo.svg';
import Image from 'react-bootstrap/Image'
import React,{Component} from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import {Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HandleTitle } from './Components/Title';
import { HandleSousTitle } from './Components/SousTitre';
import { HandleText } from './Components/TextBlock';
import ImageUn  from './Components/Img/ImageUn.jpg';
import fotohero from './Components/Img/fotohero.jpg'
import imageTroishome from './Components/Img/imageTroishome.jpg';
import image_4_home from './Components/Img/image_4_home.jpg';
import Hilde2edi from './Components/Img/Hilde2edi.jpg';
import packaging_home from './Components/Img/packaging_home.jpg';
import Ray from './Components/Img/Ray.PNG';


class App extends Component{
  render() {
    return (
    <Container className="justify-content-md-center">
      <Row>
        <Col>
          <HandleTitle title='Ray draagt zorg voor je lichaam. Onze producten bevatten 
          geen commerciële ingrediënten, maar enkel werkzame stoffen die zacht zijn voor 
          je huid' ></HandleTitle>
        </Col>
     </Row>

      <Row>
        <Col>
          <HandleSousTitle title='Wat zijn commerciële ingrediënten?' />
          <HandleText title='Veel cosmeticaproducten bevatten ingrediënten die interessant zijn vanuit een commercieel oogpunt, maar niet gezond zijn voor je lichaam. Ray gebruikt enkel ingrediënten die zorgvuldig werden geselecteerd door onze apotheker Hilde Nys en bijdragen tot de werking van het product.'/>
            <HandleSousTitle title='Koester je huid.' />
            <HandleText title='Onze producten zijn ontwikkeld met oog op zo weinig mogelijk kans op irritatie en zo veel 
      mogelijk effect. Alle ingrediënten in onze haar- en lichaamsverzorging zijn veilig en zacht, voor zowel je 
      huid als de planeet.' />
      <HandleSousTitle title='Meer over onze ingrediënten' />
        </Col>

        <Col> <Image src={ImageUn} fluid /></Col>
      </Row>
      <Row >
        <Col className='m-1'>
        <Image src={imageTroishome} fluid/>
        <Col> <Image src={image_4_home} sizes={50}/> </Col>
        </Col> 
      </Row>

      <Row>
        <Col>   </Col>
      </Row>

      <Row>
        <Col>
          <HandleText title='Nieuwste artikel'/>
          <Image src={Hilde2edi} fluid />
          <HandleSousTitle title='3 hair- & bodycare trends om in de 
          gaten te houden in 2021'/>
        </Col>
        <Col>
        <HandleTitle title='We delen graag onze kennis over gezonde verzorging met jou. 
        Zin om bij te leren?'> 
        </HandleTitle> 
        <HandleText title='Alle Ray producten worden gecreëerd door onze apotheker Hilde Nys. 
        Maar naast gezonde haar- en lichaamsverzorging delen we graag nog veel meer met jou. 
        We willen je wegwijs maken in de ingrediënten die we gebruiken en onze 
        duurzame missie.'/>
        <HandleSousTitle title='Word expert van je verzorging'/>
        </Col>
        </Row>

        <Row>
          <Col>
            <HandleTitle title='Onze verpakkingen zijn duurzaam en dragen zorg voor onze 
            planeet.'/>
            <HandleText title='We geven om je huid en je gezondheid, maar ook om onze planeet. 
            Alle Ray producten breken snel af in de natuur en onze verpakkingen bestaan 
            voornamelijk uit suikerriet of gerecycleerd plastic. Bovendien zijn onze 
            verpakkingen recycleerbaar. Help je een handje mee om Ray goed voor je 
            gezondheid, huid en planeet te houden?'/>

            <HandleSousTitle title='Meer over onze verpakking'/>
          </Col>
          <Col>
            <Image src={packaging_home} fluid/>
          </Col>
        </Row>

        <Row>
          <Col>
            <Image src={Ray} fluid/>
          </Col>
        </Row>

      <Row>
        <Col>
          <span>Alle rechten voorbehouden © Ray 2020</span>
          <span>Veldstraat 66, 9000 Gent, België, +32 (0)476 44 94 62</span>
        </Col>

        <Col></Col>

        <Col>brand by Ollie</Col>
      </Row>
    </Container>

    )
  }
}

export default App;
