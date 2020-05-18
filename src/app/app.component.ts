import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') appTitle: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit() {
    this.appTitle.nativeElement.innerText = 'Electronics shop';
  }
}
