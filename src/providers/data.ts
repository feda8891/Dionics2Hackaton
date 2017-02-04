import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Data {
 
    items: any;
 
    constructor(public http: Http) {
 
        this.items = [
            {title: 'Louvre', subtitle: 'Paris', path: './assets/img/louvre.jpg'},
            {title: 'British Museum', subtitle: 'London', path: './assets/img/british_museum.jpg'},
            {title: 'Metropolitan Museum of Arts', subtitle: 'New York', path: './assets/img/metropolitan.jpg'},
            {title: 'Vatican Museums', subtitle: 'Rome', path: './assets/img/vatican_museums.jpg'},
            {title: 'Acropolis Museum', subtitle: 'Athens', path: './assets/img/acropolis_museum.jpg'},
            {title: 'Uffizi Gallery', subtitle: 'Florence', path: './assets/img/uffizi_gallery.jpg'},
            {title: 'Rijksmuseum', subtitle: 'Amsterdam', path: './assets/img/rijksmuseum.jpg'},
            {title: 'Prado', subtitle: 'Madrid', path: './assets/img/prado.jpg'},
            {title: 'Deloitte Digital Museum', subtitle: 'Milan', path: './assets/img/deloitte_digital.jpg'}
        ]
 
    }
 
    filterItems(searchTerm){
 
        return this.items.filter((item) => {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });     
 
    }
 
}