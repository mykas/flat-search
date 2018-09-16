import React from 'react';
import { Col, Card, Row } from 'wix-style-react/Grid';
import { translate } from 'react-i18next';

export default translate(null, {
  wait: true,
})(({ ad, t }) => {
  return (
    <div data-hook="card">
      <Card>
        <Card.Content>
          <Row>
            <Col span={4}>
              <img alt={ad.img} width="150" src={ad.img} />
            </Col>
            <Col span={8}>
              <Row>
                <Col span={9}>
                  <div data-hook="address">{ad.address}</div>
                </Col>
                <Col span={3}>
                  <div data-hook="price">{ad.price}</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div data-hook="rooms">
                    {ad.rooms} {t('card.room')}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Content>
      </Card>
    </div>
  );
});
