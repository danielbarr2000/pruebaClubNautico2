import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ZonasociosComponent } from './zonasocios.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ZonasociosComponent }
    ])],
    exports: [RouterModule]
})
export class ZonasociosRoutingModule { }
