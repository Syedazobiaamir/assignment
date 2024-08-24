"use strict";
class EnhancedLaptop {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    describe() {
        return `This ${this.make} ${this.model} laptop was released in ${this.year}.`;
    }
}
// Example usage:
const myLaptop = new EnhancedLaptop("Dell", "XPS 13", 2022);
console.log(myLaptop.describe()); // Output: "This Dell XPS 13 laptop was released in 2022."
function logHobbies(...hobbies) {
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}.`);
    });
}
// Example usage:
logHobbies('reading', 'painting', 'gardening');
const idealDayDescription = `
Today is my ideal day:
- Morning: I start with a peaceful yoga session to stretch and center myself.
- Afternoon: I spend time in nature, hiking through the forest trails, breathing in the fresh air.
- Evening: I relax with a good book by the fireplace, sipping on a cup of herbal tea.
`;
console.log(idealDayDescription);
// function calculateRectangleArea(length:number, width:number) {
//     return length * width;
// }
// const calculateRectangleArea = (length, width) => length * width;
const programmerSkills = {
    codingLanguages: ["JavaScript", "Python", "Java", "C++"],
    tools: ["Visual Studio Code", "Git", "Docker"],
    frameworks: ["React", "Node.js", "Django", "Spring Boot"]
};
const { codingLanguages, tools, frameworks } = programmerSkills;
const specificSkills = {
    language: codingLanguages[0],
    tool: tools[1],
    framework: frameworks[2]
};
console.log("Programming Languages:", specificSkills.language);
console.log("Tools:", specificSkills.tool);
console.log("Frameworks:", specificSkills.framework);
// Original mixed list containing different types of items
const mixedList = [1, "apple", true, "banana", 42, "cherry", false];
// Use filter to create a new list containing only strings
const stringList = mixedList.filter((item) => typeof item === "string");
console.log("Mixed List:", mixedList);
console.log("String List:", stringList);
