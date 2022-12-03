import { Injectable } from "@angular/core";
import { User } from "../user/user.model";
import { Company } from "./company.model";

@Injectable({
    providedIn: 'root',
})
  
export class CompanyService {
    companies: Company[] = [
        new Company(0, new User(0, 'test', 'test', 'test@test.nl'), 'test', 'Company1', true),
        new Company(1, new User(0, 'test', 'test', 'test@test.nl'), 'test2', 'Company2', true),
        new Company(2, new User(0, 'test', 'test', 'test@test.nl'), 'test3', 'Company3', true),
    ];

    constructor() {
        console.log('Service constructor aangeroepen');
    }

    getCompanies(): Company[] {
        return this.companies;
    }
    getCompaniesByCompanyId(companyId: number): Company {
        return this.companies.filter(company => company.id == companyId)[0];
    }
}