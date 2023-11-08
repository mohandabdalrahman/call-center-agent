import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListPatientRecordsComponent} from "./list-patient-records/list-patient-records.component";

const routes: Routes = [
  {
    path: '',
    component: ListPatientRecordsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRecordsRoutingModule {
}
