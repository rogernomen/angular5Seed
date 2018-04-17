import {InjectionToken} from '@angular/core';

export interface BasicAuthConfig {
  AUTHORIZATION_HEADER: string,
  CONTENT_TYPE_HEADER: string,
  ACCEPT_HEADER: string,
  CONTENT_TYPE_DEFAULT_VALUE: string,
  ACCEPT_DEFAULT_VALUE: string
}

export const BASIC_AUTH_CONSTANTS: BasicAuthConfig = {
  AUTHORIZATION_HEADER: 'Authorization',
  CONTENT_TYPE_HEADER: 'Content-type',
  ACCEPT_HEADER: 'Accept',
  CONTENT_TYPE_DEFAULT_VALUE: 'application/json',
  ACCEPT_DEFAULT_VALUE: 'application/json'
};

export let BASIC_AUTH_CONFIG = new InjectionToken<BasicAuthConfig>('basic-auth.config');
