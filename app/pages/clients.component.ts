import {Component} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";

@Component({
    selector: "clients-page",
    template: `
    <ActionBar title="My App"></ActionBar>
    <Label [text]='"Total clients: " + total'></Label>
    <!-- Your UI components go here -->
    <ListView [items]="list" class="small-spacing" (loadMoreItems)="listViewLoadMoreItems($event)" (itemTap)="listViewItemTap($event)">

        <template let-item="item">
            <Label [text]="item.clientName" class="medium-spacing"></Label>
        </template>

    </ListView>
  `
})
export class ClientsComponent {

    private start:number = 0;
    private count:number = 100;

    constructor(private http:Http) {
        this.load();
    }

    public list:Array<Object> = [];
    public total:number = 0;


    load(start:number = 0) {
        let url = 'https://uitest.my.bmg.com/api/clients?sortColumn=path.sort&isAsc=true&count=' + this.count + '&start=' + start + '&currencySymbol=USD';

        this.http.post(url, '', {headers: this.getRequestHeaders()})
                .map(res => res.json())
                .subscribe(
                        (result) => {
                            this.list = [...this.list, ...result.data];
                            this.total = this.list.length;
                        },
                        (error) => {
                            console.log("error", error)
                        }
                );
    }

    listViewLoadMoreItems(ev) {
        console.log("load more", ev);
        this.start = this.start + this.count;
        this.load(this.start);
    }

    listViewItemTap(ev) {
        console.log("tap", ev.index);
    }

    handleErrors(error:Response) {
        return Observable.throw(error);
    }

    getRequestHeaders() {
        let username = 'test.user.1000clients';
        let password = 'test';
        //test.user.1000clients
        // let pass = 'dGVzdC51c2VyLjEwMDBjbGllbnRzOnRlc3Q=';
        //valtechtest
        let pass = 'dmFsdGVjaHRlc3Q6bC8qOHpqTCFjaCczRDQ=';

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + pass);
        // headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));

        return headers;
    }
}
