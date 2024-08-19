document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const button = dropdown.querySelector('.dropdown__button');
        const options = dropdown.querySelectorAll('.dropdown__option');
        const text = dropdown.querySelector('.dropdown__text');
        const dropdownId = dropdown.getAttribute('data-dropdown-id');

        button.addEventListener('click', () => {
            dropdown.classList.toggle('dropdown--active');
        });

        options.forEach(option => {
            option.addEventListener('click', () => {
                const selectedText = option.querySelector('.dropdown__option-text').innerText;
                const selectedValue = option.getAttribute('data-value');
                text.innerText = selectedText;

                if (dropdownId === '1') {
                    document.title = `Document - ${selectedValue}`;
                } else if (dropdownId === '2') {
                    alert(selectedText);
                }

                dropdown.classList.remove('dropdown--active');
            });
        });

        document.addEventListener('click', (event) => {
            if (!dropdown.contains(event.target) && dropdown.classList.contains('dropdown--active')) {
                dropdown.classList.remove('dropdown--active');
            }
        });
    });
});