export class App {
    main(){
        console.log('App is executing ...');

        // Anonymous function
        let demo1 = function () { console.log('Anonymous function!'); }
        demo1();

        // Arrow function
        let demo2 = () => console.log('Arrow function!');
        demo2();

        // Immediately Invoked Function Expression
        (function () { console.log('Function called as IIFE!'); })();
    }    
}