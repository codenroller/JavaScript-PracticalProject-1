//Application Data
(
    function () {
        this.myApp.data = this.myApp.data || {};
        var data = this.myApp.data;
        //import user data to app: myApp.data.users
        data.users = [
            {
                lastname: "Doe",
                firstname: "John"
            },

            {
                lastname: "Parker",
                firstname: "Sarah"
            },

            {
                lastname: "Peterson",
                firstname: "Bryan"
            }
        ];


    }()
);
