const endpoint = 'api/ratiosData/';
var choosen_month = sessionStorage.getItem("choosen_month") ? sessionStorage.getItem("choosen_month"): "2022-06-30";

$(document).ready(function() {
    if(sessionStorage.getItem("choosen_month")){
        $('#periodSelector').val(sessionStorage.getItem("choosen_month").substring(0, 7));
    }
    else{
      $('#periodSelector').val("Choose Month");
    }
});

$.ajax({
    method: "GET",
    url: endpoint,
    data: {
        selected_date: choosen_month
    },
    success: function (response) {
        console.log("Success PNL");
        document.getElementById("current_month").innerHTML = response.current_period;
        document.getElementById("previous_month").innerHTML = response.previous_period;
        fillRatiosHead(response.response_data.gross_profit, 'gross_profit', 'Gross Profit');
        fillRatiosHead(response.response_data.net_profit, 'net_profit', 'Net Profit');
        fillRatiosTableRows(response.response_data.profit_ratios, 'profit_ratios');
        fillRatiosTableRows(response.response_data.liquidity_ratio, 'liquidity_ratios');
        fillRatiosTableRows(response.response_data.op_eff_ratios, 'op_eff_ratios');
        fillRatiosTableRows(response.response_data.solvency_ratios, 'solvency_ratios');
        document.getElementById('table_info').innerHTML = response.description;
        document.getElementById('table_info_head').innerHTML = "Ratios";
    },
    error: function (error_data) {
        console.log("Error4");
        console.log(error_data);
    }
})

function changePeriod(params) {
    var year = params.substring(0, 4);
    var month = params.substring(5, 7);
    var choosen_period = params + '-' + new Date(year, month, 0).getDate(); 
    sessionStorage.setItem("choosen_month", choosen_period);
    location.reload();
  }

function fillRatiosHead(object, tid, head) {
    document.getElementById(tid).innerHTML = '<th style="width:20%">' + head + '</th>' +
        '<td style="width: 15%; text-align:right;">' + object.current + '</td>' +
        '<td style="width: 15%; text-align:right;">' + object.previous + '</td>' +
        '<td style="width: 15%; text-align:center;">' + object.three_month_avg + '</td>' +
        '<td style="width: 15%; text-align:center;"></td>' + 
        '<td style="width: 20%; text-align:center;"></td>';
}

function fillRatiosTableRows(data, rid) {
    var table = document.getElementById("ratios_table");
    var i = document.getElementById(rid).rowIndex + 1;
    if(data.length == 0){
        var tr = table.insertRow(i);
        tr.innerHTML = '<td></td>';
    }
    data.forEach(function (object) {
        var tr = table.insertRow(i);
        // tr.style.cssText = 'border-bottom: 1px solid black';
        tr.innerHTML = `<th style="width:20%"> ${object.ratio_head} <span class="fa fa-info-circle" title="${object.ratio_info}"></span></th>` +
            `<td style="width: 15%; text-align:right;"> ${object.current + object.ratio_format} </td>` +
            `<td style="width: 15%; text-align:right;"> ${object.previous + object.ratio_format} </td>` +
            `<td style="width: 15%; text-align:center;"> ${object.three_month_avg + object.ratio_format} </td>` +
            `<td style="width: 15%; text-align:center;"> ${object.ideal_ratio}</td>` + 
            `<td style="width: 20%; text-align:center;"> ${object.action_to_be_taken} </td>`;
        i++;
    })
}
