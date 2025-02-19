const UNGoal2Body = document.querySelector("#UNGoal2Body");

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
            <li class="nav"><a href="TeamInfo.html">Team Info</a></li>
            <li class="nav"><a href="signUp.html">Sign up</a></li>
            <li class="nav"><a href="UNGoal1.html">UN Goal 1</a></li>
            <li class="nav active"><a href="UNGoal2.html">UN Goal 2</a></li>
            <li class="nav"><a href="UNGoal3.html">UN Goal 3</a></li>
        </ul>
    </nav>
    <div class="ScrollingText">In 2022, an estimated 45 million children under the age of 5 suffered from wasting
        | In 2022, approx. 735 million people – 9.2% of the world’s population – found themselves in a state of chronic hunger
        | In 2022, estimated 2.4 billion people faced moderate to severe food insecurity
        | 2 billion people in the world do not have regular access to safe, nutritious and sufficient food
        | In 2022, 148 million children had stunted growth
        | projected that more than 600 million people worldwide will be facing hunger in 2030
        | world is back at hunger levels not seen since 2005
    </div>
    <main>
        <h2>Zero Hunger</h2>
        <div>
            <div id="EndHungerImgContainer">
            <!--<img src="EndHunger.png" alt="End Hunger" id="EndHungerPhoto"></img>-->
            </div>
            <h3 id="UNGoal2Header">How the UN plans to tackle Zero Hunger</h3>
            <p id="UNGoal2Desc">Goal 2 is about creating a world free of hunger by 2030. The global issue of hunger and food insecurity has shown an alarming increase since 2015, a trend exacerbated by a combination of factors including the pandemic, conflict, climate change, and deepening inequalities.</p>
            <p>
            By 2022, approximately 735 million people – or 9.2% of the world’s population – found themselves in a state of chronic hunger – a staggering rise compared to 2019. This data underscores the severity of the situation, revealing a growing crisis.
            </p>
            <p>
            In addition, an estimated 2.4 billion people faced moderate to severe food insecurity in 2022. This classification signifies their lack of access to sufficient nourishment. This number escalated by an alarming 391 million people compared to 2019.
            </p>
            <p>
            The persistent surge in hunger and food insecurity, fueled by a complex interplay of factors, demands immediate attention and coordinated global efforts to alleviate this critical humanitarian challenge.
            </p>
            <p>
            Extreme hunger and malnutrition remains a barrier to sustainable development and creates a trap from which people cannot easily escape. Hunger and malnutrition mean less productive individuals, who are more prone to disease and thus often unable to earn more and improve their livelihoods.
            </p>
            <p>
            2 billion people in the world do not have regular access to safe, nutritious and sufficient food. In 2022, 148 million children had stunted growth and 45 million children under the age of 5 were affected by wasting.
            </p>
            <h4>How many people are hungry?</h4>
            <p>
            It is projected that more than 600 million people worldwide will be facing hunger in 2030, highlighting the immense challenge of achieving the zero hunger target.
            </p>
            <p>
            People experiencing moderate food insecurity are typically unable to eat a healthy, balanced diet on a regular basis because of income or other resource constraints.
            </p>
            <h4>Why are there so many hungry people?</h4>
            <p>
                Shockingly, the world is back at hunger levels not seen since 2005, and food prices remain higher in more countries than in the period 2015–2019. Along with conflict, climate shocks, and rising cost of living, civil insecurity and declining food production have all contributed to food scarcity and high food prices.
                </p>
                <p>
                Investment in the agriculture sector is critical for reducing hunger and poverty, improving food security, creating employment and building resilience to disasters and shocks.
            </p>
            <h4>Why should I care?</h4>
            <p>
            We all want our families to have enough food to eat what is safe and nutritious. A world with zero hunger can positively impact our economies, health, education, equality and social development.
            </p>
            <p>
            It’s a key piece of building a better future for everyone. Additionally, with hunger limiting human development, we will not be able to achieve the other sustainable development goals such as education, health and gender equality.
            </p>
            <h4>How can we achieve Zero Hunger?</h4>
            <p>
                Food security requires a multi-dimensional approach – from social protection to safeguard safe and nutritious food especially for children to transforming food systems to achieve a more inclusive and sustainable world.
                There will need to be investments in rural and urban areas and in social protection so poor people have access to food and can improve their livelihoods.
            </p>
            <h4>What can we do to help?</h4>
            <p>
            You can make changes in your own life—at home, at work and in the community—by supporting local farmers or markets and making sustainable food choices, supporting good nutrition for all, and fighting food waste.
            </p>
            <p>
            You can also use your power as a consumer and voter, demanding businesses and governments make the choices and changes that will make Zero Hunger a reality. Join the conversation, whether on social media platforms or in your local communities.
            </p>
            </div>
    </main>
    `;
    console.log("JS loaded");
    UNGoal2Body.innerHTML = BodyContents;
}

window.addEventListener("DOMContentLoaded", loadContent(), false);