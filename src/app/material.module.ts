import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  imports: [MatButtonModule, MatInputModule, MatTableModule],
  exports: [MatButtonModule, MatInputModule, MatTableModule],
})
export class MaterialModule { }
