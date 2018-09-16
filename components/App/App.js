import React from 'react';
import axios from 'axios';
import { translate } from 'react-i18next';
import s from './App.scss';
import { Container, Col, Row } from 'wix-style-react/Grid';
import PropTypes from 'prop-types';

import Header from '../Layout/Header/Header';
import Card from '../Card/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ads: [],
      loaded: false,
    };
  }
  static propTypes = {
    t: PropTypes.func,
  };
  async componentDidMount() {
    const aruodas = await axios.get('/scrap');
    this.setState({
      loaded: true,
      ads: aruodas.data,
    });
  }
  render() {
    const { ads, loaded } = this.state;
    return (
      <div>
        <Header dataHook="header" />
        {loaded && (
          <div className={s.content}>
            <Container>
              {ads.map((ad, index) => (
                <Row key={index}>
                  <Col span={3} />
                  <Col span={6}>
                    <Card ad={ad} />
                  </Col>
                  <Col span={3} />
                </Row>
              ))}
            </Container>
          </div>
        )}
      </div>
    );
  }
}

export default translate(null, {
  wait: true,
})(App);
