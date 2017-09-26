# SPO form validation challenge 
This is a simple validation form done in react js for Service Partner One. I decided to do it in react despite never using it to get a 
better understanding of the way in which react works. I used webpack to compile and minify the javascript the project also uses bootstrap 4.
The layout component contains the form validation is done using primarily regex expressions, each of the form fields has a corresponding object
in the component state, this object has a valid boolean a value field and a validate function. When the submit button is fired it trigers all 
of the validation functions in the field objects. A child component is used to display the 'required field' message below the input, 
this is activated when the relevent valid boolean is false.
