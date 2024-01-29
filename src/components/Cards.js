import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Button } from 'react-bootstrap';


function Cards() {
  const whatsappLink = 'https://wa.me/905436155147'; // WhatsApp bağlantısı
  return (
    <div className='cards'>



    
 {/* Metin kutucuğu */}
 <div className='portfolio-description'>
        <h2>Grafikerem Portfolyo</h2>
        <p>
          Grafikerem, özgün ve etkileyici grafik tasarımlarıyla dikkat çekiyor. <br></br>
          Portföyümde yer alan örnek projeler:
        </p>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/logo4.jpg'
              text='Küresel taşımacılıkta hız ve güvenin adresi. Zamanında teslimat ve etkin lojistik çözümleriyle sektörde öne çıkan lider.'
              label='Alpergun Logo'
            
            />
            <CardItem
              src='images/logo2.jpg'
              text='Çevre dostu taşımacılıkta uzmanlaşmış firma. Sürdürülebilir lojistik yaklaşımı ile doğayı koruyan çözümler sunuyor.'
              label='Akya Logo'
            
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/logo3.jpg'
              text='Hızlı ve güvenilir taşımacılık hizmetleriyle öne çıkan firma. Acil ve zaman kritik gönderiler için ideal çözüm ortağı.'
              label='Atilla Ergün logo'
             
            />
            <CardItem
              src='images/logo1.jpg'
              text='Yenilikçi lojistik çözümleriyle dikkat çeken firma. Akıllı teknoloji kullanımı ile taşıma süreçlerini optimize ediyor.'
              label='Babahan logo'
              
            />
            <CardItem
              src='images/logo5.jpg'
              text='Küresel taşımacılıkta çevre dostu lider. Yenilenebilir enerji kaynaklarına odaklanarak karbon ayak izini minimize ediyor.'
              label='Doğan logo'
             
            />
          </ul>
        </div>
      </div>
  {/* WhatsApp Bağlantısı */}
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <Button className="btn btn-success" style={{width:250, borderRadius:30, backgroundColor:'green'}} >WhatsApp</Button>
        </a>
      </div>
    </div>
  );
}

export default Cards;