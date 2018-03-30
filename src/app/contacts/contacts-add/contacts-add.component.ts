import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Contact } from '../domain/contact.model';

@Component({
  selector: 'app-contacts-add',
  templateUrl: './contacts-add.component.html',
  styleUrls: ['./contacts-add.component.scss']
})
export class ContactsAddComponent implements OnInit {
  @Output() contactAdded = new EventEmitter<Contact>();
  protected addContactForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createAddContactForm();
  }

  createAddContactForm(): void {
    this.addContactForm = this.fb.group({
      givenName: [undefined, Validators.required],
      familyName: [undefined, Validators.required],
      emailAddress: [undefined, [Validators.required, Validators.email]],
      daysSinceContacted: [undefined]
    });
  }

  onAddContact(): void {
    this.contactAdded.emit(this.addContactForm.value);
  }

}
