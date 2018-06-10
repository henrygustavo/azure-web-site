import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { merge } from 'rxjs';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { GenericValidator } from '../../shared/generic-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChildren(FormControlName, { read: ElementRef })
     formInputElements: ElementRef[] = [];
     displayMessage: { [key: string]: string } = {};
     mainForm: FormGroup;
     validationMessages: { [key: string]: { [key: string]: string } };
     genericValidator: GenericValidator;
     subscription: Subscription = new Subscription();

    constructor(

        private fb: FormBuilder) {

        this.validationMessages = {
            email: {
                required: 'Email is required.',
                minlength: 'Email must be at least 4 characters.',
                email: 'Please enter a valid email address.'
            },
            password: {
                required: 'Password is required.',
                minlength: 'Password must be at least 6 characters.'
            }
        };

        this.genericValidator = new GenericValidator(this.validationMessages);
    }

    ngOnInit(): void {

        this.mainForm = this.fb.group({
            email:  new FormControl('', [Validators.required, Validators.minLength(4)]),
            password: new FormControl ('', [Validators.required, Validators.minLength(6)])

        });
    }

    ngAfterViewInit(): void {

        const controlBlurs: Observable<any>[] = this.formInputElements
            .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

        const controlSubscription =  merge(this.mainForm.valueChanges, ...controlBlurs).pipe(debounceTime(800)).subscribe(() => {
            this.displayMessage = this.genericValidator.processMessages(this.mainForm);
        });

        this.subscription.add(controlSubscription);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
      }

    signUp(): void {


    }
}
