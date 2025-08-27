import {Component, OnInit} from '@angular/core';
import {CustomerService, CustomerServiceData} from './customer-services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  
})
export class OurServicesComponent implements OnInit {
  services: CustomerServiceData[] = [];
  private currentLang: string;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    ) {
        
  }

  ngOnInit() {

    this.getServices(this.currentLang);
  }

  getServices(currentLang) {
    let service: CustomerServiceData = new CustomerServiceData();
    this.customerService.getServiceList().forEach(ser => {
      service = {
        Icon: ser.Icon,
        Id: ser.Id,
        Title: (currentLang === 'et' ? ser.Title :ser.TitleEnglish),
        Desc: (currentLang === 'et' ? ser.DescAmh : ser.Desc),
        Path: ser.Path
      };
      this.services.push(service);
    });
    // remove the last two elements
    this.services.splice(13, 2);
  }

  goToServiceDetail(id: any, path) {
    if (id != '0') {
      this.router.navigate(['/requirements/' + id]);
    } else {
      this.router.navigateByUrl(path);
    }

  }

}
