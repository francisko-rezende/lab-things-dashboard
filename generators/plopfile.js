module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "What is the type of your component?",
        choices: ["atom", "molecule", "organism", "template"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of your component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/app/components/{{ type }}s/{{ pascalCase name }}/index.tsx",
        templateFile: "templates/index.ts.hbs",
      },
      {
        type: "add",
        path: "../src/app/components/{{ type }}s/{{ pascalCase name }}/{{ pascalCase name }}.tsx",
        templateFile: "templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/app/components/{{ type }}s/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "templates/Component.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/app/components/{{ type }}s/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "templates/Component.test.tsx.hbs",
      },
    ],
  });
};
