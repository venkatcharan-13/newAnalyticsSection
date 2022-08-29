const endpoint = 'api/bank_details/'


var bankCounter = 1;

$.ajax({
    method: "GET",
    url: endpoint,
    success: function(response) {
        console.log("Success Bank");
        show_bank_details(response);
    },
    error: function(error_data) {
        console.log("Error");
        console.log(error_data);
    }
})



function show_bank_details(data) {
    data.forEach(object => {
        var htmlOfCard = `
    <div class="accordion-item shadow-sm border-light my-3">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#bank_count_${bankCounter}" aria-expanded="true" >
       <b>${object.bank_name}</b>
      </button>
    </h2>
    <div id="bank_count_${bankCounter}" class="accordion-collapse collapse" >
    <div class="accordion-body">
    <div class="row">
        <div class="col-6">
            <div>
                <label for="contact_email" class="mb-1">Bank Name</label>
                <input type="email" class="form-control mb-3" id="bank_name_${bankCounter}" placeholder="Bank Name" value="${object.bank_name}">
            </div>
        </div>
        <div class="col-6">
            <div>
                <label for="contact_num" class="mb-1">Account No</label>
                <input type="text" class="form-control mb-3" id="acc_num_${bankCounter}" value="${object.account_number}" placeholder='LastName'>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-6">
            <div>
                <label for="contact_email" class="mb-1">IFSC Code</label>
                <input type="email" class="form-control " id="ifsc_${bankCounter}" placeholder="Email" value="${object.ifsc_code}">
            </div>
        </div>
        <div class="col-6">
            <div>
                <label for="contact_num" class="mb-1">Branch Location</label>
                <input type="text" class="form-control " id="branch_${bankCounter}" value="${object.location}">
            </div>
        </div>
    </div>
</div>
    </div>
  </div>
    `;

        document.getElementById('showingBankDetails').insertAdjacentHTML('beforeend', htmlOfCard)
        bankCounter++;
    });
}

function AddNewBank() {
    var htmlOfCard = `
    <div class="accordion-item shadow-sm border-light my-3">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#bank_count_${bankCounter}" aria-expanded="true" >
      New Bank Account Details
      </button>
    </h2>
    <div id="bank_count_${bankCounter}" class="accordion-collapse collapse show" >
    <div class="accordion-body">
    <div class="row">
        <div class="col-6">
            <div>
                <label for="contact_email" class="mb-1">Bank Name</label>
                <input type="email" class="form-control mb-3" id="bank_name_${bankCounter}" placeholder="Bank Name" value="">
            </div>
        </div>
        <div class="col-6">
            <div>
                <label for="contact_num" class="mb-1">Account No</label>
                <input type="text" class="form-control mb-3" id="acc_num_${bankCounter}" value="" placeholder='LastName'>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-6">
            <div>
                <label for="contact_email" class="mb-1">IFSC Code</label>
                <input type="email" class="form-control " id="ifsc_${bankCounter}" placeholder="Email" value="">
            </div>
        </div>
        <div class="col-6">
            <div>
                <label for="contact_num" class="mb-1">Branch Location</label>
                <input type="text" class="form-control " id="branch_${bankCounter}" value="">
            </div>
        </div>
    </div>
</div>
    </div>
  </div>`;
    bankCounter++;
    document.getElementById('showingBankDetails').insertAdjacentHTML('beforeend', htmlOfCard)
    console.log(htmlOfCard)

}


changedDetailsOfBank = {}

function saveBtn() {
    noOfBankDetails = 0
    for (let i = 1; i < bankCounter; i++) {
        var changed_bank_name = document.getElementById('bank_name_' + i)
        var changed_acc_num = document.getElementById('acc_num_' + i)
        var changed_ifsc_code = document.getElementById('ifsc_' + i)
        var changed_branch = document.getElementById('branch_' + i)
        changedDetailsOfBank['bank_name_' + i] = changed_bank_name.value;
        changedDetailsOfBank['acc_num_' + i] = changed_acc_num.value;
        changedDetailsOfBank['ifsc_' + i] = changed_ifsc_code.value;
        changedDetailsOfBank['branch_' + i] = changed_branch.value;
        noOfBankDetails += 1;

    }
    changedDetailsOfBank['no_of_bank_details'] = noOfBankDetails
    console.log(changedDetailsOfBank)
    $.ajax({
        url: "save_btn_bank/",
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(changed_details_of_bank),
        dataType: 'json',
        success: function(data) {
            console.log("Bank Details added");
            document.location.reload();
        },
        error: function(error) {
            console.log(error);
        }
    });
}