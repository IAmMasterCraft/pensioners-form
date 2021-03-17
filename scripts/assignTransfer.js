//dateOfTransfer
const dateOfTransfer = formInput({
    inputSize: "col-4",
    inputType: "date",
    name: "Date Of Transfer",
    placeHolder: "Select Date Of Transfer",
});

//fromOffice
const fromOffice = formInput({
    inputSize: "col-4",
    inputType: "text",
    name: "From",
    placeHolder: "Enter Previous Office/Ministry/Department",
});

//toOffice
const toOffice = formInput({
    inputSize: "col-4",
    inputType: "text",
    name: "To",
    placeHolder: "Enter Next Office/Ministry/Department",
});

//totalMonthDays
const totalMonthDays = formInput({
    inputSize: "col-4",
    inputType: "text",
    name: "Total Month & Days",
    placeHolder: "Enter total month & days spent in previous office before transfer",
});