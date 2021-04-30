var MyExtension = function () {
};

MyExtension.prototype.getInfo = function () {
    return {
    id: "test",
    name: "Test"
}}

ExampleExtension.prototype.alert = function () {
    alert("Hello from extension!");
};

Scratch.extensions.register(new MyExtension());
