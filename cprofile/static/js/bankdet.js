const endpoint = 'api/bank_details/'

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

var bank_counter = 1;

function show_bank_details(data) {
    data.forEach(object => {
        var htmlOfCard = `
    <div class="accordion-item shadow-sm border-light my-3">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#bank_count_${bank_counter}" aria-expanded="true" >
       <b>${object.bank_name}</b>
      </button>
    </h2>
    <div id="bank_count_${bank_counter}" class="accordion-collapse collapse" >
    <div class="accordion-body">
    <div class="row">
        <div class="col-6">
            <div>
                <label for="contact_email" class="mb-1">Bank Name</label>
                <input type="email" class="form-control mb-3" id="bank_name_${bank_counter}" placeholder="Bank Name" value="${object.bank_name}">
            </div>
        </div>
        <div class="col-6">
            <div>
                <label for="contact_num" class="mb-1">Account No</label>
                <input type="text" class="form-control mb-3" id="acc_num_${bank_counter}" value="${object.account_number}" placeholder='LastName'>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-6">
            <div>
                <label for="contact_email" class="mb-1">IFSC Code</label>
                <input type="email" class="form-control " id="ifsc_${bank_counter}" placeholder="Email" value="${object.ifsc_code}">
            </div>
        </div>
        <div class="col-6">
            <div>
                <label for="contact_num" class="mb-1">Branch Location</label>
                <input type="text" class="form-control " id="branch_${bank_counter}" value="${object.location}">
            </div>
        </div>
    </div>
</div>
    </div>
  </div>
    `;

        document.getElementById('showingBankDetails').insertAdjacentHTML('beforeend', htmlOfCard)
        bank_counter++;
    });
}

function AddNewBank() {
    var htmlOfCard = `
    <div class="accordion-item shadow-sm border-light my-3">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#bank_count_${bank_counter}" aria-expanded="true" >
      New Bank Account Details
      </button>
    </h2>
    <div id="bank_count_${bank_counter}" class="accordion-collapse collapse show" >
    <div class="accordion-body">
    <div class="row">
        <div class="col-6">
            <div>
                <label for="contact_email" class="mb-1">Bank Name</label>
                <input type="email" class="form-control mb-3" id="bank_name_${bank_counter}" placeholder="Bank Name" value="">
            </div>
        </div>
        <div class="col-6">
            <div>
                <label for="contact_num" class="mb-1">Account No</label>
                <input type="text" class="form-control mb-3" id="acc_num_${bank_counter}" value="" placeholder='LastName'>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-6">
            <div>
                <label for="contact_email" class="mb-1">IFSC Code</label>
                <input type="email" class="form-control " id="ifsc_${bank_counter}" placeholder="Email" value="">
            </div>
        </div>
        <div class="col-6">
            <div>
                <label for="contact_num" class="mb-1">Branch Location</label>
                <input type="text" class="form-control " id="branch_${bank_counter}" value="">
            </div>
        </div>
    </div>
</div>
    </div>
  </div>`;
    bank_counter++;
    document.getElementById('showingBankDetails').insertAdjacentHTML('beforeend', htmlOfCard)

}