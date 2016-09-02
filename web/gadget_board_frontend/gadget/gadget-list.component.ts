import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Gadget } from './gadget';
import { GadgetService } from './gadget.service';

declare var __moduleName: string;  // weird way to make relative template urls work, see https://github.com/angular/angular/issues/6053 

@Component({
    selector: 'gadget-list',
    moduleId: __moduleName,
    templateUrl: './gadget-list.component.html',
})

export class GadgetListComponent implements OnInit {

    errorMessages: any[];
    gadgets: Gadget[];

    constructor(
        private gadgetService: GadgetService,
        private router: Router)
    {}

    ngOnInit() {
        this.getGadgets();
    }

    getGadgets() {
        this.gadgetService.getGadgets()
            .subscribe(
            gadgets => this.gadgets = gadgets,
            errors => this.errorMessages = <any[]>errors);
    }

    gotoGadgetDetail(gadget: Gadget) {
        this.router.navigate(['/gadgets', gadget.slug]);
    }

}