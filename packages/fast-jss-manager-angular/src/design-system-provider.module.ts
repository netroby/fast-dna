import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignSystemProviderComponent } from './design-system-provider.component';

@NgModule({
    declarations: [
        DesignSystemProviderComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DesignSystemProviderComponent
    ]
})

export class DesignSystemProviderModule {}