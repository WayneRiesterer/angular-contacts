import { Component, OnInit } from '@angular/core';

import { Contact } from '../domain/contact.model';
import { ContactsService } from '../contacts.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  protected contacts: Array<Contact> = undefined;
  private contactsSubscription: Subscription;

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
    this.contactsSubscription = this.contactsService.contactsUpdated
      .subscribe((contacts: Array<Contact>) => {
        this.contacts = contacts;
        console.log(this.contacts);
      });
  }

  onContactAdded(contact: Contact): void {
    this.contactsService.addContact(contact);
  }
}
