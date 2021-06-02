export class productService {
    async search(filter)
    {
        if (!filter)
        {
            return [];
        }

        // Aquí se llamaría al servicio REST real en el servidor
        const dataRequest = await fetch('json/data.json');
        const dataJson = await dataRequest.json();
        //console.log(dataJson);
        const products = dataJson.products;
        //console.log(products);

        let filtered = products.filter(p => p.productName.toLowerCase().indexOf(
            filter.toLowerCase()) !== -1);
        console.log(filtered);

        return filtered;
    }
}