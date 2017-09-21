import { Component, OnInit } from '@angular/core';
import {AlertController, NavParams} from "ionic-angular";
import {Quote} from "../../data/quote.interface";
import { QuotesService } from "../../services/quotes";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: {category: string, quotes: Quote[], icon: string}
  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private  quotesService: QuotesService) {}

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to favorite this quote?',
      buttons: [
        {
          text: 'Add to Favorites',
          handler: () => {
            this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
        }
      ]
    });
    alert.present();
  }
}
