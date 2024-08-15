document.addEventListener('DOMContentLoaded', function () {
    var text1 = document.querySelector(".text1");
    var text2 = document.querySelector(".text2");
    var form = document.getElementById('form');

    form.addEventListener('submit', function (event) {
        // Get form fields
        const name = document.getElementById('name');
        const email = document.getElementById('Email Address');
        const number = document.getElementById('Number');

        // Check if all fields are filled
        if (!name.value || !email.value || !number.value) {
            event.preventDefault();
            alert('Please fill out all fields.');
            return;
        }

        // Check if the number is exactly 10 digits
        const numberPattern = /^\d{10}$/;
        if (!numberPattern.test(number.value)) {
            event.preventDefault();
            alert('Please enter a valid 10-digit number.');
            return;
        }

        // Debugging Logs
        console.log('All validations passed. Proceeding to next step.');

        // If validation passes, proceed to the next step
        text1.classList.add("translate-x-full"); // Move text1 off-screen to the right
        text2.classList.remove("translate-x-full"); // Bring text2 on-screen from the right
        
        // Remove the translate-x-full class from text1 and add translate-x-0 to ensure it will not overlap
        text1.classList.remove("translate-x-0");
        text2.classList.add("translate-x-0");

        // Prevent default form submission
        event.preventDefault();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('check');
    const arcadep = document.getElementById('arcadep');
    const advancedp = document.getElementById('Advancedp');
    const prop = document.getElementById('prop');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            // Update text when checked
            arcadep.innerHTML = '$90/mo <br><span class="text-blue-950 font-bold">2 months free</span>';
            advancedp.innerHTML = '$120/mo <br><span class="text-blue-950 font-bold">2 months free</span>';
            prop.innerHTML = '$150/mo <br><span class="text-blue-950 font-bold">2 months free</span>';
        } else {
            // Revert text when unchecked
            arcadep.innerHTML = '$9/mo';
            advancedp.innerHTML = '$12/mo';
            prop.innerHTML = '$15/mo';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const planItems = document.querySelectorAll('.plan-item');

    function selectPlan(event) {
        // Remove the selected class from all items
        planItems.forEach(item => item.classList.remove('selected'));

        // Add the selected class to the clicked item
        event.currentTarget.classList.add('selected');
    }

    // Add click event listeners to all plan items
    planItems.forEach(item => item.addEventListener('click', selectPlan));
});
document.addEventListener('DOMContentLoaded', function () {
    const text1 = document.querySelector('.text1');
    const text2 = document.querySelector('.text2');
    const text3 = document.querySelector('.text3');
    const text4 = document.querySelector('.text4');

    const next2 = document.querySelector('#next2');
    const back2 = document.querySelector('#back2');
    const next3 = document.querySelector('#next3');
    const back3 = document.querySelector('#back3');
    const back4 = document.querySelector('#back4');
    const submit = document.querySelector('#submit');

    // Ensuring only the first section is visible initially
    text1.classList.add('translate-x-0');
    text2.classList.add('translate-x-full');
    text3.classList.add('translate-x-full');
    text4.classList.add('translate-x-full');

    // Click next2 to go from text1 to text2
    next2.addEventListener('click', function (e) {
        e.preventDefault();
        text1.classList.add('translate-x-full');
        text2.classList.remove('translate-x-full');
        text3.classList.add('translate-x-full');
        text4.classList.add('translate-x-full');
    });

    // Click back2 to go from text2 to text1
    back2.addEventListener('click', function (e) {
        e.preventDefault();
        text1.classList.remove('translate-x-full');
        text2.classList.add('translate-x-full');
    });

    // Click next3 to go from text2 to text3
    next3.addEventListener('click', function (e) {
        e.preventDefault();
        text2.classList.add('translate-x-full');
        text3.classList.remove('translate-x-full');
        text4.classList.add('translate-x-full');
    });

    // Click back3 to go from text3 to text2
    back3.addEventListener('click', function (e) {
        e.preventDefault();
        text2.classList.remove('translate-x-full');
        text3.classList.add('translate-x-full');
    });

    // Click next4 to go from text3 to text4
    next4.addEventListener('click', function (e) {
        e.preventDefault();
        text3.classList.add('translate-x-full');
        text4.classList.remove('translate-x-full');
    });

    // Click back4 to go from text4 to text3
    back4.addEventListener('click', function (e) {
        e.preventDefault();
        text3.classList.remove('translate-x-full');
        text4.classList.add('translate-x-full');
    });

    // Optional: Handle form submission
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        alert('Form submitted!');
    });
});
