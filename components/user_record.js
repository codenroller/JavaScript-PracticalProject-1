//Components Library: User Record Component
(function () {
    this.myApp.components = this.myApp.components || {};
    var components = this.myApp.components;

    components.user_record = function (user) {
        var listItem = document.createElement("li");
        listItem.className = "cUser";

        var lastname = (user.lastname).toUpperCase();
        var firstname = (user.firstname).capitalize();

        // span element with user name and surname
        var textItem = document.createElement("span");
        textItem.innerText = textItem.innerText = lastname + " " + firstname;
        listItem.appendChild(textItem);

        // edit button
        var editButton = document.createElement("button");
        editButton.className = "edit-user";
        editButton.innerText = "Edit";
        editButton.addEventListener('click', myApp.edit_user, false);
        listItem.appendChild(editButton);

        // delete button
        var delButton = document.createElement("button");
        delButton.className = "del-user";
        delButton.innerText = "Delete";
        delButton.addEventListener('click', myApp.delete_user, false);
        listItem.appendChild(delButton);

        return listItem;
    }

} () );