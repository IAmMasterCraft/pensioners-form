//input
const formInput = (propTypes = {
    inputSize: "col-4",
    inputType: "text",
    placeHolder: "",
}) => {
    return `
        <div class="${propTypes.inputSize}">
            <div class="form-group py-2">
                <label for="${propTypes.name.toLowerCase().replace(/ /g, "_")}">${propTypes.name}</label>
                <input 
                    type="${propTypes.inputType}" class="form-control" 
                    id="${propTypes.name.toLowerCase().replace(/ /g, "_")}" 
                    name="${propTypes.name.toLowerCase().replace(/ /g, "_")}"
                    placeholder="${(propTypes.placeHolder) ? propTypes.placeHolder : "Enter " + propTypes.name}"
                />
            </div>
        </div>
    `;
}

//select
const formSelect = (propTypes = {
    inputSize: "col-4",
    selectOptions: [1, 2, 3, 4],
}) => {
    let options = `<option value="">--Select One--</option>`;
    propTypes.selectOptions.forEach((option) => {
       options += `<option value="${option}">${option}</option>`;
    });
    return `
        <div class="${propTypes.inputSize}">
            <div class="form-group py-2">
                <label for="${propTypes.name.toLowerCase().replace(/ /g, "_")}">${propTypes.name}</label>
                <select class="form-control" id="${propTypes.name.toLowerCase().replace(/ /g, "_")}">
                    ${options}
                </select>
            </div>
        </div>
    `;
}

//checkbox
const formCheckBox = (propTypes = {
    inputSize: "col-4",
}) => {
    return `
        <div class="${propTypes.inputSize}">
            <div class="form-group checkbox py-2">
                <label for="${propTypes.name.toLowerCase().replace(/ /g, "_")}">
                    <input 
                        type="checkbox" 
                        class="form-control" 
                        id="${propTypes.name.toLowerCase().replace(/ /g, "_")}" 
                        name="${propTypes.name.toLowerCase().replace(/ /g, "_")}" 
                        value="${propTypes.name}"
                    />
                    ${propTypes.name}
                </label>
            </div>
        </div>
    `;
}

//radio
const formRadio = (propTypes = {
    inputSize: "col-4",
}) => {
    return `
        <div class="${propTypes.inputSize}">
            <div class="form-group radio py-2">
                <label for="${propTypes.name.toLowerCase().replace(/ /g, "_")}">
                    <input 
                        type="radio" 
                        class="form-control" 
                        id="${propTypes.name.toLowerCase().replace(/ /g, "_")}" 
                        name="${propTypes.name.toLowerCase().replace(/ /g, "_")}" 
                        value="${propTypes.name}"
                    />
                    ${propTypes.name}
                </label>
            </div>
        </div>
    `;
}

//textarea
const formTextarea = (propTypes = {
    inputSize: "col-4",
}) => {
    return `
        <div class="${propTypes.inputSize}">
            <div class="form-group py-2">
                <label for="${propTypes.name.toLowerCase().replace(/ /g, "_")}">
                    ${propTypes.name}
                </label>
                <textarea 
                    class="form-control" 
                    rows="5" 
                    id="${propTypes.name.toLowerCase().replace(/ /g, "_")}" 
                    name="${propTypes.name.toLowerCase().replace(/ /g, "_")}"
                    placeholder="${(propTypes.placeHolder) ? propTypes.placeHolder : "Enter " + propTypes.name}"></textarea>
            </div>
        </div>
    `;
}