// APP_CONFIG: Injection token to hold application-wide configuration properties that can be injected into other
// application elements such as components or services.

import {InjectionToken} from '@angular/core';

export interface ModuleConfig {
  ROUTING?: {
    PATH?: any;
    VIEW?: any;
  };
}

export interface AppConfig extends ModuleConfig {
  TITLE: string;
  DEFAULT_LANGUAGE: string;
}

export const APP_CONSTANTS: AppConfig = {
  TITLE: 'B2B-BKO',
  DEFAULT_LANGUAGE: 'en',
  ROUTING: {
    PATH: {
      EMPTY: '',
      ROOT: '/',
      LOGIN: '/login',
      HOME: '/home',
      UNAUTHORIZED_REDIRECT: '/login',
      UNAUTHORIZED_GUEST_REDIRECT: '/home',
      AUTH_ERROR_REDIRECTION: '/login'
    },
    VIEW: {
      EMPTY: '',
      LOGIN: 'login',
      HOME: 'home',
      DEMO: 'demo'
    }
  }
};

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');
