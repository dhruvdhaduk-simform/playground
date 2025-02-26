import { consola } from 'consola';

consola.info("Hello, World. This is consola");

consola.start("Building project...");
consola.success("Project built!");

consola.warn("This is a warning.");

consola.error(new Error("This is an example error. Everything is fine!"));

consola.box("I am a simple box");

await consola.prompt("Deploy to the production?", {
  type: "confirm",
});

await consola.prompt("What is your name ?", {
    type: 'text'
});

await consola.prompt("What is your gender ?", {
    type: 'select',
    options: ["Male", "Female"]
});

await consola.prompt("Which cities you have visited ?", {
    type: 'multiselect',
    options: ["Ahmedabad", "Surat", "Junagadh", "Rajkot"]
});