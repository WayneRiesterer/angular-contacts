import { Injectable } from '@angular/core';

import { Contact } from './domain/contact.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ContactsService {
  contactsUpdated = new Subject<Array<Contact>>();

  protected contacts: Array<Contact> = [
    {
      givenName: 'Wayne',
      familyName: 'Riesterer',
      emailAddress: 'wayne.paul.riesterer@gmail.com',
      daysSinceContacted: 1
    },
    {
      givenName: 'Barny',
      familyName: 'Rubble',
      emailAddress: 'barny@acmegravelpit.org',
      daysSinceContacted: 4
    },
    {
      givenName: 'Fred',
      familyName: 'Flintstone',
      emailAddress: 'fred@acmegravelpit.org',
      daysSinceContacted: 20
    }
  ];

  getContacts(): Array<Contact> {
    return this.contacts;
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
    this.contactsUpdated.next([...this.contacts]);
  }

}
