(function() {
    this.myApp = this.myApp || {};
    this.myApp.components = this.myApp.components || {};
    this.myApp.data = this.myApp.data || {};

    /* Application Namespaces */

    //main application space
    var main = this.myApp;

    //components space
    var components = this.myApp.components;

    //data space
    var data = this.myApp.data;

    /*Various Functions*/

    //here we use prototype and add capitalize method to string
    String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
    }

    //here we create a User class (model)
    function User(lastname, firstname) {
        this.lastname = lastname;
        this.firstname = firstname;
    }

    //read add form data
    function read_add_form_data() {
        var lastname = document.getElementById("lastname").value.trim();
        var firstname = document.getElementById("firstname").value.trim();
        return {
            lastname: lastname,
            firstname: firstname
        };
    }

    //clear data from the add form
    function clear_add_form() {
        document.getElementById("lastname").value = "";
        document.getElementById("firstname").value = "";
    }

    //read edit form data
    function read_edit_form_data() {
        var lastname = document.getElementById("edit-lastname").value.trim();
        var firstname = document.getElementById("edit-firstname").value.trim();
        return {
            lastname: lastname,
            firstname: firstname
        };
    }

    //clear everything from user list displayed on the web page
    function clear_user_list () {
        var userListTag = document.getElementById("user-list");
        userListTag.innerHTML = "";
    }

    //refresh user list: clear the old list and render an updated one
     function refresh_user_list (users) {
        clear_user_list();
        myApp.display_user_list(users)
    }

     //disable or enable all buttons of a class
     function disable_class_buttons(className, disable = true) {
         var class_buttons = document.getElementsByClassName(className);
         for (var i = 0; i < class_buttons.length; i++) {
             class_buttons[i].disabled = disable;
         }
     }
    
    /* API Functions */
    myApp.display_user_list = function (users) {
        /*  Description:
            Displays user list data on the web page
        */
        var userListTag = document.getElementById("user-list");
        user_counter = 0;

        users.forEach(function (user) {
            var newListItem = components.user_record(user);
            newListItem.id = user_counter;

            userListTag.appendChild(newListItem);

            user_counter += 1;
        })
    }

    main.add_user = function (event) {
        /*  Description:
            Adds a new user to the users data set and displays it on the web page
         */
        //disable form button default behavior
        event.preventDefault();
        //read form data
        var user_data = read_add_form_data();

        //update users dataset
        if (user_data.lastname.length > 0 && user_data.firstname.length > 0) {
            myApp.data.users.push(new User(user_data.lastname, user_data.firstname));
            console.log("A new user has been added.")
        }
        else {
            console.log("Not enough information to create a new user.")
        }

        //clean the add form
        clear_add_form();

        //update user list on the web page
        refresh_user_list(myApp.data.users);
    }

    main.delete_user = function (event) {
        /*  Description:
            Delete user from the dataset and update the web page
        */
        var user_id = event.target.parentNode.id;
        myApp.data.users.splice(user_id, 1);

        //update user list on the web page
        refresh_user_list(myApp.data.users);
        console.log("User has been deleted.");
    }

    main.edit_user = function (event) {
        /*  Description:
            Show user edit panel
        */
        var user_id = event.target.parentNode.id;
        event.target.parentNode.appendChild( components.user_edit_div(myApp.data.users[user_id]) );

        //disable edit and delete buttons
        disable_class_buttons("edit-user", true);
        disable_class_buttons("del-user", true);
    }

    main.save_edit = function (event) {
        /*  Description:
            Save edited user data to dataset
        */
        var user_id = document.getElementById("edit").parentNode.id;

        //read edit form data
        var user_data = read_edit_form_data();

        //save changes to dataset
        if (user_data.lastname.length > 0 && user_data.firstname.length > 0) {
            myApp.data.users[user_id].lastname = user_data.lastname;
            myApp.data.users[user_id].firstname = user_data.firstname;            
        }
        else {
            console.log("Not enough data for update.");
        }

        //update user list. Comment: when we update user list the edit form is removed
        refresh_user_list(myApp.data.users);
           
        //enable all delete and edit buttons
        disable_class_buttons("edit-user", false);
        disable_class_buttons("del-user", false);
    }

    main.cancel_edit = function () {
        //remove edit form
        document.getElementById("edit").remove();

        //enable all delete and edit buttons
        disable_class_buttons("edit-user", false);
        disable_class_buttons("del-user", false);
    }
}()
)