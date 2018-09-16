import 'jsdom-global/register';
import React from 'react';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import eventually from 'wix-eventually';
import { mount } from 'enzyme';
import nock from 'nock';
import translation from '../src/assets/locale/messages_en.json';

const i18nData = {
  lng: 'en',
  keySeparator: '$',
  resources: {
    en: { translation },
  },
};

export const baseURL = `http://localhost:5554`;

export const mockRequest = (link, response) =>
  nock(baseURL)
    .get(link)
    .reply(200, response);

export const mountApp = Component =>
  mount(
    <I18nextProvider i18n={i18next.init(i18nData)}>
      {Component}
    </I18nextProvider>,
    {
      attachTo: document.createElement('div'),
    },
  );

export const wixEventually = fn =>
  eventually.with({ timeout: 1000, interval: 10 })(fn);
