"use strict";
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n        <StackLayout>\n            <StackLayout class=\"nav\">\n                <Button text=\"Clients\" \n                    [nsRouterLink]=\"['/clients']\"></Button>\n                <Button text=\"Sources\"\n                    [nsRouterLink]=\"['/sources']\"></Button>\n            </StackLayout>\n\n            <router-outlet></router-outlet>\n        </StackLayout>\n  "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQWtCMUMsSUFBYSxZQUFZO0lBRXJCO0lBRUEsQ0FBQztJQUVMLG1CQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSxZQUFZO0lBZnhCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsNFhBV1g7S0FDRixDQUFDOztHQUNXLFlBQVksQ0FNeEI7QUFOWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm5hdlwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkNsaWVudHNcIiBcbiAgICAgICAgICAgICAgICAgICAgW25zUm91dGVyTGlua109XCJbJy9jbGllbnRzJ11cIj48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJTb3VyY2VzXCJcbiAgICAgICAgICAgICAgICAgICAgW25zUm91dGVyTGlua109XCJbJy9zb3VyY2VzJ11cIj48L0J1dHRvbj5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbn1cbiJdfQ==