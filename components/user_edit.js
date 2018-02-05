//Components Library: User Edit

(function () {
    this.myApp.components = this.myApp.components || {};
    var components = this.myApp.components;

    components.user_edit_div = function(user) {
        var editDiv = document.createElement("div");
        editDiv.id = "edit";
        editDiv.style.display = "block";

        //edit div form: input lastname field
        var inputLastname = document.createElement("input");
        inputLastname.type = "text";
        inputLastname.name = "edit-lastname";
        inputLastname.id = "edit-lastname";
        inputLastname.value = user.lastname;
        editDiv.appendChild(inputLastname);

        //edit div form: input firstname field
        var inputFirstname = document.createElement("input");
        inputFirstname.type = "text";
        inputFirstname.name = "edit-firstname";
        inputFirstname.id = "edit-firstname";
        inputFirstname.value = user.firstname;
        editDiv.appendChild(inputFirstname);

        //edit save button
        var editSaveBtn = document.createElement("button");
        editSaveBtn.id = "edit-save";
        editSaveBtn.innerText = "Save";
        editSaveBtn.addEventListener('click', myApp.save_edit, false);

        //edit cancel button
        var editCancelBtn = document.createElement("button");
        editCancelBtn.id = "edit-cancel";
        editCancelBtn.innerText = "Cancel";
        editCancelBtn.addEventListener('click', myApp.cancel_edit, false);
        editDiv.appendChild(editSaveBtn);
        editDiv.appendChild(editCancelBtn);

        return editDiv;
    }
}());

