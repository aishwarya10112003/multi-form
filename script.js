document.addEventListener('DOMContentLoaded', function () {
    const text1 = document.querySelector('.text1');
    const text2 = document.querySelector('.text2');
    const text3 = document.querySelector('.text3');
    const text4 = document.querySelector('.text4');
    const text5 = document.querySelector('.text5');

    const next1 = document.querySelector('#next1');
    const next2 = document.querySelector('#next2');
    const next3 = document.querySelector('#next3');
    const next4 = document.querySelector('#submit');
    const back2 = document.querySelector('#back2');
    const back3 = document.querySelector('#back3');
    const back4 = document.querySelector('#back4');

    const planItems = document.querySelectorAll('.plan-item');
    const addonCheckboxes = document.querySelectorAll('.addon-checkbox');
    const basePriceElement = document.getElementById('base-price');
    const totalPriceElement = document.getElementById('total-price');
    const addonSummaryElement = document.getElementById('addon-summary');
    const selectedPlanElement = document.getElementById('selected-plan');
    const totalLabelElement = document.getElementById('total-label');

    const yearlyToggle = document.getElementById('check');
    const arcadePrice = document.getElementById('arcadep');
    const advancedPrice = document.getElementById('Advancedp');
    const proPrice = document.getElementById('prop');

    let basePrice = 0;
    let selectedAddons = [];

    const prices = {
        arcade: { monthly: 9, yearly: 90 },
        advanced: { monthly: 12, yearly: 120 },
        pro: { monthly: 15, yearly: 150 }
    };
    
    

    function parsePrice(priceText) {
        const parsed = parseFloat(priceText.replace(/[^0-9.-]+/g, ""));
        return isNaN(parsed) ? 0 : parsed;
    }

    function updateAddonSummary() {
        addonSummaryElement.innerHTML = ''; 
        selectedAddons.forEach(addon => {
            const addonDiv = document.createElement('div');
            addonDiv.className = 'flex justify-between items-center';
            addonDiv.innerHTML = `
                <div class="text-gray-600">${addon.name}</div>
                <div class="text-indigo-600">+$${yearlyToggle.checked ? addon.price : (addon.price / 12).toFixed(2)}/${yearlyToggle.checked ? 'yr' : 'mo'}</div>
            `;
            addonSummaryElement.appendChild(addonDiv);
        });
    }

    function updateTotalPrice() {
        const addonsTotal = selectedAddons.reduce((sum, addon) => sum + addon.price, 0);
        const totalPrice = basePrice + (yearlyToggle.checked ? addonsTotal : addonsTotal / 12);
        totalPriceElement.textContent = yearlyToggle.checked ? `$${totalPrice}/yr` : `$${(totalPrice).toFixed(2)}/mo`;

        const totalSumElement = document.getElementById('total-price');
        totalSumElement.textContent = `Total: $${yearlyToggle.checked ? totalPrice : totalPrice.toFixed(2)}`;
        
    }

    function getPlanPrice(planId) {
        const isYearly = yearlyToggle.checked;
        return isYearly ? prices[planId].yearly : prices[planId].monthly;
    }

 
    planItems.forEach(item => {
        item.addEventListener('click', function () {
            planItems.forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');

            const planName = item.querySelector('p').textContent;
            selectedPlanElement.textContent = `${planName} (${yearlyToggle.checked ? 'Yearly' : 'Monthly'})`;

            const planId = item.id; 
            const planPrice = getPlanPrice(planId);

            console.log(planPrice)

            console.log(yearlyToggle.checked)

            basePrice = yearlyToggle.checked ? planPrice * 12 : planPrice;

            console.log(basePrice);

            basePriceElement.textContent = yearlyToggle.checked ? `$${basePrice}/yr` : `$${planPrice}/mo`;
            totalLabelElement.textContent = yearlyToggle.checked ? 'Total (per year)' : 'Total (per month)';
            updateTotalPrice();
        });
    });
    

  
    addonCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const addonPrice = parseInt(checkbox.getAttribute('data-price'));
            const addonText = checkbox.closest('.pick1, .pick2, .pick3').querySelector('h4').textContent;

            if (checkbox.checked) {
                selectedAddons.push({ name: addonText, price: addonPrice });
            } else {
                selectedAddons = selectedAddons.filter(addon => addon.name !== addonText);
            }

            updateAddonSummary();
            updateTotalPrice();
        });
    });

   function updatePrices() {
    if (yearlyToggle.checked) {
        arcadePrice.innerHTML = "$90/yr<br><span class='font-bold text-blue-950'>2 months free</span>";
        advancedPrice.innerHTML = "$120/yr<br><span class='font-bold text-blue-950'>2 months free</span>";
        proPrice.innerHTML = "$150/yr<br><span class='font-bold text-blue-950'>2 months free</span>";
    } else {
        arcadePrice.textContent = "$9/mo";
        advancedPrice.textContent = "$12/mo";
        proPrice.textContent = "$15/mo";
    }
}

    yearlyToggle.addEventListener('change', function () {
        
        updatePrices();

        const selectedPlan = document.querySelector('.plan-item.selected');
        if (selectedPlan) {
            const planId = selectedPlan.id; 
            const planPrice = getPlanPrice(planId);
            basePrice = yearlyToggle.checked ? planPrice * 12 : planPrice;
            basePriceElement.textContent = yearlyToggle.checked ? `$${basePrice}/yr` : `$${planPrice}/mo`;
            totalLabelElement.textContent = yearlyToggle.checked ? 'Total (per year)' : 'Total (per month)';
            updateTotalPrice();
        }

        // Update add-on prices
        updateAddonSummary();
    });

    updatePrices();

    next1.addEventListener('click', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('Email Address').value.trim();
        const number = document.getElementById('Number').value.trim();

        if (!name || !email || !number) {
            alert('Please fill out all fields.');
            return;
        }

        if (!/^\d{10}$/.test(number)) {
            alert('Please enter a valid 10-digit number.');
            return;
        }

        text1.classList.add('translate-x-full');
        text2.classList.remove('translate-x-full');
    });

    next2.addEventListener('click', function (e) {
        e.preventDefault();
        text2.classList.add('translate-x-full');
        text3.classList.remove('translate-x-full');
    });

    back2.addEventListener('click', function (e) {
        e.preventDefault();
        text2.classList.add('translate-x-full');
        text1.classList.remove('translate-x-full');
    });

    next3.addEventListener('click', function (e) {
        e.preventDefault();
        text3.classList.add('translate-x-full');
        text4.classList.remove('translate-x-full');
    });

    back3.addEventListener('click', function (e) {
        e.preventDefault();
        text3.classList.add('translate-x-full');
        text2.classList.remove('translate-x-full');
    });

    back4.addEventListener('click', function (e) {
        e.preventDefault();
        text4.classList.add('translate-x-full');
        text3.classList.remove('translate-x-full');
    });

    next4.addEventListener('click', function (e) {
        e.preventDefault();
        text4.classList.add('translate-x-full');
        text5.classList.remove('translate-x-full');
    });
});