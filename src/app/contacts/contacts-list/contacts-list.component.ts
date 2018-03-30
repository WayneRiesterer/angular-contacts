import { Component, Input } from '@angular/core';

import { Contact } from '../domain/contact.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent {
  @Input() contacts: Array<Contact>;
}
