import { Injectable } from '@angular/core';

import { cloneDeep } from 'lodash';

import { UserConfig } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private userConfig: UserConfig = {};

  setConfig(userConfigUpdated: Partial<UserConfig>): void {
    const userConfigCopy: UserConfig = cloneDeep(this.userConfig);

    for (const [key, value] of Object.entries(userConfigUpdated)) {
      userConfigCopy[key] = value;
    }

    this.userConfig = userConfigCopy;
  }

  getConfig(): UserConfig {
    return this.userConfig;
  }
}
