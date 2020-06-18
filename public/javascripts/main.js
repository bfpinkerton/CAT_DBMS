

var url = window.location.href;

$(document).ready(function () {

    // Function Calls
    showTime();
    changeSelectedItem(url);
    loader();
    makeInteractive(); // TODO: Modify below
    loginForm();
});

function loginForm() {
    $('#loginForm').form({
        fields: {
            email: {
                identifier: 'email',
                rules: [{
                    type: 'empty',
                    prompt: 'Please enter your email'
                }]
            },
            password: {
                identifier: 'password',
                rules: [{
                    type: 'empty',
                    prompt: 'Please enter your password'
                }]
            }
        }
    });
}

function makeInteractive() {
    $('.menu .item').tab();
    $('.ui.accordion').accordion();
    $('.ui.dropdown').dropdown();

    /** Close icon on message */
    $('.message .close')
        .on('click', function () {
            $(this)
                .closest('.message')
                .transition('fade');
        });
}


/**
 * Function to change active item in sidebar menu
 * TODO: Modify for Sidebar DB Table Access
 */
function changeSelectedItem(url) {
    if (url.includes('/patients/new')) {
        $('.add-patient-item').addClass('selected');
    } else if (url.includes('/patients/map')) {
        $('.map-item').addClass('selected');
    } else if (url.includes('/patients/')) {
        // Do nothing
    } else if (url.includes('/patients')) {
        $('.patient-list-item').addClass('selected');
    } else if (url.includes('/users/reminders')) {
        $('.reminder-item').addClass('selected');
    } else if (url.includes('/users/settings')) {
        $('.settings-item').addClass('selected');
    }
}
/**
 * Function used to display real time on main menu
 */
function showTime() {
    var clock = document.getElementById("MyClockDisplay");
    if (clock != null) {

        var date = new Date();
        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59
        var s = date.getSeconds(); // 0 - 59
        var session = "AM";

        if (h == 0) {
            h = 12;
        }

        if (h > 12) {
            h = h - 12;
            session = "PM";
        }

        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        var time = h + ":" + m + ":" + s + " " + session;

        clock.innerText = time;
        clock.textContent = time;

        setTimeout(showTime, 1000);
    }
}

function edit() {
    $('.ui.small.modal').modal({
        blurring: true
    }).modal('show');
}




function loader() {
    /**
     * Using timeout function to redirect to loader page then home page
     */
    function redirect_to_user_home() {
        window.location.href = '/users/home';
    }

    function redirect_to_landing() {
        window.location.href = '/';
    }

    if (url.includes('/login/loader')) {
        setTimeout(redirect_to_user_home, 1500);
    } else if (url.includes('/logout/loader')) {
        setTimeout(redirect_to_landing, 1500);
    }

}