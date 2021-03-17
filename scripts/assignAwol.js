//fromAwol
const fromAwol = formInput({
    inputSize: "col-4",
    inputType: "text",
    name: "From",
});

//toAwol
const toAwol = formInput({
    inputSize: "col-4",
    inputType: "text",
    name: "To",
});

//totalAwolWithPay
const totalAwolWithPay = formInput({
    inputSize: "col-4",
    inputType: "text",
    name: "Total Month & Days",
    placeHolder: "Enter total month & days for Half-Pay-Leave",
});

//totalAwolWithoutPay
const totalAwolWithoutPay = formInput({
    inputSize: "col-4",
    inputType: "text",
    name: "Total Month & Days",
    placeHolder: "Enter total month & days for No-Pay-Leave",
});