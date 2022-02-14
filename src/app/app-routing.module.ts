import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './components/data/data.component';
import { ScannerComponent } from './components/scanner/scanner.component';

const routes: Routes = [
  {path: '', component: ScannerComponent},
  {path: 'details', component: DataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
