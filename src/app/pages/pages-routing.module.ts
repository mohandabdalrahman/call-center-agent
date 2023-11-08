import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {NotFoundComponent} from './miscellaneous/not-found/not-found.component';
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: 'dashboard',
      component: AdminDashboardComponent,
    },
    {
      path: 'agencies',
      loadChildren: () => import('./agencies/agencies.module').then(m => m.AgenciesModule),
    },
    {
      path: 'telegears-users',
      loadChildren: () => import('./telegears-users/telegears-users.module').then(m => m.TelegearsUsersModule),
    },
    {
      path: 'change-password',
      loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
    },
    {
      path: 'patient-records',
      loadChildren: () => import('./patient-records/patient-records.module').then(m => m.PatientRecordsModule)
    },
    {
      path: "",
      redirectTo: "dashboard",
      pathMatch: "full",
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
