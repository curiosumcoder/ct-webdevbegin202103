document.addEventListener('DOMContentLoaded', function (params) {
    console.log('DOM loaded!');

    // JSON, JavaScript Object Notation
    // Servicios REST (API)
    // DOM API
    // document.querySelectorAll('ul')
    // Boolean(null)
    // ! -> operador de negación
    const form = document.querySelector('main > form');
    console.log(form);
    // Si el elemento form existe
    if (form) {
        form.addEventListener('submit', async function (event) {
            event.preventDefault();
            console.log('Submiting ...');

            // AJAX, Asyncronous JavaScript & XML
            // XmlHttpRequest
            // Fetch API
            // Promises API
            const filter = iSearch.value;

            if (filter !== '') {            
                const dataRequest = await fetch('json/data.json');
                const dataJson = await dataRequest.json();
                //console.log(dataJson);
                const products = dataJson.products;
                //console.log(products);

                let filtered = products.filter(p => p.productName.toLowerCase().indexOf(
                    filter.toLowerCase()) !== -1);
                console.log(filtered);

                if (filtered.length > 0) {
                    // Se procede a crear el HTML
                    lResults.innerHTML = '';
                    filtered.forEach(p => {
                            const li = document.createElement('li');
                            li.classList.add('list-group-item');
                            const a = document.createElement('a');
                            a.classList.add('row');    
                            a.classList.add('align-items-center'); 
                            a.setAttribute('href',`detail.html?id=${p.id}`);
                            //li.innerHTML = p.productName;
    
                            let pr = document.createElement('p');
                            pr.classList.add('col-8');
                            pr.innerHTML = p.productName;
                            pr.innerHTML += `<br/><small>${p.category.categoryName}</small>`;
                            a.appendChild(pr);

                            let pr2 = document.createElement('p');
                            pr2.classList.add('col-3');
                            pr2.innerText = `$ ${p.unitPrice}`;
                            a.appendChild(pr2);

                            let pr3 = document.createElement('p');
                            pr3.classList.add('col-1');
                            //pr3.innerText = '>';
                            pr3.innerHTML = '<i class="bi bi-chevron-double-right"></i>';
                            a.appendChild(pr3);

                            li.appendChild(a);
    
                            lResults.appendChild(li);
                    });
                }
            }
        });
    }
});