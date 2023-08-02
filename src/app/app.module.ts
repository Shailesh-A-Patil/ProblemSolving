import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AlgorithmComponent } from './algorithm/algorithm.component';
import { ArrayobjectComponent } from './arrayobject/arrayobject.component';
import { LinkedlistComponent } from './linkedlist/linkedlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { StackqueueComponent } from './stackqueue/stackqueue.component';
import { BinaryTreeComponent } from './binary-tree/binary-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    AlgorithmComponent,
    ArrayobjectComponent,
    LinkedlistComponent,
    StackqueueComponent,
    BinaryTreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
