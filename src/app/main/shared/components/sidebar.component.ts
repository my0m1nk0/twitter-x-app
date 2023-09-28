import { Component } from '@angular/core';
import { SidebarItems } from '../../interface';

@Component({
  selector: 'app-sidebar',
  template: `
      <div class="col-span-1 h-full pr-4 md:pr-6">
      <div class="flex flex-col-items-end">
        <div class="space-y-2 lg-w-[230px]">
          <app-sidebar-items/>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class SidebarComponent {

}
