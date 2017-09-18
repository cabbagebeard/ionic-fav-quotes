import { Component } from '@angular/core';
import {NavParams} from "ionic-angular";
import {Quote} from "../../data/quote.interface";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quoteGroup: {category: string, quotes: Quote[], icon: string}
  constructor(private navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.quoteGroup = this.navParams.data;
  }
}
