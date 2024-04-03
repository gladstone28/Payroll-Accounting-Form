function addEmployee() {
    const originalEntry = document.querySelector('.employee-entry');
    const newEntry = originalEntry.cloneNode(true);
    newEntry.querySelectorAll('input').forEach(input => input.value = ''); // Clear values in the cloned entry
    document.querySelector('form').insertBefore(newEntry, document.querySelector('button[type="submit"]'));
}
