const $ = node => document.querySelector(node);

const enable_modal = () => {
  const modal = $('.modal');
  const activate_modal = $('.add_new');
  const span = $('.close_modal');

  activate_modal.onclick = () => modal.style.display = "block";
  span.onclick = () => modal.style.display = "none";
  window.onclick = event => {
    if (event.target === modal) modal.style.display = "none";
  }
}
enable_modal();
const projects = $('.projects');

const add_project = () => {

  project_name = $('#project_name');
  project_link = $('#project_link');
  project_description = $('#project_description');

  //alert('eff')
  //const b = "border: 1px solid #509fbe;margin: 2bw auto;border-radius: 5px;padding: 20px;line-height: 2em;display: flex;flex-flow: column wrap;justify-content: center;"
  
  let a = `
    <div>
      <p>Project Name: ${project_name.value}</p>
      <p>Project link: <a href = ${project_link}>${project_link.value}</a></p>
      <p>Project Description: ${project_description.value}</p>
    </div>
  `
  //a.classList.add('projects_div_class');
  projects.innerHTML += a;
}
$('#add_to_projects').onclick = add_project;