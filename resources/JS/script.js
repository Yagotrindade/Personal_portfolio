const projects = [
    { button: 'project-1', paragraph: 'first-paragraph', image: 'project-1-image', label: 'Encore' },
    { button: 'project-2', paragraph: 'second-paragraph', image: 'project-2-image', label: 'Photomatic' },
    { button: 'project-3', paragraph: 'third-paragraph', image: 'project-3-image', label: 'Style Guide' }
];

function toggleProject(index) {
    projects.forEach((project, i) => {
        const paragraph = document.getElementById(project.paragraph);
        const image = document.getElementById(project.image);
        const button = document.getElementById(project.button);
        const isActive = i === index;
        
        paragraph.style.color = isActive ? 'black' : 'transparent';
        image.style.display = isActive ? 'block' : 'none';
        button.innerHTML = isActive ? `V ${project.label}` : `> ${project.label}`;
    });
}

projects.forEach((project, index) => {
    document.getElementById(project.button).addEventListener('click', () => toggleProject(index));
});
