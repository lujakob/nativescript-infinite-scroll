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
        this.list = [];
        this.total = 0;
        this.load();
    }
    ClientsComponent.prototype.load = function (start) {
        var _this = this;
        if (start === void 0) { start = 0; }
        var url = 'https://uitest.my.bmg.com/api/clients?sortColumn=path.sort&isAsc=true&count=' + this.count + '&start=' + start + '&currencySymbol=USD';
        this.http.post(url, '', { headers: this.getRequestHeaders() })
            .map(function (res) { return res.json(); })
            .subscribe(function (result) {
            _this.list = _this.list.concat(result.data);
            _this.total = _this.list.length;
        }, function (error) {
            console.log("error", error);
        });
    };
    ClientsComponent.prototype.listViewLoadMoreItems = function (ev) {
        console.log("load more", ev);
        this.start = this.start + this.count;
        this.load(this.start);
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
        selector: "clients-page",
        template: "\n    <ActionBar title=\"My App\"></ActionBar>\n    <Label [text]='\"Total clients: \" + total'></Label>\n    <!-- Your UI components go here -->\n    <ListView [items]=\"list\" class=\"small-spacing\" (loadMoreItems)=\"listViewLoadMoreItems($event)\" (itemTap)=\"listViewItemTap($event)\">\n\n        <template let-item=\"item\">\n            <Label [text]=\"item.clientName\" class=\"medium-spacing\"></Label>\n        </template>\n\n    </ListView>\n  "
    }),
    __metadata("design:paramtypes", [http_1.Http])
], ClientsComponent);
exports.ClientsComponent = ClientsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbGllbnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXdDO0FBQ3hDLHNDQUE0QztBQUM1Qyw4QkFBbUM7QUFDbkMsaUNBQStCO0FBaUIvQixJQUFhLGdCQUFnQjtJQUt6QiwwQkFBb0IsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7UUFIckIsVUFBSyxHQUFVLENBQUMsQ0FBQztRQUNqQixVQUFLLEdBQVUsR0FBRyxDQUFDO1FBTXBCLFNBQUksR0FBaUIsRUFBRSxDQUFDO1FBQ3hCLFVBQUssR0FBVSxDQUFDLENBQUM7UUFKcEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFNRCwrQkFBSSxHQUFKLFVBQUssS0FBZ0I7UUFBckIsaUJBY0M7UUFkSSxzQkFBQSxFQUFBLFNBQWdCO1FBQ2pCLElBQUksR0FBRyxHQUFHLDhFQUE4RSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxHQUFHLEtBQUssR0FBRyxxQkFBcUIsQ0FBQztRQUVsSixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFDLENBQUM7YUFDbkQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixTQUFTLENBQ0YsVUFBQyxNQUFNO1lBQ0gsS0FBSSxDQUFDLElBQUksR0FBTyxLQUFJLENBQUMsSUFBSSxRQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2xDLENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUMvQixDQUFDLENBQ1IsQ0FBQztJQUNkLENBQUM7SUFFRCxnREFBcUIsR0FBckIsVUFBc0IsRUFBRTtRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsMENBQWUsR0FBZixVQUFnQixFQUFFO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsS0FBYztRQUN2QixNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsNENBQWlCLEdBQWpCO1FBQ0ksSUFBSSxRQUFRLEdBQUcsdUJBQXVCLENBQUM7UUFDdkMsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLHVCQUF1QjtRQUN2QixxREFBcUQ7UUFDckQsYUFBYTtRQUNiLElBQUksSUFBSSxHQUFHLHNDQUFzQyxDQUFDO1FBRWxELElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDakQsK0VBQStFO1FBRS9FLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQTFERCxJQTBEQztBQTFEWSxnQkFBZ0I7SUFmNUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRSx5Y0FXWDtLQUNGLENBQUM7cUNBTTJCLFdBQUk7R0FMcEIsZ0JBQWdCLENBMEQ1QjtBQTFEWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJjbGllbnRzLXBhZ2VcIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJNeSBBcHBcIj48L0FjdGlvbkJhcj5cbiAgICA8TGFiZWwgW3RleHRdPSdcIlRvdGFsIGNsaWVudHM6IFwiICsgdG90YWwnPjwvTGFiZWw+XG4gICAgPCEtLSBZb3VyIFVJIGNvbXBvbmVudHMgZ28gaGVyZSAtLT5cbiAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cImxpc3RcIiBjbGFzcz1cInNtYWxsLXNwYWNpbmdcIiAobG9hZE1vcmVJdGVtcyk9XCJsaXN0Vmlld0xvYWRNb3JlSXRlbXMoJGV2ZW50KVwiIChpdGVtVGFwKT1cImxpc3RWaWV3SXRlbVRhcCgkZXZlbnQpXCI+XG5cbiAgICAgICAgPHRlbXBsYXRlIGxldC1pdGVtPVwiaXRlbVwiPlxuICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cIml0ZW0uY2xpZW50TmFtZVwiIGNsYXNzPVwibWVkaXVtLXNwYWNpbmdcIj48L0xhYmVsPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgPC9MaXN0Vmlldz5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDbGllbnRzQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgc3RhcnQ6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNvdW50Om51bWJlciA9IDEwMDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwKSB7XG4gICAgICAgIHRoaXMubG9hZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsaXN0OkFycmF5PE9iamVjdD4gPSBbXTtcbiAgICBwdWJsaWMgdG90YWw6bnVtYmVyID0gMDtcblxuXG4gICAgbG9hZChzdGFydDpudW1iZXIgPSAwKSB7XG4gICAgICAgIGxldCB1cmwgPSAnaHR0cHM6Ly91aXRlc3QubXkuYm1nLmNvbS9hcGkvY2xpZW50cz9zb3J0Q29sdW1uPXBhdGguc29ydCZpc0FzYz10cnVlJmNvdW50PScgKyB0aGlzLmNvdW50ICsgJyZzdGFydD0nICsgc3RhcnQgKyAnJmN1cnJlbmN5U3ltYm9sPVVTRCc7XG5cbiAgICAgICAgdGhpcy5odHRwLnBvc3QodXJsLCAnJywge2hlYWRlcnM6IHRoaXMuZ2V0UmVxdWVzdEhlYWRlcnMoKX0pXG4gICAgICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdCA9IFsuLi50aGlzLmxpc3QsIC4uLnJlc3VsdC5kYXRhXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsID0gdGhpcy5saXN0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgbGlzdFZpZXdMb2FkTW9yZUl0ZW1zKGV2KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9hZCBtb3JlXCIsIGV2KTtcbiAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQgKyB0aGlzLmNvdW50O1xuICAgICAgICB0aGlzLmxvYWQodGhpcy5zdGFydCk7XG4gICAgfVxuXG4gICAgbGlzdFZpZXdJdGVtVGFwKGV2KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGFwXCIsIGV2LmluZGV4KTtcbiAgICB9XG5cbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6UmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgIH1cblxuICAgIGdldFJlcXVlc3RIZWFkZXJzKCkge1xuICAgICAgICBsZXQgdXNlcm5hbWUgPSAndGVzdC51c2VyLjEwMDBjbGllbnRzJztcbiAgICAgICAgbGV0IHBhc3N3b3JkID0gJ3Rlc3QnO1xuICAgICAgICAvL3Rlc3QudXNlci4xMDAwY2xpZW50c1xuICAgICAgICAvLyBsZXQgcGFzcyA9ICdkR1Z6ZEM1MWMyVnlMakV3TURCamJHbGxiblJ6T25SbGMzUT0nO1xuICAgICAgICAvL3ZhbHRlY2h0ZXN0XG4gICAgICAgIGxldCBwYXNzID0gJ2RtRnNkR1ZqYUhSbGMzUTZiQzhxT0hwcVRDRmphQ2N6UkRRPSc7XG5cbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArIHBhc3MpO1xuICAgICAgICAvLyBoZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKSk7XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxufVxuIl19