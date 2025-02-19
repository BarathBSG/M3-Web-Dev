//load all html inside body into body dynamically, wait for DOM tree loading to be complete
const TeamInfoBody = document.querySelector("#TeamInfoBody");

function loadContent(){
    let BodyContents = 
    `
    <header>
        <a href="index.html">
            <img src="UNSustainableGoals.png" alt="Sustainable Development Goals" id="HeaderImage">
        </a>
        <a id="hamburger">
            <i class="fa-solid fa-layer-group"></i>
        </a>
    </header>
    <nav id="mainNav">
        <ul class="mainNav">
            <li class="nav"><a href="index.html">Home</a></li>
            <li class="nav active"><a href="TeamInfo.html">Team Info</a></li>
            <li class="nav"><a href="signUp.html">Sign up</a></li>
            <li class="nav"><a href="UNGoal1.html">UN Goal 1</a></li>
            <li class="nav"><a href="UNGoal2.html">UN Goal 2</a></li>
            <li class="nav"><a href="UNGoal3.html">UN Goal 3</a></li>
        </ul>
    </nav>
    <main>
        <div class="Tabs">
            <input type="radio" id="Barath" checked="checked" name="tabs">
            <label id="tab1" for="Barath">Barath</label>
            <div class="tab">
                <img src="barath.png" alt="Team member - Barath Sathish" class="MemberPhotos">
                <h2>Barath Sathish</h2>
                <h3>Bio</h3>
                My name is Barath Sathish, I am taking Computing and Creative Technologies and I am a member of the Web Development group M3.
                 I am interested in working in the field of computer graphics, such as CFD analysis or 3d modelling.
                  I am proficient in Python and C#. I am learning Java, JavaScript and HTML, and I have taken an interest to and studied Computer Science from GCSE, through A-level, and now at degree-level.
                   This is my first time working on web-development, using JavaScript, html and css in unison. 
                <h3>Role in this project</h3>
                My role in this project has been coordinating meetings, keeping track of our workload and prioritising tasks, keeping our trello updated including uploading of files and 
                documentation, recording team sessions, creating and adhering to checklists and managing the pages assigned to me. 
                <h3>Responsibility</h3>
                I am responsible for the "Team Info" page, and the "UN Goal 2 - End Hunger" page in our project. 
                I have taken responsibility to keep the record of team meetings and documentation concerning all members up to date on our trello board, extending from my previous "roles" section.
                I am also responsible for handling personal information about our team members, 
                as the team info page contains data such as photos and a description. 
                <h3>Contributions</h3>
                I have contributed greatly to the documentation of our website project, as well as designing and programming the content of two pages.
                 I have also contributed to major design decisions of this, such as navigation placement, styling, colour scheme,
                  simplicity and usability.
            </div>

            <input type="radio" id="" name="tabs">
            <label id="tab2" for=""></label>
            <div class="tab">
                <img src=".png" alt="Team Member - " class="MemberPhotos">
                <h2></h2>
                <h3>Bio</h3>
                Hello My name is , I am currently taking Computing Sciences and I am a member of the Web Development Group M3. 
                I am interested in working within the field Cyber Security and Data Management. 
                I have knowledgeable experience within the Python and C# programming languages, while currently learning HTML, Java, and JS, with my first implementation of this within my Web Dev work. 
                <h3>Role in this project</h3>
                My role in this project has been developing my pages - The sign-up page and the UN Goal 1 page. I have also taken the role of managing our colour scheme,
                alongside directing our website's design cues, with the approval of my team.
                <h3>Responsibility</h3>
                As stated above, I am primarily responsible for the Sign-up page and the UN Goal 1 page. Furthermore, I am responsible for our website's backend server,
                as well as taking responsiblity for a sizeable amount of our website design.
                <h3>Contributions</h3>
                I have contributed greatly to the layout of our website as a whole - I am responsible for the design of our navigation bar, and for our
                colour-scheme oriented around blue, to match the UN, and to also be easy to read.
            </div>

            <input type="radio" id="Ryan" name="tabs">
            <label id="tab3" for="Ryan">Ryan</label>
            <div class="tab">
                <img src="ryan.png" alt="Team member - Barath Sathish" class="MemberPhotos">
                <h2>Ryan Shelley</h2>
                <h3>Bio</h3>
                I am Ryan Shelley; I am currently in the first year of my Computer Science course at UEA. 
                I am very interested in working in technology, choosing to study IT related subjects throughout GCSE, A level and now at university level. 
                This website is the first time I have had to implement JavaScript alongside HTML and CSS, which has been an interesting experience.  
                <h3>Role in this project</h3>
                I have been creating the pages assigned to me as well as meeting with my team members to collaborate and make sure our design and visions are consistent with one another.
                <h3>Responsibility</h3>
                I am responsible for the Home page of the website. 
                This is one of the most vital parts of the website, as it is likely the first page that users will interact with and get their first impressions of the site. 
                I have also developed a UN goal page informing people about gender equality.  
                <h3>Contributions</h3>
                I have been documenting my progress on Trello and collaborated with my team so that the website comes out as good as possible. 
                I have contributed 2 out of 6 pages visible on the website.  
            </div>
        </div>
    </main>

    <footer>
        <p>2023 M3 Web Design Project </p>
    </footer>
    `;
    console.log("JS loaded");
    TeamInfoBody.innerHTML = BodyContents;
}

window.addEventListener("DOMContentLoaded", loadContent(), false);