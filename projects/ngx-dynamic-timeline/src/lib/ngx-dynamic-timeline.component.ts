import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  ChangeDetectorRef,
  AfterViewInit,
  NgZone,
  DoCheck,
  OnChanges,
  ChangeDetectionStrategy,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'ngx-dynamic-timeline',
  templateUrl: 'ngx-dynamic-timeline.component.html',
  styles: [],
})
export class NgxDynamicTimelineComponent implements OnInit, AfterViewChecked {
  @Input() public items: any[] = [];
  @Input() public groupBy: Function = ({ index, number }) => {};

  public groupedItems: any = {};
  public groupedKeys: string[] = [];

  @ContentChild('timelineKey', { static: false }) timelineKey: TemplateRef<any>;
  @ContentChild('timelineValues', { static: false })
  timelineValues: TemplateRef<any>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    debugger;
    this.groupedItems = this.group();
    this.groupedKeys = Object.keys(this.groupedItems);
    debugger;
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
    debugger;
  }

  private group(): any {
    return this.items.reduce((acc, item, index) => {
      const key = this.groupBy({ item, index });

      if (key in acc) {
        acc[key].push(item);
      } else {
        acc[key] = [item];
      }

      return acc;
    }, {});
  }
}
