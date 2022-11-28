import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ASW Form Builder Demo';
    jsonData: any[] = [];
    jsonData1: any[] = [];
    isShowPreviewButton = true;
    isShowJsonDataButton = true;
    isShowPublishButton = true;
    
    // Publish Template
    saveJsonData(data: any){
        //.... 
        console.log(data);
        // do something
    }
    
    //Preview Template
    previewTemplate(data: any){
        this.jsonData = data;
    }

    buttonClick(data: any): void {
        console.log(data);
    }

    onSelectionChange(control: any): void {
        console.log(control);
    }
}
