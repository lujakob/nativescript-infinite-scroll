"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.start = 0;
        this.count = 100;
        this.list = [{ name: 'test' }];
        this.myItems = [];
        this.load();
    }
    AppComponent.prototype.load = function (start) {
        var _this = this;
        if (start === void 0) { start = 0; }
        var url = 'https://uitest.my.bmg.com/api/clients?sortColumn=path.sort&isAsc=true&count=' + this.count + '&start=' + start + '&currencySymbol=USD';
        this.http.post(url, '', { headers: this.getRequestHeaders() })
            .map(function (res) { return res.json(); })
            .subscribe(function (result) {
            console.log("result", result.total);
            _this.list = _this.list.concat(result.data);
        }, function (error) {
            console.log("error", error);
        });
    };
    AppComponent.prototype.listViewLoadMoreItems = function (ev) {
        console.log("load more", ev);
        this.start = this.start + this.count;
        this.load(this.start);
    };
    AppComponent.prototype.listViewItemTap = function (ev) {
        console.log("tap", ev.index);
    };
    AppComponent.prototype.handleErrors = function (error) {
        return Rx_1.Observable.throw(error);
    };
    AppComponent.prototype.getRequestHeaders = function () {
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
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <ActionBar title=\"My App\"></ActionBar>\n    <!-- Your UI components go here -->\n    <ListView [items]=\"list\" class=\"small-spacing\" (loadMoreItems)=\"listViewLoadMoreItems($event)\" (itemTap)=\"listViewItemTap($event)\">\n\n        <template let-item=\"item\">\n            <Label [text]=\"item.clientName\" class=\"medium-spacing\"></Label>\n        </template>\n\n    </ListView>\n  <!--<ListView items=\"{{ myItems }}\">-->\n    <!--<ListView.itemTemplate>-->\n       <!--<Label text=\"{{ title || 'Downloading...' }}\" textWrap=\"true\" class=\"title\" />-->\n    <!--</ListView.itemTemplate>-->\n <!--</ListView>-->\n  "
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQUN4QyxzQ0FBNEM7QUFDNUMsOEJBQW1DO0FBQ25DLGlDQUErQjtBQXFCL0IsSUFBYSxZQUFZO0lBS3JCLHNCQUFvQixJQUFTO1FBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztRQUhyQixVQUFLLEdBQVUsQ0FBQyxDQUFDO1FBQ2pCLFVBQUssR0FBVSxHQUFHLENBQUM7UUFNcEIsU0FBSSxHQUFpQixDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFDdEMsWUFBTyxHQUFjLEVBQUUsQ0FBQztRQUozQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQU1ELDJCQUFJLEdBQUosVUFBSyxLQUFnQjtRQUFyQixpQkFjQztRQWRJLHNCQUFBLEVBQUEsU0FBZ0I7UUFDakIsSUFBSSxHQUFHLEdBQUcsOEVBQThFLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLEdBQUcsS0FBSyxHQUFHLHFCQUFxQixDQUFDO1FBRWxKLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUMsQ0FBQzthQUNuRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLFNBQVMsQ0FDRixVQUFDLE1BQU07WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDbkMsS0FBSSxDQUFDLElBQUksR0FBTyxLQUFJLENBQUMsSUFBSSxRQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDL0IsQ0FBQyxDQUNSLENBQUM7SUFDZCxDQUFDO0lBRUQsNENBQXFCLEdBQXJCLFVBQXNCLEVBQUU7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELHNDQUFlLEdBQWYsVUFBZ0IsRUFBRTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsbUNBQVksR0FBWixVQUFhLEtBQWM7UUFDdkIsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHdDQUFpQixHQUFqQjtRQUNJLElBQUksUUFBUSxHQUFHLHVCQUF1QixDQUFDO1FBQ3ZDLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUN0Qix1QkFBdUI7UUFDdkIscURBQXFEO1FBQ3JELGFBQWE7UUFDYixJQUFJLElBQUksR0FBRyxzQ0FBc0MsQ0FBQztRQUVsRCxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2pELCtFQUErRTtRQUUvRSxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUExREQsSUEwREM7QUExRFksWUFBWTtJQW5CeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSw4bkJBZVg7S0FDRixDQUFDO3FDQU0yQixXQUFJO0dBTHBCLFlBQVksQ0EwRHhCO0FBMURZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVwiTXkgQXBwXCI+PC9BY3Rpb25CYXI+XG4gICAgPCEtLSBZb3VyIFVJIGNvbXBvbmVudHMgZ28gaGVyZSAtLT5cbiAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cImxpc3RcIiBjbGFzcz1cInNtYWxsLXNwYWNpbmdcIiAobG9hZE1vcmVJdGVtcyk9XCJsaXN0Vmlld0xvYWRNb3JlSXRlbXMoJGV2ZW50KVwiIChpdGVtVGFwKT1cImxpc3RWaWV3SXRlbVRhcCgkZXZlbnQpXCI+XG5cbiAgICAgICAgPHRlbXBsYXRlIGxldC1pdGVtPVwiaXRlbVwiPlxuICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cIml0ZW0uY2xpZW50TmFtZVwiIGNsYXNzPVwibWVkaXVtLXNwYWNpbmdcIj48L0xhYmVsPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgPC9MaXN0Vmlldz5cbiAgPCEtLTxMaXN0VmlldyBpdGVtcz1cInt7IG15SXRlbXMgfX1cIj4tLT5cbiAgICA8IS0tPExpc3RWaWV3Lml0ZW1UZW1wbGF0ZT4tLT5cbiAgICAgICA8IS0tPExhYmVsIHRleHQ9XCJ7eyB0aXRsZSB8fCAnRG93bmxvYWRpbmcuLi4nIH19XCIgdGV4dFdyYXA9XCJ0cnVlXCIgY2xhc3M9XCJ0aXRsZVwiIC8+LS0+XG4gICAgPCEtLTwvTGlzdFZpZXcuaXRlbVRlbXBsYXRlPi0tPlxuIDwhLS08L0xpc3RWaWV3Pi0tPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIHN0YXJ0Om51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjb3VudDpudW1iZXIgPSAxMDA7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCkge1xuICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbGlzdDpBcnJheTxPYmplY3Q+ID0gW3tuYW1lOiAndGVzdCd9XTtcbiAgICBwdWJsaWMgbXlJdGVtczpBcnJheTxhbnk+ID0gW107XG5cblxuICAgIGxvYWQoc3RhcnQ6bnVtYmVyID0gMCkge1xuICAgICAgICBsZXQgdXJsID0gJ2h0dHBzOi8vdWl0ZXN0Lm15LmJtZy5jb20vYXBpL2NsaWVudHM/c29ydENvbHVtbj1wYXRoLnNvcnQmaXNBc2M9dHJ1ZSZjb3VudD0nICsgdGhpcy5jb3VudCArICcmc3RhcnQ9JyArIHN0YXJ0ICsgJyZjdXJyZW5jeVN5bWJvbD1VU0QnO1xuXG4gICAgICAgIHRoaXMuaHR0cC5wb3N0KHVybCwgJycsIHtoZWFkZXJzOiB0aGlzLmdldFJlcXVlc3RIZWFkZXJzKCl9KVxuICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQudG90YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0ID0gWy4uLnRoaXMubGlzdCwgLi4ucmVzdWx0LmRhdGFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBsaXN0Vmlld0xvYWRNb3JlSXRlbXMoZXYpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2FkIG1vcmVcIiwgZXYpO1xuICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydCArIHRoaXMuY291bnQ7XG4gICAgICAgIHRoaXMubG9hZCh0aGlzLnN0YXJ0KTtcbiAgICB9XG5cbiAgICBsaXN0Vmlld0l0ZW1UYXAoZXYpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0YXBcIiwgZXYuaW5kZXgpO1xuICAgIH1cblxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjpSZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gICAgfVxuXG4gICAgZ2V0UmVxdWVzdEhlYWRlcnMoKSB7XG4gICAgICAgIGxldCB1c2VybmFtZSA9ICd0ZXN0LnVzZXIuMTAwMGNsaWVudHMnO1xuICAgICAgICBsZXQgcGFzc3dvcmQgPSAndGVzdCc7XG4gICAgICAgIC8vdGVzdC51c2VyLjEwMDBjbGllbnRzXG4gICAgICAgIC8vIGxldCBwYXNzID0gJ2RHVnpkQzUxYzJWeUxqRXdNREJqYkdsbGJuUnpPblJsYzNRPSc7XG4gICAgICAgIC8vdmFsdGVjaHRlc3RcbiAgICAgICAgbGV0IHBhc3MgPSAnZG1Gc2RHVmphSFJsYzNRNmJDOHFPSHBxVENGamFDY3pSRFE9JztcblxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgcGFzcyk7XG4gICAgICAgIC8vIGhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpKTtcblxuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG59XG4iXX0=