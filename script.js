function showPrimarkDuties(){
    let duties = [
        "Greeted Customers",
        "Helped with purchases",
        "Operated Cash Register",
        "Operated Fitting Rooms",
        "Replenished inventory on the floor",
        "Handled customers' questions"
    ];

    let num = parseInt(document.getElementById("primarkInput").value);
    let index = num - 1;
    let output = "";

    while (index >= 0) {
        output += duties[index] + "<br>";
        index--;
    }

    document.getElementById("primarkOutput").innerHTML = output;
}

function showHerschelDuties() {
    let duties = [
        "Operated Cash Registers",
        "Managed Inventory & Stock Room",
        "Provided Customer Service",
        "Maintained Visual Merchandising Standards",
        "Collaborated with Team Members"
    ];

    let num = parseInt(document.getElementById("herschelInput").value);
    let index = num - 1;
    let output = "";

    while (index >= 0) {
        output += duties[index] + "<br>";
        index --;
    }

    document.getElementById("herschelOutput").innerHTML = output;
}

function evaluateSalary() {
    let salary = parseFloat(document.getElementById("expectedSalary").value);
    let comment;

    if (salary < 25000) {
        comment = "The salary is too little";
    } else if (salary >= 25000 && salary < 30000) {
        comment = "The salary is almost good enough. We should negotiate.";
    } else {
        comment = "This salary is great";
    }

    document.getElementById("salaryComment").innerHTML = comment;
}

function calculateSalary() {
    var hourlyWage = parseFloat(document.getElementById("hourlyWage").value);
    var hoursPerWeek = parseFloat(document.getElementById("hoursPerWeek").value);
    var annualSalary = hourlyWage * hoursPerWeek * 52;
    document.getElementById("salaryOutput").innerHTML = "Your estimated annual salary is $" + annualSalary.toFixed(2);
}
