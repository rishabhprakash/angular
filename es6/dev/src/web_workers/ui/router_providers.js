import { MessageBasedPlatformLocation } from './platform_location';
import { CONST_EXPR } from 'angular2/src/facade/lang';
import { BrowserPlatformLocation } from 'angular2/src/router/location/browser_platform_location';
import { APP_INITIALIZER, Provider, Injector, NgZone } from 'angular2/core';
export const WORKER_RENDER_ROUTER = CONST_EXPR([
    MessageBasedPlatformLocation,
    BrowserPlatformLocation,
    CONST_EXPR(new Provider(APP_INITIALIZER, { useFactory: initRouterListeners, multi: true, deps: CONST_EXPR([Injector]) }))
]);
function initRouterListeners(injector) {
    return () => {
        let zone = injector.get(NgZone);
        zone.run(() => injector.get(MessageBasedPlatformLocation).start());
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtTnZaWWxybWgudG1wL2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy91aS9yb3V0ZXJfcHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSxxQkFBcUI7T0FDekQsRUFBQyxVQUFVLEVBQUMsTUFBTSwwQkFBMEI7T0FDNUMsRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHdEQUF3RDtPQUN2RixFQUFDLGVBQWUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWU7QUFFekUsT0FBTyxNQUFNLG9CQUFvQixHQUFHLFVBQVUsQ0FBQztJQUM3Qyw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLFVBQVUsQ0FDTixJQUFJLFFBQVEsQ0FBQyxlQUFlLEVBQ2YsRUFBQyxVQUFVLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7Q0FDaEcsQ0FBQyxDQUFDO0FBRUgsNkJBQTZCLFFBQWtCO0lBQzdDLE1BQU0sQ0FBQztRQUNMLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01lc3NhZ2VCYXNlZFBsYXRmb3JtTG9jYXRpb259IGZyb20gJy4vcGxhdGZvcm1fbG9jYXRpb24nO1xuaW1wb3J0IHtDT05TVF9FWFBSfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtCcm93c2VyUGxhdGZvcm1Mb2NhdGlvbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3JvdXRlci9sb2NhdGlvbi9icm93c2VyX3BsYXRmb3JtX2xvY2F0aW9uJztcbmltcG9ydCB7QVBQX0lOSVRJQUxJWkVSLCBQcm92aWRlciwgSW5qZWN0b3IsIE5nWm9uZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBXT1JLRVJfUkVOREVSX1JPVVRFUiA9IENPTlNUX0VYUFIoW1xuICBNZXNzYWdlQmFzZWRQbGF0Zm9ybUxvY2F0aW9uLFxuICBCcm93c2VyUGxhdGZvcm1Mb2NhdGlvbixcbiAgQ09OU1RfRVhQUihcbiAgICAgIG5ldyBQcm92aWRlcihBUFBfSU5JVElBTElaRVIsXG4gICAgICAgICAgICAgICAgICAge3VzZUZhY3Rvcnk6IGluaXRSb3V0ZXJMaXN0ZW5lcnMsIG11bHRpOiB0cnVlLCBkZXBzOiBDT05TVF9FWFBSKFtJbmplY3Rvcl0pfSkpXG5dKTtcblxuZnVuY3Rpb24gaW5pdFJvdXRlckxpc3RlbmVycyhpbmplY3RvcjogSW5qZWN0b3IpOiAoKSA9PiB2b2lkIHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBsZXQgem9uZSA9IGluamVjdG9yLmdldChOZ1pvbmUpO1xuXG4gICAgem9uZS5ydW4oKCkgPT4gaW5qZWN0b3IuZ2V0KE1lc3NhZ2VCYXNlZFBsYXRmb3JtTG9jYXRpb24pLnN0YXJ0KCkpO1xuICB9O1xufVxuIl19