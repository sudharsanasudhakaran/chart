import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarchartComponent } from './barchart/barchart.component';
import { PointchartComponent } from './pointchart/pointchart.component';
import { AreachartComponent } from './areachart/areachart.component';
import { TimechartComponent } from './timechart/timechart.component';
import { ScalechartComponent } from './scalechart/scalechart.component';
import { ToolchartComponent } from './toolchart/toolchart.component';
import { ScriptchartComponent } from './scriptchart/scriptchart.component';
import { LogchartComponent } from './logchart/logchart.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BubblechartComponent } from './bubblechart/bubblechart.component';
import { ChartsModule} from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,
    PointchartComponent,
    AreachartComponent,
    TimechartComponent,
    ScalechartComponent,
    ToolchartComponent,
    ScriptchartComponent,
    LogchartComponent,
    HomeComponent,
    SidebarComponent,
    BubblechartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
