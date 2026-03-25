// Form Submission Handler
document.addEventListener('DOMContentLoaded', function() {
    const employeeForm = document.getElementById('employeeForm');
    
    if (employeeForm) {
        employeeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const department = document.getElementById('department').value;
            const position = document.getElementById('position').value;
            
            // Show success message
            alert('Employee contact saved successfully!\n\nName: ' + fullName + 
                  '\nEmail: ' + email + 
                  '\nPhone: ' + phone + 
                  '\nDepartment: ' + department + 
                  '\nPosition: ' + position);
            
            // Reset form
            employeeForm.reset();
        });
    }
});

// View Details Function
function viewDetails(name, email, phone, department, position) {
    const details = `Employee Details:\n\n` +
                    `Name: ${name}\n` +
                    `Email: ${email}\n` +
                    `Phone: ${phone}\n` +
                    `Department: ${department}\n` +
                    `Position: ${position}`;
    
    alert(details);
}

// Edit Contact Function
function editContact(name) {
    alert('Edit Contact: ' + name + '\n\nEdit functionality would open a form to update employee details.');
}

// Delete Contact Function
function deleteContact(name) {
    const confirmed = confirm('Are you sure you want to delete?');
    
    if (confirmed) {
        alert('Employee "' + name + '" has been deleted successfully.');
        // In a real application, you would remove the row from the table here
    }
}