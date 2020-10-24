import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { DraggableType } from '../models/model';

@Directive({
    selector: '[macDraggable]'
})
export class DraggableDirective {
    @HostBinding('draggable') draggable = 'true';
    @Input() draggableData: any;
    @Input() draggableType: DraggableType;
    @HostBinding('class.dragging') dragging = false;

    @HostListener('dragstart', ['$event'])
    public dragStart(event): void {
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('application/json', JSON.stringify(this.draggableData));
        event.dataTransfer.setData(`draggable-type:${this.draggableType}`, '');
        this.dragging = true;
    }

    @HostListener('dragend')
    public onDragEnd(): void {
        this.dragging = false;
    }
}
