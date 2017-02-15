import {Component} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";

@Component({
    selector: 'clients-page',
    template: `
    <ActionBar title="Clients"></ActionBar>
    <Label [text]='total'></Label>
    <!-- Your UI components go here -->
    <ListView [items]="clients" class="small-spacing" (loadMoreItems)="listViewLoadMoreItems($event)" (itemTap)="listViewItemTap($event)">

        <template let-item="item">
            <StackLayout>
                <Label [text]="item.clientName"></Label>
            </StackLayout>
        </template>

    </ListView>
  <!--<ListView items="{{ myItems }}">-->
    <!--<ListView.itemTemplate>-->
       <!--<Label text="{{ title || 'Downloading...' }}" textWrap="true" class="title" />-->
    <!--</ListView.itemTemplate>-->
 <!--</ListView>-->
  `
})
export class ClientsComponent {


    private start:number = 0;
    private count:number = 100;
    public total:number = 0;

    public clients:Array<{clientName:string}> = [{clientName: 'joo'}];

    constructor(private http:Http) {

    }

    ngAfterViewInit() {
        // this.load();
    }

    load(start:number = 0) {
        let url = 'https://uitest.my.bmg.com/api/clients?sortColumn=path.sort&isAsc=true&count=' + this.count + '&start=' + start + '&currencySymbol=USD';

        this.http.post(url, '', {headers: this.getRequestHeaders()})
                .map(res => res.json())
                .subscribe(
                        (result) => {
                            console.log("result", result.total);
                            console.log("first", result.data[0].clientName);
                            this.clients = [...this.clients, ...result.data];
                            this.total = this.clients.length;
                        },
                        (error) => {
                            console.log("error", error)
                        }
                );
    }

    listViewLoadMoreItems(ev) {
        console.log("load more", ev);
        // this.start = this.start + this.count;
        // this.load(this.start);
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
