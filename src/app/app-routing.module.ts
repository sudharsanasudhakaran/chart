import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from "./home/home.component";
import{BubblechartComponent} from "./bubblechart/bubblechart.component";
import{PointchartComponent} from "./pointchart/pointchart.component";
import{BarchartComponent} from "./barchart/barchart.component";
import{TimechartComponent} from "./timechart/timechart.component";
import{ScalechartComponent} from "./scalechart/scalechart.component";
import{ToolchartComponent} from "./toolchart/toolchart.component";
import{ScriptchartComponent} from "./scriptchart/scriptchart.component";
import{AreachartComponent} from "./areachart/areachart.component";
import{LogchartComponent} from "./logchart/logchart.component";


const routes: Routes = [{
  path: "home",
  component: HomeComponent,
},
{
  path: "bubblechart",
  component: BubblechartComponent,
},
{
  path: "pointchart",
  component: PointchartComponent,
},
{
  path: "barchart",
  component: BarchartComponent,
},
{
  path : "timechart",
  component : TimechartComponent
},
{
  path: "scalechart",
  component: ScalechartComponent,
},
{
  path: "toolchart",
  component: ToolchartComponent,
},
{
  path: "scriptchart",
  component: ScriptchartComponent,
},
{
  path: "areachart",
  component: AreachartComponent,
},
{
  path: "logchart",
  component: LogchartComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA]
})
export class AppRoutingModule { }