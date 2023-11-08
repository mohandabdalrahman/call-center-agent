import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {
    NbActionsModule,
    NbLayoutModule,
    NbMenuModule,
    NbSearchModule,
    NbSidebarModule,
    NbUserModule,
    NbContextMenuModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbThemeModule, NbCardModule, NbPopoverModule, NbToggleModule,
} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';

import {
  FooterComponent,
  HeaderComponent,
  SearchInputComponent,
  TinyMCEComponent,
} from './components';
import {
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
} from './pipes';
import {
  OneColumnLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
} from './layouts';
import {DEFAULT_THEME} from './styles/theme.default';
import {COSMIC_THEME} from './styles/theme.cosmic';
import {CORPORATE_THEME} from './styles/theme.corporate';
import {DARK_THEME} from './styles/theme.dark';
import {WelcomeCardComponent} from './components/welcome-card/welcome-card.component';
import {StaticsCardComponent} from './components/statics-card/statics-card.component';
import {DataTableComponent} from './components/data-table/data-table.component';
import {TableControlsComponent} from './components/table-controls/table-controls.component';
import {LeftTableHeaderComponent} from './components/left-table-header/left-table-header.component';
import {ModalComponent} from './components/modal/modal.component';
import {InputFieldComponent} from './components/input-field/input-field.component';
import { RightTableHeaderComponent } from './components/right-table-header/right-table-header.component';
import {RouterLinkWithHref} from "@angular/router";
import { SpinnerComponent } from './components/spinner/spinner.component';
import {NgxSpinnerModule} from "ngx-spinner";

const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
  NbCardModule,
  NgOptimizedImage,
  NbPopoverModule,
  RouterLinkWithHref,
  // NgxSpinnerModule
];
const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SearchInputComponent,
  TinyMCEComponent,
  OneColumnLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
  WelcomeCardComponent,
  StaticsCardComponent,
  DataTableComponent,
  TableControlsComponent,
  LeftTableHeaderComponent,
  ModalComponent,
  InputFieldComponent,
  RightTableHeaderComponent,
  SpinnerComponent
];
const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
];

@NgModule({
    imports: [CommonModule, ...NB_MODULES, NbToggleModule, NgxSpinnerModule],
  exports: [CommonModule, ...PIPES, ...COMPONENTS],
  declarations: [...COMPONENTS, ...PIPES, ],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        ...NbThemeModule.forRoot(
          {
            name: 'default',
          },
          [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME],
        ).providers,
      ],
    };
  }
}
