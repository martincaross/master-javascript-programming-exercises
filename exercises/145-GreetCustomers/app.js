let customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  let greeting = '';
  // your code here
  if (customerData[firstName] == undefined){
    return greeting = "Welcome! Is this your first time?"
  }

  costumerVisits = customerData[firstName].visits
  
  if(costumerVisits == 0){
    greeting = "Welcome! Is this your first time?"
  } else if (costumerVisits == 1) {
    greeting = "Welcome back, " + firstName +"! We're glad you liked us the first time!"  
  } else {
    greeting = "Welcome back, " + firstName +"! So glad to see you again!"
  } 
  
  return greeting;
  
}

  

console.log(greetCustomer('Howrd')); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
