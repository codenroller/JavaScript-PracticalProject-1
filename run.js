// Display user list
myApp.display_user_list(myApp.data.users);

//Adding event listener to form submit button
document.getElementById("btn-submit").addEventListener('click', myApp.add_user, false);
