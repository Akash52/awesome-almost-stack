import {Component, inject} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../services/auth.service";
import { MessagesService } from '../messages/messages.service';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'login',
    imports: [
        RouterLink,
        ReactiveFormsModule
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {

    fb = inject(FormBuilder);
    messagesService = inject(MessagesService);
    authService = inject(AuthService);
    router = inject(Router);

    form = this.fb.group({
        email: [''],
        password: ['']
    });

    async onSubmit() {
        try {
            const { email, password } = this.form.value;

        if (!email || !password) {
            this.messagesService.showMessage('Email and password are required', 'error');
            return;
        }

       await this.authService.login(email, password)
       await this.router.navigate(['/home']);
            
        } catch (error) {
        console.error(error);
        this.messagesService.showMessage('Login failed', 'error');
        }
    }

}
