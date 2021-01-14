import React from 'react';
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap';
import me from '../assets/me.jpg';

const About = () => {
  return (
    <div className = "about text-left mt-2">
     <Container>
       <Tab.Container>
         <Row>
           <Col sm={3}>
            <Nav variant="pills" className="flex-column mt-2">
              <Nav.Item>
                <Nav.Link eventKey="what">Что такое Zero Waste</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="why">Почему Zero Waste</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="where">Где находится наш магазин</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="team">Наша команда</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="hours">Часы работы</Nav.Link>
              </Nav.Item>
            </Nav>
           </Col>
           <Col sm={9}>
             <Tab.Content className="d-block mt-3">
               <Tab.Pane eventKey="what">
                 <img 
                    src = "https://avatars.mds.yandex.net/get-zen_doc/1585195/pub_5d020aa0f0e28300afb00ceb_5d0210d912148300af619bb6/scale_1200"
                    alt="reusable bag with oranges"
                    className="mb-3 d-block w-75 mx-auto"
                 />
                <p className="mx-auto"> Ноль отходов или ноль потерь– дословный перевод« Zero Waste».Те, кто поддерживает это движение выступают за осознанное потребление и хотят прийти к идее жизни без отходов.Такие люди пытаются не генерировать мусор вообще.Они не пользуются одноразовыми вещами, отдают сортированный мусор на переработку, видят пользу в возобновляемых источниках энергии и других слагаемых« зелёной экономики».
                </p>
                <p>
                Zero Waste– сообщество единомышленников, которые пропагандируют методы нулевых отходов на бытовом и государственном уровне. </p>
               </Tab.Pane>
               <Tab.Pane eventKey="why">
                 <img 
                    src = "http://wiki.iro.yar.ru/images/3/30/%D0%9F%D0%BB%D0%B0%D0%BD%D0%B5%D1%82%D0%B0_%D0%B2_%D0%BC%D1%83%D1%81%D0%BE%D1%80%D0%B5.jpg"
                    alt="reusable bag with oranges"
                    className="mb-3 d-block w-75 mx-auto"
                 />
                <p className="mx-auto">Цель идеологии« Ноль отходов»– сократить объём мусора, который попадает на свалки и мусоросжигательные заводы. 
                </p>
                <p>Задача сообщества изменить образ жизни и создать стойкие циклы потребления и производства, где любой избыточный материал становится ресурсом, а не мусором.В перспективе Zero Waste должен уменьшить загрязнение земли, воды и воздуха, чтобы сохранить здоровье и природу.
                </p>
               </Tab.Pane>
               <Tab.Pane eventKey="where">
                 <div style={{position:"relative", overflow:"hidden"}}>
                   <a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee", fontSize:"12px",position:"absolute", top:"0px"}}>Москва</a><a href="https://yandex.ru/maps/1/moscow-and-moscow-oblast/house/novoye_shosse_3k1/Z04Ycw9jT0AFQFtvfXlzeHRhZw==/?ll=37.586119%2C55.528326&utm_medium=mapframe&utm_source=maps&z=16.85" style={{color:"#eee", fontSize:"12px", position:"absolute", top:"14px"}}>Новое шоссе, 3к1 — Яндекс.Карты</a><iframe title="map" src="https://yandex.ru/map-widget/v1/-/CCUINIFsXA" width="560" height="400" frameborder="1" allowfullscreen="true" style={{position:"relative"}}></iframe></div>
                  <p>Адрес: МО, Ленинский район, Дрожжино, Бутово-парк 2</p>
               </Tab.Pane>
               <Tab.Pane eventKey="team">
                 <img 
                    src = {me}
                    alt="reusable bag with oranges"
                    className="mb-3 d-block w-75 mx-auto"
                 />
                < p className = "mx-auto" > В качестве разработчика, идейного вдохновителя, менеджера по закупкам, менеджера по взаимодействию с клиентами выступаю я.Надеюсь, в будущем команда будет расширяться!
                </p>
               </Tab.Pane>
               <Tab.Pane eventKey="hours">
                <h3 className="mx-auto">Часы работы 
                </h3>
                <p>Понедельник-Пятница: 11-22
                </p>
                <p>Суббота-Воскресенье: 11-20
                </p>
               </Tab.Pane>
               
             </Tab.Content>
           </Col>
         </Row>
       </Tab.Container>
     </Container>

    </div>
  )
}

export default About;