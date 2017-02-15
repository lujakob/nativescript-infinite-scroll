"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var ClientsComponent = (function () {
    function ClientsComponent(http) {
        this.http = http;
        this.start = 0;
        this.count = 100;
        this.total = 0;
        this.clients = [{ clientName: 'joo' }];
    }
    ClientsComponent.prototype.ngAfterViewInit = function () {
        // this.load();
    };
    ClientsComponent.prototype.load = function (start) {
        var _this = this;
        if (start === void 0) { start = 0; }
        var url = 'https://uitest.my.bmg.com/api/clients?sortColumn=path.sort&isAsc=true&count=' + this.count + '&start=' + start + '&currencySymbol=USD';
        this.http.post(url, '', { headers: this.getRequestHeaders() })
            .map(function (res) { return res.json(); })
            .subscribe(function (result) {
            console.log("result", result.total);
            console.log("first", result.data[0].clientName);
            _this.clients = _this.clients.concat(result.data);
            _this.total = _this.clients.length;
        }, function (error) {
            console.log("error", error);
        });
    };
    ClientsComponent.prototype.listViewLoadMoreItems = function (ev) {
        console.log("load more", ev);
        // this.start = this.start + this.count;
        // this.load(this.start);
    };
    ClientsComponent.prototype.listViewItemTap = function (ev) {
        console.log("tap", ev.index);
    };
    ClientsComponent.prototype.handleErrors = function (error) {
        return Rx_1.Observable.throw(error);
    };
    ClientsComponent.prototype.getRequestHeaders = function () {
        var username = 'test.user.1000clients';
        var password = 'test';
        //test.user.1000clients
        // let pass = 'dGVzdC51c2VyLjEwMDBjbGllbnRzOnRlc3Q=';
        //valtechtest
        var pass = 'dmFsdGVjaHRlc3Q6bC8qOHpqTCFjaCczRDQ=';
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + pass);
        // headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
        return headers;
    };
    return ClientsComponent;
}());
ClientsComponent = __decorate([
    core_1.Component({
        selector: 'clients-page',
        template: "\n    <ActionBar title=\"Clients\"></ActionBar>\n    <Label [text]='total'></Label>\n    <!-- Your UI components go here -->\n    <ListView [items]=\"clients\" class=\"small-spacing\" (loadMoreItems)=\"listViewLoadMoreItems($event)\" (itemTap)=\"listViewItemTap($event)\">\n\n        <template let-item=\"item\">\n            <StackLayout>\n                <Label [text]=\"item.clientName\"></Label>\n            </StackLayout>\n        </template>\n\n    </ListView>\n  <!--<ListView items=\"{{ myItems }}\">-->\n    <!--<ListView.itemTemplate>-->\n       <!--<Label text=\"{{ title || 'Downloading...' }}\" textWrap=\"true\" class=\"title\" />-->\n    <!--</ListView.itemTemplate>-->\n <!--</ListView>-->\n  "
    }),
    __metadata("design:paramtypes", [http_1.Http])
], ClientsComponent);
exports.ClientsComponent = ClientsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbGllbnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXdDO0FBQ3hDLHNDQUE0QztBQUM1Qyw4QkFBbUM7QUFDbkMsaUNBQStCO0FBd0IvQixJQUFhLGdCQUFnQjtJQVN6QiwwQkFBb0IsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7UUFOckIsVUFBSyxHQUFVLENBQUMsQ0FBQztRQUNqQixVQUFLLEdBQVUsR0FBRyxDQUFDO1FBQ3BCLFVBQUssR0FBVSxDQUFDLENBQUM7UUFFakIsWUFBTyxHQUE4QixDQUFDLEVBQUMsVUFBVSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFJbEUsQ0FBQztJQUVELDBDQUFlLEdBQWY7UUFDSSxlQUFlO0lBQ25CLENBQUM7SUFFRCwrQkFBSSxHQUFKLFVBQUssS0FBZ0I7UUFBckIsaUJBZ0JDO1FBaEJJLHNCQUFBLEVBQUEsU0FBZ0I7UUFDakIsSUFBSSxHQUFHLEdBQUcsOEVBQThFLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLEdBQUcsS0FBSyxHQUFHLHFCQUFxQixDQUFDO1FBRWxKLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUMsQ0FBQzthQUNuRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLFNBQVMsQ0FDRixVQUFDLE1BQU07WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsT0FBTyxHQUFPLEtBQUksQ0FBQyxPQUFPLFFBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pELEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDckMsQ0FBQyxFQUNELFVBQUMsS0FBSztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQy9CLENBQUMsQ0FDUixDQUFDO0lBQ2QsQ0FBQztJQUVELGdEQUFxQixHQUFyQixVQUFzQixFQUFFO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLHdDQUF3QztRQUN4Qyx5QkFBeUI7SUFDN0IsQ0FBQztJQUVELDBDQUFlLEdBQWYsVUFBZ0IsRUFBRTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLEtBQWM7UUFDdkIsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDRDQUFpQixHQUFqQjtRQUNJLElBQUksUUFBUSxHQUFHLHVCQUF1QixDQUFDO1FBQ3ZDLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUN0Qix1QkFBdUI7UUFDdkIscURBQXFEO1FBQ3JELGFBQWE7UUFDYixJQUFJLElBQUksR0FBRyxzQ0FBc0MsQ0FBQztRQUVsRCxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2pELCtFQUErRTtRQUUvRSxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFoRUQsSUFnRUM7QUFoRVksZ0JBQWdCO0lBdEI1QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFLHdzQkFrQlg7S0FDRixDQUFDO3FDQVUyQixXQUFJO0dBVHBCLGdCQUFnQixDQWdFNUI7QUFoRVksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjbGllbnRzLXBhZ2UnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIkNsaWVudHNcIj48L0FjdGlvbkJhcj5cbiAgICA8TGFiZWwgW3RleHRdPSd0b3RhbCc+PC9MYWJlbD5cbiAgICA8IS0tIFlvdXIgVUkgY29tcG9uZW50cyBnbyBoZXJlIC0tPlxuICAgIDxMaXN0VmlldyBbaXRlbXNdPVwiY2xpZW50c1wiIGNsYXNzPVwic21hbGwtc3BhY2luZ1wiIChsb2FkTW9yZUl0ZW1zKT1cImxpc3RWaWV3TG9hZE1vcmVJdGVtcygkZXZlbnQpXCIgKGl0ZW1UYXApPVwibGlzdFZpZXdJdGVtVGFwKCRldmVudClcIj5cblxuICAgICAgICA8dGVtcGxhdGUgbGV0LWl0ZW09XCJpdGVtXCI+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cIml0ZW0uY2xpZW50TmFtZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgPC9MaXN0Vmlldz5cbiAgPCEtLTxMaXN0VmlldyBpdGVtcz1cInt7IG15SXRlbXMgfX1cIj4tLT5cbiAgICA8IS0tPExpc3RWaWV3Lml0ZW1UZW1wbGF0ZT4tLT5cbiAgICAgICA8IS0tPExhYmVsIHRleHQ9XCJ7eyB0aXRsZSB8fCAnRG93bmxvYWRpbmcuLi4nIH19XCIgdGV4dFdyYXA9XCJ0cnVlXCIgY2xhc3M9XCJ0aXRsZVwiIC8+LS0+XG4gICAgPCEtLTwvTGlzdFZpZXcuaXRlbVRlbXBsYXRlPi0tPlxuIDwhLS08L0xpc3RWaWV3Pi0tPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENsaWVudHNDb21wb25lbnQge1xuXG5cbiAgICBwcml2YXRlIHN0YXJ0Om51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjb3VudDpudW1iZXIgPSAxMDA7XG4gICAgcHVibGljIHRvdGFsOm51bWJlciA9IDA7XG5cbiAgICBwdWJsaWMgY2xpZW50czpBcnJheTx7Y2xpZW50TmFtZTpzdHJpbmd9PiA9IFt7Y2xpZW50TmFtZTogJ2pvbyd9XTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwKSB7XG5cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIC8vIHRoaXMubG9hZCgpO1xuICAgIH1cblxuICAgIGxvYWQoc3RhcnQ6bnVtYmVyID0gMCkge1xuICAgICAgICBsZXQgdXJsID0gJ2h0dHBzOi8vdWl0ZXN0Lm15LmJtZy5jb20vYXBpL2NsaWVudHM/c29ydENvbHVtbj1wYXRoLnNvcnQmaXNBc2M9dHJ1ZSZjb3VudD0nICsgdGhpcy5jb3VudCArICcmc3RhcnQ9JyArIHN0YXJ0ICsgJyZjdXJyZW5jeVN5bWJvbD1VU0QnO1xuXG4gICAgICAgIHRoaXMuaHR0cC5wb3N0KHVybCwgJycsIHtoZWFkZXJzOiB0aGlzLmdldFJlcXVlc3RIZWFkZXJzKCl9KVxuICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQudG90YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyc3RcIiwgcmVzdWx0LmRhdGFbMF0uY2xpZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGllbnRzID0gWy4uLnRoaXMuY2xpZW50cywgLi4ucmVzdWx0LmRhdGFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWwgPSB0aGlzLmNsaWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBsaXN0Vmlld0xvYWRNb3JlSXRlbXMoZXYpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2FkIG1vcmVcIiwgZXYpO1xuICAgICAgICAvLyB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydCArIHRoaXMuY291bnQ7XG4gICAgICAgIC8vIHRoaXMubG9hZCh0aGlzLnN0YXJ0KTtcbiAgICB9XG5cbiAgICBsaXN0Vmlld0l0ZW1UYXAoZXYpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0YXBcIiwgZXYuaW5kZXgpO1xuICAgIH1cblxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjpSZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gICAgfVxuXG4gICAgZ2V0UmVxdWVzdEhlYWRlcnMoKSB7XG4gICAgICAgIGxldCB1c2VybmFtZSA9ICd0ZXN0LnVzZXIuMTAwMGNsaWVudHMnO1xuICAgICAgICBsZXQgcGFzc3dvcmQgPSAndGVzdCc7XG4gICAgICAgIC8vdGVzdC51c2VyLjEwMDBjbGllbnRzXG4gICAgICAgIC8vIGxldCBwYXNzID0gJ2RHVnpkQzUxYzJWeUxqRXdNREJqYkdsbGJuUnpPblJsYzNRPSc7XG4gICAgICAgIC8vdmFsdGVjaHRlc3RcbiAgICAgICAgbGV0IHBhc3MgPSAnZG1Gc2RHVmphSFJsYzNRNmJDOHFPSHBxVENGamFDY3pSRFE9JztcblxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgcGFzcyk7XG4gICAgICAgIC8vIGhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpKTtcblxuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG59XG4iXX0=