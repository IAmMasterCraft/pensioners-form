//fullnames
const fullNames = formInput({
    inputSize: "col-4",
    inputType: "text",
    name: "Full Names",
    placeHolder: "Enter Full Names, Surname first",
});

//decorations
const decorations = formInput({
    inputSize: "col-4",
    inputType: "text",
    name: "Decorations",
    placeHolder: "Enter Decorations",
});

//maritalStatus
const maritalStatus = formSelect({
    inputSize: "col-4",
    name: "Marital Status",
    selectOptions: ["Single", "Married"],
});

//dateOfBirth
const dateOfBirth = formInput({
    inputSize: "col-4",
    inputType: "date",
    name: "Date Of Birth",
    placeHolder: "Select Date Of Birth",
});

//qualifications
const qualifications = formInput({
    inputSize: "col-4",
    inputType: "text",
    name: "Qualifications",
    placeHolder: "Enter Educational, Professional or Other Special Qualifications",
});

//nationality
const nationality = formInput({
    inputSize: "col-4",
    inputType: "text",
    name: "Nationality",
});

//homePlace
const homePlace = formInput({
    inputSize: "col-4",
    inputType: "text",
    name: "Home Place",
});

//language
const language = formInput({
    inputSize: "col-4",
    inputType: "text",
    name: "Language",
    placeHolder: "Enter details or language with which conversant",
});

//appointmentDate
const appointmentDate = formInput({
    inputSize: "col-4",
    inputType: "date",
    name: "Date Of Appointment",
    placeHolder: "Select Date Of Appointment",
});

//pensionableAppointmentDate
const pensionableAppointmentDate = formInput({
    inputSize: "col-4",
    inputType: "date",
    name: "Date Of Pensionable Appointment",
    placeHolder: "Select date confirmed in a pensionable appointment and gazette particulars",
});