import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'search-header',
  templateUrl: 'search-header.component.html'
})
export class SearchHeader {

  private isSearchVisible: boolean = false;

  @Output()
  search: EventEmitter<String> = new EventEmitter();

  constructor() {}

  handleShowSearchClick() {
    this.isSearchVisible = !this.isSearchVisible;
  }

  handleSearchClick(event: any) {
    this.search.emit(event.target.value);
    // this.store.dispatch(new SearchAction(event.target.value));
  }

}
