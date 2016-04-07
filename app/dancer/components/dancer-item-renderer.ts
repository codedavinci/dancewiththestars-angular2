import {Component, Input, Output, EventEmitter} from "angular2/core";

    
    @Component({
        selector: 'dancer-item-renderer',
        template: `
        <style>
        .completed{
            text-decoration: line-through;
        }
        </style>
        <label [ngClass]="dancer.status">{{dancer.name}}</label>
        <button type="button" class="btn btn-danger pull-right" (click)="deleted.emit(dancer)">Remove</button>
        `  
    })

export class DancerItemRenderer{
    @Input() dancer;
    @Output() deleted = new EventEmitter();

}