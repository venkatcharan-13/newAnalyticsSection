var endpoint = 'api/gstData/';
var choosen_month = sessionStorage.getItem("choosen_month") ? sessionStorage.getItem("choosen_month") : "2022-06-30";
var choosen_fy = sessionStorage.getItem("choosen_fy") ? sessionStorage.getItem("choosen_fy") : "2022";

$(document).ready(function() {
    if (sessionStorage.getItem("choosen_month")) {
        $('#periodSelector').val(sessionStorage.getItem("choosen_month").substring(0, 7));
    }
    if (sessionStorage.getItem("choosen_fy")) {
        $('#fySelector').val(sessionStorage.getItem("choosen_fy"));
    } else {
        $('#fySelector').val("Choose FY");
    }
});

$.ajax({
    method: "GET",
    url: endpoint,
    data: {
        selected_date: choosen_month,
        selected_fy: choosen_fy
    },
    success: function(response) {
        console.log("GST data loaded");
        createAlertBoxes(response.alerts, "alertsBox");
        createRadioElement(response.status.monthly, "monthly_status");
        createRadioElement(response.status.quarterly, "quarterly_status");
    },
    error: function(error_data) {
        console.log("Error");
        console.log(error_data);
    }
})

function changePeriod(params) {
    console.log(params);
    var year = params.substring(0, 4);
    var month = params.substring(5, 7);
    var choosen_period = params + '-' + new Date(year, month, 0).getDate();
    sessionStorage.setItem("choosen_month", choosen_period);
    location.reload();
}

function changeFinYear(params) {
    console.log(params);
    sessionStorage.setItem("choosen_fy", params);
    location.reload();
}

function showPending(params) {
    for (var i = 0; i < document.getElementsByClassName(params).length; i++) {
        document.getElementsByClassName(params)[i].style.display = 'none'
    }
}

function showAll(params) {
    for (var i = 0; i < document.getElementsByClassName(params).length; i++) {
        document.getElementsByClassName(params)[i].setAttribute('style', 'display:flex;align-items:center;justify-content:center;')
    }
}


function createAlertBoxes(data, id) {
    var box = document.getElementById(id);
    data.forEach(function(object) {
        var div = document.createElement('div');
        div.innerHTML = '<div class="card">' +
            `<div class="card-body"> <p class="card-text"> ${object.desc} <b> ${object.dueDate} </b></p></div></div><br>`;
        box.appendChild(div);
    })
}

function createRadioElement(data, eid) {
    elem = document.getElementById(eid);
    var symBol
    Object.entries(data).forEach(function(month) {
        var div = document.createElement('div');
        div.setAttribute('style', 'display:flex;align-items:center;justify-content:center;')
        switch (month[1]) {
            case "done":
                if (eid == 'quarterly_status') {
                    div.className = "col-3 shadow-sm quaterlyStatus";
                } else {
                    div.className = "col-2 shadow-sm monthlyStatus";
                }

                var symBol = `<i class="fa fa-check-circle" aria-hidden="true"  style="color:#03fc24;margin-right:10px"></i>`;
                break;
            case "action_required":
                if (eid == 'quarterly_status') {
                    div.className = "col-3 shadow-sm quaterlyStatus";
                } else {
                    div.className = "col-2 shadow-sm monthlyStatus";
                }

                var symBol = `<i  class="fa fa-exclamation-triangle " aria-hidden="true"  style="color:#fc3503;margin-right:10px"></i>`;
                break;
            case "quality_check":
                if (eid == 'quarterly_status') {
                    div.className = "col-3 shadow-sm quaterlyStatus";
                } else {
                    div.className = "col-2 shadow-sm monthlyStatus";
                }

                var symBol = `<i class="fa fa-minus-circle " aria-hidden="true"  style="color:#c203fc;margin-right:10px"></i>`;
                break;
            default:
                if (eid == 'quarterly_status') {
                    div.className = "col-3 shadow-sm ";
                } else {
                    div.className = "col-2 shadow-sm ";
                }
                var symBol = `<i class="fa fa-hourglass-half " aria-hidden="true" style="color:#008FFB;margin-right:10px"></i>`;
                break;
        }
        div.innerHTML = symBol +
            `<label class="form-check-label" for="flexRadioDefault1">${month[0]}</label>`;

        elem.appendChild(div, elem.nextSibling);
    })
}