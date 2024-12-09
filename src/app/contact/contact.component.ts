import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private http:HttpClient){

  }

  // preventEmptyFormSubmission(event: Event): void {
  //   Prevent the default form submission
  //   event.preventDefault();
  
  //   Get the form element from the event
  //   const form = event.target as HTMLFormElement;
  
  //   Check if all input fields have values
  //   const inputs = form.querySelectorAll("input, textarea, select");
  //   let isEmpty = false;
  
  //   inputs.forEach((input) => {
  //     Trim whitespace for text inputs
  //     const value = input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement
  //       ? input.value.trim()
  //       : (input as HTMLSelectElement).value;
  
  //     if (!value) {
  //       isEmpty = true;
  //       input.classList.add("error"); // Optional: Add error class to empty inputs
  //     } else {
  //       input.classList.remove("error"); // Remove error class if input is filled
  //     }
  //   });
  
  //   if (isEmpty) {
  //     alert("Please fill out all required fields before submitting.");
  //     return; // Stop the submission
  //   }
  
  //   If no fields are empty, submit the form
  //   form.submit();
  // }
  

   onSubmit(data: {access_key: string, name: string, email: string, message: string})
  {
    if(data.name == null || data.email == null || data.message == null || data.name.trim() == ""){
      alert("Please fill out all required fields before submitting.");
      return;
    }
    
    data.access_key = "636fd68f-5b13-4f70-8411-9d769c20ebb2";
    console.log(data);
    this.http.post('https://api.web3forms.com/submit', data)
    .subscribe((res) =>{
      console.warn("result",res)
    });
    alert("Message sent successfully!")


  }
}
