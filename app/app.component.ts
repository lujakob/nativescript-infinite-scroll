import { Component } from "@angular/core";


@Component({
    selector: 'my-app',
    template: `
        <StackLayout>
            <StackLayout class="nav">
                <Button text="Clients" 
                    [nsRouterLink]="['/clients']"></Button>
                <Button text="Sources"
                    [nsRouterLink]="['/sources']"></Button>
            </StackLayout>

            <router-outlet></router-outlet>
        </StackLayout>
  `
})
export class AppComponent {

    constructor() {

    }

}
