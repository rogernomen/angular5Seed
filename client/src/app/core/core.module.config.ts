import {ModuleConfig} from '@app/app.config';
import {IWebstorageConfig} from 'ngx-webstorage';
import {InjectionToken} from '@angular/core';

export interface CoreModuleConfig extends ModuleConfig {
  WEBSTORAGE_CONFIG: IWebstorageConfig;
  TRANSLATE_CONFIG: {
    I18N_PATH: string,
    SUFFIX_FILE: string
  };
}

export const CORE_MODULE_CONSTANTS: CoreModuleConfig = {
  WEBSTORAGE_CONFIG: {
    prefix: 'bbbko',
    separator: '.',
    caseSensitive: false
  },
  TRANSLATE_CONFIG: {
    I18N_PATH: 'api/translation/all/',
    SUFFIX_FILE: ''
  }
};

export let CORE_MODULE_CONFIG = new InjectionToken<CoreModuleConfig>('core.module.config');
