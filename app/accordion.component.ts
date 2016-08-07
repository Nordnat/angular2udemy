import { Component, Input } from '@angular/core';
import { AccordionService } from './services/accordion.service';

@Component({
    selector: 'accordion',
    template: `
        <div class="container">
            <div *ngFor="let accordion of accordions; let i = index" class="panel panel-primary">
               
                    <div 
                        class="panel-heading" 
                        (click) = clickActive()>
                        <h3 class="panel-title">{{ accordions[i].title }}</h3>
                        <span
                            class="glyphicon"
                            [ngClass] = "{
                            'glyphicon-menu-up': isActive,
                            'glyphicon-menu-down': !isActive
                            }"
                            >
                        </span>  
                </div>   
                    <div *ngIf="isActive" class="panel-body">
                        {{ accordions[i].body }}
                    </div>
            </div>
        </div>
    `,
    providers: [AccordionService],
})

export class AccordionComponent {
    // @Input() viewMode = '';
    @Input() isActive = false;
    accordions;
    // @Output() clickVisible() {
    //     this.viewMode !== 'visible' ? this.viewMode = 'visible' : this.viewMode = '';
    // }
    clickActive() {
       this.isActive = !this.isActive;
    }
    constructor(accordionContent: AccordionService) {
        this.accordions = accordionContent.getAccordionContent();
    }
}
