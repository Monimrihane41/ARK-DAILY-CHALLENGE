const XLSX = require('xlsx');

const excelFilePath = 'employee_data_.xlsx';
processExcelFile(excelFilePath);

// Function to calculate bonus based on annual salary
function calculateBonus(salary) {
    if (salary < 50000) {
        return 0.05;
    } else if (salary >= 50000 && salary <= 100000) {
        return 0.07;
    } else {
        return 0.1;
    }
}

// Function to read and process the Excel file
function processExcelFile(filePath) {
    const workbook = XLSX.readFile("employee_data_.xlsx");
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    // Add new columns for BonusPercentage and BonusAmount
    data[0].push('BonusPercentage', 'BonusAmount');
    console.log(data[0]);

    for (let i = 1; i < data.length; i++) {
        const annualSalary = data[i][1];
        const bonusPercentage = calculateBonus(annualSalary);
        const bonusAmount = annualSalary * bonusPercentage;
        data[i].push(bonusPercentage, bonusAmount);
    }

    const updatedWorksheet = XLSX.utils.aoa_to_sheet(data);
    const updatedWorkbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(updatedWorkbook, updatedWorksheet, 'Sheet1');

    // Save the updated workbook to a new file
    const outputFilePath = 'output.xlsx';
    XLSX.writeFile(updatedWorkbook, outputFilePath);

    console.log(`Bonus calculation completed. Output file saved as ${outputFilePath}`);
}

