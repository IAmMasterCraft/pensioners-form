//terminationDate
const terminationDate = formInput({
    inputSize: "col-4",
    inputType: "date",
    name: "Date of Termination",
});

//terminationCause
const terminationCause = formInput({
    inputSize: "col-4",
    inputType: "text",
    name: "Cause of Termination",
});

//lastSalaryScale
const lastSalaryScale = formInput({
    inputSize: "col-4",
    inputType: "text",
    name: "Last Salary and Scale",
});

//fullPension
const fullPension = formInput({
    inputSize: "col-4",
    inputType: "text",
    name: "Full Pension/Annual Allowance",
});

//reducedPension
const reducedPension = formInput({
    inputSize: "col-4",
    inputType: "text",
    name: "Reduced Pension/Annual Allowance",
});

//gratuity
const gratuity = formInput({
    inputSize: "col-4",
    inputType: "text",
    name: "Gratuity",
});