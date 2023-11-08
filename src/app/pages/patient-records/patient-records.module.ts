import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRecordsRoutingModule } from './patient-records-routing.module';
import { ListPatientRecordsComponent } from './list-patient-records/list-patient-records.component';
import {SharedModule} from "../../shared/shared.module";
import {NbButtonModule} from "@nebular/theme";


@NgModule({
  declarations: [
    ListPatientRecordsComponent
  ],
  imports: [
    SharedModule,
    PatientRecordsRoutingModule,
    NbButtonModule
  ]
})
export class PatientRecordsModule { }
