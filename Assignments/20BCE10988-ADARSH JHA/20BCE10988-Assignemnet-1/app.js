function submitForm() {
    const firstname = document.forms.form1.firstname.value;
    const lastname = document.forms.form1.lastname.value;
    const age = document.forms.form1.age.value;
    const gender = document.forms.form1.gender.value;
    const address = document.forms.form1.address.value;
     
    
    let text = "Hi " + firstname + " " + lastname + " aged " + age + " who is a " + gender + " and lives in " + address;
    document.write(text);
  }
