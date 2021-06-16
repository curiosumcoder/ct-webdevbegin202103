export class productService {
    products = null;

    async init()
    {
        // Aquí se llamaría al servicio REST real en el servidor
        const dataRequest = await fetch('/json/data.json');
        const dataJson = await dataRequest.json();
        //console.log(dataJson);
        this.products = dataJson.products;
    }

    async find(id)
    {
        if (!this.products) {
            await this.init();
        }
        let offers = this.products.filter(p => p.id == id);
        return offers.length > 0 ? offers[0] : {};
    }

    async search(filter)
    {
        if (!this.products) {
            await this.init();
        }

        if (!filter)
        {
            return [];
        }

        //console.log(this.products);

        let filtered = this.products.filter(p => p.productName.toLowerCase().indexOf(
            filter.toLowerCase()) !== -1);
        console.log(filtered);

        return filtered;
    }

    async offer()
    {
        if (!this.products) {
            await this.init();
        }

        let id = ((min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
        })(1,77); 

        let offers = this.products.filter(p => p.id === id);

        return offers.length > 0 ? offers[0] : {};
    }
}