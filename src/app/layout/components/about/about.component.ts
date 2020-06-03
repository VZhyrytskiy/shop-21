import { ChangeDetectionStrategy, Component, Inject, InjectionToken, OnInit, Optional } from '@angular/core';

import { AppInfo, UserConfig } from '../../../core/models';

import {
  ConfigOptionsService,
  ConstantService,
  LocalStorageService,
  GeneratorFactory,
  GeneratorService,
} from '../../../core/services';

export const appInfoToken: InjectionToken<AppInfo> = new InjectionToken<AppInfo>('App info');
export const randomStringToken = new InjectionToken<string>('Random string');

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [
    ConfigOptionsService,
    { provide: LocalStorageService, useClass: LocalStorageService },
    { provide: appInfoToken, useValue: ConstantService },
    { provide: randomStringToken, useFactory: GeneratorFactory(6), deps: [GeneratorService] },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  randomString: string;
  localStorageItem: string;
  appInfo: AppInfo;
  userConfig: UserConfig;

  constructor(
    @Optional() private localStorageService: LocalStorageService,
    @Optional() @Inject(appInfoToken) private appInfoService: AppInfo,
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() @Inject(randomStringToken) private randomStringService: string,
  ) {
  }

  ngOnInit() {
    this.randomString = this.randomStringService;

    this.localStorageService.setItem('token', this.randomString);
    this.localStorageItem = this.localStorageService.getItem('token');

    this.appInfo = this.appInfoService;

    this.configOptionsService.setConfig({login: 'John Smith', age: 16});
    this.userConfig = this.configOptionsService.getConfig();
  }
}
