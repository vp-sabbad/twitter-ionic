import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  Renderer
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';

import { Searchbar } from 'ionic-angular';
//import SearchBar from 'ionic-angular/components/searchbar/searchbar';

@Component({
  selector: 'search-header',
  templateUrl: 'search-header.component.html'
})
export class SearchHeader {

  private isSearchVisible: boolean = false;

  @Output()
  search: EventEmitter<String> = new EventEmitter();

  @ViewChild("searchbar")
  searchbar: Searchbar

  @ViewChild("toggleSearchbarButton")
  toggleSearchbarButton

  constructor(
    private renderer: Renderer
  ) {}

  ngOnInit() {
    Observable.fromEvent(this.toggleSearchbarButton._elementRef.nativeElement, 'click')
      .subscribe(newValue => this.toggleSearchbar());
  }

  toggleSearchbar() {
    this.isSearchVisible = !this.isSearchVisible;
    if (this.isSearchVisible) this.focusSearchInput()
  }

  focusSearchInput() {
    console.log(this.searchbar);
    const nativeSearchInput = this.searchbar._elementRef.nativeElement.querySelector('.searchbar-input');
    if (nativeSearchInput) {
      setTimeout(() => {
        //delay required or ionic styling gets finicky
        this.renderer.invokeElementMethod(nativeSearchInput, 'focus', []);
      }, 0);
    }
  }

  handleSearchClick(event: any) {
    this.search.emit(event.target.value);
  }

}
