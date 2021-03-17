//territory
const territory = formInput({
    inputSize: "col-4",
    inputType: "text",
    name: "Territory",
});

//fromGovernment
const fromGovernment = formInput({
    inputSize: "col-4",
    inputType: "text",
    name: "From",
});

//toGovernment
const toGovernment = formInput({
    inputSize: "col-4",
    inputType: "text",
    name: "To",
});

//totalPeriod
const totalPeriod = formInput({
    inputSize: "col-4",
    inputType: "text",
    name: "Total Period",
    placeHolder: "Enter total years, month & days for service with schedule government",
});

//aggregateEmolument
const aggregateEmolument = formInput({
    inputSize: "col-4",
    inputType: "text",
    name: "Aggregate Pensionable Emoluments",
});